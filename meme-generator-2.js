let topText, bottomText, topTextSize, bottomTextSize, image, createBtn, canvas, ctx;

function generateMeme (img, topText, bottomText){
    
    // img.width='500px'
    // img.height='auto'

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
    ctx.fillText(topText,canvas.width/2,0,canvas.width);
    ctx.strokeText(topText,canvas.width/2,0,canvas.width);

    ctx.textBaseline='bottom';
    ctx.fillText(bottomText,canvas.width/2,canvas.height,canvas.width);
    ctx.strokeText(bottomText,canvas.width/2,canvas.height,canvas.width);
}

function eraseText() {
    document.getElementById("image-upload").value = "";
    document.getElementById("top-text").value = "";
    document.getElementById("bottom-text").value = "";
}



function init(){

    topText=document.getElementById('top-text')
    bottomText=document.getElementById('bottom-text')
    topTextSize=document.getElementById('top-text-size')
    bottomTextSize=document.getElementById('bottom-text-size')
    image=document.getElementById('image-upload')
    createBtn=document.getElementById('create-btn')
    canvas=document.getElementById('meme-canvas')
    imageForm=document.getElementById('imageForm')

    ctx=canvas.getContext("2d")

    createBtn.addEventListener("click",function(event){
        let canv=document.createElement('canvas');
        document.body.appendChild(canv);
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
