/*
    Object là tập hợp gồm các dữ liệu và các chức năng liên quan, thường 
    bao gồm một số biến và hàm(property và method)
*/

//  cách 1
var person = {
    name: ['Christ', 'Bumstead'],
    age: 29,
    sex: 'male',
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} year old`)
    },
    introduceSelf() {
        console.log(`i'm ${this.name[0]}`) // this đề cập đến đối tượng mà phương thức gọi
    }
}
person.name
person.name[0]
person.name[1]
person.bio();
person.introduceSelf()

//  cách 2
// var person = {
//     name: {
//         first: 'Christ',
//         second: 'Bumstead'
//     }
// }
// person.name.first;
// person.name.second;

/*
    Object constructer là các thiết kế sẵn tạo các đối tượng có chung thuộc
    tính và phương thức từ đó tiết kiệm thời gian tạo các đối tượng mới
*/

function creatPerson(name) {
    this.name = name,
    this.introduceSelf = function() {
        console.log(`I'm ${this.name}`)
    };
}
var Cbum = new creatPerson('Christ Bumstead')
Cbum.introduceSelf()