function ValidateEmail() {
  var inputText = document.form1.getMail;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value=='' || inputText.value.match(mailformat)) {
    return true;
  }
  else {
    document.getElementsByClassName("tooltiptextEmail")[0].style.visibility = "visible";
    inputText.value = "";
    document.form1.getMail.focus();
    setTimeout(function(){
      document.getElementsByClassName("tooltiptextEmail")[0].style.visibility = "hidden"; }, 2500);
    return false;
  }
}

function ValidatePhoneNo() {
  var inputText = document.form1.phoneNo;
  var phoneno = /^\d{10}$/;
  if(inputText.value=='' || (inputText.value.match(phoneno))) {
    return true;
  }
  else{
    document.getElementsByClassName("tooltiptextPhoneNo")[0].style.visibility = "visible";
    inputText.value = "";
    document.form1.phoneNo.focus();
    setTimeout(function(){
      document.getElementsByClassName("tooltiptextPhoneNo")[0].style.visibility = "hidden"; }, 2500);
    return false;
  }
}

function ValidateDate() {
    var dateofbirth = document.form1.dob;
    var dob = dateofbirth.value.split('-');
    var dd = dob[0];
    var mm = dob[1];
    var yy = dob[2];
    if(dateofbirth.value==''){
      return true;
    }

    if (dd == '' || mm == '' || yy == '' || isNaN(dd) || isNaN(mm) || isNaN(yy) || dd == 0 || mm == 0 || yy == 0) {
      document.getElementsByClassName("tooltiptextDate")[0].style.visibility = "visible";
      dateofbirth.value = "";
      document.form1.dob.focus();
      setTimeout(function(){
        document.getElementsByClassName("tooltiptextDate")[0].style.visibility = "hidden"; }, 2500);
      return false;
    }
    else {
      if ((mm == 4 || mm == 6 || mm == 9 || mm == 11) && dd > 30) {
        document.getElementsByClassName("tooltiptextDate")[0].innerHTML = "Please enter Day less than equal to 30!!!";
        document.getElementsByClassName("tooltiptextDate")[0].style.visibility = "visible";
        dateofbirth.value = "";
        document.form1.dob.focus();
        setTimeout(function(){
          document.getElementsByClassName("tooltiptextDate")[0].style.visibility = "hidden"; }, 2500);
        return false;
      }
      if ((mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10 || mm == 12) && dd > 31) {
        document.getElementsByClassName("tooltiptextDate")[0].innerHTML = "Please enter Day less than equal to 31!!!";
        document.getElementsByClassName("tooltiptextDate")[0].style.visibility = "visible";
        dateofbirth.value = "";
        document.form1.dob.focus();
        setTimeout(function(){
          document.getElementsByClassName("tooltiptextDate")[0].style.visibility = "hidden"; }, 2500);
        return false;
      }
      if (mm == 2) {
          var lyear = false;
          if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
              lyear = true;
          }
          if ((lyear == false) && (dd >= 29)) {
            document.getElementsByClassName("tooltiptextDate")[0].innerHTML = "Invalid date format in February!!!";
            document.getElementsByClassName("tooltiptextDate")[0].style.visibility = "visible";
            dateofbirth.value = "";
            document.form1.dob.focus();
            setTimeout(function(){
              document.getElementsByClassName("tooltiptextDate")[0].style.visibility = "hidden"; }, 2500);
            return false;
          }
          if ((lyear == true) && (dd > 29)) {
            document.getElementsByClassName("tooltiptextDate")[0].innerHTML = "Invalid date format in February!!!";
            document.getElementsByClassName("tooltiptextDate")[0].style.visibility = "visible";
            dateofbirth.value = "";
            document.form1.dob.focus();
            setTimeout(function(){
              document.getElementsByClassName("tooltiptextDate")[0].style.visibility = "hidden"; }, 2500);
            return false;
          }
      }
      if (parseFloat(dob[1]) > 12) {
        document.getElementsByClassName("tooltiptextDate")[0].innerHTML = "Please enter Month less than equal to 12!!!";
        document.getElementsByClassName("tooltiptextDate")[0].style.visibility = "visible";
        dateofbirth.value = "";
        document.form1.dob.focus();
        setTimeout(function(){
          document.getElementsByClassName("tooltiptextDate")[0].style.visibility = "hidden"; }, 2500);
        return false;
      }
      if (dob[2].length != 4) {
        document.getElementsByClassName("tooltiptextDate")[0].innerHTML = "Please enter Year in Four Digit (YYYY)!!!";
        document.getElementsByClassName("tooltiptextDate")[0].style.visibility = "visible";
        dateofbirth.value = "";
        document.form1.dob.focus();
        setTimeout(function(){
          document.getElementsByClassName("tooltiptextDate")[0].style.visibility = "hidden"; }, 2500);
        return false;
      }
    }
}

function ValidatePassword() {
  var inputText = document.form1.password;
  if(inputText.value=='' || inputText.value.length>=6) {
    return true;
  }
  else{
    document.getElementsByClassName("tooltiptextPwd")[0].style.visibility = "visible";
    inputText.value = "";
    document.form1.password.focus();
    setTimeout(function(){
      document.getElementsByClassName("tooltiptextPwd")[0].style.visibility = "hidden"; }, 2500);
    return false;
  }
}

function CheckPwdMatch(){
  var confirmPwd = document.form1.confirmPwd;
  var pwd = document.form1.password;
  if(confirmPwd.value=='' || pwd.value==confirmPwd.value) {
    return true;
  }
  else{
    document.getElementsByClassName("tooltiptextConfirmPwd")[0].style.visibility = "visible";
    confirmPwd.value = "";
    document.form1.confirmPwd.focus();
    setTimeout(function(){
      document.getElementsByClassName("tooltiptextConfirmPwd")[0].style.visibility = "hidden"; }, 2500);
    return false;
  }
}
