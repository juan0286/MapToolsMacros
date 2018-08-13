<!-- getAccion -->
[h: tokName = getName(arg(0)) ]
[h: tp = getPropertyType(tokName) ]
[h, if( tp != "Jugador" && tp != "Npc" ): assert(0, colorText( "No es un personaje. No guarda Acciones","red"),0) ]
[h: accio = getAccion(tokName)]
[h: a = json.get(accio,"accion")]
[h: re = AccionToString(a)]
[h: macro.return = re ]