//Codígo creado por David Chian wa.me/5351524614

const _0x4eb7b3=_0x407d;function _0x5173(){const _0x32dc6f=['\x0aGénero:\x20','49rof384foerAlkkO4KF4Tdfoflw','Sí\x20❤️','1761297SUAUPK','Error\x20al\x20cargar\x20perfiles:','fromObject','writeFileSync','𝐶𝑜𝑛𝑓𝑖𝑟𝑚𝑎𝑐𝑖𝑜𝑛\x20𝑑𝑒\x20𝑝𝑒𝑟𝑓𝑖𝑙','readFileSync','genero','parse','1845PipUIw','fotos','5090635ffuGfv','message','Message','1052373HvmiSR','push','566WRhaUz','relayMessage','Error\x20al\x20leer\x20package.json:','No\x20💤','9196440vurzlX','InteractiveMessage','Body','edad','4MRgwEw','Footer','candidates','error','find','7223982aVRMXU','default','includes','SECRET_KEY','❌️\x20*OCURRIÓ\x20UN\x20ERROR:*\x20','git+https://github.com/David-Chian/Megumin-Bot-MD.git','chat','/matchcita\x20','Megumin-Bot-MD','sendButton','matched','waUploadToServer','utf-8','env','NativeFlowMessage','/perfilno\x20','No\x20has\x20configurado\x20una\x20intención.','./package.json','Error\x20al\x20guardar\x20perfiles:','create','Perfil\x20de\x20','private','212840ePiMqZ','@whiskeysockets/baileys','Header','repository','CarouselMessage','stringify','\x0aEdad:\x20','502fCRCrm','nombre','reply'];_0x5173=function(){return _0x32dc6f;};return _0x5173();}function _0x407d(_0x171de3,_0x42bc25){const _0x517324=_0x5173();return _0x407d=function(_0x407dc6,_0x5ba3c4){_0x407dc6=_0x407dc6-0xf1;let _0x456990=_0x517324[_0x407dc6];return _0x456990;},_0x407d(_0x171de3,_0x42bc25);}(function(_0x3f71f8,_0x5d3c2f){const _0x53ba3f=_0x407d,_0x59ba5c=_0x3f71f8();while(!![]){try{const _0x5bd589=parseInt(_0x53ba3f(0x129))/0x1*(parseInt(_0x53ba3f(0x114))/0x2)+-parseInt(_0x53ba3f(0x11a))/0x3*(parseInt(_0x53ba3f(0xf2))/0x4)+-parseInt(_0x53ba3f(0x124))/0x5+-parseInt(_0x53ba3f(0xf7))/0x6+parseInt(_0x53ba3f(0x127))/0x7+-parseInt(_0x53ba3f(0x12d))/0x8+-parseInt(_0x53ba3f(0x122))/0x9*(-parseInt(_0x53ba3f(0x10d))/0xa);if(_0x5bd589===_0x5d3c2f)break;else _0x59ba5c['push'](_0x59ba5c['shift']());}catch(_0x143571){_0x59ba5c['push'](_0x59ba5c['shift']());}}}(_0x5173,0xaa20f));import _0x1df231 from'fs';const {proto,generateWAMessageFromContent,generateWAMessageContent,prepareWAMessageMedia}=(await import(_0x4eb7b3(0x10e)))[_0x4eb7b3(0xf8)];import _0x51645f from'dotenv';_0x51645f['config']();const SECRET_KEY=process[_0x4eb7b3(0x104)][_0x4eb7b3(0xfa)],profilesPath='./citaperfiles.json',loadProfiles=()=>{const _0x465e5a=_0x4eb7b3;try{let _0xf1817e=_0x1df231['readFileSync'](profilesPath,'utf-8');return JSON[_0x465e5a(0x121)](_0xf1817e);}catch(_0x145fec){return console[_0x465e5a(0xf5)](_0x465e5a(0x11b),_0x145fec),[];}},saveProfiles=_0x331900=>{const _0x1db4b7=_0x4eb7b3;try{_0x1df231[_0x1db4b7(0x11d)](profilesPath,JSON[_0x1db4b7(0x112)](_0x331900,null,0x2));}catch(_0x1c39eb){console[_0x1db4b7(0xf5)](_0x1db4b7(0x109),_0x1c39eb);}},verifi=()=>{const _0x5e0bc2=_0x4eb7b3;try{const _0x2ed303=JSON[_0x5e0bc2(0x121)](_0x1df231[_0x5e0bc2(0x11f)](_0x5e0bc2(0x108),_0x5e0bc2(0x103)));if(_0x2ed303['name']!==_0x5e0bc2(0xff))return![];if(_0x2ed303[_0x5e0bc2(0x110)]['url']!==_0x5e0bc2(0xfc))return![];if(SECRET_KEY!==_0x5e0bc2(0x118))return![];return!![];}catch(_0x2961dc){return console[_0x5e0bc2(0xf5)](_0x5e0bc2(0x12b),_0x2961dc),![];}};let handler=async(_0x2651b3,{conn:_0x4e2a61,args:_0x334983})=>{const _0x2142fd=_0x4eb7b3;if(!verifi()){await _0x4e2a61['reply'](_0x2651b3[_0x2142fd(0xfd)],'Este\x20comando\x20solo\x20está\x20disponible\x20para\x20Megumin\x20Bot.\x0a\x20🔥\x20https://github.com/David-Chian/Megumin-Bot-MD',_0x2651b3,rcanal);return;}let _0x5751c6=loadProfiles(),_0x406807=_0x5751c6[_0x2142fd(0xf6)](_0xe58889=>_0xe58889['id']===_0x2651b3['sender']),_0x31b777=_0x5751c6[_0x2142fd(0xf6)](_0x209b19=>_0x209b19['id']===_0x334983[0x0]);if(!_0x406807||!_0x31b777){await _0x4e2a61[_0x2142fd(0x116)](_0x2651b3[_0x2142fd(0xfd)],'Ha\x20ocurrido\x20un\x20error\x20al\x20procesar\x20tu\x20solicitud.',_0x2651b3);return;}if(!_0x406807[_0x2142fd(0x101)])_0x406807['matched']=[];if(!_0x406807[_0x2142fd(0xf4)])_0x406807['candidates']=[];if(!_0x406807[_0x2142fd(0xf4)][_0x2142fd(0xf9)](_0x31b777['id']))_0x406807[_0x2142fd(0xf4)][_0x2142fd(0x128)](_0x31b777['id']);async function _0x3ffb5c(_0x57934e){const _0x410936=_0x2142fd,{imageMessage:_0x22609d}=await generateWAMessageContent({'image':{'url':_0x57934e}},{'upload':_0x4e2a61[_0x410936(0x102)]});return _0x22609d;}try{let _0x17bcf4=[];for(let _0x26358c of _0x31b777[_0x2142fd(0x123)]){_0x17bcf4['push']({'body':proto[_0x2142fd(0x126)]['InteractiveMessage'][_0x2142fd(0x12f)][_0x2142fd(0x11c)]({'text':null}),'header':proto[_0x2142fd(0x126)][_0x2142fd(0x12e)][_0x2142fd(0x10f)]['fromObject']({'title':'Foto\x20de\x20'+_0x31b777[_0x2142fd(0x115)],'hasMediaAttachment':!![],'imageMessage':await _0x3ffb5c(_0x26358c)}),'nativeFlowMessage':proto[_0x2142fd(0x126)][_0x2142fd(0x12e)][_0x2142fd(0x105)][_0x2142fd(0x11c)]({'buttons':[]})});}const _0x57b0c7=generateWAMessageFromContent(_0x2651b3[_0x2142fd(0xfd)],{'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadata':{},'deviceListMetadataVersion':0x2},'interactiveMessage':proto[_0x2142fd(0x126)][_0x2142fd(0x12e)][_0x2142fd(0x11c)]({'body':proto[_0x2142fd(0x126)][_0x2142fd(0x12e)][_0x2142fd(0x12f)][_0x2142fd(0x10a)]({'text':_0x2142fd(0x10b)+_0x31b777[_0x2142fd(0x115)]+_0x2142fd(0x113)+_0x31b777[_0x2142fd(0xf1)]+_0x2142fd(0x117)+_0x31b777[_0x2142fd(0x120)]}),'footer':proto['Message'][_0x2142fd(0x12e)][_0x2142fd(0xf3)][_0x2142fd(0x10a)]({'text':_0x31b777['quiero']?_0x31b777['quiero']:_0x2142fd(0x107)}),'header':proto['Message']['InteractiveMessage'][_0x2142fd(0x10f)]['create']({'hasMediaAttachment':![]}),'carouselMessage':proto[_0x2142fd(0x126)][_0x2142fd(0x12e)][_0x2142fd(0x111)]['fromObject']({'cards':[..._0x17bcf4]})})}}},{'quoted':_0x2651b3});await _0x4e2a61[_0x2142fd(0x12a)](_0x2651b3['chat'],_0x57b0c7[_0x2142fd(0x125)],{'messageId':_0x57b0c7['key']['id']}),await _0x4e2a61[_0x2142fd(0x100)](_0x2651b3[_0x2142fd(0xfd)],'¿𝑻𝒆\x20𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒂\x20𝒄𝒐𝒏𝒐𝒄𝒆𝒓\x20𝒂\x20'+_0x31b777[_0x2142fd(0x115)]+'?',_0x2142fd(0x11e),null,[[_0x2142fd(0x119),_0x2142fd(0xfe)+_0x31b777['id']],[_0x2142fd(0x12c),_0x2142fd(0x106)+_0x31b777['id']]],_0x2651b3);}catch(_0x32276e){console['error'](_0x32276e),await _0x4e2a61[_0x2142fd(0x116)](_0x2651b3[_0x2142fd(0xfd)],_0x2142fd(0xfb)+_0x32276e[_0x2142fd(0x125)],_0x2651b3);}saveProfiles(_0x5751c6);};handler['register']=!![],handler[_0x4eb7b3(0x10c)]=!![],handler['command']=/^mostrarperfil$/i;export default handler;
