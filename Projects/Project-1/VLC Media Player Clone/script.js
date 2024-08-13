
const toast = document.querySelector(".toast");

// code for click on open botton to open file.
const openVideo = document.querySelector("#open");
const inputHandler = () => {
    // console.log("clicked on open");
    inputVideo.click();
}
openVideo.addEventListener("click", inputHandler);

// code for select video and play video.
const inputVideo = document.querySelector("#inputvideo");
const videoPlayer = document.querySelector("#main");
const fileSelected = (obj) => {
    // console.log(obj);
    const selectedFile = obj.target.files[0];
    const link = URL.createObjectURL(selectedFile);
    const videoElement = document.createElement("video");
    videoElement.setAttribute("class", "video");
    videoElement.src = link;
    videoElement.style.height = "100%"
    videoPlayer.appendChild(videoElement);
    videoElement.play();
    videoElement.volume = 0.0;
}
inputVideo.addEventListener("change", fileSelected);

// code for playback menu. 
const videoPlayback = document.querySelector("#playback");
const speedUp = document.querySelector("#SpeedUp");
const speedDown = document.querySelector("#speedDown");

//********SpeedUp************/
const speedUpHandler = () => {
    const videoElement = document.querySelector("video");
    if (videoElement == null) {
        return;
    }
    if (videoElement.playbackRate >= 3) {
        return;
    }
    const speedUp = videoElement.playbackRate + 0.5;
    videoElement.playbackRate = speedUp;
    showToast("SpeedUp: " + speedUp + "x");
}
speedUp.addEventListener("click", speedUpHandler);

/**************SpeedDown**********/
const speedDownHandler = () => {
    const videoElement = document.querySelector("video");
    if (videoElement == null) {
        return;
    }
    if (videoElement.playbackRate > 0) {
        const speedDown = videoElement.playbackRate - 0.5;
        videoElement.playbackRate = speedDown;
        showToast("SpeedDown: " + speedDown + "x");
    }

}
speedDown.addEventListener("click", speedDownHandler);
/*********Code for Audio Menu*********/
const videoVolume = document.querySelector("#audio");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");

/*****Volumn Up********/
const volumeUpHandler = () => {
    const videoElement = document.querySelector("video");
    if (videoElement == null || videoElement.volume > 0.9) {
        return;
    }
    if (videoElement.volume < 1.0) {
        videoElement.volume = videoElement.volume + 0.1;
        console.log("volume up", videoElement.volume);
        showToast("Volume Up: " + (Math.round(videoElement.volume * 100)) + "%");
    }
}
/*****Volumn Down********/
const volumeDownHandler = () => {
    const videoElement = document.querySelector("video");
    if (videoElement == null) {
        return;
    }
    if (videoElement.volume < 0.1) {
        return;
    }
    videoElement.volume = videoElement.volume - 0.1;
    console.log("volume Down", videoElement.volume);
    showToast("Volume Down: " + (Math.round(videoElement.volume * 100)) + "%");
}
volumeDown.addEventListener("click", volumeDownHandler);
volumeUp.addEventListener("click", volumeUpHandler);

/**Show toast message***/

function showToast(indicator) {
    toast.textContent = indicator;

    toast.style.display = "block";
    setTimeout(function () {
        toast.style.display = "none";
    }, 1000);
}