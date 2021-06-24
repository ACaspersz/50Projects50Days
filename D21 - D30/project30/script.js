const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const inputEl = document.getElementById('input-text')
const text = inputEl;
 
let idx = 1;

let speed = 300 / speedEl.value;

writeText()

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++

  if(idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value )

inputEl.addEventListener('keydown', (e) => {
  if(e.keycode === 13) {
    e.preventDefault();
    text = inputEl;
  }
})