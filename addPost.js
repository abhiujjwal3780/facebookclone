function addPost(){
    let email=localStorage.getItem("useremail");
    let obj=JSON.parse(localStorage.getItem(email));
    let arr=obj["mypost"];
    let newpost=document.getElementById("Post").value;
    arr.push(newpost);
    localStorage.setItem(email,JSON.stringify(obj));
    appendpost(newpost);
}
function appendpost(post){
    let postdiv=document.getElementById("postdiv")
    let postbtn=document.getElementById("addpost");
    postbtn.remove();
    let newpost=document.createElement("div");
    newpost.innerHTML=post; 
    newpost.className="posts"
    postdiv.appendChild(newpost);
    postdiv.appendChild(postbtn);
}