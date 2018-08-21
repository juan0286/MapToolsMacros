<!-- getAccion -->
[h: if(currenttoke()): tokId =  currenttoke(); tokId = arg(0)]

[h: assert(hasProperty("Accion", tokId)  , "No es un personaje. No guarda Acciones")]

[h: accio = getProperty("Accion",tokId)]

[h, if( length(accio) == 0 ): accio = json.set("{}","accion","mov_estatico","desc","no hizo nada") ]

[h: macro.return = accio ]