import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useStateContext } from "../../context";

const Header = () => {
  const { currentAccount, connectWallet, userBlance } = useStateContext();

  return (
    <>
      <header class="rn-header haeder-default header--sticky">
        <div class="container">
          <div class="header-inner">
            <div class="header-left">
              <div class="logo-thumbnail logo-custom-css">
                <Link class="logo-light" href="/">
                  <img src="/logo/logo-white.png" alt="nft-logo" />
                </Link>
                <Link class="logo-dark" href="/">
                  <img src="/logo/logo-dark.png" alt="nft-logo" />
                </Link>
              </div>
              <div class="mainmenu-wrapper">
                <nav id="sideNav" class="mainmenu-nav d-none d-xl-block">
                  <ul class="mainmenu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <a href="/explore">Explore</a>
                      <ul class="submenu">
                        <li>
                          <Link href="/active">
                            Activity<i class="feather-fast-forward"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/author">
                            Author<i class="feather-fast-forward"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/create">
                            Create
                            <i class="feather-fast-forward"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="/creator">
                            Creator
                            <i class="feather-fast-forward"></i>
                          </Link>
                        </li>
                        <li>
                          <Link class="live-expo" href="/explor">
                            Explore
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="header-right">
              <div class="setting-option d-none d-lg-block">
                <form class="search-form-wrapper" action="#">
                  <input
                    type="search"
                    placeholder="Search Here"
                    aria-label="Search"
                  />
                  <div class="search-icon">
                    <button>
                      <i class="feather-search"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div class="setting-option rn-icon-list d-block d-lg-none">
                <div class="icon-box search-mobile-icon">
                  <button>
                    <i class="feather-search"></i>
                  </button>
                </div>
              </div>
             

              {currentAccount ? (
                <div>
                  <div class="setting-option rn-icon-list user-account">
                    <div class="icon-box">
                      <a href="/author">
                        <img src="/icons/boy-avater.png" alt="Images" />
                      </a>
                      <div class="rn-dropdown">
                        
                        
                        <ul class="list-inner">
                          <li>
                            <a href="/author">My Profile</a>
                          </li>
                          <li>
                            <a href="/edit-profile">Edit Profile</a>
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div class="setting-option mobile-menu-bar d-block d-xl-none">
                <div class="hamberger">
                  <button class="hamberger-button">
                    <i class="feather-menu"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div class="popup-mobile-menu">
        <div class="inner">
          <div class="header-top">
            <div class="logo logo-custom-css">
              <a class="logo-light" href="index.html">
                <img src="/logo/logo-white.png" alt="nft-logo" />
              </a>
              <a class="logo-dark" href="index.html">
                <img src="/logo/logo-dark.png" alt="nft-logo" />
              </a>
            </div>
            <div class="close-menu">
              <button class="close-button">
                <i class="feather-x"></i>
              </button>
            </div>
          </div>
          <nav>
            <ul class="mainmenu">
              <li>
                <a class="nav-link its_new" href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a class="nav-link its_new" href="/explor">
                  Explore
                </a>
              </li>
              <li>
                <a class="nav-link its_new" href="/">
                  Pages
                </a>
              </li>
              <li>
                
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
