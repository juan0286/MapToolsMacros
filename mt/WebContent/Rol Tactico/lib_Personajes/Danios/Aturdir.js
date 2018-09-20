[h: target= arg(0)]
[h: asaltosAturdido = arg(1)]

[h: switchToken(target)]
[h: setState("Aturdido",1)]
[h:setProperty("Aturdimiento", asaltosAturdido)]
[r: target + " esta aturdido.<br>"]
[r, if(isPC()): asaltosAturdido+ " Asaltos.<br>"]