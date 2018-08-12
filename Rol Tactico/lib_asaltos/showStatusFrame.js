<!-- showStatusFrame-->
[h: names = getPCNames()]
[ frame("statusFrame"):{
  <html>
    <head>
     <link rel='stylesheet' type='text/css' href='myCSS@[r: getMacroLocation()]'></link>
    <title>Estado de Jugadores</title>
    </head>
    <body>
  <table width='100%' heigth='100%' cellpadding='0' cellspacing='3' >
  [r,foreach(name, names,''): tokenStatus(name) ]
  </table>
</body>
</html>
}]