<!-- getArmas() -->
[h: ids = get(0)]
[h: armas = ""]
[h, foreach(a,ids):listAppend(armas, encode(table("Armas",a)))]
error
[h: assert(length(ids)==length(armas)), "Algunas armas no fueron encontradas")]
[h: macro.return = armas]