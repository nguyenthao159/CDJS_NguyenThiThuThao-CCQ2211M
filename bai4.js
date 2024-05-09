function convert() {
    // Lấy giá trị và đơn vị từ người dùng
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;

    // Biến lưu trữ kết quả chuyển đổi
    var result;

    // Chuyển đổi giá trị từ đơn vị đầu vào sang đơn vị đích
    switch (inputUnit) {
        case "meter":
            if (outputUnit === "feet") {
                result = inputValue * 3.28084;
            } else if (outputUnit === "inch") {
                result = inputValue * 39.3701;
            } else {
                result = inputValue;
            }
            break;
        case "feet":
            if (outputUnit === "meter") {
                result = inputValue * 0.3048;
            } else if (outputUnit === "inch") {
                result = inputValue * 12;
            } else {
                result = inputValue;
            }
            break;
        case "inch":
            if (outputUnit === "meter") {
                result = inputValue * 0.0254;
            } else if (outputUnit === "feet") {
                result = inputValue * 0.0833333;
            } else {
                result = inputValue;
            }
            break;
    }

    // Hiển thị kết quả
    document.getElementById("result").textContent = "Kết quả: " + result.toFixed(2) + " " + outputUnit;
}
