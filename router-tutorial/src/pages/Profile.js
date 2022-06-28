import { useParams } from "react-router-dom";

const data = {
  maezung: {
    name: "임혜정",
    description: "리액트를 공부하는 개발자",
  },
  huiting: {
    name: "임혜정",
    description: "50M 잠영을 성공한 스위머",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username]; //동적 분해 할당
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
