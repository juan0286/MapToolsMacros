<!-- SortilegiosExtraFrom -->
[h: tokName =  arg(0)]
[h: assert(findToken(tokName),colorText("No existe el Token, no existen sortilegios.",'red'),0)]

[h: static_magiasExtra = getHoja("SORTILEGIOS_EXTRA",tokName)]
[h: ar =json.fromList(static_magiasExtra)]
[h: nl = '[]']
[h,foreach(s,ar),CODE:
{	
	[h: r = json.fromStrProp(s)]	
	[h: nl = json.append(nl,r)]
}]
[h: macro.return = nl ]