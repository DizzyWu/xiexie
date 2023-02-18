//侧边栏
	$("#nav-over").bind("click",function(){
	$("#nav-over").css("display","none");
	/*$("#warmp,footer,header,.float-box").removeClass("openMenu");*/
	$("#nav").removeClass("openNav");
	$("#ks-nav").removeClass("openNav");	
})
$("#nav-over").bind("touchmove touch",function(e){e.preventDefault()},false);//阴止默认事件
//栏目导航
function myNav(){
	if($("#nav").hasClass("openNav")){
		$("#nav-over,#colse").css("display","none"); 
		$("#nav").removeClass("openNav");
		/*$("#warmp,footer,header,.float-box").removeClass("openMenu");*/
	}else{
		$("#nav-over").css("display","block");
		$("#nav").addClass("openNav");
		/*$("#warmp,footer,header,.float-box").addClass("openMenu");*/
				
		$("#scrollerBox").height($(window).height() - $("#nav h3").outerHeight());
		//new IScroll('#scrollerBox',{preventDefault:false});		
		$(window).resize(function(){
			$("#scrollerBox").height($(window).height() - $("#nav h3").outerHeight());
		})
	}	
}
$(".burger_menu,.Mdh").bind("click",myNav);

$(".burger_menu").click(function(){
			    $(this).toggleClass("toggle_burger");
})
$(".Mdh").click(function(){
			    $(".burger_menu").toggleClass("toggle_burger");
})
$(".burger_menu,.Mdh").click(function(){
			    $(".warmp,.menus,.head-warp").toggleClass("left");
})
$("#nav-over").click(function(){
			    $(".burger_menu").removeClass("toggle_burger");
})
$("#nav-over").click(function(){
			    $(".warmp,.menus,.head-warp").removeClass("left");
})

document.body.addEventListener('touchstart', function () {}); 

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
 
	
	 
 