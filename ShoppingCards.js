

var currentUser = JSON.parse(window.localStorage.getItem("CurrentUser"));
var getData = window.localStorage.getItem("data");
var getParseData = JSON.parse(getData);
console.log(currentUser)

// var heading = document.getElementById('UserName');
// heading.innerHTML = currentUser.firstName + " " + currentUser.lastName

var getOrder = JSON.parse(window.localStorage.getItem("PrintOrder"))

console.log(getOrder)
var cardArea = document.getElementById("cardArea")


for(var x = 0; x < getParseData.length; x++){
    console.log("hogyA")
 if (getOrder.length == 0){
cardArea.innerHTML = `<h2>Empty<h2>`
document.getElementById("order").style.display="none"
  }
}
  // console.log(getParseData[1].CardId)
    for (var j = 0; j < getOrder.length; j++) {
      cardArea.innerHTML += `
      <div class="card">
        <div class="image">
          <img src="${getOrder[j].image}" alt="">
        </div>
        <div class="cardText">
          <span class="bold">Product ID No# :</span><span>${getOrder[j].id}</span><br>
          <span class="bold">Product :</span><span>${getOrder[j].Name}</span><br>
          <span class="bold">Price :</span><span>${getOrder[j].price}</span><br>
          <button onclick="remove(this)">Remove to Card</button>
        </div>
      </div>
    `;
    }
 

    console.log(currentUser.email)
function order() {
    for (var p = 0; p < getParseData.length; p++) {
        console.log("hi")
      if (currentUser.email == getParseData[p].email) {
        if (!getParseData[p].CardId) {
          getParseData[p].CardId = [];
        }
        for (var l = 0; l < getOrder.length; l++) {
          getParseData[p].CardId.push(getOrder[l]);
        }
        getOrder.splice(0);
        window.localStorage.setItem("PrintOrder", JSON.stringify(getOrder));
        window.localStorage.setItem("data", JSON.stringify(getParseData));
        swal("Nice Job","Congratulation✅ Order Accepted")
      }
    }
    // window.location.href = "landing.html";
  }


// Removing Cards
function remove(e) {
  var idNode = e.parentNode.childNodes[2].textContent;
  console.log(idNode);

  for (var a = 0; a < getOrder.length; a++) {
    
      
        if (idNode == getOrder[a].id) {
        
          getOrder.splice(a, 1)
         localStorage.setItem("PrintOrder", JSON.stringify(getOrder));

          if(getOrder.length == 0){
             cardArea.innerHTML = `<h2>Click on the Add card<h2>`
             document.getElementById("order").style.display="none"
           }
        }
      }

      
        e.parentNode.parentNode.remove()
        alert("The Card is Removed✅")
    }
  
console.log(cardArea.innerText )
