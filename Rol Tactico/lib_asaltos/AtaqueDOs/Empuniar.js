<!-- Empuniar -->
[h:data = arg(0)]
[h, if(pausear()==1): pause("data")]
[h: ErrorMsg(length(GolpeActual),"Debe tener definido GolpeActual")]


[h: tipo = getStrProp(data,"tipo")]
[h, if(tipo == ""): tipo = getStrProp(GolpeActual,"tipoAtaque")]
[h, if(tipo == ""): tipo = "1Mano"]
[h: varsFromStrProp( data )]


<!-- Si confirmo guardamos las armas en los brazos -->
[h, if(pausear()==1): pause("data","GolpeActual")]
[h,if(getStrProp(data,"Confirmar") == "Confirmar" && tipo == "1Mano"),code:{
	[brazo1 =  getArmas(Arma1Sel)]
	[brazo2 =  getEscudos(Arma2Sel)]
	[GolpeActual = setStrProp(GolpeActual,"tipoAtaque",tipo)]
	[abort(0)]
}] 
[h,if(getStrProp(data,"Confirmar") == "Confirmar" && tipo == "2Manos"),code:{
	[brazo1 =  getArmas(Arma1Sel)]
	[brazo2 =  getArmas(Arma1Sel)]
	[GolpeActual = setStrProp(GolpeActual,"tipoAtaque",tipo)]
	[abort(0)]
}] 
[h,if(getStrProp(data,"Confirmar") == "Confirmar" && tipo == "2Armas"),code:{
	[brazo1 =  getArmas(Arma1Sel)]
	[brazo2 =  getArmas(Arma2Sel)]
	[GolpeActual = setStrProp(GolpeActual,"tipoAtaque",tipo)]
	[abort(0)]
}] 


<!-- Logica del Dialogo -->

[h, if( !listContains( inv_Armas, 0 ) ): inv_Armas = "0,"+ inv_Armas )]
[h, if( !listContains( inv_Escudos, 0 ) ): inv_Escudos = "0,"+ inv_Escudos )]

[h:listaArmas = ""]
[h:listaEscudos = ""]
[h,foreach(i,inv_Armas),code:
{
	[arma = table("Weapons",i) ]
	[ if( json.type(arma)!="OBJECT" ): prueba = 0; prueba = 1]
	[h: ErrorMsg( prueba,"JSON Deconocdo i: "+arma)]
	[usos = json.get(arma,"usable")]
	[if(listContains(usos,tipo)): listaArmas= listAppend(listaArmas,"<option value='"+json.get(arma,"ID")+"'>"+json.get(arma,"nombre")+"</option>")]
	
}]
[h,foreach(i,inv_Escudos),code:
{
	[escudo = table("Shields",i)]	
	[listaEscudos = listAppend(listaEscudos,"<option value='"+json.get(escudo,"ID")+"'>"+json.get(escudo,"nombre")+"</option>")]	
}]


[h: select1Arma = listFormat( listaArmas, "<select name='Arma1Sel'>%list</select>", "%item","")]
[h: select1Arma2 = listFormat( listaArmas, "<select name='Arma2Sel'>%list</select>", "%item","")]
[h: selectEscudo = listFormat( listaEscudos, "<select name='Arma2Sel'>%list</select>", "%item","")]


[h,if(json.type(brazo1)=="OBJECT"): nameArma1 = json.get(brazo1,"nombre") ; nameArma1 =""]
[h,if(json.type(brazo2)=="OBJECT"): nameArma2 = json.get(brazo2,"nombre") ; nameArma2 =""]
[h: tema1 =3]
[h: tema2 =2]
[h: processorLink =macroLinkText('Empuniar@lib:personajes',"all","","selected")]
[dialog("Empuniar"):{
<html>
    <head>
      <title>Empuniar</title>
      <meta name="input" content="true">
    </head>
    <body>
      <form name="calculoDeDanio" action="[r:processorLink]">     
      	<input type="hidden" name="tipo" value="[r: tipo]"></input>
		  <table width="100%">          
		  [r: rowPerso(nameArma1+"|th,&#26;,"+nameArma2+"|th",tema1)]
		  [r: rowPerso("<input type='submit' name='soltarArma1' value='Soltar'>,&#26;|th|1|background-color:none;,<input type='submit' name='guardarArma1' value='Guardar'>|th",tema2)]
		  [r: rowPerso("<input type='submit' name='soltarArma2' value='Soltar'>,&#26;|th|1|background-color:none;,<input type='submit' name='guardarArma2' value='Guardar'>|th",tema2)]		  
		  </table>
          <table width="100%">
            [h: fila = macroLink("2 Armas","Empuniar@"+getMacroLocation(),"self","tipo=2Armas;","selected")]  
            [h: fila = listAppend(fila,macroLink("1 Mano", "Empuniar@"+getMacroLocation(),"self","tipo=1Mano;","selected") )]              
            [h: fila = listAppend(fila,macroLink("2 Manos", "Empuniar@"+getMacroLocation(),"self","tipo=2Manos;","selected") )]  
            [r: rowPerso(fila,tema1)]
          </table>
          <table width="100%">
	          [r,if(tipo == "1Mano"): rowPerso(select1Arma+"|th|1,"+selectEscudo+"|th|1,",tema2)]
	          [r,if(tipo == "2Armas"): rowPerso(select1Arma+"|th|1,"+select1Arma2+"|th|1,",tema2)]
	          [r,if(tipo == "2Manos"): rowPerso(select1Arma+"|th|2",tema2)]          
          </table>
          <table width="100%">	              
		  	[r: rowPerso("<h1><input type='submit' name='Confirmar' value='Confirmar'></h1>",5)]		              
          </table>

      </form>
    </body>
</html>
}]