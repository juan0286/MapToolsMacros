<!-- Matar -->

[h: target= arg(0)]
[h: l = json.length(macro.args)]
[h, if(l>1) : asaltos=arg(1); asaltos=0]

[h: switchToken(target)]
[h, if(asaltos == 0) : setState("Muerto",1)]
[r, if(asaltos == 0) : colorText(target + " está Muerto. Que en paz Descanse<br>","RED")]
