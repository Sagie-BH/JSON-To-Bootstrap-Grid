const id = document.getElementById('objId');
const fullName = document.getElementById('objName');
const email = document.getElementById('objEmail');
const course = document.getElementById("objCourse");
const grade = document.getElementById("objGrade");
const active = document.getElementById("isActive");
const date = document.getElementById("datetime-input");

const btnSubmit = document.getElementById('btnSubmit');

const inputAreas = document.getElementsByClassName('userInput');
const validateForm = document.getElementById('validateForm');

var valid = false;

confirmElement = (element) => {
    element.setCustomValidity('');
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
    valid = true;
};
rejectElement = (element, poppinMessage) => {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
    element.setCustomValidity(poppinMessage);
    element.reportValidity();
    valid = false;
};

// checkEmptyInput = () => {
//     Array.from(inputAreas).forEach((input) => {
//         if (input.innerText == "" || input.selectedOptions[0]) {
//             rejectElement(input, "Please Fill Out Field")
//             btnSubmit.classList.remove('my-btn-start');
//             btnSubmit.classList.add('myDangerStyle');
//         }
//     })
// };


id.addEventListener('focusout', () => {
    if (isNaN(id.value)) {
        rejectElement(id, 'ID Must Be A Number');

    } else if (id.value.length == 8 || id.value.length == 9) {
        confirmElement(id);

    } else {
        rejectElement(id, "Please Enter A Valid ID");
    }
});

fullName.addEventListener('focusout', () => {
    if (fullName.value.length > 3) {
        confirmElement(fullName);
    } else {
        rejectElement(fullName, "Please Enter A Valid Name");
    }
});

email.addEventListener('focusout', () => {
    const expression = /\S+@\S+/;
    if (expression.test(email.value.toLowerCase())) {
        confirmElement(email);
    } else {
        rejectElement(email, 'Please Enter A Valid Email Adress')
    }
});

course.addEventListener('change', () => {
    confirmElement(course);
})

date.addEventListener('change', () => {
    confirmElement(date);
})

active.addEventListener('change', () => {
    if (active.checked) {
        confirmElement(active);
    } else {
        rejectElement(active, 'Please Check Box');
    }
})

grade.addEventListener('focusout', () => {
    if (grade.value == 0) {
        rejectElement(grade, 'How Did You Get 0  /:')
    } else {
        confirmElement(grade);
    }

})
validateForm.addEventListener('focusout', () => {
    btnSubmit.classList.remove('myDangerStyle');
    btnSubmit.classList.add('my-btn-start');
})
validateForm.addEventListener('submit', (e) => {

    // checkEmptyInput();

    if (!valid) {
        e.preventDefault();
        btnSubmit.classList.remove('my-btn-start');
        btnSubmit.classList.add('myDangerStyle');
    } else {
        Array.from(inputAreas).forEach((input) => {
            input.classList.remove('is-valid');
            input.value = '';
        })
        active.checked = false;
        btnSubmit.classList.remove('my-btn-start')
        btnSubmit.classList.add('my-btn-success');



        // addObjToArr();
        // CreateTable();
    }
});