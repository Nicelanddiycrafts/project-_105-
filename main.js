Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot (){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+ data_url + '">'
    })
}

console.log('ml5 version :', ml5.version);

classifer = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AIAEL--n6/model.json', modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
    }

function check(){
    img = document.getElementById("capture_image");
    classifer.classify(img, gotResult);
    }

function gotResult(error, results){
    if(error){
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = ((results[0].confidence)*100).toFixed(3) + " % ";
        }
    
}