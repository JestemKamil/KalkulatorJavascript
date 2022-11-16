//Z góry przepraszam jeśli zirytowałem większość programistów tym kodem, ale inaczej nie potrafie.(ważne że działa)
let liczba1 = 0
let liczba2 = 0
let dzialanie = "nic"
let wyswietlacz = document.getElementById("wyswietlacz")
let wynik = 0
function klikanie(kliknieto){
    if(wyswietlacz.textContent == "0"){
        wyswietlacz.textContent = ""
    }
    wyswietlacz.textContent = wyswietlacz.textContent + kliknieto
}
document.getElementById("btn1").addEventListener("click", function(){klikanie(1)} )
document.getElementById("btn2").addEventListener("click", function(){klikanie(2)})
document.getElementById("btn3").addEventListener("click", function(){klikanie(3)})
document.getElementById("btn4").addEventListener("click", function(){klikanie(4)})
document.getElementById("btn5").addEventListener("click", function(){klikanie(5)})
document.getElementById("btn6").addEventListener("click", function(){klikanie(6)})
document.getElementById("btn7").addEventListener("click", function(){klikanie(7)})
document.getElementById("btn8").addEventListener("click", function(){klikanie(8)})
document.getElementById("btn9").addEventListener("click", function(){klikanie(9)})
document.getElementById("btn0").addEventListener("click", function(){klikanie(0)})

function kasowanie(){
    liczba1 = 0
    liczba2 = 0
    document.getElementById("wyswietlacz").textContent = "0"
}
document.getElementById("clear").addEventListener("click", kasowanie)

function dzialania(typ){
    dzialanie = typ
    liczba1 = parseInt(wyswietlacz.textContent) 
    wyswietlacz.textContent = "0"
}
document.getElementById("dzielenie").addEventListener("click", function(){dzialania("dzielenie")})
document.getElementById("mnozenie").addEventListener("click", function(){dzialania("mnozenie")})
document.getElementById("dodawanie").addEventListener("click", function(){dzialania("dodawanie")})
document.getElementById("odejmowanie").addEventListener("click", function(){dzialania("odejmowanie")})

function rozwiaz(){
    liczba2 = parseInt(wyswietlacz.textContent)
    if(dzialanie == "dzielenie"){
        wynik = liczba1 / liczba2
    }
    else if(dzialanie == "mnozenie"){
        wynik = liczba1 * liczba2
    }
    else if(dzialanie == "dodawanie"){
        wynik = liczba1 + liczba2
    }
    else if(dzialanie == "odejmowanie"){
        wynik = liczba1 - liczba2
    }
    wyswietlacz.textContent = wynik
}
document.getElementById("wynik").addEventListener("click", rozwiaz)
