let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Définir le texte de test
    document.getElementById("inputText").value = testText;
    
    // Réinitialiser l'entrée utilisateur et la sortie
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();
    
    document.getElementById("output").innerHTML = "";
    
    // Démarrer le chronomètre
    startTime = new Date().getTime();
    }

    
    