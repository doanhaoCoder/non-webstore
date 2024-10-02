// Sản phẩm 
const products = [
    {
        id: 1,
        name: 'Nồng Thắm',
        price: '1,500,000',
        image: '/products/1.webp',
        info: 'Hoa hồng EXPLORER nhập khẩu'
    },
    {
        id: 2,
        name: 'Đong Đầy',
        price: '1,750,000',
        image: '/products/2.webp',
        info: 'Hoa hồng kem, Hoa cẩm chướng trắng'
    },
    {
        id: 3,
        name: 'Điều Ước',
        price: '1,900,000',
        image: '/products/3.webp',
        info: 'Hoa Đồng Tiền Đỏ & Kem'
    },
    {
        id: 4,
        name: 'Your Day',
        price: '1,470,000',
        image: '/products/4.webp',
        info: 'Hoa Hồng Kem, Hoa Cẩm Chướng Trắng'
    },
    {
        id: 5,
        name: 'Yêu Thương Tím',
        price: '1,660,000',
        image: '/products/5.webp',
        info: 'Hoa tặng sinh nhật'
    },
    {
        id: 6,
        name: 'Yêu Thương Ngọt Ngào',
        price: '1,150,000',
        image: '/products/6.webp',
        info: 'Hoa tặng sinh nhật'
    },
    {
        id: 7,
        name: 'Yêu Thương Ấm Áp',
        price: '850,000',
        image: '/products/7.webp',
        info: 'Hoa tặng sinh nhật'
    },
    {
        id: 8,
        name: 'Only You',
        price: '2,500,000',
        image: '/products/8.webp',
        info: 'Hoa tặng sinh nhật'
    },
    {
        id: 9,
        name: 'Đại Phú Quý',
        price: '5,500,000',
        image: '/products/9.webp',
        info: 'Hoa Khai Trương'
    },
    {
        id: 10,
        name: 'Thuận Buồm Xuôi Gió',
        price: '2,200,000',
        image: '/products/10.webp',
        info: 'Hoa Khai Trương'
    },
    {
        id: 11,
        name: 'Thành Công Rực Rỡ',
        price: '1,9900,000',
        image: '/products/11.webp',
        info: 'Hoa Khai Trương'
    },
    {
        id: 12,
        name: 'Tài Lộc Song Hành',
        price: '920,000',
        image: '/products/12.webp',
        info: 'Hoa Khai Trương'
    },
    {
        id: 13,
        name: 'Đâm Chồi Nảy Lộc',
        price: '1,600,000',
        image: '/products/13.webp',
        info: 'Hoa Khai Trương'
    },
    {
        id: 14,
        name: 'Đại Thắng',
        price: '2,210,000',
        image: '/products/14.webp',
        info: 'Hoa Khai Trương'
    },
    {
        id: 15,
        name: 'Đại Lợi',
        price: '2,800,000',
        image: '/products/15.webp',
        info: 'Hoa Khai Trương'
    },
    {
        id: 16,
        name: 'Vững Tiến',
        price: '1,760,000',
        image: '/products/16.webp',
        info: 'Hoa Khai Trương'
    },
    {
        id: 17,
        name: 'Peaceful',
        price: '3,600,000',
        image: '/products/17.webp',
        info: 'Hoa Tang Lễ'
    },
    {
        id: 18,
        name: 'Phân Lưu',
        price: '1,900,000',
        image: '/products/18.webp',
        info: 'Hoa Tang Lễ'
    },
    {
        id: 19,
        name: 'Forever',
        price: '4,000,000',
        image: '/products/19.webp',
        info: 'Hoa Tang Lễ'
    },
    {
        id: 20,
        name: 'Yên Nghỉ',
        price: '2,200,000',
        image: '/products/20.webp',
        info: 'Hoa Tang Lễ'
    },
    {
        id: 21,
        name: 'My Friend',
        price: '3,250,000',
        image: '/products/21.webp',
        info: 'Hoa Tang Lễ'
    },
    {
        id: 22,
        name: 'Ánh Chiều Tà',
        price: '1,720,000',
        image: '/products/22.webp',
        info: 'Hoa Tang Lễ'
    },
    {
        id: 23,
        name: 'Tiễn Biệt',
        price: '1,990,000',
        image: '/products/23.webp',
        info: 'Hoa Tang Lễ'
    },
    {
        id: 24,
        name: 'Cuối Thu',
        price: '2,900,000',
        image: '/products/24.webp',
        info: 'Hoa Tang Lễ' 
    },
    {
        id: 25,
        name: 'Chung Đôi',
        price: '800,000',
        image: '/products/25.webp',
        info: 'Hoa Cưới Cầm Tay'
    },
    {
        id: 26,
        name: 'Nguyện Bên Em Mãi',
        price: '930,000',
        image: '/products/26.webp',
        info: 'Hoa Cưới Cầm Tay'
    },
    {
        id: 27,
        name: 'Một Nhà',
        price: '1,000,000',
        image: '/products/27.webp',
        info: 'Hoa Cưới Cầm Tay'
    },
    {
        id: 28,
        name: 'Nói Hộ Lòng Anh',
        price: '820,000',
        image: '/products/28.webp',
        info: 'Hoa Cưới Cầm Tay'
    },
    {
        id: 29,
        name: 'Ngôi Nhà Hạnh Phúc',
        price: '1,300,000',
        image: '/products/29.webp',
        info: 'Hoa Cưới Cầm Tay'
    },
    {
        id: 30,
        name: 'Ngày Đặc Biệt',
        price: '780,000',
        image: '/products/30.webp',
        info: 'Hoa Cưới Cầm Tay'
    },
    {
        id: 31,
        name: 'Sánh Đôi',
        price: '900,000',
        image: '/products/31.webp',
        info: 'Hoa Cưới Cầm Tay'
    },
    {
        id: 32,
        name: 'Chân Tình',
        price: '1,900,000',
        image: '/products/32.webp',
        info: 'Hoa Cưới Cầm Tay'
    },
    {
        id: 33,
        name: 'Big Love',
        price: '1,500,000',
        image: '/products/33.webp',
        info: 'Quà Tặng'
    },
    {
        id: 34,
        name: 'Gấu Tốt Nghiệp',
        price: '200,000',
        image: '/products/34.webp',
        info: 'Quà Tặng'
    },
    {
        id: 35,
        name: 'Bánh Kem Dollar',
        price: '700,000',
        image: '/products/35.webp',
        info: 'Quà Tặng'
    },
    {
        id: 36,
        name: 'Bánh Kem Con Bướm',
        price: '700,000',
        image: '/products/36.webp',
        info: 'Quà Tặng'
    },
    {
        id: 37,
        name: 'Giỏ Trái Cây Ấm Áp',
        price: '1,530,000',
        image: '/products/37.webp',
        info: 'Quà Tặng'
    },
    {
        id: 38,
        name: 'Giỏ Trái Cây Tươi Mát',
        price: '1,750,000',
        image: '/products/38.webp',
        info: 'Quà Tặng'
    },
    {
        id: 39,
        name: 'Giáng Sinh An Lành',
        price: '2,100,000',
        image: '/products/39.webp',
        info: 'Quà Tặng'
    },
    {
        id: 40,
        name: 'Set Quà nến Yêu Thương',
        price: '980,000',
        image: '/products/40.webp',
        info: 'Quà Tặng'
    },
    {
        id: 41,
        name: 'Couple Cup Lover',
        price: '780,000',
        image: '/products/41.webp',
        info: 'Quà Tặng'
    }
];

// Tải sản phẩm từ localStorage hoặc khởi tạo một mảng trống
let productInCart = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

function saveToLocalStrong() {
    localStorage.setItem('products', JSON.stringify(productInCart));
}

//map sản phẩm vào form thanh toán
function renderProductsToCart() {
    let data = '';
    productInCart.map((value, index) => {
        data += `
            <ul class="cart">
                <li><img src="${value.image}" alt="${value.image}"></li>
                <li class="name">${value.name}</li>
                <li class="price">${value.price}</li>
                <li class="quantity">
                <button onclick='minusQuantity(${index},${value.quantity})'>-</button>
                <span>${value.quantity}</span>
                <button onclick='plusQuantity(${index})'>+</button>
                </li>
                <li class="total">
                ${(value.quantity * value.price.replace(/,/g, '')).toLocaleString()}
                </li>
                <li onclick="deleteProductInCart(${index})"><button>XÓA</button></li>
            </ul>
        `;
    });
    document.getElementById('cartpage').innerHTML = data;
}


// check số lượng sản phẩm đã đặt của giỏ hàng ở trang main.index 
// số đếm góc phải ở trên icon giỏ hàng
function addToCart(id) {
    let checkProduct = productInCart.some(value => value.id === id);
    if (!checkProduct) {
        let product = products.find(value => value.id === id);
        productInCart.unshift({
            ...product,
            quantity: 1
        });
        saveToLocalStrong();
        calculatorTotal();
    } else {
        let getIndex = productInCart.findIndex(value => value.id === id);
        let existingProduct = productInCart[getIndex];
        existingProduct.quantity++;
    }
    saveToLocalStrong();
    calculatorTotal();
    alert('Đã thêm sản phẩm vào giỏ hàng');
}

// tổng số lượng hàng
function calculatorTotal() {
    document.getElementById('total').innerHTML = productInCart.length;
}

// giảm số lượng sản phẩm
function minusQuantity(index, quantity) {
    if (quantity > 1) {
        productInCart[index] = {
            ...productInCart[index],
            quantity: --productInCart[index].quantity
        }
        saveToLocalStrong();
        renderProductsToCart();
        totalMoney();
    }
    else {
        alert("số lượng còn 1 không thể giảm")
    }
}

// tăng số lương sản phẩm
function plusQuantity(index) {
    productInCart[index] = {
        ...productInCart[index],
        quantity: ++productInCart[index].quantity
    }
    saveToLocalStrong();
    renderProductsToCart();
    totalMoney();
}

// xóa sản phẩm
function deleteProductInCart(index) {
    productInCart.splice(index, 1)
    saveToLocalStrong();
    renderProductsToCart();
    calculatorTotal();
    totalMoney();
    if(productInCart.length===0){
        location.reload();
    }
}

// tính tổng tiền cho giỏ hàng
function totalMoney() {
    if (productInCart.length > 0) {
        let total = 0;
        for (let i = 0; i < productInCart.length; i++) {
            total += productInCart[i].quantity * productInCart[i].price.replace(/,/g, '')
        }
        document.getElementById('totalMoney').innerHTML = total.toLocaleString()
    }
}

// map sản phẩm vào form ở trang chủ
function renderProducts() {
    let data = '';
    products.map(value => {
        data += `
        <div class="product-item" id='id${value.id}'>
        <div class='photo'>
        <img src='${value.image}' alt='${value.name}'>
        <button onclick='productdetails(${value.id})'></button>
        </div>
        <div class="info">
        <div class="name">${value.name}</div>
        <div class="price">${value.price}<span> VNĐ</span></div>
        <button onclick='addToCart(${value.id})'>ĐẶT HÀNG</button>
        </div>
        </div>
        `;
    });
    document.querySelector('.product').innerHTML = data;
    nonelist();
    listHome();
}

//ẩn all sản phẩm ở trang index.html
function nonelist() {
    var productItems = document.getElementsByClassName('product-item');
    for (var i = 0; i < productItems.length; i++) {
        productItems[i].style.display = 'none';
    }
}
nonelist();

// hiển thị phần tử ở hoa sinh nhật
function list1() {
    nonelist();
    var ids = ['id1', 'id2', 'id3', 'id4', 'id5', 'id6', 'id7', 'id8'];
    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).style.display = 'block';
    }
    document.getElementById('titleProduct').innerHTML = 'HOA SINH NHẬT';
    document.querySelector('.changetab').style.display = 'none';
    hidennavshowonclick();
    defaultcolornavlist();
    document.getElementById('nav1').style.color = '#F50101';
    
}

//hiển thị phần tử ở hoa khai trương
function list2() {
    nonelist();
    var ids = ['id9', 'id10', 'id11', 'id12', 'id13', 'id14', 'id15', 'id16'];
    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).style.display = 'block';
    }
    document.getElementById('titleProduct').innerHTML = 'HOA kHAI TRƯƠNG';
    document.querySelector('.changetab').style.display = 'none';
    hidennavshowonclick();
    defaultcolornavlist();
    document.getElementById('nav2').style.color = '#F50101';
    
}

// hiển thị phần tử ở hoa tang lễ
function list3() {
    nonelist();
    var ids = ['id17', 'id18', 'id19', 'id20', 'id21', 'id22', 'id23', 'id24'];
    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).style.display = 'block';
    }
    document.getElementById('titleProduct').innerHTML = 'HOA TANG LỄ';
    document.querySelector('.changetab').style.display = 'none';
    hidennavshowonclick();
    defaultcolornavlist();
    document.getElementById('nav3').style.color = '#F50101';
    
}

// hiển thị phần tử ở hoa cưới
function list4() {
    nonelist();
    var ids = ['id25', 'id26', 'id27', 'id28', 'id29', 'id30', 'id31', 'id32'];
    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).style.display = 'block';
    }
    document.getElementById('titleProduct').innerHTML = 'HOA CƯỚI';
    document.querySelector('.changetab').style.display = 'none';
    hidennavshowonclick();
    defaultcolornavlist();
    document.getElementById('nav4').style.color = '#F50101';
    
}

// hiển thị phần tử ở quà tặng 
function list5() {
    nonelist();
    var ids = ['id33', 'id34', 'id35', 'id36', 'id37', 'id38', 'id39', 'id40','id41'];
    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).style.display = 'block';
    }
    document.getElementById('titleProduct').innerHTML = 'QUÀ TẶNG';
    document.querySelector('.changetab').style.display = 'none';
    hidennavshowonclick();
    defaultcolornavlist();
    document.getElementById('nav5').style.color = '#F50101';
    
}

// list phần tử ở trang chủ
function listHome() {
    nonelist();
    switch (checktab) {
    case 1:
    var ids = ['id1', 'id2', 'id3', 'id4'];
    break;
    case 2:
    var ids = ['id5', 'id6', 'id7', 'id8'];
    break;
    case 3:
    var ids = ['id9', 'id10', 'id11', 'id12'];
    break;
    case 4:
    var ids = ['id13', 'id14', 'id15', 'id16'];
    break;
    case 5:
    var ids = ['id17', 'id18', 'id19', 'id20'];
    break;
    case 6:
    var ids = ['id21', 'id22', 'id23', 'id24'];
    break;
    case 7:
    var ids = ['id25', 'id26', 'id27', 'id28'];
    break;
    case 8:
    var ids = ['id29', 'id30', 'id31', 'id32'];
    break;
    case 9:
    var ids = ['id33', 'id34', 'id35', 'id36'];
    break;
    case 10:
    var ids = ['id37', 'id38', 'id39', 'id40'];
    break;
    case 11:
    var ids = ['id41'];
    break; 
    }
    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).style.display = 'block';
    }
    document.getElementById('titleProduct').innerHTML = 'TỔNG HỢP SẢN PHẨM';
    document.querySelector('.changetab').style.display = 'flex';
    document.getElementById('navHome').style.color = '#F50101';
    hidennavshowonclick();
    defaultcolornavlist();
    document.getElementById('navHome').style.color = '#F50101';
}

//chuyển navlist về màu mặc định
function defaultcolornavlist(){
    document.getElementById('navHome').style.color='#3F3F3F';
    document.getElementById('nav1').style.color='#3F3F3F';
    document.getElementById('nav2').style.color='#3F3F3F';
    document.getElementById('nav3').style.color='#3F3F3F';
    document.getElementById('nav4').style.color='#3F3F3F';
    document.getElementById('nav5').style.color='#3F3F3F';
}

//chạy hàm bên trong khi load trang(index)
function indexLoadPage() {
    calculatorTotal();
    renderProducts();
}

//chạy hàm bên trong khi load lại trang(giỏ hàng)
function cartLoadPage() {
    totalMoney();
    calculatorTotal();
    renderProductsToCart();
}

// thanh tìm kiếm sản phẩm
let productSreach = [];
function sreachproduct() {
    let namesreach = document.getElementById('sreach').value;
    productSreach = products.filter(value => {
        return value.name.toUpperCase().includes(namesreach.toUpperCase());
    });
    if(namesreach===''){document.getElementById('listsreach').style.display='none';}
    else{
        if(productSreach.length===0){document.getElementById('listsreach').style.display='none';}
        if(productSreach.length>0){document.getElementById('listsreach').style.display='block';}
    }
    renderSreach();
}
// map sản phẩm vào form trong thanh tìm kiếm
function renderSreach() {
    let listSreach = '';
    productSreach.map(value => {
        listSreach += `
            <div onclick='productdetails(${value.id})'><div><img src="${value.image}"/></div><div>${value.name}</div></div>
            
        `;
    });
    document.getElementById('listsreach').innerHTML = listSreach;
}

//xem chi tiết sản phẩm được chọn khi click vào ảnh sản phẩm
var arrayProductSelect = [];
var mappoduct='';
function productdetails(id) {
    const selectedProduct = products.find(product => product.id === id);
    arrayProductSelect = [selectedProduct];
    console.log(selectedProduct);
    arrayProductSelect.map(value => {
        mappoduct =
    document.getElementById('productslect').innerHTML=`
    <div><img src="${value.image}"/></div>
          <div><span>${value.name}</span></div>
          <div><span class='price'>${value.price} VNĐ</span></div>
          <div><span>${value.info}</span></div>
          <div><button onclick='addToCart(${value.id})'>ĐẶT HÀNG</button></div>
          <div><button onclick="hiddenProduct()">Ẩn</button></div>
    `;
    });
    document.querySelector('.coating').style.display='flex'
}

// ẩn tab xem chi tiết sản phẩm
function hiddenProduct(){
    document.querySelector('.coating').style.display='none';
    document.querySelector('#listsreach').style.display='none';
}
