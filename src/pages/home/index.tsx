import { Link } from "react-router-dom";

function HoePage() {
  return (
    <>
      <Link to="/new">문제 올리기</Link>
      <Link to="/detail">상세 페이지</Link>
    </>
  );
}

export default HoePage;
