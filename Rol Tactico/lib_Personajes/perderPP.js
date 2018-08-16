<!-- perderPP -->
[h: tokName = arg(0)]
[h: PPChange = arg(1)]
[h: MaxPP = getProperty('MaxPP',tokName) ]
[r: PP = getBar("PP",tokName)]
[h: PP = PP - PPChange]
[h: setBar("PP",PP / MaxPP, tokName) ]
[r: tokName] gasta [r:PPChange] Puntos de poder.
