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

/*==========================
      HIỂN THỊ SẢN PHẨM
==========================*/

const productList = document.getElementById("product-list");
function displayProducts(list) {
  let html = "";
  list.forEach((book) => {
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

/* Hiển thị tất cả */
displayProducts(books);

/*==========================
      TÌM KIẾM
==========================*/

function searchBook() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const result = books.filter((book) =>
    book.name.toLowerCase().includes(keyword),
  );
  displayProducts(result);
}

/*==========================
      LỌC THỂ LOẠI
==========================*/

function filterCategory(category) {
  if (category === "Tất cả") {
    displayProducts(books);
    return;
  }
  const result = books.filter((book) => book.category === category);
  displayProducts(result);
}
