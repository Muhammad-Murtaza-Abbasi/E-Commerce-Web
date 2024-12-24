
// Card OBJECTS 

var Product = JSON.parse(window.localStorage.getItem('itemsData') || '[]');
var itemsData = [
    {
        id: 1,
        Name: "Shoe Whitener",
        image: "https://www.hamzastore.pk/images/product_gallery/1722091491_8558a1b23aad53259972e910a9728bf1_jpg_750x750_jpg_.webp",
        price: "$97"
    },
    {
        id: 2,
        Name: "Magnetic Chess",
        image: "https://www.hamzastore.pk/images/product_gallery/md_1721820795_MAGNET2.jpg",
        price: "$85"
    }
    ,
    {
        id: 3,
        Name: "Multicolor",
        image: "https://www.hamzastore.pk/images/product_gallery/1721308647_947eccfa9ddf87e3fc3aecbeaa4de4aa.webp",
        price: "$120"
    }
    ,
    {
        id: 4,
        Name: "Triangle 4",
        image: "https://www.hamzastore.pk/images/product_gallery/1722008211_clothsand.jpg",
        price: "$58"
    }
    ,
    {
        id: 5,
        Name: "3Layer",
        image: "https://www.hamzastore.pk/images/product_gallery/1722008331_3layer.jpg",
        price: "$89"
    }
    ,
    {
        id: 6,
        Name: "single-product",
        image: "https://www.hamzastore.pk/images/product_gallery/1721907391_733289D6-2BC7-4093-8889-A43608C7F9BE.webp",
        price: "$97"
    }
    ,
    {
        id: 7,
        Name: "Explution White",
        image: "https://www.hamzastore.pk/images/product_gallery/1664203988_asdsfsfz.jpg",
        price: "$72"
    }
    ,
    {
        id: 8,
        Name: "Pack of 5",
        image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png",
        price: "$46"
    }
    ,
    {
        id: 9,
        Name: "Universal USB", 
        image: "https://www.hamzastore.pk/images/product_gallery/1718737761_Universal-USB-LED-Car-Atmosphere-Starry-Laser-Projection-Light-Auto-Interior-Decorative-Light-4.webp",
        price: "$98"
    }
    ,
    {
        id: 10,
        Name: "Special Bag",
        image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-3.png",
        price: "$96"
    }
    ,
    {
        id: 11,
        Name: "CCTV CAMERA",
        image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-03.png",
        price: "$47"
    }
    ,
    {
        id: 12,
        Name: "Stylish Keyboard",
        image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-02.png",
        price: "$38"
    }
   
]



var cardArea = document.getElementById("allCards")
for (var i = 0; i < itemsData.length; i++) {
    cardArea.innerHTML += `
    <div class="card">
            <div class="image">
                <img src="${itemsData[i].image}" alt="">
            </div>
            <div class="cardText">
            <span class="bold">Product ID No :</span><span>${itemsData[i].id}</span><br><br>
                <span class="bold">Product :</span><span>${itemsData[i].Name}</span><br><br>
                <span class="bold">Price :</span><span>${itemsData[i].price}</span><br>
                <button onclick="add(this)">Add to Card</button>           </div>
        </div>
    `
}

// Card Working 


var currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
var getData = window.localStorage.getItem("userdata");
var getParseData = JSON.parse(getData);
console.log(itemsData[0].id)


// var hadding = document.getElementById('UserName');

// hadding.innerHTML = currentUser.firstName +" "+currentUser.lastName 



var rafOrder = JSON.parse(window.localStorage.getItem('PrintOrder') || '[]');
console.log("hi")

function add(e) {
  var idNode = e.parentNode.childNodes[2].textContent;
  console.log(idNode);
  for (var a = 0; a < itemsData.length; a++) {
    if (idNode == itemsData[a].id) {
      rafOrder.push(itemsData[a])
      window.localStorage.setItem("PrintOrder",JSON.stringify(rafOrder))
      console.log(rafOrder)
    }
  }
  swal("Good job!", "Click on Selected-Card!", "success");
}




