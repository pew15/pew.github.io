var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

/* Funktion: 1. öffnet ein Fenster, in das der User seinen Namen eingeben kann
    2. speichert den Namen mit hilfe der localStorage API im Browser in dem ein Datenobjekt 'name' erstellt wird
    3. und ändert den Titel zu einer Begrüßung und dem Namen
 */
function setUserName() {
    var myName = prompt('Bitte geben Sie Ihren Namen ein');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Grüß dich, ' + myName;
}

/* 1. falls kein name vorhanden ist, wird die Funktion setUserName aufgerufen (neuen Namen eingeben)
    2. falls ein name besteht, wird der name aus dem lokalen Speucher geladen
    3. und der Titel entsprechend geändert
*/
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Grüß dich, ' + storedName;
}

// wenn der Button angeklickt wird, wird die Funktion setUserName() ausgeführt (neuen Namen eingeben)
myButton.onclick = function() {
    setUserName();
}


/* 1. es wird das onclick event mit der anonymen Funktion gleichgesetzt
    2. von der variable myImage (alle Bilder des HTML Dokuments) wird das Attribut 'src' ausgewählt
    3. der Wert des Attributs wird durch die Verzweigung überprüft
    4. true: das Attribut 'src' wird auf den Wert 'bilder/rocket.jpg' gesetzt
    5. false: das Attribut 'src' wird auf den Wert 'bilder/codeBold.jpg' gesetzt */
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'bilder/codeBild.jpg') {
        myImage.setAttribute ('src', 'bilder/rocket.jpg');
    } else {
        myImage.setAttribute ('src', 'bilder/codeBild.jpg');
    }
}