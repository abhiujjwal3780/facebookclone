
var email = localStorage.getItem("useremail");
let obj=JSON.parse(localStorage.getItem(email));

document.getElementById("name").value = String(obj.name);
document.getElementById("inputEmail4").value=email;

function submitdata(){

    var name=document.getElementById("name").value;
    var email=document.getElementById("inputEmail4").value;
    var birthday=document.getElementById("birthday").value;
    var Hobbies=document.getElementById("Hobbies").value;
    var websites=document.getElementById("websites").value;
    var profilepic=document.getElementById("profilepic").value;
    var inputaddress=document.getElementById("inputAddress").value;
    var inputcity=document.getElementById("inputCity").value;
    var inputState=document.getElementById("inputState").value;

    var n = obj.name;
    var p = obj.pass;
    //abhishek change this
    let prevpost=[];
    let userobj=JSON.parse(localStorage.getItem(email));
    if('mypost' in userobj){
        prevpost=userobj.mypost;

    }
    // upto here
    let user = {
    "mypost":prevpost,   
    "Name":name,
    "Email":email,
    "Birthday":birthday,
    "Hobbies":Hobbies,
    "Websites":websites,
    "Cover":'',
    "Profilepic":profilepic,
    "Address":inputaddress,
    "City":inputcity,
    "State":inputState,
    "name":n,
    "pass":p,
    };
    user.Cover = JSON.parse(localStorage.getItem('CoverImg'));
    localStorage.removeItem('CoverImg');
    localStorage.setItem(email,JSON.stringify(user));
    alert("Data submited succesfully....");
}

document.querySelector('#cover').addEventListener("change",function(){
    console.log(this.files);
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.addEventListener("load",()=>{
        var x = reader.result;
        localStorage.setItem('CoverImg',JSON.stringify(x));
    })
    
})