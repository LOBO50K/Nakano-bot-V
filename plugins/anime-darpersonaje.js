//Codígo creado por David Chian wa.me/5351524614
const _0x2d50bc=_0x1be0;function _0x4074(){const _0x1a0527=['find','No\x20se\x20encontró\x20el\x20archivo\x20de\x20personajes.','sender','chat','reply','9246rUcdOX','length','245XKIDWE','usuarios','slice','error','26148397XSyhhY','readFileSync','Error\x20al\x20leer\x20package.json:','trim','join','87TFOUGi','\x20en\x20tu\x20inventario.','getName','git+https://github.com/OfcDiego/YaemoriBot-MD.git','group','parse','characters','command','El\x20personaje\x20','sendMessage','totalRwcoins','\x20en\x20la\x20base\x20de\x20datos.','darrw','🚩\x20Este\x20comando\x20solo\x20está\x20disponible\x20para\x20AI\x20Yaemori.\x0a\x20🌟\x20https://github.com/OfcDiego/YaemoriBot-MD','existsSync','800zgiZyK','name','mentionedJid','writeFileSync','darrw\x20@usuario\x20<personaje>','stringify','anime','findIndex','470618AXCzhk','218151vTydaR','tags','splice','./package.json','utf-8','26016xakrdq','data.json','url','toLowerCase','5758700PfUjMO','24vNNFfy','61106hvCBMH','value'];_0x4074=function(){return _0x1a0527;};return _0x4074();}(function(_0x1fb9b2,_0x55c1e5){const _0x294f5b=_0x1be0,_0xbb1adc=_0x1fb9b2();while(!![]){try{const _0xa20ee8=-parseInt(_0x294f5b(0x177))/0x1+parseInt(_0x294f5b(0x183))/0x2*(-parseInt(_0x294f5b(0x195))/0x3)+-parseInt(_0x294f5b(0x17d))/0x4*(parseInt(_0x294f5b(0x1a4))/0x5)+-parseInt(_0x294f5b(0x18a))/0x6*(-parseInt(_0x294f5b(0x18c))/0x7)+parseInt(_0x294f5b(0x182))/0x8*(parseInt(_0x294f5b(0x178))/0x9)+parseInt(_0x294f5b(0x181))/0xa+parseInt(_0x294f5b(0x190))/0xb;if(_0xa20ee8===_0x55c1e5)break;else _0xbb1adc['push'](_0xbb1adc['shift']());}catch(_0x1efad7){_0xbb1adc['push'](_0xbb1adc['shift']());}}}(_0x4074,0xa6972));import _0x2ee5eb from'fs';function _0x1be0(_0x20e279,_0x178637){const _0x4074d8=_0x4074();return _0x1be0=function(_0x1be067,_0x291e39){_0x1be067=_0x1be067-0x171;let _0x1443fd=_0x4074d8[_0x1be067];return _0x1443fd;},_0x1be0(_0x20e279,_0x178637);}const obtenerDatos=()=>{const _0x59f00b=_0x1be0;return _0x2ee5eb[_0x59f00b(0x1a3)](_0x59f00b(0x17e))?JSON[_0x59f00b(0x19a)](_0x2ee5eb[_0x59f00b(0x191)](_0x59f00b(0x17e),_0x59f00b(0x17c))):{'usuarios':{},'personajesReservados':[]};},guardarDatos=_0x49a7d9=>{const _0x10f804=_0x1be0;_0x2ee5eb[_0x10f804(0x172)]('data.json',JSON[_0x10f804(0x174)](_0x49a7d9,null,0x2));},obtenerPersonajes=()=>{const _0x314f50=_0x1be0;if(_0x2ee5eb[_0x314f50(0x1a3)]('./src/JSON/characters.json'))return JSON[_0x314f50(0x19a)](_0x2ee5eb[_0x314f50(0x191)]('./src/JSON/characters.json',_0x314f50(0x17c)));else throw new Error(_0x314f50(0x186));};let handler=async(_0x1f1137,{conn:_0x522f21,args:_0x1b8f5a})=>{const _0xb2b344=_0x1be0;if(_0x1b8f5a[_0xb2b344(0x18b)]<0x2){_0x522f21[_0xb2b344(0x189)](_0x1f1137[_0xb2b344(0x188)],'Debes\x20mencionar\x20a\x20un\x20usuario\x20y\x20el\x20nombre\x20del\x20personaje.',_0x1f1137,rcanal);return;}const _0x330053=()=>{const _0x6f0371=_0xb2b344;try{const _0x5d9904=JSON[_0x6f0371(0x19a)](_0x2ee5eb['readFileSync'](_0x6f0371(0x17b),_0x6f0371(0x17c)));if(_0x5d9904[_0x6f0371(0x1a5)]!=='YaemoriBot-MD')return![];if(_0x5d9904['repository'][_0x6f0371(0x17f)]!==_0x6f0371(0x198))return![];return!![];}catch(_0xf423ff){return console[_0x6f0371(0x18f)](_0x6f0371(0x192),_0xf423ff),![];}};if(!_0x330053()){await _0x522f21[_0xb2b344(0x189)](_0x1f1137['chat'],_0xb2b344(0x1a2),_0x1f1137,rcanal);return;}let _0xa88f18=_0x1f1137[_0xb2b344(0x171)][0x0];if(!_0xa88f18){_0x522f21[_0xb2b344(0x189)](_0x1f1137[_0xb2b344(0x188)],'Debes\x20mencionar\x20a\x20un\x20usuario\x20válido.',_0x1f1137,rcanal);return;}let _0x2e9d18=_0x1b8f5a[_0xb2b344(0x18e)](0x1)[_0xb2b344(0x194)]('\x20')[_0xb2b344(0x180)](),_0x33f7bd=_0x1f1137[_0xb2b344(0x187)],_0x258d81=obtenerDatos(),_0x5a759f=_0x258d81['usuarios'][_0x33f7bd];if(!_0x5a759f||_0x5a759f[_0xb2b344(0x19b)][_0xb2b344(0x18b)]===0x0){_0x522f21[_0xb2b344(0x189)](_0x1f1137['chat'],'No\x20tienes\x20personajes\x20en\x20tu\x20inventario.',_0x1f1137,rcanal);return;}let _0x7e03cd=_0x5a759f[_0xb2b344(0x19b)][_0xb2b344(0x176)](_0x311a00=>_0x311a00[_0xb2b344(0x180)]()===_0x2e9d18[_0xb2b344(0x180)]()[_0xb2b344(0x193)]());if(_0x7e03cd===-0x1){_0x522f21[_0xb2b344(0x189)](_0x1f1137[_0xb2b344(0x188)],'No\x20tienes\x20el\x20personaje\x20'+_0x2e9d18+_0xb2b344(0x196),_0x1f1137,rcanal);return;}let _0xc02d23=obtenerPersonajes(),_0x134056=_0xc02d23[_0xb2b344(0x185)](_0x48d847=>_0x48d847[_0xb2b344(0x1a5)]['toLowerCase']()===_0x2e9d18['toLowerCase']()['trim']());if(!_0x134056){_0x522f21[_0xb2b344(0x189)](_0x1f1137[_0xb2b344(0x188)],'No\x20se\x20encontró\x20el\x20personaje\x20'+_0x2e9d18+_0xb2b344(0x1a0),_0x1f1137,rcanal);return;}let _0x26708f={'name':_0x5a759f[_0xb2b344(0x19b)][_0x7e03cd],'value':_0x134056['value'],'url':_0x134056[_0xb2b344(0x17f)]},_0x3c50a6=_0x258d81[_0xb2b344(0x18d)][_0xa88f18];!_0x3c50a6&&(_0x3c50a6={'characterCount':0x0,'totalRwcoins':0x0,'lastUsedTime':0x0,'characters':[]});_0x3c50a6['characters']['push'](_0x26708f[_0xb2b344(0x1a5)]),_0x3c50a6['characterCount']++,_0x3c50a6[_0xb2b344(0x19f)]+=_0x26708f[_0xb2b344(0x184)],_0x258d81['usuarios'][_0xa88f18]=_0x3c50a6,_0x5a759f[_0xb2b344(0x19b)][_0xb2b344(0x17a)](_0x7e03cd,0x1),_0x5a759f['characterCount']--,_0x5a759f['totalRwcoins']-=_0x26708f['value'],_0x258d81[_0xb2b344(0x18d)][_0x33f7bd]=_0x5a759f,guardarDatos(_0x258d81);let _0x22755d=await _0x522f21[_0xb2b344(0x197)](_0xa88f18),_0x3dd2d8=await _0x522f21[_0xb2b344(0x197)](_0x33f7bd),_0x2cbb97=_0xb2b344(0x19d)+_0x26708f[_0xb2b344(0x1a5)]+'\x20de\x20@'+_0x3dd2d8+'\x20ahora\x20es\x20de\x20@'+_0x22755d+'.\x20Además,\x20obtienes\x20'+_0x26708f[_0xb2b344(0x184)]+'\x20rwcoins.';await _0x522f21[_0xb2b344(0x19e)](_0x1f1137[_0xb2b344(0x188)],{'image':{'url':_0x26708f['url']},'caption':_0x2cbb97,'mentions':[_0xa88f18,_0x33f7bd]},{'quoted':_0x1f1137});};handler['help']=[_0x2d50bc(0x173)],handler[_0x2d50bc(0x179)]=[_0x2d50bc(0x175)],handler[_0x2d50bc(0x19c)]=[_0x2d50bc(0x1a1)],handler['register']=!![],handler[_0x2d50bc(0x199)]=!![];export default handler;