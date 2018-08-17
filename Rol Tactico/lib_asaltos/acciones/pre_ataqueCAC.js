<!-- pre_ataqueCAC cuando el pj decide que durante el asalto va a atacar.-->
[h: arma= 	"nombre=Espada Magica;tipo=magica;clase=espada ancha;bonoBO=20" ]
[h: escudo= "nombre=Escudo Rodana;tipo=magica;clase=escudo chico;bonoBD=25" ]
<!-- los tipos de bo son: dosArmas, unArma, pelea -->
[h: tipoBO= 'unArma']
[h: bo= 150]
[h: bd= 15]

[h: estiloBo = setStrProp('', "bo", bo) ]
[h: estiloBo = setStrProp(arrBo, "bd", bd) ]
[h: arrEstilos = listAppend('', estiloBo) ]



[h, for(i,bo,0,-10): arrBo = listAppend(arrEstilos, add("bo=",bo-i,";bd=",bd+bo-i,";") ) ]
[r: arrBo]
[h: boSelector=input(
	"boSeleccionada|"+ arrBo +"|Cuanto Bo Ataque / Defensa |LIST|SELECT=0 VALUE=STRING")]
]
[h:  ]

[h: BOfinal = indexKeyStrProp(boSeleccionada,0) ]
[h: BDfinal = indexValueStrProp(boSeleccionada,1) ]

[h: json =  json.set("{}", "accion", acc ,"desc",1,"bo",BOfinal,'bd',BDfinal,'arma',arma )]
  

******************

{150:15}
{150:15,140:25,130:35,120:45....}
150-15  140-25  130-35
5

