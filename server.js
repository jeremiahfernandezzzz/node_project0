
const express = require('express');
const app = express();
const brain = require('brain.js');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/test', function(request, response){
  
  var output = net.run(request.body.input);

  // console.log(output);
  response.send("input: " + request.body.input + "<br/>" + "output: " + JSON.stringify(output));
})

// app.listen(3000);

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

var net = new brain.recurrent.LSTM();

net.train([
  {
    "input": "Mayor Nene wag kang ganyan buong NCR suspended pero Las PiÃ±as hindi? Anong po ang peg niyo?",
    "output": "anger"
  },
  {
    "input": "Dear ulan, di ka lang nabigyan ng pangalan, kailangan iiyak sa loob ng isang linggo? Di ka na bata. Okay? Grow up.",
    "output": "anger"
  },
  {
    "input": "RT @NgaNgaDre: Dear China, Diba mahilig naman kayong mang akin? Utang na loob, sa inyo na yung baha. Taos puso naming pinapamigay sa inyo.",
    "output": "anger"
  },
  {
    "input": "@_YelynaWoo94 adik.nasa marikina kasi yun kaya ayun napasukan ng putik.badtrip!",
    "output": "anger"
  },
  {
    "input": "RT @nonanochi @kyiepot kaya nga e #itsshowtime magpasikat sa panahon ng tag-ulan. Kainis kang kasama sa tag-ulan #Apple",
    "output": "anger"
  },
  {
    "input": "Wala nanamang load x)  Sa sobrang baha sa labas wala nang bukas na tindahan -.-",
    "output": "anger"
  },
  {
    "input": "MAYOR ANO BA!? SABI MO STATE OF CALAMITY ANG PASIG TAPOS HINDI KAMI SUSPENDED?! GULO AH! -__-",
    "output": "anger"
  },
  {
    "input": "RT @Pakyuuuuuuu: Yung hindi ka makaalis sa sobrang lakas ng ulan.",
    "output": "anger"
  },
  {
    "input": "haist kainis baha... baha.... baha.... pero saya enjoy sa pag huli ng fish  .. adicted!!",
    "output": "anger"
  },
  {
    "input": "@IamMarianneG Tiis lang. Bwiset kasi yang ulan na yan e. Hahaha",
    "output": "anger"
  },
  {
    "input": "@elventura06 Dina baha sainyo?",
    "output": "anticipation"
  },
  {
    "input": "@rossan1218 pupunta naman ulet ako office bukas.. Resume na naman office sa Manila sa Monday noh..",
    "output": "anticipation"
  },
  {
    "input": "RT @iamsuperbianca: important! RT @tonyocruz Kung naligtas ka o kakilala mo dahil sa #RescuePH, tweet #safenow para matanggal sa listaha ...",
    "output": "anticipation"
  },
  {
    "input": "@anneloves12 @iamsuperniko ah ok nako traffic s edsa ptigil tigil un for sure",
    "output": "anticipation"
  },
  {
    "input": "RT @monaarcimunoz: Kya nmn pla mag recycle png gawa ng mga kung anoano na pwede sakyan s baha at pnagkakakitaan pa! Bat di mag recycle p ..",
    "output": "anticipation"
  },
  {
    "input": "Sana naman bumaba na yun baha :( wla din kami biyahe going to makati :(",
    "output": "anticipation"
  },
  {
    "input": "@timmyjei keep safe.. Bumuhos n nman ulan...",
    "output": "anticipation"
  },
  {
    "input": "@PANDAAcoco =))) Hahaha sana wala nang ulan bukas... :( =))",
    "output": "anticipation"
  },
  {
      "input": "@ChoppyKaDre Ongae, at sana huwag mawalan ng kuryente.. :( Baha ba sa inyo, Allen?",
      "output": "anticipation"
  },
  {
      "input": "@Lianepeeeyy oo nga eh. Sana matapos na ang ulan.",
      "output": "anticipation"
  },
  {
    "input": "@Zharvieishere Dito nga sa banyo namin mabaho dahil sa baha eh. Doon pa kaya? Pero mataas naman floor natin, di na siguro affected doon",
    "output": "disgust"
  },
  {
    "input": "Ulan. Na naman. Tumigil ka.",
    "output": "disgust"
  },
  {
    "input": "akoy isang baha na magdadala sayo sa kapwa basura haha",
    "output": "disgust"
  },
  {
    "input": "RT @ShutangInaBeks: Yung eksenang mukhang fresh na fresh na naman ang paa mo pagkatapos lumusong sa baha. Foot spa levels! #ShutangInaBeks",
    "output": "disgust"
  },
  {
    "input": "@IndayBanat: Dinaig pa ng Hanging Habagat ang mga Bagyo. Hiyang hiya naman kami sa iyo! --tinalo pa si Ondoy..",
    "output": "disgust"
  },
  {
    "input": "RT @imclariceyvhone: @imchelseanicole kaya nga ehh. Mas matindi pa sa Tumana ang flood ko teh..",
    "output": "disgust"
  },
  {
    "input": "WALA NA NAMANG PASOK SA BUONG ANTIPOLO HAYSSS",
    "output": "disgust"
  },
  {
    "input": "RT @PinoyBookOfLove: Wag mo na ipanalanging magpatuloy ang ulan, kung para lang naman sa iyong katamaran.",
    "output": "disgust"
  },
  {
      "input": "grabe ang ulan prang ondoy,,,hayhayhay",
      "output": "disgust"
  },
  {
    "input": "ang lakas tlaga ng ulan?........2012 n pla?prng knkabhn n aq,..",
    "output": "fear"
  },
  {
    "input": "RT @VGloooove: Ingat kayong lahat please :( Manila, Pampanga, Bulacan and etc. ingat kayo.",
    "output": "fear"
  },
  {
    "input": "Mala-flashflood ang pwersa ng Marikina River, 20.2m as of 3:30 am.  Kuha ng GMA News reporter na si Bam Alegre... http://t.co/w9xHYDCJ",
    "output": "fear"
  },
  {
    "input": "Sa mga may magandang kalooban, Sunduin niyo na po kami dito sa UNIVERSITY TOWER 1 Moret St. Espanya, Manila. Maawa po kayo samin. Haha ðŸš—ðŸ¢",
    "output": "fear"
  },
  {
    "input": "@iamnaomiii baha sobra! Above waist level na ata... 'di ko na macheck lakas ng ulan eh. Sinara na namin lahat ng doors and windows.",
    "output": "fear"
  },
  {
    "input": "RT @upalyansa: Mga Iskolar para sa Bayan, mag-ingat po tayong lahat. Itinaas muli ng PAG-ASA ang RED WARNING SIGNAL sa ulan sa buong Kam ...",
    "output": "fear"
  },
  {
    "input": "Guys mas malala daw ulan mamyang gabi. Stay safe! God bless!",
    "output": "fear"
  },
  {
    "input": "ang dilim nanaman ng kalangitan nakakatakot pagbumuhos ang ulan ang lalaki ng patak..",
    "output": "fear"
  },
  {
      "input": "@zoelogy Eto, ok nmn. Pero ang ulan ay isang delubyo na nagpapabilis ng tibok ng aking puso.",
      "output": "fear"
  },
  {
      "input": "Ang lakas nanaman ng ulan. #Phobia",
      "output": "fear"
  },
  {
    "input": "@aLIANNEdro Magdasal muna tayo na sana wala ng ulan at ligtas yung mahal ko =)) HAHAHAHAHAHAHAH #AWKWARD",
    "output": "joy"
  },
  {
    "input": "Hahahahaha! Tangina yung picture ng aso na nagsesex na nakalubog sa baha =)) Animals in the Philippines nga naman. Chooos!",
    "output": "joy"
  },
  {
    "input": "Tnx God! nawala din ung baha samen :>",
    "output": "joy"
  },
  {
    "input": "@AyieMadrid ang ulan ba ang pinatatamaan mo FRIEND??? XD",
    "output": "joy"
  },
  {
    "input": "UST lang talaga ang maganda kahit baha na.",
    "output": "joy"
  },
  {
    "input": "Thanks Papa God tumigil na yung ulan.",
    "output": "joy"
  },
  {
    "input": "May nakita kami na tae na lumulutang sa baha maya-maya may naglalakad na tao natamaan niya yung tae =)))))))))))",
    "output": "joy"
  },
  {
    "input": "RT @caraeriguel: Salamat sa pagsikat ng araw, Panginoon. â™¥ Mas mapapadali ang paghupa ng baha, at pag-abot ng tulong sa mga kapatid nami ...",
    "output": "joy"
  },
  {
      "input": "@JobxDesales baha paponta jan. :))) yiee. Nagpopoyat. Oi. Gwa mo na history mo??",
      "output": "joy"
  },
  {
      "input": "@IntonGarcia di ba sabog tunog? Yung samin nung weekend, sabog.. Okay naman, wala na ulan :) di naman kami binaha so, okay din talaga :)",
      "output": "joy"
  },
  {
    "input": "Apalit - Mac Arthur Hi-way. First time bumaha ng ganito.( #floodph  @ Apalit Pampanga http://t.co/8sEcAbgQ",
    "output": "sadness"
  },
  {
    "input": "Hello :)......sana mawala na ulan :((",
    "output": "sadness"
  },
  {
    "input": "@CharHernandez okay pa naman ate. Thank God wala pang baha and sana wala na :(",
    "output": "sadness"
  },
  {
    "input": "Ano na ang nangyayari sa Pilipinas :( imba ulan daw. :-s",
    "output": "sadness"
  },
  {
    "input": "@ilovesani I call them na. They are ok though merong patubig sa likod namin kaya umapaw so medyo baha sa labas namin. :(",
    "output": "sadness"
  },
  {
    "input": "@EllaYeahItsMe :(( Pwede sana kasi may cousin ako sa QC kaso busy yun eh.",
    "output": "sadness"
  },
  {
    "input": "@aquinokristina @annecurtissmith help Angono Rizal please. They really need it so badly. They have nothing. Inanod lahat ng Laguna de Bai",
    "output": "sadness"
  },
  {
    "input": "RT @azicorona: Kailan tayo nagka presidenteng anak mayaman na lulusong sa baha? Good job, PNoy. It's sad, though, how our country's batt ...",
    "output": "sadness"
  },
  {
      "input": "I http://t.co/bjXqmcb1?  http://t.co/PfKFUR4c super pagud lakas ng ulan.",
      "output": "sadness"
  },
  {
      "input": "sana tumigila na yung ulan dito samin para makauwi na si mommy... :(",
      "output": "sadness"
  },
  {
    "input": "@ryanDqt hey you made it! Nakalabas ka ba ng airport? Baha everywhere!",
    "output": "surprise"
  },
  {
    "input": "Nahiya naman ako bigla sa mga kasakay ko sa jeep! Habang balot na balot ng plastic ang aking talepano sila naman bold na bold!! Taaaray",
    "output": "surprise"
  },
  {
    "input": "RT @playalovegame: wow pati katipunan baha na :( For real?! Wala sa guni- guni ko ang bahain jan!",
    "output": "surprise"
  },
  {
    "input": "Ganda ganda ng higa ko dito sa kwarto... Tapos pagbaba ko baha na pala. Wow.",
    "output": "surprise"
  },
  {
    "input": "Oh my! Baha pa din..at walang tigil ang pag.ulan :( #prayforPhilippines",
    "output": "surprise"
  },
  {
    "input": "#tq Wow! Baha na tuloy tuloy padin :D http://t.co/bsA32DET",
    "output": "surprise"
  },
  {
    "input": "kaloka.. wala ngang baha sa labas .. bumabaha naman sa rooftop o_O ..",
    "output": "surprise"
  },
  {
    "input": "RT @BtrzBravo: Wow, emo ng Globe. Ayaw makisama. Nakiki-sabay sa habagat na feeling bagyo?!",
    "output": "surprise"
  },
  {
      "input": "@victorvonvitug ay grabe ka! #RescuePH #ReliefPH",
      "output": "surprise"
  },
  {
      "input": "#tq RT @DTM_LillboyJANG: So its true, SNOW in AFRICA! Wow! Flood n Philippines, Earthquake in LA, Volcanic Erruption in NZ! Wat else? http:/ ...",
      "output": "surprise"
  },
  {
    "input": "@anjellerej Kayo mag-ingat! Nakooo, buti tumigil na yung ulan. Huhupa na yan.",
    "output": "trust"
  },
  {
    "input": "RT @Banatero101: Baha ka lang, Pinoy ako! #bangonPilipinas",
    "output": "trust"
  },
  {
    "input": "@Kysleee monitor nyo din tubig jan .bka pasukin din kayo ng baha .pray lang tayo",
    "output": "trust"
  },
  {
    "input": "RT @BoyHaveyTweets: Huhupa rin ang BAHA, Matutuyo rin ang LUPA, Titigil din ang PAG LUHA. Magdasal lang at si GOD ang BAHALA. :) #bangon ...",
    "output": "trust"
  },
  {
    "input": "Laban haring araw!!! Ikaw ang pagasa!",
    "output": "trust"
  },
  {
    "input": "... ini-akyat na ulit sa RED ALERT ang METRO MANILA dahil sa walang hintong pag-ulan... help us GOD...",
    "output": "trust"
  },
  {
    "input": "RT @ryan_chua: Attn sa mga nasa Marikina: @YouAreJenieveve: Kailangan po ng volunteers na tutulong sa Sports Center ngayon. RT! @ryan_chuaâ€",
    "output": "trust"
  },
  {
    "input": "@Karen_DaviLa mam karen bahay na din po dito sa amin sa baliwag bulacan hanggang hita napo ang tubig more power sa bandila",
    "output": "trust"
  },
  {
      "input": "@elleCee14 nadali pla kayo ng baha. tga san k b ? XD eto, normal padin, d nman kc masyado naapektuhan. di kasi nabaha dto. thanks GOD.",
      "output": "trust"
  },
  {
      "input": "RT @PINOY_QUOTES: PRAYER = ay isang power na sandata na walang makakahigit pa. #PrayForThePhilippines",
      "output": "trust"
  }
]);

