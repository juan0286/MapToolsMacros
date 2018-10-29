<!-- showAlcancesInRow-->
[h: arma = arg(0)]
[h, if(json.contain(arma,"alcance")): alcances = json.get(arma,"alcance") ; alcances == 0 ]
		
[r, count(countStrProp(alcances),""),code:	{
	  [h: rango = number(indexKeyStrProp(alcances, roll.count))]
	  [h: bonif = indexValueStrProp(alcances, roll.count)]
	  [h, if(bonif>0): simbolo = "+" ; simbolo = ""] 
	  [r: rowPerso('<span>'+rango+' Mts   -> '+simbolo+bonif+' bo</span>',3)]		
}] 
