const search =() =>{
    const searchbox=document.getElementById("inp").value.toUpperCase();
    const storeitems= document.getElementById("product-list")
    const product=document.querySelectorAll(".product")
    const pname=storeitems.getElementsByTagName("h2")

    for(var i=0;i<pname.length;i++){
        let match=product[i].getElementsByTagName("h2")[0];

        if(match){
           let textvalue= match.textContent || match.innerHTML
           
           if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display="";
           }
            else{
                product[i].style.display="none";
            }
        }
    }
}
const search_brand =() =>{
    const search_b=document.getElementById("inp").value.toUpperCase();
    const laptop=["l","la","lap","lapt","lapto","laptop"]
    const watch=["w","wa","wat","watc","watch","watchs"]
    const mobile=["m","mo","mob","mobi","mobil","mobile"]
    const phone=["p","ph","pho","phon","phone","phones"]
    const book=["b","bo","boo","book","books","books"]
    const shoes=["s","sh","sho","shoe","shoes","shoes"]



    for(var i=0;i<laptop.length;i++){

        if(search_b.toUpperCase()==laptop[i].toUpperCase()){
            document.getElementById("Category").innerHTML="Laptop";

            document.getElementById("checkbox1").style.display="";
            document.getElementById("checkbox2").style.display="";
            document.getElementById("checkbox3").style.display="";
            document.getElementById("checkbox4").style.display="";
            document.getElementById("checkbox5").style.display="";
            document.getElementById("checkbox6").style.display="";
            document.getElementById("checkbox7").style.display="";
            document.getElementById("checkbox8").style.display="";

            document.getElementById("brands1").innerHTML="Hp";
            document.getElementById("brands2").innerHTML="Lenova";
            document.getElementById("brands3").innerHTML="ASUS";
            document.getElementById("brands4").innerHTML="Acer";
            document.getElementById("brands5").innerHTML="Dell";
            document.getElementById("brands6").innerHTML="MSI";
            document.getElementById("brands7").innerHTML="Microsoft";
            document.getElementById("brands8").innerHTML="Razer";
            document.getElementById("brands14").innerHTML="VAIO";
            document.getElementById("brands9").innerHTML="AVITA";
            document.getElementById("brands10").innerHTML="Lava";
            document.getElementById("brands11").innerHTML="Fujitsu";
            document.getElementById("brands12").innerHTML="GIGABYTE";
            document.getElementById("brands13").innerHTML="Apple";

            document.getElementById("brands1_").innerHTML="Hp";
            document.getElementById("brands2_").innerHTML="Lenova";
            document.getElementById("brands3_").innerHTML="ASUS";
            document.getElementById("brands4_").innerHTML="Acer";
            document.getElementById("brands5_").innerHTML="Dell";
            document.getElementById("brands6_").innerHTML="MSI";
            document.getElementById("brands7_").innerHTML="Microsoft";
            document.getElementById("brands8_").innerHTML="Razer";
            

            document.getElementById("Price-name").innerHTML="Price Desktops";
            document.getElementById("Price0").innerHTML="20,000";
            document.getElementById("Price1").innerHTML="20,000<font color=red>&nbsp-&nbsp₹</font>30,000";
            document.getElementById("Price2").innerHTML="30,000<font color=red>&nbsp-&nbsp₹</font>40,000";
            document.getElementById("Price3").innerHTML="40,000<font color=red>&nbsp-&nbsp₹</font>50,000";
            document.getElementById("Price4").innerHTML="50,000";
            document.getElementById("drop_brand").style.display="";

            break;  
        }else if(search_b.toUpperCase()==mobile[i].toUpperCase() || search_b.toUpperCase()==phone[i].toUpperCase()){
            document.getElementById("Category").innerHTML="<font color=black>Phones & Mobiles</font><br>&nbsp;&nbsp;Smart Phones<br>&nbsp;&nbsp;Basic Mobiles";

            document.getElementById("checkbox1").style.display="";
            document.getElementById("checkbox2").style.display="";
            document.getElementById("checkbox3").style.display="";
            document.getElementById("checkbox4").style.display="";
            document.getElementById("checkbox5").style.display="";
            document.getElementById("checkbox6").style.display="";
            document.getElementById("checkbox7").style.display="";
            document.getElementById("checkbox8").style.display="";

            document.getElementById("brands1").innerHTML="Samsung";
            document.getElementById("brands2").innerHTML="Redmi";
            document.getElementById("brands3").innerHTML="Oneplus";
            document.getElementById("brands4").innerHTML="Tecno";
            document.getElementById("brands5").innerHTML="Oppo";
            document.getElementById("brands6").innerHTML="Vivo";
            document.getElementById("brands7").innerHTML="Apple";
            document.getElementById("brands8").innerHTML="Google";
            document.getElementById("brands14").innerHTML="IQOO";
            document.getElementById("brands9").innerHTML="Poco";
            document.getElementById("brands10").innerHTML="Lava";
            document.getElementById("brands11").innerHTML="GIONEE";
            document.getElementById("brands12").innerHTML="Generic";
            document.getElementById("brands13").innerHTML="Honor";

            document.getElementById("brands1_").innerHTML="Samsung";
            document.getElementById("brands2_").innerHTML="Redmi";
            document.getElementById("brands3_").innerHTML="Oneplus";
            document.getElementById("brands4_").innerHTML="Tecno";
            document.getElementById("brands5_").innerHTML="Oppo";
            document.getElementById("brands6_").innerHTML="Vivo";
            document.getElementById("brands7_").innerHTML="Apple";
            document.getElementById("brands8_").innerHTML="Google";
           


            document.getElementById("Price-name").innerHTML="Price Desktops";
            document.getElementById("Price0").innerHTML="1,000";
            document.getElementById("Price1").innerHTML="1,000<font color=red>&nbsp-&nbsp₹</font>5,000";
            document.getElementById("Price2").innerHTML="5,000<font color=red>&nbsp-&nbsp₹</font>10,000";
            document.getElementById("Price3").innerHTML="10,000<font color=red>&nbsp-&nbsp₹</font>20,000";
            document.getElementById("Price4").innerHTML="20,000";

            document.getElementById("drop_brand").style.display="";

            break;

        }else if(search_b.toUpperCase()==watch[i].toUpperCase()){
            document.getElementById("Category").innerHTML="<font color=black>Men's Watches</font><br>&nbsp;Men's Wrist Watches<br><font color=black>Wearable Techonology</font><br>&nbsp;Smart watches<br><font color=black>Active Trackers</font><br>&nbsp;Women's Watches";

            document.getElementById("checkbox1").style.display="";
            document.getElementById("checkbox2").style.display="";
            document.getElementById("checkbox3").style.display="";
            document.getElementById("checkbox4").style.display="";
            document.getElementById("checkbox5").style.display="";
            document.getElementById("checkbox6").style.display="";
            document.getElementById("checkbox7").style.display="";
            document.getElementById("checkbox8").style.display="";

            document.getElementById("brands1").innerHTML="Casio";
            document.getElementById("brands2").innerHTML="boAt";
            document.getElementById("brands3").innerHTML="Shocknshop";
            document.getElementById("brands4").innerHTML="Fastrack";
            document.getElementById("brands5").innerHTML="TIMEX";
            document.getElementById("brands6").innerHTML="Noise";
            document.getElementById("brands7").innerHTML="SF";
            document.getElementById("brands8").innerHTML="Titan";
            document.getElementById("brands14").innerHTML="Carts";
            document.getElementById("brands9").innerHTML="Shotes";
            document.getElementById("brands10").innerHTML="Fades";
            document.getElementById("brands11").innerHTML="Note";
            document.getElementById("brands12").innerHTML="Sylvi";
            document.getElementById("brands13").innerHTML="V2A";

            document.getElementById("brands1_").innerHTML="Casio";
            document.getElementById("brands2_").innerHTML="boAt";
            document.getElementById("brands3_").innerHTML="Shocknshop";
            document.getElementById("brands4_").innerHTML="Fastrack";
            document.getElementById("brands5_").innerHTML="TIMEX";
            document.getElementById("brands6_").innerHTML="Noise";
            document.getElementById("brands7_").innerHTML="SF";
            document.getElementById("brands8_").innerHTML="Titan";
           

            document.getElementById("Price-name").innerHTML="Price Desktops";
            document.getElementById("Price0").innerHTML="2,000";
            document.getElementById("Price1").innerHTML="2,000<font color=red>&nbsp;-&nbsp;₹</font>5,000";
            document.getElementById("Price2").innerHTML="5,000<font color=red>&nbsp;-&nbsp;₹</font>10,000";
            document.getElementById("Price3").innerHTML="10,000<font color=red>&nbsp;-&nbsp;₹</font>20,000";
            document.getElementById("Price4").innerHTML="20,000";

            document.getElementById("drop_brand").style.display="";
            break;

        }else if(search_b.toUpperCase()==shoes[i].toUpperCase()){
            document.getElementById("Category").innerHTML="<font color=black>Shoes</font><br>&nbsp;&nbsp;Boys Running Shoes<br>&nbsp;&nbsp;Girls Running Shoes<br>&nbsp;&nbsp;<font color=black>Sneakers</font><br>&nbsp;&nbsp;Walking Shoes";

            document.getElementById("checkbox1").style.display="";
            document.getElementById("checkbox2").style.display="";
            document.getElementById("checkbox3").style.display="";
            document.getElementById("checkbox4").style.display="";
            document.getElementById("checkbox5").style.display="";
            document.getElementById("checkbox6").style.display="";
            document.getElementById("checkbox7").style.display="";
            document.getElementById("checkbox8").style.display="";

            document.getElementById("brands1").innerHTML="Nike";
            document.getElementById("brands2").innerHTML="Reebok";
            document.getElementById("brands3").innerHTML="Puma";
            document.getElementById("brands4").innerHTML="BATA";
            document.getElementById("brands5").innerHTML="Skechers";
            document.getElementById("brands6").innerHTML="Campus";
            document.getElementById("brands7").innerHTML="U.S.POLO ASSN";
            document.getElementById("brands8").innerHTML="Nivia";
            document.getElementById("brands14").innerHTML="Shoefly";
            document.getElementById("brands9").innerHTML="LANCER";
            document.getElementById("brands10").innerHTML="ASIAN";
            document.getElementById("brands11").innerHTML="Flavia";
            document.getElementById("brands12").innerHTML="puma";
            document.getElementById("brands13").innerHTML="Nivia";

            document.getElementById("brands1_").innerHTML="Nike";
            document.getElementById("brands2_").innerHTML="Reebok";
            document.getElementById("brands3_").innerHTML="Puma";
            document.getElementById("brands4_").innerHTML="BATA";
            document.getElementById("brands5_").innerHTML="Skechers";
            document.getElementById("brands6_").innerHTML="Campus";
            document.getElementById("brands7_").innerHTML="U.S.POLO ASSN";
            document.getElementById("brands8_").innerHTML="Nivia";
            

            document.getElementById("Price-name").innerHTML="Price Desktops";
            document.getElementById("Price0").innerHTML="500";
            document.getElementById("Price1").innerHTML="500<font color=red>&nbsp-&nbsp₹</font>1,000";
            document.getElementById("Price2").innerHTML="1,000<font color=red>&nbsp-&nbsp₹</font>2,500";
            document.getElementById("Price3").innerHTML="2,500<font color=red>&nbsp-&nbsp₹</font>5,000";
            document.getElementById("Price4").innerHTML="5,000";

            document.getElementById("drop_brand").style.display="";

            break;

        }
        else{
            document.getElementById("Category").innerHTML="&nbsp";

            document.getElementById("checkbox1").style.display="none";
            document.getElementById("checkbox2").style.display="none";
            document.getElementById("checkbox3").style.display="none";
            document.getElementById("checkbox4").style.display="none";
            document.getElementById("checkbox5").style.display="none";
            document.getElementById("checkbox6").style.display="none";
            document.getElementById("checkbox7").style.display="none";
            document.getElementById("checkbox8").style.display="none";

            document.getElementById("brands1").innerHTML="&nbsp";
            document.getElementById("brands2").innerHTML="&nbsp";
            document.getElementById("brands3").innerHTML="&nbsp";
            document.getElementById("brands4").innerHTML="&nbsp";
            document.getElementById("brands5").innerHTML="&nbsp";
            document.getElementById("brands6").innerHTML="&nbsp";
            document.getElementById("brands7").innerHTML="&nbsp";
            document.getElementById("brands8").innerHTML="&nbsp";
            document.getElementById("brands14").innerHTML="&nbsp";
            document.getElementById("brands9").innerHTML="&nbsp";
            document.getElementById("brands10").innerHTML="&nbsp";
            document.getElementById("brands11").innerHTML="&nbsp";
            document.getElementById("brands12").innerHTML="&nbsp";
            document.getElementById("brands13").innerHTML="&nbsp";

            document.getElementById("brands1_").innerHTML="&nbsp";
            document.getElementById("brands2_").innerHTML="&nbsp";
            document.getElementById("brands3_").innerHTML="&nbsp";
            document.getElementById("brands4_").innerHTML="&nbsp";
            document.getElementById("brands5_").innerHTML="&nbsp";
            document.getElementById("brands6_").innerHTML="&nbsp";
            document.getElementById("brands7_").innerHTML="&nbsp";
            document.getElementById("brands8_").innerHTML="&nbsp";
            

            document.getElementById("Price-name").innerHTML="Price";

            document.getElementById("Price0").innerHTML="&nbsp";
            document.getElementById("Price1").innerHTML="<font color=red>- &nbsp ₹ &nbsp&nbsp&nbsp</font>";
            document.getElementById("Price2").innerHTML="<font color=red>- &nbsp ₹ &nbsp&nbsp&nbsp</font>";
            document.getElementById("Price3").innerHTML="<font color=red>- &nbsp ₹ &nbsp&nbsp&nbsp</font>";
            document.getElementById("Price4").innerHTML="&nbsp";

            document.getElementById("drop_brand").style.display="none";

        }
    }
    
}