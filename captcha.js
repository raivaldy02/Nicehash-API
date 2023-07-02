// ==UserScript==
// @name       Bypass All Shortlinks
// @name:id    Bypass Semua Shortlink
// @name:ug    Bypass بارلىق قىسقا ئۇلىنىشلار
// @name:ar    تجاوز الجميع الروابط المختصرة
// @name:he    לַעֲקוֹף את כל קישורים קצרים
// @name:hi    सभी शॉर्टलिंक को बायपास करें
// @name:ja    バイパス 全て ショートリンク
// @name:zh-CN 旁路 全部 短链接
// @name:zh-TW 旁路 全部 短鏈接
// @name:pt-BR Bypass Todos Links curtos
// @name:fr-CA Bypass Tout Lien courts
// @name:fr    Bypass Tout Lien courts
// @name:ko    모든 짧은 링크 우회
// @name:th    บายพาส ทั้งหมด ลิงค์สั้น
// @name:bg    Заобикаляне на всички кратки връзки
// @name:ro    Bypass Toate Linkuri scurte
// @name:fi    Ohittaa Kaikki Lyhyet linkit
// @name:it    Bypassare Tutto Collegamenti brevi
// @name:el    Παράκαμψη Ολα Σύντομοι σύνδεσμοι
// @name:eo    Pretervojo Ĉiuj Mallongaj ligiloj
// @name:es    Saltarse Todos los Enlaces Acortados
// @name:hu    Bypass Összes Rövid linkek
// @name:nb    Omgå Alle Kortlenker
// @name:sk    Obísť Všetky Krátke odkazy
// @name:sv    Förbigå alla kortlänkar
// @name:sr    Zaobići Sve Kratke veze
// @name:pl    Bypass Wszystkie Krótkie linki
// @name:nl    Bypass Alle Korte links
// @name:de    Bypass Alle Kurzlinks
// @name:da    Bypass Alle Shortlinks
// @name:cs    Bypass Všechno Krátké odkazy
// @name:uk    Обхід всі Короткі посилання
// @name:ru    Обход Все Короткие ссылки
// @name:tr    Bypass Tüm Kısa Linkler
// @name:vi    Bỏ qua Tất cả Các liên kết ngắn
// @namespace  Violentmonkey Scripts
// @version    29.1
// @grant      none
// @author     NULL
// @run-at     document-start
// @antifeature    tracking
// @description    Bypass All Shortlinks Sites Automatically Skips Annoying Link Shorteners , Skip AdFly , Linkvertise and No Annoying Ads, Directly to Your Destination, and now Support Auto Downloading Your Files
// @description:id Bypass Semua Situs Shortlink Secara Otomatis Langsung ke Tujuan Tanpa Iklan yang Mengganggu , Support Auto Download File
// @description:ug بارلىق قىسقا ئۇلىنىش تور بېكەتلىرىنى ئايلىنىپ ئۆتۈپ ، كىشىنى بىزار قىلىدىغان ئۇلىنىش قىسقارتقۇچنى ئاپتوماتىك ھالدا مەنزىلىڭىزگە ئاتلاڭ.
// @description:ar تجاوز جميع مواقع الروابط المختصرة يتخطى تلقائيًا أدوات تقصير الروابط المزعجة ، مباشرة إلى وجهتك
// @description:he עוקף את כל אתרי הקישורים הקצרים מדלג אוטומטית על מקצרי קישורים מעצבנים, ישירות ליעד שלך
// @description:hi सभी शॉर्टलिंक साइटों को बायपास करें, सीधे आपके गंतव्य पर कष्टप्रद लिंक शॉर्टनर को छोड़ दें
// @description:ja すべてのショートリンクサイトをバイパスすると、迷惑なリンクショートナーが自動的にスキップされ、宛先に直接送信されます
// @description:fr Contourner tous les sites de liens courts saute automatiquement les raccourcisseurs de liens gênants, directement vers votre destination
// @description:ko 모든 짧은 링크 사이트 우회는 성가신 링크 단축기를 자동으로 건너뛰고 목적지로 직접 이동합니다.
// @description:th ข้ามไซต์ลิงค์สั้นทั้งหมดข้ามลิงค์ย่อที่น่ารำคาญโดยอัตโนมัติไปยังปลายทางของคุณ
// @description:bg Заобикаляне на всички сайтове с кратки връзки Автоматично пропуска досадните средства за съкращаване на връзки, директно до вашата дестинация
// @description:ro Omite toate site-urile cu linkuri scurte Omite automat elementele de scurtare a linkurilor enervante, direct către destinația ta
// @description:fi Ohita kaikki lyhytlinkkisivustot ohittaa automaattisesti ärsyttävät linkinlyhennykset suoraan määränpäähäsi
// @description:it Ignora tutti i siti di collegamenti brevi Salta automaticamente i fastidiosi accorciatori di collegamenti, direttamente alla tua destinazione
// @description:el Παράκαμψη όλων των τοποθεσιών σύντομων συνδέσμων Παρακάμπτει αυτόματα τα ενοχλητικά προγράμματα συντόμευσης συνδέσμων, απευθείας στον προορισμό σας
// @description:eo Preterpasi Ĉiuj Mallongaj Ligiloj-Ejoj Aŭtomate Saltas ĝenajn Ligilojn, Rekte al Via Celo
// @description:es Saltarse Automáticamente todos los enlaces acortados, AdFly, Linkvertise, y omitir anuncios, ir directamente al destino, ahora se agregó descarga automática de archivos
// @description:hu Az összes rövid hivatkozási webhely megkerülése automatikusan átugorja a bosszantó linkrövidítőket, közvetlenül az úticélra
// @description:nb Omgå alle korte lenker Nettsteder hopper automatisk over irriterende lenkeforkortere, direkte til destinasjonen din
// @description:sk Obíďte všetky stránky s krátkymi odkazmi, ktoré automaticky preskočia otravné skracovače odkazov priamo do vášho cieľa
// @description:sv Förbi alla korta länkar webbplatser hoppar automatiskt över irriterande länkförkortare, direkt till din destination
// @description:sr Zaobići sve stranice s kratkim vezama automatski preskače dosadne skraćivače veza, izravno na vaše odredište
// @description:pl Pomijaj wszystkie strony z krótkimi linkami automatycznie pomija irytujące skracacze linków, bezpośrednio do miejsca docelowego
// @description:nl Omzeil alle sites met korte links en slaat automatisch vervelende linkverkorters over, rechtstreeks naar uw bestemming
// @description:de Alle Short-Links-Sites umgehen Überspringt automatisch lästige Link-Shortener direkt zu Ihrem Ziel
// @description:da Omgå alle korte links-websteder springer automatisk irriterende linkforkortere over, direkte til din destination
// @description:cs Obejít všechny stránky s krátkými odkazy Automaticky přeskakuje otravné zkracovače odkazů přímo do vašeho cíle
// @description:uk Обійти всі сайти з короткими посиланнями. Автоматично пропускає дратівливі скорочення посилань безпосередньо до вашого пункту призначення
// @description:ru Обход всех сайтов с короткими ссылками автоматически пропускает надоедливые сокращатели ссылок, прямо к месту назначения
// @description:tr Tüm Kısa Linkleri Atla Siteler Can sıkıcı Link Kısaltıcıları Otomatik Olarak Atlar, Doğrudan Hedefinize
// @description:vi Bỏ qua tất cả các trang web liên kết ngắn tự động bỏ qua các trang web liên kết gây phiền nhiễu, trực tiếp đến đích của bạn
// @description:zh-cn 绕过所有短链接网站自动跳过烦人的链接缩短器，直接到您的目的地
// @description:zh-tw 繞過所有短鏈接網站自動跳過煩人的鏈接縮短器，直接到您的目的地
// @description:pt-br Ignorar todos os sites de links curtos ignora automaticamente encurtadores de links irritantes, diretamente para o seu destino
// @description:fr-ca Contourner tous les sites de liens courts saute automatiquement les raccourcisseurs de liens gênants, directement vers votre destination
// @include /^(https?:\/\/)(tmearn|jobklic|additionalgamer|uformations|makemoneywithurl|rifurl|shrinkearn|esenr|adsforfaucets|techcyan|aghtas|soltoshindo|skip-url|pennbookcenter|publicananker|mikl4forex|michaelemad|miklpro|zirof|forex-golds|nawahi1|mmo1s|mosqam|semawur|forex-trnd|hoshilink|taiwancnan|bit-url|cuts-url|coinlyhub|popimed|phoenixshorts|rayusmedya|enburl|pickhopes|cybersensus|toryxlink|aduzz|pokuads|lycoslink|cdrab|ibrabucks|zubatecno|zenshort|ethiomi|madar-24|katflys|shortenbuddy|kiemlua|kekolink|smoner|djbhojpurisongs|shornet|clixshort|earnflies|urlty|sakastau|adsmoker|glamgreet|modsbase|ac.totsugeki|doctor-groups|earnwithshortlink|bitzite|link1s|diadiemcheckin|tudiendanhngon|chooyomi|staaker|lucidcam|coinsparty|forexlap|forexmab|linkjust|admediaflex|hoclamdaubep|forex-articles|ponselharian|liinkat|thegoneapp|alocd|mobi2c|0x-bit|studyuo|hookeaudio|thehostingmentor|intlinki|linkshortify|shopsixseven|mohtawaa|fc-lc|expertvn|markipli|downphanmem|kingsleynyc|theicongenerator|healthy4pepole|kiktu|1bitspace|healdad|marharo|ez4mods|try2link|tmker|soft3arbi|ex-foary|discordserv|softechbharat|adcorto|movie4i|okrzone|dogemate|coinsearns|informaxonline|shopdorod|bitcoin-indo|examtadka|puggygaming|link2end|crypto-news-hub|blogginglass|1shorten|amazingdarpon|lensabicara|tieutietkiem|bittalky|urlily|bablyfeed|crypto4tun|blogmado|coin-free|dash-free|usdshort|coinsurl|cafenau|techacode|ls2earn|sevenjournals|mercedesellington|7misr4day|trflink|ta2deem7arbya|sama-pro|samaa-pro|imageresizertool|techrfour|ez4short|topnewsnew|gawishpro|ad-mezo|dz4link|skincarie|gaminplay|proviralhost|guardbolts|short-zero|infinitycoupon|mfk-shorter|donnaleehunt|gamalk-sehetk|adsafelink|cbshort|bellurl|abcshort|checkscoin|llinkon|haymod|links.apksvip|ltc-free|nulledsafe|dreamcheeky|cutpaid|fidlarmusic|rodjulian|anhdep24|short.clickscoin|money.alyoumeg|sl.claimfreebits|sl-1.btcbunch|sl-2.btcbunch|sl-3.btcbunch|apk.miuiku|blog.menjelajahi|apk.sekilastekno|wp.sekilastekno|bitefaucet|playgotoken|techrayzer|shorteet|bitlya|ecwizon|oncehelp|yummy-reciepes|loptelink|2shrt|charexempire|coindoog|shotzon|novelsapps|webhostingpost|nightfallnews|tirailangit|intercelestial|tribuntekno|vhorizads|bestcash2020|7nything|hoxiin|linkat4u|fooot-map|priefy|dz-linkk|donia-tech|donia2tech|donia2link|short1s|cr3zyblog|vikashmewada|btafile|filenext|up-urls|shrinkmoney|doodshort|paid4link|d.bawabatak|newlycrypto|kienthucrangmieng|wiki-topia|wingifta|aljoodm98|newworldnew|short-jambo|mazen-ve|bclikeqt|youssefsayed|fx4vip|shortzon|get4links|crickblaze|nostralink|clkmein|101desire|memangbau|hosting4lifetime|btcpany|bebodybuilder|mesho-link|eda-ah|newsharsh|oxolink|examkhata|linksht|note1s|adclickersbot|mobitaak|cashforlink.blogspot|redlifek|btcwalk|bdtechh|99faucet|modebaca|link-yz|shortfex|apkadmin|ayelads|gawbne|mshortener|cutdomain|tkcounter|usersdrive|uptobox|1fichier|uploadrar|bayfiles|krakenfiles|post.copydev|icutlink|zegtrends|froggyreviews|anonfiles|sharemods|ddownload|uppit|userscloud|newsnowbd|link.nulldown|asideway|shortlink.earnmotivation|url.namaidani|url.magmint|mp4upload|myshrinker|apkshrt|link.turkdown|drive.google|mrnur|up4cash|safe.intipanime|trylinko|uploadhaven|manga2day|shortyearn|workupload|filedm|themorningtribune|beingtek|sub2get|ex-load|campki|social-unlock|teerclub|sahityt|mkomsel|niinga|paylinnk|olhonagrana|pdiskshortener|urlsopen|1shortlink|linkerload|best-cpm|clicksfly|btc.galerybits|blog-everything)(\.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(blog.menjelajahi|zolomix|cararegistrasi|5golink|birdurls|urlfiles|snkra|artiskini|sh2rt|byboe|medcpu|nousdecor|restorbio|bdnewsx|upshrink|gifans|jardima|jobswd|dogeearn|gkqnaexam|imperialstudy|ovlinks|imagenesderopaparaperros|w4earn|url2link|yofaurls|shortique|digiromotion|blog-forall|techymedies|gamelopte|allcryptotips|claimclicks|adshort-url|cgyojna|riadcrypto|riadblog|askpaccosi|linktrims|gets4link|urlshortify|visflakes|apk4do|dineroshare|oyunzak|elwatanelyoum|ledifha|claimfey|htshort|shrinkito|panylink|kriptoryum|sisgy|wrbloggers|encyclopedia-24|tokenoto|intmagz|saly-cash|rancah|coinadfly|pay4url|delishwell|zippyshare|solidfiles|ourtecads|upload-4ever|file-upload|shorterall|tribuncrypto|cempakajaya|safelinkduit|nadersoft7|adshorturl|linkbnao|phsensei|4shared|i-polls|v2links|loot4cash|ytsubme|diudemy|appsbull|shortenn|admediaflex)(\.com)(\/.*)/
// @include /^(https?:\/\/)(sehati|boxlink|zoxlink|moxlink|foxlink|k-sport|z-sport|n-sport|adcorto|ahyblogs|teamworkbsc|ourcoincash|forex-lab|watchdoge|arenaboard|ccsl|xz2|mshort|shrinkpay|adsgo|gainprofit|foofly|adnit|bestshort|shon|crypto-faucet|short-cash2|toptechtalk|foodyrecipe|cutearn|infinityfreescripts|st4ch|wizzly|saqercoin|cryptoon|porofly|morofly|zorofly|worofly|nooz|tooz|mgnet|crypteen|dogeen|coocly|doodly|fauceteen|tecboy|cutdl|marocclickers|9bitcoin|gameen|fameen|yameen|phoenixs|girlporo|girlmoro|girlzoro|girlworo|cryptocoinearn|shorte|potoly|motoly|kotoly|ashort1a|zololink|blog.crypto-faucet|stores.filmyzilla-in|links.doctorcoin|cbs.trxking||temp-late|template-zone|coinzat|top-blog|kora-yalla|swzz|acortame|bitsyield|nivaprofit|alghtas|wizly|kishoter|horanews|linkfort|a1link|likn|short2fly|bcvc|java-script|nabits|playstore|welovecrypto|worldappsstore|shortplus|post.nites-tv|3vw|0uq|q8c|html-script|mrsaifi|st.kleaco|playlink|sportawy|edummm|fexkomin|2faucet|technemo|zoomcrypto|techboyz|lokagames|cblinks|99links|kartunik|mausolana|shrinkmonk|sh0rt1)(\.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(insuranceblog|senuansatechno|bcdshort|insurglobal|lootlinks|adinsurance|urbharat|claimercorner|ajifly|urlmoney|shortly|insurance-space|dexlink|cekip|crypto-blog|megano-coin|doctorcoin|speedynews|baicho|1apple|adshorturl|ffworld|textpage|fidovy|egfly)(\.xyz)(\/.*)/
// @include /^(https?:\/\/)(bigb0ss|neonlink|techydino|illink|world-trips|cryptourl|yoshare|lets.5get|crypto-fi|wpcheap|forex-gold|allcryptoz|topcryptoz|techtrickonline|uniqueten|7apple|zurls|ovavibe|ccurl|luckydice|link1s|bitcomarket|url.namaidani|crewbase|crewus|shinchu|shinbhu|thumb8|thumb9|karimunbits|cryptowidgets|dogeclick|adskip|hurirk|usfinf|xervoo|sport4you|hexupload|eloism|cutt|forexshare|blog.cryptowidgets|cut-y|chedrive|dailyuploads|douploads|simfileshare|fir3|magybu|racaty|linegee|dulichkhanhhoa|sub2unlock|letsboost|megadb)(\.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(100count|digitalnaz|owllink|mozlink|ultraten|cryptosats|rocklinks|celinks|gazianteppetektemizleme|jiotech|jemari|fire-link|linkrex|urlw|paid4link|link3s|boscoin)(\.net)(\/.*)/
// @include /^(https?:\/\/)(tnlink|jrlinks|shortzzy|coincity|techmart4u|9bitco|qualitystudymaterial|adoco|cuturl|missionhight|wpking|foodma|zagl|ls2earn|streamshort|cslink|coinbaze|blog.earn4fun|blog.earn2fly|shareus|referus|megafly|megaurl|cutp|sureshjonna|earnmoj|riadshot|urlmoney|cplink|cryptomonitor|technoflip|linkshortify|studyranks|htlinks|techlearningtube|manthans|urlfly|linkocean|financeflix|uttan|jazbaat|short.faucetcrypto|smallshort|djxmaza|bildirim|techy4you|battlechamp)(\.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cashurl|linkad|bitcoinly|crazyblog|zolomix|technologylover|earnfort|spidermods|expertlinks|linksfire|largestpanel|linkres|rsrlink|linkstream|xmod|short2url|99links|rplinks|enit|adloot|url2go|tnvalue|hpshort|hblinks)(\.in)(\/.*)?/
// @include /^(https?:\/\/)(aylink|linkszia|claimsatoshi|mynewsmedia|bitshort|gtlink|earnload|adfloz|linksly|droplink|123link|go.leolink|techload|linksfy|adshorti|hxfile|dosya|veganal|takem|ezimg|eng.ezimg|dausel|9-animie)(\.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?(takez|linksfire|vosan|tinygo)(\.co)(\/.*)/
// @include /^(https?:\/\/)(ctbl|skyurl|girls-like|adsoro|gobits|zoss|shrinke|tlin|makeshort|buzzfly|ezzfly|fishfly|linksfly|webfly|terafly|petafly|gigafly|health-and|short.croclix|stfly|adbull|cutx|clicksfly|youshort|wildblog|specx|dddrive|linkpoi|sh24|m.newhit|mboost|linkshorts)(\.me)(\/.*)/
// @include /^(https?:\/\/)(.+)?(theconomy|adcorto|adsurfing|richlink|wildlinks)(\.me)(\/.*)/
// @include /^(https?:\/\/)(sitr|palpodcast|safelink|zipcrypto|cutgo|cutbits|shorthero|flylink|earncoin|downfile|savelink|linkshortify|url.coinfree|zo.coin-city|promo-visits)(\.site)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bshopme|cekip|kolotoken)(\.site)(\/.*)/
// @include /^(https?:\/\/)(earnme|sanoybonito|forexat|automotur|1ist|kooza|atlai|claimbitco|1link|zentum|9btc|ethereumearner4|doubledown)(\.club)(\/.*)/
// @include /^(https?:\/\/)(.+)?(mcrypto|usanewstoday|kadal|webhostingtips)(\.club)(\/.*)/
// @include /^(https?:\/\/)(technicalramno1|paid4|freedoge|yousm|shortzzy|coinpayz|tr|zipfy|yocto|clk.dti|besturl|zuba|earnmy|3rab|boostme|goflex)(\.link)(\/.*)/
// @include /^(https?:\/\/)(.+)?(vshort|stex|cash4)(\.link)(\/.*)/
// @include /^(https?:\/\/)(shurt|shortit|adsy|bitlinks|clik|playstore)(\.pw)(\/.*)/
// @include /^(https?:\/\/)(.+)?(adsee|prz|pong)(\.pw)(\/.*)/
// @include /^(https?:\/\/)(crypto-adria|bloogerspoot|vsbl|earnurl|yemenshort)(\.ga)(\/.*)/
// @include /^(https?:\/\/)(url.faucet77|bloogerspoot|ashort2a-bro)(\.tk)(\/.*)/
// @include /^(https?:\/\/)(.+)?(madfaucet)(\.tk)(\/.*)/
// @include /^(https?:\/\/)(linkstom|techycontent|techfort|bloogerspoot|urlchanger)(\.ml)(\/.*)/
// @include /^(https?:\/\/)(onimports|link.encurtaon)(\.com\.br)(\/.*)/
// @include /^(https?:\/\/)(didhafairus|mycut|exee|onlineteori|go.safeadlink|sealink|onlineteori|solanaborobudur|punyablog|activity|massive|caview)(\.my\.id)(\/.*)/
// @include /^(https?:\/\/)(.+)?(apasih)(\.my\.id)(\/.*)/
// @include /^(https?:\/\/)(.+)?(suratresmi|carapedi)(\.id)(\/.*)/
// @include /^(https?:\/\/)(coinshub|myhealths|kiiw|passgen|wordcounter|shrink)(\.icu)(\/.*)/
// @include /^(https?:\/\/)(luckybits|newforex|uebnews|wplink|nbyts|wealthystyle|ls2earn|happy-living|earn-cash|yourtechnology|bell.healthyguy|network-earn|getstudy)(\.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(adslinkfly|readi)(\.online)(\/.*)/
// @include /^(https?:\/\/)(exey|ezlinks|techmody|ouo|ex-e|short.goldenfaucet|saly|cuty|evoload|bitfly|sh.swissfaucet|sl.swissfaucet|oke|letsupload|eio)(\.io)(\/.*)/
// @include /^(https?:\/\/)(.+)?(linkfly|usalink)(\.io)(\/.*)/
// @include /^(https?:\/\/)(zshort|earnfree|claimcrypto|cashearn|1ink|linkpay|moneylink|cryptoflare|intnews|openload|linkspy)(\.cc)(\/.*)/
// @include /^(https?:\/\/)(.+)?(rota|netfile)(\.cc)(\/.*)/
// @include /^(https?:\/\/)(cryptoad|urlpay|wikile|cashforlink|uploadev|mega4up|doibihar)(\.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?(fullreviews|freebcc|medipost|shrinkurl|keeplinks)(\.org)(\/.*)/
// @include /^(https?:\/\/)(linkmit|zcpa|jameeltips|mitly|adfoc|link4fun)(\.us)(\/.*)/
// @include /^(https?:\/\/)(.+)?(yalla-shoot-now|forexeen)(\.us)(\/.*)/
// @include /^(https?:\/\/)(mixespecialidades|noweconomy|deportealdia|adshort|ay|pngit|pndx)(\.live)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hostingviral|linksos)(\.live)(\/.*)/
// @include /^(https?:\/\/)(earnads|genpassword|shrlink|coxsbd96|mshort|punyamerk)(\.top)(\/.*)/
// @include /^(https?:\/\/)(profitlink|zagl|scratch247|siyn|portablesusb|children-learningreading|azmath|mobilereview|cryptofly|inform3tion|machicon-akihabara|cooklike|videoclip|bitcrypto)(\.info)(\/.*)/
// @include /^(https?:\/\/)(hcsbtc|alertcrypto|aboutprofit|faucetcrypto|bildirim)(\.eu)(\/.*)/
// @include /^(https?:\/\/)(antonimos|blog.hostratgeber)(\.de)(\/.*)/
// @include /^(https?:\/\/)(freebitcoin|freelitecoin)(\.vip)(\/.*)/
// @include /^(https?:\/\/)(.+)?(flyad|lootcash)(\.vip)(\/.*)/
// @include /^(https?:\/\/)(romania|met)(\.bz)(\/.*)/
// @include /^(https?:\/\/)(ashorturl|frgy)(\.uk)(\/.*)/
// @include /^(https?:\/\/)(pingit|files)(\.im)(\/.*)/
// @include /^(https?:\/\/)(iir|tei|ier|ckk)(\.ai)(\/.*)/
// @include /^(https?:\/\/)(aii|clk)(\.sh)(\/.*)/
// @include /^(https?:\/\/)(nukl|clk)(\.ink)(\/.*)/
// @include /^(https?:\/\/)(.+)?(i8l)(\.ink)(\/.*)/
// @include /^(https?:\/\/)(.+)?(upload|prx)(\.ee)(\/.*)/
// @include /^(https?:\/\/)(.+)?(mirrored|clicknupload)(\.to)(\/.*)/
// @include /^(https?:\/\/)(.+)?(techgeek|adsgo)(\.digital)(\/.*)/
// @include /^(https?:\/\/)(brixarena|abcreations|mhma12|surflink)(\.tech)(\/.*)/
// @include /^(https?:\/\/)(kiw|redir.123file)(\.li)(\/.*)/
// @include /^(https?:\/\/)(slink|buzzzfly|ezzfly|fishfly|linksfly|webbfly)(\.bid)(\/.*)/
// @include /^(https?:\/\/)(azsoft|tronex|zonearn|theprice)(\.biz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(123link)(\.biz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cryptolatest|trangchu)(\.news)(\/.*)/
// @include /^(https?:\/\/)(cryptoads|adshort|1bit|paylinks|2the|careerhunter)(\.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cryptolink|adz7short)(\.space)(\/.*)/
// @include /^(https?:\/\/)(android-mody|webmobile)(\.store)(\/.*)/
// @include /^(https?:\/\/)(makeeasybtc|petslots|softindex|short.toptap|techus)(\.website)(\/.*)/
// @include /^(https?:\/\/)(dogecoin|icut|linka|xtrabits)(\.click)(\/.*)/
// @include /^(https?:\/\/)(.+)?(shortlinks|easysl|adlink|adzilla)(\.click)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hamody|nathanaeldan|freddyoctavio|davisonbarker)(\.pro)(\/.*)/
// @include /^(https?:\/\/)(up-load|t2l|zcash)(\.one)(\/.*)/
// @include /^(https?:\/\/)(1dogecoin|faucet)(\.work)(\/.*)/
// @include /^(https?:\/\/)(easyfaucet|sh.feyorra|fey.feyorra|go.lokak|earnbitcoin|claim|surelink)(\.fun)(\/.*)/
// @include /^(https?:\/\/)(go|blog|go2|tech|test|blg)(\.madshiba\.fun)(\/.*)/
// @include /^(https?:\/\/)(doge-mining|gamefaucet|doge-mining|linkati|zenshort)(\.win)(\/.*)/
// @include /^(https?:\/\/)(cool-time|movies|anime|tech)(\.dutchycorp\.space)(\/.*)/
// @include /^https:\/\/linkvertise\.com\/(1|2|3|4|5|6|7|8|9)/
// @include /^https:\/\/cryptofans\.club\/(short|next|other|step)/
// @exclude /^https:\/\/claimclicks\.com\/(btc|ltc|doge|trx|faucetlist|ptclist)/
// @exclude /^https:\/\/claimercorner\.xyz\/(claimer\/dashboard|claimer\/advertise|claimer\/ptc|claimer\/deposit|claimer\/transfer|claimer\/tasks|claimer\/offerwall|claimer\/profile|claimer\/auto|claimer\/mining|claimer\/wheel|claimer\/login)/
// @exclude /^https:\/\/cryptosats\.net\/(cryptosats\/dashboard|cryptosats\/advertise|cryptosats\/ptc|cryptosats\/deposit|cryptosats\/transfer|cryptosats\/tasks|cryptosats\/offerwall|cryptosats\/profile|cryptosats\/auto|cryptosats\/mining|cryptosats\/wheel|cryptosats\/login)/
// @exclude /^https:\/\/easyfaucet\.fun\/(dashboard|advertise|ptc|deposit|transfer|tasks|offerwall|profile|auto|mining|dice|lottery|faucet|login)/
// @exclude /^https:\/\/99faucet|faucet.cempakajaya\.com\/(dashboard|advertise|ptc|deposit|transfer|tasks|offerwall|profile|auto|mining|dice|lottery|faucet|login)/
// @exclude /^https:\/\/free.tribuncrypto\.com\/(dashboard|advertise|ptc|deposit|transfer|tasks|offerwall|profile|auto|mining|dice|lottery|faucet|login)/
// @exclude    *://*.vosan.co/
// @match      *://dutchycorp.space/s*/*
// @match      *://dutchycorp.ovh/s*/*
// @match      *://shorts.lu/*
// @match      *://tny.so/*
// @match      *://wi.cr/*
// @match      *://al.ly/*
// @match      *://za.uy/*
// @match      *://za.gl/*
// @match      *://c2g.at/*
// @match      *://fcc.lc/*
// @match      *://2ad.ir/*
// @match      *://cut.gd/*
// @match      *://coin.mg/*
// @match      *://send.cm/*
// @match      *://kimo.ma/*
// @match      *://clk.asia/*
// @match      *://goads.ly/*
// @match      *://mdn.rest/*
// @match      *://mlink.cfd/*
// @match      *://ouo.press/*
// @match      *://median.uno/*
// @match      *://tinyurl.is/*
// @match      *://*.ouo.today/*
// @match      *://*.mdn.world/*
// @match      *://softindex.cf/*
// @match      *://nail.edu.pl/*
// @match      *://lolabits.se/*
// @match      *://z-cash.xyz/ad/*
// @match      *://nex-url.cyou/*
// @match      *://drop.download/*
// @match      *://cryptofuns.ru/*
// @match      *://gosixs.com/s/*
// @match      *://arbweb.info/sl/*
// @match      *://faucethub.ly/hs/*
// @match      *://starfaucet.net/sl/*
// @match      *://adcrypto.co/claim/*
// @match      *://docs.google.com/uc*
// @match      *://shrt.cryptofuns.ru/*
// @match      *://satoshi-win.xyz/url/*
// @match      *://cryptonetos.ru/page/*
// @match      *://sohexo.org/kisalink/*
// @match      *://clickscoin.com/short*
// @match      *://toptap.website/short/*
// @match      *://*.mediafire.com/file/*
// @match      *://faucet.gold/BTC/?step*
// @match      *://faucet.gold/ETH/?step*
// @match      *://anonym.ninja/download/*
// @match      *://freefeyorra.com/short/*
// @match      *://claimsolana.xyz/short/*
// @match      *://faucetcrypto.net/short/*
// @match      *://supersites.xyz/verifysl*
// @match      *://stationbit.xyz/autolink/*
// @match      *://cryptotyphoon.com/short/*
// @match      *://cryptoaffiliates.store/sh*
// @match      *://waterfaucet.online/short/*
// @match      *://konstantinova.net/verify/*
// @match      *://*.softairbay.com/shortSAB/*
// @match      *://rotator.nurul-huda.sch.id/*
// @match      *://faucetcrypto.com/claim/step/*
// @match      *://cryptocurrencytracker.biz/link/*
// @match      *://*.racedepartment.com/downloads/*
// @match      *://cryptorotator.website/sh_live/*
// @match      *://*.reddcoineveryday.com/short/*
// @match      *://cryptonetos.ru/page/redirect*
// @match      *://faucetpay.nurul-huda.or.id/*
// @match      *://galerybits.com/protectlink/*
// @match      *://earnultimate.space/short/*
// @downloadURL none
// ==/UserScript==
// ==========================================================================================================================================
//                                      PLEASE READ SCRIPT INFO BEFORE USE
//                                  PLEASE RESPECT IF MY SCRIPTS USEFUL FOR YOU
//                      DON'T TRY TO COPY PASTE MY SCRIPTS THEN SHARE TO OTHERS LIKE YOU ARE THE CREATOR
//                            PLEASE DON'T REMOVE OR CHANGE MY BLOG, THANKS FOR YOUR SUPPORT
//              My Blog is Very Important to give some Delay for safe away ,Track New Shortlinks , Broken Bypass etc...
// Thanks so much to @JustOlaf , @Konf , @hacker09 for Helping me , make my script even better , and for All who has contributed via Feedback.
// ===========================================================================================================================================
(function () {
    'use strict';
    const RexBp = new RegExp(/^\?([^&]+)/);

    const bp = query => document.querySelector(query);
    const elementExists = query => bp(query) !== null;
    const domainCheck = domains => new RegExp(domains).test(location.host);

    function click(query) {
        bp(query).click(); 
    }

    function submit(query) { 
        bp(query).submit(); 
    }

    function adBlockNotDetected(query) { 
        adBlockNotDetected(); 
    }

    function clickIfElementExists(query, timeInSec = 1, funcName = 'setTimeout') { 
        if (elementExists(query)) { 
            window[funcName](function () { 
                click(query); 
            }, timeInSec * 1000); 
        } 
    }

    function Captchasub(query, act = 'submit', timeInSec = 0.5) { 
        if (elementExists(query)) { 
            var timer = setInterval(function () { 
                if (window.grecaptcha && !!window.grecaptcha.getResponse?.()) { 
                    bp(query)[act](); clearInterval(timer); 
                } 
            }, timeInSec * 1000); 
        } 
    }

    function Captchaklik(query, act = 'click', timeInSec = 1) {
        if (elementExists(query)) {
            var timer = setInterval(function () { 
                if (window.grecaptcha && !!window.grecaptcha.getResponse?.()) {
                    bp(query)[act](); 
                    clearInterval(timer); 
                } 
            }, timeInSec * 1000); 
        } 
    }

    function redirect(url, blog = true) { 
        location = blog ? url : url; 
    }

    function BypassedByBloggerPemula(re_domain, data, blog) {
        if (!re_domain.test(location.host)) return;
        if (typeof data === 'function') return data();
        if (Array.isArray(data)) data = { '/': data };
        if (!(location.pathname in data)) return;
        const [key, value] = data[location.pathname];
        if (typeof key === 'object' && key.test(location.search)) return redirect(value + RegExp.$1, blog);
        const searchParams = new URLSearchParams(location.search);
        if (searchParams.has(key)) redirect(value + searchParams.get(key), blog);
    }

    function BloggerPemula(domains, data, url, blog, use = null) {
        const searchParams = new URLSearchParams(location.search);
        if (!domainCheck(domains)) return;
        if (typeof data === 'string' && data.split(',').every(p => searchParams.has(p))) {
            use ??= data.split(',')[0]
            redirect(url + searchParams.get(use), blog);
        } else if (typeof data === 'object') {
            const o = data[location.pathname]
            if (!o) return; BloggerPemula(domains, ...o)
        }
    }

    function meta(href) {
        document.head.appendChild(Object.assign(document.createElement('meta'), { 
            name: 'referrer', 
            content: 'origin' 
        }));
        Object.assign(document.createElement('a'), { href }).click();
    }

    function waitForElm(query, callback) { 
        setTimeout(function () { 
            if (elementExists(query)) { 
                callback(bp(query)); 
            } else { 
                waitForElm(query, callback); 
            } 
        }, 1000); 
    }

    function notify(txt, width = 850) {
        const m = document.createElement('div');
        m.style.padding = '10px'; m.style.zIndex = 99999999; m.style.position = 'fixed'; m.style.boxSizing = 'border-box';
        m.style.width = `${width}px`; m.style.top = '130px'; m.style.left = `${innerWidth / 2 - width / 2}px`; m.style.font = 'normal bold 20px sans-serif';
        m.style.backgroundColor = 'white'; m.innerText = txt; document.body.appendChild(m);
    }

    
    (new URL(location.href)); 

    // Injecting code from start and the end of document coded by @Konf
    if (['interactive', 'complete'].includes(document.readyState)) { onHtmlLoaded(); } else { document.addEventListener('DOMContentLoaded', onHtmlLoaded); } 
    
    function onHtmlLoaded() {
        // if (['faucetpay.nurul-huda.or.id', 'rotator.nurul-huda.sch.id'].indexOf(location.host) > -1) { } else {
        //     // const listhide = document.querySelectorAll('#frame,.adb,#iframe,#particles-js,#canvas,.floawing-banner,#orquidea-slideup,.floating-banner,#wcfloatDiv4,#preloader,.vanta-canvas,.particles-js-canvas-el,#s65c,#ofc9,#overlay,#footerads,.oulcsy,.sticky-bottom,.separator,html body iframe,html iframe,#cookie-pop,.vmyor,.tnjmvneldp');
        //     // for (const element of listhide) { element.remove(); }
        // }
        // if (location.host === 'taiwancnan.com') { } else { const listr = document.querySelectorAll('.blog-item'); for (const element of listr) { element.remove(); } }
        // if (location.host === 'up4cash.com') { } else { const listre = document.querySelectorAll('.banner-inner'); for (const element of listre) { element.remove(); } }
        // ============================================
        // Captcha Mode
        // ============================================
        Captchasub('#_mform');
        Captchasub('#userForm');
        Captchasub('#link-view');
        Captchasub('#frmprotect');
        Captchasub('#ShortLinkId');
        Captchasub('#submit-form');
        Captchasub('#lview > form');
        Captchasub('#file-captcha');
        Captchasub('#btget > form');
        Captchasub("form[name='F1']");
        Captchasub('form.text-center');
        Captchasub('#short-captcha-form');
        Captchasub('#wpsafelink-landing');
        Captchasub('.col-12 > form:nth-child(1)');
        Captchasub('.col-md-4 > form:nth-child(1)');
        Captchasub('.col-md-6 > form:nth-child(4)');
        Captchasub('.contenido > form:nth-child(2)');
        Captchasub('#main > div:nth-child(4) > form:nth-child(1)');
        Captchasub('div.col-md-12:nth-child(3) > form:nth-child(1)');
        Captchasub('.content > div:nth-child(4) > form:nth-child(1)');
        Captchasub('#showMe > center:nth-child(4) > form:nth-child(1)');
        Captchasub('.sect > div:nth-child(1) > center:nth-child(7) > form:nth-child(1)');
        Captchasub('#showMe > center:nth-child(1) > center:nth-child(4) > form:nth-child(1)');
        Captchasub('#adb-not-enabled > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > form:nth-child(1)');
        Captchaklik('button#continue.btn.btn-primary.btn-captcha');
        Captchaklik('.m-2.btn-captcha.btn-outline-primary.btn');
        Captchaklik('#yuidea-btn-before.yu-btn.yu-blue');
        Captchaklik('#yuidea-btn-after.yu-blue.yu-btn');
        Captchaklik('#short-captcha-submit');
        // // ============================================
        // // SetTimeout Mode
        // // ============================================
        clickIfElementExists('div.banner.banner-336x280 > div > a',3,'setInterval')
        // clickIfElementExists('p.getlink', 3);
        // clickIfElementExists('button.jeje', 3);
        // clickIfElementExists('#yuidea-btmbtn', 5);
        // clickIfElementExists('.yu-blue.yu-btn', 3);
        // clickIfElementExists('div.lds-ellipsis', 9);
        // clickIfElementExists('div.complete a.btn', 5);
        // clickIfElementExists('button#btn-get-link', 3);
        // clickIfElementExists('#links > a:nth-child(2)', 3);
        // clickIfElementExists('button.btn-main.get-link', 3);
        // clickIfElementExists('#molien > a:nth-child(1)', 5);
        // clickIfElementExists('button#btn6.yu-btn.yu-go', 3);
        // clickIfElementExists('.mb-3 > .btn-primary.btn', 3);
        // clickIfElementExists("input[name='method_free']", 3);
        // clickIfElementExists('div#wpsafe-generate a img', 3);
        // clickIfElementExists('a#surl1.btn-main.get-link', 5);
        // clickIfElementExists('button#mdt.custom-btn.btn-7', 3);
        // clickIfElementExists('button#btn-main.btn.btn-main', 3);
        // clickIfElementExists('#wpsafe-snp > a:nth-child(1)', 5);
        // clickIfElementExists('button#bt.btn.btn-info.btn-lg', 3);
        // clickIfElementExists('.close-ad-modal-go-ahead.close', 5);
        // clickIfElementExists('button#article.btn.btn-success', 3);
        // clickIfElementExists('input#btn-main.btn.btn-primary', 3);
        // clickIfElementExists('button#getlink.getlink.disabled', 3);
        // clickIfElementExists('#link1s-snp > button:nth-child(1)', 3);
        // clickIfElementExists('#link1s-snp > button:nth-child(1)', 3);
        // clickIfElementExists('button#showTimerText.btn.btn-accent', 3);
        // clickIfElementExists('#wpsafelinkhuman > img:nth-child(1)', 3);
        // clickIfElementExists('button#submit-button.btn.btn-primary', 3);
        // clickIfElementExists('.next-button.text-white.btn-info.btn', 3);
        // clickIfElementExists('button#btn6.g-recaptcha.btn.btn-primary', 3);
        // clickIfElementExists('#cl1 > a:nth-child(2) > font:nth-child(1)', 3);
        // clickIfElementExists('#cl1 > center:nth-child(1) > a:nth-child(1)', 3);
        // clickIfElementExists('.next-button.btn-lg.text-white.btn-info.btn', 3);
        // clickIfElementExists('button#invisibleCaptchaShortlink.btn-main.get-link', 5);
        // clickIfElementExists('button#btn6.btn.btn-outline-primary.btn-captcha.m-2', 3);
        // clickIfElementExists('.exclude-popad.open-continue-btn-org.btn-primary.btn', 4);
        // clickIfElementExists('.col-md-8 > form:nth-child(17) > button:nth-child(3)', 3);
        // clickIfElementExists('div.box-main:nth-child(2) > div:nth-child(4) > a:nth-child(1)', 3);
        // clickIfElementExists('button#invisibleCaptchaShortlink.btn.btn-primary.btn-goo.btn-captcha', 7);
        // clickIfElementExists('button#invisibleCaptchaShortlink.btn.ybtn.ybtn-accent-color.btn-captcha', 5);
        // clickIfElementExists('button#invisibleCaptchaShortlink.btn.btn-outline-primary.btn-lg.btn-block.btn-captcha', 5);
        // // ============================================
        // // setInterval Mode
        // // ============================================
        // clickIfElementExists('#nextButton', 7, 'setInterval');
        // clickIfElementExists('a.btn-main.get-link', 5, 'setInterval');
        // clickIfElementExists('#makingdifferenttimer', 3, 'setInterval');
        // clickIfElementExists('a.btn.m-2.btn-success', 5, 'setInterval');
        // clickIfElementExists('.btn-danger.btn-raised', 5, 'setInterval');
        // clickIfElementExists('a#finalx22.btn.btnstep1', 3, 'setInterval');
        // clickIfElementExists('#link1s.btn-primary.btn', 5, 'setInterval');
        // clickIfElementExists('#wg-form > .btnstep1.btn', 3, 'setInterval');
        // clickIfElementExists('.close-me > a:nth-child(1)', 5, 'setInterval');
        // clickIfElementExists('button#link.btn.btn-primary', 5, 'setInterval');
        // clickIfElementExists('#myButtonn > span:nth-child(1)', 3, 'setInterval');
        // clickIfElementExists('#btn6.btn-captcha.btn-primary.btn', 5, 'setInterval');
        // clickIfElementExists('input.g-recaptcha.btn.btn-primary', 3, 'setInterval');
        // clickIfElementExists('.get-link.ybtn-accent-color.ybtn.btn', 3, 'setInterval');
        // clickIfElementExists('a.btn.btn-primary.get-link.text-white', 5, 'setInterval');
        // clickIfElementExists('button#get_link.btn.btn-primary.btn-sm', 7, 'setInterval');
        // clickIfElementExists('#makingdifferenttimer9 > .btn-success.btn', 5, 'setInterval');
        // clickIfElementExists('#mdt.btn.btn-primary.text-white.next-button', 3, 'setInterval');
        // clickIfElementExists('div.column:nth-child(2) > font:nth-child(2) > a:nth-child(8)', 3);
        // clickIfElementExists('button#main-button.claim-button.btn.btn-lg.btn-accent', 3, 'setInterval');
        // clickIfElementExists('a.get-link.bg-red-600.px-8.py-2.rounded-md.inline-block', 3, 'setInterval');
        // clickIfElementExists('#main >div:nth-child(5) > div > div > button', 3, 'setInterval');
        // waitForElm('div#wpsafe-link > a', function (element) {
        //     const regex = /redirect=(.*)',/;
        //     const m = regex.exec(element.onclick.toString())[1]; location.href = JSON.parse(atob(m)).safelink;
        // });
        // if (typeof hcaptcha == "object" && typeof apiCounter == "object") {
        //     window.app_country_visitor = "";
        //     window.hcaptcha.getResponse = () => { };
        //     window.apiCounter.generateURL();
        //     window.apiCounter.redirectTo(bp("button.button-element-verification"));
        // }
        // if (typeof tokenURL == "string") { redirect(atob(window.tokenURL)); }
        // if (elementExists('#fauform')) { setTimeout(function () { bp('#fauform').submit(); }, 10000); }
        // if (elementExists('#before-captcha')) { setTimeout(function () { bp('#before-captcha').submit(); }, 3000); }
        // if (elementExists('#surl')) { setInterval(function () { bp('#surl.btn-success.m-2.btn').click(); }, 5000); }
        // if (elementExists('#url_qu')) { setTimeout(function () { bp('.ad-banner.btn-captcha.btn-primary.btn').click(); }, 3000); }
        // if (elementExists('a#firststep-btn.btn.btnstep1')) { setTimeout(function () { bp('button#getlink.btn.m-2.btn-success.disabled').click(); }, 3000); }
        // if (location.host === 'www.4shared.com') { } else { Captchasub("form[action='']"); }
        // if (location.host === 'uploadhaven.com') { } else { clickIfElementExists('button.btn.btn-success', 7); }
        // if (location.host === 'www.upload-4ever.com') { } else { clickIfElementExists('.btn-outline-white.btn', 3); }
        // if (location.host === 'uploadhaven.com') { } else { clickIfElementExists('button.btn-block.btn-success', 5, 'setInterval'); }
        // if (['ctbl.me', 'zshort.cc'].indexOf(location.host) > -1 && location.search === '') { location = 'https://mdn.rest/?url8j=' + location.href; }
        // if (location.host === 'fc-lc.com') { window.top != window.self; } else { clickIfElementExists('button#submitbtn.g-recaptcha.btn.btn-primary', 3); }
        // if (['paid4.link', 'ponselharian.com'].indexOf(location.host) > -1) { window.top != window.self; } else { clickIfElementExists('.btn-captcha.btn-sm.btn-primary.btn', 5); }
        // if (['www.solidfiles.com', 'usersdrive.com', 'workupload.com'].indexOf(location.host) > -1) { } else { clickIfElementExists('.btn-sm.btn-default.btn', 5, 'setInterval'); }
        // if (['konstantinova.net', 'mobilereview.info'].indexOf(location.host) > -1) { } else { if (elementExists('#makingdifferenttimer')) { setInterval(function () { bp('#url_qu > a:nth-child(1)').click(); }, 3000); } }
        // if (['coin.mg', 'rancah.com'].indexOf(location.host) > -1) { window.top != window.self; } else { if (elementExists('#links')) { setInterval(function () { bp('#links > form:nth-child(2)').submit(); }, 3000); } }
        // if (['rancah.com', 'trangchu.news', 'techacode.com', 'downfile.site', 'upload-4ever.com'].includes(window.location.hostname) > -1) { window.top != window.self; } else { clickIfElementExists('input.btn.btn-primary', 5); }
        // if (['nightfallnews.com', 'fc-lc.com', 'chooyomi.com', 'zipfy.link', 'paid4.link', 'usersdrive.com', 'zentum.club', 'kiiw.icu', 'workupload.com', 'taiwancnan.com'].indexOf(location.host) > -1) { window.top != window.self; } else { clickIfElementExists('button.btn:nth-child(4)', 2, 'setInterval'); }
        // if (['trangchu.news', 'downfile.site', 'techacode.com'].includes(window.location.hostname) > -1 && bp('.captcha') !== null) { var o = function () { if (window.grecaptcha.getResponse?.().length > 0) { bp('#proceed').click(); clearInterval(k); } }; var k = setInterval(o, 500); }
        // if (['bitlinks.pw', 'ayelads.com', 'apkadmin.com', 'cashearn.cc', 'rancah.com', 'digitalnaz.net', 'upload-4ever.com', 'hexupload.net', 'mrnur.com', 'keeplinks.org', 'fileshare.adshorturl.com', 'bowfile.com', 'letsupload.io', 'workupload.com'].includes(window.location.hostname) > -1) { } else { if (elementExists('div.col-md-4:nth-child(2)')) { setInterval(function () { bp('div.col-md-4:nth-child(2) > span:nth-child(1) > img:nth-child(1)').click(); }, 5000); } }
        // let Numcode = bp('input.captcha_code'); let DigitNum;
        // function getLeft(d) { return parseInt(d.style.paddingLeft); }
        // if (Numcode) {
        //     DigitNum = Numcode.parentElement.previousElementSibling.children[0].children;
        //     Numcode.value = [].slice.call(DigitNum).sort(function (d1, d2) { return getLeft(d1) - getLeft(d2); }).map(function (d) { return d.textContent; }).join('');
        // }
        // let $ = window.jQuery; let respect = 'https://faucetpay.nurul-huda.or.id/?url='; // Don't use My Scripts if You Change/Remove My Blogs, Except You Make Donations!!!.
        // if (location.host === 'www.4shared.com') { if (elementExists('.d3topTitle')) { $('.premium').text('IMPORTANT TRICKS By BloggerPemula : Wait 5 Second or more , Dont Close this Page ,Right Click Here Link Above, Open Link in New Tab, Close the Tabs if Your File not Downloaded, Try again the Right Click Methods, at This Time i Dont have Idea to Make it Auto , Do the Same Trick for All File Type in 4shared Site . Regards...'); } }
        // if (['short.goldenfaucet.io', 'short.croclix.me', 'www.adz7short.space', 'www.shortique.com'].indexOf(location.host) > -1) {
        //     function fireMouseEvents(query) {
        //         const element = document.querySelector(query);
        //         if (!element) return;['mouseover', 'mousedown', 'mouseup', 'click'].forEach(eventName => {
        //             if (element.fireEvent) { element.fireEvent('on' + eventName); } else {
        //                 const eventObject = document.createEvent('MouseEvents');
        //                 eventObject.initEvent(eventName, true, false); element.dispatchEvent(eventObject);
        //             }
        //         });
        //     }
        //     setInterval(function () { if ($("#link").length > 0) { fireMouseEvents("#link"); } }, 500);
        //     setInterval(function () {
        //         if ($("input#continue").length > 0) { fireMouseEvents("input#continue"); }
        //         if ($("a#continue.button").length > 0) { fireMouseEvents("a#continue.button"); }
        //     }, 9000); setTimeout(function () { if ($("#btn-main").length < 0) return; fireMouseEvents("#btn-main"); }, 5000);
        // }
        // if (location.host === 'mrnur.com') { clickIfElementExists('.get-link.btn-download.btn-primary.btn', 13); } else if (location.host === 'rodjulian.com') { clickIfElementExists('a.btn.btn-primary.btn-lg.get-link', 5, 'setInterval'); } else if (location.href.indexOf("ay.live") != -1 || location.href.indexOf("aylink.co") != -1) {
        //     var form = $('#go-link')
        //     $.ajax({ type: 'POST', async: true, url: form.attr('action'), data: form.serialize(), dataType: 'json', success: function (data) { redirect(data.url); } });
        // } else 
        if (elementExists('#go-link')) {
            $("#go-link").unbind().submit(function (e) {
                e.preventDefault(); var form = $(this); var url = form.attr('action'); const pesan = form.find('button');
                $.ajax({
                    type: "POST", url: url, data: form.serialize(), beforeSend: function (xhr) {
                        pesan.attr("disabled", "disabled"); $('a.get-link').text('Bypassed by RaivaldyX404NotFound');
                    }, success: function (result, xhr) { location.href = result.url; }
                });
            });
        }
        // const bas = (h => {
        //     const result = { isNotifyNeeded: false, redirectDelay: 0, link: undefined };
        //     switch (h.host) {
        //         case 'faucetpay.nurul-huda.or.id': case 'rotator.nurul-huda.sch.id': if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('sn')) {
        //             result.link = h.searchParams.get('url') + '&sn=' + h.searchParams.get('sn').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
        //         } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('sub_id') && h.searchParams.has('site_id') && h.searchParams.has('ip_address')) {
        //             result.link = h.searchParams.get('url') + '&sub_id=' + h.searchParams.get('sub_id') + '&site_id=' + h.searchParams.get('site_id') + '&ip_address=' + h.searchParams.get('ip_address'); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
        //         } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('X-Amz-Algorithm') && h.searchParams.has('X-Amz-Credential') && h.searchParams.has('X-Amz-Date') && h.searchParams.has('X-Amz-SignedHeaders') && h.searchParams.has('X-Amz-Expires') && h.searchParams.has('X-Amz-Signature')) {
        //             result.link = h.searchParams.get('url') + '&X-Amz-Algorithm=' + h.searchParams.get('X-Amz-Algorithm') + '&X-Amz-Credential=' + h.searchParams.get('X-Amz-Credential') + '&X-Amz-Date=' + h.searchParams.get('X-Amz-Date') + '&X-Amz-SignedHeaders=' + h.searchParams.get('X-Amz-SignedHeaders') + '&X-Amz-Expires=' + h.searchParams.get('X-Amz-Expires') + '&X-Amz-Signature=' + h.searchParams.get('X-Amz-Signature'); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
        //         } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('ssa') && h.searchParams.has('id')) {
        //             result.link = h.searchParams.get('url') + '&ssa=' + h.searchParams.get('ssa') + '&id=' + h.searchParams.get('id').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
        //         } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('id')) {
        //             result.link = h.searchParams.get('url') + '&id=' + h.searchParams.get('id').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
        //         } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('article')) {
        //             result.link = h.searchParams.get('url') + '&article=' + h.searchParams.get('article').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
        //         } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('antibot')) {
        //             result.link = h.searchParams.get('url') + '&antibot=' + h.searchParams.get('antibot').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
        //         } else if (h.pathname === '/' && h.searchParams.has('url') && h.href.includes('#')) {
        //             result.link = h.searchParams.get('url') + $(location).attr('hash'); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
        //         } else if (h.pathname === '/' && h.searchParams.has('url') && h.href.includes('bloogerspoot.')) {
        //             window.location.assign('https://softindex.website' + (location.search).substring(102));
        //         } else if (h.pathname === '/' && h.searchParams.has('url')) {
        //             result.link = h.searchParams.get('url').replace('&m=1', '').replace('<br />', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
        //         } break;
        //         default: break;
        //     }
        // })(new URL(location.href));
        // if (bas) {
        //     const { isNotifyNeeded, redirectDelay, link } = bas;
        //     if (isNotifyNeeded) { notify(`Please Wait a moment .....You will be Redirected to Your Destination in ${redirectDelay} seconds`); }
        //     setTimeout(() => { location.href = link; }, redirectDelay * 1000);
        // }
        // const l = (h => {
        //     const b = h.pathname === '/verify/' && /^\?([^&]+)/.test(h.search); const p = h.pathname === '/blog3/verify/' && /^\?([^&]+)/.test(h.search);
        //     switch (h.host) {
        //         case 'okrzone.com': if (b) { meta('https://gtlink.co/' + RegExp.$1); } break;
        //         case 'ezimg.co': if (b) { meta('https://eng.ezimg.co/' + RegExp.$1); } break;
        //         case 'examkhata.com': if (b) { meta('https://playlink.xyz/' + RegExp.$1); } break;
        //         case 'techboyz.xyz': if (b) { meta('https://short2fly.xyz/' + RegExp.$1); } break;
        //         case 'www.lootcash.vip': if (b) { meta('https://ads.flyad.vip/' + RegExp.$1); } break;
        //         case 'ledifha.com': if (b) { meta('https://process.ledifha.com/' + RegExp.$1); } break;
        //         case 'speedynews.xyz': if (p) { meta('https://technemo.xyz/blog/' + RegExp.$1); } break;
        //         case 'www.allcryptotips.com': if (b) { meta('https://zenshort.com/' + RegExp.$1); } break;
        //         case 'adinsurance.xyz': if (b) { meta('https://blog.adinsurance.xyz/' + RegExp.$1); } break;
        //         case 'url.magmint.com': if (b) { meta('https://bell.healthyguy.online/' + RegExp.$1); } break;
        //         case 'techrayzer.com': if (b) { meta('https://techrayzer.com/insurance/' + RegExp.$1); } break;
        //         case 'teerclub.com': if (b) { meta('https://www.allcryptotips.com/verify/?' + RegExp.$1); } break;
        //         case 'urlily.com': case 'forexshare.net': if (b) { meta('https://shorturl.sh2rt.com/' + RegExp.$1); } break;
        //         case 'faucethub.ly': if (/^\/hs\/\/([^\/]+)/.test(h.pathname)) { return 'https://goads.ly/' + RegExp.$1; } break;
        //         case 'cekip.site': case 'www.cekip.site': if (/^\/go\/([^\/]+)/.test(h.pathname)) { meta(atob(RegExp.$1)); } break;
        //         case 'sl.easysl.click': if (/^\/step1\/([^\/]+)/.test(h.pathname)) { return 'https://easysl.click/' + RegExp.$1; } break;
        //         case 'www.hostingviral.live': case 'www.apk4do.com': if (b) { meta('https://www.dineroshare.com/' + RegExp.$1); } break;
        //         case 'www.gifans.com': if (/^\/link\/([^\/]+)/.test(h.pathname)) { return 'https://shortlink.prz.pw/' + RegExp.$1; } break;
        //         case 'zonearn.biz': if (/^\/(.+)/.test(h.pathname) && h.searchParams.has('tok')) { return h.searchParams.get('tok'); } break;
        //         case 'coinsearns.com': if (/^\/cryptoads\/([^/]+)/.test(h.pathname)) { return 'https://cryptoads.space/' + RegExp.$1; } break;
        //         case 'earnfree.cc': if (/^\/slc\/step1\/([^/]+)/.test(h.pathname)) { return 'http://shortlinks.click/' + RegExp.$1; } break;
        //         case 'nulledsafe.com': if (/^\/link\/([^\/]+)/.test(h.pathname)) { return 'https://golink.nulledsafe.com/' + RegExp.$1; } break;
        //         case 'step0.shortlinks.click': if (/^\/([^\/]+)/.test(h.pathname)) { return 'https://shortlinks.click/' + RegExp.$1; } break;
        //         case 'adoco.in': if (/girl([mpwz])oro\/([^\/]+)/.test(h.pathname)) { return 'https://girl' + RegExp.$1 + 'oro.xyz/' + RegExp.$2; } break;
        //         case 'crypto-faucet.xyz': if (/^\/bitco\/link\/([^\/]+)/.test(h.pathname)) { return 'https://doctor-groups.com/link/' + RegExp.$1; } break;
        //         case 'studyuo.com': if (h.pathname === '/pro2/verify/' && /^\?([^&]+)/.test(h.search)) { meta('https://csd.xmod.in/' + RegExp.$1); } break;
        //         case 'techmody.io': if (h.pathname === '/' && h.searchParams.has('check')) { meta(decodeURIComponent(h.searchParams.get('check'))); } break;
        //         case 'froggyreviews.com': if (h.searchParams.has('mflink')) { meta('https://froggyreviews.com/go/' + h.searchParams.get('mflink')); } break;
        //         case 'bdtechh.com': if (h.pathname === '/s/verify/' && /^\?([^&]+)/.test(h.search)) { return 'https://go.shortenn.com/' + RegExp.$1; } break;
        //         case 'medipost.org': if (h.pathname === '/verify/' && /^\?([^&]+)/.test(h.search)) { meta('https://links.medipost.org/' + RegExp.$1); } break;
        //         case 'coinbaze.in': case 'techmart4u.in': if (/^\/coinbazeads\/([^\/]+)/.test(h.pathname)) { return 'https://urlfiles.com/' + RegExp.$1; } break;
        //         case 'hosting4lifetime.com': if (h.pathname === '/blog/verify/' && /^\?([^&]+)/.test(h.search)) { meta('https://abcshort.com/' + RegExp.$1); } break;
        //         case 'www.gkqnaexam.com': if (/^\/yuidea\/$/.test(h.pathname) && /^\?([^&]+)/.test(h.search)) { meta('https://web.url2link.com/' + RegExp.$1); } break;
        //         case 'acortame.xyz': if (window.location.hash) { location.href = "https://faucetpay.nurul-huda.or.id/?url=" + (atob(window.location.hash.substr(1))); } break;
        //         case 'blog.textpage.xyz': if (h.searchParams.has('ajhvgadhdhgkdsvkd')) { meta('https://short.url2go.in/' + h.searchParams.get('ajhvgadhdhgkdsvkd')); } break;
        //         case 'short.clickscoin.com': case 'watchdoge.xyz': case 'dogeclick.net': if (/^\/ccsl\/([^/]+)/.test(h.pathname)) { return 'https://ccsl.xyz/' + RegExp.$1; } break;
        //         case 'jrlinks.in': if (h.pathname === '/safe2.php' && h.searchParams.has('link')) { meta('https://internet.webhostingtips.club/' + h.searchParams.get('link')); } break;
        //         case 'crazyblog.in': case 'www.crazyblog.in': if (h.pathname === '/xhod/verify/' && /^\?([^&]+)/.test(h.search)) { meta('https://redd.crazyblog.in/' + RegExp.$1); } break;
        //         case 'network-earn.online': if (h.searchParams.has('tok') && h.href.includes('index.php')) { return 'https://luckybits.online/check.php?tok=' + h.searchParams.get('tok'); } break;
        //         case 'wplink.online': if (h.searchParams.has('url') && h.href.includes('bloogerspoot.')) { window.location.assign('https://softindex.website' + (location.search).substring(220)); } break;
        //         case 'shrinkearn.com': case 'clk.sh': if (h.searchParams.has('url') && h.href.includes('bloogerspoot.')) { window.location.assign('https://softindex.website' + h.searchParams.get('url').substring(22)); } break;
        //         case 'dogeclick.net': if (/^\/short\/([^/]+)/.test(h.pathname)) { return 'https://short.clickscoin.com/' + RegExp.$1; } else if (/^\/ccsl\/([^/]+)/.test(h.pathname)) { return 'https://ccsl.xyz/' + RegExp.$1; } break;
        //         case 'clickscoin.com': if (/^\/short\/([^/]+)/.test(h.pathname)) { return 'https://short.clickscoin.com/' + RegExp.$1; } else if (/^\/shortccsl\/([^/]+)/.test(h.pathname)) { return 'https://ccsl.xyz/' + RegExp.$1; } break;
        //         case 'baicho.xyz': case 'short2fly.xyz': case 'cbshort.com': if (h.searchParams.has('url') && h.href.includes('bloogerspoot.')) { window.location.assign('https://softindex.website' + (location.search).substring(147)); } break;
        //         case 'blog.crazyblog.in': if (/^\/step\d+?\/([^/]+)$/.test(h.pathname)) { return 'https://wplink.online/' + RegExp.$1; } else if (/^\/visit\d+?\/step\d+?\/([^/]+)$/.test(h.pathname)) { return 'https://cblink.crazyblog.in/' + RegExp.$1; } break;
        //         case 'faucet.100count.net': if (/^\/fo\/linko\/([^\/]+)/.test(h.pathname)) { return 'https://100count.net/fo/linko/' + RegExp.$1; } else if (/^\/clickit\/sh\/([^/]+)/.test(h.pathname)) { return 'https://100count.net/fileo/clicksfile/stats/' + RegExp.$1; } break;
        //         case 'anime.dutchycorp.space': case 'movies.dutchycorp.space': case 'tech.dutchycorp.space': case 'cool-time.dutchycorp.space': if (/^\/redir[^.]+?\.php$/.test(h.pathname) && h.searchParams.has('code')) { return h.searchParams.get('code') + '?verif=0'; } break;
        //         case 'kiiw.icu': if (h.pathname === '/check.php' && h.searchParams.has('alias') && h.searchParams.has('wis') && h.searchParams.has('siw')) { return 'https://kiiw.icu/' + h.searchParams.get('alias') + '?wis=' + h.searchParams.get('wis') + '&siw=' + h.searchParams.get('siw'); } break;
        //         default: break;
        //     }
        // })(new URL(location.href)); if (l) { location.href = l; }
        // BypassedByBloggerPemula(/mediafire.com/, function () {
        //     var bass; var md = function closeWindows() { window.close(); clearInterval(bass); };
        //     var mf = bp('.download_link .input').getAttribute('href'); console.log(mf); location.replace(mf); bass = setInterval(md, 1000 * 5);
        // });
        // BypassedByBloggerPemula(/nathanaeldan.pro|freddyoctavio.pro|davisonbarker.pro/, function () {
        //     var urls = new URL(document.URL); var dest = urls.searchParams.get("dest"); var decoded = decodeURI(dest);
        //     redirect(decoded);
        // });
        // BypassedByBloggerPemula(/tei.ai|clk.asia|clicksfly.com/, function () {
        //     var linkbypass = atob(`aH${bp("#link-view [name='token']").value.split("aH").slice(1).join("aH")}`);
        //     redirect(linkbypass);
        // });
        // BypassedByBloggerPemula(/drive.google.com/, function () {
        //     var dg = window.location.href.split('/').slice(-2)[0];
        //     if (window.location.href.includes('drive.google.com/file/d/')) { redirect(`https://drive.google.com/u/0/uc?id=${dg}&export=download`).replace('<br />', ''); }
        //     else if (window.location.href.includes('drive.google.com/u/0/uc?id')) { bp('#downloadForm').submit(); } else { }
        // });
        // BypassedByBloggerPemula(/anonym.ninja/, function () {
        //     var fd = window.location.href.split('/').slice(-1)[0];
        //     redirect(`https://anonym.ninja/download/file/request/${fd}`);
        // });
        // BloggerPemula('tr.link', 'url,api', '', false);
        // BloggerPemula('crazyblog.in', 'postid', '', false);
        // BloggerPemula('niinga.com', 'get', 'https://liinkat.com/', false);
        // BloggerPemula('m.newhit.me', 'link', 'https://link3s.net/', false);
        // BloggerPemula('wpking.in', 'link', 'https://o.ovlinks.com/', false);
        // BloggerPemula('soft3arbi.com', 'get', 'https://up4cash.com/', false);
        // BloggerPemula('jazbaat.in', 'link', 'https://go.rplinks.in/', false);
        // BloggerPemula('battlechamp.in', 'link', 'https://hblinks.in/', false);
        // BloggerPemula('blog.hostratgeber.de', 'go', 'https://c2g.at/', false);
        // BloggerPemula('cryptofly.info', 'go', 'https://makeshort.me/', false);
        // BloggerPemula('glamgreet.com', 'go', 'https://go.linkrex.net/', false);
        // BloggerPemula('techy4you.in', 'link', 'https://go.hpshort.in/', false);
        // BloggerPemula('1apple.xyz', 'link', 'https://link.turkdown.com/', false);
        // BloggerPemula('apasih.my.id', 'link', 'https://go.gets4link.com/', false);
        // BloggerPemula('takez.co', 'token', 'https://links.spidermods.in/', false);
        // BloggerPemula('encyclopedia-24.com', 'get', 'https://bestcash2020.com/', false);
        // BloggerPemula('claimfey.com|zubatecno.com', 'link', 'https://zuba.link/', false);
        // BloggerPemula('ffworld.xyz|doibihar.org', 'link', 'https://go.linkbnao.com/', false);
        // BloggerPemula('puggygaming.com|webmobile.store', 'get', 'https://link2end.com/p/', false);
        // BloggerPemula('sport4you.net|nadersoft7.com|manga2day.com|pickhopes.com', 'link', '', false);
        // BloggerPemula('exe.io|birdurls.com|dash-free.com|owllink.net', 'url,api', 'https://', false);
        // BloggerPemula('digiromotion.com|visflakes.com|campki.com', 're', 'https://zipfy.link/', false);
        // BloggerPemula('qualitystudymaterial.in', 'link', 'https://thehostingmentor.com/mylink/', false);
        // BloggerPemula('coin-free.com|kienthucrangmieng.com|coindoog.com|tieutietkiem.com|askpaccosi.com|shopsixseven.com|hoclamdaubep.com', 'wpsafelink', '', false);
        // BypassedByBloggerPemula(/7apple.net/, ['go', 'https://illink.net/'], false);
        // BypassedByBloggerPemula(/ouo.today/, function () { location.href = nextUrl; });
        // BypassedByBloggerPemula(/yoshare.net/, function () { bp('#yuidea').submit(); });
        // BypassedByBloggerPemula(/sharemods.com/, function () { $('#dForm').submit(); });
        // BypassedByBloggerPemula(/stfly.me/, function () { bp('#submit_data').submit(); });
        // BypassedByBloggerPemula(/supersites.xyz/, { '/verifysl.php': ['url', ''], }, false);
        // BypassedByBloggerPemula(/btcpany.com/, function () { bp('#link1s-form').submit(); });
        // BypassedByBloggerPemula(/upload.ee/, function () { clickIfElementExists('#d_l', 2); });
        // BypassedByBloggerPemula(/specx.me/, function () { clickIfElementExists('.butt', 2); });
        // BypassedByBloggerPemula(/tmker.com/, function () { bp('#submit_first_page').submit(); });
        // BypassedByBloggerPemula(/prx.ee/, function () { clickIfElementExists('#final_link', 1); });
        // BypassedByBloggerPemula(/1ink.cc/, function () { clickIfElementExists('#countingbtn', 1); });
        // BypassedByBloggerPemula(/esenr.com/, { '/': ['link', 'https://go.bcdshort.xyz/'], }, false);
        // BypassedByBloggerPemula(/bitcomarket.net/, { '/': [RexBp, 'https://adshorti.co/'], }, false);
        // BypassedByBloggerPemula(/netfile.cc/, { '/': ['link', 'https://next.netfile.cc/'], }, false);
        // BypassedByBloggerPemula(/up-load.one/, function () { clickIfElementExists('#submitbtn', 1); });
        // BypassedByBloggerPemula(/makemoneywithurl.com/, function () { bp('#hidden form').submit(); });
        // BypassedByBloggerPemula(/evoload.io/, function () { clickIfElementExists('#generatebtn', 1); });
        // BypassedByBloggerPemula(/keeplinks.org/, function () { clickIfElementExists('#btnchange', 2); });
        // BypassedByBloggerPemula(/theconomy.me/, { '/': ['link', 'https://link.theconomy.me/'], }, false);
        // BypassedByBloggerPemula(/punyablog.my.id/, { '/safe.php': ['link', 'https://q8c.xyz/'], }, false);
        // BypassedByBloggerPemula(/mkomsel.com/, function () { clickIfElementExists('#downloadfile', 12); });
        // BypassedByBloggerPemula(/bayfiles.com/, function () { clickIfElementExists('#download-url', 2); });
        // BypassedByBloggerPemula(/amazingdarpon.com/, { '/': ['link', 'https://go.zolomix.in/'], }, false);
        // BypassedByBloggerPemula(/oyunzak.com|gazianteppetektemizleme.net/, { '/': ['link', ''], }, false);
        // BypassedByBloggerPemula(/drop.download/, function () { clickIfElementExists('.btn-download', 2); });
        // BypassedByBloggerPemula(/automotur.club|sanoybonito.club/, function () { bp('#page2').submit(); });
        // BypassedByBloggerPemula(/loot4cash.com/, { '/verify/': [RexBp, 'http://ads.adloot.in/'], }, false);
        // BypassedByBloggerPemula(/1shortlink.com/, function () { clickIfElementExists('#redirect-link', 3); });
        // BypassedByBloggerPemula(/file-upload.com/, function () { clickIfElementExists('#download-btn', 2); });
        // BypassedByBloggerPemula(/mirrored.to/, function () { clickIfElementExists('.larger.secondary', 2); });
        // BypassedByBloggerPemula(/forex-trnd.com|gawbne.com/, function () { bp('#exfoary-form').submit(); });
        // BypassedByBloggerPemula(/modebaca.com/, function () { clickIfElementExists('.btn-success.btn', 1); });
        // BypassedByBloggerPemula(/sahityt.com/, { '/verify/': [RexBp, 'https://google.v2links.com/'], }, false);
        // BypassedByBloggerPemula(/dddrive.me/, function () { clickIfElementExists('.btn-outline-primary', 2); });
        // BypassedByBloggerPemula(/jameeltips.us/, function () { clickIfElementExists('#continue_button_1', 1); });
        // BypassedByBloggerPemula(/technicalramno1.link/, { '/': ['link', 'https://go.urlmoney.xyz/'], }, false);
        // BypassedByBloggerPemula(/usersdrive.com/, function () { clickIfElementExists('.btn-download.btn', 1); });
        // BypassedByBloggerPemula(/cutt.net|cut-y.net/, function () { clickIfElementExists('#submit-button', 3); });
        // BypassedByBloggerPemula(/post.copydev.com/, function () { clickIfElementExists('.btn-success.btn', 6); });
        // BypassedByBloggerPemula(/uppit.com/, function () { clickIfElementExists('.btn-primary.btn-xl.btn', 2); });
        // BypassedByBloggerPemula(/krakenfiles.com/, function () { clickIfElementExists('.download-now-text', 2); });
        // BypassedByBloggerPemula(/lux.adinsurance.xyz/, { '/': ['link', 'https://go.adinsurance.xyz/'], }, false);
        // BypassedByBloggerPemula(/go.insurglobal.xyz/, { '/': ['link', 'https://link.insurglobal.xyz/'], }, false);
        // BypassedByBloggerPemula(/vikashmewada.com/, { '/verify/': [RexBp, 'https://redd.crazyblog.in/'], }, false);
        // BypassedByBloggerPemula(/adsy.pw|linkpay.cc|wi.cr|pndx.live/, function () { bp('#link-view').submit(); });
        // BypassedByBloggerPemula(/bitfly.io/, function () { clickIfElementExists('#submitbtn', 3, 'setInterval'); });
        // BypassedByBloggerPemula(/linegee.net/, function () { clickIfElementExists('.btn-xs.btn-primary.btn', 2); });
        // BypassedByBloggerPemula(/zippyshare.com|filedm.com/, function () { clickIfElementExists('#dlbutton', 3); });
        // BypassedByBloggerPemula(/techload.co|largestpanel.in/, function () { clickIfElementExists('#tp-snp2', 1); });
        // BypassedByBloggerPemula(/toptap.website/, function () { clickIfElementExists('#cl1 > a:nth-child(1)', 3); });
        // BypassedByBloggerPemula(/ethereumearner4.club/, { '/': [RexBp, 'https://solanaborobudur.my.id/'], }, false);
        // BypassedByBloggerPemula(/bildirim.in|bildirim.eu/, function () { clickIfElementExists('#btnPermission', 1); });
        // BypassedByBloggerPemula(/forex-gold.net/, function () { clickIfElementExists('.s-btn-f', 5, 'setInterval'); });
        // BypassedByBloggerPemula(/techrfour.com|veganal.co/, { '/go/': [RexBp, 'https://push.bdnewsx.com/'], }, false);
        // BypassedByBloggerPemula(/userscloud.com|dosya.co/, function () { clickIfElementExists('#btn_download', 2); });
        // BypassedByBloggerPemula(/hexupload.net/, function () { clickIfElementExists('.btn-success.btn-lg.btn', 1); });
        // BypassedByBloggerPemula(/ashort1a.xyz|ashort2a-bro.tk/, function () { clickIfElementExists('#proceed', 1); });
        // BypassedByBloggerPemula(/solidfiles.com/, function () { clickIfElementExists('.btn-sm.btn-primary.btn', 2); });
        // BypassedByBloggerPemula(/infinityfreescripts.xyz/, { '/': ['link', 'https://technologylover.in/'], }, false);
        // BypassedByBloggerPemula(/lootlinks.xyz/, function () { clickIfElementExists('#get-link', 5, 'setInterval'); });
        // BypassedByBloggerPemula(/techgeek.digital/, function () { bp('.text-center > form:nth-child(4)').submit(); });
        // BypassedByBloggerPemula(/insuranceblog.xyz/, { '/blog/': ['link', 'https://gos.insuranceblog.xyz/'] }, false);
        // BypassedByBloggerPemula(/insurance-space.xyz/, { '/': ['link', 'https://link.insurance-space.xyz/'], }, false);
        // BypassedByBloggerPemula(/link.linksfire.co/, function () { location = location.href.replace('link', 'blog'); });
        // BypassedByBloggerPemula(/dailyuploads.net/, function () { clickIfElementExists('.inner > a:nth-child(9)', 2); });
        // BypassedByBloggerPemula(/files.im/, function () { clickIfElementExists('.btn-dow.btn', 2); bp('#F1').submit(); });
        // BypassedByBloggerPemula(/lets.5get.net/, function () { clickIfElementExists('.jump_link > a:nth-child(1)', 2); });
        // BypassedByBloggerPemula(/blog-everything.com/, function () { clickIfElementExists('button.btn.btn-warning', 3); });
        // BypassedByBloggerPemula(/xmod.in/, { '/blog/verify/': [RexBp, 'https://speedynews.xyz/blog3/verify/?'], }, false);
        // BypassedByBloggerPemula(/tkcounter.com|antonimos.de/, function () { clickIfElementExists('#cbt', 5, 'setInterval'); });
        // BypassedByBloggerPemula(/douploads.net/, function () { clickIfElementExists('.btn-primary.btn-lg.btn-block.btn', 2); });
        // BypassedByBloggerPemula(/go.birdurls.com|go.owllink.net/, function () { location = location.href.replace('go.', ''); });
        // BypassedByBloggerPemula(/takem.co|themorningtribune.com/, { '/verify/': [RexBp, 'https://push.bdnewsx.com/'], }, false);
        // BypassedByBloggerPemula(/informaxonline.com|gaminplay.com/, { '/': ['link', 'https://go.adslinkfly.online/'], }, false);
        // BypassedByBloggerPemula(/webhostingtips.club/, { '/safe.php': ['link', 'https://jrlinks.in/safe2.php?link='], }, false);
        // BypassedByBloggerPemula(/mynewsmedia.co/, function () { clickIfElementExists('.file-download-btn.btn-primary.btn', 5); });
        // BypassedByBloggerPemula(/ponselharian.com/, function () { if (elementExists('#link-view')) { window.scrollTo(0, 9999); } });

        // // BypassedByBloggerPemula(/blogmenjelajahi.com/, function () { if (ClickIfelementExists('#link-view')) { window.scrollTo(0, 9999); } });

        // BypassedByBloggerPemula(/linkerload.com/, function () { clickIfElementExists("#download form input[id='button1']", 2); });
        // BypassedByBloggerPemula(/ayelads.com/, function () { clickIfElementExists('.btn-bl.btn-primary.btn', 5, 'setInterval'); });
        // BypassedByBloggerPemula(/mp4upload.com/, function () { clickIfElementExists('#todl', 2); $("form[name='F1']").submit(); });
        // BypassedByBloggerPemula(/forex-gold.net|mobitaak.com/, function () { clickIfElementExists('.s-btn-f', 3, 'setInterval'); });
        // BypassedByBloggerPemula(/adfoc.us/, function () { if (elementExists('#skip')) { let adf = bp('.skip').href; redirect(adf); } });
        // BypassedByBloggerPemula(/wp.sekilastekno.com/, function () { clickIfElementExists('#btget > form > div > button', 3, 'setInterval'); });
        // BypassedByBloggerPemula(/letsupload.io/, function () { clickIfElementExists('button.btn.btn--primary.type--uppercase', 1); });
        // BypassedByBloggerPemula(/informaxonline.com|gaminplay.com/, { '/verify/': [RexBp, 'https://go.adslinkfly.online/'], }, false);
        // BypassedByBloggerPemula(/healdad.com|gamalk-sehetk.com/, function () { clickIfElementExists('.submitBtn', 3, 'setInterval'); });
        // BypassedByBloggerPemula(/foodyrecipe.xyz|delishwell.com|artiskini.com/, { '/': ['link', 'https://link.paid4link.net/'], }, false);
        // BypassedByBloggerPemula(/docs.google.com/, function () { if (elementExists('#uc-dl-icon')) { bp('#downloadForm').submit(); } else { } });
        // BypassedByBloggerPemula(/workupload.com/, function () { if (elementExists('#download')) { clickIfElementExists('.btn-prio.btn', 2); } });
        // BypassedByBloggerPemula(/techus.website/, function () { $('.code-block-4.code-block > form').submit(); $('.topnav > form').submit(); });
        // BypassedByBloggerPemula(/cooklike.info|mercedesellington.com|model-tas-terbaru.com/, { '/': ['link', 'https://yousm.link/'], }, false);
        // BypassedByBloggerPemula(/mobi2c.com|newforex.online|world-trips.net/, function () { clickIfElementExists('#go_d', 3, 'setInterval'); });
        // BypassedByBloggerPemula(/bayfiles.com|anonfiles.com|openload.cc|lolabits.se/, function () { clickIfElementExists('#download-url', 2); });
        // BypassedByBloggerPemula(/1link.club/, function () { $("a[target='_blank']").removeAttr("target"); clickIfElementExists('#download', 1); });
        // BypassedByBloggerPemula(/bcvc.xyz/, function () { clickIfElementExists('.js-scroll-trigger.btn-xl.btn-outline.btn', 3, 'setInterval'); });
        // BypassedByBloggerPemula(/zegtrends.com/, function () { clickIfElementExists('#go', 3); clickIfElementExists('.bsub', 3, 'setInterval'); });
        // BypassedByBloggerPemula(/forex-articles.com|forexlap.com|forexmab.com/, function () { clickIfElementExists('.oto > a:nth-child(1)', 1); });
        // BypassedByBloggerPemula(/linkspy.cc/, function () { if (elementExists('.skipButton')) { let lsp = bp('.skipButton').href; redirect(lsp); } });
        // BypassedByBloggerPemula(/uploadhaven.com/, function () { clickIfElementExists('.alert > a:nth-child(1)', 2); bp('#form-download').submit(); });
        // BypassedByBloggerPemula(/wrbloggers.com/, function () { clickIfElementExists('.btn-danger.btn-block.btn', 3); bp('#nextpagelink').submit(); });
        // BypassedByBloggerPemula(/cashearn.cc|bitlinks.pw/, function () { clickIfElementExists('.next-button.btn-lg.btn-info.btn', 3, 'setInterval'); });
        // BypassedByBloggerPemula(/racedepartment.com/, function () { $("a[target='_blank']").removeAttr("target"); clickIfElementExists('.button--cta', 2); });
        // BypassedByBloggerPemula(/hxfile.co|ex-load.com|megadb.net/, function () { clickIfElementExists('.btn-dow.btn', 2); bp("form[name='F1']").submit(); });
        // BypassedByBloggerPemula(/appsbull.com/, function () { clickIfElementExists('#button.blog_btn', 3); clickIfElementExists('#next', 3, 'setInterval'); });
        // BypassedByBloggerPemula(/blogginglass.com/, { '/': ['getlink', 'http://go.mozlink.net/'], '/blog/': ['getlink', 'http://go.fire-link.net/'] }, false);
        // BypassedByBloggerPemula(/tinyurl.is/, function () { if (elementExists('ul > li > a')) { const link = bp('a[id^=newskip-btn]').href; redirect(link); } });
        // BypassedByBloggerPemula(/mega4up.org/, function () { clickIfElementExists('input.btn.btn-info.btn-sm', 2); clickIfElementExists('.btn-dark.btn', 2); });
        // BypassedByBloggerPemula(/uploadev.org/, function () { clickIfElementExists('#dspeed > input:nth-child(3)', 1); clickIfElementExists('.directl', 1); });
        // BypassedByBloggerPemula(/fx4vip.com/, function () { $("a #button1[disabled='disabled']").removeAttr("disabled"); clickIfElementExists('#button1', 2); });
        // BypassedByBloggerPemula(/satoshi-win.xyz|shorterall.com|promo-visits.site/, function () { clickIfElementExists('.box-main > button:nth-child(3)', 1); });
        // BypassedByBloggerPemula(/send.cm|racaty.net|files.im|sharemods.com|clicknupload.to||modsbase.com/, function () { clickIfElementExists('#downloadbtn', 1); });
        // BypassedByBloggerPemula(/sub2get.com/, function () { if (elementExists('#butunlock')) { let subt = bp('#butunlock > a:nth-child(1)').href; redirect(subt); } });
        // BypassedByBloggerPemula(/ac.totsugeki.com/, function () { $("a[target='_blank']").removeAttr("target"); clickIfElementExists('.btn-lg.btn-success.btn', 2); });
        // BypassedByBloggerPemula(/fexkomin.xyz/, function () { $("a[target='_blank']").removeAttr("target"); clickIfElementExists('.btn-captcha.btn-danger.btn', 3); });
        // BypassedByBloggerPemula(/theprice.biz|massive.my.id|activity.my.id|caview.my.id/, function () { clickIfElementExists('a.btn.btn-primary.m-2.btn-captcha', 6); });
        // BypassedByBloggerPemula(/marocclickers.xyz/, function () { clickIfElementExists('#link-view > div:nth-child(5) > center:nth-child(5) > div:nth-child(1)', 1); });
        // BypassedByBloggerPemula(/upload-4ever.com/, function () { clickIfElementExists("input[name='method_free']", 2); clickIfElementExists('#downLoadLinkButton', 5); });
        // BypassedByBloggerPemula(/app.rancah.com|tour.rancah.com|shortly.xyz/, function () { clickIfElementExists('.get-link.btn-lg.btn-success.btn', 5, 'setInterval'); });
        // BypassedByBloggerPemula(/claimclicks.com/, { '/blog/': ['link', 'https://claimclicks.com/short/'], '/verify/': [RexBp, 'https://short.claimclicks.com/'], }, false);
        // BypassedByBloggerPemula(/shortit.pw/, function () { clickIfElementExists('.pulse.btn-primary.btn', 1); clickIfElementExists('.text-primary.btn-secondary.btn', 3); });
        // BypassedByBloggerPemula(/fileshare.adshorturl.com/, function () { clickIfElementExists('.download-timer > a:nth-child(1) > span:nth-child(1)', 4, 'setInterval'); });
        // BypassedByBloggerPemula(/1fichier.com/, function () { if (elementExists('#pass')) { } else { clickIfElementExists('.btn-orange.btn-general.ok', 1); bp('.alc').submit(); } });
        // BypassedByBloggerPemula(/adsgo.digital|newsnowbd.com|techus.website/, function () { clickIfElementExists('.myButton', 2); $('.code-block-1.code-block > form').submit(); });
        // BypassedByBloggerPemula(/uptobox.com/, function () { clickIfElementExists('a.big-button-green:nth-child(1)', 2); clickIfElementExists('.download-btn', 3, 'setInterval'); });
        // BypassedByBloggerPemula(/suratresmi.id/, function () { clickIfElementExists('button#hmn.btn-more', 3, 'setInterval'); clickIfElementExists('a#hmn.btn-more', 3, 'setInterval'); });
        // BypassedByBloggerPemula(/diudemy.com/, function () { clickIfElementExists('#button.blog_btn', 2); clickIfElementExists("#myDiv > .text-center > .blog_btn", 3, 'setInterval'); });
        // BypassedByBloggerPemula(/apkadmin.com/, function () { clickIfElementExists('.text > a:nth-child(4) > img:nth-child(1)', 1); bp('.download-file-button > form:nth-child(1)').submit(); });
        // BypassedByBloggerPemula(/nightfallnews.com/, function () { clickIfElementExists('.mx-auto > .btn-success.btn', 3); clickIfElementExists("img[class^='ob-rec-image']", 5, 'setInterval'); });
        // BypassedByBloggerPemula(/newsharsh.com/, { '/box-office/verify/': [RexBp, 'https://vikashmewada.com/verify/?'], '/english/verify/': [RexBp, 'https://crazyblog.in/harsh/verify/?'], }, false);
        // BypassedByBloggerPemula(/vosan.co/, function () { $("a[target='_blank']").removeAttr("target"); clickIfElementExists('.elementor-size-lg', 2); clickIfElementExists('.wpdm-download-link', 2); });
        // BypassedByBloggerPemula(/4shared.com/, function () { clickIfElementExists('.jsDownloadButton', 2); if (elementExists('.freeDownloadButton')) { bp("form[name^='redirectToD3Form']").submit(); } });
        // BypassedByBloggerPemula(/uploadrar.com|chedrive.net/, function () { clickIfElementExists('.mngez-free-download', 2); clickIfElementExists('#direct_link > a:nth-child(1)', 2); $('#downloadbtn').click(); });
        // BypassedByBloggerPemula(/techydino.net|mdn.world|cryptowidgets.net|wiki-topia.com/, function () { if (elementExists('.g-recaptcha')) { } else { clickIfElementExists("input[type='submit']", 4, 'setInterval'); } });
        // BypassedByBloggerPemula(/studyuo.com/, { '/pro/': ['link', 'https://shrinkpay.crazyblog.in'], '/short/verify/': [RexBp, 'https://redd.crazyblog.in'], '/blog/verify/': [RexBp, 'https://speedynews.xyz/verify/?'], }, false);
        // BypassedByBloggerPemula(/crazyblog.in/, { '/finance/': ['link', 'https://shrinkpay.crazyblog.in'], '/hars/verify/': [RexBp, 'https://redd.crazyblog.in'], '/harsh/verify/': [RexBp, 'https://ser3.crazyblog.in/'], }, false);
        // BypassedByBloggerPemula(/shinchu.net|shinbhu.net|riadblog.com|riadcrypto.com|donia2tech.com|www.cgyojna.com/, function () { var form = document.getElementById('wpsafelink-landing'); redirect(JSON.parse(atob(form.newwpsafelink.value)).linkr); });
        // BypassedByBloggerPemula(/wiki-topia.com/, function () { if (elementExists('.g-recaptcha')) { } else { clickIfElementExists("input[style^='font-weight: 700']", 2, 'setInterval'); clickIfElementExists("input[style^='font-weight: 500']", 3, 'setInterval'); } });
        // BypassedByBloggerPemula(/dutchycorp.space|dutchycorp.ovh|gtlink.co|fc-lc.com|mdn.rest|antonimos.de|ctbl.me|zshort.cc|feyyora.fun/, function () { var ticker = setInterval(function () { try { window.grecaptcha.execute(); clearInterval(ticker); } catch (e) { } }, 3000); });
        // BypassedByBloggerPemula(/linkvertise.com/, function () { var linkver = new XMLHttpRequest(); linkver.responseType = 'json'; linkver.open('GET', `https://vacant-curtly-composure.herokuapp.com/bypass2?url=${document.location.href.slice(0, -1)}`, !0); linkver.onload = function (n) { 4 === linkver.readyState && redirect(this.response.destination); }; linkver.send(null); });
        // BypassedByBloggerPemula(/mboost.me/, function () { if (elementExists('#stepid')) { fetch(`https://api.bypass.vip/`, { "headers": { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", "x-requested-with": "XMLHttpRequest" }, "body": new URLSearchParams({ url: location.href }), "method": "POST", }).then(res => res.json()).then(res => { if (res.status !== "success") { redirect(res.destination); } }); } else { } });
        // BypassedByBloggerPemula(/ytsubme.com/, function () { if (elementExists('.locked')) { fetch(`https://api.bypass.vip/`, { "headers": { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", "x-requested-with": "XMLHttpRequest" }, "body": new URLSearchParams({ url: location.href }), "method": "POST", }).then(res => res.json()).then(res => { if (res.status !== "success") { redirect(res.destination); } }); } else { } });
        // BypassedByBloggerPemula(/letsboost.net/, function () { if (elementExists('#steps')) { fetch(`https://api.bypass.vip/`, { "headers": { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", "x-requested-with": "XMLHttpRequest" }, "body": new URLSearchParams({ url: location.href }), "method": "POST", }).then(res => res.json()).then(res => { if (res.status !== "success") { redirect(res.destination); } }); } else { } });
        // BypassedByBloggerPemula(/social-unlock.com/, function () { if (elementExists('#link')) { fetch(`https://api.bypass.vip/`, { "headers": { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", "x-requested-with": "XMLHttpRequest" }, "body": new URLSearchParams({ url: location.href }), "method": "POST", }).then(res => res.json()).then(res => { if (res.status !== "success") { redirect(res.destination); } }); } else { } });
        // BypassedByBloggerPemula(/boostme.link/, function () { if (elementExists('#targetbtn')) { fetch(`https://api.bypass.vip/`, { "headers": { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", "x-requested-with": "XMLHttpRequest" }, "body": new URLSearchParams({ url: location.href }), "method": "POST", }).then(res => res.json()).then(res => { if (res.status !== "success") { redirect(res.destination); } }); } else { } });
        // BypassedByBloggerPemula(/sub2unlock.net/, function () { if (elementExists('#theLinkID')) { fetch(`https://api.bypass.vip/`, { "headers": { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", "x-requested-with": "XMLHttpRequest" }, "body": new URLSearchParams({ url: location.href }), "method": "POST", }).then(res => res.json()).then(res => { if (res.status !== "success") { redirect(res.destination); } }); } else { } });
        // BypassedByBloggerPemula(/99faucet.com|readi.online|cempakajaya.com|tribuncrypto.com|bitzite.com|intmagz.com|nivaprofit.xyz|videoclip.info|blog-forall.com|punyablog.my.id|punyamerk.top|lycoslink.com|aduzz.com|cdrab.com|soltoshindo.com|crypto-news-hub.com|onlineteori.my.id|xtrabits.click|crypto-fi.net|bitcrypto.info|admediaflex.com|wpcheap.net|claimcrypto.cc|ourcoincash.xyz|9-animie.co/, function () { var bypasslink = atob(`aH${bp("#landing [name='go']").value.split("aH").slice(1).join("aH")}`); redirect(bypasslink, false); });
        // BypassedByBloggerPemula(/crewbase.net|crewus.net|faucet.work|techlearningtube.in|wildblog.me|bebodybuilder.com|thumb8.net|crypto-blog.xyz|thumb9.net|allcryptoz.net|jiotech.net|topcryptoz.net|ultraten.net|uniqueten.net|technoflip.in|studyranks.in|brixarena.tech|saqercoin.xyz|crypto4tun.com|mrsaifi.xyz|manthans.in|adshorturl.com|i-polls.com|digitalnaz.net|crickblaze.com|welovecrypto.xyz/, function () { var el = document.querySelector("input[name=newwpsafelink]"); redirect(JSON.parse(atob(el.value)).linkr); });
    }
})();