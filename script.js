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


validateForm.addEventListener('submit', (e) => {

  if (isNaN(id.value)) {
    id.setCustomValidity('ID Must Be A Number');
    id.reportValidity();
  }
  else if (id.value.length == 8 || id.value.length == 9) {
    id.setCustomValidity('');
    valid = true;
  } else {
    id.setCustomValidity('"Please Enter A Valid ID"');
    id.reportValidity();
  }

  if (fullName.value.length > 3) {
    fullName.setCustomValidity('');
    valid = true;
  } else {
    fullName.setCustomValidity("Please Enter A Valid Name")
    fullName.reportValidity();
  }

  if (!valid) {
    e.preventDefault();
    validateForm.classList.remove("was-validated");
  } else {
    btnSubmit.classList.add('btn-succsess');
    // addObjToArr();
    // CreateTable();
  }
});
(function () {
    'use strict';
    btnSubmit.addEventListener('click', function () {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            // event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();