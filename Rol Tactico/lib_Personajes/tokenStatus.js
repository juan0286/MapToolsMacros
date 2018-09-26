<!-- tokenStatus -->
[h: token = arg(0)]
[h,if(token == 'Neo'): col_sec ='#6699ff'; col_sec ='#66ff33' ]
[h: col = getProperty("color",token)]
[h: vesti = getProperty('Vestimenta',token)]
me[h: mov = getProperty('Movement',token)]
[h: a = json.get(getAccion(token),"accion")]
<tr>
		<th class='celda' colspan='5' style='background-color:[r: col]; height: 20px;'>				
				<span style='text-decoration:none; color:white; font-size: 15px;'>[r: Token]</span></a>
			</th>
		</tr>
		<tr style='height:15px;'>
			<td class='celda' style='background-color:[r:col_sec];' width='40%'>				
					<span>Rango</span>
			</td>
			<td class='celda' style='background-color:[r:col_sec];' width='15%'>				
					<span>1</span>
			</td>
			<td class='celda' title="-25 Sigilo, -2 P.A." style='background-color:[r:col_sec];' width='15%'>				
					<span>2</span>
			</td>
			<td class='celda' title="-50 Sigilo, -3 P.A." style='background-color:[r:col_sec];' width='15%'>				
					<span>3</span>
			</td>
			<td class='celda' style='background-color:[r:col_sec];' width='15%'>				
					<span>4</span>
			</td>
		</tr>
		<tr style='height:15px;'>
			<td class='celda' style='background-color:[r:col_sec];' width='40%'>				
					<span>Metros</span>
			</td>
			<td class='celda' style='background-color:[r:col_sec];' width='15%'>				
					<span>[r: mov]</span>
			</td>
			<td class='celda' style='background-color:[r:col_sec];' width='15%'>				
					<span>[r: round(mov *1.5)]</span>			
			</td>
			<td class='celda' style='background-color:[r:col_sec];' width='15%'>				
					<span>[r: mov2 = mov *2]</span>
			</td>
			<td class='celda' style='background-color:[r:col_sec];' width='15%'>				
					<span>[r: ">"+string(mov2)]</span>
			</td>
		</tr>
		<tr>
			<th class='celda' width='40%' colspan='2' style='background-color:[r: AccionToString(a,1)]; height: 20px' >						
					<span>Accion</span>
			</th>
			<td class='celda' width='60%' colspan='3' style='background-color:[r: AccionToString(a,1)]; height: 20px' >
					<span>[r: AccionToString(a,0)]</span>
			</td>
		</tr>
		<tr>
			<th class='celda' width='40%' colspan='2' style='background-color:[r:col_sec];'>						
					<span>Vestimenta</span>
			</th>
			<td class='celda' width='60%' colspan='3' style='background-color:[r:col_sec];'>
					<span>[r: vesti]</span>
			</td>
		</tr>