// kiểm tra thông tin nhập vào phần thanh toán
function confirm() {
    var ten = document.getElementById('fullname').value;
    var phone = document.getElementById('phoneNumber').value;
    var address = document.getElementById('address').value;
    var checkinfor = 1; 
    if (ten === '' || address === '' || phone==='') {
        alert("chưa nhập đầy đủ thông tin");
        checkinfor =0;
    }
    if(isNaN(phone)){
        alert("số điện thoại chưa chính xác");
        checkinfor =0;
    }
    //kiểm tra thông tin đã hợp lệ chưa
    if(checkinfor===1)
    {
        location.reload();
        alert('Đặt hàng thành công');
        productInCart.splice(0, productInCart.length);
        saveToLocalStrong();
        totalMoney();
        calculatorTotal();
        renderProductsToCart();
        cartLoadPage();
    }
}

