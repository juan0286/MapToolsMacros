[h: target= arg(0)]
[h: asaltosAturdido = arg(1)]

[h: switchToken(target)]
[h: setState("Obligado a parar",1)]
[h:setProperty("Aturdimiento", asaltosAturdido)]
[r: target + " esta Obligado a parar.<br>"]
[r, if(isPC()): asaltosAturdido+ " Asaltos.<br>"]