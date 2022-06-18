const URL = 'https://script.google.com/macros/s/AKfycbyjR1hxReqBWPN8H7wqrxg14kEfGjdXBGFXgQJ7uoGx6OSZy3o_1lR8cp223UO2p1Ly/exec';

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
					<th scope="row">${n}</th>
					<td>${man.gameName}</td>
					<td>${man.discount}%off</td>
					<td>${man.platformType}</td>
					<td>${man.enddate}</td>
					<td>NT$${man.nowprice}</td>
					<td>NT$${man.originalprice}</td>
					<td>NT$${man.lowestprice}</td>
					<td>${man.evaluation}%好評</td>
					<td>${man.experience}</td>
				</tr>`;
	return html;
}