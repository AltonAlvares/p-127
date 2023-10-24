song1="";
song2="";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";
function setup(){
    canvas=createCanvas(600, 300);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function preload()
{
    song=loadSound("music.mp3");
    song=loadSound("music2.mp3");
}
function draw(){
    image(video, 0, 0, 600, 300)
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX ="+ leftWristX +" leftWristY="+ leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+ rightWristX+"rightWristY ="+rightWristY);
    }
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}