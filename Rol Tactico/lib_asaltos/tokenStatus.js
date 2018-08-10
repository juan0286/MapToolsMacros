<!-- tokenStatus -->
[h: token = arg(0)]
[h: color = getProperty("color",token)]
[r: vesti = getProperty('Vestimenta',token)]
[h: a = json.get(getAccion(token),"accion")]]
[h: re = "
<tr>
		<th class='celda' colspan='5' style='backgound-color:[r: color];'>				
				<span style='text-decoration:none;'>Neo</span></a>
			</th>
		</tr>
		<tr>
			<td class='celda' width='40%'>				
					<span>Rango</span>
			</td>
			<td class='celda' width='15%'>				
					<span>1</span>
			</td>
			<td class='celda' width='15%'>				
					<span>2</span>
			</td>
			<td class='celda' width='15%'>				
					<span>3</span>
			</td>
			<td class='celda' width='15%'>				
					<span>4</span>
			</td>
		</tr>
		<tr>
			<td class='celda' width='40%'>				
					<span>Metros</span>
			</td>
			<td class='celda' width='15%'>				
					<span>18</span>
			</td>
			<td class='celda' width='15%'>				
					<span>23</span>
			</td>
			<td class='celda' width='15%'>				
					<span>28</span>
			</td>
			<td class='celda' width='15%'>				
					<span> >28</span>
			</td>
		</tr>
		<tr>
			<th class='celda' width='40%' colspan='2'>						
					<span>Accion</span>
			</th>
			<td class='celda' width='60%' colspan='3'>
					<span>[r: AccionToString(a,0)]</span>
			</td>
		</tr>
		<tr>
			<th class='celda' width='40%' colspan='2'>						
					<span>Vestimenta</span>
			</th>
			<td class='celda' width='60%' colspan='3'>
					<span>[r: vesti]</span>
			</td>
		</tr>"]
[h: macro.return = re]