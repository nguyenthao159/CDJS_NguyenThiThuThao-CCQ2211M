function str_limit(str,limit=10)
{
    //xoa tag HTML
    str =str.replace(/<[^>]*>/g," ");
    // Xóa bỏ ký tự trắng ở đầu, cuối chuỗi và giữa 2 từ chỉ còn 1 khoảng trắng
    str = str.trim().replace(/\s+/g, ' ');
    //chuyen ve in hoa
    str = str.toLowerCase();
    //chuyen ky tu dau ve in hoa
    const mang = str.split(" ");
    const mangmoi =mang.slice(0,limit);
    str = mangmoi.join(" ");
    return str;

}
let str= "  thu theo    Xing dep Nhat qua   dat Nay  ";
console.log(str.length);
str=str_limit(str);
console.log(str);