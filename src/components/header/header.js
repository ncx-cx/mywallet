import {React, useState, useEffect} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Svg from '../Svg';
import Png from '../Png';
import './header.css';
  
export default function Header() {   

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const [isAccountExpanded, setIsAccountExpanded] = useState(false);

  const [scrolled, setScrolled] = useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 0 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    let navbarClasses=['navbar'];
    if(scrolled){
        navbarClasses.push('stick_header');
    }
  
//   const [isNavExpanded, setIsNavExpanded] = useState(false) 
  
  return (
      <AppBar position="static" id="header-row" className={navbarClasses.join(" ")} >
        <Toolbar>
          <div id="main-header" className="desktop">
            <div className="logo-nav">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                className="header-logo"
                sx={{ mr: 2 }}
              >
              <a href="/"><img src={Svg.Logo} alt="ncx" /></a>
              </IconButton>
              <div className="tab_btn">
                <a href="https://trade.ncx.cx" target="_blank" rel="noreferrer" className="xchng_btn">Exchange</a>
                <a href="https://bsc.ncx.cx" target="_blank" rel="noreferrer" className="dex__btn">DEX</a>
              </div>
              <div className="headermore_row">
                <a className="header-more" href="#"><img src={Svg.more} alt="ncx" /></a>
                <div id="new-headermenu" className="mega_menu"> 
                    <div className="col1">
                      <div className="top_heading connect_link_title"> 
                        <h4>Services</h4> 
                        <h4>NCXT</h4>
                        <h4>Company</h4> 
                      </div>
                      <div className="menu_box">
                        <div className="col">
                          <div className="main_service_wrapper">
                            <div className="community_inner">
                              <div className="main_service">
                                <a href="https://ncx.cx/rewards">Rewards Program</a>
                                <a href="https://ncx.cx/market-insights">News & Insights</a>
                                <a href="https://ncx.cx/market-makers">Market Makers</a>
                                <a href="https://ncx.cx/institutional">Institutional Services</a>
                                <a href="https://ncx.cx/ncx-otc">OTC</a>
                                <a href="https://ncx.cx/ncx-ambassador">NCX Ambassador</a>
                              </div>
                            </div>
                            <div className="social_links">
                              <div className="social_link_inner"> 
                                <a href="#">NCXT Overview</a>
                                <a href="#">Claim Airdrop</a>
                                <a href="#">Presale Dashboard</a>
                                <a href="#">Referral Program</a>
                                <a href="https://t.me/NCX_Official" target="_blank" rel="noreferrer">Official Telegram</a>
                              </div>
                            </div>
                            <div className="social_links">
                              <div className="social_link_inner">
                                <a href="https://ncx.cx/about-us">About Us</a>
                                <a href="https://ncx.cx/market-insights">Media & Press</a>
                                <a href="https://ncx.cx/user-agreement">User Agreement</a>
                                <a href="https://ncx.cx/kyc-aml-policy">AML & KYC Policy</a>
                                <a href="https://ncx.cx/privacy-policy">Privacy Policy</a>
                                <a href="https://ncx.cx/api-agreement">API Documentation</a>
                                <a href="https://ncx.cx/cookie-policy">Cookie Policy</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col2">
                      <div className="right_inner">
                        <h4>Support</h4>
                        <div className="connect_links">
                          <div className="box">
                            <div className="boxx-links">
                              <a href="https://ncx.cx/faq">FAQ</a>
                              <a href="https://my.ncx.cx/en/helpdesk/chat" target="_blank" rel="noreferrer">Open Support Ticket</a>
                              <a href="https://t.me/NCX_Official" target="_blank" rel="noreferrer">Support via Telegram</a>
                            </div>
                            <h4>Social Media</h4>
                            <div className="social-icons">
                              <div className="icons"><a href="https://t.me/NCX_Official" target="_blank" rel="noreferrer"><img src={Svg.telegram} alt="NCX" title="Telegram"/></a></div>
                              <div className="icons"><a href="https://www.instagram.com/ncx.cx/" target="_blank" rel="noreferrer"><img src={Svg.instagram} alt="NCX" title="Instagram" /></a></div>
                              <div className="icons"><a href="https://twitter.com/NCX_CX" target="_blank" rel="noreferrer"><img src={Svg.twitter} alt="NCX" title="Twitter" /></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <ul className="navlink">
                <li className="main_title white_bg">
                  <a href="https://ncx.cx/buy-crypto">Buy Crypto</a>
                </li>
                <li className="main_title white_bg">
                  <a href="https://trade.ncx.cx/" target="_blank" rel="noreferrer">Spot Trading</a>
                </li>
                <li className="main_title white_bg">
                  <a href="https://ncx.cx/derivatives">Derivatives</a>
                </li>
                <li className="main_title white_bg">
                  <a href="https://ncx.cx/markets">Markets</a>
                </li>
                <li className="main_title white_bg">
                  <a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer">DEX</a>
                </li>
                <li className="main_title white_bg">
                  <a href="https://ncx.cx/ncx-card">NCX Card</a>
                </li>
                <li className="main_title white_bg">
                  <a href="https://ncx.cx/wallet">NCX Wallet</a>
                </li>
                <li className="main_title white_bg">
                  <a href="https://ncx.cx/ncx-token">NCX Token</a>
                </li>
                <li className="main_title white_bg">
                  <a href="https://ncx.cx/rewards">Rewards</a>
                </li>
              </ul>
            </div>
            <div className="login-buttons">
              <div className="accnt_div">
                <Button href="/" className="wallet">Wallet</Button>
                <div className="ngfv">
                  <a id="mmjhyt" href="/profile_settings" className="accot"><img src={Svg.account} alt="ncx"/></a>
                  <div id="cxvb">
                    <div className="fsdvc">
                      <div className="mjhgf">
                        <p>bil***@ncx.cx</p>
                        <p>UID: <span>3001791</span></p>
                      </div>
                      <a href="/profile_settings"><img src={Svg.profile_settings} alt="ncx"/>Profile/Settings</a>
                      <a href="/security"><img src={Svg.security} alt="ncx"/>Security</a>
                      <a href="/identification"><img src={Svg.verificationblack} alt="ncx"/>Verification</a>
                      <a href="#"><img src={Svg.nft} alt="ncx"/>NCXT</a>
                      <a href="#"><img src={Svg.api} alt="ncx"/>API</a>
                      <a href="#"><img src={Svg.invitefriends} alt="ncx"/>Invite Friends</a>
                      <a href="#"><img src={Svg.logoutblack} alt="ncx"/>Log out</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="icons_div">
                <div className="downloadQRCode">
                  <div id="downloadlink" className="storeicons">
                    <img src={Svg.appdownload} alt="ncx" />
                  </div>
                  <div id="headerDownloadApp">
                    <div className="download-box">
                      <div className="qr-box">
                        <div className="img-box">
                          <img src={Png.qrCode} alt="NCX Mobile App"/>
                        </div>
                      </div>
                      <div className="pc-box">
                        <div className="text">Scan the QR Code to download NCX mobile APP</div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/"><img src={Svg.notification} alt="ncx" /></a>
                <a href="/support"><img src={Svg.support} alt="ncx" /></a>
                <div className="translate_lng">
                  <div id="tran_lang">
                    <img src={Svg.global} alt="ncx"/>
                  </div>
                  <div id="language_trans">
                    <div className="language-box">
                      <a href="#">English</a>
                      <a href="#">हिन्दी</a>
                      <a href="#">Español</a>
                      <a href="#">中文</a>
                      <a href="#">Bahasa</a>
                      <a href="#">Tiếng Việt</a>
                      <a href="#">Русский</a>
                      <a href="#">Melayu</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="header-newmobile" className={
              isNavExpanded ? "mobile header-expanded avtive" : "header-expanded mobile"}>
            <nav className="navigation">
              <div className="navigation-one">
                <div className="mobile-toogle">
                  <button 
                    className="hamburger"
                    onClick={() => {
                      setIsNavExpanded(!isNavExpanded)
                    }}>
                    <div className="mplo">
                      <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.875 0.5H18.125V1.49902H0.875V0.5ZM1 7.50098L18.125 7.5V8.49902L1 8.5V7.50098ZM0.875 14.5H18.125V15.499H0.875V14.5Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="clols">
                      <img src={Svg.close3} alt="ncx"/>
                    </div>
                  </button>
                  <div
                    className={
                      isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                    }>
                    <ul>
                      <li>
                        <a href="https://ncx.cx/buy-crypto">Buy Crypto</a>
                      </li>
                      <li>
                        <a href="https://trade.ncx.cx/" target="_blank" rel="noreferrer">Spot Trading</a>
                      </li>
                      <li>
                        <a href="https://ncx.cx/derivatives">Derivatives</a>
                      </li>
                      <li>
                        <a href="https://ncx.cx/markets">Markets</a>
                      </li>
                      <li>
                        <a href="https://bsc.ncx.cx/swap" target="_blank" rel="noreferrer">DEX</a>
                      </li>
                      <li>
                        <a href="https://ncx.cx/ncx-card">NCX Card</a>
                      </li>
                      <li>
                        <a href="https://ncx.cx/wallet">NCX DeFi Wallet</a>
                      </li>
                      <li>
                        <a href="https://ncx.cx/ncx-token">NCX Token</a>
                      </li>
                      <li>
                        <a href="https://ncx.cx/rewards">Rewards</a>
                      </li>
                      <li>
                        <a href="https://ncx.cx/market-insights">News & Insights</a>
                      </li>
                      <li>
                        <a className="download_app" href="#" target="_blank" rel="noreferrer">Download NCX mobile App</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mobile-logo">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  className="header-logo"
                  sx={{ mr: 2 }}
                >
                <a href="/"><img src={Svg.Logo} alt="NCX-Logo" /></a>
                </IconButton>
                </div>
              </div>
              <div className="hgfds">
                <div className="account_toggle">
                  <button 
                    className="hamburger"
                    onClick={() => {
                      setIsAccountExpanded(!isAccountExpanded)
                    }}>
                    <div className={
                      isAccountExpanded ? "qwer sdf" : "qwer"
                    }>
                      <img src={Svg.account} alt="ncx"/>
                    </div>
                    <div  className={
                      isAccountExpanded ? "tresdv mnbvs" : "tresdv"
                    }>
                      <img src={Svg.close3} alt="ncx"/>
                    </div>
                  </button>
                  <div
                    className={
                      isAccountExpanded ? "navigation-menu expanded" : "navigation-menu"
                    }>
                    <ul>
                      <div className="werv">
                        <div className="pr0-v">
                          <div className="hgsw">
                            <img src={Svg.account} alt="ncx"/>
                          </div>
                          <a href="/profile_settings" className="resdf-fde">
                            <p>bilawal@ncx,cx</p>
                            <span>UID: 316593683900320481</span>
                          </a>
                        </div>
                        <a className="sfvvsd" href="#"><img className="log-out" src={Svg.logout} alt="ncx"/></a>
                      </div>
                      {/* <Button className="mnbvc" href="#">Switch Account</Button> */}
                      <li>
                        <details>
                          <summary>Assets
                              <span className='red'>
                                  <img src={Svg.dropdown} alt="ncx"/>
                              </span>
                          </summary>
                          <div className='contt'>
                              <ul>
                                <li><a href="/">My Assets</a></li>
                                <li><a href="/deposit">Deposit</a></li>
                                <li><a href="/withdraw">Withdraw</a></li>
                                <li><a href="/">Asset History</a></li>
                              </ul>
                          </div>
                        </details>
                        <li><a href="/profile_settings">Profile</a></li>
                        <details>
                          <summary>NCXT
                              <span className='red'>
                                  {/* <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1.2657 0.850586C0.312684 0.850586 -0.19666 1.97304 0.430911 2.69023L5.33092 8.29028C5.9496 8.99735 7.04961 8.99735 7.6683 8.29028L12.5684 2.69023C13.1958 1.97304 12.6866 0.850586 11.7335 0.850586H1.2657Z" fill="white"/>
                                  </svg> */}
                                  <img src={Svg.dropdown} alt="ncx"/>
                              </span>
                          </summary>
                          <div className='contt'>
                              <ul>
                                <li><a href="#">Presale Overview</a></li>
                                <li><a href="/">Wallets</a></li>
                                <li><a href="#">Transaction History</a></li>
                                <li><a href="#">Referrals</a></li>
                              </ul>
                          </div>
                        </details>
                        <li><a href="/security">Security</a></li>
                        <li><a href="/identification">Verification</a></li>
                        <li><a href="#">API Keys</a></li>
                        <li><a href="/profile_settings">Settings</a></li>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="translate_lng">
                  <div id="tran_lang">
                    <img src={Svg.global} alt="ncx"/>
                  </div>
                  <div id="language_trans">
                    <div class="language-box">
                      <a href="#">English</a>
                      <a href="#">हिन्दी</a>
                      <a href="#">Español</a>
                      <a href="#">中文</a>
                      <a href="#">Bahasa</a>
                      <a href="#">Tiếng Việt</a>
                      <a href="#">Русский</a>
                      <a href="#">Melayu</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </Toolbar>
      </AppBar>
  );
}