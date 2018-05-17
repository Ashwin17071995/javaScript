var pos = document.getElementById("imgg")

counter = 1;

function slideshowfunc(){
    if(counter<5){
pos.src = "img00"+counter+".jpg"
counter++;
    }
    else{
        counter = 1;
    }
}

setInterval(slideshowfunc,2000);