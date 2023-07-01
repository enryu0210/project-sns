import React from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

function Home() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    console.log("프로필 버튼이 클릭되었습니다.");
    navigate("/profile");
  };

  const handleCardClick = (postId) => {
    console.log("게시물", postId, "가 클릭되었습니다.");
  };

  const handleSearch = () => {
    console.log("검색 버튼이 클릭되었습니다.");
  };

  return (
    <div className="container">
      <header>
        <button className="profile-button" onClick={handleProfileClick}>
          {/* 프로필 버튼 내용 */}
        </button>
        <div className="search-box">
          <input type="text" placeholder="검색..." />
          <button className="search-icon" onClick={handleSearch}>
            <FiSearch />
          </button>
        </div>
      </header>
      <div className="left-box">
        <div className="menu">
          <button className="menu-button">친구</button>
          <button className="menu-button">카테고리</button>
        </div>
        {/* 왼쪽 박스 내용 */}
      </div>
      <main>
        <div className="post-grid">
          {/* 게시물 카드 */}
          <div className="post-card" onClick={() => handleCardClick(1)}>
            {/* 게시물 내용 */}
          </div>
          <div className="post-card" onClick={() => handleCardClick(2)}>
            {/* 게시물 내용 */}
          </div>
          <div className="post-card" onClick={() => handleCardClick(3)}>
            {/* 게시물 내용 */}
          </div>
          <div className="post-card" onClick={() => handleCardClick(4)}>
            {/* 게시물 내용 */}
          </div>
          <div className="post-card" onClick={() => handleCardClick(5)}>
            {/* 게시물 내용 */}
          </div>
          <div className="post-card" onClick={() => handleCardClick(6)}>
            {/* 게시물 내용 */}
          </div>
          <div className="post-card" onClick={() => handleCardClick(7)}>
            {/* 게시물 내용 */}
          </div>
          <div className="post-card" onClick={() => handleCardClick(8)}>
            {/* 게시물 내용 */}
          </div>
          <div className="post-card" onClick={() => handleCardClick(9)}>
            {/* 게시물 내용 */}
          </div>
          <div className="post-card" onClick={() => handleCardClick(10)}>
            {/* 게시물 내용 */}
          </div>
          <div className="post-card" onClick={() => handleCardClick(11)}>
            {/* 게시물 내용 */}
          </div>
          <div className="post-card" onClick={() => handleCardClick(12)}>
            {/* 게시물 내용 */}
          </div>
          <div className="post-card" onClick={() => handleCardClick(13)}>
            {/* 게시물 내용 */}
          </div>
          <div className="post-card" onClick={() => handleCardClick(14)}>
            {/* 게시물 내용 */}
          </div>
          <div className="post-card" onClick={() => handleCardClick(15)}>
            {/* 게시물 내용 */}
          </div>
          {/* 추가적인 게시물 카드 */}
        </div>
      </main>
    </div>
  );
}

export default Home;
