//屏幕太小时提示
$(function() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIE6 = sUserAgent.match(/msie 6.0/i) == "msie 6.0";
	var bIsIE7 = sUserAgent.match(/msie 7.0/i) == "msie 7.0";
	var bIsIE8 = sUserAgent.match(/msie 8.0/i) == "msie 8.0";
	var bIsIE9 = sUserAgent.match(/msie 9.0/i) == "msie 9.0";
	var flag = true;
	if(bIsIE6 || bIsIE7 || bIsIE8) {
		flag = false;
//		window.location.href = '../iePrompt/iePrompt.html';
	}
	var viewW = $(window).width();
	var viewH = $(window).height();
	var $showDiv = $('<div id="showDiv" style="position:fixed;width:100%;height:100%;top:0;left:0;z-index:10000;text-align:center;background:#000;color:#fff;font-size:35px;line-height:50px;padding-top:50px;display:none;">屏幕太小什么也没有</div>');
	showDiv();

	$(window).resize(function() {
		viewW = $(window).width();
		viewH = $(window).height();
		showDiv()

	});

	function showDiv() {
		// if(viewW <= 310 || viewH<=320 ){
		if(viewW <= 315) {
			$('#showDiv').remove();
			$('body').append($showDiv);
			$('#showDiv').show();

		} else {
			$('#showDiv').hide();
		}
	}

//	$(document).click(function() {
//		if(!$(".nav").hasClass("hide")) {
//			$(".nav").addClass("hide");
//			$(".nav").animate({
//				"right": "-134px"
//			});
//			$(".burger_menu").removeClass("toggle_burger");
//		}
//	});

});

//回到顶部按钮

// mainmenuScroll();
$(function() {
	$(window).scroll(function() {
		if($(window).scrollTop() > 100) {
			$(".sroll_top").fadeIn();
		} else {
			$(".sroll_top").fadeOut();
		}
	});
	$(".sroll_top").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});

	//导航悬浮
	var topNav = function() {
		var height = $('.head-warp').height();
		// var scrollHeight = $('body').scrollTop();
		//完美的获取scrollTop 赋值短语 
		var scrollHeight = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

		if(scrollHeight > height) {
			$('.menus').addClass('fixedbg');

		} else {
			$('.menus').removeClass('fixedbg');
		}

	};
	topNav();
	$(window).scroll(function() {
		topNav();
	});

});

//sub-nav-tech
$(function() {
	$("#tech, .sub-nav-tech").mouseenter(function() {
		$(".sub-nav-tech").stop().slideDown("show");
	})
	$("#tech, .sub-nav-tech").mouseleave(function() {
		$(".sub-nav-tech").stop().slideUp("show");
	})
}) 

//页面加载效果
//Pace.on("done", function() {
//	$("#myloader").fadeOut(800);
//});

function JTrim(s)
{
    return s.replace(/(^\s*)|(\s*$)/g, "");
}

function enterSearch(event){
	if (event.keyCode == 13)
	{
		searchPro();
		return false;
	}
}
//产品搜索
function searchPro()
{
	var keys=JTrim(document.getElementById("keywords").value);
	if(keys==undefined || keys=="" || keys==null || keys=="搜索")
	{
		layer.msg("请输入关键词");
		return false;
	}
	else
	{
		location.href="search.html?keywords="+keys+"";
		window.event.returnValue = false;
	}
}
function searchPro2()
{
	var keys=JTrim(document.getElementById("keywords2").value);
	if(keys==undefined || keys=="" || keys==null || keys=="搜索")
	{
		layer.msg("请输入关键词");
		return false;
	}
	else
	{
		location.href="product.html?keywords="+keys+"";
		window.event.returnValue = false;
	}
}


/****************渐显效果******************/
if(!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 200,
		mobile: true,
		live: true
	});
	wow.init();
};
//百度分享
window._bd_share_config = {
	"common": {
		"bdSnsKey": {},
		"bdText": "",
		"bdMini": "2",
		"bdMiniList": false,
		"bdPic": "",
		"bdStyle": "0",
		"bdSize": "24"
	},
	"share": {}
};
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];


/****************预约******************/
function checkform() {
	var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
	var name = $("#name").val();
	var email = $("#email").val();
	var message = $("#content").val();
	var tel = $("#tel").val();
	if(name == "" || email == "" || tel == "") {
		layer.msg("姓名、电话、邮箱必填!");
		return false;
	}else if(tel != "" && !reg.test(tel)) {
		layer.msg("电话格式有误，请输入正确的手机号!");
		$("#tel").focus();
		return false;
	} else if(email != "" && !re.test(email)) {
		layer.msg("邮箱格式有误!");
		$("#email").focus();
		return false;
	} else if(message.length >= 500) {
		layer.msg("留言内容不支持html");
		$("#content").focus();
		return false;
	} else {
		$.ajax({
			type: "post",
			url: "checkFeed.asp",
			data: {
				"name": name,
				"email": email,
				"tel": tel,
				"content": message
			},
			success: function(data) {
				if(data == -2) {
					layer.msg("请不要从外部提交!");
					return false;
				}  else if(data == 0) {
					layer.msg("提交成功!");
					$("#name").val("");					
					$("#content").val("");
					$("#email").val("");
					$("#tel").val("");

				} else {
					layer.msg(data);
					return false;
				}
			}
		});
		return false;
	}
}