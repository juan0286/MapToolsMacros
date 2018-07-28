[h:status = input(
"dmgBlood|0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25|Cuantos Pv pierde por asalto?|LIST|SELECT=0")]
[h:abort(status)]

[h:sanActual = getProperty("Sangre")]
[h,if(sanActual != ""): sanActual = sanActual - dmgBlood; sanActual = dmgBlood*-1]
[if(sanActual == 0),CODE:
{
	[h:setProperty("Sangre", "")]
	[h:setState("Sangrando", 0)]
    [r:token.name] ya no esta sangrando. 
};
{
    [h:setProperty("Sangre", sanActual)]
	[h:setState("Sangrando", 1)]
	{getName()} pierde {sanActual} pv por asalto.    
};]