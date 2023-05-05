var node = [],
	nodeHistory = [];

function append(parent, html){
	var el = $(html);
	parent.append(el);
	return el;
}

function tW(array){
	var ul = append($("#tVx_Block0"), '<ul class="animated slideInDown"></ul>');
	var pagination = [$(".pagination>ul"),$(".scrollbar>ul")];
	node[0] = array;
	for(var i = 0; i < array.length; i++){
		var thisArray = array[i];
		var li = append(ul, "<li></li>");
		li.text(thisArray.name);
	}
	var page = [append(pagination[0], '<li class="animated slideInLeft page0 displaying">#</li>'),
				append(pagination[1], '<li class="animated slideInLeft page0 displaying">#</li>')];
	$(".scrollbar").animate({"opacity":1}, "slow");
}

function tW_add(id, idParent){
	if(idParent <= 1){
		$("#tVx_Block"+(idParent+1)).html("");
		var ul = append($("#tVx_Block"+(idParent+1)), '<ul class="animated slideInDown"></ul>');
		var pagination = [$(".pagination>ul"),$(".scrollbar>ul")];
		node[idParent+1] = node[idParent][id].child;
		for(var i = 0; i < node[idParent+1].length; i++){
			var thisArray = node[idParent+1][i];
			var li = append(ul, "<li></li>");
			li.text(thisArray.name);
		}
		var page = [append(pagination[0], '<li class="animated slideInLeft page'+(idParent+1)+' displaying">'+(idParent+1)+'</li>'),
					append(pagination[1], '<li class="animated slideInLeft page'+(idParent+1)+' displaying">'+(idParent+1)+'</li>')];
	}
	else{
		$(".tVx_View").animate({"left":(-((idParent-1)*300))}, 280);
		var div = append($(".tVx_View"), '<div class="tVx_Block" id="tVx_Block'+(idParent+1)+'"></div>');
		var ul = append(div,'<ul class="animated slideInDown"></ul>');
		var pagination = [$(".pagination>ul"),$(".scrollbar>ul")];
		node[idParent+1] = node[idParent][id].child;
		for(var i = 0; i < node[idParent+1].length; i++){
			var thisArray = node[idParent+1][i];
			var li = append(ul, "<li></li>");
			li.text(thisArray.name);
		}
		var page = [append(pagination[0], '<li class="animated slideInLeft page'+(idParent+1)+' displaying">'+(idParent+1)+'</li>'),
					append(pagination[1], '<li class="animated slideInLeft page'+(idParent+1)+' displaying">'+(idParent+1)+'</li>')];
	}
	if($(".pagination>ul>li.displaying").length > 3){
		$(".pagination>ul>li.displaying").first().removeClass("displaying");
		$(".scrollbar>ul>li.displaying").first().removeClass("displaying");
	}
	if($(".pagination>ul>li.displaying").length == 1){
		tW_scroll("single");
	} else if($(".pagination>ul>li.displaying").length == 2){
		tW_scroll("double");
	} else if($(".pagination>ul>li.displaying").length == 3){
		tW_scroll("triple");
	}
	var firstScroll = parseInt(($(".scrollbar>ul>li.displaying").first().attr("class")).match(/\d+/g));
	var pos = firstScroll * 60 + 3;
	$(".scrollbar").animate({"left":pos}, 180);
	$(".scrollbar>ul").animate({"left":(pos*-1)}, 180);
}
function tW_clean(id, idParent){
	if(idParent <= 1){
		$("#tVx_Block"+(idParent+1)).html("");
		var ul = append($("#tVx_Block"+(idParent+1)), '<ul class="animated slideInDown"></ul>');
		var pagination = [$(".pagination>ul"),$(".scrollbar>ul")];
		node[idParent+1] = undefined;
		for(var i = 0; i < node[idParent+1].length; i++){
			var thisArray = node[idParent+1][i];
			var li = append(ul, "<li></li>");
			li.text(thisArray.name);
		}
		var page = [append(pagination[0], '<li class="animated slideInLeft page'+(idParent+1)+' displaying">'+(idParent+1)+'</li>'),
					append(pagination[1], '<li class="animated slideInLeft page'+(idParent+1)+' displaying">'+(idParent+1)+'</li>')];
	}
	else{
		$(".tVx_View").animate({"left":(-((idParent-1)*300))}, 280);
		var div = append($(".tVx_View"), '<div class="tVx_Block" id="tVx_Block'+(idParent+1)+'"></div>');
		var ul = append(div,'<ul class="animated slideInDown"></ul>');
		var pagination = [$(".pagination>ul"),$(".scrollbar>ul")];
		node[idParent+1] = node[idParent][id].child;
		for(var i = 0; i < node[idParent+1].length; i++){
			var thisArray = node[idParent+1][i];
			var li = append(ul, "<li></li>");
			li.text(thisArray.name);
		}
		var page = [append(pagination[0], '<li class="animated slideInLeft page'+(idParent+1)+' displaying">'+(idParent+1)+'</li>'),
					append(pagination[1], '<li class="animated slideInLeft page'+(idParent+1)+' displaying">'+(idParent+1)+'</li>')];
	}
}
function tW_scroll(type){
	if(type == "single"){
		$(".scrollbar").animate({"width":63}, 300);
	} else if(type == "double"){
		$(".scrollbar").animate({"width":123}, 300);
	} else if(type == "triple"){
		$(".scrollbar").animate({"width":183}, 300);
	}
	
}
$(document).ready(function(){

	tW(a);

	$(document).on('click',".tVx_Block>ul>li:not(.selected)",function(){
		var currentBlockId = parseInt(($(this).closest('div').attr('id')).match(/\d+/g));
		var currentNodeId = $("#tVx_Block"+currentBlockId+">ul>li").index(this);
		if(!(node[currentBlockId][currentNodeId].child.length == 0)){
			if($("#tVx_Block"+currentBlockId+">ul").children('li').hasClass('selected')){
				// $("#tVx_Block"+currentBlockId+">ul>li.selected").removeClass("selected");
				// $(this).addClass("selected");
				// tW_clean(currentNodeId, currentBlockId);
			}else{
				$(this).addClass("selected");
				tW_add(currentNodeId, currentBlockId);
			}
		}
	});

	$(document).on('click',".pagination>ul>li",function(){
		var index = $(".pagination>ul>li").index(this);
		var pos = index * 60 + 3;
		if(($(".pagination>ul>li").length) - index == 1){
			tW_scroll("single");
		} else if(($(".pagination>ul>li").length) - index == 2){
			tW_scroll("double");
		} else if(($(".pagination>ul>li").length) - index >= 3){
			tW_scroll("triple");
		}
		$(".tVx_View").animate({"left":(-((index)*300))}, 280);
		$(".scrollbar").animate({"left":pos}, 280);
		$(".scrollbar>ul").animate({"left":(pos*-1)}, 280);
	});
	
});