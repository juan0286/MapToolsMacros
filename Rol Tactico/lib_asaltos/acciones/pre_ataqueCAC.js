<!-- pre_ataqueCAC cuando el pj decide que durante el asalto va a atacar.-->
[h: arma= 	"nombre=Espada Magica;tipo=magica;clase=espada ancha;bonoBO=20" ]
[h: escudo= "nombre=Escudo Rodana;tipo=magica;clase=escudo chico;bonoBD=25" ]
<!-- los tipos de bo son: dosArmas, unArma, pelea -->
[h: tipoBO= 'unArma']
[h: bo= 150]
[h: bd= 15]


[h: arrEstilos = listAppend('', estiloBo) ]

[h, for(i,0,bo,10): arrEstilos = listAppend(arrEstilos, add("bo=",bo-i,"; bd=",bd+i,";") ) ]

[h: boSelector=input(
	"boSeleccionada|"+ arrEstilos +"|Cuanto Bo Ataque / Defensa |LIST|SELECT=0 VALUE=STRING")]
]


[h: varsFromStrProp(boSeleccionada) ]
[r: bo]
[r: bd]


[h: json =  json.set("{}", "accion", acc ,"desc",1,"bo",BOfinal,'bd',BDfinal,'arma',arma )]
  

******************

{150:15}
{150:15,140:25,130:35,120:45....}
150-15  140-25  130-35
5

