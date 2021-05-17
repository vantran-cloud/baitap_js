document.write('Hello World')


// Bài 1 : tính tiền lương nhân viên
//phân tích:
//input: lương 1 ngày : 100.000 . số ngày làm : 26 ngày
// xử lý : tiền lương nhân viên = lương 1 ngày * số ngày làm
//output: tiền lương nhân viên 
console.log('~~~~~~~~~~~~~~~~~~~~ BÀI 1 ~~~~~~~~~~~~~~~~~~')
// bc1
var luongMotNgay = 100000;
var soNgayLam = 26;
// bc2
var tienLuongNhanVien = luongMotNgay * soNgayLam;
//bc3
console.log('Tiền lương nhân viên : ' + tienLuongNhanVien + ' nghìn');


//Bài 2: tính giá trị trung bình
//phân tích:
//input: 5 số thực 
//xử lý: bước 1: cộng 5 số thực lại với nhau. bước 2: lấy tổng đó chia cho 5
//output: giá trị trung bình
console.log('~~~~~~~~~~~~~~~~~~~~ BÀI 2 ~~~~~~~~~~~~~~~~~~')
//bc1
var num1 = 1;
var num2 = 2;
var num3 = 5;
var num4 = 4;
var num5 = 8;
//bc2
var sum = num1 + num2 + num3 + num4 + num5;
var average = sum / 5;
// bc3
console.log('Giá trị trung bình : ' , average);



//Bài 3: Quy đổi tiền
//phân tích:
//input: giá 1USD : 23.500 . mệnh giá USD(tự cho)
//xử lý : tiền Việt sau khi quy đổi = giá 1USD * mệnh giá USD
//output: đổi từ tiền Đô ra tiền Việt
console.log('~~~~~~~~~~~~~~~~~~~~ BÀI 3 ~~~~~~~~~~~~~~~~~~')
// bc1
var motUsd = 23500;
var tienCanDoi = 100;
// bc2
var tienViet = tienCanDoi * motUsd;
// bc3
console.log('Tiền Việt sau khi đổi : ' + tienViet  + ' VND');



//Bài 4: tính diện tích, chu vi hcn
//phân tích :
//input: chiều dài, chiều rộng (tụ cho kích thước)
// xử lý : diện tích = chiều dài * chiều rộng./  chu vi = (chiều dài + chiều rộng) * 2
//output: diện tích và chu vi hcn
console.log('~~~~~~~~~~~~~~~~~~~~ BÀI 4 ~~~~~~~~~~~~~~~~~~')
// bc1
var chieuDai = 15;
var chieuRong = 5;
// bc2
var dienTichHcn = chieuDai * chieuRong;
var tongChieuDaiHaiCanh = chieuDai + chieuRong;
var chuViHcn = tongChieuDaiHaiCanh * 2;
// bc3
console.log('Diện tích HCN : ' + dienTichHcn + ' cm');
console.log('Chu vi HCN : ' + chuViHcn + ' cm');


//Bài 5: Tính tổng 2 ký số
//phân tích:
//input : 1 số có 2 chữ số (tự cho)
// xử lý : lấy số hàng chục + số hàng đơn vị
//output : tổng của 2 ký số
console.log('~~~~~~~~~~~~~~~~~~~~ BÀI 5 ~~~~~~~~~~~~~~~~~~')
// bc1
var soTuNhien = 12;
// bc2
var soHangDonVi = soTuNhien % 10;
var soHangChuc = Math.floor(soTuNhien / 10);

var tong = soHangChuc + soHangDonVi;
// bc3
console.log('Tổng 2 ký số : ' + tong);



