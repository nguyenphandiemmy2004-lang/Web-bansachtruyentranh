// ===============================
// DANH SÁCH SÁCH
// ===============================

const books = [

{
    id: 1,
    name: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    category: "Kỹ năng",
    year: 1936,
    publisher: "NXB Văn Học",
    description: "Cuốn sách nổi tiếng giúp phát triển kỹ năng giao tiếp, ứng xử và tạo ảnh hưởng tích cực trong cuộc sống.",
    price: 86000,
    image: "images/book1.jpg"
},

{
    id:2,
    name:"Nhà Giả Kim",
    author:"Paulo Coelho",
    category:"Tiểu thuyết",
    year:1988,
    publisher: "NXB Hội Nhà Văn",
    description:"Truyện xoay quanh cuộc phiêu lưu của cậu bé chăn cừu Santiago người Tây Ban Nha đi tìm kho báu ở kim tự tháp Ai Cập theo những giấc mơ lặp đi lặp lại. Trên hành trình băng qua sa mạc, cậu gặp gỡ nhiều người (ông vua xứ Salem, người buôn pha lê, Nhà Giả Kim...) và học cách lắng nghe trái tim, thấu hiểu những điềm báo của vũ trụ.",
    price:135000,
    image:"images/book2.jpg"
},

{
    id:3,
    name:"Doraemon Truyện Dài - Vol.23: Nobita Và Những Pháp Sư Gió Bí Ẩn",
    author:"Fujiko F. Fujio",
    category:"Thiếu nhi",
    year: "Xuất bản lần đầu năm 2003 (tại Nhật)",
    publisher: "Nhà xuất bản Kim Đồng",
    description:"cuộc phiêu lưu đầy kịch tính của nhóm bạn Doraemon tại Vương quốc Gió để bảo vệ cậu bé thần gió Fuuko và ngăn chặn âm mưu hồi sinh con quỷ rồng Mafuga.",
    price:22000,
    image:"images/book3.jpg"
},

{
    id:4,
    name:'Sổ Tay "Dân IT" Lập Trình Web, Lập Trình Ứng Dụng Từ Cơ Bản Đến Chuyên Sâu',
    author:"Đào Xuân Hiệp",
    category:"Sách công nghệ thông tin",
    year:2024,
    publisher: "NXB Thanh Niên",
    description:"Sách hướng dẫn học HTML, CSS và JavaScript từ cơ bản đến nâng cao dành cho sinh viên và người mới bắt đầu.",
    price:199000,
    image:"images/book4.jpg"
},

{
    id:5,
    name:"Clean Code",
    author:"Robert C. Martin",
    category:"Sách công nghệ thông tin",
    year:2008,
    publisher: "Prentice Hall /Pearson Education.",
    description:"Cuốn sách kinh điển dành cho lập trình viên, hướng dẫn cách viết mã nguồn sạch, dễ đọc và dễ bảo trì.",
    price:294000,
    image:"images/book5.jpg"
},

{
    id: 6,
    name: "Hàng Xóm Của Tôi Totoro",
    author: "Từ bộ phim của Hayao Miyazaki",
    category: "Manga",
    year: 2023,
    publisher: "Kim Đồng",
    description: "Hàng Xóm Của Tôi Totoro là câu chuyện trong trẻo, ấm áp về chuyến hành trình khám phá thế giới kỳ diệu và tình bạn kỳ lạ giữa hai chị em nhỏ với vị thần rừng tốt bụng Totoro ở vùng quê thanh bình.",
    price: 120000,
    image: "images/book6.jpg"
},

{
    id: 7,
    name: "Có Thương Cậu Không?",
    author: "Alata",
    category: "Tiểu thuyết",
    year: 2025,
    publisher: "Hà Nội",
    description: "Có Thương Cậu Không? là câu chuyện tình cảm tuổi trẻ đầy nhẹ nhàng, sâu lắng nhưng cũng đượm buồn về những cảm xúc chớm nở và hành trình trưởng thành của các nhân vật.",
    price: 239000,
    image: "images/book7.jpg"
},

{
    id: 8,
    name: "Con Cáo Vẽ Máu Lên Canvas Lạnh",
    author: "Dopamine",
    category: "Tiểu thuyết",
    year: 2025,
    publisher: "Thế Giới",
    description: "Con Cáo Vẽ Máu Lên Canvas Lạnh là tác phẩm mang màu sắc trinh thám, giật gân pha lẫn yếu tố tâm lý tội phạm đầy kịch tính, cuốn người đọc vào những bí ẩn ly kỳ và các mảng tối tâm lý phức tạp.",
    price: 195000,
    image: "images/book8.jpg"
},

{
    id: 9,
    name: "Nhà Có Bé Ngoan",
    author: "Thính Nguyên",
    category: "Tiểu thuyết",
    year: 2025,
    publisher: "Dân Trí",
    description: "Nhà Có Bé Ngoan là câu chuyện ngôn tình ngọt ngào, ấm áp nhưng cũng không kém phần sâu sắc về tình yêu, sự chữa lành và những cảm xúc đời thường đong đầy tình cảm.",
    price: 225000,
    image: "images/book9.jpg"
},

{
    id: 10,
    name: "Hachiko - Chú Chó Đợi Chờ",
    author: "Luis Prats",
    category: "Thiếu nhi",
    year: 2019,
    publisher: "Kim Đồng",
    description: "Hachiko - Chú Chó Đợi Chờ là câu chuyện cảm động dựa trên sự kiện có thật về lòng trung thành vô điều kiện của chú chó Hachiko, kiên nhẫn đợi chờ người chủ đã mất suốt gần 10 năm tại ga tàu.",
    price: 60000,
    image: "images/book10.jpg"
},

{
    id: 11,
    name: "Chạm Vào Màn Đêm Trong Em",
    author: "Moyori Mori",
    category: "Manga",
    year: 2023,
    publisher: "Dân Trí",
    description: "Chạm Vào Màn Đêm Trong Em là bộ manga tâm lý, lãng mạn đầy tinh tế kể về mối quan hệ sâu sắc, sự đồng cảm và hành trình chữa lành những tổn thương tâm hồn giữa hai nhân vật.",
    price: 85000,
    image: "images/book11.jpg"
},

{
    id: 12,
    name: "Tấm Cám",
    author: "Búp Trên Cành kể, Kim Duẩn vẽ",
    category: "Thiếu nhi",
    year: 2021,
    publisher: "Phụ Nữ Việt Nam",
    description: "Tấm Cám là truyện cổ tích dân gian Việt Nam quen thuộc về cô Tấm hiền lành, trải qua nhiều thử thách cùng sự giúp đỡ của Bụt để vượt qua âm mưu độc ác của mẹ con Cám và tìm lại hạnh phúc.",
    price: 31000,
    image: "images/book12.jpg"
},

{
    id: 13,
    name: "Sọ Dừa",
    author: "Hồng Hà biên soạn, Anh Phương vẽ",
    category: "Thiếu nhi",
    year: 2022,
    publisher: "Kim Đồng",
    description: "Sọ Dừa là câu chuyện cổ tích dân gian Việt Nam kể về chàng Sọ Dừa tuy mang hình hài dị dạng nhưng vô cùng tài giỏi, nhân hậu, vượt qua nghịch cảnh và sự coi thường để cưới được cô Út và sống hạnh phúc.",
    price: 20000,
    image: "images/book13.jpg"
},

{
    id: 14,
    name: "Vitamin Mèo Và Những Câu Chuyện Bất Tận",
    author: "Kịch bản: Tường Minh, Trâm Anh; Minh họa: Trâm Anh",
    category: "Thiếu nhi",
    year: 2024,
    publisher: "Thế Giới",
    description: "Vitamin Mèo Và Những Câu Chuyện Bất Tận là cuốn truyện tranh xoay quanh những khoảnh khắc hài hước, đáng yêu và đầy ắp yêu thương trong cuộc sống hàng ngày cùng các chú mèo.",
    price: 129000,
    image: "images/book14.jpg"
},

{
    id: 15,
    name: "Thành Trì Của Tôi",
    author: "Quân Ước",
    category: "Tiểu thuyết",
    year: 2024,
    publisher: "Phụ Nữ Việt Nam",
    description: "Thành Trì Của Tôi là câu chuyện tình cảm vườn trường nhẹ nhàng, ấm áp kể về những cảm xúc chân thành, sự đồng hành và hành trình trở thành điểm tựa vững chắc của nhau trong quãng thời gian thanh xuân.",
    price: 145000,
    image: "images/book15.jpg"
},

{
    id: 16,
    name: "Thạch Sanh",
    author: "Hồng Hà biên soạn, Tạ Thúc Bình vẽ",
    category: "Thiếu nhi",
    year: 2022,
    publisher: "Kim Đồng",
    description: "Thạch Sanh là truyện cổ tích dân gian Việt Nam kể về dũng sĩ Thạch Sanh tốt bụng, tài giỏi, chiến đấu diệt Chằn tinh, đại bàng cứu công chúa và đập tan âm mưu gian xảo của Lý Thông.",
    price: 20000,
    image: "images/book16.jpg"
},

{
    id: 17,
    name: "Ngõ Ngô Đồng",
    author: "Tống Triệt Không Ăn Cá",
    category: "Tiểu thuyết",
    year: 2024,
    publisher: "NXB Phụ Nữ Việt Nam",
    description: "Ngõ Ngô Đồng là câu chuyện tình cảm nhẹ nhàng, lãng mạn xoay quanh những rung động chân thành, sự thấu hiểu và hành trình cùng nhau trưởng thành của hai nhân vật.",
    price: 259000,
    image: "images/book17.jpg"
},

{
    id: 18,
    name: "Bất Tuân - Tập 1",
    author: "Sa Trụ Đảo",
    category: "Tiểu thuyết",
    year: 2024,
    publisher: "Hà Nội",
    description: "Bất Tuân - Tập 1 là câu chuyện đam mỹ lãng mạn, thanh xuân học đường xoay quanh những mâu thuẫn, va chạm đáng yêu và mối tình ngọt ngào giữa hai nhân vật có tính cách trái ngược.",
    price: 185000,
    image: "images/book18.jpg"
},

{
    id: 19,
    name: "Bất Tuân - Tập 2",
    author: "Sa Trụ Đảo",
    category: "Tiểu thuyết",
    year: 2024,
    publisher: "Hà Nội",
    description: "Bất Tuân - Tập 2 tiếp nối câu chuyện thanh xuân đầy cảm xúc, nơi mối quan hệ giữa hai nhân vật chính ngày càng trở nên khăng khít, thấu hiểu và cùng nhau vượt qua những thử thách tuổi trẻ.",
    price: 185000,
    image: "images/book19.jpg"
},

{
    id: 20,
    name: "Bất Tuân - Tập 3",
    author: "Sa Trụ Đảo",
    category: "Tiểu thuyết",
    year: 2024,
    publisher: "Hà Nội",
    description: "Bất Tuân - Tập 3 là phần kết khép lại hành trình thanh xuân đầy ý nghĩa, nơi hai nhân vật chính kiên định đuổi theo ước mơ, cùng trưởng thành và gặt hái trái ngọt tình yêu.",
    price: 185000,
    image: "images/book20.jpg"
},

];
