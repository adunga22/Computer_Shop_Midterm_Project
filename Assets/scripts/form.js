function validateAndSubmit(event){
  event.preventDefault();

  var isValidated = true;

console.log(isValidated);

  $("#emailSpn").html("");
  $("#passwordSpn").html("");

  const email = $("#email").val();
  if(email.endsWith("@gmail.com")){
  }else{
    $("#emailSpn").html("Please enter a valid email!!!");
    isValidated = false;
  }


  if(isValidated == false){
    console.log(isValidated)
    return
  }

  window.location = "orders.html";
}

$(document).ready(function(){
   $(".loginBtn").click(validateAndSubmit);
})

