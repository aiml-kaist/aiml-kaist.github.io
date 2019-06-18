import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer className="c-footer">
        <div className="u-width-container">
          <div className="c-footer__body">
            <div className="c-footer__text">
              <div className="c-footer__section">
                <div className="c-footer__text-title">
                  Contact
                </div>
                Email Addr. ses75@kaist.ac.kr<br />
                Tel. +82 42 350 8485<br />
                MARS AI ERC, Room 4401, E3-1 Computer Science Building,<br />
                KAIST, 291 Daehak-ro, Yuseong-gu, Daejeon 34141, South Korea<br />
              </div>
              <div className="c-footer__section">
                <div className="c-footer__text-title">
                  Sponsors
                </div>
                Industry Partners (TBD)<br />
                <a className="c-footer__link" href="https://ml.kaist.ac.kr/" target="_blank">
                  MARS AI ERC (Director: Alice Oh)
                </a><br />
              </div>
            </div>
            <div className="c-footer__links">
              <a
                className="c-footer__link"
                href="https://github.com/aiml-kaist/aiml-kaist.github.io"
                target="_blank"
              >
                Admin
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
