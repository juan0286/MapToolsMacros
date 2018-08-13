<!-- pre_ataqueCAC cuando el pj decide que durante el asalto va a atacar.-->
[h: bo= 150]
[h: bd= 15]
<!-- los tipos de bo son: dosArmas, unArma, pelea -->
[h: tipoBO= 'unArma']
[h: arma= { nombre: 'Espada Magica', tipo='magica' clase='espada ancha' bonoBO=20 }]
[h: escudo= { nombre: 'Escudo Rodana', tipo='magica' clase='escudo chico' bonoBD=25 }]

[h: varBo = json.set("{}", STRING(bo), STRING(bd))]
[h, for(i,bo,0,-10): varBo = json.set(varBo, STRING(i), STRING(bd +(bo-i))) ]
[h: boSelector=input("boSeleccionada|"+json.fromStrProp(varBo,'-')+"|Cuanto Bo Ataque / Defensa |LIST|SELECT=0 VALUE=STRING")]
[h: listOfBo = json.toList(varBo)]
[h: BOfinal = json.get(listOfBo,boSeleccionada) ]

[h: BDfinal = json.get(listOfBo,1) ]
[h: BOfinal = json.get(listOfBo,0) ]







******************

{150:15}
{150:15,140:25,130:35,120:45....}
150-15  140-25  130-35
5

