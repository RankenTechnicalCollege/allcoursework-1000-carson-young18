const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const firstName = $("#first_name");
        let allValid = true;
    
        // create an error message and set it to an empty string
        let errorMessage = "";

        // check user entries - add text to error message if invalid
        if (email1.value == "") {
            allValid = false;
            email1.nextElementSibling.innerHTML = "*First email is required.\n";
        }
    
        if (email2.value == "") { 
            allValid = false;
            email2.nextElementSibling.innerHTML = "*Second email is required.\n";
        }
    
        if (email1.value != email2.value) { 
            allValid = false;
        }
    
        if (firstName.value == "") {
            allValid = false;
            firstName.nextElementSibling.innerHTML = "*First name is required.\n";
        }
    
        // submit the form if error message is an empty string
        if (allValid) {
            $("#email_form").submit();
        }
    });

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";
        $("#first_name").nextElementSibling.innerHTML = "*";
        $("#email_1").nextElementSibling.innerHTML = "*";
        $("#email_2").nextElementSibling.innerHTML = "*";

        $("#email_1").focus();
    });
    
    $("#email_1").focus();
});