/*console.log('Loaded!');

//change the text of the main-text div

var element = document.getElementById('main-text');
    element.innerHTML = 'Ganesh Nimajjan';
    
// Move the image

var img = document.getElementById('madi');
    img.onclick = function(){
     img.style.marginleft = '100px'; 
        
    };*/
    
// Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function (){

//Create a request to the counter endpoint

var request = new XMLHttpRequest();

//capture the response and store it in a variable
    request.onreadystatechange = function(){
    if(request.readystate === XMLHttpRequest.DONE){
        //Take an action
    if(request.status === 200)    {
        var counter = request.responseText;
        var span = document.getElementById('count');
        span.innerHTML = counter.toString();
    }
    }
     //Not yet done---else part
        
    };

// Make the request
    request.open('GET','http://sujathaprabhubh12.imad.hasura-app.io/counter', true);
    request.send(null);
};