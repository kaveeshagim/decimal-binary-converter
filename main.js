// initial references
let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

// convert decimal to binary when user inputs in the decimal field
decInp.addEventListener("input", () => {
    let decValue = parseInt(decInp.value);
    // converts decimal value to binary
    binInp.value = decValue.toString(2);
});

// convert binary to decimal when user inputs in the binary field
binInp.addEventListener("input", () => {
    let binValue = binInp.value;
    // if the binary number is valid, convert it to decimal
    if (binValidator(binValue)) {
        decInp.value = parseInt(binValue, 2);
        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "Please Enter a valid Binary Input";
    }
});

// function to check if the binary number is valid i.e it doesn't contain any number other than 0 and 1
function binValidator(num) {
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== "0" && num[i] !== "1") {
            return false;
        }
    }
    return true;
}
