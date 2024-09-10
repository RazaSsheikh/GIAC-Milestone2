var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type aseertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // Ensure the block is properly enclosed with curly braces
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //creat resume output
        var resumeOutput = "<h2>Resume</h2>\n    <p><strong>Name:</strong> ".concat(name_1, " </p>\n      <p><strong>Email:</strong> ").concat(email, " </p>\n        <p><strong>Phone Number:</strong> ").concat(phone, " </p>\n\n\n          <h3>Education:</h3>\n           <p>").concat(name_1, " </p>\n\n            <h3>Experience </h3>\n            <p>").concat(name_1, " </p>\n\n              <h3>Skills:</h3> \n              <p> ").concat(name_1, " </p>");
        //  const resumeOutputElement = document.getElementById('resumeOutput')
        //  if(resumeOutputElement){
        //     resumeOutputElement.innerHTML = resumeOutput
        //  }else{
        //     console.error('the resume output element is missing')
        //  }else{
        //     console.error('one or more output elements are missing')
        //  }
        //     const resumeOutputElement = document.getElementById('resumeOutput');
        // if (resumeOutputElement) {
        //     // Assuming resumeOutput is defined and holds the value you want to set
        //     resumeOutputElement.innerHTML = resumeOutput;
        // } else {
        //     console.error('The resume output element is missing');
        // }
        // }
        // })
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output');
        }
    }
});
