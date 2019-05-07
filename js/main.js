//Módosítjuk a h1 elem taratlmát.
document.querySelector("h1").innerHTML = "Hello Belló";

//Kép forrásának módosítása
function changeUrl() {
    document.querySelector("img").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgi85f0UjO9MCwOmRakCQWxCnMJ-agvkGuOfao7iA16DnJudGb";    
}

//Stílus módosítása
function changeStyle() {
    document.querySelector("img").style.width = "40px";    
}

//validáció
function validate(){
    // Az input mező kiválasztása
    var input =  document.querySelector(".input-validate");

    //Az input mező értékének a kiolvasása
    var inputValue = input.value;
    var errorP = document.querySelector(".no-validate");
    //Az input mező értéke nagyobb legyen mint 5 és kisebb mint 21
    if (inputValue < 6 || inputValue > 20 )  {
        errorP.innerHTML = "az érték nem megfelelő...";
    } 
    else {
        errorP.innerHTML = "";
    }
}