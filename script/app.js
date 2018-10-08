document.addEventListener( 'DOMContentLoaded', function() {

    console.log( 'Script loaded!' );
    handleFloatingLabel();
   

});
function handleFloatingLabel(){
    let label=document.querySelector(".js-floating-label");
    let input=document.querySelector(".js-name-input");
    input.addEventListener('blur',function(){
        console.log("blur detected");
        if(input.value !== ""){
            label.classList.add("is-floating");
          } else {
            label.classList.remove("is-floating");
          }
    }
    );
}

            function togglePassword() {
                var passwordInput = document.querySelector(".js-password-input");

                if (passwordInput.type === "password") {
                    passwordInput.type = "text";
                } else {
                    passwordInput.type = "password";
                }
            }
      