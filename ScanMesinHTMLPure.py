from requests_html import HTMLSession
import bs4
import time
from requests import auth

r = HTMLSession()

otentikasi = auth.HTTPDigestAuth('root', 'root')

def EkstrakAngka(teks) :
    return  ''.join([ str(s)+' ' for s in teks.split(' ') if s.isdigit()])
    # return  [ int(s) for s in teks.split(' ') if s.isdigit()]

Mesin = r.get('http://192.168.1.12/cgi-bin/minerStatus.cgi',auth = otentikasi,timeout=1.5).json()
print(Mesin)

for i in range(0,2) :
    try : 
        Mesin = r.get('http://192.168.1.2/cgi-bin/minerStatus.cgi'.format(i),auth = otentikasi,timeout=1.5)
        # print(Mesin)

        minerStatus = bs4.BeautifulSoup(Mesin.content,'html.parser')

        TemperaturS9 = ''.join(bs4.BeautifulSoup(str(minerStatus.select('div[id*="cbi-table-1-temp"]')),'html.parser').text.split(','))
        
        # print(minerStatus.select('tr[class*="cbi"]'))
        # print(Mesin.html.render(sleep=16))
        print(Mesin.html.html)
        # for temp in minerStatus.select('tr[class*=cbi-section-table-row]') :
        

        TemperaturS9K = minerStatus.select('td[class*=""]')
        print()
        status = {
            'antMiner' : i,
            'Elapsed' : minerStatus.find('div',attrs={'id' : 'ant_elapsed'}).text,
            'GH/S(RT)' : minerStatus.find('div',attrs={'id' : 'ant_ghs5s'}).text,
            'GH/S(avg)' : minerStatus.find('div',attrs={'id' : 'ant_ghsav'}).text,	
            'Temp(Chip2)' : EkstrakAngka(TemperaturS9K) if not TemperaturS9 else EkstrakAngka(TemperaturS9)
        }
        
    except : 
        continue
