// setup your IIFE (Immediately Invoked Function Expression)
(function () {
"use strict";
let SubmitButton = document.getElementById("SendButton");
        SubmitButton.addEventListener("click", (event) => {

            if (!document.forms[0].checkValidity()) {
                OutputFormDataToConsole();
                ValidateForm();
            }
        })

})();

