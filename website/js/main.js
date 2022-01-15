var i = 0;
var word = "";
var word_index = 0;
var word_list = ["engineer", "developer", "artist"];
var speed = 100;

//word.length;
//background-image: linear-gradient(90deg, rgb(255, 77, 77), rgb(249, 203, 40));
//background-image: linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128));
//background-image: linear-gradient(90deg, rgb(0, 223, 216), rgb(0, 242, 96));

var direction = 1;

typeWriter();
function  typeWriter(){
    if(direction>0){
        word += word_list[word_index].charAt(i);
        i++;
    }else{
        word = word.slice(0,-1);
        i--;
    }

    document.getElementById("subtitle").innerHTML = word;

    if(i>=word_list[word_index].length){
        direction = -1;
        setTimeout(typeWriter, 2000);
    } else if(i<0){
        direction = 1;
        word_index++;
        if(word_index>=word_list.length){
            word_index = 0;
        }
        setTimeout(typeWriter, 200);
    } else {
        setTimeout(typeWriter, speed);
    }
    
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
} 