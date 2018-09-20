[h: tok = getInitiativeToken() ]
[h: s = '{
    "name": "' + getName() +",
    "dis": 1,
}']
[h: setProperty("Seguimiento",s,tok)]
{getName()} ahora esta siguiendo a {getName(tok)}