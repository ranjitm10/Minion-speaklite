var btn = document.querySelector("#btn");
var txtIn = document.querySelector("#txtInput");
var output = document.querySelector("#divOut");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function translateURL(text){
	return serverURL + "?" + "text=" + text; 
}

function errorHandler(error){
	console.log("error occured ",error);
	alert("Server is down! Please try after some time.");
}


// function btnHandler() {
//     var inputText = txtInput.value; // taking input

//     // calling server for processing
//     fetch(getTranslationURL(inputText))
//         .then(response => response.json())
//         .then(json => {
//             var translatedText = json.contents.translated;
//             divOut.innerText = translatedText; // output
//            })
//         .catch(errorHandler)
// };

// btnTranslate.addEventListener("click", btnHandler)

btn.addEventListener("click",function btnHandler(){
	fetch(translateURL(txtIn.value)).then(response => response.json()).then(json=>{
		divOut.innerText=json.contents.translated;
	}).catch(errorHandler);
});

