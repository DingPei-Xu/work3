function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  for(let i=1;i<4;i++){
    for(let j=1;j<6;j++){  
      if(i==1&&j==2){
         fill(0);
         rect(i*30,j*30,30,30);
      }
      if(i==1&&j==3){
         fill(0);
         rect(i*30,j*30,30,30);
      }
       if(i==1&&j==4){
         fill(0);
         rect(i*30,j*30,30,30);
      }
        if(i==3&&j==1){
           fill(0);
           rect(i*30,j*30,30,30);
        }
      if(i==3&&j==2){
         fill(0);
         rect(i*30,j*30,30,30);
      }
      if(i==3&&j==3){
         fill(0);
         rect(i*30,j*30,30,30);
      }
      if(i==3&&j==4){
         fill(0);
         rect(i*30,j*30,30,30);
      }
    }
  }
}