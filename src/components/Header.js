import classnames from 'classnames';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const SCROLL_THRESHOLD = 60;

export default class Header extends Component {
  state = {
    isScrolled: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const { isScrolled } = this.state;
    const currIsScrolled = window.scrollY > SCROLL_THRESHOLD;

    if (isScrolled !== currIsScrolled) {
      this.setState({ isScrolled: currIsScrolled });
    }
  };

  scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  scrollTo = className => {
    document.querySelector(`.${className}`).scrollIntoView({
      behavior: 'smooth'
    });
  };

  render() {
    const { isScrolled } = this.state;
    const { isDocumentHeader } = this.props;
    return (
      <header 
        className={classnames(
          'c-header',
          { 'c-header--scrolled': isScrolled || isDocumentHeader }
        )}
      >
        <div className="c-header__content u-width-container">
          <div className="c-header__title">
            {/* <div className="c-header__title-logo">
              <img src="/public/images/logo.png" />
            </div> */}
            <a 
              className="c-header__title-text"
              href="/"
            >
              AIML@KAIST
            </a>
            <a
              className="c-header__title-text--mobile"
              href="/"
            >
              AIML@KAIST
            </a>
          </div>
          <div 
            className={classnames(
              'c-header__menu',
              { 'u-no-display': isDocumentHeader }
            )}
          >
            <a
              className="c-header__menu-item"
              onClick={this.scrollToTop}
            >
              Home
            </a> 
            <a
              className="c-header__menu-item"
              to="/members"
              onClick={() => this.scrollTo('c-publication')}
            >
              Publications
            </a>
            <a
              className="c-header__menu-item"
              onClick={() => this.scrollTo('c-people')}
            >
              People
            </a>
            {/* <a
              className="c-header__menu-item"
              onClick={() => this.scrollTo('c-sub-page')}
            >
              Events
            </a> */}
            <a
              className="c-header__menu-item"
              onClick={() => this.scrollTo('c-footer')}
            >
              Contact
            </a>
          </div>
        </div>
      </header>
    );
  }
}
