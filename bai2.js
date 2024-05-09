// Lắng nghe sự kiện click trên nút "Thêm"
document.getElementById("addButton").addEventListener("click", function() {
    var subjectInput = document.getElementById("subjectName");
    var subjectName = subjectInput.value.trim();

    // Kiểm tra xem tên môn học có được nhập hay không
    if (subjectName === "") {
        alert("Vui lòng nhập tên môn học.");
        return;
    }

    var subjectList = document.getElementById("subjectList");

    // Tạo phần tử li mới chứa tên môn học
    var listItem = document.createElement("li");
    listItem.textContent = subjectName;

    // Tạo nút xóa môn học và gán sự kiện cho nút này
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Xóa";
    deleteButton.addEventListener("click", function() {
        subjectList.removeChild(listItem);
    });

    // Thêm nút xóa vào phần tử li
    listItem.appendChild(deleteButton);

    // Thêm phần tử li vào danh sách môn học
    subjectList.appendChild(listItem);

    // Xóa nội dung của input
    subjectInput.value = "";
});
