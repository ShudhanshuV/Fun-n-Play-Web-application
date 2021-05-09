$(document).ready(function () {
    var rightClick1 = document.getElementById('rightclick1')
    var rightClick2 = document.getElementById('rightclick2')
    var leftClick1 = document.getElementById('leftclick1')
    var leftClick2 = document.getElementById('leftclick2')

    var skinCard = document.getElementById('skin-card')
    var eyeCard = document.getElementById('Eye-card')
    var mouthCard = document.getElementById('Mouth-card')

    rightClick1.addEventListener('click', function(){
        skinCard.style.display = "none"
        eyeCard.style.display = "block" 
    })
    rightClick2.addEventListener('click', function(){
        eyeCard.style.display = 'none'
        mouthCard.style.display = 'block'
    })
    leftClick1.addEventListener('click', function(){
        eyeCard.style.display = 'none'
        skinCard.style.display = 'block'
    })
    leftClick2.addEventListener('click', function(){
        mouthCard.style.display ='none'
        eyeCard.style.display = 'block'
    })

    //change skin color on button click

    $('#red-skin').click(function () { 
        $('#skin').attr("src", "./Images/skin/red.png");
    });

    $('#yellow-skin').click(function () { 
        $('#skin').attr('src', './Images/skin/yellow.png')
        
    });

    $('#green-skin').click(function () { 
        $('#skin').attr('src', './Images/skin/green.png')
        
    });


    // change eyes on click

    $('#close-eye').click(function(){
        $('#eyes').attr('src', './Images/eyes/closed.png')
    })

    $('#laugh-eye').click(function(){
        $('#eyes').attr('src', './Images/eyes/laughing.png')
    })

    $('#long-eye').click(function(){
        $('#eyes').attr('src', './Images/eyes/long.png')
    })

    $('#normal-eye').click(function(){
        $('#eyes').attr('src', './Images/eyes/normal.png')
    })

    $('#rolling-eye').click(function(){
        $('#eyes').attr('src', './Images/eyes/rolling.png')
    })

    $('#winking-eye').click(function(){
        $('#eyes').attr('src', './Images/eyes/winking.png')
    })


    // change mouth on click

    $('#open-mouth').click(function(){ 
        $('#mouth').attr('src', './Images/mouth/open.png')
    });

    $('#sad-mouth').click(function(){ 
        $('#mouth').attr('src', './Images/mouth/sad.png')
    });

    $('#smiling-mouth').click(function(){ 
        $('#mouth').attr('src', './Images/mouth/smiling.png')
    });

    $('#straight-mouth').click(function(){ 
        $('#mouth').attr('src', './Images/mouth/straight.png')
    });

    $('#teeth-mouth').click(function(){ 
        $('#mouth').attr('src', './Images/mouth/teeth.png')
    });
});



