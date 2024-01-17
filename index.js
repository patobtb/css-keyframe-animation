// import "./sass/main.scss";
const { log } = console;
const $ = (s, p = document) => p.querySelector(s);
const tag = (t, p = document) => p.createElement(t);

let count = 1;
const max_boxes = 25;

const colors = [
  "#e80c7a",
  "#ff0dff",
  "#ff0000",
  "#e82c0c",
  "#ff530d",
  "#dfff0d",
  "#8eff0c",
  "#00bc0c",
  "#0197ff",
  "#730ce8"
];

const wrapper = $(".wrapper");

const rand = range => Math.round(Math.random() * range);

document.body.addEventListener("click", function() {
  if (count === max_boxes + 1) {
    wrapper.innerHTML = "";
    count = 1;
  }
  const box = tag("div");
  box.className = "box";
  box.textContent = count;
  box.style.backgroundColor = colors[rand(colors.length)];
  wrapper.appendChild(box);
  count++;
});

// document.write('<div class="box">Mashoo...</div>');

// document.body.innerHTML += `
//     <div class="box">Mashoo...</div>`

// const box = document.createElement('div');
// box.innerHTML = `<div class="box">Mashoo...</div>`
// document.body.appendChild(box);

// const box = document.createElement('div');
// box.className = 'box';
// box.textContent = 'Mashehoo...';
// document.body.appendChild(box);

//-------

// const wrapper = document.querySelector('.wrapper');
// wrapper.innerHTML += `<div class="box">Mashoo...</div>`;
