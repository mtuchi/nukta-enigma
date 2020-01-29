import $ from 'jquery';
import React, { Component } from 'react';
import Link from 'next/link';
import logo from '../assets/images/logos/logo.png';
import config from '../config';

class Menu extends Component {
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
            <img src={logo} alt="Logo" />
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

        <a className="menu-nav-icon" data-menu="#main-menu">
          <i className="ion-navicon"></i>
        </a>
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

export default Menu;
