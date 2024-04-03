function education_validation(){
    var education = signupform.education.value;
    if (education == "Secondary Education" || education == "Elementary Education"){
        signupform.educationaftermathsub.value = "you cant't submit this form cause your education is " + education;
    }
}