// kiểm tra đăng nhập
function checkLogin() {
    var a = document.getElementById("username").value;
    var b = document.getElementById("password").value;

    if (a === "" || b === "") {
        alert("Vui lòng nhập đầy đủ thông tin");
    } else if (a === "admin" && b === "123") {
        location.href = '../index.html';
        alert("Đăng nhập thành công");
    } else {
        alert("Tài Khoản hoặc mật khẩu không đúng");
    }
}

// kiểm tra đăng ký
function checkRegister() {
    var a = document.getElementById("username").value;
    var b = document.getElementById("password").value;
    var c = document.getElementById("password-repeat").value;
    var d = document.getElementById("email").value;
    if (a === "" || b === "" || c === "") {
        alert("Vui lòng nhập đầy đủ thông tin");
        return false;
    }
    if (a === "") {
        alert("Vui lòng nhập tài khoản");
        return false;
    }
    if (d === "") {
        alert("Vui lòng nhập số điện thoại/email");
        return false;
    }
    if (c === b) {
        location.href = 'login.html';
        alert("Đăng ký thành công");
        return false;
    } else {
        alert("Mật khẩu không trùng khớp");
        return false;
    }
}

// khôi phục tài khoản
function sendResetRequest() {
    var identifier = document.getElementById('identifier').value; 
    if (!isValidIdentifier(identifier)) {
      alert('Vui lòng nhập một địa chỉ email/số điện thoại hợp lệ');
      return;
    }
    location.href = '../index.html';
    alert('Yêu cầu đã được gửi.Vui lòng kiểm tra email/số điện thoại của bạn');
}

// kiểm tra định hạng mail và số điện thoại
function isValidIdentifier(identifier) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^[0-9]+$/;
    return emailRegex.test(identifier) || phoneRegex.test(identifier);
}






