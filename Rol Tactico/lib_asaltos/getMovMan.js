<!-- getMovMan  -->
[h: tok = arg(0)]
[h: ta = "MM_"+ getTipoArm(getProperty("Armadura",tok),tok) ]

[h, if (isPC(tok)):  
	mm_a = getHoja(ta , tok ) + getProperty("Actividad",tok) ) ;
	 mm_a = getProperty("MM",tok) + getProperty("Actividad",tok)  ]
[h: macro.return = mm_a]