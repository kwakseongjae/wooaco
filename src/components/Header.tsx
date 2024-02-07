import woowaco from "@assets/img/wooaco.png";

function Header() {
  return (
    <header>
      <div className="header_wrapper">
        <div className="header_logo">
          <img src={woowaco} alt="우아코" />
        </div>
        <div className="header_nav">
          <div>카테고리</div>
          <div>로그인</div>
          <div>회원가입</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
