/*
Name : Main.JS Portofolio
Author : Adam Muhammad
Date : 11 Juli 2023
*/
document.addEventListener('contextmenu', event => event.preventDefault());

var domain = "https://rifandaadam.github.io/";
$(document).ready(function() {
    function loadContent(url) {
        $.ajax({
            type: 'GET',
            url: domain + url,
            cache: false,
            success: function(result) {
                $("#content").html(result);
            },
            error: function() {
                $("#content").html("Failed to load content.");
            }
        });
    }

//    $('a.home').click(function(event) {
//        event.preventDefault();
//        loadContent("home.html");
//    });
	
	$('a.project').click(function(event) {
        event.preventDefault();
        loadContent("project.html");
    });

    $('a.about').click(function(event) {
        event.preventDefault();
        loadContent("about.html");
    });

    $('a.skill').click(function(event) {
        event.preventDefault();
        loadContent("skill.html");
    });

    $('a.contact').click(function(event) {
        event.preventDefault();
        loadContent("contact.html");
    });

    // Load home.html by default
    loadContent("home.html");
});
