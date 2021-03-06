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
          <h3 style={{paddingTop: 30, paddingBottom: 30}}>TIN M???I NH???T</h3>
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
                  TIN B??I
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder" style={{textTransform: 'uppercase'}}> SOICT ?????ng h??nh v?? h??? tr??? sinh vi??n Nguy???n V??n Quy???n
                </h6>
                <p class="card-text">
                  Nguy???n V??n Quy???n l?? m???t sinh vi??n l???p KHMT04 K65 thu???c Tr?????ng CNTT&TT, ?????i h???c B??ch khoa H?? N???i. Ho??n c???nh gia...
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
                  TIN B??I
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder" style={{textTransform: 'uppercase'}}> T???NG K???T ?????I H???I ?????I BI???U ??O??N THANH NI??N TR?????NG C??NG NGH??? </h6>
                <p class="card-text">
                  V??o h???i 14h ng??y 07/05/2022 t???i H???i tr?????ng d???c t??a nh?? B1, ???????c s??? ?????ng ?? c???a ??o??n thanh ni??n Tr?????ng ?????i...
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
                  TH??NG B??O
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder" style={{textTransform: 'uppercase'}}> H???i th???o: Gi???i thi???u Ch????ng tr??nh ????o t???o K??? s?? AI Vingroup C?? h???i ????o t???o</h6>
                <p class="card-text">
                  N???M B???T C?? H???I TR??? TH??NH K??? S?? AI VINGROUP N???u b???n ??ang b??nnkho??n v??? vi???c ???ng tuy???n tham gia ch????ng...
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
                  TH??NG B??O
                </div>
              </div>
              <div class="card-body px-0">
                <h6 class="card-title fw-bolder" style={{textTransform: 'uppercase'}}>H???I NGH??? SINH VI??N NGHI??N C???U KHOA H???C 2021-2022</h6>
                <p class="card-text">
                  I. M???C ????CH H???i ngh??? Sinh vi??n nghi??n c???u khoa h???c (SV NCKH) l?? s??? ki???n th?????ng ni??n ???????c t??? ch???c t???i Tr?????ng...
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div class="bg-danger py-1">
        <Link to="/new" class="text-decoration-none text-white fs-5">
          Xem th??m tin t???c
        </Link>
      </div>
      <div class="sukien">
        <div class="row mx-5">
          <div class="col-md-12">
            <h3 class="py-4 ">S??? ki???n m???i nh???t</h3>
          </div>
          <div class="col-md-3 text-start">
            <Link to="#" class="text-dark text-decoration-none">
              <div class="card border-0 mb-4 position-relative rounded-0">
                <img  src={require("../img/sk1.jpg")}  class="w-100"/>
                <div class="date bg-dark text-white fw-bold text-center position-absolute p-2">
                  01 <br /> TH 06
                </div>
                <div class="card-body px-0">
                  <h5 class="card-title fw-bolder pt-4 pb-1"> L??? ra m??t "Trung t??m C??ng ngh??? v?? gi???i ph??p chuy???n ?????i"</h5>
                  <p class="card-text">
                    Th???i gian: 9:45 AM - 01/06/2022 <br />
                    ?????a ??i???m: Ph??ng 404, Nh?? B1, tr?????ng ?????i h???c
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
                    Th???i gian: 8:00 AM - 14/05/2022 <br />
                    ?????a ??i???m: S???nh t???ng 1-4 v?? H???i tr?????ng B1
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
                   CU???C THI T??M KI???M ?? T?????NG S??NG T???O SINH VI??N 2022
                  </h5>
                  <p class="card-text">
                    Th???i gian: 8:00 PM - 08/05/2022 <br />
                    ?????a ??i???m: T??a nh?? B1-?????i h???c B??ch Khoa
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
                    H???I YTHAOR KHOA H???C V??? XU TH??? HI???N T???I V?? T????NG LAI
                  </h5>
                  <p class="card-text">
                    Th???i gian: 2:00 PM - 06/05/2022 <br />
                    ?????a ??i???m: H???i tr?????ng d???c, t???ng 3 nh?? B1
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div class="bg-danger py-1">
          <Link to="/news" class="text-decoration-none text-white fs-5">
            Xem th??m s??? ki???n
          </Link>
        </div>
      </div>
      {/* ????o t???o - tuy???n sinh */}
      <div class="container-fluid">
        <div class="row my-4">
          <div class="col-md-2"></div>
          <div class="col-md-8 text-cente">
            <h3 class="mt-2 mb-4">????O T???O - TUY???N SINH</h3>
            <p> N??m 2020, T??? ch???c Gi??o d???c Quacquarelli Symonds (vi???t t???t QS - V????ng qu???c Anh) ???? ????nh gi?? v?? x???p ch???t l?????ng ????o t???o v?? nghi??n c???u c???a ??HBK H?? N???i trong c??c l??nh v???c m?? Tr?????ng ??ang ?????m nh???n thu???c nh??m h???ng t??? 451 ?????n 500 tr??n to??n Th??? gi???i, ti???p t???c gi??? v??? tr?? s??? 1 t???i Vi???t Nam.
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
                    <h5>CH????NG TR??NH ????O T???O</h5>
                    <p>
                      Tr?????ng hi???n ??ang cung c???p h??n 20 ch????ng tr??nh ????o t???o ch???t l?????ng cao thu???c 3 h??? ?????i h???c, ThS v?? TS; trong ????, c?? ch????ng tr??nh ???????c th??? tr?????ng lao ?????ng qu???c t??? ????n nh???n v???i h??n 60% sinh vi??n t???t nghi???p l??m vi???c ??? n?????c ngo??i. C??c ch????ng tr??nh ????o t???o thu???c v??o 3 nh??m ng??nh ch??nh: Khoa h???c M??y t??nh, K??? thu???t M??y t??nh, v?? Khoa h???c D??? li???u v?? Tr?? tu??? Nh??n t???o???
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
                    <h5>KI???N T???O T????NG LAI V???I SoICT</h5>
                    <p>Th????ng hi???u K??? s?? CNTT B??ch khoa ???? v?????t ra kh???i bi??n gi???in?????c nh??, v?? ng??y c??ng ch???ng minh ???????c ch???t l?????ng tr??ntr?????ng Qu???c t???. Trong l??n s??ng Chuy???n ?????i s???, l???a ch???nph??t tri???n t????ng lai v???i SoICT s??? ??em l???i cho c??c b???n c??h???i tr??? th??nh c??c chuy??n gia c??ng ngh???, c?? kh??? n??ng l??mch??? v?? d???n d???t s??? ph??t tri???n KHCN n?????c nh?????{" "}
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