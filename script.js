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


function kasowanie(){
    liczba1 = 0
    liczba2 = 0
    document.getElementById("wyswietlacz").textContent = "0"
}



function dzialania(typ){
    dzialanie = typ
    liczba1 = parseInt(wyswietlacz.textContent) 
    wyswietlacz.textContent = "0"
}


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
