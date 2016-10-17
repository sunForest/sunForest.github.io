$(document).ready(function(e){
    var hash = window.location.hash;
    displaySection(hash);
});

$(window).on('hashchange', function(e){
    e.preventDefault();
    var hash = window.location.hash;
    displaySection(hash);
});

function displaySection(hash) {
    var ids = ['#works', '#skills', '#writing', '#about'];
    if (ids.indexOf(hash) < 0) {
        //unknown hash
        hash = '';
    }
    console.log(hash);
    if (hash) {
        var sections = $("section");
        sections.each(function(index){
            $(this).removeClass("active");
        });
        $("section" + hash).addClass("active");
    }
}