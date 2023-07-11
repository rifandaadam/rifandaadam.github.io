/*
Name : Main.JS Portofolio
Author : Adam Muhammad
Date : 11 Juli 2023
*/
document.addEventListener('contextmenu', event => event.preventDefault());

const domain = 'https://rifandaadam.github.io/';

function loadContent(url) {
  $.ajax({
    type: 'GET',
    url: domain + url,
    cache: false,
    success: function(result) {
      document.getElementById('content').innerHTML = result;
    },
    error: function(xhr, status, error) {
      console.error('Failed to load content for URL:', url);
      console.error('Error:', error);
      document.getElementById('content').innerHTML = 'Failed to load content.';
    }
  });
}

$(document).ready(function() {
  const navigationLinks = ['home', 'project', 'about', 'skill', 'contact'];

  navigationLinks.forEach(function(link) {
    $(`a.${link}`).click(function(event) {
      event.preventDefault();
      loadContent(`${link}.html`);
    });
  });

  // Load home.html by default
  loadContent('home.html');
});