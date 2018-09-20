[h: target= arg(0)]
[h: asaltosAturdido = arg(1)]

[h: switchToken(target)]
[h: setState("Aturdido y Sin Poder parar",1)]
[h:setProperty("Aturdimiento", asaltosAturdido)]
[r: target + " esta aturdido y no puede parar.<br>"]
[r, if(isPC()): asaltosAturdido+ " Asaltos.<br>"]