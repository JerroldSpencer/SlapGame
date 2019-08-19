
let health = 100
let hits = 0

let items = {
  fire: { name: 'Fire', modifier: 2, description: 'IT BURNS!' },
  potion: { name: 'Potion', modifier: 4, description: 'I feel better' },
  shield: { name: 'Shield', modifier: 2, description: 'Leave me alone' }
}

function slap() {
  if (health <= 100) {
    health--
    upCount()
    update()
    console.log(hits);
  }
}
function punch() {
  if (health <= 100) {
    health = health - 5;
    upCount()
    update()
    console.log(hits);
  }
}
function kick() {
  if (health <= 100) {
    health = health - 10;
    upCount()
    update()
    console.log(hits);
  }
}

function upCount() {
  hits++
}
function update() {
  var healthId = document.getElementById("health");
  healthId.innerHTML = health.toString();
  var hitsId = document.getElementById("hits");
  hitsId.innerHTML = hits.toString();
}


update()