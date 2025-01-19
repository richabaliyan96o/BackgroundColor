let index = 0;
function changecolors() {
    var colors = ["red", "blue", "green", "yellow", "purple"];

   const res =  document.getElementById('container');
   res.style.backgroundColor =  colors[index++] ;

   if(index > colors.length -1){
    index = 0;
   }
   

}