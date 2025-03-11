function isStrongPass(str) {
    if (typeof str !== "string" || str.length < 8) {
        return false; 
    }
    let hasNumber = false;
    let hasUpperCase = false;
    let hasLowerCase = false;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) { 
            hasNumber = true;
        } else if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
            hasUpperCase = true;
        } else if (str[i] === str[i].toLowerCase() && str[i] !== str[i].toUpperCase()) { 
            hasLowerCase = true;
        }

        if (hasNumber && hasUpperCase && hasLowerCase) {
            return true;
        }
    }
    return false;
}
let pass = prompt("Mời nhập mật khẩu:");
console.log(isStrongPass(pass));
