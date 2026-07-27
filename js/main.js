/*=========================================
            SLIDER
=========================================*/

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Hiển thị banner
function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}

// Banner tiếp theo
function nextSlide() {
  if (slides.length === 0) return;
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

// Banner trước
function prevSlide() {
  if (slides.length === 0) return;
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

// Tự động chạy Slider
if (slides.length > 0) {
  setInterval(nextSlide, 3000);
}

/*=========================================
        HIỂN THỊ SẢN PHẨM
=========================================*/

const productList = document.getElementById("product-list");
function displayProducts(list) {
  if (!productList) return;
  let html = "";
  list.forEach((book) => {
    html += `
        <div class="product">
            <img src="${book.image}" alt="${book.name}">
            <h3>${book.name}</h3>

            <p><strong>Tác giả:</strong> ${book.author}</p>
            <p><strong>Thể loại:</strong> ${book.category}</p>

            <p class="price">
                ${book.price.toLocaleString()} đ
            </p>

            <button class="detail-btn" 
            onclick="viewDetail(${book.id})">
            Xem chi tiết
            </button>

            <button class="cart-btn"
            onclick="addToCart(${book.id})">
            Thêm vào giỏ
            </button>
        </div>
        `;
  });
  productList.innerHTML = html;
}

// Hiển thị tất cả sản phẩm khi mở trang
if (typeof books !== "undefined") {
  displayProducts(books);
}

/*=========================================
            TÌM KIẾM
=========================================*/

function searchBook() {
  const input = document.getElementById("searchInput");
  if (!input) return;
  const keyword = input.value.toLowerCase().trim();
  const result = books.filter((book) =>
    book.name.toLowerCase().includes(keyword),
  );
  displayProducts(result);
}

/*=========================================
        TÌM KIẾM KHI ĐANG GÕ
=========================================*/

const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("keyup", searchBook);
}

/*=========================================
        LỌC THEO THỂ LOẠI
=========================================*/

function filterCategory(category) {
  if (category === "Tất cả") {
    displayProducts(books);
    return;
  }
  const result = books.filter((book) => book.category === category);
  displayProducts(result);
}
/*==================================
        XEM CHI TIẾT
==================================*/

function viewDetail(id) {
  localStorage.setItem("bookID", id);
  window.location.href = "detail.html";
}
/*==================================
    HIỂN THỊ CHI TIẾT
==================================*/

const detailBox = document.getElementById("book-detail");
if (detailBox) {
  const id = Number(localStorage.getItem("bookID"));
  const book = books.find((item) => item.id === id);
  if (book) {
    detailBox.innerHTML = `
    
        <div class="detail-box">
            <img src="${book.image}">
            <div class="detail-info">
                <h2>${book.name}</h2>
                <p><strong>Tác giả:</strong> ${book.author}</p>
                <p><strong>Thể loại:</strong> ${book.category}</p>

                <p class="detail-price">
                    ${book.price.toLocaleString()} đ
                </p>

                <p>
                    ${book.description}
                </p>

                <button class="detail-btn"
                onclick="addToCart(${book.id})">
                Thêm vào giỏ hàng
                </button>      
            </div>
        </div>
        `;
  }
}
/*====================================
        THÊM GIỎ HÀNG
====================================*/

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const book = books.find((item) => item.id === id);
  const index = cart.findIndex((item) => item.id === id);
  if (index !== -1) {
    cart[index].quantity++;
  } else {
    cart.push({
      id: book.id,
      name: book.name,
      price: book.price,
      image: book.image,
      quantity: 1,
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ hàng!");
}
/*======================================
        HIỂN THỊ GIỎ HÀNG
======================================*/

function loadCart() {
  const cartTable = document.getElementById("cartTable");
  const totalSpan = document.getElementById("total");
  if (!cartTable || !totalSpan) return;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartTable.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    const thanhTien = item.price * item.quantity;
    total += thanhTien;
    cartTable.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>
                <img src="${item.image}"
                     width="70">
            </td>

            <td>${item.name}</td>
            <td>${item.price.toLocaleString()} đ</td>

            <td>
                <button onclick="decrease(${item.id})">-</button>
                ${item.quantity}
                <button onclick="increase(${item.id})">+</button>
            </td>

            <td>
                ${thanhTien.toLocaleString()} đ
            </td>

            <td>
                <button onclick="removeItem(${item.id})">
                    Xóa
                </button>
            </td>
        </tr>
        `;
  });
  totalSpan.innerHTML = total.toLocaleString() + " đ";
}
loadCart();

/*======================================
        XÓA GIỎ HÀNG
======================================*/

function clearCart() {
  if (confirm("Bạn có chắc muốn xóa toàn bộ giỏ hàng?")) {
    localStorage.removeItem("cart");
    loadCart();
  }
}
/*======================================
        TĂNG SỐ LƯỢNG
======================================*/

function increase(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find((book) => book.id === id);
  if (item) {
    item.quantity++;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}
/*======================================
        GIẢM SỐ LƯỢNG
======================================*/

function decrease(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find((book) => book.id === id);
  if (item) {
    item.quantity--;
    if (item.quantity <= 0) {
      cart = cart.filter((book) => book.id !== id);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}
/*======================================
        XÓA 1 SẢN PHẨM
======================================*/

function removeItem(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((book) => book.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}
/*======================================
        TRANG ĐẶT HÀNG
======================================*/

const orderTotal = document.getElementById("orderTotal");
if (orderTotal) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  orderTotal.innerHTML = total.toLocaleString() + " đ";
}
/*======================================
        ĐẶT HÀNG
======================================*/

const orderForm = document.getElementById("orderForm");
if (orderForm) {
  orderForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("🎉 Đặt hàng thành công!");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
  });
}
/*======================================
        NÚT LÊN ĐẦU TRANG
======================================*/

const topBtn = document.getElementById("topBtn");
if (topBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });
  topBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}
/*=========================================
        CHECKOUT
=========================================*/

const checkoutTotal = document.getElementById("checkoutTotal");
if (checkoutTotal) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  checkoutTotal.innerHTML = total.toLocaleString() + " đ";
}

