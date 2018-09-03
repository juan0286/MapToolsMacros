<!-- getEscudosNombre() -->
[h: ids = arg(0)]
[r, foreach(a,ids):	getStrProp(table("Shields",a),"nombre")]
