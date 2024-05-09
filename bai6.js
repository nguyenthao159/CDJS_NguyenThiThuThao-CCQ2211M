function updateClock() {
    // Lấy thời gian hiện tại
    const now = new Date();

    // Lấy giờ, phút và giây từ đối tượng Date
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Định dạng hiển thị thời gian: giờ:phút:giây
    const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

    // Hiển thị thời gian trên giao diện
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.textContent = timeString;
    }

    // Cập nhật lại thời gian sau mỗi giây
    setTimeout(updateClock, 1000);
}

// Hàm định dạng thời gian thành dạng hh:mm:ss
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Gọi hàm updateClock lần đầu để bắt đầu đồng hồ
updateClock();
