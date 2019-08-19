let health = 100

function slap() {
  if (health <= 100) {
    health--
    alert(health);
  }
}
function punch() {
  if (health <= 100) {
    health = health - 5;
    console.log(health);
    alert(health);
  }
}
function kick() {
  if (health <= 100) {
    health = health - 10;
    console.log(health);
    alert(health);
  }
}

function update() {
  document.getElementById("health");
}

update()