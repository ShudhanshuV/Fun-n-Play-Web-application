

    // var playlist = document.getElementById('card2')

    // var preload = document.getElementById('video-section')

    // function creatPlaylistCard (){
    //     var mainDiv = document.createElement('div')
    //     mainDiv.id= 'id' + Obj.id
    //     mainDiv.className = 'playlist-card' 
    
    //     var thumbnail = document.createElement('img')
    //     thumbnail.src = obj.thumbnail
    //     thumbnail.className = 'thumbnail'

    //     var title = document.createElement('h3')
    //     title.className = 'thumbnail-title'
    //     title.innerHTML = obj.title

    //     mainDiv.appendChild(thumbnail)
    //     mainDiv.appendChild(title)

    //     return mainDiv
    // } 

    // var playlistAnchor = document.querySelectorAll(".playlist-card"),
    // imageURL = document.querySelectorAll(".playlist-cardo img");
 
    // var prevTitle = document.querySelector(".thumbnail-title"),
    // prevDescription = document.querySelector(".description");
 
    // for (var i = 0; i < 4; i++) {
    //     (function(){
    //         var k = i;
 
    //         playlistAnchor[i].addEventListener("click", function(e){
    //             e.preventDefault();
 
    //             var playedVideo = document.querySelector(".played-video");
    //             playedVideo.classList.remove("slide");
    //             playedVideo.classList.remove("played-video");
 
    //             // Update video
    //             vid.poster = imageURL[k].src;
    //             vid.src = playlistAnchor[k].href;
 
    //             // Update info
    //             prevTitle.innerHTML = this.querySelector(".single-video-title").textContent;
    //             prevDescription.innerHTML = this.querySelector(".single-video-des").textContent;
 
    //             // Reset and play video
    //             replayVideo();
 
    //             this.classList.add("played-video");
    //             playedVideo.classList.add("slide");
 
    //             setTimeout(function(){
    //                 playlistAnchor[k].parentNode.appendChild(playlistAnchor[k]);
    //             }, 500);
    //         });
    //     })
    // }

 $(document).ready(function () {
    $('.playlist-card').each(function(index){
         $(this).on('click', function(){
            var current_index = index+1;
            $('.playlist-card').removeClass('active-card');
            $('.playlist-card:nth-child('+current_index+')').addClass('active-card');

        });
    });
});
