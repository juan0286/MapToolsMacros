
[h: permitMover = 0]
[h: usedMov = 1]
[h: name = getName()]
[h: id = currentToken()]
[h: mov = getProperty("ActualMove")]
[h: snap=isSnapToGrid()]
[h, if( currentToken() != getInitiativeToken() ), code:{  [h: permitMover = 1] }]
[h, if( snap ):usedMov =  getMoveCount()]



[r, if( usedMov <=  mov ),CODE:{   	
		[h: mov = mov - usedMov]	
		[h: setProperty("ActualMove", mov)]		
		[r, if( isPC() ), CODE:	{			
			[r: Seguir(getName(),getLastPath(0))]
			[r:name] se movio [r:usedMov]. Aún se puede mover [r:mov]
			
			<!-- Si Tiene seguimiento lo mueve -->
			[r, if( isPropertyEmpty("Seguimiento") == 0): Seguir(getName(),getLastPath(0)) ]

		}]
		
	};{
		[h: permitMover = 1]
		[r, if( isPC() ), CODE:	{			
			<span style="color:red;font-weight:bold;">[r:getName()] solo puede moverse 	
			[r:getProperty("ActualMove")].</span> 
	}]
	
}]
[h:tokens.denyMove = permitMover]