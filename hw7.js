function reversText() {
const text = document.getElementById("userInput").value;
const reversed = text.split('').reverse().join('');
document.getElementById('result').innerText = `Перевернутый текст: ${reversed}`;
}