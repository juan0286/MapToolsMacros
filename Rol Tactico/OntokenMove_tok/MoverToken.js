[h: isSufiscientesPuntos = arg(0)]	
[h: token = arg(1)]	
[h: usedMov = arg(2)]	
[h: mov = getProperty("Movement", token) - usedMov]	
[h: mje = token+ " se movio "+ usedMov +". Aun se puede mover "+ mov ]			

[h, if( isSufiscientesPuntos ),CODE:{   	
		
		[h: setProperty("ActualMove", mov,token)]		
		[r, if( isPC(token) ), CODE:	{								
			<!-- Si Tiene seguimiento lo mueve -->
			[r, if( isPropertyEmpty("Seguimiento",token) == 0): Seguir(token,getLastPath(0)) ]

		}]
		
	};{		
		[h, if( isPC(token) ), CODE:	{			
			[h: mje = '<span style="color:red;font-weight:bold;">'+ token +' solo puede moverse '+ getProperty("ActualMove")+ '.</span>' ]			
	}]	
}]	
[h: macro.return = mje]