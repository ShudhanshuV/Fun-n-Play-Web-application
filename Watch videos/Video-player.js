 $(document).ready(function () {
    $('.playlist-card').each(function(index){
         $(this).on('click', function(){
            var current_index = index+1;
            $('.playlist-card').removeClass('active-card');
            $('.playlist-card:nth-child('+current_index+')').addClass('active-card');

        });
    });
});
