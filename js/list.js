const URL = 'https://script.google.com/macros/s/AKfycbwlh0WHnw0NuLJl0p8iI05ignH71FszuFljZ14l7A8Fot3PjIm_urZX1e28S2i9g00i/exec';

$(document).ready(function() {
	loadData();
});

function loadData(){
	let params = {};
	params.method = 'read1';

	$.post(URL, params, function(data){
		if(data.result == 'sus'){
			let userData = data.data;
			console.log(userData)
			for(let i=0;i<userData.length;i++){
				let url2 = JSON.stringify(userData[i].enddate);
				let ary = url2.split('T');
				let sid = ary[0];
				sid = sid.split('"');
				userData[i].enddate = sid[1];
				if(userData[i].enddate == undefined){
					userData[i].enddate = "無";
				}
				if(userData[i].date == undefined){
					userData[i].date = "無";
				}
				let content = oneRow(i+1, userData[i]);
				$('tbody').append(content);
			}
		}else{

		}
	}).fail(function(data){

	});
}


function oneRow(n, man){
	let html = `
				<tr>
					<th class="ms-5" scope="row">${n}</th>
					<td>${man.gameName}</td>
					<td>${man.discount}%off</td>
					<td>${man.platformType}</td>
				
					<td class="th-time">${man.enddate}</td>
					<td>NT$${man.nowprice}</td>
					<td>NT$${man.originalprice}</td>
					<td>NT$${man.lowestprice}</td>
					<td>${man.evaluation}%好評</td>
					<td class="me-5">${man.experience}</td>
				</tr>`;
					// <td class="th-time">${man.date}</td>
	return html;
}


