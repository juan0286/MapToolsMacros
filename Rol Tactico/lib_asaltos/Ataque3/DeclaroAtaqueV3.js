<!-- DeclararAtaqueV3 --> 

<!-- ********** El Token atacante siempre es el Token que tiene la iniciativa en este momento **********-->
[h: tokenAtk = getInitiativeToken()]
[h: targets = getSelected()]
[h, if(listContains(targets,tokenAtk)) : selftarget = 0; selftarget = 1;]
[h: tokenAtk = getName(getInitiativeToken())]
[h: ErrorMsg( selftarget ,"El Mismo Atacante, no puede ser objetivo")]
[h: ErrorMsg( listCount(targets) ,"Para atacar primero debe elejir al menos un Objetivo")]
[h: switchToken(tokenAtk)]


<!-- ********** Traigo la maxima distancia de las armas. **********-->
[h: alcance1=3]
[h: arma1 = brazo1]
[h: alcances = json.get(arma1,"alcance")]
<!-- Si hay mas de un enemigo , entonces dejo el alcance en 3 -->
[h, if(alcances!= "" && listCount(targets)==1): alcance1 = indexKeyStrProp(alcances,countStrProp(alcances)-1)]

[h: alcance2 = 3 ]
[h: arma2 = brazo2 ]
[h: alcances = json.get(arma2,"alcance")]
<!-- Si hay mas de un enemigo , entonces dejo el alcance en 3 -->
[h, if(alcances!= "" && listCount(targets)==1): alcance2 = indexKeyStrProp(alcances,countStrProp(alcances)-1)]

<!-- ********** Comparo contra los Objetivos ********** -->
[h, foreach(tgt,targets),code:{
	[ if(getDistance(tgt)<= alcance1): estaEnRango1 = 1; estaEnRango1 = 0 ]
	[ if(getDistance(tgt)<= alcance2): estaEnRango2 = 1; estaEnRango2 = 0 ]
	[ ErrorMsg( estaEnRango2 + estaEnRango1 ,"Uno de los obejtivos esta fuera de alcance")]
} ]	
[r, if(listCount(targets)==1),code:{
	[r, if(getDistance(targets)<= 3): DeclararAtaque1v1(tokenAtk,targets) ; DeclararAtaqueArrojadizo(tokenAtk,targets) ]
};{
	[r: DeclararAtaqueMultipleV3(tokenAtk,targets)]
}]


