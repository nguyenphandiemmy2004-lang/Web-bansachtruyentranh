/* ============================
   DANH SÁCH SÁCH
============================ */

const books = [
  {
    id: 1,
    name: "Đắc Nhân Tâm",
    price: 120000,
  },
  {
    id: 2,
    name: "Nhà Giả Kim",
    price: 135000,
  },
  {
    id: 3,
    name: "Harry Potter",
    price: 250000,
  },
  {
    id: 4,
    name: "One Piece",
    price: 95000,
  },
  {
    id: 5,
    name: "Doraemon",
    price: 35000,
  },
  {
    id: 6,
    name: "Conan",
    price: 40000,
  },
];

/* ============================
   GIỎ HÀNG
============================ */

let cart = [];

/* ============================
   THÊM VÀO GIỎ
============================ */

function addToCart(id) {
  const book = books.find((item) => item.id === id);

  cart.push(book);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(book.name + " đã được thêm vào giỏ hàng!");
}

/* ============================
   TẢI GIỎ HÀNG
============================ */

function loadCart() {
  const data = localStorage.getItem("cart");

  if (data) {
    cart = JSON.parse(data);
  }
}

/* ============================
   HIỂN THỊ GIỎ HÀNG
============================ */

function showCart() {
  loadCart();

  const table = document.getElementById("cartTable");

  if (!table) return;

  table.innerHTML = "";

  let total = 0;

  cart.forEach((book, index) => {
    total += book.price;

    table.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>${book.name}</td>

            <td>${book.price.toLocaleString()} đ</td>

        </tr>

        `;
  });

  const money = document.getElementById("total");

  if (money) {
    money.innerHTML = total.toLocaleString() + " đ";
  }
}

/* ============================
   XÓA GIỎ HÀNG
============================ */

function clearCart() {
  localStorage.removeItem("cart");

  cart = [];

  showCart();
}

/* ============================
   ĐẶT HÀNG
============================ */

function orderSuccess() {
  alert("Đặt hàng thành công!");

  clearCart();
}

/* ============================
   KIỂM TRA FORM
============================ */

function validateForm() {
  const name = document.getElementById("name");

  const phone = document.getElementById("phone");

  const address = document.getElementById("address");

  if (name.value === "") {
    alert("Vui lòng nhập họ tên");

    return false;
  }

  if (phone.value === "") {
    alert("Vui lòng nhập số điện thoại");

    return false;
  }

  if (address.value === "") {
    alert("Vui lòng nhập địa chỉ");

    return false;
  }

  orderSuccess();

  return false;
}

/* ============================
   CHẠY KHI WEBSITE MỞ
============================ */

window.onload = function () {
  loadCart();

  showCart();
};
