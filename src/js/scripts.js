global.jQuery = require('jquery');
bootstrap = require('bootstrap');
mustache = require('mustache');

jQuery(document).ready(function() {
    console.log("first step done!")
    var jqxhr = jQuery.getJSON('data.json', function() {

    }).done(function(data) {
        console.log("activated");
        var template = jQuery('#template').html();
        var showTemplate = mustache.render(template, data);
        jQuery('#gallery').html(showTemplate);
    });
});