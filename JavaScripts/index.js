

//Script For Audio Default Volume-->
var audio = document.getElementById('backAudio');
audio.volume = 0.19;

//Script For Audio Volume Button-->
var volBtn = document.getElementById('volumeBtn');
var count = 1;

function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        volBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
    }
    else{
        count = 0;
        audio.pause();
        volBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}