let table;
let malteser, brownie, cameocreme, cookie;

function preload(){
  table = loadTable('kike ated a sweet.csv','csv', 'header');
  malteser = loadImage('sweets/malteser.png');
  brownie = loadImage('sweets/brownie.png');
  cameocreme = loadImage('sweets/cameocreme.png');
  cookie = loadImage('sweets/cookie.png');

}

function setup() {
  createCanvas(400, 400);
  imageMode (CENTER);
}

function allMySweets(){  
  let xPos = 20;
  let yPos = 50;
  for(x=0; x<table.getRowCount(); x ++){
    let row = table.getRow(x);
    let countMaltesers = row.get("maltesers");
    if (countMaltesers > 0 ){
      for (y = 0; y < countMaltesers; y++){
        image(malteser, xPos, yPos,30,30);
        xPos += 20;
        if (xPos > 370){
          yPos += 30;
          xPos = 30
        }
      }
    }
    let countBrownies = row.get("brownie");
    if (countBrownies > 0 ){
      for (y = 0; y < countBrownies; y++){
        image(brownie, xPos, yPos,30,30);
        xPos += 20;
        if (xPos > 370){
          yPos += 30;
          xPos = 30
        }
      }
    }
    let countCameocremes = row.get("cameo cremes");
    if (countCameocremes > 0 ){
      for (y = 0; y < countCameocremes; y++){
        image(cameocreme, xPos, yPos,30,30);
        xPos += 20;
        if (xPos > 370){
          yPos += 30;
          xPos = 30
        }
      }
    }
    let countCookies = row.get("cookies");
    if (countCookies > 0 ){
      for (y = 0; y < countCookies; y++){
        image(cookie, xPos, yPos,30,30);
        xPos += 20;
        if (xPos > 370){
          yPos += 30;
          xPos = 30
        }
      }
    }
  }
}
   

function draw(){
  background(569,679,54);
  allMySweets();
  fill (161, 66, 245);
  textSize(60);
  text ("i eated a lot", 200,200,200,200);
}

