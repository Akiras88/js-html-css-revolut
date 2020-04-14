$(document).ready(function() {
    
    /**
     * dropdown menu
     */

    // reference
    var dropDown = $('.list-dx .with-dropdown');
    var dropLinks = dropDown.children('a');
    var dropMenu = dropDown.children('.dropdown-menu');
    var chevronDown = $('.fa-chevron-down');
    var chevronUp = $('.fa-chevron-up')
    var language = $('.language-change');

    dropLinks.click(function(event) {   
        event.preventDefault();

        var actualMenu = $(this).next('.dropdown-menu'); 
        
        dropMenu.not(actualMenu).hide();

        // show / hide menu       
        actualMenu.toggle();
    });

    // change chevron
    language.click(function(event) { 
        chevronDown.toggleClass('hide');
        chevronUp.toggleClass('hide');
    });
});