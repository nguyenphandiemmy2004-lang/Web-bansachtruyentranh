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
