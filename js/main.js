const URL = 'https://script.google.com/macros/s/AKfycbyjR1hxReqBWPN8H7wqrxg14kEfGjdXBGFXgQJ7uoGx6OSZy3o_1lR8cp223UO2p1Ly/exec';

$(document).ready(function() {
	init();
});

function init() {
	$('.btn-send').click(function(e){
		postData();
	});
}

function postData(){
	let params = {};
	params.method = 'write1';
	params.gameName = $('input[name=gameName]').val();
	params.discount = $('input[name=discount]').val();
	params.platformType = $('select[name=platformType]').val();
	params.enddate = $('input[name=enddate]').val();
	params.nowprice = $('input[name=nowprice]').val();
	params.originalprice = $('input[name=originalprice]').val();
	params.lowestprice = $('input[name=lowestprice]').val();
	params.evaluation = $('input[name=evaluation]').val();
	params.experience = $('textarea[name=experience]').val();
	// // radio
	// params.schoolType = $('input[name=schoolType]:checked').val();
	// // select
	// params.platformType = $('select[name=userIdentity]').val();
	// // checkbox
	// let ary = [];
	// $('input[name=userNeed1]:checked').each(function(index, el){
	// 	if($(this).val() == '其他'){
	// 		ary.push($(this).val()+': '+$('input[name=userNeed1-5-text]').val());
	// 	}else{
	// 		ary.push($(this).val());
	// 	}
	// })
	// params.userNeed1 = JSON.stringify(ary);
	// // checkbox
	// let ary2 = $('input[name=userNeed2]:checked').map(function(index, el){
	// 	return $(this).val();
	// }).get();
	// params.userNeed2 = JSON.stringify(ary2);
	// // textarea
	// params.userNeed3 = $('textarea[name=userNeed3]').val();
	// params.userNeed4 = $('textarea[name=userNeed4]').val();


	$.post(URL, params, function(data){
		if(data.result == 'sus'){

		}else{
			alert(data)
		}
	}).fail(function(data){
		alert(data)
	});
}