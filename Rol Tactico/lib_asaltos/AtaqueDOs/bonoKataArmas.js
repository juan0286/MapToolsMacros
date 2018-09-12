[h: armaKata = arg(0)]
[h: arm = arg(1)]

[h: danios = table("ataqueKarate",150)]
[h: danioStrProp = decode(json.get(danios,arm))]
[h: pvMaxKarate = getStrPrp(danioStrProp,"pv")]

[h: daniosKata = table(armaKata,150)]
[h: danioStrProp = decode(json.get(danios,arm))]
[h: pvMaxKata = getStrPrp(danioStrProp,"pv")]

[h: pv = min(0,pvMaxKata-pvMaxKarate)]
[h: macro.return = pv]
