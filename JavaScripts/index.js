

//Script For Audio Default Volume-->
var audio = document.getElementById('backAudio');
audio.volume = 0.2;

//Script For Audio Volume Button-->
var volBtn = document.getElementById('volumeBtn');
var disk = document.getElementById('disk');
var count = 1;

function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        volBtn.innerHTML = '<i class="fas fa-volume-down fa-2x"></i>';
        disk.innerHTML = '<i class="fas fa-compact-disc fa-3x fa-spin" style="--fa-animation-duration: 15s;"></i>'
    }
    else{
        count = 0;
        audio.pause();
        volBtn.innerHTML = '<i class="fas fa-volume-mute fa-2x"></i>';
        disk.innerHTML = '<i class="fas fa-compact-disc fa-3x"></i>'
    }
}