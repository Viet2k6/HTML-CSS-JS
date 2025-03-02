let user = prompt("Nhập tên người dùng");
if(user === "ADMIN"){
    let password = prompt("Nhập mật khẩu");
    if(password==="TheMaster"){
    alert(`Welcome`);
    }else if(password==="null"){
    alert(`Cancelled`);
    }else {
    alert(`Wrong password`);
    }
}else if (user === ""){
    alert(`Cancelled`);
}else{
    alert(`I dont know you`);
}