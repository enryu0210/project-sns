/*ProfilePage.js*/

import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css"; // CSS 파일을 import 합니다.

// 헤더 컴포넌트
function Header() {
  return (
    <header className="profilepage-header">
      <div className="profilepage-profile-section">
        <div className="profilepage-profile-picture"></div> {/* 프로필 사진 */}
        <div className="profilepage-profile-info">
          <span className="profilepage-username">사용자 이름</span>{" "}
          {/* 사용자 이름 */}
          <button className="profilepage-edit-button">프로필 편집</button>{" "}
          {/* 프로필 편집 버튼 */}
          <button className="profilepage-settings-button">
            <span class="material-symbols-outlined">settings</span>
          </button>{" "}
          {/* 환경설정 버튼 */}
        </div>
      </div>
    </header>
  );
}

// 왼쪽 박스 컴포넌트
function LeftBox() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    console.log("홈 버튼이 클릭되었습니다.");
    navigate("/");
  };

  const handleFriendClick = () => {
    console.log("친구 버튼이 클릭되었습니다.");
    navigate("/friend");
  };

  const handleCategoryClick = () => {
    console.log("카테고리 버튼이 클릭되었습니다.");
    navigate("/category");
  };
  return (
    <div className="profilepage-left-box-container">
      <div className="profilepage-left-box">
        <div className="profilepage-menu">
          <button className="profilepage-menu-button" onClick={handleHomeClick}>
            <span class="material-symbols-outlined">home</span>
          </button>
          <button
            className="profilepage-menu-button"
            onClick={handleFriendClick}
          >
            <span class="material-symbols-outlined">group</span>
          </button>
          <button
            className="profilepage-menu-button"
            onClick={handleCategoryClick}
          >
            <span class="material-symbols-outlined">format_list_bulleted</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// 메인 컴포넌트
function Main() {
  return (
    <div className="profilepage-main">
      <div className="profilepage-card"></div>
      <div className="profilepage-card"></div>
      <div className="profilepage-card"></div>
      <div className="profilepage-card"></div>
      <div className="profilepage-card"></div>
      <div className="profilepage-card"></div>
      <div className="profilepage-card"></div>
      <div className="profilepage-card"></div>
      <div className="profilepage-card"></div>
      <div className="profilepage-card"></div>
      <div className="profilepage-card"></div>
      <div className="profilepage-card"></div>
    </div>
  );
}

// 컨테이너 컴포넌트
function ProfilePage() {
  return (
    <div className="profilepage-container">
      <Header />
      <LeftBox />
      <Main />
    </div>
  );
}

export default ProfilePage;
