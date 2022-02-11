let fname = document.getElementById("name");
let email = document.getElementById("email");
let contact = document.getElementById("contact");
let content = document.getElementById("content");

//acess all span tag  by id

let namespan = document.getElementById("namespan");
let emailspan = document.getElementById("emailspan");
let contactspan = document.getElementById("contactspan");
let contentspan = document.getElementById("contentspan");

function validate1() {
  let namevalue = fname.value;
  namespan.innerHTML = "";

  if (namevalue == "") {
    namespan.innerHTML = "Name required";
    return false;
  } else if (namevalue.length < 3) {
    namespan.innerHTML = "Atleast 3 charcaters required";
    return false;
  } else {
    fname.style.border = "solid 2px green";
    return true;
  }
}

function validate2() {
  emailspan.innerHTML = "";
  let mail = email.value;
  console.log(mail);
  if (mail == "") {
    emailspan.innerHTML = "EMail id required";
    return false;
  } else if (!mail.includes("@")) {
    emailspan.innerHTML = "Enter correct email";
    return false;
  } else {
    email.style.border = "solid 2px green";
    return true;
  }
}

function validate3() {
  contactspan.innerHTML = "";
  let number = contact.value;
  console.log(number);
  if (number == "") {
    contactspan.innerHTML = "Mobile number is required";
    return false;
  } else if (number.length != 10) {
    contactspan.innerHTML = "Mobile number should be 10 digits";
    return false;
  } else if (isNaN(number)) {
    contactspan.innerHTML = "Characters are not allowed";
    return false;
  } else {
    contact.style.border = "solid 2px green";
    return true;
  }
}

function validate4() {
  contentspan.innerHTML = "";
  let review = content.value;
  if (review == "") {
    contentspan.innerHTML = "Enter Address!";
    return false;
  } else if (review.length < 10) {
    contentspan.innerHTML = "Enter proper address";
    return false;
  } else {
    content.style.border = "solid 2px green";
    return true;
  }
}

function formValidate() {
  let v1 = validate1();
  let v2 = validate2();
  let v3 = validate3();
  let v4 = validate4();

  return v1 && v2 && v3 && v4;
}
