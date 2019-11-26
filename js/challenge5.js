$("img").mouseover(function(){
	$("#image").html($(this).attr('alt'))
	$("#image").css('background-image', 'url(' + ($(this).attr('src')) + ')')
})
$("img").mouseleave(function(){
	$("#image").html("Hover over an image below.")
	$("#image").css('background-image', "")
})

$("img").focus(function(){
	$("#image").html($(this).attr('alt'))
	$("#image").css('background-image', 'url(' + ($(this).attr('src')) + ')')
})
$("img").blur(function(){
	$("#image").html("Hover over an image below.")
	$("#image").css('background-image', "")
})
