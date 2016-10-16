$(document).ready(function(){
    var hash = window.location.hash;
    if (hash) {
        var sections = $("section");
        sections.each(function(index){
                $(this).removeClass("active");
            }
        );
        $("section" + hash).addClass("active");
    }
});

$("nav li").on("click", function(){
	var index = parseFloat($(this).data("index"));
	var sections = $("section");
	sections.each(function(index){
			$(this).removeClass("active");
		}
	);
	$(sections[index]).show(100, function(){
		$(sections[index]).addClass("active");
	});
});