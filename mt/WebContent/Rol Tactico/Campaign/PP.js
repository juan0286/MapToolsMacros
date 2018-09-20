[h:status = input(
"PPChange|0|Numero de puntos de poder",
"dmgOrHealing|Gasta,Recupera|pierde o recupera??|RADIO|SELECT=0")]
[h:abort(status)]
 
[if(dmgOrHealing == 0),CODE:
{
    [h:PP = PP - PPChange]
    [h:bar.PP = PP / MaxPP]
    [r:token.name] gasta [r:PPChange] Puntos de poder.
};
{
    [h:diff = MaxPP - PP]
    [h:PP = min(PP+PPChange, MaxPP)]
    [h:bar.PP = PP / MaxPP]
    [r:token.name] recupera  [r:min(diff,PPChange)] puntos de poder. 
};]