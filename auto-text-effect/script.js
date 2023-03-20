const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const inputText = document.querySelector('.text-input');
let text = 'We Love Programming!';
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, idx);
    idx++;
    if (idx > text.length) {
        idx = 1;
    }
    setTimeout(writeText, speed);
}

inputText.addEventListener('input', (e) => {
    let inputValue = e.target.value.trim();
    if (inputValue !== '') {
        text = inputValue;
    }

    else {
        text = 'We Love Prograaming!';
    }
});



speedEl.addEventListener('input', (e) => speed = 300 / e.target.value);