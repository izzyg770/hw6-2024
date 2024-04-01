var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById('player1');
    video.autoplay = false;
    video.loop = false;

    document.getElementById("play").addEventListener("click", play_video);
    document.getElementById("pause").addEventListener("click", pause_video);
    document.getElementById("slower").addEventListener("click", slow_down);
    document.getElementById("faster").addEventListener("click", speed_up);
    document.getElementById("skip").addEventListener("click", skip_ahead);
    document.getElementById("mute").addEventListener("click", mute_unmute);
    document.getElementById("slider").addEventListener("input", change_volume);
    document.getElementById("vintage").addEventListener("click", apply_vintage_style);
    document.getElementById("orig").addEventListener("click", remove_vintage_style);
});

function play_video() {
	video.play();
    console.log("Play clicked. Started playing the video.");
	update_volume_info();
}

function update_volume_info() {
    const volumeSpan = document.getElementById("volume");
    const currentVolume = Math.round(video.volume * 100);
    volumeSpan.textContent = currentVolume + "%";
	console.log("Volume updated to: ", currentVolume);
}

function pause_video() {
    video.pause();
	console.log("Pause clicked. Paused the video.")
}

function slow_down() {
	video.playbackRate -= 0.1;
    console.log("New speed:", video.playbackRate);
}

function speed_up() {
	video.playbackRate += 0.1;
    console.log("New speed:", video.playbackRate);
}

function skip_ahead() {
	if (video.currentTime + 10 >= video.duration) {
        video.currentTime = 0;
    } 
	else {
        video.currentTime += 10;
    }
    console.log("Current video location:", video.currentTime);
}

function mute_unmute() {
    if (video.muted) {
        video.muted = false;
        document.getElementById("mute").textContent = "Mute";
    } else {
        video.muted = true;
        document.getElementById("mute").textContent = "Unmute";
    }
}

function change_volume() {
    video.volume = parseFloat(this.value) / 100;
    document.getElementById("volume").textContent = this.value + "%";
}

function apply_vintage_style() {
    video.classList.add("oldSchool");
}

function remove_vintage_style() {
    video.classList.remove("oldSchool");
}

