// viền dưới nav tự cover khi chạm top=0
document.addEventListener('DOMContentLoaded', function () {
    // Lấy đối tượng .navbar và .nav-border
    const navbar = document.querySelector('.nav');
    const navBorder = document.querySelector('.nav-boder');
    // Thêm sự kiện cuộn trang
    window.addEventListener('scroll', function () {
        // Lấy vị trí top của .navbar
        const navbarTop = navbar.getBoundingClientRect().top;
        // Kiểm tra nếu .navbar chạm vào đỉnh trang
        if (navbarTop <= 0) {
            navBorder.style.width = '100vw';
            navBorder.style.position = 'fixed';
            navBorder.style.top = '0';
            navBorder.style.left = '0';
            navBorder.style.top = '0';
            navBorder.style.margin = '40px auto auto auto';
        } else {
            navBorder.style.width = '100%';
            navBorder.style.position = 'relative';
            navBorder.style.margin = 'auto';
        }
    });
});

//đóng mở bảng đăng nhập
var checkclick = 2;
document.querySelector('.account').addEventListener('click', function () {
    if (checkclick == 2) {
        checkclick = 1;
        document.getElementById('account-show').style.display = 'block';
    }
    else {
        checkclick = 2;
        document.getElementById('account-show').style.display = 'none';
    }
});

//chuyển tab sản phẩm 
var checktab = 1;
function numtab() {
    document.getElementById('numbertab').innerHTML = checktab;
}
//tab lùi
function pretab() {
    if (checktab > 1) {
        checktab--;
        document.getElementById('nexttab').style.display = 'flex';
        if (checktab == 1) { document.getElementById('pretab').style.display = 'none'; }
    }
    numtab();
    listHome();
}
//tab tiến
function nexttab() {
    if (checktab < 11) {
        checktab++;
        document.getElementById('pretab').style.display = 'flex';
        if (checktab == 11) { document.getElementById('nexttab').style.display = 'none'; }
    }
    numtab();
    listHome();
}
document.getElementById('pretab').style.display = 'none';
document.querySelector('.changetab').style.display = 'none';

// sổ đọc item thanh nav
var checkclick2 = 2;
function shownav() {
    var navElements = document.getElementsByClassName('navshow');
    if (checkclick2 == 2) {
        for (var i = 0; i < navElements.length; i++) {
            navElements[i].style.display = 'block';
        }
        checkclick2 = 1
    }
    else {
        for (var i = 0; i < navElements.length; i++) {
            navElements[i].style.display = 'none';
        }
        checkclick2 = 2;
    }
}

// khi window >= 1190 thì hiện lại nav
function checkWindowSize() {
    // Lấy chiều rộng của màn hình
    var windowWidth = window.innerWidth;
    // Lấy danh sách các phần tử có class 'navshow'
    var navElements = document.getElementsByClassName('navshow');
    // Kiểm tra và thay đổi kiểu dáng của phần tử tùy thuộc vào kích thước màn hình
    if (windowWidth >= 1190) {
        for (var i = 0; i < navElements.length; i++) {
            navElements[i].style.display = 'block';
        }
    }
    else {
        for (var i = 0; i < navElements.length; i++) {
            navElements[i].style.display = 'none';
        }
        checkclick2=2;
    }
}
// Đăng ký sự kiện resize để kiểm tra khi kích thước màn hình thay đổi
window.addEventListener('resize', checkWindowSize);
// Gọi hàm kiểm tra kích thước màn hình khi trang được tải
checkWindowSize();
//khi thay đổi màn hình thì button shownav hiện lại
function hidennavshowonclick() {
    var navElements = document.getElementsByClassName('navshow');
    for (var i = 0; i < navElements.length; i++) {
        navElements[i].style.display = 'none';
    }
    checkclick2 = 2;
    checkWindowSize();
}

//chuyển cảnh banner
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}