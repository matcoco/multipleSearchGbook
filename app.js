let tab = []
let resultat = "";
let list = ""
let countGbook = 0

function getList() {
    list = document.querySelector("#excel-list").value
    if (list) convertToRequest();
}

function convertToRequest() {
    resultat = '#IN ('
    tab = list.trim().split("\n")

    for (let i = 0; i < tab.length; i++) {
        if (tab[i]) {
            resultat += `'${tab[i]}'`
            countGbook++
        }
        if (i < tab.length - 1 && tab[i]) resultat += `,`
        if (i === tab.length - 1) resultat += `)`
    }
    displayResult(resultat);
}

function removeList() {
    document.querySelector("#excel-list").value = ""
    document.querySelector("#excel-list-result").value = ""
    document.querySelector("#countGbook").innerHTML = ""
    countGbook = 0
}

function displayResult(str) {
    document.querySelector("#excel-list-result").value = str
    document.querySelector("#countGbook").innerHTML = countGbook
}

document.getElementById('btn-copy').addEventListener('click', function () {
    var text = document.getElementById('excel-list-result');
    text.select();
    document.execCommand('copy');
})
