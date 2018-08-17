<!-- pre_ataqueCAC cuando el pj decide que durante el asalto va a atacar.-->
[h: bo= 150]
[h: bd= 15]
<!-- los tipos de bo son: dosArmas, unArma, pelea -->
[h: tipoBO= 'unArma']
[h: arma= 	"nombre=Espada Magica;tipo=magica;clase=espada ancha;bonoBO=20" ]
[h: escudo= "nombre=Escudo Rodana;tipo=magica;clase=escudo chico;bonoBD=25" ]

[h: arrBo = setStrProp('', bo, bd) ]
[h: weapon = setStrProp(weapon, "value", 10)]

[h: weapon = "name=longsword; damage=1d8; maxdamage=8"]

[h, for(i,bo,0,-10): arrBo = json.setStrProp(arrBo, bo-i, bd+bo-i) ]
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

