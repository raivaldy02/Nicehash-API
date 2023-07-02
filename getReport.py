import requests
from datetime import *
from time import *
import uuid
from hashlib import sha256 
import hmac

jam_tutupbuku = ['7','11','15','19','23','3']

def get_epoch_ms_from_now() :
    now = datetime.now()
    now_ec_since_epoch = mktime(now.timetuple()) + now.microsecond / 1000000.0
    return int(now_ec_since_epoch * 1000)

def get_data(end_point,query='') :
    method = 'GET'
    path = end_point
    query = query
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

    if query != '':
            url += '?' + query

    return s.request(method,url).json()

getHargaBTC = get_data('/main/api/v2/accounting/accounts2',query = 'extendedResponse=true&fiat=IDR')
HargaBTC = getHargaBTC['currencies'][0]['fiatRate']

Pemasukan = {
    'jam' : '11:00:00',
    'Mesin' : '',
    'Pendapatan-Mesin' : ''
}

total = 0
for i in range(1,19) :
    #mulai di jam berapa (AfterTimeStamp)
    #akhir nya di jam berapa (BeforeTimeStamp)
    """contoh mau ambil di jam 7 malem berarti mulai di jam 7-4 = 3 mulai di jam = 3 akhir di jam = 7"""

    getReport = get_data('/main/api/v2/mining/rig/stats/unpaid',query = 'rigId={}&afterTimestamp=1661428800000&beforeTimestamp=1661443200000'.format(i))
    unpaidamount = float('{0:.10f}'.format(getReport['data'][0][3])) * HargaBTC
    Pemasukan['Mesin'] = 'antMiner-{}'.format(i)
    Pemasukan['Pendapatan-Mesin'] = f'Rp.{int(unpaidamount)}'
    total += int(unpaidamount)
    print(str(Pemasukan).replace("'",'').replace("{",'').replace("}",''))
print('Di Jam ' + Pemasukan['jam'] + ' Total Pendapatan Rp.' + str(total))
