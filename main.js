function setup(){
    canvas = createCanvas(1500,700);
    canvas.center();
    video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();
   }
   
   function draw()
   {
       background("white");
       image(video, 0, 0, 300, 300);
   }