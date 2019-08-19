let health = 100

function slap() {
  if (health <= 100) {
    health--
    alert(health);
  }
}
function punch() {
  if (health <= 100) {
    health - 5
    //alert(health);
  }
}
function kick() {
  if (health <= 100) {
    health - 10
    //alert(health);
  }
}

function update() {
  let health = document.getElementById("health");
}

update()