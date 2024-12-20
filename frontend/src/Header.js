import { FaSearch, FaTimes } from 'react-icons/fa'
import { useState } from 'react';

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(prevState => !prevState);
  };

  return (
    <div className="header">
      <div className="header__left">
        <a href="https://www.manutd.com/ko" target="_blank" rel="noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/ko/9/9e/%EB%A7%A8%EC%B2%B4%EC%8A%A4%ED%84%B0_%EC%9C%A0%EB%82%98%EC%9D%B4%ED%8B%B0%EB%93%9C_FC_%EB%A1%9C%EA%B3%A0.png?20231215121349" 
          alt="맨체스터 유나이티드 로고" className="header__logo" />
        </a>
        <h1 className="header__title">맨체스터 유나이티드 선수단</h1>
      </div>

      <div className="header__right" onClick={toggleSearch}>
        <FaSearch className="header__search-icon" />
        <p>검색</p>
      </div>

      {searchOpen && (
        <>
          <div className="header__overlay" onClick={toggleSearch}></div>

          <div className="header__search">
            <div className="header__search-header">
              <div className="header__search-input-container">
                <FaSearch className="header__search-input-icon" />
                <input
                  type="text"
                  placeholder="너는 무엇을 찾고 있니?"
                  className="header__search-input"
                />
              </div>
              <button className="header__search-button">검색</button>
              <FaTimes className="header__close-icon" onClick={toggleSearch} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;


