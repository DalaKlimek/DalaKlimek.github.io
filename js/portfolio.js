function zoomIn(number){
  document.getElementById("portfolioBigPicIMG").src = "images/portfolio/big/"+number+".png";


  document.getElementById("portfolioBigPic"). style.display = "block";
  document.getElementById("wholeSite").style.display = "none";

}

function zoomOut(){
  document.getElementById("portfolioBigPic").style.display = "none";
  document.getElementById("wholeSite").style.display = "block";
}
