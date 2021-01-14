var email = localStorage.getItem("useremail");
let obj=JSON.parse(localStorage.getItem(email));
let postarr=obj.mypost;
let postdiv=document.getElementById("postdiv")
let postbtn=document.getElementById("addpost");
postbtn.remove();

for(post of postarr){
    let newpost=document.createElement("div");
    newpost.innerHTML=post; 
    newpost.className="posts"
    postdiv.appendChild(newpost);
}
postdiv.appendChild(postbtn);