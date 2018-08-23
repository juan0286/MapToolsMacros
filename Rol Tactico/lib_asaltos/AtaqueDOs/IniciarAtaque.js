<!-- Iniciar Ataque -->
[h: tokenAtk = initiativeToken()]
[h,token(tokenAtk): jugadores = getOwners()]
[h, if( isPC(tokenAtk) ): broadcast(macroLink("<color='red'>", "declaroAtaque@lib:asalto", 'none', tokenAtk, ""), jugadores) ; declaroAtaque(tokenAtk) ]