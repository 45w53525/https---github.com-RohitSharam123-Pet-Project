




window.onload = pageload;
/////////// Functions to perform ONload -Functions/////////
function pageload(){

var Form = document.getElementById("form");

var output = document.getElementById("Output");

var AS = document.getElementById("AS");

var Arth = document.getElementById ("Ar");

var HP =  document.getElementById ("hyper");

var ageu = document.getElementById("ageu");

var heg = document.getElementById("heg");

var kg =document.getElementById("kg")

var  myform = document.forms.hform;

var check = document.getElementById("check");

var Teen = document.getElementById("Teen");

var Young = document.getElementById("Young");

var Mature = document.getElementById("Mature");

var Old = document.getElementById("Old");

var Name = document.getElementById("Name");

var LName = document.getElementById("LName");

/////////Jquery to Hide the items on load////////// 

$("#ageu").hide();
$("#heg").hide();
$("#kg").hide();
$("#AS").hide();
$("#Ar").hide();
$("#hyper").hide();
$(Teen).hide();
$(Young).hide();
$(Mature).hide();
$(Old).hide();


myform.onsubmit = myclick;



/////// Fuction which perform multipal functions on single-click/////////////
function myclick (){
    validation();
    exercise();
     hide();
     normal();
     username();
    return false;
  };


//////////// Function for Validation/////////////////
function validation(){

var FirstName = myform.First_name;
if (FirstName.value === "" || FirstName.value === null ){
    FirstName.style.background = "red";
    FirstName.focus();
    return false;
}


var LastName = myform.Last_name;
if (LastName.value === "" || LastName.value === null ){
    LastName.style.background ="red";
    LastName.focus();
    return false;

}

var select = myform.h_c;
if  ( select.value === "XX" ){
   select.style.background = "red";
   
   return false;

}


var Ageofuser = myform.age;
if  ( Ageofuser.value === "SEL" ){
   Ageofuser.style.background = "red";
   Ageofuser.focus();
   return false;

}


var heightofuser = myform.Height;
if (heightofuser.value === "HT"){
    heightofuser.style.background = "red";
    heightofuser.focus();
    return false;

}

var Weightofuser = myform.Weight;
if (Weightofuser.value === "KGS"){
    Weightofuser.style.background = "red";
    Weightofuser.focus();
    return false;
}

};

/////////Function to Hide the another 3 select drop down menus/////////////
 function hide (){

  var select = myform.h_c;
if  ( select.value === "Normal" ){
   ageu.style.display=" inline";
   heg.style.display="inline";
   kg.style.display="inline";

} 
 else{
    ageu.style.display="none";
   heg.style.display="None";
   kg.style.display="None";

}

/////////// Exercises for Medical-condition-Patients///////////

};

function exercise (){
   
var Asthma = myform.h_c;

if (  Asthma.value === "Asthma"){

    AS.style.display ="Block";  
}
else {

    AS.style.display ="none";
}

var Arthritis = myform.h_c;
if (  Arthritis.value === "Arthritis"){

    Arth.style.display ="Block";  
}
else {

    Arth.style.display ="none";
}
var Hyper = myform.h_c;
if (  Hyper.value === "Hypertension"){

    HP.style.display ="Block";  
}
else {

    HP.style.display ="none";
}


}

/////////////// Function which gives the Workout Accourding to the user needs.///////////////
function normal (){

var userage =myform.age;

var userheight =myform.Height;

var userweight =myform.Weight;



if (userage.value === "Teen") {

    if(userheight.value === "H1" || userheight.value ==="H2" || userheight.value === "H3" || userheight.value ==="H4" ){

      if (userweight.value === "W1" || userweight.value ==="W2" || userweight.value ==="W3" || userweight.value ==="W4" ||  userweight.value === "W5"|| userweight.value === "W6"|| userweight.value === "W7"){

          Teen.style.display="block";

      }


    }
}
else{
 
}
if (userage.value === "Young") {

    if(userheight.value === "H1" || userheight.value ==="H2" || userheight.value === "H3" || userheight.value ==="H4" ){

      if (userweight.value === "W1" || userweight.value ==="W2" || userweight.value ==="W3" || userweight.value ==="W4" ||  userweight.value === "W5"|| userweight.value === "W6"|| userweight.value === "W7"){

          Young.style.display="block";

      }


    }
}
else{
  
}
if (userage.value === "Mature") {

    if(userheight.value === "H1" || userheight.value ==="H2" || userheight.value === "H3" || userheight.value ==="H4" ){

      if (userweight.value === "W1" || userweight.value ==="W2" || userweight.value ==="W3" || userweight.value ==="W4" ||  userweight.value === "W5"|| userweight.value === "W6"|| userweight.value === "W7"){

          Mature.style.display="block";

      }


    }
}
else{
  
}
 
if (userage.value === "Oldman") {

    if(userheight.value === "H1" || userheight.value ==="H2" || userheight.value === "H3" || userheight.value ==="H4" ){

      if (userweight.value === "W1" || userweight.value ==="W2" || userweight.value ==="W3" || userweight.value ==="W4" ||  userweight.value === "W5"|| userweight.value === "W6"|| userweight.value === "W7"){

          Old.style.display="block";

      }


    }
}
else{
  
 
}





}


//////////////////Punching user name /////////////////

   function username(){ 

    var username = myform.First_name;
    var userlname = myform.Last_name;
   


    if (username.value!="" && username.value!= null){

      $(Name).html(username.value);

    } if (userlname.value!="" && userlname.value!=null){

        $(LName).html(userlname.value);
  
      }
  




   }










};