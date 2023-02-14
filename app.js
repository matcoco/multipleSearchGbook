let tab = []
let resultat = "";
let list = ""

function getList(){
    list = document.querySelector("#excel-list").value
    if(list) convertToRequest();
}

function convertToRequest(){
    resultat = '#IN ('
    tab = list.trim().split("\n")
    tab.pop();
    for(let i = 0; i < tab.length; i++){
        if(tab[i]) resultat += `"${tab[i]}",`
        if(i === tab.length - 1) resultat += `"${tab[i]}")`
    }

    displayResult(resultat);
}

function removeList(){
    document.querySelector("#excel-list").value = ""
    document.querySelector("#excel-list-result").value = ""
}

function displayResult(str){
    document.querySelector("#excel-list-result").value = str
}


