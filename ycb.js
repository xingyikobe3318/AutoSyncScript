/*
2021.7.12   
7.14 修复签到问题

软件名：永晨宝（安卓） 秒到！！！！！！

手机号注册   绑定支付宝提现    
提现密码设为：666666   才可以自动提现  
自动提现时间为21~22点之间   CRON建议设置为2~3小时运行一次

下载地址：http://www.yongchenbao.com/home/index?uucode=TR00EFTL00

获取CK ： 主界面点随机奖励获取CK

/////////////////////////////////////////////////////////////////////////////

撸了不一定有，不撸肯定没有！
TG频道 https://t.me/tom_ww     
 
/////////////////////////////////////////////////////////////////////////////

CRON自行设置
v2p配置如下：
【REWRITE】
匹配链接（正则表达式） http://api.yongchenbao.com/api//Member
对应重写目标   https://raw.githubusercontent.com/xl2101200/-/main/ycb.js
【MITM】  
api.yongchenbao.com

/////////////////////////////////////////////////////////////////////////////
*/




const _0x498f=['nfCaW5WvDW','z2v0ANnVBG','W4u1fmoC','W6tdUmo5W7CYE1ZdNSkLWR/cQmkC','ECoxWO9sxI/cIG','ACoxW6Wv','ECoSuq','C2v0lwnVB2TPzq','zgf0yuzPBgu','Dg9tDhjPBMC','y29Uy2f0','vIBdVG','zmkUW7T0W4ldTCk2WQub','mJy3mZaXswzQsgrp','ySoXWQlcPW','y29VA2LLsMfY','o0yaW5O','fCkPacXUoW','W644WOJcRSofW5r2','c8kNdYXLn33cHa','WOXxW4W9WPJdVSoyW77dLW','C2v0ANnVBG','nSo+qCoXWOldKCk0WR/dTa','WRCsjr7cKwJdHW','y2TQyxi','Aw5KzxG','WOddGJG','WOjgW4CRWPldVSoa','Cgf0Aa','BwfW','BwvZC2fNzq','D3jPDgu','omo5WOHs','W58RbmokqCkzWRX9FG','WQpdMmktEa','cGRLVidLP4VJGjdMSlJMMAJLRP0','Bg9HzgrHDge','44ce5O6P5y6n6lw15A2B44oY77YF','W7G8Bqa4','44cq6zQp5PY657QI5yYf44cr77YA5BEY6l6+5lIk6zMqcG','Dh7cVwtcLGL2r2NdVSkaWPSlWRjRlCog','AxnnDxrLtg9N','mSoRsCo3','FwKIaCkexW','m8oOW5JdSf4GrG','W64LCqC','WORdQ8kioW','C2v0zgf0yq','Aw5KzxHpzG','WRJdOwLQoW','z2v0DMfS','44k656sL5yUW5yEw5O+Z44cf77Yw','Bw9UzxK','CSoMqM9WEs0','iSoVvmoNWPFdSCk8','WR0enG','W71xBmk3v8kxDG','W7K1DGSRW7Xn','WOZdLmoObILp','WO1eW4fqWOtcT8o+dJVcJCoMW4pdT0RdH0L7W7HpWPVdTfOjW78awmoal1JcTCknc8oIt2RdSCkLW4aws8ohoSkCW7/dSW','BxnN','z2v0zgf0yq','WOLFW5i','DmoBEKfDhg8','AgvHzgvYCW','WRJdJdlcJCorWPhdKa','W44Kfmoo','z290','FmooA0TPgMi','BwvKAwfvCMW','D8oeEgP6ha','z2v0u2nYAxb0','rmowWOpdQmowwGS','AxnrDwfUwa','CcLza1rn','AqPxWPldOCoHW4/cU8kAWPK','W53cUmkFW7pdTfjLuSo6bwddRf4','DgvZDa','zCoJWP7cT1nrW60','z2v0sg91CNm','W7OHWPxcTCovW7v3W5G8WO9AWOfz','DhjPBq','jMyvc8oQWPBdGa','jMf1Dg9uB2fZDd0WjNbSyxrMB3jTpwfUzhjVAwqMDxvJB2rLpq','W503cCoBqSk2WRT0F8k7x8kfAW','y3jVBG','WQn2amoKqMG','ecilW7a','gtukW7idW6dcQCouBxK','W5GQfCobqW','z2v0','B8obWPjJW6GMCq','EgmYdG','BwvKAweTDxjS','WOBcRenFAJXX','BgvUz3rO','BSoxWQbVW6WWBCoKW6WbW5ZdJ37dKq','C3rYAw5NAwz5','yxnZAwDU','BSozW7yv','DSoyEa','ymoTuL5/Fszseq','ifCaW44vB3u','W7C+AXSnW6DynCozWR0','5Rc45PMO5A6D','q29VA2LLsMfY','W5bbb8oJ','jNHHb39weMK','z2v0tw9UDgG','W7pcIEE6LEAETSkr8yAhQG','WQpdMmkvyZS','D2fPDa','DcDhfeC','wSopwCow','WO7dO8krnH3cK8kN','dKu2W6q','WO3dMdOfrs/cP8ok','DcnchLXeieZdPW','WQTAtSoOjhX7Dq','W43cR8kcW6pdSgbT','o8oZWO8lsapcOSkSs8kv','lwGEdSo9','Dg91z2GTy29VA2LL','lwWBbmoMWOhdUsjC','WRCFpWPSDmkZ','WRvCwmoilW','ddKmW7Su','W7ZcUCo5W69YiuddSmkEWRVcRCkfC8o8WRnSr8oYW6lcKJux','WRGFkGPOCSkH','WOerxmk2WR7dSgpdQmkLEa','Bg9Nu2vWyxjHDg9Y','C2XPy2u','BMfTzq','WRXqsCou','bZ8kW7OcW63cLCot','oKe6W4uqFG','lCoVqCoNWPpdT8kU','WPldVSkii0JdICo8EHzsW7RcVrhdSXz7WP88teRdPetdSMxcVImuW7XhzYddTmoJWPztw0yPgCoyrSoKW6qZia','zCo+WQBcTNvqW4hcOCoiWPO','q29VA2LL','WPFdGSoxbIPxxW','CMvWBgfJzq','mti2ntq3mKfwre5qCW','44cq55sZ6k+35O+q546W44cr77YA','WOJdNYK','C3rHy2S','Dg9mB2nHBgvtDhjPBMC','fZukW6O','k8o3WO9fqW','muf0DhvdrW','CmkQlZBdKCkkAqi','CgfYC2u','WQSFlrO','W4BcPCkr','DSoeCuPX','Dg9pyMO','WR7dNmkuyZ/dTCoI','BI9phve','WRWnoG','WRGFkIzMC8kYWPa','Abzu','44op56wg5yMa5yA45O+s44o0776R','Bg9KyxnOx3nLDa','W7i/zq','wcBdVCoG','l8oZWO9qsGa','hSkFWO3cN3e','D3jPDgvKyxrH','WQZdOw94','Bw9UzxK9','WRiFkGzMyG','WR1KjCo/','rCoaWRhdUCobtX0','uh4kWReRWOO','nf0a','DgfZA2v0Awq9mYzWBgf0zM9YBt1HBMrYB2LKjNv1y29Kzt0','q29UDgvUDc1uExbL','pSkrWPFcIhWRo03cGCkUDmoE','zgf0yq','WQ9utSoppM5H','guS2','C3rHDhvZ','W6JdNSonW7y','lIqX','WPlcVvzpFJS','l8kcW4KtfLnceW','nSo+qCo3WOpdTSkEWR3dTCoh','ssZdRCoVBSoo','WQ1GomoVthjc','B3b0CW','B3bLBI11CMW','WQVdOxD1','o0yaW5PondVdRSkKzSopsXpdJJxdU8o0yvhdMSkzW7VcOqNcV255DNJdUhKAW6btoSkncCoIW63cKKPFFH0lW6nJ','WOZcReriAI91','W6mYWPhcPa','y2fUx3DPDgHKCMf3x21VBMv5','WOhdHSoqca','rmolWP1ZW6G6DSk+W5ilW5hdG2/dJq','BSoxW7ej','WRNdJdlcISoy','W5NcVSkeW67dV3nLwmoM','WQpcRSk6WRnK','pmo8WRSIzSoIWRtdUHS','W4m2lSoaq8kv','yM94lMrHDa','AxnoB2rL','WPjwW6SSWPJdVSoRW6/dGCkGACobaq','icaG44cq6i635B6x6yEr5BIb44cr77YA','WPldVSkii0JdICo8EHzsW7RcVrhdSXz7WP88teRdPetdSMxcVImuW7XhzYdcLSolWP5Cxff0uCozv8ogW6CUl8kNAq','jmo5WPW','qgnOyxz5x2jVEgPZx3vZzxjdzMDZlMH0DhbHCgK','ySoiFuXNg23cMW','44o15O+f5y2Y6lwl5A6k44cW77YG','W6GRWPxcSSoeW4bnW403WR8','yg/cU1NcKqm','z2v0twLUDxrLCW','pmoPqSoRWPi','zxHLyW','DGbhWRddVCoMW7VcOCkAWR7dNmkueG','gKu2W60QBmoMiq','zxHPC3rZu3LUyW','cmkQbc1IiG','hmkCWOO','E8oIw14','zYnEaq','A8o1WRVcPLnlW5q','EwnIDxjS','Bg9KyxnOx2DLDa','44kD5OYX5yYQ6lEJ5A2844kI77Ye','W7eGzWeFW7Pa','W7aXBWO','44ko54+G5PYl5lY26Aox44kz77Y2','W7XDE8kLrCkytbSyW7W','CNvUu2nYAxb0','W4PdcCoNWRi','AxnnDxrL','nJG1mtHctxL6ANi','AM0Kbmka','lcdPLjNOR68H','jSoIWQS0','CcLz','c1yU','AxnmB29U','WPhdHcSB','WRWrkGf8yCkO','yCo1WRZcSvnyW5a','W7mJzq','x8otB8oqhvBcGa','6iY+5y2JW6qFWQ8qW73cRY7MIRJLIl4','WOTqW5yH','W4bfh8oRWRFdJKC','y2fSBa','wxOtWQi','o8ots8oPu8k5','WOJdGYaqbG','mteXntK1merWr1zTtG','n1maW4SYCNJdQG','zMv0y2G','ugjU','W7K8WQ/cTCoc','WQpcOmk7WRq','WOBdHZOAcMJdOa','zN1glWZcTCoCWQZdJa','r0vu','z2v0vgLTzq','bSk4hIrOnwJcKwaCWPxdJuPIWPWmrIm7WOFcPYjGquxcNmkKf8o4FKqhWPu','Bg9NrxjY','yx7cQftcUq1/wfxdQCklWRC','z2v0rNvSBfLLyxi','p1CAW40aCW','44cq562+5yIW6yEr5BIb44cr77YA','WPZdJYWgc27dVmkqlG','i2WAcSo2','ECotW7efpvbB','WQhdS1D2mCof','EwnIAgq','WRZdQh53','ACk8WO7cRvmyCgtcR10','bSoLtSo3WPpdQ8kPW7/dNCohD8kAW6RdVq','dCkrWORcIa','W6O2WOG','C2v0DMfS','FCo3qKSJo2DwbqpcI8kDW4qoWOlcKujyxwVcOMZdH8kME8k6nrbivmkJlmkoWPRdRmoSFvFcL8osW40mW6NcGSoB','WRmFmaL9BG','AmoFFLT9hq','i8oSWR51','WOJcUMroEs91','zY1FbLa','Bg9N','kmoLtSoMWO8','WPxdHSowgIm','Bg9NCW','CMvHza','WRFdJcFcJCovWPFdGG','FsnegW','AxnozwvKuMv3CML0zq','v8ottComg1y','WO/cQfPE','WRJdJdlcR8ofWONdNCkxkmkIW6u','WQdcU8kPWRr0mxhdTSkkWQO','z2v0u2vJB25KCW','44op5OYy5y6i6lwm5A+f44cx77+A','ChvZAa','WPldVSkii0JdICo8EHzsW7RcVrhdSXz7WP88teRdPetdSMxcVImuW7XhzYdcLSolWP5Cxff0uCoAv8otW4O+gmk9zSoXkCkljMuLbKC','y3DK','C2vUza','l8oKW5tdSvqNqq','WPVdVCocWR/cOIe4uCo4euhdG3m','bIXkW795W5pcKSkVrKtcHmkFpG','DxjS','Bwv0Ag9K','WOldItOrhNVdQq','vsPGWQC','C3rYAw5N','DgHLBG','EwnIyM9KEq','WRmCoXVcGG','AxntDxjNzq','sIBdQSoT','44cq546W5PYj5l2z6AkD44cr77YA','qmoCWOu','z2v0twLSBgLZzwnVBMrZ','WQddNmkjDa','W63dLmo4gW','DxWIba','mSk/iIFdSSoEnehcMSorWPRdQh3cHcrdWQ7dKSoWjIRdRCokh8oGW5BdJmkmWORcNKJdMaOrW5upWRhdUmoRs8kUW4NcN0/dO8kQW6FcMvjnW6ldVmkaWOtcQd/dTSk3WODEFrBcPLiCfuTa','BmoGve5REa','rComzw8','kwyac8oUWPddKG','CgXHDgzVCM09yw5KCM9Pzcz1DwnVzgu9','A8okA0C','Ahr0CdOVl2fWAs55B25Ny2HLBMjHBY5JB20VyxbPlY9nzw1IzxiVy29PBLrVtw9UzxK','CmkQlZy','e1CL','Fmo/WRZcTG','DhzwbWpcSSohWR3dJCow','Dg9mB2nHBgvmB3DLCKnHC2u','WQJdIc/cNq','DgLTzq','W6tcJSowj23cQ8oPWPGcB8kMga','x8owWPBdQmosxbK','Cg9ZDa','y3jqoq8','sgH6W5q','W6jxBmkRwSkgDG','FCk4cIldTSknxq','bmkDWPVcNNyHnG','pMiabW','zCo2rvm'];const _0x1688f7=_0x40d0,_0x2d5a75=_0x1e73;(function(_0xa6f306,_0x47f029){const _0x5b5d74=_0x1e73,_0x4d1b8d=_0x40d0;while(!![]){try{const _0x2c09e2=-parseInt(_0x4d1b8d(0x289,']l5^'))+-parseInt(_0x5b5d74(0x2a0))*parseInt(_0x4d1b8d(0x297,'QTmq'))+parseInt(_0x4d1b8d(0x29f,'qn1r'))*parseInt(_0x4d1b8d(0x1b7,'m&TE'))+-parseInt(_0x5b5d74(0x235))+parseInt(_0x5b5d74(0x222))*parseInt(_0x4d1b8d(0x1ef,'6V*R'))+parseInt(_0x4d1b8d(0x269,'yGiQ'))+-parseInt(_0x5b5d74(0x1c4));if(_0x2c09e2===_0x47f029)break;else _0xa6f306['push'](_0xa6f306['shift']());}catch(_0x4c4046){_0xa6f306['push'](_0xa6f306['shift']());}}}(_0x498f,0xeec80));const $=new Env(_0x2d5a75(0x19e));let status;status=(status=$[_0x1688f7(0x2be,'st](')](_0x1688f7(0x245,'QAvs'))||'1')>0x1?''+status:'';const ycburlArr=[],ycbhdArr=[],ycbbodyArr=[],ycbcount='';let ycburl=$[_0x1688f7(0x26d,'QAvs')](_0x1688f7(0x27c,'Q$Bw')),ycbhd=$[_0x1688f7(0x16f,'t&)9')](_0x1688f7(0x20e,'mtqD')),ycbbody=$[_0x2d5a75(0x173)](_0x1688f7(0x290,'DCh6')),b=Math[_0x1688f7(0x18f,'t5##')](new Date()[_0x2d5a75(0x23e)]()/0x3e8)[_0x2d5a75(0x29c)](),DD=RT(0x6d60,0x88b8),tz=$[_0x1688f7(0x1db,'QTmq')]('tz')||'1',tx=$[_0x1688f7(0x293,'%bx$')]('tx')||'1',id='',txid='';$[_0x2d5a75(0x2b1)]='',!(async()=>{const _0x3dfa9a=_0x2d5a75,_0x2c1723=_0x1688f7;if(typeof $request!==_0x2c1723(0x23c,']7!0'))await ycbck();else{ycburlArr[_0x2c1723(0x292,'Q$Bw')]($[_0x2c1723(0x27e,'8hX3')]('ycburl')),ycbhdArr[_0x2c1723(0x22f,']$Qp')]($[_0x2c1723(0x194,']#Lf')](_0x2c1723(0x1d3,'jiI6'))),ycbbodyArr[_0x2c1723(0x2c0,'t&)9')]($[_0x3dfa9a(0x173)](_0x2c1723(0x2ae,']$Qp')));let _0x5b32d7=$[_0x3dfa9a(0x2c5)](_0x2c1723(0x209,'IzP7'))||'1';for(let _0x46da32=0x2;_0x46da32<=_0x5b32d7;_0x46da32++){ycburlArr[_0x3dfa9a(0x264)]($[_0x3dfa9a(0x173)]('ycburl'+_0x46da32)),ycbhdArr[_0x3dfa9a(0x264)]($[_0x2c1723(0x17a,'IzP7')](_0x2c1723(0x1b4,'GSl@')+_0x46da32)),ycbbodyArr[_0x2c1723(0x253,'qn1r')]($[_0x3dfa9a(0x173)](_0x3dfa9a(0x271)+_0x46da32));}console[_0x2c1723(0x1cf,'yGiQ')]('\x0a\x0a===============================================\x20脚本执行\x20-\x20北京时间(UTC+8)：'+new Date(new Date()['getTime']()+new Date()[_0x2c1723(0x2bb,'VV^a')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x3dfa9a(0x1c8)]()+'\x20===============================================\x0a');for(let _0x52f9f4=0x0;_0x52f9f4<ycbhdArr[_0x2c1723(0x243,'%bx$')];_0x52f9f4++){ycbhdArr[_0x52f9f4]&&(ycburl=ycburlArr[_0x52f9f4],ycbhd=ycbhdArr[_0x52f9f4],ycbbody=ycbbodyArr[_0x52f9f4],$[_0x3dfa9a(0x2ac)]=_0x52f9f4+0x1,console[_0x2c1723(0x299,'Q$Bw')](_0x3dfa9a(0x2b6)+$[_0x3dfa9a(0x2ac)]+'】'),await hqcf(),await $[_0x3dfa9a(0x1a5)](0xbb8),await ycbqd(),await $['wait'](0x1388),await grxx(),await $[_0x2c1723(0x2bd,'mtqD')](0xbb8),message());}}})()[_0x1688f7(0x1dc,'DCh6')](_0x12a1f0=>$[_0x2d5a75(0x240)](_0x12a1f0))['finally'](()=>$['done']());function ycbck(){const _0x177234=_0x1688f7,_0x2ad3f4=_0x2d5a75;if($request[_0x2ad3f4(0x26b)][_0x2ad3f4(0x2c3)]('getAdVideoReward')>-0x1){const _0x22f96f=$request[_0x2ad3f4(0x26b)];if(_0x22f96f)$[_0x177234(0x230,'m&TE')](_0x22f96f,_0x2ad3f4(0x218)+status);$[_0x177234(0x207,'QTmq')](_0x22f96f);const _0x15028f=JSON[_0x177234(0x1fe,'yGiQ')]($request[_0x2ad3f4(0x176)]);if(_0x15028f)$[_0x177234(0x28a,'A)Na')](_0x15028f,'ycbhd'+status);$[_0x177234(0x276,'A)Na')](_0x15028f);const _0x470e9d=$request['body'];if(_0x470e9d)$[_0x177234(0x19c,'%bx$')](_0x470e9d,'ycbbody'+status);$[_0x2ad3f4(0x256)](_0x470e9d),$[_0x2ad3f4(0x172)]($[_0x177234(0x215,'Q$Bw')],'','永晨宝'+status+_0x177234(0x22e,'YjJZ'));}}function sjhb(_0x3c6518=0x0){return new Promise(_0x57ec80=>{const _0x443fde=_0x40d0;let _0x1cb980={'url':_0x443fde(0x265,'i5(('),'headers':JSON[_0x443fde(0x1ff,'ZnJI')]($['getdata'](_0x443fde(0x220,'m&TE'))),'body':'platform=android&uucode='};$['post'](_0x1cb980,async(_0x4ef7db,_0x100206,_0x259e21)=>{const _0x2ead81=_0x443fde,_0xce89b2=_0x1e73;try{const _0x112059=JSON[_0xce89b2(0x1cd)](_0x259e21);_0x112059[_0xce89b2(0x1eb)]==0xc8?(console[_0xce89b2(0x256)]('【随机红包】：'+_0x112059['msg']+'\x0a'),$['message']+='【随机红包】：'+_0x112059['msg']+'\x0a'):(console[_0x2ead81(0x299,'Q$Bw')]('【随机红包】：已达上限\x0a'),$[_0x2ead81(0x16e,'cb7w')]+=_0xce89b2(0x2ba));}catch(_0x3e3fd2){}finally{_0x57ec80();}},_0x3c6518);});}function hqcf(_0x3b7142=0x0){return new Promise(_0x45c4f8=>{const _0x4a957d=_0x1e73,_0x17bce6=_0x40d0;let _0x316755={'url':_0x17bce6(0x1bf,'i5(('),'headers':JSON['parse']($[_0x17bce6(0x2aa,'FCvf')](_0x4a957d(0x249))),'body':_0x4a957d(0x27f)};$[_0x4a957d(0x28b)](_0x316755,async(_0x256bad,_0x144ad7,_0x2af453)=>{const _0x2535aa=_0x4a957d,_0x4a78c8=_0x17bce6;try{const _0x16b75d=JSON['parse'](_0x2af453);_0x16b75d[_0x4a78c8(0x1ee,']#Lf')]==0xc8?(console[_0x2535aa(0x256)](_0x4a78c8(0x20a,'U#en')+_0x16b75d[_0x4a78c8(0x22c,'t&)9')]+_0x2535aa(0x205)+_0x16b75d['coin']+'\x0a'),$[_0x2535aa(0x2b1)]+=_0x4a78c8(0x21a,'cT0v')+_0x16b75d['msg']+_0x2535aa(0x205)+_0x16b75d['coin']+'\x0a'):(console[_0x2535aa(0x256)](_0x4a78c8(0x263,'myBX')+_0x16b75d[_0x2535aa(0x172)]+'\x0a'),$[_0x2535aa(0x2b1)]+=_0x4a78c8(0x2b8,'DsGO')+_0x16b75d[_0x2535aa(0x172)]+'\x0a');}catch(_0x3cd55b){}finally{_0x45c4f8();}},_0x3b7142);});}function ycbqd(_0x4bbf05=0x0){return new Promise(_0x40ea85=>{const _0x4aae57=_0x1e73,_0x406008=_0x40d0;let _0x5a4ab8={'url':_0x406008(0x206,'i5(('),'headers':JSON[_0x4aae57(0x1cd)]($['getdata'](_0x406008(0x1b3,'8uf8'))),'body':_0x4aae57(0x1e5)};$[_0x406008(0x1bb,'8uf8')](_0x5a4ab8,async(_0x49a617,_0x4b51ff,_0x1049d5)=>{const _0x2a95d6=_0x4aae57,_0x5e5829=_0x406008;try{const _0x2a9704=JSON[_0x5e5829(0x1a4,']l5^')](_0x1049d5);if(_0x2a9704[_0x5e5829(0x1ee,']#Lf')]==0xc8){console[_0x2a95d6(0x256)](_0x2a95d6(0x244)+_0x2a9704['msg']+'\x0a'),$[_0x2a95d6(0x2b1)]+=_0x2a95d6(0x244)+_0x2a9704[_0x2a95d6(0x172)]+'\x0a';for(let _0x533f19=0x0;_0x533f19<0x14;_0x533f19++){$[_0x2a95d6(0x2ac)]=_0x533f19+0x1,console[_0x2a95d6(0x256)]('\x0a第'+(_0x533f19+0x1)+'次领取随机红包！'),await sjhb(),await $[_0x5e5829(0x298,'6V*R')](DD);}}else console[_0x2a95d6(0x256)](_0x2a95d6(0x244)+_0x2a9704[_0x2a95d6(0x172)]+'\x0a'),$[_0x2a95d6(0x2b1)]+=_0x2a95d6(0x244)+_0x2a9704[_0x5e5829(0x16d,'FCvf')]+'\x0a';}catch(_0x531f32){}finally{_0x40ea85();}},_0x4bbf05);});}function grxx(_0x4756de=0x0){return new Promise(_0x11da43=>{const _0x3a1a60=_0x1e73,_0x5de6b8=_0x40d0;let _0x16e03={'url':_0x5de6b8(0x250,'Q$Bw'),'headers':JSON[_0x3a1a60(0x1cd)]($[_0x5de6b8(0x217,']n*[')](_0x3a1a60(0x249))),'body':'platform=android&uucode='};$['post'](_0x16e03,async(_0x2f256a,_0x1f19f4,_0x521cbe)=>{const _0x4f5959=_0x3a1a60,_0x5930bc=_0x5de6b8;try{const _0x2e2fdb=JSON['parse'](_0x521cbe);_0x2e2fdb[_0x5930bc(0x252,'IzP7')]==0xc8?(jf=_0x2e2fdb[_0x4f5959(0x1e8)][_0x4f5959(0x1f9)],console[_0x4f5959(0x256)](''+jf),await jfdh(),await $[_0x5930bc(0x1e1,'UaWE')](0xbb8)):(console[_0x4f5959(0x256)](_0x5930bc(0x21d,'t&)9')+_0x2e2fdb[_0x4f5959(0x1e8)][_0x4f5959(0x2c7)]+'\x0a'),$[_0x5930bc(0x22b,']n*[')]+='【现有余额】：'+_0x2e2fdb[_0x4f5959(0x1e8)][_0x5930bc(0x257,'mtqD')]+'\x0a');}catch(_0x48e8a4){}finally{_0x11da43();}},_0x4756de);});}function jfdh(_0x30b7fa=0x0){return new Promise(_0x13dbff=>{const _0x3eaca7=_0x40d0,_0x353095=_0x1e73;let _0x4a08f6={'url':_0x353095(0x281),'headers':JSON[_0x3eaca7(0x28c,']7!0')]($[_0x3eaca7(0x16c,'mtqD')](_0x353095(0x249))),'body':_0x353095(0x1df)+jf+_0x353095(0x189)};$[_0x3eaca7(0x23a,'ZnJI')](_0x4a08f6,async(_0x1aeff4,_0x282e0e,_0x3d3472)=>{const _0x4f489d=_0x353095,_0x23d1eb=_0x3eaca7;try{const _0x4e5668=JSON[_0x23d1eb(0x223,'st](')](_0x3d3472);_0x4e5668['status']==0xc8?(console[_0x23d1eb(0x174,'oHgc')](_0x23d1eb(0x1d7,'*AfB')+_0x4e5668[_0x4f489d(0x172)]+'\x0a'),$[_0x23d1eb(0x1d2,']l5^')]+=_0x23d1eb(0x2c6,'yGiQ')+_0x4e5668[_0x23d1eb(0x1c6,'QAvs')]+'\x0a',await $[_0x23d1eb(0x287,'*AfB')](0xbb8),await grxx2()):(await $[_0x4f489d(0x1a5)](0xbb8),await grxx2());}catch(_0x29683f){}finally{_0x13dbff();}},_0x30b7fa);});}function grxx2(_0x284fda=0x0){return new Promise(_0x5ce35e=>{const _0x1f30ff=_0x1e73,_0x183079=_0x40d0;let _0x34f0bb={'url':_0x183079(0x171,'oHgc'),'headers':JSON['parse']($[_0x183079(0x1b6,'myBX')]('ycbhd')),'body':_0x1f30ff(0x27f)};$[_0x183079(0x24d,'DCh6')](_0x34f0bb,async(_0x25c1b9,_0x3f03cc,_0x585d47)=>{const _0x292c84=_0x183079,_0x2ec090=_0x1f30ff;try{const _0x4c4ae6=JSON['parse'](_0x585d47);_0x4c4ae6['status']==0xc8?(yue=_0x4c4ae6[_0x2ec090(0x1e8)][_0x292c84(0x246,'8hX3')],console[_0x2ec090(0x256)](_0x2ec090(0x275)+_0x4c4ae6[_0x292c84(0x1ec,'@bk$')]['money']+'\x0a'),$[_0x292c84(0x1f7,']#Lf')]+='【现有余额】：'+_0x4c4ae6[_0x2ec090(0x1e8)][_0x292c84(0x1d0,'IzP7')]+'\x0a',tx==0x1&&(nowTimes[_0x292c84(0x1d5,'myBX')]()===0x15||nowTimes[_0x292c84(0x1ac,'8uf8')]()===0x16)&&(nowTimes[_0x292c84(0x285,']7!0')]()>=0x0&&nowTimes['getMinutes']()<=Minutes)&&(await $[_0x2ec090(0x1a5)](0xbb8),await sqtx())):(console[_0x292c84(0x29e,'NdR!')](_0x2ec090(0x275)+_0x4c4ae6['data'][_0x292c84(0x234,'QAvs')]+'\x0a'),$[_0x2ec090(0x2b1)]+=_0x2ec090(0x275)+_0x4c4ae6[_0x292c84(0x1de,'V!UW')][_0x2ec090(0x2c7)]+'\x0a');}catch(_0x286a99){}finally{_0x5ce35e();}},_0x284fda);});}function sqtx(_0x532e9f=0x0){return new Promise(_0x2399c6=>{const _0x3b92b1=_0x1e73,_0x742b21=_0x40d0;let _0x2367ea={'url':_0x742b21(0x1f6,'%bx$'),'headers':JSON['parse']($[_0x742b21(0x1f2,'UaWE')](_0x3b92b1(0x249))),'body':_0x3b92b1(0x1df)+yue+_0x742b21(0x27b,'DsGO')};$[_0x742b21(0x2b3,'QTmq')](_0x2367ea,async(_0x5539e2,_0x51df5a,_0x5e2180)=>{const _0x2b2473=_0x742b21,_0x19ad5b=_0x3b92b1;try{const _0x3409d1=JSON[_0x19ad5b(0x1cd)](_0x5e2180);_0x3409d1[_0x19ad5b(0x1eb)]==0xc8?(console[_0x2b2473(0x238,'8!6I')](_0x19ad5b(0x1c5)+_0x3409d1[_0x2b2473(0x1d6,']k3Q')]+'\x0a'),$['message']+=_0x19ad5b(0x1c5)+_0x3409d1['msg']+'\x0a'):(console[_0x2b2473(0x1d9,'t&)9')](_0x19ad5b(0x1c5)+_0x3409d1[_0x2b2473(0x283,'fQDz')]+'\x0a'),$[_0x19ad5b(0x2b1)]+='【申请提现】：'+_0x3409d1[_0x19ad5b(0x172)]+'\x0a');}catch(_0x8a9868){}finally{_0x2399c6();}},_0x532e9f);});}function message(){const _0x5d6f6c=_0x2d5a75,_0x5007ff=_0x1688f7;tz==0x1&&$['msg']($[_0x5007ff(0x25f,']#Lf')],'',$[_0x5d6f6c(0x2b1)]);}function RT(_0x3b7720,_0x1568d){const _0x4dd5a0=_0x1688f7;do rt=Math['floor'](Math[_0x4dd5a0(0x2a4,'HYQ5')]()*_0x1568d);while(rt<_0x3b7720);return rt;}function _0x1e73(_0x2d2a7b,_0x26d6ba){return _0x1e73=function(_0x498f6a,_0x1e73c0){_0x498f6a=_0x498f6a-0x16b;let _0x3cdce2=_0x498f[_0x498f6a];if(_0x1e73['LBjMmz']===undefined){var _0x360834=function(_0x5449fd){const _0x40d04e='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x54bab5='',_0xd50f2f='';for(let _0x447585=0x0,_0x14506f,_0x30b033,_0x32fcd5=0x0;_0x30b033=_0x5449fd['charAt'](_0x32fcd5++);~_0x30b033&&(_0x14506f=_0x447585%0x4?_0x14506f*0x40+_0x30b033:_0x30b033,_0x447585++%0x4)?_0x54bab5+=String['fromCharCode'](0xff&_0x14506f>>(-0x2*_0x447585&0x6)):0x0){_0x30b033=_0x40d04e['indexOf'](_0x30b033);}for(let _0x5b32d7=0x0,_0x46da32=_0x54bab5['length'];_0x5b32d7<_0x46da32;_0x5b32d7++){_0xd50f2f+='%'+('00'+_0x54bab5['charCodeAt'](_0x5b32d7)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xd50f2f);};_0x1e73['xHuvuR']=_0x360834,_0x2d2a7b=arguments,_0x1e73['LBjMmz']=!![];}const _0x4d4212=_0x498f[0x0],_0x5e18cc=_0x498f6a+_0x4d4212,_0x2ddd63=_0x2d2a7b[_0x5e18cc];return!_0x2ddd63?(_0x3cdce2=_0x1e73['xHuvuR'](_0x3cdce2),_0x2d2a7b[_0x5e18cc]=_0x3cdce2):_0x3cdce2=_0x2ddd63,_0x3cdce2;},_0x1e73(_0x2d2a7b,_0x26d6ba);}function getCurrentDate(){const _0x4ea00c=_0x2d5a75;var _0x2c24a1=new Date(),_0x449b24='-',_0x547491=':',_0x1c65ba=_0x2c24a1[_0x4ea00c(0x1a2)]()+0x1,_0x3591cf=_0x2c24a1['getDate']();_0x1c65ba>=0x1&&_0x1c65ba<=0x9&&(_0x1c65ba='0'+_0x1c65ba);_0x3591cf>=0x0&&_0x3591cf<=0x9&&(_0x3591cf='0'+_0x3591cf);var _0x5b0361=_0x2c24a1[_0x4ea00c(0x242)]()+_0x449b24+_0x1c65ba+_0x449b24+_0x3591cf+'\x20'+_0x2c24a1[_0x4ea00c(0x185)]()+_0x547491+_0x2c24a1['getMinutes']()+_0x547491+_0x2c24a1[_0x4ea00c(0x262)]();return _0x5b0361;}function _0x40d0(_0x2d2a7b,_0x26d6ba){return _0x40d0=function(_0x498f6a,_0x1e73c0){_0x498f6a=_0x498f6a-0x16b;let _0x3cdce2=_0x498f[_0x498f6a];if(_0x40d0['bgbXWJ']===undefined){var _0x360834=function(_0x40d04e){const _0x54bab5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xd50f2f='',_0x447585='';for(let _0x14506f=0x0,_0x30b033,_0x32fcd5,_0x5b32d7=0x0;_0x32fcd5=_0x40d04e['charAt'](_0x5b32d7++);~_0x32fcd5&&(_0x30b033=_0x14506f%0x4?_0x30b033*0x40+_0x32fcd5:_0x32fcd5,_0x14506f++%0x4)?_0xd50f2f+=String['fromCharCode'](0xff&_0x30b033>>(-0x2*_0x14506f&0x6)):0x0){_0x32fcd5=_0x54bab5['indexOf'](_0x32fcd5);}for(let _0x46da32=0x0,_0x52f9f4=_0xd50f2f['length'];_0x46da32<_0x52f9f4;_0x46da32++){_0x447585+='%'+('00'+_0xd50f2f['charCodeAt'](_0x46da32)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x447585);};const _0x5449fd=function(_0x12a1f0,_0x22f96f){let _0x15028f=[],_0x470e9d=0x0,_0x3c6518,_0x57ec80='';_0x12a1f0=_0x360834(_0x12a1f0);let _0x1cb980;for(_0x1cb980=0x0;_0x1cb980<0x100;_0x1cb980++){_0x15028f[_0x1cb980]=_0x1cb980;}for(_0x1cb980=0x0;_0x1cb980<0x100;_0x1cb980++){_0x470e9d=(_0x470e9d+_0x15028f[_0x1cb980]+_0x22f96f['charCodeAt'](_0x1cb980%_0x22f96f['length']))%0x100,_0x3c6518=_0x15028f[_0x1cb980],_0x15028f[_0x1cb980]=_0x15028f[_0x470e9d],_0x15028f[_0x470e9d]=_0x3c6518;}_0x1cb980=0x0,_0x470e9d=0x0;for(let _0x4ef7db=0x0;_0x4ef7db<_0x12a1f0['length'];_0x4ef7db++){_0x1cb980=(_0x1cb980+0x1)%0x100,_0x470e9d=(_0x470e9d+_0x15028f[_0x1cb980])%0x100,_0x3c6518=_0x15028f[_0x1cb980],_0x15028f[_0x1cb980]=_0x15028f[_0x470e9d],_0x15028f[_0x470e9d]=_0x3c6518,_0x57ec80+=String['fromCharCode'](_0x12a1f0['charCodeAt'](_0x4ef7db)^_0x15028f[(_0x15028f[_0x1cb980]+_0x15028f[_0x470e9d])%0x100]);}return _0x57ec80;};_0x40d0['tvLaSQ']=_0x5449fd,_0x2d2a7b=arguments,_0x40d0['bgbXWJ']=!![];}const _0x4d4212=_0x498f[0x0],_0x5e18cc=_0x498f6a+_0x4d4212,_0x2ddd63=_0x2d2a7b[_0x5e18cc];return!_0x2ddd63?(_0x40d0['gVgNKb']===undefined&&(_0x40d0['gVgNKb']=!![]),_0x3cdce2=_0x40d0['tvLaSQ'](_0x3cdce2,_0x1e73c0),_0x2d2a7b[_0x5e18cc]=_0x3cdce2):_0x3cdce2=_0x2ddd63,_0x3cdce2;},_0x40d0(_0x2d2a7b,_0x26d6ba);}function Env(_0x99d47f,_0x49f034){const _0x5a5f7f=_0x1688f7,_0x72bbf8=_0x2d5a75;class _0x25143f{constructor(_0x10a0ea){this['env']=_0x10a0ea;}[_0x72bbf8(0x267)](_0xd14f24,_0x19ae5d=_0x72bbf8(0x23d)){const _0x3827e9=_0x40d0,_0x525702=_0x72bbf8;_0xd14f24=typeof _0xd14f24===_0x525702(0x26f)?{'url':_0xd14f24}:_0xd14f24;let _0x33bb14=this[_0x525702(0x190)];return _0x19ae5d===_0x3827e9(0x27d,'Q$Bw')&&(_0x33bb14=this[_0x3827e9(0x274,'NdR!')]),new Promise((_0x422eb2,_0x3b7d3d)=>{const _0x5b6ee9=_0x3827e9;_0x33bb14[_0x5b6ee9(0x1f5,'V!UW')](this,_0xd14f24,(_0x128791,_0xaa06dc,_0x3f6f04)=>{if(_0x128791)_0x3b7d3d(_0x128791);else _0x422eb2(_0xaa06dc);});});}[_0x5a5f7f(0x226,'jiI6')](_0x375349){const _0x2d9f29=_0x5a5f7f,_0x25ddf8=_0x72bbf8;return this[_0x25ddf8(0x267)][_0x2d9f29(0x1a0,'m&TE')](this[_0x2d9f29(0x2ad,'QAvs')],_0x375349);}[_0x5a5f7f(0x216,'jiI6')](_0x472a22){const _0x52d0c6=_0x72bbf8,_0x3755d=_0x5a5f7f;return this[_0x3755d(0x278,']l5^')][_0x52d0c6(0x231)](this['env'],_0x472a22,_0x3755d(0x26e,']k3Q'));}}return new class{constructor(_0x19f625,_0x2ace76){const _0x522dcb=_0x72bbf8,_0x3a22cf=_0x5a5f7f;this[_0x3a22cf(0x232,'e5Eq')]=_0x19f625,this[_0x3a22cf(0x2a3,'%bx$')]=new _0x25143f(this),this[_0x522dcb(0x1e8)]=null,this['dataFile']=_0x522dcb(0x202),this[_0x3a22cf(0x1a7,'jjy1')]=[],this[_0x522dcb(0x221)]=![],this['isNeedRewrite']=![],this['logSeparator']='\x0a',this[_0x3a22cf(0x2a9,'mtqD')]=new Date()['getTime'](),Object[_0x522dcb(0x198)](this,_0x2ace76),this['log']('','🔔'+this[_0x3a22cf(0x2a1,']n*[')]+',\x20开始!');}[_0x72bbf8(0x203)](){return'undefined'!==typeof module&&!!module['exports'];}['isQuanX'](){return'undefined'!==typeof $task;}[_0x72bbf8(0x273)](){const _0x3e3890=_0x5a5f7f;return'undefined'!==typeof $httpClient&&_0x3e3890(0x200,'4yvw')===typeof $loon;}[_0x72bbf8(0x228)](){const _0x1defdf=_0x5a5f7f;return _0x1defdf(0x2b4,'t5##')!==typeof $loon;}[_0x5a5f7f(0x196,'Q0M[')](){const _0x3ad892=_0x5a5f7f;return _0x3ad892(0x19b,'Q$Bw')!==typeof $rocket;}[_0x72bbf8(0x1d1)](_0x3e22c2,_0x2d1b9e=null){try{return JSON['parse'](_0x3e22c2);}catch{return _0x2d1b9e;}}[_0x5a5f7f(0x239,'cT0v')](_0x21803e,_0x3e625c=null){const _0x53ba5b=_0x72bbf8;try{return JSON[_0x53ba5b(0x197)](_0x21803e);}catch{return _0x3e625c;}}[_0x72bbf8(0x294)](_0x28c335,_0x1fcea9){const _0x1a2a9b=_0x5a5f7f,_0x38e31e=_0x72bbf8;let _0x492ef9=_0x1fcea9;const _0x33459e=this[_0x38e31e(0x173)](_0x28c335);if(_0x33459e)try{_0x492ef9=JSON[_0x1a2a9b(0x255,'jiI6')](this[_0x1a2a9b(0x1ad,'yGiQ')](_0x28c335));}catch{}return _0x492ef9;}[_0x72bbf8(0x2a8)](_0x56a12f,_0x1104b3){const _0x3524f3=_0x72bbf8;try{return this['setdata'](JSON[_0x3524f3(0x197)](_0x56a12f),_0x1104b3);}catch{return![];}}[_0x72bbf8(0x17d)](_0x1bd2bf){return new Promise(_0x5342a8=>{this['get']({'url':_0x1bd2bf},(_0x4f1ad2,_0x37daac,_0x1de348)=>_0x5342a8(_0x1de348));});}[_0x72bbf8(0x21f)](_0x5b049d,_0x6477df){const _0x2943cd=_0x72bbf8,_0x3bd6ce=_0x5a5f7f;return new Promise(_0x18c213=>{const _0x22e0eb=_0x1e73,_0x16e6c=_0x40d0;let _0x4bffab=this[_0x16e6c(0x247,'6V*R')](_0x22e0eb(0x208));_0x4bffab=_0x4bffab?_0x4bffab[_0x22e0eb(0x1c3)](/\n/g,'')[_0x22e0eb(0x187)]():_0x4bffab;let _0x1e27e2=this[_0x16e6c(0x177,'*AfB')]('@chavy_boxjs_userCfgs.httpapi_timeout');_0x1e27e2=_0x1e27e2?_0x1e27e2*0x1:0x14,_0x1e27e2=_0x6477df&&_0x6477df[_0x16e6c(0x1a8,'i5((')]?_0x6477df[_0x16e6c(0x268,'RiG2')]:_0x1e27e2;const [_0x49c722,_0x1ff9a9]=_0x4bffab['split']('@'),_0x518d31={'url':_0x16e6c(0x1aa,'QAvs')+_0x1ff9a9+_0x16e6c(0x1b5,'ZnJI'),'body':{'script_text':_0x5b049d,'mock_type':_0x22e0eb(0x18b),'timeout':_0x1e27e2},'headers':{'X-Key':_0x49c722,'Accept':'*/*'}};this[_0x16e6c(0x284,']n*[')](_0x518d31,(_0x316856,_0xc0c207,_0x2ad071)=>_0x18c213(_0x2ad071));})[_0x3bd6ce(0x1ca,'QTmq')](_0x49dc41=>this[_0x2943cd(0x240)](_0x49dc41));}[_0x5a5f7f(0x2a6,'HYQ5')](){const _0x404cba=_0x5a5f7f,_0x16fc6a=_0x72bbf8;if(this[_0x16fc6a(0x203)]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x404cba(0x1fc,'6V*R')]=this['path']?this[_0x404cba(0x1a9,'fQDz')]:require('path');const _0x2fc243=this[_0x404cba(0x291,'8hX3')]['resolve'](this[_0x404cba(0x236,'%bx$')]),_0x2cb03d=this['path'][_0x404cba(0x28e,'cb7w')](process[_0x16fc6a(0x266)](),this[_0x404cba(0x211,'fQDz')]),_0xc5d0e=this['fs'][_0x404cba(0x20b,'cT0v')](_0x2fc243),_0x34659d=!_0xc5d0e&&this['fs'][_0x16fc6a(0x212)](_0x2cb03d);if(_0xc5d0e||_0x34659d){const _0x120096=_0xc5d0e?_0x2fc243:_0x2cb03d;try{return JSON['parse'](this['fs'][_0x404cba(0x241,'VV^a')](_0x120096));}catch(_0x568dbe){return{};}}else return{};}else return{};}[_0x72bbf8(0x1dd)](){const _0x17a2ce=_0x72bbf8,_0x2b90c7=_0x5a5f7f;if(this[_0x2b90c7(0x201,'t5##')]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x2b90c7(0x2c1,'i5((')]=this[_0x17a2ce(0x2af)]?this[_0x17a2ce(0x2af)]:require(_0x2b90c7(0x280,'IzP7'));const _0x465c7c=this[_0x17a2ce(0x2af)][_0x2b90c7(0x1c2,'U#en')](this[_0x17a2ce(0x29b)]),_0x1aa173=this[_0x2b90c7(0x2b5,']l5^')]['resolve'](process[_0x2b90c7(0x1d4,'myBX')](),this[_0x2b90c7(0x1cc,'DsGO')]),_0x43f631=this['fs'][_0x17a2ce(0x212)](_0x465c7c),_0x5314f0=!_0x43f631&&this['fs'][_0x17a2ce(0x212)](_0x1aa173),_0x32d231=JSON['stringify'](this[_0x17a2ce(0x1e8)]);if(_0x43f631)this['fs'][_0x2b90c7(0x182,'yGiQ')](_0x465c7c,_0x32d231);else _0x5314f0?this['fs'][_0x2b90c7(0x18a,'t5##')](_0x1aa173,_0x32d231):this['fs'][_0x2b90c7(0x186,'cT0v')](_0x465c7c,_0x32d231);}}[_0x72bbf8(0x219)](_0x480baa,_0x58ebd1,_0x3dac4a=undefined){const _0x2db600=_0x72bbf8,_0x373d26=_0x58ebd1[_0x2db600(0x1c3)](/[(d+)]/g,_0x2db600(0x1ed))['split']('.');let _0x33947c=_0x480baa;for(const _0x1257dc of _0x373d26){_0x33947c=Object(_0x33947c)[_0x1257dc];if(_0x33947c===undefined)return _0x3dac4a;}return _0x33947c;}[_0x5a5f7f(0x181,']k3Q')](_0x27dda7,_0x4e4484,_0x47fadc){const _0x368ef1=_0x5a5f7f,_0x5b01aa=_0x72bbf8;if(Object(_0x27dda7)!==_0x27dda7)return _0x27dda7;if(!Array['isArray'](_0x4e4484))_0x4e4484=_0x4e4484[_0x5b01aa(0x29c)]()['match'](/[^.[]]+/g)||[];return _0x4e4484[_0x5b01aa(0x1b9)](0x0,-0x1)['reduce']((_0x42a907,_0x5c9713,_0x17d4c8)=>Object(_0x42a907[_0x5c9713])===_0x42a907[_0x5c9713]?_0x42a907[_0x5c9713]:_0x42a907[_0x5c9713]=Math[_0x368ef1(0x214,'DCh6')](_0x4e4484[_0x17d4c8+0x1])>>0x0===+_0x4e4484[_0x17d4c8+0x1]?[]:{},_0x27dda7)[_0x4e4484[_0x4e4484[_0x5b01aa(0x195)]-0x1]]=_0x47fadc,_0x27dda7;}[_0x72bbf8(0x173)](_0x4b1fd3){const _0x87f4ff=_0x72bbf8,_0x46a41e=_0x5a5f7f;let _0x1a69dd=this[_0x46a41e(0x180,'jiI6')](_0x4b1fd3);if(/^@/['test'](_0x4b1fd3)){const [,_0x1144ba,_0x233733]=/^@(.*?).(.*?)$/[_0x46a41e(0x18d,'GSl@')](_0x4b1fd3),_0x2fbf7b=_0x1144ba?this[_0x46a41e(0x1e3,'e5Eq')](_0x1144ba):'';if(_0x2fbf7b)try{const _0x119449=JSON[_0x87f4ff(0x1cd)](_0x2fbf7b);_0x1a69dd=_0x119449?this[_0x46a41e(0x21e,'cb7w')](_0x119449,_0x233733,''):_0x1a69dd;}catch(_0x340c47){_0x1a69dd='';}}return _0x1a69dd;}[_0x72bbf8(0x2c2)](_0x4a5f73,_0x200986){const _0x4127aa=_0x5a5f7f,_0x325916=_0x72bbf8;let _0x3df60c=![];if(/^@/[_0x325916(0x183)](_0x200986)){const [,_0x2491e3,_0x367f97]=/^@(.*?).(.*?)$/[_0x325916(0x20f)](_0x200986),_0x4100c1=this[_0x325916(0x2c5)](_0x2491e3),_0xd2ac36=_0x2491e3?_0x4100c1==='null'?null:_0x4100c1||'{}':'{}';try{const _0x94ad43=JSON[_0x4127aa(0x2c4,'V!UW')](_0xd2ac36);this[_0x4127aa(0x18e,'GSl@')](_0x94ad43,_0x367f97,_0x4a5f73),_0x3df60c=this[_0x4127aa(0x1f1,'NdR!')](JSON[_0x325916(0x197)](_0x94ad43),_0x2491e3);}catch(_0x13f5ea){const _0x5b679f={};this[_0x325916(0x1d8)](_0x5b679f,_0x367f97,_0x4a5f73),_0x3df60c=this[_0x325916(0x24f)](JSON['stringify'](_0x5b679f),_0x2491e3);}}else _0x3df60c=this['setval'](_0x4a5f73,_0x200986);return _0x3df60c;}['getval'](_0x45be2c){const _0x5a8810=_0x5a5f7f,_0x5efcb1=_0x72bbf8;if(this[_0x5efcb1(0x273)]()||this[_0x5efcb1(0x228)]())return $persistentStore[_0x5efcb1(0x25a)](_0x45be2c);else{if(this[_0x5efcb1(0x17f)]())return $prefs['valueForKey'](_0x45be2c);else return this['isNode']()?(this['data']=this[_0x5efcb1(0x2b7)](),this[_0x5a8810(0x282,'DsGO')][_0x45be2c]):this[_0x5a8810(0x279,'YjJZ')]&&this[_0x5a8810(0x1fa,'U#en')][_0x45be2c]||null;}}['setval'](_0x2703ef,_0x3738ca){const _0x329eee=_0x72bbf8,_0x102a6c=_0x5a5f7f;if(this[_0x102a6c(0x1e2,'A)Na')]()||this['isLoon']())return $persistentStore[_0x329eee(0x2b2)](_0x2703ef,_0x3738ca);else{if(this[_0x329eee(0x17f)]())return $prefs['setValueForKey'](_0x2703ef,_0x3738ca);else return this[_0x329eee(0x203)]()?(this['data']=this[_0x329eee(0x2b7)](),this[_0x102a6c(0x1ec,'@bk$')][_0x3738ca]=_0x2703ef,this[_0x102a6c(0x2a7,']$Qp')](),!![]):this[_0x102a6c(0x178,'t5##')]&&this[_0x329eee(0x1e8)][_0x3738ca]||null;}}[_0x5a5f7f(0x1c0,']n*[')](_0x5238bb){const _0x33afc7=_0x5a5f7f,_0x537de0=_0x72bbf8;this['got']=this['got']?this[_0x537de0(0x179)]:require(_0x537de0(0x179)),this[_0x33afc7(0x23b,'QAvs')]=this[_0x33afc7(0x2a5,'cT0v')]?this[_0x33afc7(0x22a,'myBX')]:require(_0x537de0(0x1b0)),this[_0x33afc7(0x1af,'8hX3')]=this[_0x537de0(0x2ab)]?this[_0x33afc7(0x1a6,'jiI6')]:new this['cktough'][(_0x537de0(0x19f))](),_0x5238bb&&(_0x5238bb['headers']=_0x5238bb[_0x33afc7(0x191,'Q0M[')]?_0x5238bb[_0x537de0(0x176)]:{},undefined===_0x5238bb[_0x33afc7(0x17e,'A)Na')][_0x537de0(0x1c1)]&&undefined===_0x5238bb[_0x537de0(0x2a2)]&&(_0x5238bb[_0x33afc7(0x1b1,'8hX3')]=this['ckjar']));}[_0x5a5f7f(0x24e,'cT0v')](_0x49e275,_0x28f9c5=()=>{}){const _0x4e1070=_0x5a5f7f,_0x4c5903=_0x72bbf8;_0x49e275[_0x4c5903(0x176)]&&(delete _0x49e275[_0x4e1070(0x2bf,'RiG2')]['Content-Type'],delete _0x49e275[_0x4c5903(0x176)][_0x4e1070(0x1fb,'Q0M[')]);if(this[_0x4c5903(0x273)]()||this[_0x4e1070(0x248,'V!UW')]())this[_0x4e1070(0x254,']#Lf')]()&&this[_0x4c5903(0x25d)]&&(_0x49e275[_0x4c5903(0x176)]=_0x49e275[_0x4e1070(0x1be,'mtqD')]||{},Object[_0x4c5903(0x198)](_0x49e275[_0x4e1070(0x1b2,'myBX')],{'X-Surge-Skip-Scripting':![]})),$httpClient['get'](_0x49e275,(_0x15dfd5,_0x1dd0bd,_0xed7b2f)=>{const _0x19fa09=_0x4c5903,_0x4f1055=_0x4e1070;!_0x15dfd5&&_0x1dd0bd&&(_0x1dd0bd[_0x4f1055(0x1c9,'GSl@')]=_0xed7b2f,_0x1dd0bd[_0x4f1055(0x261,'ZnJI')]=_0x1dd0bd[_0x19fa09(0x1eb)]),_0x28f9c5(_0x15dfd5,_0x1dd0bd,_0xed7b2f);});else{if(this[_0x4c5903(0x17f)]())this[_0x4c5903(0x25d)]&&(_0x49e275[_0x4c5903(0x1f3)]=_0x49e275['opts']||{},Object[_0x4c5903(0x198)](_0x49e275[_0x4e1070(0x295,'t5##')],{'hints':![]})),$task[_0x4c5903(0x237)](_0x49e275)[_0x4e1070(0x229,'QAvs')](_0x1f3765=>{const {statusCode:_0xe1736c,statusCode:_0x482a5b,headers:_0x2650c5,body:_0x5acf16}=_0x1f3765;_0x28f9c5(null,{'status':_0xe1736c,'statusCode':_0x482a5b,'headers':_0x2650c5,'body':_0x5acf16},_0x5acf16);},_0x44987c=>_0x28f9c5(_0x44987c));else this[_0x4e1070(0x1bd,'%bx$')]()&&(this['initGotEnv'](_0x49e275),this[_0x4e1070(0x1ea,'fQDz')](_0x49e275)['on'](_0x4e1070(0x1bc,'GSl@'),(_0x243fa9,_0x1079c7)=>{const _0xe788e3=_0x4c5903,_0x39c910=_0x4e1070;try{if(_0x243fa9[_0x39c910(0x25b,'*AfB')][_0x39c910(0x1ae,'QTmq')]){const _0x634e03=_0x243fa9[_0xe788e3(0x176)][_0xe788e3(0x29a)][_0xe788e3(0x2b0)](this[_0x39c910(0x1e9,'8uf8')][_0xe788e3(0x1c1)][_0x39c910(0x258,'U#en')])[_0xe788e3(0x29c)]();_0x634e03&&this['ckjar'][_0x39c910(0x210,']k3Q')](_0x634e03,null),_0x1079c7[_0x39c910(0x1ab,'jiI6')]=this[_0x39c910(0x272,'FCvf')];}}catch(_0x55b7fd){this[_0x39c910(0x233,']$]a')](_0x55b7fd);}})[_0x4e1070(0x24a,'V!UW')](_0x23364b=>{const {statusCode:_0x591f89,statusCode:_0x407875,headers:_0x525bad,body:_0x5aadd8}=_0x23364b;_0x28f9c5(null,{'status':_0x591f89,'statusCode':_0x407875,'headers':_0x525bad,'body':_0x5aadd8},_0x5aadd8);},_0x1020d9=>{const {message:_0x238dee,response:_0x42e70e}=_0x1020d9;_0x28f9c5(_0x238dee,_0x42e70e,_0x42e70e&&_0x42e70e['body']);}));}}['post'](_0x173d41,_0x35c6ec=()=>{}){const _0xc8f84b=_0x72bbf8,_0x30c1d0=_0x5a5f7f,_0x3384c9=_0x173d41[_0x30c1d0(0x1e0,'myBX')]?_0x173d41[_0xc8f84b(0x26c)][_0xc8f84b(0x286)]():_0x30c1d0(0x199,'6V*R');_0x173d41['body']&&_0x173d41[_0xc8f84b(0x176)]&&!_0x173d41['headers'][_0x30c1d0(0x1e7,'DCh6')]&&(_0x173d41[_0xc8f84b(0x176)][_0xc8f84b(0x1e6)]=_0x30c1d0(0x23f,'HYQ5'));if(_0x173d41[_0x30c1d0(0x188,'8hX3')])delete _0x173d41['headers'][_0x30c1d0(0x24c,'mtqD')];if(this[_0xc8f84b(0x273)]()||this['isLoon']())this['isSurge']()&&this[_0x30c1d0(0x204,']$Qp')]&&(_0x173d41[_0x30c1d0(0x191,'Q0M[')]=_0x173d41['headers']||{},Object['assign'](_0x173d41[_0xc8f84b(0x176)],{'X-Surge-Skip-Scripting':![]})),$httpClient[_0x3384c9](_0x173d41,(_0x43d57d,_0x55c489,_0x22c953)=>{const _0x4d2a36=_0x30c1d0;!_0x43d57d&&_0x55c489&&(_0x55c489[_0x4d2a36(0x192,'st](')]=_0x22c953,_0x55c489[_0x4d2a36(0x1f0,'mtqD')]=_0x55c489['status']),_0x35c6ec(_0x43d57d,_0x55c489,_0x22c953);});else{if(this[_0x30c1d0(0x28f,'DsGO')]())_0x173d41[_0xc8f84b(0x26c)]=_0x3384c9,this['isNeedRewrite']&&(_0x173d41[_0x30c1d0(0x27a,'st](')]=_0x173d41[_0x30c1d0(0x225,'4yvw')]||{},Object[_0x30c1d0(0x25e,'jjy1')](_0x173d41['opts'],{'hints':![]})),$task[_0x30c1d0(0x1fd,'*AfB')](_0x173d41)[_0xc8f84b(0x270)](_0x95bead=>{const {statusCode:_0x5eaa5b,statusCode:_0x1f8abf,headers:_0x4839f8,body:_0x403e5c}=_0x95bead;_0x35c6ec(null,{'status':_0x5eaa5b,'statusCode':_0x1f8abf,'headers':_0x4839f8,'body':_0x403e5c},_0x403e5c);},_0x827a93=>_0x35c6ec(_0x827a93));else{if(this['isNode']()){this[_0x30c1d0(0x19d,'t&)9')](_0x173d41);const {url:_0x340537,..._0x2861f0}=_0x173d41;this[_0x30c1d0(0x1e4,'%bx$')][_0x3384c9](_0x340537,_0x2861f0)[_0xc8f84b(0x270)](_0x3f387f=>{const {statusCode:_0x14cffa,statusCode:_0x5d1676,headers:_0x595b4f,body:_0x596fa2}=_0x3f387f;_0x35c6ec(null,{'status':_0x14cffa,'statusCode':_0x5d1676,'headers':_0x595b4f,'body':_0x596fa2},_0x596fa2);},_0x5dd06f=>{const _0x211bcc=_0x30c1d0,{message:_0x591008,response:_0x22e7b5}=_0x5dd06f;_0x35c6ec(_0x591008,_0x22e7b5,_0x22e7b5&&_0x22e7b5[_0x211bcc(0x1da,'NdR!')]);});}}}}[_0x72bbf8(0x288)](_0x4a7346,_0x444568=null){const _0x4027b1=_0x5a5f7f,_0x24c055=_0x72bbf8,_0x58329e=_0x444568?new Date(_0x444568):new Date();let _0x5cb326={'M+':_0x58329e[_0x24c055(0x1a2)]()+0x1,'d+':_0x58329e['getDate'](),'H+':_0x58329e[_0x24c055(0x185)](),'m+':_0x58329e[_0x24c055(0x20d)](),'s+':_0x58329e[_0x24c055(0x262)](),'q+':Math[_0x4027b1(0x2b9,'t&)9')]((_0x58329e[_0x24c055(0x1a2)]()+0x3)/0x3),'S':_0x58329e[_0x24c055(0x277)]()};if(/(y+)/[_0x4027b1(0x28d,'8!6I')](_0x4a7346))_0x4a7346=_0x4a7346[_0x24c055(0x1c3)](RegExp['$1'],(_0x58329e[_0x4027b1(0x260,'*AfB')]()+'')['substr'](0x4-RegExp['$1'][_0x24c055(0x195)]));for(let _0x4628fe in _0x5cb326)if(new RegExp('('+_0x4628fe+')')[_0x4027b1(0x1ce,'myBX')](_0x4a7346))_0x4a7346=_0x4a7346['replace'](RegExp['$1'],RegExp['$1']['length']==0x1?_0x5cb326[_0x4628fe]:('00'+_0x5cb326[_0x4628fe])['substr']((''+_0x5cb326[_0x4628fe])[_0x4027b1(0x251,'myBX')]));return _0x4a7346;}[_0x5a5f7f(0x19a,'IzP7')](_0xf7bf55=_0x99d47f,_0x117110='',_0x3f8616='',_0x9d3b0){const _0x568d4c=_0x5a5f7f,_0x1e880c=_0x72bbf8,_0xb7b769=_0x23a68e=>{const _0x4c5804=_0x1e73,_0x4253bc=_0x40d0;if(!_0x23a68e)return _0x23a68e;if(typeof _0x23a68e===_0x4253bc(0x20c,'VV^a')){if(this[_0x4253bc(0x170,'U#en')]())return _0x23a68e;else{if(this[_0x4c5804(0x17f)]())return{'open-url':_0x23a68e};else{if(this['isSurge']())return{'url':_0x23a68e};else return undefined;}}}else{if(typeof _0x23a68e===_0x4253bc(0x213,'HYQ5')){if(this['isLoon']()){let _0x239515=_0x23a68e[_0x4253bc(0x175,'IzP7')]||_0x23a68e[_0x4c5804(0x26b)]||_0x23a68e[_0x4c5804(0x1f4)],_0x48902c=_0x23a68e[_0x4c5804(0x17b)]||_0x23a68e[_0x4c5804(0x193)];return{'openUrl':_0x239515,'mediaUrl':_0x48902c};}else{if(this['isQuanX']()){let _0x18c0ce=_0x23a68e[_0x4c5804(0x1f4)]||_0x23a68e[_0x4253bc(0x227,'fQDz')]||_0x23a68e[_0x4253bc(0x175,'IzP7')],_0x27f558=_0x23a68e['media-url']||_0x23a68e[_0x4c5804(0x17b)];return{'open-url':_0x18c0ce,'media-url':_0x27f558};}else{if(this[_0x4c5804(0x273)]()){let _0x1914ee=_0x23a68e['url']||_0x23a68e[_0x4253bc(0x21b,'t&)9')]||_0x23a68e[_0x4c5804(0x1f4)];return{'url':_0x1914ee};}}}}else return undefined;}};if(!this[_0x1e880c(0x221)]){if(this['isSurge']()||this[_0x1e880c(0x228)]())$notification[_0x1e880c(0x28b)](_0xf7bf55,_0x117110,_0x3f8616,_0xb7b769(_0x9d3b0));else this[_0x568d4c(0x22d,'jjy1')]()&&$notify(_0xf7bf55,_0x117110,_0x3f8616,_0xb7b769(_0x9d3b0));}if(!this[_0x1e880c(0x2bc)]){let _0x14ca63=['','==============📣系统通知📣=============='];_0x14ca63['push'](_0xf7bf55),_0x117110?_0x14ca63['push'](_0x117110):'',_0x3f8616?_0x14ca63['push'](_0x3f8616):'',console[_0x568d4c(0x1cf,'yGiQ')](_0x14ca63['join']('\x0a')),this['logs']=this[_0x1e880c(0x259)][_0x1e880c(0x29d)](_0x14ca63);}}[_0x72bbf8(0x256)](..._0x4e4cc3){const _0x1cceee=_0x5a5f7f,_0x3e7948=_0x72bbf8;_0x4e4cc3['length']>0x0&&(this[_0x3e7948(0x259)]=[...this['logs'],..._0x4e4cc3]),console['log'](_0x4e4cc3[_0x1cceee(0x25c,'jiI6')](this[_0x3e7948(0x1b8)]));}[_0x5a5f7f(0x17c,'IzP7')](_0x496432,_0x3e86b3){const _0x537140=_0x5a5f7f,_0x4d0139=_0x72bbf8,_0x4bf57e=!this[_0x4d0139(0x273)]()&&!this['isQuanX']()&&!this[_0x4d0139(0x228)]();!_0x4bf57e?this['log']('','❗️'+this[_0x537140(0x1f8,'cT0v')]+_0x4d0139(0x224),_0x496432):this[_0x4d0139(0x256)]('','❗️'+this[_0x4d0139(0x1ba)]+',\x20错误!',_0x496432[_0x4d0139(0x1c7)]);}[_0x72bbf8(0x1a5)](_0x297888){return new Promise(_0x3cac03=>setTimeout(_0x3cac03,_0x297888));}['done'](_0x23e9f6={}){const _0x14aeb8=_0x72bbf8,_0x59aa4e=_0x5a5f7f,_0x5e6956=new Date()[_0x59aa4e(0x16b,'Q$Bw')](),_0x273404=(_0x5e6956-this['startTime'])/0x3e8;this[_0x14aeb8(0x256)]('','🔔'+this[_0x59aa4e(0x21c,'t&)9')]+_0x59aa4e(0x1a3,'*AfB')+_0x273404+'秒'),this['log'](),(this[_0x14aeb8(0x273)]()||this[_0x59aa4e(0x184,']n*[')]()||this[_0x59aa4e(0x18c,'UaWE')]())&&$done(_0x23e9f6);}}(_0x99d47f,_0x49f034);}
