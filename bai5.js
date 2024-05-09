const arrNumber = [9, 3, 5, 8, 1, 4, 3, 2];
const arrStr = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

// Thêm số 10 vào đầu và cuối mảng arrNumber
arrNumber.push(10); // Thêm 10 vào cuối mảng
arrNumber.unshift(10); // Thêm 10 vào đầu mảng

// Xóa số đầu và cuối mảng arrNumber
arrNumber.pop(); // Xóa phần tử cuối cùng
arrNumber.shift(); // Xóa phần tử đầu tiên

// Sắp xếp tăng dần mảng arrNumber và arrStr
arrNumber.sort((a, b) => a - b);
arrStr.sort();

// Lấy ra mảng con từ vị trí 3 đến 5 từ mảng arrNumber
const slicedArray = arrNumber.slice(3, 6); // Lấy từ index 3 đến index 5 (không bao gồm index 6)

// Xóa 1 phần tử tại vị trí 3 và thêm 3 phần tử bất kỳ trong mảng arrNumber
arrNumber.splice(3, 1, 11, 12, 13); // Xóa 1 phần tử ở index 3 và thêm 3 phần tử mới

// Tìm vị trí đầu tiên phần tử có giá trị 3 trong mảng arrNumber
const firstIndexOf3 = arrNumber.indexOf(3);

// Tìm vị trí cuối cùng phần tử có giá trị 3 trong mảng arrNumber
const lastIndexOf3 = arrNumber.lastIndexOf(3);

// Kiểm tra phần tử có giá trị 3 có trong mảng arrNumber không
const includes3 = arrNumber.includes(3);

// Duyệt mảng forEach
arrNumber.forEach(item => {
    console.log(item);
});

// Duyệt mảng map
const squaredArray = arrNumber.map(item => item * item);

// Lọc những phần tử có giá trị lớn hơn 5 trong mảng arrNumber
const filteredArray = arrNumber.filter(item => item > 5);

// Tính tổng các phần tử mảng arrNumber
const sum = arrNumber.reduce((acc, curr) => acc + curr, 0);

// Nối 2 mảng arrNumber và arrStr lại thành 1 mảng
const combinedArray = arrNumber.concat(arrStr);

// Nối các phần tử mảng arrStr các nhau bởi dấu "-"
const joinedStr = arrStr.join("-");

// Gán tất cả các phần tử mảng arrNumber bằng 0
arrNumber.fill(0);

// Sao chép một hoặc nhóm phần tử từ vị trí này sang vị trí khác cùng mảng
arrNumber.copyWithin(2, 0, 2); // Sao chép từ index 0 đến index 2 và dán vào index 2

// Tìm kiếm phần tử trong mảng thỏa mãn điều kiện
const foundItem = arrNumber.find(item => item > 5); // Tìm phần tử đầu tiên lớn hơn 5
const foundIndex = arrNumber.findIndex(item => item > 5); // Tìm index của phần tử đầu tiên lớn hơn 5

// Kiểm tra tất cả các phần tử thỏa mãn điều kiện
const allGreaterThan5 = arrNumber.every(item => item > 5);

// Kiểm tra ít nhất một phần tử thỏa mãn điều kiện
const someGreaterThan5 = arrNumber.some(item => item > 5);
