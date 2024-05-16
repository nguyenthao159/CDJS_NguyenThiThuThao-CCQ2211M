import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Logo from "./assets/images/logocuoi.png";
import Slider1 from "./assets/images/Sline1.png";
import Slider2 from "./assets/images/Sline2.png";
import Hinh1 from "./assets/images/hinh1.jpg";
import Hinh3 from "./assets/images/hinh3.jpg";
import Hinh4 from "./assets/images/hinh4.jpg";
import Hinh5 from "./assets/images/hinh5.jpg";
import Hinh6 from "./assets/images/hinh6.jpg";
import vay5 from "./assets/images/vay5.jpg";
import vay2 from "./assets/images/vay2.jpg";
import vay3 from "./assets/images/vay3.jpg";
import vay4 from "./assets/images/vay4.jpg";
import vay6 from "./assets/images/vay6.jpg";
import vest1 from "./assets/images/vest1.jpg";
import vest2 from "./assets/images/vest2.jpg";
import vest3 from "./assets/images/vest3.jpg";
import vest4 from "./assets/images/vest4.jpg";
import { BsSearchHeart } from "react-icons/bs";
import { IoBagRemove } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdLocalGroceryStore } from "react-icons/md";
import {
  FaUserEdit,
  FaCartPlus,
  FaYoutube,
  FaGoogle,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaBell } from "react-icons/fa";
function App() {
  return (
    <>
      <header className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <img src={Logo} style={{ width: "150px" }} alt="logo" />
            </div>
            <div className="col-md-8">
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    Trang chủ
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav me-auto mb-1 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                          Giới thiệu
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Tin tức
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Đồ Cưới
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Váy Cưới
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Áo Vest
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Cà Vạt,Hoa Cưới
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">
                        Album ảnh cưới
                        </a>
                      </li>
                    </ul>
                    <form class="d-flex" role="search">
                      <input
                        class="form-control me-1"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button class="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
            <div className="col-md-2 mt-1">
              <FaRegUser style={{ fontSize: "20px", marginRight: "15px" }} />
              <CiHeart style={{ fontSize: "20px", marginRight: "15px" }} />
              <MdLocalGroceryStore
                style={{ fontSize: "20px", marginRight: "15px" }}
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Slider1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Slider2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Slider1} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <h1 class="text-center mt-3">ALBUM ẢNH CƯỚI</h1>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Hinh1} class="d-block w-100" alt="..." />
          </div>
        </div>
        <div>
          <h1 class="text-center mt-3">XU HƯỚNG VEST CƯỚI</h1>
          <div class="row">
            <div class="col-md-3">
              <div class="card">
                <img src={vest1} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={vest2} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={vest3} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={vest4} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-3">
              <div class="card">
                <img src={vest1} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={vest2} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={vest3} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={vest4} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 class="text-center mt-3">XU HƯỚNG VÁY CƯỚI</h1>
          <div class="row">
            <div class="col-md-3">
              <div class="card">
                <img src={vay6} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={vay2} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={vay3} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={vay4} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-3">
              <div class="card">
                <img src={Hinh6} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={Hinh3} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={vay2} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <img src={vay6} alt="logo" />
                <div class="card-body">
                  <h5 class="card-title">Tên sản phẩm</h5>
                  <p class="card-text">Mô tả sản phẩm ngắn gọn.</p>
                  <a href="#" class="btn btn-primary">
                    Mua ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-light">
        <section class="hdl-footer pb-4">
          <div class="footer_container">
            <div class="row">
              <div class="col-md-6 pt-6">
                <h3 class="widgettilte">CHÚNG TÔI LÀ AI ?</h3>
                <div className="col-md-3">
                  <img src={Logo} style={{ width: "150px" }} alt="logo" />
                </div>
                <i class="pt-1">
                  Chào mừng đến với Your Wedding - nơi tạo ra những khoảnh khắc
                  đẹp nhất của cuộc đời bạn! Ở Your Wedding, chúng tôi hiểu rằng
                  mỗi đám cưới là một câu chuyện riêng biệt, và chúng tôi cam
                  kết ghi lại những khoảnh khắc đặc biệt của bạn với sự tinh tế
                  và độ chuyên nghiệp tuyệt đối. Với sự đam mê và kinh nghiệm,
                  chúng tôi không chỉ là những nhà nhiếp ảnh mà còn là những
                  người tạo ra những tác phẩm nghệ thuật đẹp nhất từ ngày quan
                  trọng của bạn.
                </i>
                <p>Địa chỉ: 8/60,Đường 147, P.Phước Long B ,Q9,TP. Thủ Đức</p>
                <p>
                  Điện thoại: 0364035460 (call, zalo) -
                  Email:nguyenthaoken159@gmail.com
                </p>
                <h3 class="widgettilte">MẠNG XÃ HỘI</h3>
                <div class="social my-1">
                  <FaFacebook />
                  <FaInstagram />
                  <FaGoogle />
                  <FaYoutube />
                </div>
              </div>
              <div class="col-md-2 pt-2">
                <h3 class="widgettilte">
                  <strong>Liên hệ</strong>
                </h3>
              </div>
              <div class="col-md-2 pt-2 text-end">
                <h3 class="fs-5 text-end">
                  <strong>Lượt truy cập</strong>
                </h3>
                <p class="my-1">99999 lượt</p>
              </div>
            </div>
          </div>
        </section>
        <section class="dhl-copyright bg-dark py-3">
          <div class="container text-center text-white">
            Thiết kế bởi: Nguyễn Thị Thu Thảo- Phone: 0364035460
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
