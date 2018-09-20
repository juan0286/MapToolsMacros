<!-- colorText -->
[h: text = arg(0)]
[h: color = arg(1)]
[h: re = "<span style='color: "+ color + "'>" + text + "</span>"]

[h: macro.return = re]