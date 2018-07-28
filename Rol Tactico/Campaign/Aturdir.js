[h:status = input(
"asaltosAturdido|0|Numero de asaltos",
"tipoAturdi|Aturdir,Sin poder Parar,Obligado a parar|Que tipo e aturdimiento?|RADIO|SELECT=0")]
[h:abort(status)]
[h:setProperty("Aturdimiento", asaltosAturdido)]
[h,switch(tipoAturdi),code:
case "0": {
  [h:setState("Aturdido", 1)]
};
case "1": {
  [h:setState("Sin Poder parar", 1)]
};
case "2": {
  [h:setState("Aturdido y Sin Poder parar", 1)]
};
default: {
  [h:setState("Obligado a parar", 1)];
}]