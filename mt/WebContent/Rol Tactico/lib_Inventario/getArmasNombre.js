<!-- getArmasNombre() -->
[h: ids = arg(0)]
[h: filtro = arg(1)]
[h: armas = ""]
[r, foreach(a,ids):	getStrProp(table("Weapons",a),"nombre")]
