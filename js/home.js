

//搜索框展示窗
var personData=[
{"pic":"person1","name":"媛媛","star":3,"view":57474,"order":238,"review":125},
{"pic":"person1","name":"媛媛","star":3,"view":57474,"order":238,"review":125},
{"pic":"person1","name":"媛媛","star":3,"view":57474,"order":238,"review":125},
{"pic":"person1","name":"媛媛","star":3,"view":57474,"order":238,"review":125}
];

var hot=$('.sl_details');
var person="";
$.each(personData, function(index) {
	person+='<ul class="hot"><li>'+personData[index].pic
			+'</li><li>'+personData[index].name +'<br />'+personData[index].star
			+'</li><li>'+personData[index].view +'<br />浏览量 </li><li>'
			+personData[index].order +'<br />预定量 </li><li>'
			+personData[index].review +'<br />评论 </li><span class="more">更多</span></ul>';
});
hot.append(person);
//搜索框展示窗
//婚礼团队
$('#wedd_team').hover(function(e){
	$('.teams:not(:animated)').slideDown();
},function(){
	$('.teams').slideUp();
});

$('.teams').hover(function(e){
	$('.teams:animated').show();
},function(){
	$(this).slideUp();
});
//婚礼团队
//搜索框选项卡
$('#search').on('focus',function(){
	$('.selectTab').fadeIn();
});
$('#search').on('focusout',function(){
	$('.selectTab').fadeOut();
})
//----------------搜索框选项卡-------------------//


var stylepic=[
{"img":"wed_case_00","title":"海滨丛林","popular":15328},
{"img":"wed_case_01","title":"海滨丛林2","popular":15328},
{"img":"wed_case_02","title":"海滨丛林","popular":15428},
{"img":"wed_case_03","title":"海滨丛林","popular":15328},
{"img":"wed_case_04","title":"海滨丛林","popular":15448},
{"img":"wed_case_05","title":"海滨丛林","popular":15328},
{"img":"wed_case_06","title":"海滨丛林","popular":16728},
{"img":"wed_case_07","title":"海滨丛林","popular":15328}
];
$.each(stylepic, function(index) {
	
	$(".wc-img").eq(index).attr('src','../img/'+stylepic[index].img+'.jpg');
	$('.head').eq(index).text(stylepic[index].title);
	$('.popular').eq(index).text(stylepic[index].popular);
});

//-----------------婚礼团队hover----------------------------------//
//婚礼团队hover
$('.ts_items').hover(function(){
		$('.mask').show().eq($(this).index()).addClass("animated slideOutRight");
	},function(){
		$('.mask').show().removeClass('animated slideOutRight').addClass("animated slideInRight").eq($(this).index()).hide()
})


	$(window).on('scroll',function(){
		if($(window).scrollTop()>=2600){
		$('.main-bg').css("background","url(../img/main_bg2.jpg) no-repeat center center")
	}else{
		$('.main-bg').css("background","url(../img/main_bg.jpg) no-repeat center center")
	}
	})

	
	




























