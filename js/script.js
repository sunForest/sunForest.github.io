$("nav li").on("click", function(){
	var index = parseFloat($(this).data("index"));
	var sections = $("section");
	sections.each(function(index){
			$(this).removeClass("active");
		}
	);
	$(sections[index]).show(300, function(){
		$(sections[index]).addClass("active");
	});
});