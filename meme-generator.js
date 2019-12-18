let topText, bottomText, topTextSize, bottomTextSize, image, createBtn, canvas, ctx;

function generateMeme (img, topTextSize, bottomTextSize){

    canvas=document.createElement("canvas");
    ctx=canvas.getContext("2d");

    canvas.id="meme-canvas"

    canvas.width=500;
    canvas.height=500*img.height/img.width;

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(img,0,0,canvas.width,canvas.height);

    let fontSize=canvas.width/10;
    ctx.font=fontSize+'px Impact';
    ctx.fillStyle='white';
    ctx.strokeStyle='black';
    ctx.lineWidth=fontSize/20;
    ctx.textAlign='center';

    ctx.textBaseline='top';
    ctx.fillText(topTextSize,canvas.width/2,0,canvas.width);
    ctx.strokeText(topTextSize,canvas.width/2,0,canvas.width);

    ctx.textBaseline='bottom';
    ctx.fillText(bottomTextSize,canvas.width/2,canvas.height,canvas.width);
    ctx.strokeText(bottomTextSize,canvas.width/2,canvas.height,canvas.width);

    document.getElementById("meme-canvas-container").appendChild(canvas);

    canvas.addEventListener("click",(event)=>[
        canvas.parentNode.removeChild(document.getElementById("meme-canvas"))
    ])

    document.getElementById("image-upload").value = "";
    document.getElementById("top-text").value = "";
    document.getElementById("bottom-text").value = "";
}

function init(){

    topText=document.getElementById('top-text')
    bottomText=document.getElementById('bottom-text')
    image=document.getElementById('image-upload')
    createBtn=document.getElementById('create-btn')
    imageForm=document.getElementById('imageForm')


    createBtn.addEventListener("click",(event)=>{
        let img=new Image();
        img.onload=function(){
            generateMeme(img,topText.value,bottomText.value);
        }
        img.src=image.value;
        event.preventDefault();
    })

}

init();

// make a download image function
// make a delete meme function
