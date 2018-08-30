function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

let anagramSets = {};

for (let i = 0; i < words.length; i++) {
    anagramSets[alphabetize(words[i])] = [];
}

for (i = 0; i < words.length; i++) {
    let alphWord = alphabetize(words[i]);
    if (alphWord in anagramSets) {
        anagramSets[alphWord].push(words[i]);
    }
}

function newList(text) {
    const newList = document.createElement("div");
    const newText = document.createTextNode(text);
    newList.appendChild(newText);
    document.getElementById("list").appendChild(newList);
}

let listFull = [];

for (let i = 0; i < words.length; i++) {
    if (anagramSets[alphabetize(words[i])].length >= 5 && alphabetize(words[i]) in listFull === false) {
        newList(alphabetize(words[i]) + ": [" + anagramSets[alphabetize(words[i])] + "]");
        listFull[alphabetize(words[i])] = [];
    }
}
