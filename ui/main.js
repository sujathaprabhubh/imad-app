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


button.onclick = function (){

//Create a request to the counter endpoint

var request = new XMLHttpRequest();

//capture the response and store it in a variable
    request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
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

// Submit name

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //make a request to the server and send the name
    
    //Capture a list of names and render it as a list
    var names=['name1','name2','name3','name4'];
    var list = '';
    for(var i = 0; i< names.length; i++){
        list +='<li>' + names[i] +'<li>';
    }
    var ol = document.getElementById('namelist');
    ol.innerHTML = list;
    
};

