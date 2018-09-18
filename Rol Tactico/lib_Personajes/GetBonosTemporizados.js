<!-- GetBonosTemporizados -->
[h: tok = arg(0)]
[h: key = arg(1)]

[h: suma = 0]
[h: switchToken(tok)]

[h, foreach(t,Temporizadores),code:
{
  [ key_i = number(indexKeyStrProp(t, roll.count))]
  [ bonif = indexValueStrProp(t, roll.count)]
  [ if(key_i == key): suma = suma + number(bonif)]  
}]  

[h: macro.return = suma ]