import {React, useState, useEffect} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Svg from '../Svg';
import Png from '../Png';
import './header.css';
  
export default function Header() {   

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
      <AppBar position="static" id="header-row" className={navbarClasses.join(" ")}>
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
                <Button href="https://ncx.cx/wallet" className="wallet">Wallet</Button>
                <a href="/profile_settings" className="accot"><img src={Svg.account} alt="ncx"/></a>
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
                <a href="/support"><img src={Svg.help} alt="ncx" /></a>
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
        </Toolbar>
      </AppBar>
  );
}