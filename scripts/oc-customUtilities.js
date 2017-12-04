 
 $( document ).ready(function() {
 /*Removes Onling Banking Login from search page*/
 var windowLoc = window.location.href;
 console.log(windowLoc);
 firstCut = windowLoc.lastIndexOf('/') +1;
 var currentPage = windowLoc.substring(firstCut, windowLoc.length-3);
 console.log(firstCut + "/ " + windowLoc.length + " / " + currentPage);
 if((currentPage == 'search') || (currentPage=='search?q='))
 {
   $('.login-form-holder').hide();
   $('.login-form-holder').remove();
   $('.login-form-holder').addClass('hideLoginForm');
   console.log('should not be visible');
 }
});