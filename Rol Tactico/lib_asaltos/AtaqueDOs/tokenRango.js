[h: tokenAtk = arg(0)]
[h: target = arg(1)]
[h: arma = arg(2)]
[h: alcances = json.get(arma,"alcance") ] 

[h: rangoToken =""]

  	
[h, count(countStrProp(alcances)),code:
{
  [ rango = indexKeyStrProp(critResu, roll.count)]
  [ bonif = indexValueStrProp(critResu, roll.count)]
  [ if(bonif>0): simbolo = "+" : simbolo = ""]
  [ tokenName=listGet(tokenList,roll.count)]
  [ dist= getDistance(tokenName)]	
  
  [ if(dist >= rango): rangoToken= strformat("rango=%{rango}; bonif=%{bonif};")]	
}]  
[h: macro.return = imgToken ]