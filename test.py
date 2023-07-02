import requests
import time
r = requests.Session()

otentikasi = requests.auth.HTTPDigestAuth('root', 'root')

x = r.get('http://192.168.1.15/cgi-bin/reboot.cgi?_=',auth=otentikasi)
print(x)