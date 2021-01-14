function signupHandiling(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    let obj={
        "pass" :pass,
        "name" : name

    }
    localStorage.setItem(email,JSON.stringify(obj));
}

function loginHandiling(){
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    let obj=JSON.parse(localStorage.getItem(email));
    obj["yp"]="bro";
    console.log(obj);
    if(pass===obj['pass']){
        profileHandeler(obj)
        alert("access granted");
        localStorage.setItem("useremail",email);
        document.getElementById("login").setAttribute('action','./profile.html');
        
    }
    else{
        alert("access denide");
    }
}

function profileHandeler(obj){
    console.log(obj);
}