// Generar un número secreto aleatorio entre 1 y 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
const attempts = [];

function guessNumber() {
    // Obtener el valor del input y convertirlo a número
    const userGuess = Number(document.getElementById("userInput").value);
    const messageElement = document.getElementById("message");

    // Verificar si el usuario adivinó el número secreto
    if (userGuess === secretNumber) {
        messageElement.textContent = `🎉 Felicidades, adivinaste el número secreto! 🎉 Intentos: ${attempts.join(", ")}`;
    } else {
        // Generar pistas de si el número es mayor o menor
        if (userGuess < secretNumber) {
            messageElement.textContent = "Ups, el número secreto es mayor. Vuelve a intentarlo🌞.";
        } else {
            messageElement.textContent = "Ups, el número secreto es menor. Vuelve a intentarlo🌟.";
        }
    }
}