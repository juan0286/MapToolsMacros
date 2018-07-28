[h: arm = (arg(0) / 5 )+1]
[h: arm  = round(arm)]
[h,switch(arm):
case 1:  macro.return = "SA";
case 2:  macro.return = "C";
case 3:  macro.return = "CE";
case 4:  macro.return = "CM";
default:  macro.return = "CO"
]