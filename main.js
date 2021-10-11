function setup() {
    canvas = createCanvas(640, 640)
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 150, 220, 200);
        fill(0, 128, 0)
        stroke(0,138,0)
        circle(70, 50,50)
        rect(70, 40, 460, 20)

        fill(0, 128, 0)
        stroke(0,138,0)
        circle(70, 430, 50)

        circle(550, 50,50) 
        circle(550, 430,50) 
    rect(90, 420, 460, 20);
    rect(90, 420, 460, 20);
}