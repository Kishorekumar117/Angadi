
function fn(froo,too){
    var len=froo.value.length;
    var mx=froo.getAttribute("maxlength");
    if(len==mx){
        document.getElementById(too).focus();
    }
}



function fun(){
    
    var today= new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    function appendZero(value){
        return (value<10) ? '0'+value: value;
    }

    var units= parseInt(document.getElementById("input1").value) -  parseInt(document.getElementById("input2").value);
 //    document.getElementById("unit").innerHTML=units;
    var uni=units;
    var eb=parseInt(document.getElementById("input1").value);
 var u_amount=units*8;
    var c_amt=u_amount;



    var r = parseInt(document.getElementById("mySelect").value);
    var z = parseInt(document.getElementById("mySelect1").value);

    
    if(z==2){
        alert("enter the valid water amount")
    }
    if(r==1){
        alert("enter the valid rent amount")
    }
    


    j=(r).toString();



    document.getElementById("water_amount").innerHTML = "&nbsp;";
    document.getElementById("basic_work").innerHTML = "&nbsp;";
    document.getElementById("rent_amount").innerHTML ="&nbsp;";
    document.getElementById("total").innerHTML ="&nbsp;-";
    document.getElementById("current_amount").innerHTML ="";
    // document.getElementById("d").innerHTML="&nbsp;";
    document.getElementById("eb2").innerHTML="&nbsp;";
    document.getElementById("unit").innerHTML="&nbsp;";
    document.getElementById("c_a").innerHTML="&nbsp;";
    document.getElementById("p").innerHTML="&nbsp;";



    if(document.getElementById("input1").value=="" || document.getElementById("input2").value==""){
        alert("pls enter the readings da");
    }
    else{
        if(r==6000){
            total = 6000 + u_amount + z;
            document.getElementById("water_amount").innerHTML = z;
            document.getElementById("basic_work").innerHTML = "-";
        }else if(r==3300){
            total = 3300 + u_amount + z + 100;
            document.getElementById("water_amount").innerHTML = z;
            document.getElementById("basic_work").innerHTML = "100";
        }else if(r==4000){
            total = 4000 + u_amount + z ;
            document.getElementById("water_amount").innerHTML = z;
            document.getElementById("basic_work").innerHTML = "-";
        }
        document.getElementById("rent_amount").innerHTML = j[0]+","+j[1]+j[2]+j[3];
        i=(total).toString();
        document.getElementById("total").innerHTML = i[0]+","+i[1]+i[2]+i[3];
        document.getElementById("current_amount").innerHTML = u_amount;
        document.getElementById("d").innerHTML=date;
        document.getElementById("eb2").innerHTML="EB Readings :"+eb;
        document.getElementById("unit").innerHTML="Unit :"+uni;
        document.getElementById("c_a").innerHTML="Current Amount :"+c_amt;
        document.getElementById("p").innerHTML=units;

    }

 }
 function fun2(){
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";

    document.getElementById("water_amount").innerHTML = "&nbsp;";
    document.getElementById("basic_work").innerHTML = "&nbsp;";
    document.getElementById("rent_amount").innerHTML ="&nbsp;";
    document.getElementById("total").innerHTML ="&nbsp;-";
    document.getElementById("current_amount").innerHTML ="";

    document.getElementById("mySelect").value="1"
    document.getElementById("mySelect1").value="2"
    // document.getElementById("d").innerHTML="&nbsp;";
    document.getElementById("eb2").innerHTML="&nbsp;";
    document.getElementById("unit").innerHTML="&nbsp;";
    document.getElementById("c_a").innerHTML="&nbsp;";
    document.getElementById("p").innerHTML="&nbsp;";
 }


