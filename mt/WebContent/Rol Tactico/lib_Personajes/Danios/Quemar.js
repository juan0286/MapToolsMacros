[h: target= arg(0)]
[h: dmgFire= arg(1)]

[h: switchToken(target)]
[h:setProperty("Quemado", dmgFire)]

[h:sanActual = getProperty("Sangre")]
[h,if(sanActual != ""): sanActual = sanActual - dmgFire; sanActual = dmgFire*-1]

[h:setState("Se quema", 1)]

{target} pierde {sanActual} pv por asalto por quemaduras.<br>    

