//Get a reference to the iframe element 
var iframe = document.getElementById("widgetIframe");

//Check if the iframe is loaded
iframe.onload = function(){
    //Access the iframe's content document
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    //Access the span element inside the iframe¨s content document
    var spanElement = iframeDocument.getElementById("content").querySelector("span");
    

    //Get the content of the span element
    var spanText = spanElement.textContent;

    //Display the text content
    console.log(spanText);
}