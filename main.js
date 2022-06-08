var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event)
{
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content=="take my selfie")
    {
    speak();
    console.log("taking selfie--");
    }
}

function speak()
{
    var synth=window.speechSynthesis;
    var speakdata="Taking your selfie in three seconds..";
    var utterThis=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    }, 3000);
}
    setTimeout();
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

var camera=document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">';
    });
}

function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie_img").src;
    link.href=image;
    link.click();
}