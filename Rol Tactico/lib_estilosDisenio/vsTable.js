<!-- vsTable -->
[h: actor1 = arg(0)]
[h: actor2 = arg(1)]
[h: icon = arg(2)]
[h,token(actor1): imageActor1=getTokenImage()]
[h,token(actor2): imageActor2=getTokenImage()]
[h: icon = replace(getIcon(icon), ":", "&#58;")]

[r: strformat("<hml><table width='100%' border=0><tr><td width='33%'><img src='%{imageActor1}' width=90 height=90></img></td><th width='100'><img src='%{icon}' width=45 height=45></img></th><td width='33%'><img src='%{imageActor2}' width=90 height=90></img></td></tr><tr><th>%{actor1}</th><td></td><th>%{actor2}</th></tr></table></html>") 
]