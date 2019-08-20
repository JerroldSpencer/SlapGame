let user = {
  health: 100,
  hits: 0,
  items: []
}


let items = {
  fire: { name: 'Fire', modifier: 2, description: 'IT BURNS!' },
  potion: { name: 'Potion', modifier: 4, description: 'I feel better' },
  shield: { name: 'Shield', modifier: 2, description: 'Leave me alone' }
}

function giveFire() {
  user.items.push(items.fire)
}
function givePotion() {
  user.items.push(items.potion)
}
function giveshield() {
  user.items.push(items.shield)
}

function addMods() {

}

function slap() {
  if (user.health <= 100) {
    user.health--
    upCount()
    update()
    console.log(user.hits);
  }
}
function punch() {
  if (user.health <= 100) {
    user.health = user.health - 5;
    upCount()
    update()
    console.log(user.hits);
  }
}
function kick() {
  if (user.health <= 100) {
    user.health = user.health - 10;
    upCount()
    update()
    console.log(user.hits);
  }
}

function upCount() {
  user.hits++
}
function update() {
  var healthId = document.getElementById("health");
  healthId.innerHTML = user.health.toString();
  var hitsId = document.getElementById("hits");
  hitsId.innerHTML = user.hits.toString();
}


update()