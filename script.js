//Script for the meme generator


function makeMeme(e){
    //prevent page from refreshing after submitting form
    e.preventDefault();
    //make a new image?
    let img = document.createElement("img")
    img.src = document.getElementById("image-url").value;
    img.width = "200"

    //make top and botton text
    let textTop = document.createElement("div");
    textTop.className = "top";
    textTop.innerText = document.getElementById("text-top").value;
    let textBottom = document.createElement("div");
    textBottom.className = "bottom";
    textBottom.innerText = document.getElementById("text-bottom").value;
    
    //make a new div
    let div = document.createElement("div");
    div.className = "meme";
    //put the img in the div
    div.appendChild(img);
    div.appendChild(textTop);
    div.appendChild(textBottom);

    
    //append to the div with ID memes
    const memes = document.querySelector("#memes")
    memes.appendChild(div);

    //also need to clear the form inputs when the button is clicked

}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("generateButton").addEventListener("click", function(event){
        makeMeme(event);
        //add event listener to new meme?
        
    });
});


//add event listener to meme section
//when you click on the image or text, it should remove the parent node
//AKA the div with class meme, that contains the img and text
document.addEventListener("DOMContentLoaded", function(){
    const memeSection = document.querySelector("#memes");
    memeSection.addEventListener("click", function(event){
        if(event.target.parentNode.className === "meme"){
            event.target.parentNode.remove();
        }
    })
});
