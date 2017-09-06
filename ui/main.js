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

//Make a request to the counter endpoint

//capture the response and store it in a variable

// Render the variable in the correct span
    counter = counter+1;
    var span = document.getElementById('counter');
    span.innerHTML = counter.toString();