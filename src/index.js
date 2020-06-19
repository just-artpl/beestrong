var $ = require('jquery')
import 'popper.js'
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'
import './styles/main.scss'

$(document).ready(function(){
    function isValid(){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('input[name="email"]').val()) == false){
            console.log('email bad');
            return false;
        }
        if($('input[name="name"]').val().length<=2){
            console.log('name bad')
            return false;
        }
        if($('textarea[name="message"]').val().length<=10){
            console.log('message bad');
            return false;
        }
        return true;
    }

    function sendData(){
        $.post({
            type: "POST",
            url: "send.php",
            data: {
                name: $('input[name="name"]').val(),
                email: $('input[name="email"]').val(),
                message: $('textarea[name="message"]').val()
            }
        }).done(function(data){
            if(data == 'ok'){
                $('#response').html('<div class="alert alert-success">Wiadomość wysłana!</div>');
            }else{
                $('#response').html('<div class="alert alert-danger">Wystąpił problem z wysłaniem wiadomości!</div>');    
            }
        }).fail(function(){
            $('#response').html('<div class="alert alert-danger">Wystąpił problem z wysłaniem wiadomości!</div>');
        });
    }

    $('#nav-beestrong').click(function(){
        $('html, body').animate({
            scrollTop: $('#beestrong').offset().top - $('.navbar').outerHeight(true)
        }, 800);
    });
    $('#nav-pierzga').click(function(){
        $('html, body').animate({
            scrollTop: $('#pierzga').offset().top - $('.navbar').outerHeight(true)
        }, 800);
    });
    $('#nav-pylek').click(function(){
        $('html, body').animate({
            scrollTop: $('#pylek').offset().top - $('.navbar').outerHeight(true)
        }, 800);
    });
    $('#nav-kontakt').click(function(){
        $('html, body').animate({
            scrollTop: $('#kontakt').offset().top - $('.navbar').outerHeight(true)
        }, 800);
    });

    $('#contact-button').click(function(){
        if(isValid()){
            sendData();
        }else{
            $('#response').html('<div class="alert alert-danger">Wypełnij formularz poprawnie!</div>');
        }
        $('#response-modal').modal('show');
    });
});