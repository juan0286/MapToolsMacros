[h:mov = 100]
[h: ids = getTokens()]
[foreach(id, ids, "<br>"), code:{	
    	[h:setProperty("ActualMove",mov, id) ]	  
} ]