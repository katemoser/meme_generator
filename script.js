//Script for the meme generator


function makeMeme(){
    console.log("You clicked the button!");
    //let memePic = document.getElementById("image-url").value;
    //let textTop = document.getElementById("text-top").value;
    //let textBottom = document.getElementById("text-bottom").value;

    //make a new image?
    let img = document.createElement("img")
    img.src = document.getElementById("image-url").value;
    img.width = "200"

    //make top and botton text
    let textTop = document.createElement("div");
    textTop.innerText = document.getElementById("text-top").value;
    let textBottom = document.createElement("div");
    textBottom.innerText = document.getElementById("text-bottom").value;
    
    
    //make a new div
    let div = document.createElement("div");
    div.class = "meme"
    div.position = "absolute"
    //put the img in the div
    div.appendChild(img);
    div.appendChild(textTop);
    div.appendChild(textBottom);

    //div.className = "meme";
    //div.innerText = textTop + " " + textBottom;

    //append to the div with ID memes
    const memes = document.querySelector("#memes")
    memes.appendChild(div);

    //also need to clear the form inputs when the button is clicked

}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("generateButton").addEventListener("click", makeMeme);
});
