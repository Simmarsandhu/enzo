password="samkim";
passcode = document.forms["myforms"]["pascode"].value;

function redirect(){
if(passcode == "7045"){
  window.alert("dbhtml");
  return false;

}
 
else{
    window.alert("wrong password");
}
}