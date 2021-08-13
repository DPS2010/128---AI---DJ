leftWristx = 0
rightWristx = 0
leftWristy = 0
rightWristx = 0
song = "";
function preload() {
    song = loadSound("music.mp3")
}

function setup() {
    canvas = createCanvas(600,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose',gotPoses)
}
function draw() {
 image(video, 0, 0, 600, 500)
}
function modelLoaded() {
    console.log("Model loaded")

}
function play() {
    song.play()
    song.setVolume(1)
    song.rate(1)
}
function gotPoses(result) {
    if (result.length > 0) {
        console.log(result)
        leftWristx = result[0].pose.leftWrist.x
        leftWristy = result[0].pose.leftWrist.y
        rightWristx = result[0].pose.rightWrist.x
        rightWristy = result[0].pose.rightWrist.y
        console.log("Left Wrist X = " + leftWristx + " Right Wrist X = " + rightWristx + " Left Wrist Y = " + leftWristy + " Right Wrist Y" + rightWristy )

    }
} 
function play() {
    song.play()
    song.setVolume(1)
    song.rate(1)
}

































































