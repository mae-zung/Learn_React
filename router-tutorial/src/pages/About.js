import { useLocation, useSearchParams } from "react-router-dom";

// useLocation: location 객체를 반환하는 Hook
// - pathname: 현재 주소의 경로 (쿼리스트링 제외)
// - search: 맨 앞의 ? 문자를 포함한 쿼리스트링 값
// - hash: 주소의 # 문자열 뒤의 값
// - state: 페이지로 이동할 때 임의로 넣을 수 있는 상태 값
// - key: location 객체의 고유값, 초기에는 default, 페이지가 변경될 때마다 고유의 값이 생성됨.

// const About = () => {
//   const location = useLocation();
//   return (
//     <div>
//       <h1>소개</h1>
//       <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
//       <p>쿼리스트링:{location.search}</p>
//     </div>
//   );
// };

// useSearchParams
// 배열 타입의 값을 반환
// 첫 번째 원소: 쿼리파라미터를 조회 및 수정하는 메서드를 담은 객체를 반환함.
// get 메서드를 통해 특정 쿼리파라미터를 조회할 수 있음.
// set 메서드를 통해 특정 쿼리파라미터를 업데이트 할 수 있음.
// 조회 시 쿼리파라미터가 존재하지 않는다면 null로 조회됨.
// 두 번째 원소: 쿼리파라미터를 객체 형태로 업데이트할 수 있는 함수를 반환함.

const About = () => {
  const [serachParams, setSearchParams] = useSearchParams();
  const detail = serachParams.get("detail");
  const mode = serachParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };
  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail:{detail}</p>
      <p>mode:{mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode+1</button>
    </div>
  );
};

export default About;
