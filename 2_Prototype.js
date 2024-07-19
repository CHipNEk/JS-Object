/*
    Prototype là cơ chế mà các JS objects kế thừa lại các tính năng của
    nhau

    Mỗi object trong JS đều có 1 property(thuộc tính) tích hợp được gọi 
    là prototype

    Bản thân 1 prototype là 1 object

    Mỗi prototype đều có prototype riêng của nó được gọi là prototype chain(chuỗi)

    Chuỗi này sẽ kết thúc khi mà nó chạy vào 1 prototype rỗng cho prototype 
    của chính nó

    ví dụ: khi bạn truy cập vào 1 property của 1 object: nếu không thể tìm
    thấy property trong chính object đó thì prototype sẽ tìm property đó. Nếu
    vẫn không tìm được thì property của property sẽ được tìm kiếm và tiếp tục 
    như vậy cho đến khi kết quả được tìm thấy hoặc khi đến cuối chuỗi hi đó
    kết quả được trả lại là undefind

    prototype là 1 tính năng của JS giúp nó có thể tái sử dụng và kết hợp các
    object với nhau
*/
