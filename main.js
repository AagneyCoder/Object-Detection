img = "";
status = "";
objects = [];


function setup() {
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelloaded);
    document.getElementById("status").innerHTML = "Status :  Detecting Objects"; 
}

function modelloaded() {
    console.log('Model Loaded!');
    status = true;
    objectDetector.detect(img , gotResult);
}

function gotResult(error , results) {
 if (error){
    console.log(error);
 }
 console.log(status);
 objects = results;
}

function preload() {
    img = loadImage('dog_cat.jpg');  
}

function draw() {
    image(img ,0 , 0 , 640 , 420 );

    if (status !="")
    {
        for (i = 0; 1 < objects.length; i++)
        {
        document.getElementById("status").innerHTML = "Status :  Detecting Objects"; 

        fill('#FF0000');
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + "  " + percent + "%" , objects[i].x , objects[i].y);
        noFill();
        stroke('#FF0000');
        rect(objects[i].x -10 , objects[i].y - 15 , objects[i].width , objects[i].height );
        }
    }
    
    
}