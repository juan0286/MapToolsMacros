<!-- Full Ataque -->

[h: bo =100]
[h: bd =10]
[h: estiloBO=""]
[h: penaGolpe =0]
[h: dados ="1d100"]

[H: tokenList=getVisibleTokenNames()]
[H: imgList = tokenList]
 
[H: Num = listCount(imgList)]
 
[h,COUNT(Num),CODE:
{	

	[h:tokenName=listGet(imgList,roll.count)]
	[h,token(tokenName): image=getTokenImage()]
	[h:imgList=listReplace(imgList,roll.count,tokenName+" "+image)]
}]

[h: arrEstilos = listAppend('', estiloBo) ]

[h, for(i,0,bo,10): arrEstilos = listAppend(arrEstilos, add("bo=",bo-i,"; bd=",bd+i,";") ) ]


[h: input =input( 
"Target|"+imgList+"|Enemigo Objetivo|LIST|SELECT=0 ICON=TRUE ICONSIZE=30",
"boSeleccionada|"+ arrEstilos +"|Cuanto Bo Ataque / Defensa |LIST|SELECT=0 VALUE=STRING",
"penaGolpes|"+penaGolpe+"|Penaliza|TEXT", 
"dadosATirar|"+dados+"|Dados a tirar|TEXT"
)]
[h: abort(input)]