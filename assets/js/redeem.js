var codeTextArea = document.getElementById("codeTextArea")
var response = document.getElementById("response")

function redirect() {
    document.location.href = "https://drive.google.com/drive/folders/1yOiVB-D9tgRvGTv8pge0D4-Thy1IMhVd?usp=share_link";
    clearInterval(interval);
 }

document.getElementById("codeSubmit").onclick = function() {
    var enteredCode = codeTextArea.value;

    if (acceptedCodes.includes(enteredCode)) {
        var interval = setInterval(redirect, 3000);
        response.textContent = "Code is correct. Redirecting page in 3 seconds.";
        return;
    }
    
    response.textContent = "Code is not correct. Try again"
};