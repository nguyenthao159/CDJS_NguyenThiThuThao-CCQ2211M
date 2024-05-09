function generateURL() {
    var inputString = document.getElementById("inputString").value;
    var urlString = convertToURLFriendly(inputString);
    document.getElementById("urlOutput").innerText = urlString;
}

function convertToURLFriendly(inputString) {
    // Loại bỏ khoảng trắng
    var khoangtrang = inputString.trim().replace(/\s+/g, '_');

    // Loại bỏ thẻ (tag)
    var Tags = khoangtrang.replace(/<\/?[^>]+(>|$)/g, '');

    // Loại bỏ các ký tự đặc biệt
    var urlString = Tags.replace(/[^\w\s-]/g, '');

    // Thay thế khoảng trắng bằng dấu gạch dưới (_) hoặc dấu gạch ngang (-)
    urlString = urlString.replace(/\s+/g, '_');

    return urlString;
}