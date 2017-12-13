//Check Off Specific Todos by Licking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type= 'text']").keypress(function(e){
	if(event.which === 13){
		//grabbing input
	var entryText = $(this).val();
	$(this).val("");
	//create a new li and add ul
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + entryText + "</li>")
	}
});

$(".fa-superpowers").click(function(){
	$("input[type= 'text']").fadeToggle();
});