<!-- listFilter -->
[h:lista = arg(0) ]
[h: string = arg(1) ] 

[listResponse = ""]
[h:foreach(e,lista),code:{
  [if,(contains(e,string)): listAppend(listResponse, e) ]
}]
[r: listResponse]