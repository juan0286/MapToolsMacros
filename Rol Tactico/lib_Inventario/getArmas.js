<!-- getArmas() -->
[h: ids = arg(0)]
[h: armas = ""]
[r, foreach(a,ids): table("Weapons",a)]