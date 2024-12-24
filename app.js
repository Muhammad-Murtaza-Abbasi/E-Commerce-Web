// var signupArr = [];
// var loginArr = [];

// // Signup System

// function signUp() {
//      signupArr[0] = document.getElementById("email1").value
//      signupArr[1]= document.getElementById("password1").value
     
//      // console.log(sigupArr)
// }

// // Login System

// function login(){

//      loginArr[0] = document.getElementById("email2").value
//      loginArr[1] = document.getElementById("password2").value
     
 
//      if(signupArr[0] === loginArr[0] && signupArr[1] === loginArr[1]){
//          alert("Login Email & Passwaord ✔")
//      }
//      else if(signupArr[0] !== loginArr[0]){
//          alert("Incorrect Email ⚠")
//      }
//      else if(signupArr[1] !== loginArr[1]){
//          alert("Incorrect Password ⚠")
//      }
//  }

// var data = JSON.parse(window.localStorage.getItem("data")) || [];



// function signUp() {
//    var name = document.getElementById("name").value;
//    var lname = document.getElementById("lname").value;
//    var email = document.getElementById("email").value;
//    var password = document.getElementById("password").value;
//    var role = document.getElementById("role").value;

//    var getData = JSON.parse(window.localStorage.getItem("data"));

//      // console.log(sigupArr)
//     for(var i =0; i<data.length;i++){
//         if(getData[i].email == email){
//             alert("Bhai Pehly se hi hy ye id new id daal")
//         }
//         else{
//             data.push({
//                 name : name,
//                 lastName : lname,
//                 email : email,
//                 pass : password,
//                 role : role
//              })
//              window.localStorage.setItem("data", JSON.stringify(data));
//         }
//     }
    
// }

// var data = JSON.parse(window.localStorage.getItem("data")) || [];

// function signUp() {
//     var name = document.getElementById("name").value;
//     var lname = document.getElementById("lname").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var role = document.getElementById("role").value;
    
//     var getData = window.localStorage.getItem("data");
//     console.log(getData)
//     for (var i = 0; i < getData.length; i++) {
//         if (getData[i].email == email) {
//             alert("Bhai Pehly se hi hy ye id new id daal")
//             console.log("ghalat")
//         } else {
//             data.push({
//                 name: name,
//                 lastName: lname,
//                 email: email,
//                 pass: password,
//                 role: role
//             })
//             window.localStorage.setItem("data", JSON.stringify(data));
//             console.log("done")
//         }
//     }
// }

var data = JSON.parse(window.localStorage.getItem("data")) || [];

function signUp() {
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // var role = document.getElementById("role").value;
   console.log("hello")
    if (data.find(user => user.email == email)) {
        // alert("Your email Already exist")
        swal("Eror!", "Your email Already exist");
        // swal ( "Oops" ,  "Your email Already exist!" ,  "error" )
        console.log("ghalat")
    } else {
        data.push({
            name: name,
            lastName: lname,
            email: email,
            pass: password,
        })
        window.localStorage.setItem("data", JSON.stringify(data));
        console.log("done")
        alert("Signup Successfully✔")
        // swal("Good job!", "You clicked the button!");
        window.location.href = "login.html"
    }
}

function login() {
    var emails = document.getElementById("email2").value;
    var passwords = document.getElementById("password2").value;

    var user = data.find(user => user.email == emails && user.pass == passwords)

    if (user) {
        window.localStorage.setItem("CurrentUser", JSON.stringify(user))
        alert("Congratulation✔ Welcome to Landing Page")
        window.location.href = "landing.html"
    } else {
        swal("Error!", "Your Email or Password Incorrect⚠️");
    }
}