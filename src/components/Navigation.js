import $ from 'jquery';
import React, { Component } from 'react';
import Link from 'next/link';
import logo from '../assets/images/logos/logo.png';
import config from '../config';

import { Menu, MenuItem, Button, ButtonBase } from '@material-ui/core';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const srcBtn = $('.src-btn');
    const srcIcn = $('.src-icn');
    const closeIcn = $('.close-icn');
    const srcForm = $('.src-form');
    srcBtn.on('click', function() {
      if ($('.question').val() !== '') $('.question').val('');
      else {
        $(srcIcn).toggleClass('active');
        $(closeIcn).toggleClass('active');
        $(srcForm).toggleClass('active');
      }
    });
  }

  toggleMenu() {
    $('#main-menu').toggleClass('visible-menu');
  }

  handleSubmit(event) {
    event.preventDefault();
    if ($('.question').val() !== '') {
      window.location = `/search?q=${$('.question').val()}`;
    }
  }

  render() {
    return (
      <div className="container">
        <Link href="/">
          <a className="logo">
            <img className="lazyload" data-src={logo} alt="Logo" />
          </a>
        </Link>

        <a className="right-area src-btn" onClick={this.handleSearchClick}>
          <i className="close-icn ion-close"></i>
          <i className="active src-icn ion-search"></i>
        </a>

        <div className="src-form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" className="question" placeholder="Search here" />
            <button type="submit">
              <i className="ion-search"></i>
            </button>
          </form>
        </div>

        <PopupState variant="popover" popupId="demo-popup-menu">
          {popupState => (
            <React.Fragment>
              <ButtonBase
                className="menu-nav-icon"
                data-menu="#main-menu"
                {...bindTrigger(popupState)}
              >
                <i className="ion-navicon"></i>
              </ButtonBase>
              <Menu {...bindMenu(popupState)}>
                {config.menus.map(menu => (
                  <Link href="/[sectionSlug]" as={`/${menu.slug}`}>
                    <MenuItem component="a" onClick={popupState.close}>
                      {menu.name}
                    </MenuItem>
                  </Link>
                ))}
                <Link href="/data" as="/data">
                  <MenuItem component="a" onClick={popupState.close}>
                    Data
                  </MenuItem>
                </Link>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>

        <ul className="main-menu" id="main-menu">
          {config.menus.map(menu => (
            <li menu-item="menu-item" className="menu-item" key={menu.order}>
              <Link href="/[sectionSlug]" as={`/${menu.slug}`}>
                <a>{menu.name}</a>
              </Link>
            </li>
          ))}
          <li menu-item="menu-item" className="menu-item">
            <Link href="/data" as="/data">
              <a>Data</a>
            </Link>
          </li>
        </ul>
        <div className="clearfix"></div>
      </div>
    );
  }
}

export default Navigation;
