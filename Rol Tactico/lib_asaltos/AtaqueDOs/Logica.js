**arma**
nombre
clase: normal-magica-mithirl-sagrada-exterminadora
tipoBo: BO_FILO-BO_CONTUNDENTE-BO_2MANOS-BO_ASTA-BO_PELEA
usable: 2manos,1mano,2armas
tam: 1-2-3

pasos:
Declaro Accion:
-Selecciono Armas -> Creo un golpeActual(pasos equivale a Accion)

Escenarios
- Cambio de Accion -> Actualizo el Golpe Actual(pasos = 0 bo = bo *0.5)
- Cambio de Armas -> Actualizo el Golpe Actual(1ro gratis pasos = 0)
- Ataque -> actualizo bo/bd
- Defensa -> actualizo bo/bd

tipoAtaque (cuando llamo a cambio de armas) unAarma;dosManos;dosArmas;pelea;
tablaDanio (del arma: principal(tal vez elegible))
criticoTable (del arma: se usan ambas, o una sola)
BonoArmas (calculo, en base a las armas)

contGolpes = 0
BonoEscudo (del escudo)
Evento = (atk=aqui agrego cosas que pueden pasar en el ataque;)
BoActual = bo de Hoja - cambios + Property:actividad + Property:bonoBo - 
bdAgiActual = Property:Agi + Property:bonoBd
BoFija = Property:BoFija
BdFija = Property:BdFija

[ data= arg(0)]
["resultVars,tablaDanio,criticoTable,bonoArmas,bonoEscudo,eventos,boActual"]
[empuniado = TraerCarga()]
[tipoAtaque = getStrProp(empuniado,"tipoAtaque")]
[tablaDanio = getStrProp(empuniado,"tablaDanio")]
[criticoTable = getStrProp(empuniado,"criticoTable")]
[criticoTable = getStrProp(empuniado,"bonoArmas")]
[bonoEscudo = getStrProp(empuniado,"bonoEscudo")]
[eventosArmas =  getStrProp(empuniado,"eventos") ]




[contGolpes = 0]
***************** Primera declaracion golpeActual
pasos=1-2;
countAtaques=0;
cambioArma=0;
cambioAccion=0;
boUsada=0;
agiUsada=0;
escudoUsado=0;
danioRecibido=0;  (cuento el daño ecibido en el asalto para ver quien puede empujar a quien)

***************** Actualizo golpeActual ataque
boUsada= bo que se uso;
countAtaques= countAtaques+1;

***************** Actualizo golpeActual defensa
agiUsada = agi que se uso;
boUsada = bo que se uso para defender;
escudoUsado= menos el escudo si se uso;
danioRecibido=0;

***************** Cambio de armas
cambios=cambios +1;

***************** Cambio de Accion
cambioAccion=1;
pasos=0;


[boActual = getStrProp(empuniado,"boActual") - (cambios*-30) + getProperty("actividad",token) + getProperty("bonoBo",token)]
[bdAgiActual = getStrProp(empuniado,"bdActual") + Property:bonoBd]


[if (isPc(token)),code:{}]
