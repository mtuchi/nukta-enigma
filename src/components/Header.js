import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <div className="bg-191">
      <div className="container">
        <div className="oflow-hidden color-ash font-12 text-sm-center ptb-sm-5">
          <ul className="float-left float-sm-none list-a-plr-10 list-a-plr-sm-5 list-a-ptb-15 list-a-ptb-sm-10">
            <li>
              <Link href="/about">
                <a className="pl-0 pl-sm-10 font-75">Kuhusu sisi</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="font-75">Wasiliana nasi</a>
              </Link>
            </li>
          </ul>
          <ul className="float-right float-sm-none list-a-plr-10 list-a-plr-sm-5 list-a-ptb-15 list-a-ptb-sm-5">
            {/* <li>
              <a
                className="pl-0 pl-sm-10"
                href="//web.facebook.com/NuktaTanzania/"
              >
                <i className="ion-social-facebook"></i>
              </a>
            </li>
            <li>
              <a href="//twitter.com/NuktaTanzania">
                <i className="ion-social-twitter"></i>
              </a>
            </li>
            <li>
              <a href="ttps://www.instagram.com/nuktatz/">
                <i className="ion-social-instagram"></i>
              </a>
            </li> */}
            <li className="font-13">
              <Link href="//web.facebook.com/NuktaTanzania/">
                <a>
                  <i className="ion-social-facebook"></i>
                </a>
              </Link>
            </li>
            <li className="font-13">
              <Link href="//twitter.com/NuktaTanzania">
                <a>
                  <i className="ion-social-twitter"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
