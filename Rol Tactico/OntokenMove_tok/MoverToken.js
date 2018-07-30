[h: token = arg(0)]	
[h: usedMov = arg(1)]

[h: rango = 1]	
[h: mov = getProperty("ActualMove", token)]	

[h, if(usedMov <=  mov): rango =  1]
[h, if(usedMov >  mov && usedMov <=  mov*1.5 ): rango =  2]
[h, if(usedMov >  mov*1.5 && usedMov <=  mov*2 ): rango =  3]
[h, if(usedMov >  mov*2): rango =  4]

[h: am = getProperty("ActualMove", token)]

[h, if( rango == 1 ): mov_final = getProperty("ActualMove", token) - usedMov ; mov_final = 0 ]
[h: mje = token+ " se movio "+ usedMov +". Aun se puede mover "+ mov_final ]	

[h, if( rango < 4 ),CODE:{   			
	[h: setProperty("ActualMove", mov_final,token)]		
	[h: setProperty("LastRoute", usedMov,token)]	
	<!-- Si Tiene seguimiento lo mueve -->			
};{
	[h: mje = '<span style="color:red;font-weight:bold;">'+ token +' no puede moverse tanto en este turno.</span>' ]					
}]
[h: DialogRango(rango,getProperty("Movement"))  ]

[h: macro.return = mje]