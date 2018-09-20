[h: tokenAtk = arg(0)]
[h: target = arg(1)]
[h: arma = arg(2)]
[h: alcances = json.get(arma,"alcance") ] 

[h: rangoToken =""]
[h: r_anterior = 0]
  	
[h, count(countStrProp(alcances)),code:
{
  [ rango = number(indexKeyStrProp(alcances, roll.count))]
  [ bonif = indexValueStrProp(alcances, roll.count)]
  [ if(bonif>0): simbolo = "+" ; simbolo = ""] 
  [ dist= getDistance(target)]	
  [h, if(pausear()==1): pause("dist")]
  [ if(dist > r_anterior && dist <= rango ): rangoToken= strformat("Dist=%{dist}; bonif=%{bonif};")]	
  [r_anterior = rango]
  [h, if(pausear()==1): pause("rangoToken")]
}]  
[h: macro.return = rangoToken ]
