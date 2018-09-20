[h: token = json.get(macro.args, 0)]
[h: path = json.get(macro.args, 1)]
[h: moveCount_orig = json.get(macro.args, 2)]


[h: seguidores = json.sort(getProperty("Seguimiento",token))]
[h, foreach(seg, seguidores),code:{ 
	[h: dis = json.get(seg,"dis")]	
	[h: name = json.get(seg,"name")]
	[h: dis_Actual = getDistance(name, 0,token)]
	[h:pos= json.get(path,json.length(path)-2)]
	[h: x= json.get(pos,"x")]
	[h: y= json.get(pos,"y")]
	[if( dis_Actual > dis && json.length(path) >= 2),code:{
		[h: moveToken(x,y,0,name)]				
		[h: setProperty("MoveCount",moveCount_orig,name)]
	}]		
}]