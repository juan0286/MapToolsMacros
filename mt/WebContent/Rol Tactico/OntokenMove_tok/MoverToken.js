[h: token = arg(0)]	
[h: moveCount = arg(1)]

[h: rango = 1]	
[h: puntosMov = getProperty("Movement", token)]	

[h, if(moveCount <=  puntosMov): rango =  1]
[h, if(moveCount >  puntosMov && moveCount <=  puntosMov*1.5 ): rango =  2]
[h, if(moveCount >  puntosMov*1.5 && moveCount <=  puntosMov*2 ): rango =  3]
[h, if(moveCount >  puntosMov*2): rango =  4]

[h: mje = token+ " se movio "+ moveCount +"." ]	

[h, if( rango < 4 ),CODE:{   			
	[h: setProperty("MoveCount", moveCount,token)]	
	<!-- Si Tiene seguimiento lo mueve -->		
	[r, if( isPropertyEmpty("Seguimiento",token) == 0): Seguir(token,getLastPath(0),moveCount) ]	
};{
	[h: mje = '<span style="color:red;font-weight:bold;">'+ token +' no puede moverse tanto en este turno.</span>' ]					
}]
[h: DialogRango(rango,getProperty("Movement"))  ]

[h: macro.return = mje]