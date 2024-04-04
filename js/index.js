function education_validation(){
    alert("hello")
    var education = signupform.education.value;
    alert(education)
    if (education == "Secondary Education" || education == "Elementary Education"){
        alert("inside")
        signupform.educationaftermath.value = "you cant't submit this form cause your education is " + education;
    }
}