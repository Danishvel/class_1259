NoseX = 0;
NoseY = 0;
rightWristX = 0;
leftWristX = 0;
Difference = 0;
function preload(){

}
function draw() {
 background('#fff200');
 if (Difference < 100) {
    fill('#00ffb3');
    stroke('#00ffb3');
 }
 if (Difference < 200) {
    fill('#1500ff');
    stroke('#1500ff');
 }

 square(NoseX, NoseY, Difference);
}
function setup() {
    canvas = createCanvas(450, 450);
    canvas.position(900, 130);

    webcam = createCapture(VIDEO);
    webcam.size(450, 450);

    posenet = ml5.poseNet(webcam, Modelloaded);

    posenet.on('pose', gotPoses);
}

function Modelloaded() {
    console.log("Model Loaded !!!!!!!!!!!!!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        console.log("right Wrist X : " + rightWristX + "left Wrist X : " + leftWristX);
        Difference = floor(leftWristX - rightWristX);
        document.getElementById("WAH").innerHTML=Difference;
        console.log("NoseX : " + NoseX + " NoseY : " + NoseY);
    }
}