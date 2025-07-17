document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById('root');

    const imgCleanser1 = "http://localhost:3845/assets/f04767ced4777ead84966534077c86a53b7268f7.png";
    const imgImage1 = "http://localhost:3845/assets/0a8b4870f299e6e8efdc3f0acf78ed8d8dfa38d9.png";
    const imgImage2 = "http://localhost:3845/assets/529ad7a0dd7765c89f862b5159e9373bb7ab999d.png";
    const imgImage3 = "http://localhost:3845/assets/ccee8ce789bcd9d1ac26814747e3bd2cd5e50460.png";
    const imgImage4 = "http://localhost:3845/assets/5c98fbe6cbc176df1103ab4fd871f42c077a8233.png";
    const imgImage6 = "http://localhost:3845/assets/bc16c13a7f972d4563bc186cef99ac1129d09ccb.png";
    const imgImage5 = "http://localhost:3845/assets/adb7a9b251565364f0a18e84d21c7d0621715177.png";
    const imgLogo = "http://localhost:3845/assets/2b2858790bc64269dfc98c4c5423ac9b842a78f2.png";
    const img = "http://localhost:3845/assets/e83a6b33a5f384e5a9cd9ff81278c4e4bebd935c.png";
    const imgStar1 = "http://localhost:3845/assets/6228ad188cf337c0e8af78fd080f641b852fa2be.svg";
    const imgFrame15 = "http://localhost:3845/assets/50cef7a143f83e056efc1dcef9f38417c1e72629.svg";
    const imgVector5 = "http://localhost:3845/assets/89491a6036008b14812083f6f35ac524b8900a52.svg";
    const imgVector1 = "http://localhost:3845/assets/3ac2c9599f6bcd5739ef7fbf043cec8ebade10e8.svg";
    const imgMdiYoutube = "http://localhost:3845/assets/50375084d4f2eaf932926e4c42699b8e8a01de13.svg";
    const imgMdiInstagram = "http://localhost:3845/assets/9ca830dade4bb5435601da4b60c96d5537ca2ebe.svg";
    const imgIcBaselineFacebook = "http://localhost:3845/assets/b92c338eddf5b9451673722c8311c7d0b5101c30.svg";
    const imgRiKakaoTalkFill = "http://localhost:3845/assets/eb0c907a346a26b455ae9963a9fba96e35db99c9.svg";

    const main = document.createElement('div');
    main.className = 'main';
    main.id = 'node-8_89';

    main.innerHTML = `
        <div class="header" id="node-8_102">
            <div class="header-content" id="node-8_101">
                <div class="logo-container" id="node-8_100">
                    <div class="logo-content" id="node-8_98">
                        <div class="logo" id="node-8_90" style="background-image: url('${imgLogo}')"></div>
                        <div class="brand-name" id="node-8_91"><p>Belure</p></div>
                    </div>
                </div>
                <div class="search-bar" id="node-47_591">
                    <img class="search-icon" src="${imgFrame15}" alt="search icon"/>
                    <div class="search-input" id="node-47_596"><p>Search</p></div>
                </div>
                <div class="header-buttons" id="node-8_99">
                    <div class="login-button" id="node-8_94">
                        <div class="login-button-content">
                            <div class="login-button-text" id="node-I8_94-3_113"><p>Login</p></div>
                        </div>
                        <div class="login-button-border"></div>
                    </div>
                    <div class="signup-button" id="node-8_92">
                        <div class="signup-button-text" id="node-I8_92-3_113"><p>Sign up</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav" id="node-8_96">
            <div class="nav-content" id="node-16_135">
                <div class="nav-item" id="node-8_103"><p>Home</p></div>
                <div class="nav-item" id="node-8_104"><p>Collection</p></div>
                <div class="nav-item" id="node-8_105"><p>Best Picks</p></div>
                <div class="nav-item" id="node-8_106"><p>Promotion</p></div>
                <div class="nav-item" id="node-8_107"><p>Reviews</p></div>
                <div class="nav-item" id="node-8_108"><p>Cart</p></div>
            </div>
        </div>
        <div class="slogan" id="node-16_136">
            <div class="slogan-background" id="node-I16_136-11_111" style="background-image: url('${img}')"></div>
        </div>
        <div class="slogan-text" id="node-24_139"><p>Your true glow starts here</p></div>
        <div class="best-sellers" id="node-32_225">
            <div class="best-sellers-content" id="node-32_226">
                <div class="card" id="node-32_189"></div>
                <div class="card" id="node-32_198"></div>
                <div class="card" id="node-32_207"></div>
                <div class="card" id="node-32_216"></div>
            </div>
            <div class="best-sellers-header" id="node-43_425">
                <div class="best-sellers-title" id="node-43_420">
                    <div class="best-sellers-main-title" id="node-24_145"><p>Best Sellers</p></div>
                    <div class="best-sellers-sub-title" id="node-28_146"><p>가장 많은 사랑을 받은 제품을 만나보세요.</p></div>
                </div>
                <div class="more-button" id="node-43_423">
                    <div class="more-button-line"><img src="${imgVector1}" alt="more"/></div>
                    <div class="more-button-text" id="node-35_249"><p>+ MORE</p></div>
                </div>
            </div>
        </div>
        <div class="category-section" id="node-38_346">
            <div class="category-header" id="node-54_598">
                <div class="category-main-title" id="node-38_347"><p>OUR COLLECTION</p></div>
                <div class="category-sub-title" id="node-38_348"><p>제품 카테고리별로 탐색해보세요.</p></div>
            </div>
            <div class="category-grid" id="node-54_597">
                <div class="category-card" id="node-38_336"></div>
                <div class="category-card" id="node-35_285"></div>
                <div class="category-card" id="node-35_309"></div>
                <div class="category-card" id="node-35_314"></div>
                <div class="category-card" id="node-35_319"></div>
                <div class="category-card" id="node-38_331"></div>
            </div>
        </div>
        <div class="footer" id="node-54_599">
            <div class="footer-logo-container" id="node-54_620">
                <div class="footer-logo" id="node-54_600" style="background-image: url('${imgLogo}')"></div>
                <div class="footer-brand-name" id="node-54_602"><p>Belure</p></div>
                <div class="footer-slogan" id="node-54_607"><p>자연에서 찾은 순수함, 피부에 전하는 진정성</p></div>
            </div>
            <div class="footer-links-1" id="node-54_619">
                <p>고객 센터 문의</p>
                <p>FAQ</p>
                <p>피부 상담 예약</p>
                <p>주문/배송 조회</p>
            </div>
            <div class="footer-links-2" id="node-54_618">
                <p>브랜드 스토리</p>
                <p>이용약관</p>
                <p>개인정보 처리방침</p>
                <p>배송 및 반품 정책</p>
                <p>채용 안내</p>
            </div>
            <div class="social-media" id="node-55_629">
                <img src="${imgMdiYoutube}" alt="youtube"/>
                <img src="${imgMdiInstagram}" alt="instagram"/>
                <img src="${imgIcBaselineFacebook}" alt="facebook"/>
                <img src="${imgRiKakaoTalkFill}" alt="kakao-talk"/>
            </div>
        </div>
    `;

    root.appendChild(main);
});
