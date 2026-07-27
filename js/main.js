/*==========================
        SLIDER
===========================*/

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

/* Hiển thị banner */
function showSlide(index) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}

/* Banner tiếp theo */
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

/* Banner trước */
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

/* Tự động chạy */
setInterval(nextSlide, 3000);

// ===============================
// HIỂN THỊ SẢN PHẨM
// ===============================

const productList = document.getElementById("product-list");
function displayProducts() {
  if (!productList) return;
  let html = "";
  books.forEach((book) => {
    html += `
        <div class="product">
            <img src="${book.image}" alt="${book.name}">
            <h3>${book.name}</h3>
            <p>${book.author}</p>
            <p>${book.category}</p>
            <p class="price">
                ${book.price.toLocaleString()} đ
            </p>
            <button class="detail-btn">
                Xem chi tiết
            </button>
            <button class="cart-btn">
                Thêm vào giỏ
            </button>
        </div>
        `;
  });
  productList.innerHTML = html;
}
displayProducts();

