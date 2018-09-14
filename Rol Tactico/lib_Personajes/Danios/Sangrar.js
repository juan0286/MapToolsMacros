[h: target= arg(0)]
[h: dmgBlood = arg(1)]

[h: switchToken(target)]
[h:sanActual =getProperty("Sangre")]

[h,if(sanActual != ""): Sangre = sanActual + dmgBlood; Sangre = dmgBlood]

[h:setState("Sangrando", 1)]

{target} esta sangrando, pierde -{Sangre} pv por asalto. <br>  