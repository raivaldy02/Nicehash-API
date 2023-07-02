import requests
import json
import time
from api import getProfitability

r = requests.Session()

otentikasi = requests.auth.HTTPDigestAuth('root', 'root')

api = {
    'getMinerStatus' : 'get_miner_status.cgi',
    'getNetworkInfo' : 'get_network_info.cgi',
    'getMinerStats' : 'miner_stats.cgi'
}

def isJson(myjson) : 
    try:
        json.loads(myjson)
    except ValueError as e:
        return False
    return True

def dictConversion(mystr) : 
    return dict( (a.strip(), b.strip()) for a, b in (element.split('=') for element in mystr.split(',')) )

while True :
    # start_time = time()
    for i in range(0,31) :
        try:
        # print(i,end='\n'
            URLminerStatus = 'http://192.168.1.{}/cgi-bin/{}'.format(i,api['getMinerStatus'])
            URLnetworkInfo = 'http://192.168.1.{}/cgi-bin/{}'.format(i,api['getNetworkInfo'])
            URLminerStats = 'http://192.168.1.{}/cgi-bin/{}'.format(i,api['getMinerStats'])

            try :
                minerStatus = r.get(URLminerStatus,auth = otentikasi,timeout=1).json()
            except :
                continue

            networkInfo = r.get(URLnetworkInfo,auth = otentikasi).json()
            minerStats = r.get(URLminerStats,auth = otentikasi).json() if isJson(r.get(URLminerStats,auth = otentikasi).content) else ''


            status = {
                'antMiner' : networkInfo['conf_hostname'].split('-')[1],
                'Elapsed' : minerStatus['summary']['elapsed'],
                'GH/S(RT)' : minerStatus['summary']['ghs5s'],
                'GH/S(avg)' : minerStatus['summary']['ghsav'],
                'Temp' : '',
                'IpAddress' : '192.168.1.{}'.format(i),
            }
            #print(f"{status['antMiner']} {i}")


            try :
                for temp in minerStats['STATS'][1] :
                    if 'temp_chip' in temp:
                        validasiTemp = str(minerStats['STATS'][1][temp][0]).isdigit()
                        status['Temp'] += minerStats['STATS'][1][temp] + ',' if validasiTemp else '' #Temp(Chip2)

                status['Temp'] = status['Temp'][:-1]
            except :
                try :
                    temp = minerStatus['devs'][0]['freq']
                    sub_temp = temp[temp.index('temp_num='):temp.index('freq_')-1]
                    for temperature in dictConversion(sub_temp) :
                        if 'temp2_' in temperature :
                            validasiTemp = str(dictConversion(sub_temp)[temperature][0]).isdigit() and str(dictConversion(sub_temp)[temperature][0]) != '0'
                            status['Temp'] += dictConversion(sub_temp)[temperature] + ',' if validasiTemp else '' #temp2_

                    status['Temp'] = status['Temp'][:-1]
                except :
                    continue
            #if (status['antMiner'] == '14') : 
                #continue
        
            if (status['antMiner'] in ['15','6','4','13','9']) :
                try :
                    profit = getProfitability(status['antMiner'])
                    # print(profit)
                    if profit == '0.0000000000' and int(status['Elapsed']) >= 600 :
                        waktu = time.localtime()
                        print(f'Hit Restart ! antMiner-{status["antMiner"]} {waktu.tm_hour}:{waktu.tm_min}:{waktu.tm_sec}')
                        r.get('http://192.168.1.{}/cgi-bin/reboot.cgi?_='.format(i),auth = otentikasi )
                except :
                    continue
        except:
            continue
            # print(status)

        # print('waktu pengkesekusian : {}'.format(int( time() - start_time) ) )
    time.sleep(10)

# except : 
    # continue
