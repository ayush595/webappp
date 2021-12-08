noseX = 0;
noseY = 0;

function preload() {
    imaeg = loadImage("t.png");
}
 
function setup() {
    canvas= createCanvas(500, 500);
    canvas.center();
    webcam= createCapture(VIDEO);
    webcam.size(500, 500);
    webcam.hide();

    posenetter= ml5.poseNet(webcam, modelLoaded);
    posenetter.on("pose",resultws);

}
function modelLoaded() {
    console.log("posenet is loaded man! now check if it is fine");
}
function draw() {
    image(webcam, 0, 0,500 , 500);
    image(imaeg, noseX, noseY, 50, 50);
}
function takesnap() {
    save("minecraftminecraft.png");
}
function resultws(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-25;
        noseY = results[0].pose.nose.y-15; 

    }
}