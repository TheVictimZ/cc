const fs = require('fs')
const { runtime } = require('../lib/myfunc')
const moment = require('moment-timezone')
const totalFitur = () =>{
var mytext = fs.readFileSync("./hisoka.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
        }

let emot = `${pickRandom(['☍', '々', '〆'])}`
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

//jam sekarang
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	const hours = moment().tz('Asia/Jakarta').format('HH:mm:ss')
	const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
//==============================================
if(hours < "23:59:00"){
var waktuucapan1 = '🕛'
}
if(hours < "02:00:00"){
var waktuucapan1 = '🕜'
}
if(hours < "19:00:00"){
var waktuucapan1 = '🕖' 
}
if(hours < "18:00:00"){
var waktuucapan1 = '🕢'
}
if(hours < "17:00:00"){
var waktuucapan1 = '🕡'
}
if(hours < "16:00:00"){
var waktuucapan1 = '🕠'
}
if(hours < "15:00:00"){
var waktuucapan1 = '🕟'
}
if(hours < "10:00:00"){
var waktuucapan1 = '🕘'
}
if(hours < "06:00:00"){
var waktuucapan1 = '🕠'
}
if(hours < "05:00:00"){
var waktuucapan1 = '🕓'
}
if(hours < "04:00:00"){
var waktuucapan1 = '🕟'
}
if(hours < "03:00:00"){
var waktuucapan1 = '🕒'
}

//pickrandom
let ren =["🕧","🕦","🕥","🕤","🕣","🕢","🕡","🕠",] 
let ron =["⌛","⏳",] 
let stek = pickRandom(ren)
let run = pickRandom(ron)
//allmenu ==============================================
module.exports.menu = (waktuucapan, pushname, isPremium, ) => {
  return `
──〔 DETAIL BOT 〕──

*» ${run}Runtime :* *${runtime(process.uptime())}*
*» 📎Web :* https://ī.am
*» ${waktuucapan1}Waktu :* *${hours}*

──〔 INFO DETAIL 〕──

*» ⚙️Fitur :* *${totalFitur()}*
*» 💬Name Bot :* *Catozolala-Md*

${readmore}
_──〔 ALLMENU 〕──_
*» User :* *${pushname}*

「 ⚔️F U N M E N U 」 ${free}
> ◦.delttt
> ◦.family100
> ◦.halah
> ◦.heleh
> ◦.hilih
> ◦.holoh
> ◦.hulu
> ◦.jadian
> ◦.jodohku
> ◦.math
> ◦.simih
> ◦.suitpvp
> ◦.Tebak
> ◦.tictatoe

「 👥G R O U P M E N U 」 ${free}
> ◦.add
> ◦.antilink
> ◦.antilinkv2
> ◦.antivirus
> ◦.antitoxic
> ◦.autoreact
> ◦.demote
> ◦.on
> ◦.editinfo
> ◦.ephemeral
> ◦.group
> ◦.hidetag
> ◦.kick
> ◦.linkgrup
> ◦.mute
> ◦.promote
> ◦.setdesc
> ◦.setname
> ◦.setppgc
> ◦.tagall
> ◦.totag
> ◦.simi 

「 📥D O N W L O A D M E N U 」 ${free}
> ◦.facebook
> ◦.getmusic
> ◦.getvidieo
> ◦.instagram
> ◦.joox
> ◦.pinterestdl
> ◦.soundcloud
> ◦.tiktokmp3
> ◦.twitter
> ◦.twittermp3
> ◦.ytmp3
> ◦.ytmp4
> ◦.pixiv
> ◦ttslide
> ◦.tiktokslide
> ◦.tiktokfoto
> ◦.ttfoto

「 🤖M E N U A I 」 ${free}
> ◦.simi
> ◦.si
> ◦.ai
> ◦.openai
> ◦.pixiv
> ◦.ai-img

「 📗M E M E M E N U」 ${free}
> ◦.lahelu-foto
> ◦.lahelu-search-foto (Search)
> ◦.lahelu-video
> ◦.lahelu-search-video (search)
> ◦.meme
> ◦.mem (search)
> ◦.mevideo
> ◦.mevid (search)

「 🔍M E N U S E A R C H 」 ${free}
> ◦.alquran
> ◦.aminio
> ◦.drakor
> ◦.gimage
> ◦.google
> ◦.gsmarena
> ◦.hadist
> ◦.iqra
> ◦.jadwalbioskop
> ◦.nowplayingbioskop
> ◦.pinterest
> ◦.play
> ◦.playstore
> ◦.ringtone
> ◦.stalk
> ◦.tafsirsurah
> ◦.wellpaper
> ◦.wattpad
> ◦.webtoons
> ◦.wikimedia
> ◦.ringtone
> ◦.yts
> ◦.ytsearch
> ◦.tiktokuser
> ◦.ttuser
> ◦.usertt
> ◦.playtiktok
> ◦.searchtt
> ◦.searchtiktok
> ◦.tiktoksearch
> ◦.pixiv

「 📮R A N D O M M E N U 」 ${free}
> ◦.anime
> ◦.blowjob
> ◦.bucinquote
> ◦.coffe
> ◦.couple
> ◦.dilanquote
> ◦.husbu
> ◦.katasenja
> ◦.motivasi
> ◦.neko
> ◦.nekos
> ◦.puisi
> ◦.quotesanime
> ◦.shinobu
> ◦.
> ◦.waifu
> ◦.waifus

「 📍M A K E R M E N U 」 ${free}
> ◦.3dchristmas
> ◦.3dcrackedstone
> ◦.3ddeepsea
> ◦.3dgradient
> ◦.3dneonlight
> ◦.3drainbow
> ◦.3dscifi
> ◦.3dwaterpipe
> ◦.americanflag
> ◦.beach
> ◦.berry
> ◦.blackpink
> ◦.blackpink
> ◦.bluecircuit
> ◦.burnpapper
> ◦.butterfly
> ◦.christmasholiday
> ◦.coffecup
> ◦.crossfire
> ◦.dropwater
> ◦.ffcover
> ◦.fiction
> ◦.fireworksparkle
> ◦.foggywindow
> ◦.galaxy
> ◦.glass
> ◦.gluetext
> ◦.grassmsg
> ◦.greenhorror
> ◦.halloweenskeleton
> ◦.harrypotter
> ◦.harrypotter
> ◦.igcertificate
> ◦.impressiveglitch
> ◦.lovemsg
> ◦.lovetext
> ◦.magma
> ◦.matrix
> ◦.metallic
> ◦.naruto
> ◦.naturalleaves
> ◦.neon
> ◦.neondevils
> ◦.retrolol
> ◦.romantic
> ◦.shadow
> ◦.sketch
> ◦.smoke
> ◦.space
> ◦.thunder
> ◦.transformer
> ◦.ytcertificate

「 🔞N S F W 」 ${premium}
> ◦.hentai
> ◦.gifhentai
> ◦.gifblowjob
> ◦.hentaivid
> ◦.hneko
> ◦.nwaifu
> ◦.animespank
> ◦.
> ◦.gasm
> ◦.ahegao
> ◦.ass
> ◦.bdsm
> ◦.blowjob
> ◦.cuckold
> ◦.cum
> ◦.milf
> ◦.eba
> ◦.ero
> ◦.femdom
> ◦.foot
> ◦.gangbang
> ◦.glasses
> ◦.jahy
> ◦.masturbation
> ◦.manga
> ◦.neko-hentai
> ◦.neko-hentai2
> ◦.nsfwloli
> ◦.orgy
> ◦.panties 
> ◦.pussy
> ◦.tentacles
> ◦.thights
> ◦.yuri
> ◦.zettai

「 💭A N I M E M E N U 」 ${free}
> ◦.akira
> ◦.akiyama
> ◦.ana
> ◦.asuna
> ◦.ayuzawa
> ◦.boruto
> ◦.chiho
> ◦.chitoge
> ◦.cosplayloli
> ◦.cosplaysagiri
> ◦.deidara
> ◦.doraemon
> ◦.elaina
> ◦.emilia
> ◦.erza
> ◦.gremory
> ◦.hestia
> ◦.hinata
> ◦.husbu
> ◦.inori
> ◦.isuzu
> ◦.itachi
> ◦.itori
> ◦.kaga
> ◦.kagura
> ◦.kakasih
> ◦.kaori
> ◦.keneki
> ◦.kotori
> ◦.kurumi
> ◦.loli2
> ◦.madara
> ◦.megumin
> ◦.mikasa
> ◦.mikey
> ◦.miku
> ◦.minato
> ◦.naruto
> ◦.neko1
> ◦.neko2
> ◦.nekonime
> ◦.nezuko
> ◦.onepiece
> ◦.pokemon
> ◦.randomnime
> ◦.randomnime2
> ◦.rize
> ◦.sagiri
> ◦.sakura
> ◦.sasuke
> ◦.shina
> ◦.shinka
> ◦.shinomiya
> ◦.shizuka
> ◦.shota
> ◦.tejina
> ◦.toukachan
> ◦.tsunade
> ◦.waifu1
> ◦.animewall
> ◦.yotsuba
> ◦.yuki
> ◦.yulibocil
> ◦.yumeko
> ◦.8ball
> ◦.tickle
> ◦.gecg
> ◦.feed

「 ⛔B A N N E D M E N U 」 ${premium}
> ◦.bankyuu1
> ◦.bankyuu2
> ◦.bankyuu3
> ◦.bankyuu4
> ◦.verify 
> ◦.logout

「 ♻️M E N U P R I M B O N 」 ${free}
> ◦.arahrezeki
> ◦.artimimpi
> ◦.artinama
> ◦.cocoknama
> ◦.fengshui
> ◦.haribaik
> ◦.harisangar
> ◦.harisial
> ◦.jadiannikah
> ◦.karakter
> ◦.keberuntungan
> ◦.masasubur
> ◦.memancing
> ◦.nagahari
> ◦.nasib
> ◦.nomorhoki
> ◦.pasangan
> ◦.pekerjaan
> ◦.penyakit
> ◦.peruntungan
> ◦.ramalcinta
> ◦.ramaljodoh
> ◦.ramaljodohbali
> ◦.rezeki
> ◦.shio
> ◦.sifatusaha
> ◦.suamiistri
> ◦.tarot
> ◦.weton
> ◦.zodiak

「 📤C O N V E R T M E N U 」 ${free}
> ◦.attp
> ◦.bass
> ◦.remini
> ◦.hd
> ◦.4k
> ◦.blown
> ◦.dbinary
> ◦.deep
> ◦.earrape
> ◦.ebinary
> ◦.emojimix
> ◦.emojimix2
> ◦.hdr
> ◦.fast
> ◦.fat
> ◦.nightcore
> ◦.removebg
> ◦.reverse
> ◦.robot
> ◦.slow
> ◦.smeme
> ◦.sticker
> ◦.stickerwm
> ◦.styletext
> ◦.toaudio
> ◦.togif
> ◦.toimage
> ◦.tomp3
> ◦.tourl
> ◦.tovideo
> ◦.tovn
> ◦.ttp
> ◦.tupai

「🎮 M A I N M E N U  」 ${free}
> ◦.addmsg
> ◦.anonymous
> ◦.delcmd
> ◦.delete
> ◦.delmsg
> ◦.getmsg
> ◦.infochat
> ◦.keluar
> ◦.listcmd
> ◦.listgc
> ◦.listmsg
> ◦.listonline
> ◦.listpc
> ◦.lockcmd
> ◦.menu
> ◦.next
> ◦.owner
> ◦.ping
> ◦.quoted
> ◦.setcmd
> ◦.speedtest
> ◦.start

「 ⚙️O W N E R M E N U 」 ${free}
> ◦.anticall
> ◦.bcall
> ◦.bcgroup
> ◦.block
> ◦.autobio on/off
> ◦.chat Option : 1. mute 2. unmute 3. archive 4. unarchive 5. read 6. unread 7.
> ◦.join
> ◦.leave
> ◦.react
> ◦.setexif
> ◦.setnamebot
> ◦.setppbot
> ◦.setstatus
> ◦.unblock

「 🎶S O U N D M E N U 」 ${free}
> ◦.sound1 - 161

「 🗂B O N U S 」
> ◦.tiktokkayes
> ◦.tiktokgirl
> ◦.tiktokghea
> ◦.tiktokbocil
> ◦.tiktoknukhty
> ◦.tiktoksantuy
> ◦.tiktokpanrika
> ◦.tiktoknotnot
> ◦. chinese
> ◦.hijab
> ◦.indo
 
> 𝘾𝙖𝙩𝙤𝙯𝙤𝙡𝙖𝙡𝙖 - 𝙒𝙖𝙫𝙚𝘾𝙡𝙤𝙪𝙙𝙭`;
};

//menuai ==============================================
module.exports.ai = () => {
return `
> ╭───────≼
> ⌬ *Nama Bot* > Catozolala Md
> ⌬ *NamaOwner* > Catozolala/Cloudx
> ⌬ *Version* *1.0.0*
> ⌬ *Author* > youtube.com/@XatozoLala
> ⌬ *Web* > https://ī.am
> ╰───────≼

        *「 M E N U A I 」*
> ◦.simi
> ◦.si
> ◦.ai
> ◦.openai
> ◦.ai-img
> ◦.pixiv`;
};

//menufun ==============================================
module.exports.fun = () => {
return `
> ╭───────≼
> ⌬ *Nama Bot* > Catozolala Md
> ⌬ *NamaOwner* > Catozolala/Cloudx
> ⌬ *Version* *1.0.0*
> ⌬ *Author* > youtube.com/@XatozoLala
> ⌬ *Web* > https://ī.am
> ╰───────≼
     
        *「 F U N M E N U 」*
> ◦.delttt
> ◦.family100
> ◦.halah
> ◦.heleh
> ◦.hilih
> ◦.holoh
> ◦.hulu
> ◦.jadian
> ◦.jodohku
> ◦.math
> ◦.simih
> ◦.suitpvp
> ◦.Tebak
> ◦.tictatoe`;
};

//menugrup ==============================================
module.exports.grup = () => {
return `
> ╭───────≼
> ⌬ *Nama Bot* > Catozolala Md
> ⌬ *NamaOwner* > Catozolala/Cloudx
> ⌬ *Version* *1.0.0*
> ⌬ *Author* > youtube.com/@XatozoLala
> ⌬ *Web* > https://ī.am
> ╰───────≼

        *「 G R O U P M E N U 」*
> ◦.add
> ◦.antilink
> ◦.antilinkv2
> ◦.antivirus
> ◦.antitoxic
> ◦.autoreact
> ◦.demote
> ◦.on
> ◦.editinfo
> ◦.ephemeral
> ◦.group
> ◦.hidetag
> ◦.kick
> ◦.linkgrup
> ◦.mute
> ◦.promote
> ◦.setdesc
> ◦.setname
> ◦.setppgc
> ◦.tagall
> ◦.totag
> ◦.simi
`;
};

//menumeme ==============================================
module.exports.meme = () => {
return `
> ╭───────≼
> ⌬ *Nama Bot* > Catozolala Md
> ⌬ *NamaOwner* > Catozolala/Cloudx
> ⌬ *Version* *1.0.0*
> ⌬ *Author* > youtube.com/@XatozoLala
> ⌬ *Web* > https://ī.am
> ╰───────≼

        *「 M E M E M E N U」*
> ◦.lahelu-foto
> ◦.lahelu-search-foto (Search)
> ◦.lahelu-video
> ◦.lahelu-search-video (search)
> ◦.meme
> ◦.mem (search)
> ◦.mevideo
> ◦.mevid (search)
`;
};

//menudown ==============================================
module.exports.down = () => {
return `
> ╭───────≼
> ⌬ *Nama Bot* > Catozolala Md
> ⌬ *NamaOwner* > Catozolala/Cloudx
> ⌬ *Version* *1.0.0*
> ⌬ *Author* > youtube.com/@XatozoLala
> ⌬ *Web* > https://ī.am
> ╰───────≼

        *「 D O N W L O A D M E N U 」*
> ◦.facebook
> ◦.getmusic
> ◦.getvidieo
> ◦.instagram
> ◦.joox
> ◦.pinterestdl
> ◦.soundcloud
> ◦.tiktokmp3
> ◦.twitter
> ◦.twittermp3
> ◦.ytmp3
> ◦.ytmp4
> ◦.pixiv
> ◦.tiktokslide
> ◦.tiktokfoto
> ◦.ttfoto
`;
};

//menucari / search ==============================================
module.exports.cari = () => {
return `
> ╭───────≼
> ⌬ *Nama Bot* > Catozolala Md
> ⌬ *NamaOwner* > Catozolala/Cloudx
> ⌬ *Version* *1.0.0*
> ⌬ *Author* > youtube.com/@XatozoLala
> ⌬ *Web* > https://ī.am
> ╰───────≼

        *「 M E N U S E A R C H 」*
> ◦.alquran
> ◦.aminio
> ◦.drakor
> ◦.gimage
> ◦.google
> ◦.gsmarena
> ◦.hadist
> ◦.iqra
> ◦.jadwalbioskop
> ◦.nowplayingbioskop
> ◦.pinterest
> ◦.play
> ◦.playstore
> ◦.ringtone
> ◦.stalk
> ◦.tafsirsurah
> ◦.wellpaper
> ◦.wattpad
> ◦.webtoons
> ◦.wikimedia
> ◦.ringtone
> ◦.yts
> ◦.ytsearch
> ◦.tiktokuser
> ◦.ttuser
> ◦.usertt
> ◦.playtiktok
> ◦.searchtt
> ◦.searchtiktok
> ◦.tiktoksearch
> ◦.pixiv
`;
};

//menuanine ==============================================
module.exports.anime = () => {
return `
> ╭───────≼
> ⌬ *Nama Bot* > Catozolala Md
> ⌬ *NamaOwner* > Catozolala/Cloudx
> ⌬ *Version* *1.0.0*
> ⌬ *Author* > youtube.com/@XatozoLala
> ⌬ *Web* > https://ī.am
> ╰───────≼

        *「 A N I M E M E N U 」*
> ◦.akira
> ◦.akiyama
> ◦.ana
> ◦.asuna
> ◦.ayuzawa
> ◦.boruto
> ◦.chiho
> ◦.chitoge
> ◦.cosplayloli
> ◦.cosplaysagiri
> ◦.deidara
> ◦.doraemon
> ◦.elaina
> ◦.emilia
> ◦.erza
> ◦.gremory
> ◦.hestia
> ◦.hinata
> ◦.husbu
> ◦.inori
> ◦.isuzu
> ◦.itachi
> ◦.itori
> ◦.kaga
> ◦.kagura
> ◦.kakasih
> ◦.kaori
> ◦.keneki
> ◦.kotori
> ◦.kurumi
> ◦.loli2
> ◦.madara
> ◦.megumin
> ◦.mikasa
> ◦.mikey
> ◦.miku
> ◦.minato
> ◦.naruto
> ◦.neko1
> ◦.neko2
> ◦.nekonime
> ◦.nezuko
> ◦.onepiece
> ◦.pokemon
> ◦.randomnime
> ◦.randomnime2
> ◦.rize
> ◦.sagiri
> ◦.sakura
> ◦.sasuke
> ◦.shina
> ◦.shinka
> ◦.shinomiya
> ◦.shizuka
> ◦.shota
> ◦.tejina
> ◦.toukachan
> ◦.tsunade
> ◦.waifu1
> ◦.animewall
> ◦.yotsuba
> ◦.yuki
> ◦.yulibocil
> ◦.yumeko
> ◦.8ball
> ◦.tickle
> ◦.gecg
> ◦.feed
`;
};

//menunsfw ==============================================
module.exports.nsfw = () => {
return `
> ╭───────≼
> ⌬ *Nama Bot* > Catozolala Md
> ⌬ *NamaOwner* > Catozolala/Cloudx
> ⌬ *Version* *1.0.0*
> ⌬ *Author* > youtube.com/@XatozoLala
> ⌬ *Web* > https://ī.am
> ╰───────≼

        *「 N S F W 」 ${premium}*
> ◦.hentai
> ◦.gifhentai
> ◦.gifblowjob
> ◦.hentaivid
> ◦.hneko
> ◦.nwaifu
> ◦.animespank
> ◦.gasm
> ◦.ahegao
> ◦.ass
> ◦.bdsm
> ◦.blowjob
> ◦.cuckold
> ◦.cum
> ◦.milf
> ◦.eba
> ◦.ero
> ◦.femdom
> ◦.foot
> ◦.gangbang
> ◦.glasses
> ◦.jahy
> ◦.masturbation
> ◦.manga
> ◦.neko-hentai
> ◦.neko-hentai2
> ◦.nsfwloli
> ◦.orgy
> ◦.panties 
> ◦.pussy
> ◦.tentacles
> ◦.thights
> ◦.yuri
> ◦.zettai
`;
};

//menurandom ==============================================
module.exports.random = () => {
return `
> ╭───────≼
> ⌬ *Nama Bot* > Catozolala Md
> ⌬ *NamaOwner* > Catozolala/Cloudx
> ⌬ *Version* *1.0.0*
> ⌬ *Author* > youtube.com/@XatozoLala
> ⌬ *Web* > https://ī.am
> ╰───────≼

        *「 R A N D O M M E N U 」*
> ◦.anime
> ◦.blowjob
> ◦.bucinquote
> ◦.coffe
> ◦.couple
> ◦.dilanquote
> ◦.husbu
> ◦.katasenja
> ◦.motivasi
> ◦.neko
> ◦.nekos
> ◦.puisi
> ◦.quotesanime
> ◦.shinobu
> ◦.waifu
> ◦.waifus
`;
};

//menumaker ==============================================
module.exports.maker = () => {
return `
> ╭───────≼
> ⌬ *Nama Bot* > Catozolala Md
> ⌬ *NamaOwner* > Catozolala/Cloudx
> ⌬ *Version* *1.0.0*
> ⌬ *Author* > youtube.com/@XatozoLala
> ⌬ *Web* > https://ī.am
> ╰───────≼

        *「 M A K E R M E N U 」*
> ◦.3dchristmas
> ◦.3dcrackedstone
> ◦.3ddeepsea
> ◦.3dgradient
> ◦.3dneonlight
> ◦.3drainbow
> ◦.3dscifi
> ◦.3dwaterpipe
> ◦.americanflag
> ◦.beach
> ◦.berry
> ◦.blackpink
> ◦.blackpink
> ◦.bluecircuit
> ◦.burnpapper
> ◦.butterfly
> ◦.christmasholiday
> ◦.coffecup
> ◦.crossfire
> ◦.dropwater
> ◦.ffcover
> ◦.fiction
> ◦.fireworksparkle
> ◦.foggywindow
> ◦.galaxy
> ◦.glass
> ◦.gluetext
> ◦.grassmsg
> ◦.greenhorror
> ◦.halloweenskeleton
> ◦.harrypotter
> ◦.harrypotter
> ◦.igcertificate
> ◦.impressiveglitch
> ◦.lovemsg
> ◦.lovetext
> ◦.magma
> ◦.matrix
> ◦.metallic
> ◦.naruto
> ◦.naturalleaves
> ◦.neon
> ◦.neondevils
> ◦.retrolol
> ◦.romantic
> ◦.shadow
> ◦.sketch
> ◦.smoke
> ◦.space
> ◦.thunder
> ◦.transformer
> ◦.ytcertificate
`;
};

//menuprimbon ==============================================
module.exports.primbon = () => {
return `
> ╭───────≼
> ⌬ *Nama Bot* > Catozolala Md
> ⌬ *NamaOwner* > Catozolala/Cloudx
> ⌬ *Version* *1.0.0*
> ⌬ *Author* > youtube.com/@XatozoLala
> ⌬ *Web* > https://ī.am
> ╰───────≼

        *「 M E N U P R I M B O N 」*
> ◦.arahrezeki
> ◦.artimimpi
> ◦.artinama
> ◦.cocoknama
> ◦.fengshui
> ◦.haribaik
> ◦.harisangar
> ◦.harisial
> ◦.jadiannikah
> ◦.karakter
> ◦.keberuntungan
> ◦.masasubur
> ◦.memancing
> ◦.nagahari
> ◦.nasib
> ◦.nomorhoki
> ◦.pasangan
> ◦.pekerjaan
> ◦.penyakit
> ◦.peruntungan
> ◦.ramalcinta
> ◦.ramaljodoh
> ◦.ramaljodohbali
> ◦.rezeki
> ◦.shio
> ◦.sifatusaha
> ◦.suamiistri
> ◦.tarot
> ◦.weton
> ◦.zodiak
`;
};

//menuconvert ==============================================
module.exports.conv = () => {
return `
> ╭───────≼
> ⌬ *Nama Bot* > Catozolala Md
> ⌬ *NamaOwner* > Catozolala/Cloudx
> ⌬ *Version* *1.0.0*
> ⌬ *Author* > youtube.com/@XatozoLala
> ⌬ *Web* > https://ī.am
> ╰───────≼

        *「 C O N V E R T M E N U 」*
> ◦.attp
> ◦.bass
> ◦.remini
> ◦.hd
> ◦.4k
> ◦.blown
> ◦.dbinary
> ◦.deep
> ◦.earrape
> ◦.ebinary
> ◦.emojimix
> ◦.emojimix2
> ◦.hdr
> ◦.fast
> ◦.fat
> ◦.nightcore
> ◦.removebg
> ◦.reverse
> ◦.robot
> ◦.slow
> ◦.smeme
> ◦.sticker
> ◦.stickerwm
> ◦.styletext
> ◦.toaudio
> ◦.togif
> ◦.toimage
> ◦.tomp3
> ◦.tourl
> ◦.tovideo
> ◦.tovn
> ◦.ttp
> ◦.tupai
`;
};

//menumain ==============================================
module.exports.maen = () => {
return `
> ╭───────≼
> ⌬ *Nama Bot* > Catozolala Md
> ⌬ *NamaOwner* > Catozolala/Cloudx
> ⌬ *Version* *1.0.0*
> ⌬ *Author* > youtube.com/@XatozoLala
> ⌬ *Web* > https://ī.am
> ╰───────≼

        *「 M A I N M E N U  」*
> ◦.addmsg
> ◦.anonymous
> ◦.delcmd
> ◦.delete
> ◦.delmsg
> ◦.getmsg
> ◦.infochat
> ◦.keluar
> ◦.listcmd
> ◦.listgc
> ◦.listmsg
> ◦.listonline
> ◦.listpc
> ◦.lockcmd
> ◦.menu
> ◦.next
> ◦.owner
> ◦.ping
> ◦.quoted
> ◦.setcmd
> ◦.speedtest
> ◦.start
`;
};

//menusound ==============================================
module.exports.sound = () => {
return `
> ╭───────≼
> ⌬ *Nama Bot* > Catozolala Md
> ⌬ *NamaOwner* > Catozolala/Cloudx
> ⌬ *Version* *1.0.0*
> ⌬ *Author* > youtube.com/@XatozoLala
> ⌬ *Web* > https://ī.am
> ╰───────≼

        *「 S O U N D M E N U 」*
> ◦.sound1 - 161
`;
};

//bonus ==============================================
module.exports.bon = () => {
return `
> ╭───────≼
> ⌬ *Nama Bot* > Catozolala Md
> ⌬ *NamaOwner* > Catozolala/Cloudx
> ⌬ *Version* *1.0.0*
> ⌬ *Author* > youtube.com/@XatozoLala
> ⌬ *Web* > https://ī.am
> ╰───────≼

        *「 B O N U S 」*
> ◦.tiktokkayes
> ◦.tiktokgirl
> ◦.tiktokghea
> ◦.tiktokbocil
> ◦.tiktoknukhty
> ◦.tiktoksantuy
> ◦.tiktokpanrika
> ◦.tiktoknotnot
`;
};

//menuowner ==============================================
module.exports.own = () => {
return `
> ╭───────≼
> ⌬ *Nama Bot* > Catozolala Md
> ⌬ *NamaOwner* > Catozolala/Cloudx
> ⌬ *Version* *1.0.0*
> ⌬ *Author* > youtube.com/@XatozoLala
> ⌬ *Web* > https://ī.am
> ╰───────≼

        *「 O W N E R M E N U 」*
> ◦.anticall
> ◦.bcall
> ◦.bcgroup
> ◦.block
> ◦.autobio
> ◦.chat Option : 1. mute 2. unmute 3. archive 4. unarchive 5. read 6. unread 7.
> ◦.join
> ◦.leave
> ◦.react
> ◦.setexif
> ◦.setnamebot
> ◦.setppbot
> ◦.setstatus
> ◦.unblock
`;
};