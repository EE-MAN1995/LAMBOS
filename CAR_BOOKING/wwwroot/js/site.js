// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets
// Write your JavaScript code.



let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("name").value;
    let m = document.getElementById("em").value;
    let l = document.getElementById("tel").value;
    /*let txt = document.getElementById("txte").value;*/
    // If x is Not a Number or less than one or greater than 10
    let text;
    let text2;
    let text3;
    let text4;

    text4 = null;
    var atposition = m.indexOf("@");
    var dotposition = m.lastIndexOf("."); 
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    var letters =/^[A-Za-z]+$/;



    if (!/^[a-zA-Z ]*$/g.test(x) || x ==
        "") {

   

        alert("Invailed Name")

        text4 = " "
    }

 



  else  if (isNaN(l) || l == "") {

        alert("Invailed Phone Number ")
        text4 = ""
       
    }



 



    else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= m.length || m == "") {
        text4 = ""
        alert("Invailed Email Input")
    }





   else {


        text3 = ""
        text  = ""
        text2 = ""
      

            alert("Sucessfuly Send")
    }




   
    

    
}





function Send() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("full_name").value;
    let m = document.getElementById("e_mail").value;
    let l = document.getElementById("tel_phone").value;
  
    /*let txt = document.getElementById("txte").value;*/
    // If x is Not a Number or less than one or greater than 10
    let text;
    let text2;
    let text3;
    let text4;

    text4 = null;
    var atposition = m.indexOf("@");
    var dotposition = m.lastIndexOf(".");
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    var letters = /^[A-Za-z]+$/;



    if (!/^[a-zA-Z ]*$/g.test(x) || x ==
        "") {



        alert("Invailed Name")

        text4 = " "
    }





    else if (isNaN(l) || l == "") {

        alert("Invailed Phone Number ")
        text4 = ""

    }

    
  






    else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= m.length || m == "") {
        text4 = ""
        alert("Invailed Email Input")
    }





    else {


        text3 = ""
        text = ""
        text2 = ""


        alert("Sucessfuly Send")
    }








}










document.getElementById("cost").innerHTML = 200 
var totla = 200 * 5;


document.getElementById("total").innerHTML = parseFloat(totla)  


var Cost;





function days(selectObject) {


    var mValue = parseInt(selectObject.value)

    Days = mValue;

    var cost = parseInt(document.getElementById("cost").innerHTML);



    var totla = cost * mValue;



    document.getElementById("total").innerHTML = totla




}


var Days = mValue;


function getComboA(selectObject) {


    var Value = selectObject.value;
 



 

    switch (Value) {


        case "volvo":
 

            var r = parseInt(document.getElementById("total").innerHTML) / parseInt(document.getElementById("cost").innerHTML)

            document.getElementById("cost").innerHTML = 200;
            Cost = document.getElementById("cost").innerHTML = 200;






            document.getElementById("total").innerHTML = Cost * r


            break;  

        case "saab":

            var r = parseInt(document.getElementById("total").innerHTML) / parseInt(document.getElementById("cost").innerHTML)
        
            document.getElementById("cost").innerHTML = 200;
            Cost = document.getElementById("cost").innerHTML = 200;

 


   

            document.getElementById("total").innerHTML = Cost * r



  
            break;

        case "opel":


            var r = parseInt(document.getElementById("total").innerHTML) / parseInt(document.getElementById("cost").innerHTML)

            document.getElementById("cost").innerHTML = 300;
            Cost = document.getElementById("cost").innerHTML = 300;






            document.getElementById("total").innerHTML = Cost * r

            break;

        case "audi":


            var r = parseInt(document.getElementById("total").innerHTML) / parseInt(document.getElementById("cost").innerHTML)

            document.getElementById("cost").innerHTML = 400;
            Cost = document.getElementById("cost").innerHTML = 400;






            document.getElementById("total").innerHTML = Cost * r

            break;

        case "camri":


            var r = parseInt(document.getElementById("total").innerHTML) / parseInt(document.getElementById("cost").innerHTML)

            document.getElementById("cost").innerHTML = 100;
            Cost = document.getElementById("cost").innerHTML = 100;






            document.getElementById("total").innerHTML = Cost * r

            break;

        case "lambo":


            var r = parseInt(document.getElementById("total").innerHTML) / parseInt(document.getElementById("cost").innerHTML)

            document.getElementById("cost").innerHTML = 300;
            Cost = document.getElementById("cost").innerHTML = 300;






            document.getElementById("total").innerHTML = Cost * r

            break;



    }  


  

                                         



 

}
 






//function book1(cost , name) {
//    var r = parseInt(document.getElementById("total").innerHTML) / parseInt(document.getElementById("cost").innerHTML)
//    document.getElementById("cr1").innerHTML = 'Saab';
//    document.getElementById("cr1").value = name;


//    document.getElementById("cost").innerHTML = parseInt(cost);


//    var totla = parseInt(cost) * parseInt(r);
//    document.getElementById("total").innerHTML = totla





//    document.getElementById("cr2").innerHTML = 'Volvo';
//    document.getElementById("cr2").value =  'volvo';

//}










//switch (v) {



//    case "Volvo":

//        document.getElementById("cost").innerHTML = "30" + "$"

//        break;


//    case "Saab":

//        document.getElementById("cost").innerHTML = "40" + "$"

//        break;
//    case "Audi":

//        document.getElementById("cost").innerHTML = "50" + "$"

//        break;


//}














//function click1() {




//    for (var c = 0; c < 15; c++) {


//        $("#Cars").animate({

//            "opacity":"0.5"
//            })

//    }


//    setInterval(function () {
//        document.getElementById("IM1").src = "/SSSSSS/e.jpg"
//        document.getElementById("h1").innerHTML = "Mercaides"
//        document.getElementById("IM2").src = "/SSSSSS/e.jpg"
//        document.getElementById("h2").innerHTML = "Mercaides"
//    }, 2000)



//    $("#Cars").animate({

//        "opacity": "5.0"
//    })



//    //document.getElementById("IM3").src = "/SSSSSS/car_B.jpg"
//    //document.getElementById("h3").innerHTML = "Mercaides"

//    //document.getElementById("IM4").src = "/SSSSSS/car_C.jpg"
//    //document.getElementById("h4").innerHTML = "Mercaides"

//    //document.getElementById("IM5").src = "/SSSSSS/car_D.jpg"
//    //document.getElementById("h5").innerHTML = "Mercaides"

//    //document.getElementById("IM6").src = "/SSSSSS/d.jpg"
//    //document.getElementById("h6").innerHTML = "Mercaides"







//    //for (var s = 0; s < 15; s++) {



//    //    $(document).ready(function () {



//    //        $("#Cars").animate({


//    //            "opacity": "0.2"


//    //            })



//    //    })



//    //}


//    //$(document).ready(function () {



//    //    $("#Cars").animate({


//    //        "opacity": "5.0"


//    //    })



//    //})






//}

 



 






document.getElementById("lxcost").innerHTML = 800;

var Total = 800 * 5;


document.getElementById("lxtotal").innerHTML =  4000
var Cost;





function lxdays(selectObject) {


    var mValue = parseInt(selectObject.value)

    Days = mValue;

    var cost = parseInt(document.getElementById("lxcost").innerHTML);



    var totla = cost * mValue;



    document.getElementById("lxtotal").innerHTML = totla




}


var Days = mValue;


function lxdgetComboA(selectObject) {



    var Value = selectObject.value;






    switch (Value) {


        case "volvo":


            var r = parseInt(document.getElementById("lxtotal").innerHTML) / parseInt(document.getElementById("lxcost").innerHTML)

            document.getElementById("lxcost").innerHTML = 800;
            Cost = document.getElementById("lxcost").innerHTML = 800;






            document.getElementById("lxtotal").innerHTML = Cost * r


            break;

        case "saab":

            var r = parseInt(document.getElementById("lxtotal").innerHTML) / parseInt(document.getElementById("lxcost").innerHTML)

            document.getElementById("lxcost").innerHTML = 700;
            Cost = document.getElementById("lxcost").innerHTML = 700;






            document.getElementById("lxtotal").innerHTML = Cost * r




            break;

        case "opel":


            var r = parseInt(document.getElementById("lxtotal").innerHTML) / parseInt(document.getElementById("lxcost").innerHTML)

            document.getElementById("lxcost").innerHTML = 900;
            Cost = document.getElementById("lxcost").innerHTML = 900;






            document.getElementById("lxtotal").innerHTML = Cost * r

            break;

        case "audi":


            var r = parseInt(document.getElementById("lxtotal").innerHTML) / parseInt(document.getElementById("lxcost").innerHTML)

            document.getElementById("lxcost").innerHTML = 900;
            Cost = document.getElementById("lxcost").innerHTML = 900;






            document.getElementById("lxtotal").innerHTML = Cost * r

            break;


    }



















}





























function lux_myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("lux_name").value;
    let m = document.getElementById("lux_em").value;
    let l = document.getElementById("lux_tel").value;
    /*let txt = document.getElementById("txte").value;*/
    // If x is Not a Number or less than one or greater than 10
    let text;
    let text2;
    let text3;
    let text4;

    text4 = null;
    var atposition = m.indexOf("@");
    var dotposition = m.lastIndexOf(".");
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    var letters = /^[A-Za-z]+$/;



    if (!/^[a-zA-Z ]*$/g.test(x) || x ==
        "") {



        alert("Invailed Name")

        text4 = " "
    }





    else if (isNaN(l) || l == "") {

        alert("Invailed Phone Number ")
        text4 = ""

    }







    else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= m.length || m == "") {
        text4 = ""
        alert("Invailed Email Input")
    }





    else {


        text3 = ""
        text = ""
        text2 = ""


        alert("Sucessfuly Send")
    }








}
















function ltSend() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("lt_name").value;
    let m = document.getElementById("lt_mail").value;
    let l = document.getElementById("lt_phone").value;
   
    /*let txt = document.getElementById("txte").value;*/
    // If x is Not a Number or less than one or greater than 10
    let text;
    let text2;
    let text3;
    let text4;

    text4 = null;
    var atposition = m.indexOf("@");
    var dotposition = m.lastIndexOf(".");
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    var letters = /^[A-Za-z]+$/;



    if (!/^[a-zA-Z ]*$/g.test(x) || x ==
        "") {



        alert("Invailed Name")

        text4 = " "
    }





    else if (isNaN(l) || l == "") {

        alert("Invailed Phone Number ")
        text4 = ""

    }

    







    else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= m.length || m == "") {
        text4 = ""
        alert("Invailed Email Input")
    }





    else {


        text3 = ""
        text = ""
        text2 = ""


        alert("Sucessfuly Send")
    }








}






function lkSend() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("NAME").value;
    let m = document.getElementById("EMAIL").value;
    let l = document.getElementById("TELEPHONE").value;
   
    /*let txt = document.getElementById("txte").value;*/
    // If x is Not a Number or less than one or greater than 10
    let text;
    let text2;
    let text3;
    let text4;

    text4 = null;
    var atposition = m.indexOf("@");
    var dotposition = m.lastIndexOf(".");
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    var letters = /^[A-Za-z]+$/;



    if (!/^[a-zA-Z ]*$/g.test(x) || x ==
        "") {



        alert("Invailed Name")

        text4 = " "
    }





    else if (isNaN(l) || l == "") {

        alert("Invailed Phone Number ")
        text4 = ""

    }

    




    else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= m.length || m == "") {
        text4 = ""
        alert("Invailed Email Input")
    }





    else {


        text3 = ""
        text = ""
        text2 = ""


        alert("Sucessfuly Send")
    }








}


