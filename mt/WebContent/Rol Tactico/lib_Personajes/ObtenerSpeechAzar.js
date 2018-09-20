<!-- ObtenerSpeechAzar -->
[h:arr=getSpeechNames()]
[h:co=listCount(arr)]
[h:abort(co)]
[h: dado = "1d"+co]
[h:key=listGet(arr,eval(dado)-1)]
[r:getSpeech(key)]