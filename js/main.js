const URL = 'https://script.google.com/macros/s/AKfycbxhOH7DlOXKG6MbUwLcqvdv56V9HrmzYbslnLa6TRcUJM6oFl5YsVLUxzLxSbxuNYbh/exec';

$(document).ready(function() {
	init();
});

// function init() {
// 	$('.btn-send').click(function(e){
// 		postData();
// 	});
// }

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




let Modal1, sysModal, errorAry;

function init(){
    Modal1 = new bootstrap.Modal('#Modal1');
    sysModal = new bootstrap.Modal('#sysModal');
    $('.btn-launch').click(function(event){
        if(	$(this).attr('static') == ''){
            Modal1 = new bootstrap.Modal('#Modal1' ,{backdrop:'static'});
        }else{
            Modal1 = new bootstrap.Modal('#Modal1');
        }
        let mType = ($(this).attr('mType'))?$(this).attr('mType'):0;
        let mBgc = ($(this).attr('mBgc'))?$(this).attr('mBgc'):'none';
        let mTitle = ($(this).attr('mTitle'))?$(this).attr('mTitle'):'none';
        let isCenter = ($(this).attr('centered')=='')?1 : 0;
		if($('input[name=originalprice]').val() == ""){
			mType=6;
		}
		if($('input[name=nowprice]').val() == ""){
			mType=5;
        }
		if($('input[name=enddate]').val() == ""){
			mType=4;		
        }		
		if($('select[name=platformType]').val() == undefined){
			mType=3;
        }
		if($('input[name=discount]').val() == ""){
			mType=2;
		}	

        if($('input[name=gameName]').val() == ""){
			mType = 1 ;
        }

        launchModal1(mType, mBgc, mTitle, 1);
    });
}
function launchModal1(mType, mBgc, mTitle, isCenter){
    $('#Modal1 .modal-dialog').removeClass('modal-dialog-centered');
    $('#Modal1 .modal-dialog').removeClass('modal-lg');
    $('#Modal1 .modal-dialog').removeClass('modal-fullscreen');
    $('#Modal1 .modal-content').removeClass('modal-bgc1');
    $('#Modal1 .modal-content').removeClass('modal-bgc0');
    $('#Modal1 .modal-header').removeClass('header');
    $('#Modal1 .modal-header').removeClass('header6');
    $('#Modal1 .modal-header .text').html('');
    $('#Modal1 .modal-dialog').removeClass('modal-lg');
    $('#Modal1 .modal-body').removeClass('hz450');
    $('#Modal1 .modal-body').html("");
    $('#Modal1 .modal-header').show();
    $('#Modal1 .modal-footer').show();
    $('#Modal1 .btn-close').show();
    $('#Modal1 .btn-close2').show();
    $('#Modal1 .btn-option').hide();
    $('#Modal1 .btn-option').html('確定');
    switch(mType){
		case 1:
			$('#Modal1 .modal-header').addClass('header');
			$('#Modal1 .modal-body').html(`
			遊戲名稱沒填
            `);
			$('#Modal1 .modal-header').addClass('header');
            $('#Modal1 .btn-option').show();
            $('#Modal1 .btn-option').html('確認');
			$('#Modal1 .btn-close2').hide();
			$('#Modal1 .btn-option').click(function(event){
                Modal1.hide();
            });
			break;
		case 2:
			$('#Modal1 .modal-body ').html(`
			折扣數沒填
            `);
			$('#Modal1 .modal-header').addClass('header');
            $('#Modal1 .btn-option').show();
            $('#Modal1 .btn-option').html('確認');
			$('#Modal1 .btn-close2').hide();
			$('#Modal1 .btn-option').click(function(event){
                Modal1.hide();
            });
			break;
		case 3:
			$('#Modal1 .modal-body ').html(`
			請選擇遊戲折扣平台
            `);
			$('#Modal1 .modal-header').addClass('header');
            $('#Modal1 .btn-option').show();
            $('#Modal1 .btn-option').html('確認');
			$('#Modal1 .btn-close2').hide();
			$('#Modal1 .btn-option').click(function(event){
                Modal1.hide();
            });
			break;
		case 4:
			$('#Modal1 .modal-body').html(`
			結束日期沒填
            `);
			$('#Modal1 .modal-header').addClass('header');
            $('#Modal1 .btn-option').show();
            $('#Modal1 .btn-option').html('確認');
			$('#Modal1 .btn-close2').hide();
			$('#Modal1 .btn-option').click(function(event){
                Modal1.hide();
            });
			break;
		case 5:
			$('#Modal1 .modal-body ').html(`
			現在價格沒填
            `);
			$('#Modal1 .modal-header').addClass('header');
            $('#Modal1 .btn-option').show();
            $('#Modal1 .btn-option').html('確認');
			$('#Modal1 .btn-close2').hide();
			$('#Modal1 .btn-option').click(function(event){
                Modal1.hide();
            });
			break;	
		case 6:
			$('#Modal1 .modal-body ').html(`
			原始價格沒填
            `);
			$('#Modal1 .modal-header').addClass('header');
            $('#Modal1 .btn-option').show();
            $('#Modal1 .btn-option').html('確認');
			$('#Modal1 .btn-close2').hide();
			$('#Modal1 .btn-option').click(function(event){
                Modal1.hide();
            });
			break;					
        case "7":
			$('#Modal1 .modal-body').html(`
				送出成功
            `);
			$('#Modal1 .modal-header').addClass('header');
			$('#Modal1 .btn-option').show();
            $('#Modal1 .btn-option').html('確認');
			$('#Modal1 .btn-close2').hide();
			$('#Modal1 .btn-option').click(function(event){
                Modal1.hide();
            });
			postData();
			break;
            
                                 
    }

    if(mBgc != 'none'){
        $('#Modal1 .modal-content').addClass('modal-bgc'+mBgc)
    }
    if(mTitle != 'none'){
        $('#Modal1 .modal-header .text').html(mTitle);
    }
    if(isCenter == 1){
        $('#Modal1 .modal-dialog').addClass('modal-dialog-centered');
    };
    Modal1.show();
}


