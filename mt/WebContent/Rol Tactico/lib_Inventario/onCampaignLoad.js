<!-- onCampaignLoad -->

[h: loc = getMacroLocation()]
[h: macross = "getArmas,listFilter"]
[H: len = listCount(macross)] 
[h,COUNT(len),CODE:
{	
	[macc=listGet(macross,roll.count)]
	[defineFunction(macc, macc+"@"+getMacroLocation())]
	
}]

