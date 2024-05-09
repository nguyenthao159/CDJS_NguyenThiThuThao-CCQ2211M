function xuLyChuoi(chuoi) {
    // Xóa bỏ ký tự trắng ở đầu, cuối chuỗi và giữa 2 từ chỉ còn 1 khoảng trắng
    chuoi = chuoi.trim().replace(/\s+/g, ' ');

    // Chuyển đổi ký tự đầu của mỗi từ thành in HOA
    chuoi = chuoi.toLowerCase().replace(/(^|\s)\S/g, function(firstLetter) {
        return firstLetter.toUpperCase();
    });

    return chuoi;
}

let chuoiVao = "   thu Theo  xinh   dep   ";
var chuoiXuLy = xuLyChuoi(chuoiVao);
console.log(chuoiXuLy);