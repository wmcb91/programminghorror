let wastedLoops = 0;
let loops = 10000;

// https://i.redd.it/3kwrwwu71iwz.png
const oneToTen = () => {
  while(true) {
    if(Math.random() >= 0 && Math.random() <= 0.09) return 0;
    if(Math.random() >= 0.1 && Math.random() <= 0.19) return 1;
    if(Math.random() >= 0.2 && Math.random() <= 0.29) return 2;
    if(Math.random() >= 0.3 && Math.random() <= 0.39) return 3;
    if(Math.random() >= 0.4 && Math.random() <= 0.49) return 4;
    if(Math.random() >= 0.5 && Math.random() <= 0.59) return 5;
    if(Math.random() >= 0.6 && Math.random() <= 0.69) return 6;
    if(Math.random() >= 0.7 && Math.random() <= 0.79) return 7;
    if(Math.random() >= 0.8 && Math.random() <= 0.89) return 8;
    if(Math.random() >= 0.9 && Math.random() <= 1) return 9;
    wastedLoops++;
  }
}

const buildDist = (shit) => {
  let start = Date.now();
  let rands = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
  }

  loops = document.getElementById('loops').value.replace(/,/g, '');

  for (let i = 0; i <= loops; i++) {
    if (shit) {
      rands[oneToTen()]++;
    } else {
      rands[Math.floor(Math.random() * 10)]++;  
    }
  }
  document.getElementById('time').innerText = Date.now() - start + ' ms'
  return rands;
}

const buildBars = (rands) => {
  for (i = 0; i <= 9; i++) {
    let bar = document.getElementById(i);
    let label = document.getElementById(i + '-label');
    let height = rands[i] / loops * 400;
    let percentage = Math.round((rands[i] * 100) / loops * 100) / 100;
    bar.style.height = `${height}%`;
    label.innerText = percentage + '%';
  }

  document.getElementById('wasted-loops').innerText = wastedLoops;
  wastedLoops = 0;
}

const createNewShittyGraph = () => {
  buildBars(buildDist(true)); // Shitty dist = true
}

const createNewGraph = () => {
  buildBars(buildDist(false)); // Shitty dist = false
}

document.getElementById('new-shit').addEventListener('click', createNewShittyGraph);
document.getElementById('new-good').addEventListener('click', createNewGraph);

createNewShittyGraph();