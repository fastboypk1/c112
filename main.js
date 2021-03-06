prediction_1= "";
prediction_2= "";

Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90

});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture" src="'+data_uri+'"/>';

    });

}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6W7S2rjhl/model.json', modelLoaded);
function modelLoaded(){
    console.log("model is loaded");
}
function check(){
    img= document.getElementById("capture");
    classifier.classify(img,gotResult);
    
}
function gotResult(error,results){
    if(error){
        console.error(error);
    
    }
    else{
        console.log(results);
        document.getElementById("emotion_1").innerHTML=results[0].label;
        document.getElementById("emotion_2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        if(results[0].label=="happy"){
            document.getElementById("emoji_1").innerHTML="&#128522";

        }
        if(results[0].label=="sad"){
            document.getElementById("emoji_1").innerHTML="&#128532";
        }
        if(results[0].label=="angry"){
            document.getElementById("emoji_1").innerHTML="&#128548";
        }
        if(results[1].label=="happy"){
            document.getElementById("emoji_2").innerHTML="&#128522";

        }
        if(results[1].label=="sad"){
            document.getElementById("emoji_2").innerHTML="&#128532";
        }
        if(results[1].label=="angry"){
            document.getElementById("emoji_2").innerHTML="&#128548";
        }
    }
}