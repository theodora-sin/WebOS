/*Toggle between showing and hiding the navigation menu link when use click on the menu*/
function myFunction(){
    var x=document.getElementById("myLinks");
    if(x.style.display=="block"){
        x.style.display = "none";
    }else{
        x.style.display="block";
    }
}
