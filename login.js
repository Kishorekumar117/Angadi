
function login(){
    let user=document.getElementById("us").value;
    let password=document.getElementById("pass").value;
    if( user=="kishore" && password=="kishore@123"){
        window.location.href="./angadi_home_page.html"
    }else{
        document.getElementById("result").innerHTML="*invalid username or password"
    }
}
