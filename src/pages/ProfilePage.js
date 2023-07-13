/*ProfilePage.js*/

import React from "react";
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
  return (
    <div className="profilepage-left-box-container">
      <div className="profilepage-left-box">왼쪽 박스</div>
    </div>
  );
}

// 메인 컴포넌트
function Main() {
  return (
    <div className="profilepage-main">
      <div className="profilepage-card">카드 1</div>
      <div className="profilepage-card">카드 2</div>
      <div className="profilepage-card">카드 3</div>
      <div className="profilepage-card">카드 4</div>
      <div className="profilepage-card">카드 5</div>
      <div className="profilepage-card">카드 6</div>
      <div className="profilepage-card">카드 7</div>
      <div className="profilepage-card">카드 8</div>
      <div className="profilepage-card">카드 9</div>
      <div className="profilepage-card">카드 10</div>
      <div className="profilepage-card">카드 11</div>
      <div className="profilepage-card">카드 12</div>
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
