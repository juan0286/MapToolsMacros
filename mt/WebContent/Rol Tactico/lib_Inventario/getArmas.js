<!-- getArmas() -->
[h: ids = arg(0)]
[h: armas = ""]
[h, foreach(a,ids):	armas =  listAppend(table("Weapons",a))]
[h, if(json.length(macro.args) > 1), armas = listFilter(armas,arg(1))]
[r: armas ]
