$(document).ready(function() {
    
    /**
     * dropdown menu
     */

    // reference
    var dropdown = $('.list-dx.with-dropdown');
    var dropLinks = dropdown.children('a');
    var dropMenu = dropdown.children('.dropdown-menu');
    
    // show / hide dropdown menu
    event.preventDefault();
    dropMenu.not(actualMenu).hide();

    dropLinks.clik(function() {  
        var actualMenu = $(this).next('.dropdown-menu');      
        // show / hide menu
        actualMenu.toggle();
    });
});