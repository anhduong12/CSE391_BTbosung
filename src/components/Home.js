import React from "react";
import { Link } from "react-router-dom";
function Home(){
    return (

        <div class ="container-fluid">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={require("../img/slider1.png")} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={require("../img/slider2.png")} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={require("../img/slider3.png")} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={require("../img/slider4.png")} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="row " style={{ margin:'0 5%'}}>
        <div class="col-md-12">
          <h3 style={{paddingTop: 30, paddingBottom: 30}}>TIN MỚI NHẤT</h3>
        </div>
        <div class="col-md-3 text-start">
          <Link to="#" class="text-dark text-decoration-none">
            <div class="card border-0 mb-4">
              <div class="position-relative">
                <img
                  src={require("../img/news1.jpg")}
                  class="w-100 border-bottom border-danger border-5"
                />
                <div class="bg-danger text-white fw-bold w-25 text-center position-absolute bottom-0">
                  TIN BÀI
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder" style={{textTransform: 'uppercase'}}> SOICT đồng hành và hỗ trợ sinh viên Nguyễn Văn Quyền
                </h6>
                <p class="card-text">
                  Nguyễn Văn Quyền là một sinh viên lớp KHMT04 K65 thuộc Trường CNTT&TT, Đại học Bách khoa Hà Nội. Hoàn cảnh gia...
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-md-3 text-start">
          <Link to="#" class="text-dark text-decoration-none">
            <div class="card border-0 mb-4">
              <div class="position-relative">
                <img
                  src={require("../img/news2.jpg")}
                  class="w-100 border-bottom border-danger border-5"
                />
                <div class="bg-danger text-white fw-bold w-25 text-center position-absolute bottom-0">
                  TIN BÀI
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder" style={{textTransform: 'uppercase'}}> TỔNG KẾT ĐẠI HỘI ĐẠI BIỂU ĐOÀN THANH NIÊN TRƯỜNG CÔNG NGHỆ </h6>
                <p class="card-text">
                  Vào hồi 14h ngày 07/05/2022 tại Hội trường dốc tòa nhà B1, được sự đồng ý của Đoàn thanh niên Trường Đại...
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-md-3 text-start">
          <Link to="#" class="text-dark text-decoration-none">
            <div class="card border-0 mb-4">
              <div class="position-relative">
                <img
                  src={require("../img/news3.jpg")}
                  class="w-100 border-bottom border-danger border-5"
                />
                <div class="bg-danger text-white fw-bold text-center position-absolute bottom-0">
                  THÔNG BÁO
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder" style={{textTransform: 'uppercase'}}> Hội thảo: Giới thiệu Chương trình Đào tạo Kỹ sư AI Vingroup Cơ hội Đào tạo</h6>
                <p class="card-text">
                  NẮM BẮT CƠ HỘI TRỞ THÀNH KỸ SƯ AI VINGROUP Nếu bạn đang bănnkhoăn về việc ứng tuyển tham gia chương...
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-md-3 text-start">
          <Link to="#" class="text-dark text-decoration-none">
            <div class="card border-0 mb-4">
              <div class="position-relative">
                <img
                  src={require("../img/news4.jpg")}
                  class="w-100 border-bottom border-danger border-5"
                />
                <div class="bg-danger text-white fw-bold text-center position-absolute bottom-0">
                  THÔNG BÁO
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder" style={{textTransform: 'uppercase'}}>HỘI NGHỊ SINH VIÊN NGHIÊN CỨU KHOA HỌC 2021-2022</h6>
                <p class="card-text">
                  I. MỤC ĐÍCH Hội nghị Sinh viên nghiên cứu khoa học (SV NCKH) là sự kiện thường niên được tổ chức tại Trường...
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div class="bg-danger py-1">
        <Link to="/new" class="text-decoration-none text-white fs-5">
          Xem thêm tin tức
        </Link>
      </div>
      <div class="sukien">
        <div class="row mx-5">
          <div class="col-md-12">
            <h3 class="py-4 ">Sự kiện mới nhất</h3>
          </div>
          <div class="col-md-3 text-start">
            <Link to="#" class="text-dark text-decoration-none">
              <div class="card border-0 mb-4 position-relative rounded-0">
                <img  src={require("../img/sk1.jpg")}  class="w-100"/>
                <div class="date bg-dark text-white fw-bold text-center position-absolute p-2">
                  01 <br /> TH 06
                </div>
                <div class="card-body px-0">
                  <h5 class="card-title fw-bolder pt-4 pb-1"> Lễ ra măt "Trung tâm Công nghệ và giải pháp chuyển đổi"</h5>
                  <p class="card-text">
                    Thời gian: 9:45 AM - 01/06/2022 <br />
                    Địa điểm: Phòng 404, Nhà B1, trường Đại học
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 text-start">
            <Link to="#" class="text-dark text-decoration-none">
              <div class="card border-0 mb-4 position-relative rounded-0">
                <img src={require("../img/sk2.png")}class="w-100"/>
                <div class="date bg-dark text-white fw-bold text-center position-absolute p-2">
                  14 <br /> TH 05
                </div>

                <div class="card-body px-0">
                  <h5 class="card-title fw-bolder pt-4 pb-1">INOVATIONDAY</h5>

                  <p class="card-text">
                    Thời gian: 8:00 AM - 14/05/2022 <br />
                    Địa điểm: Sảnh tầng 1-4 và Hội trường B1
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 text-start">
            <Link to="#" class="text-dark text-decoration-none">
              <div class="card border-0 mb-4 position-relative rounded-0">
                <img
                  src={require("../img/sk3.jpg")}
                  class="w-100"
                />
                <div class="date bg-dark text-white fw-bold text-center position-absolute p-2">
                  08 <br /> TH 05
                </div>
                <div class="card-body px-0">
                  <h5 class="card-title fw-bolder pt-4 pb-1">
                   CUỘC THI TÌM KIẾM Ý TƯỞNG SÁNG TẠO SINH VIÊN 2022
                  </h5>
                  <p class="card-text">
                    Thời gian: 8:00 PM - 08/05/2022 <br />
                    Địa điểm: Tòa nhà B1-Đại học Bách Khoa
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 text-start">
            <Link to="#" class="text-dark text-decoration-none">
              <div class="card border-0 mb-4 position-relative rounded-0">
                <img
                  src={require("../img/sk4.jpg")}
                  class="w-100"
                />
                <div class="date bg-dark text-white fw-bold text-center position-absolute p-2">
                  06 <br /> TH 05
                </div>
                <div class="card-body px-0">
                  <h5 class="card-title fw-bolder pt-4 pb-1">
                    HỘI YTHAOR KHOA HỌC VỀ XU THẾ HIỆN TẠI VÀ TƯƠNG LAI
                  </h5>
                  <p class="card-text">
                    Thời gian: 2:00 PM - 06/05/2022 <br />
                    Địa điểm: Hội trường dốc, tầng 3 nhà B1
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div class="bg-danger py-1">
          <Link to="/news" class="text-decoration-none text-white fs-5">
            Xem thêm sự kiện
          </Link>
        </div>
      </div>
      {/* Đào tạo - tuyển sinh */}
      <div class="container-fluid">
        <div class="row my-4">
          <div class="col-md-2"></div>
          <div class="col-md-8 text-cente">
            <h3 class="mt-2 mb-4">ĐÀO TẠO - TUYỂN SINH</h3>
            <p> Năm 2020, Tổ chức Giáo dục Quacquarelli Symonds (viết tắt QS - Vương quốc Anh) đã đánh giá và xếp chất lượng đào tạo và nghiên cứu của ĐHBK Hà Nội trong các lĩnh vực mà Trường đang đảm nhận thuộc nhóm hạng từ 451 đến 500 trên toàn Thế giới, tiếp tục giữ vị trí số 1 tại Việt Nam.
            </p>
          </div>
          <div class="col-md-2"></div>
          <div class="container">
            <div class="row ms-5">
              <div class="col-md-5 shadow-sm my-5 ms-5">
                <div class="row">
                  <div class="col-md-6">
                    <Link to="#">
                      <img
                        src={require("../img/daotao1.jpg")}
                        class="w-100 p-1"
                      />
                    </Link>
                  </div>
                  <div class="col-md-6 text-start pt-3">
                    <h5>CHƯƠNG TRÌNH ĐÀO TẠO</h5>
                    <p>
                      Trường hiện đang cung cấp hơn 20 chương trình đào tạo chất lượng cao thuộc 3 hệ đại học, ThS và TS; trong đó, có chương trình được thị trường lao động quốc tế đón nhận với hơn 60% sinh viên tốt nghiệp làm việc ở nước ngoài. Các chương trình đào tạo thuộc vào 3 nhóm ngành chính: Khoa học Máy tính, Kỹ thuật Máy tính, và Khoa học Dữ liệu và Trí tuệ Nhân tạo…
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-5 shadow-sm bg-white m-5">
                <div class="row">
                  <div class="col-md-6 p-0">
                    <Link to="#">
                      <img
                        src={require("../img/daotao2.jpg")}
                        class="w-100 p-1"
                      />
                    </Link>
                  </div>
                  <div class="col-md-6 text-start pt-3">
                    <h5>KIẾN TẠO TƯƠNG LAI VỚI SoICT</h5>
                    <p>Thương hiệu Kỹ sư CNTT Bách khoa đã vượt ra khỏi biên giớinước nhà, và ngày càng chứng minh được chất lượng trêntrường Quốc tế. Trong làn sóng Chuyển đổi số, lựa chọnphát triển tương lai với SoICT sẽ đem lại cho các bạn cơhội trở thành các chuyên gia công nghệ, có khả năng làmchủ và dẫn dắt sự phát triển KHCN nước nhà…{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
export default Home