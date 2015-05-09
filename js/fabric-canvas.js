
var gMaskImg = null;
var gCanvas = null;
var gUserImgUrl = './img/pug.jpg';

(function() {
  var canvas = this.__canvas = new fabric.Canvas('c');
  // canvas.calcOffset();
  fabric.Object.prototype.transparentCorners = false;
  
  canvas.setHeight(window.innerHeight);
  canvas.setWidth(window.innerWidth);  
  canvas.setBackgroundImage(gUserImgUrl, canvas.renderAll.bind(canvas));
  var padding = 0;
  
  fabric.Image.fromURL('./img/transparent_mask_optimized.png', function(img) {
  //fabric.Image.fromURL('./img/pug.jpg', function(img) {

  gMaskImg=img;
  gCanvas=canvas;
  
  img.lockRotation = true;
  img.scaleToWidth(800);
  img.top=150;
  img.left=0;
  canvas.add(img);



    document.getElementById('img-width').onchange = function() {
      img.scaleToWidth(parseInt(this.value, 10));
      canvas.renderAll();
    };
    document.getElementById('img-angle').onchange = function() {
      img.setAngle(this.value);
      canvas.renderAll();
    };
    document.getElementById('img-padding').onchange = function() {
      padding = parseInt(this.value, 10);
      canvas.renderAll();
    };
    document.getElementById('img-offset-x').onchange = function() {
      pattern.offsetX = parseInt(this.value, 10);
      canvas.renderAll();
    };
    document.getElementById('img-offset-y').onchange = function() {
      pattern.offsetY = parseInt(this.value, 10);
      canvas.renderAll();
    };
    document.getElementById('img-repeat').onclick = function() {
      pattern.repeat = this.checked ? 'repeat' : 'no-repeat';
      canvas.renderAll();
    };
  });
  
})();

function saveModifications() {
  console.log(gMaskImg.getLeft());
  console.log(gMaskImg.getTop());
  console.log(gMaskImg.getHeight());
  console.log(gMaskImg.getWidth());  
  console.log(gCanvas.getBackgroundImage());
  //console.log(maskImg.getAngleInRadians());
}  

function changeBackgroundImage() {
  //var canvas = this.__canvas = new fabric.Canvas('c');
  //fabric.Object.prototype.transparentCorners = false;  
  //gCanvas=canvas;  
  
  var url=document.getElementById('imgUrl').value;
  gUserImgUrl=url;
  gCanvas.setHeight(window.innerHeight);
  gCanvas.setWidth(window.innerWidth);
  gCanvas.setBackgroundImage(gUserImgUrl, gCanvas.renderAll.bind(gCanvas));
}