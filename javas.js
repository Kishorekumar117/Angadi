function numb(){
    let num=document.getElementById('data').value;
    if(num.length==10 && num[0]>=6 && num[0]<=9){
        document.getElementById("res").innerHTML='valid number';
    }
    else{
        document.getElementById("res").innerHTML='not valid number';
    }
}