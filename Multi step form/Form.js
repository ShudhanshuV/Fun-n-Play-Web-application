$(document).ready(function () {

    $('#next1').click(function () { 
        if ($('.input-required1').val() === "") {
                alert("*All Fields are mandatory*");
            } else {
                $('#first-step').css('display', 'none')
                $('#second-step').css('display', 'block')
            }
    });

    $('#previous1').click(function(){
        $('#first-step').css('display', 'block')
        $('#second-step').css('display', 'none')
    })

    $('#next2').click(function(){
        if ($('.input-required2').val() === "") {
                 alert("*All Fields are mandatory*");
            } else {
                $('#second-step').css('display', 'none')
                $('#third-step').css('display', 'block')
            }
    })

    $('#previous2').click(function(){
        $('#second-step').css('display', 'block')
        $("#third-step").css('display', 'none')
    })

    $("#submit").click(function() {
        if ($('.input-required3').val() === "") {
            alert("*All Fields are mandatory*");
        } else {
            $('#third-step').css('display', 'none')
            $('#SuccessContainer').css('display', 'block')
        }
    });

    var firstName = document.getElementById('first-name')
    firstName.addEventListener('input', function(e){
        var nameRegex = /^[a-z]{2,15}$/gi;
        var currentValue = e.target.value
        var ifValid = nameRegex.test(currentValue)
        if (ifValid){
            $('#first-name-error').css('display', 'none')
        } else{
            $('#first-name-error').css('display', 'block')
        }
    })

    var email = document.getElementById('email-text')
    email.addEventListener('input', function(b){
        var emailRegex = /^[\w]+@gmail\.com$/gi;
        var currentValue = b.target.value
        var ifValid = emailRegex.test(currentValue)
        if(ifValid){
            $('#email-error').css('display', 'none')
        } else{
            $('#email-error').css('display', 'block')
        }
    })



    var phoneNo = document.getElementById('contact-text')
    phoneNo.addEventListener('input', function(a){
        var phoneRegex = /^(\+91)?[\d]{10}$/gi
        var currentValue = a.target.value
        var ifValid = phoneRegex.test(currentValue)
        if (ifValid){
            $('#contact-error').css('display', 'none')
        } else{
            $('#contact-error').css('display', 'block')
        }
    })

    var country =document.getElementById('country')
    country.addEventListener('input', function(e){
        var nameRegex = /^[a-z]{2,15}$/gi;
        var currentValue = e.target.value
        var ifValid = nameRegex.test(currentValue)
        if (ifValid){
            $('#country-error').css('display', 'none')
        } else{
            $('#country-error').css('display', 'block')
        }
    })
});

