import React from 'react';
import Link from 'next/link';
import logo from '../assets/images/logos/logo_w.svg';

function Footer() {
  return (
    <footer className="bg-191 color-white">
      <div className="container">
        <div className="pt-50 pb-20 pos-relative">
          <div className="abs-tblr pt-50 z--1 text-center">
            <div className="h-80 pos-relative">
              <img className="opacty-1 h-100 w-auto" alt="" />
            </div>
          </div>
          <div className="row text-left">
            <div className="col-sm-4">
              <div className="mb-30">
                <Link href="/">
                  <a>
                    <img src={logo} alt="" />
                  </a>
                </Link>
                <p className="mtb-20 color-white">
                  Nukta inakuletea habari mbalimbali zilizofanyiwa uchunguzi wa
                  kina
                </p>
                <p className="color-white">
                  Hakimiliki &copy;
                  <script>
                    document.write(new Date().getFullYear());
                  </script>{' '}
                  Nukta Africa{' '}
                </p>
              </div>
            </div>

            <div className="col-sm-4">
              <h4 className="bold">Fahamu Zaidi</h4>
              <div className="brdr-white-1 opacty-2"></div>
              <ul className="footer list-a-plr-10 list-a-plr-sm-5 list-a-ptb-15 list-a-ptb-sm-10">
                <li>
                  <Link href="/privacy">
                    <a>Vigezo &amp; Masharti</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy">
                    <a>Sera ya faragha</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Wasiliana nasi</a>
                  </Link>
                </li>
              </ul>
              <ul className="list-a-plr-10 list-a-plr-sm-5 list-a-ptb-15 list-a-ptb-sm-5">
                <li className="font-13">
                  <Link href="https://web.facebook.com/NuktaTanzania/">
                    <a>
                      <i className="ion-social-facebook"></i>
                    </a>
                  </Link>
                </li>
                <li className="font-13">
                  <Link href="https://twitter.com/NuktaTanzania">
                    <a>
                      <i className="ion-social-twitter"></i>
                    </a>
                  </Link>
                </li>
                <li className="font-13">
                  <Link href="https://medium.com/@NuktaAfrica">
                    <a>
                      <i className="ion-social-linkedin"></i>
                    </a>
                  </Link>
                </li>
                <li className="font-13">
                  <Link href="https://www.instagram.com/nuktatz/">
                    <a>
                      <i className="ion-social-instagram"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-sm-4 ">
              <h4 className="bold">Mawasiliano</h4>
              <div className="brdr-white-1 opacty-2"></div>
              <p className="color-white">S. L. P. 71719</p>
              <p className="color-white">Dar es salaam, Tanzania</p>
              <p className="color-white">
                Simu: (+255) 716 731 383, (+255) 712 212 638
              </p>
              <p className="color-white">maoni@nukta.co.tz</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
