<!-- postDanios -->
[h: data = arg(0)]
[h, if(getStrProp(data,"aplicarDanio")!=""),code:{  
  [act_GolpeActualAtack(tokenAtk)]
  [act_GolpeActualDefense(target)]
}]
[r, if(getStrProp(data,"aplicarDanio")!=""): AplicarDanios(data) ; CalculoDanio(data)]