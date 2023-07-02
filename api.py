import requests
from datetime import *
from time import *
import uuid
from hashlib import sha256 
import hmac



def get_epoch_ms_from_now() :
    now = datetime.now()
    now_ec_since_epoch = mktime(now.timetuple()) + now.microsecond / 1000000.0
    return int(now_ec_since_epoch * 1000)

def getProfitability(id) :
    method = 'GET'
    path = '/main/api/v2/mining/rig2/{}'.format(id)
    query = ''
    body = None
    api_key = 'a9986acd-90aa-4fd7-9cde-17f62c9d81b4'
    secret_key = '7257867e-9226-4a1c-b4b0-0adc147649d7cc50b623-509f-411f-b56b-f0aaf95b43a0'
    organization_id = '17d4a18a-4cf2-466b-ba56-d9d8d5a18148'
    host = 'https://api2.nicehash.com'
    verbose = False

    xtime = get_epoch_ms_from_now()
    xnonce = str(uuid.uuid4())

    message = bytearray(api_key, 'utf-8')
    message += bytearray('\x00', 'utf-8')
    message += bytearray(str(xtime), 'utf-8')
    message += bytearray('\x00', 'utf-8')
    message += bytearray(xnonce, 'utf-8')
    message += bytearray('\x00', 'utf-8')
    message += bytearray('\x00', 'utf-8')
    message += bytearray(organization_id, 'utf-8')
    message += bytearray('\x00', 'utf-8')
    message += bytearray('\x00', 'utf-8')
    message += bytearray(method, 'utf-8')
    message += bytearray('\x00', 'utf-8')
    message += bytearray(path, 'utf-8')
    message += bytearray('\x00', 'utf-8')
    message += bytearray(query, 'utf-8')

    digest = hmac.new(bytearray(secret_key, 'utf-8'), message, sha256).hexdigest()
    xauth = api_key + ":" + digest

    headers = {
        'X-Time': str(xtime),
        'X-Nonce': xnonce,
        'X-Auth': xauth,
        'Content-Type': 'application/json',
        'X-Organization-Id': organization_id,
        'X-Request-Id': str(uuid.uuid4())
    }

    s = requests.Session()
    s.headers = headers
    url = host + path
    respon = s.request(method,url).json()

    return '{0:.10f}'.format(float(respon['profitability']))

    # print('{0:.10f}'.format(float(status_code.json()['profitability'] ) ) )
