******* Objetivos *******

✓ Arte Marcial implementado o al menos usable.
✓ Pelea normal implementado o al menos usable.
✓ Mejorar presentacion de petelguiese.
✓ Definir estilo de pelea, con escorpiones.
✓ Boton de Atacar en Status?
✓ El golpe Actual no graba bousada al atacar.
✓ Si no hay danio, Solo decir q no hubo danio.
✓ Arreglar los criticos de perforacion************************************** casa
✓ Tabla de Mov y Maniobra. MUY IMPORTANTE
✓ (90%) Completar el ciclo de ataque, con guardado de GOLPE ACTUAL(Falla Aturdimiento)
✓ Agregar el resto de los efectos criticos, derribado, etc.
* (50%) Combate Abierto y cerrado. MUY IMPORTANTE
* (90%) Arte Marcial con kata de armas. Jodido. -20 a la Bo y Critico Secundario. PROBAR

PROGRAMA (11 dias)
Dia 1
*(50%) Crear Iluminaciones. y Funcion de aplicar esas Luces a un objeto seleccionado.
*(50%) Varios Ataques en asalto.
*(50%) Ataque de Proyectiles.

*DIFICIL* Brisa Aura azul +20 BD Proyectiles, Cristal Wall(3 asaltos y pv)

*FACIL* Al defender: Si el defensor es NPC, abrir sola la caja de danio. 
*FACIL* Agregar BonoBDProy - BonoBDCac - BonoRT(calor=0;frio=0;veneno=0;)

*MEDIO* Recuperar ventanas remotas.
*FACIL* Agregar una mano sola como opcion.

*FACIL* Cabiar los iconos de los States Aturdido, o a parar, sin poder parar.

*DIFICIL* Objetos sostenibles, antorcha u otros, Funcion: Crea y Asigna

*DIFICIL* limites de Acciones

*DIFICIL* Desactivar limite de mov, o... darles switch.
*DIFICIL* Accion obligatoria al empezar el asalto.() Con Frame

*DIFICIL* Abre puertas personalizado. (cambiar facing con un boton, abrir y cerrar.(as puertas serian tokens, El tokenStatus reaccionaria, dando las opciones de abrir y cerrar, o despacio.)

* Reglas claras para Accion de oportunidad.
* Reglas claras para Cambio de Accion.
* Variedad de música

*DIFICIL* Agregar flechas con CARCAJ, varias tipos de flechas, esp y ruptura.
  * Y por que no? que flechas no rotas quedan sueltas por ahí.
*MEDIO* En calculo de danio, agregar Checkbox, espalda, sorpresa, aturdido, flanco, derribado

*MEDIO* Calculadora de Resistencias




✓ crear más variantes de pelea en equipo
✓ Agregar Antidoto de Veneno de escorpion dentro del mueble.
✓ agregar un pergamino de otro color en las cosas de petelguise, con pistas del heredero.
-(50%) Setear las habilidades de los 4 enemigos.

*** Segunda necesidad
* Reglas claras para MM Embestidas.
* Reglas clara Salto.(mm contra Mm, define si hay ataque o no.)
* Hacer un video explicando cada situacion de combate.
* Personaje aturdido no ataca, derrotado, o muerto sale de la inciativa. Preguntar por Voluntad?
* Soltar Armas y Cambiar de armas.

*** Tercer necesidad
* Permitir mover A un pj a la vez, su mv actual, y auto cambio al otro.
* Asignar Armas
* Agregar Speachs a los enemigos
* Agrar puntos de danio de la armadura, (Tipo Armadura 50 + bonoBD *20)
* Considerar criticos a grandes criaturas, usar gravedad por tipo de arma.
- Flechas +5 a la bo.








**********
Petelguiese
Entrada: Oh, capitanes de gondor, que gran error cometieron, al entrar en mi madriguera.
No pensaba meterme en los planes de arucaz, pero un escorpion no deja ir a una presa que se entrega tan facilmente a sus fauses.
Los planes de arucaz, ya que van a morir, no habría problema en revelarles la verdad detrás del lider de los aguijones rojos.
Eso les gustaría que dijera, jijijij pero en realidad ni siquiera los 15 señores sabemos lo que Drapion trama usando a Arucaz. Bueno.. tal vez tenga mis propias teorias.
Les contare todo a sus cadaveres, los muertos no hablan.
- se mueve tras los pilares, toma escorpions y los lanza
- Escorpiones Rojos. -5-50 pv, Negros -> Atuden. Escorpiones blancos - > capaces de matar en unas horas.
- lanza humo
- apaga la luz, y cambio el modo de vision de los personajes a que vean mucho más chico.
- se rie jijiji  jojojojo jujujujuju
- si destruyen los cuadros se desespera, enoja y muetra su ubicacion para putearlos 

**********
Duo Gunnar y el otro
Entrada: 
Estilos de pelea en pareja
- Combate abierto en conjunto ver en reglass
- Mov y Maniobra para ataque desde altura. Con Bono Extra. Mov y Maniobra ambos. Suma bo por MM más un bono, el ataque es con toda la bo.
- Bon. de Bo y Bd al pelear Juntos.
- Espalda con espalda
- Intercambio de oponentes.
- Full defensa en mala situacion.
- Embestida Defensiva-> el del escudo delante y el de la espada atras. Corren hacia el objetivo.

**********





**************************************
**************TAREA*******************

✓ -Cambiar las BO1, bo2 y bo3 de NPc, por BO_FILO, BO_CONT, BO_2MANO
y asi.
✓ -Agregar un Arma, que se llame KARATE, para usarla como tal.

testing:
probar ataques con
con NPC 
	2 armas
	1 arma
	2 manos
	con escudo
	sin escudo
con pc
  2 armas
  1 arma
  2 manos
  con escudo
  sin escudo

Combate Abierto:
Un cuadro con el valor de pelea de todos los participes.



**************************************
**************REGLAS*******************

KARATE:
Defensa Adrenal, se suma a la totalidad de la BD
no debe usar amraduras pesadas, y solo armas de kata de armas
contra proyectiles y arrojadizas ssolo sirve la mitad.

Chino Shaang
bd adrenal 82
bd 40

R1 Bo 142 1 ataque
R1 2 ataques al mismo -> 110

bd total = 260
se puede pasar bo a Iniciativa x2
pifia con 2

kata de armas:
+ bono BO de arma -20
Danio:
Tabla de karate + dife entre maximo del arma y maximo de karate.
Criticos: 

Disparo de Proyectiles con movimiento:
Moverse la mitad
Disparo con -50

Ataque con escudo:
pelea +10 bo

------------- Combate abierto
2d20 del Ejecutor. + Bono Pelea. + +20 bono * nivel de diferencia entre armas.
Si lo superan, recibe golpe.
Si no lo superan, el golpea con la cantidad de bo que quiera.
( En compania-> si supera la tirada el golpe lo recibe el de adelante, con su defensa)

------------- Combate cerrado
2d20 del Ejecutor. + Bono Pelea. + +20 bono * nivel de diferencia entre armas.
Si lo superan recibe el golpe, si no, él golpea sin resta de parada, solo agilidad.

********** 
 Dos ataques, o dos oponentes.

más de un ataque
op 1 no hay bonos negrativos, se divide fifty fifty->
170 bo
Ata 1 = 100	70 
atk 2 = 70	70
Bd	= agi 	agi+30

op 2 toda la bo -50 por ataque . Primero elijo cuando guardar para BD.
170 bo
defiendo = 70 y distribuyo
Ata 1 = 50 	
Ata 2 = 50
Bd	= agi 		agi+70



op 3
Defino que es un ataque a multiples enemigos
Separo bo y bd 
La bo que queda, -30 por enemigo extra.
y la bd es distribuible sin penalizaciones.
ej
170 bo
100 atk - 70 bd
Ata 1 = 70 	
Ata 2 = 70
Bd	=  agi+70

Ata 1 = 40 	
Ata 2 = 40
Ata 3 = 40
Bd	=  agi+70



***** limites de Acciones ****

Carga Sort
- No ataca
- Se mueve solo 3
- No se puede aturdido

Realiza Sort
- No ataca
- Se mueve solo 6
- No se puede aturdido

Carga proy
- Debe tener arco en mano
- No ataca
- Se mueve 3
- no se puede aturdido

Dispara proy
- No ataca CAC
- Se mueve solo 3
- No se puede aturdido

Mov y maniobra
- Puede que Ataque CAC %
- Se mueve mitad de mov. maximo.
- Se puede aturdido con -50 o -30.

Ataques CAC
- Puede que Ataque CAC
- Se mueve 3 .
- Se puede  solo defender con la mitad de la bo aturdido.

Desplazamiento
- No se puede atacar
- Se mueve todo el mov. maximo.
- Se puede aturdido con -50 o -30.

Mov Estatico
- No se puede atacar
- Se mueve 3 o 6, depende la accion. o el % de la tirada.
- No se puede aturdido



**** Sortilegio Activo ****

**** Temporizadores ****

Actividad=20;t=2,
Aturdido=1;t=3,
OAparar=1;t=3,
AturdidoSinParar=1;t=3,
BonoMM=10;t=10;
BonoIniciativa=10;t=10;
BonoRTVeneno=5;t=2;

En resetTokens o finasalto:
if (t == 0)
  borrar parametro; 
  Si es aturdido, etc quitar el States
  Si es BonoMM, BOnoBO... etc, reducir la Property.
  Si es aturdido, etc quitar el States
  Si es aturdido, etc quitar el States






**** Iluminaciones ****
Otras
----
A_Aura Owner Also 10: aura OWNER circle 75#00ff00
A_Aura Med malign 30': aura circle 3.250#330033
A_Aura Med Red 5' threat: aura square 750#055333
A_Radio 30Mts: aura circle 30#ff0000
A_trasp 1: aura GM circle 1#ff0000
A_trasp 2: aura GM circle 2#ff0000
A_Oscuridad 30: aura circle 30#000000
A_Vela: aura circle 2#ff0000
A_Velax4: aura circle 3#ffff00

Luces
----
L_Antorcha 12: circle 8 12#000000
L_Candelabro 40: circle 20 40#000000
L_Lampara 15: circle 4 15#000000
L_Fogata 30: circle 21 30#000000
L_Fuego 3: circle 1 3#000000
L_Fuego 6: circle 4 6#000000
L_Fuego 9: circle 7 9#000000
L_Vela: circle 3 6#000000
L_Velax4: circle 6 12#000000
A_Antorcha 12: aura circle 3#ffff00
A_Candelabro 40: aura circle  1#ffff00
A_Lampara 15: aura circle 5#ffff00
A_Fogata 30: aura circle  10#ffff00
A_Fuego 3: aura circle 0,5#ffff00
A_R_Fuego 3: aura circle 1#ff3333
A_Fuego 6: aura circle 1#ffff00
A_R_Fuego 6: aura circle 2#ff3333
A_Fuego 9: aura circle 2#ffff00
A_R_Fuego 9: aura circle 3#ff3333
A_Vela: aura circle 2#ffff00
A_Velax4: aura circle 4#ffff00

Magias
----
L_Proyeccion de luz 15: cone arc=120 6 15#000000
L_Proyeccion de luz 15: aura cone arc=120 3#ffff00
A_Brisa 6: aura circle 6#00ffff
L_Oscuridad 15 - 15: circle 0 30#000000 lumens=-101
L_Oscuridad 30 - 15: circle 15 30#808080 lumens=-40
A_Rango Verde 3: aura GM circle 3#66ff33 
A_Rango Verde 6: aura GM circle 6#66ff33 
A_Rango Verde 9: aura GM circle 9#66ff33 
A_Rango Verde 12: aura GM circle 12#66ff33 
A_Rango Verde 15: aura GM circle 15#66ff33 
A_Rango Verde 15: aura GM circle 30#66ff33 
A_Rango Azul 3: aura GM circle 3#3366ff 
A_Rango Azul 6: aura GM circle 6#3366ff 
A_Rango Azul 9: aura GM circle 9#3366ff 
A_Rango Azul 12: aura GM circle 12#3366ff 
A_Rango Azul 15: aura GM circle 15#3366ff 
A_Rango Azul 30: aura GM circle 30#3366ff 


****************************************
VISTAS
Darkvision 15: cone arc=120 distance=62,5 r15 
Darkvision 30: cone arc=120 distance=62,5 r30 
Elfo normal: cone arc=120 distance=150 r0,5 
Humano: cone arc=120 distance=60 r0,5 


