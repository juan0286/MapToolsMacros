[h: par = arg(0)]
[h: par = arg(0)]
[h: token= arg(1)+"_Hoja"]
[h, if( isPC(arg(1)) ): token= arg(1)+"_Hoja"]

[h: macro.return = getProperty(par,token)]
