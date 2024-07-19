/*
    Lập trình hướng đối tượng có 4 tính chất:
        Encapsulation( tính đóng gói )
        Inheritance( tính kế thừa )
        Polymorphism( tính đa hình )
        Abstraction( tính trừu tượng )
*/
/*
    1.Tính đóng gói
    - Là kỹ thuật giúp bạn che giấu được những thông tin bên trong object
    - Giúp hạn chế các lỗi khi phát triển chương trình
    - Hạn chế các truy xuất không hợp lệ tới các thuộc tính của object
    - Giúp cho trạng thái của các object luôn đúng
    - Giúp ẩn đi các thông tin không cần thiết về object
    - Cho phép thay đổi cấu trúc bên trong lớp mà không ảnh hưởng đến các
    lớp khác
*/
function person(firstName, lastName) {
    var fstName = firstName;
    var lstName = lastName;

    this.setFirstName = function(firstName) {
        fstName = firstName;
    };
    this.getFirstName = function() {
        return fstName;
    };
    this.setLastName = function(lastName) {
        lstName = lastName;
    }
    this.getLastName = function() {
        return lstName;
    };
}
var Cbum = new person('Christ', 'Bumstead');
console.log(Cbum.firstName); // undefind
console.log(Cbum.getFirstName()); // Christ
/*
    2.Tính kế thừa
    - Là thừa hưởng lại những phương thức(property) và thuộc tính(method)
    của 1 lớp 
    - Lớp bị lớp khác kế thừa gọi là lớp cha(Parent class)
    - Lớp thừa hưởng những thuộc tính của lớp khác gọi là lớp con(Sub class)
    - Giúp tái sử dụng code
    - Tăng khả năng mở rộng chương trình
    - trong JS không có từ khóa extends cũng như class nên prototype là sự
    triển khai tính kế thừa đối tượng của JS
*/
function BMW() {
    this.name = 'BMW'
    this.color = 'white';
    this.introduceCar = function() {
        console.log(`this ${this.name} is ${this.color}`)
    }
} 
function car(name, color) {
    this.name = name;
    this.color = color;
}
car.prototype = new BMW();
var porsche = new car('porsche', 'grey');
porsche.introduceCar();