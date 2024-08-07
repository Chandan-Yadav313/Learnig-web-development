const openVideo = document.querySelector("#open");
const inputVideo = document.querySelector("#inputvideo");
const videoPlayback = document.querySelector("#playback");
const speedUp = document.querySelector("#SpeedUp");
const speedDown = document.querySelector("#speedDown");
const videoVolumn = document.querySelector("#audio");
const volumnUp = document.querySelector("#volumnUp");
const volumnDown = document.querySelector("#volumnDown");
const videoPlayer = document.querySelector("#main");


const speedUpHandler = () => {
    alert("clicked on speedUp");
}
speedUp.addEventListener("click", speedUpHandler);

// function for open file.
const inputHandler = () => {
    console.log("clicked on open");
    inputVideo.click();
}
openVideo.addEventListener("click", inputHandler);

// function for input file selected
const fileSelected = (obj) => {
    // console.log("file selected");
    // console.log(obj);
    const selectedFile = obj.target.files[0];
    const link = URL.createObjectURL(selectedFile);
    const videoElement = document.createElement("video");
    videoElement.setAttribute("class", "video");
    videoElement.src = link;
    videoPlayer.appendChild(videoElement);
    videoElement.play();
    videoElement.controls="true"
}
inputVideo.addEventListener("change", fileSelected);

