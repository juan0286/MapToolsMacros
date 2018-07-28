[h: tok = arg(0)]

[h: ta = "MM_"+ getTipoArm(getProperty("Armadura",tok),tok) ]

[h, if (isPC(tok)):  
	mm_a = getHoja(ta , tok ) + getProperty("Actividad",tok) ) ;
	 mm_a = getProperty("MM",tok) + getProperty("Actividad",tok)  ]

[h, if (mm_a <= -25): mov=6 ] 
[h, if(mm_a > -25 && mm_a <= -15): mov=9 ]
[h, if(mm_a > -15 &&  mm_a <= -5): mov=12 ]
[h, if(mm_a > -5 &&  mm_a <= 5): mov=15 ]
[h, if(mm_a > 5 && mm_a <= 15): mov=18 ]
[h, if(mm_a > 15 && mm_a <= 24): mov=21 ]
[h, if(mm_a > 25 ): mov= 24 ]
[r: macro.return = mov ]