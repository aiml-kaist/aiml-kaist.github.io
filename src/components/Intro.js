import React, { Component } from 'react'

const CONTENT = [
  'Discussing research ideas and results within our group and with our partners',
  'Collaborating to produce and disseminate data, code, and publications',
  'Exploring how AI/ML techniques can expand into various fields in engineering and sciences',
  'Teaching the KAIST community and the public the fundamentals and the state-of-the-art of AI',
];

export default class Intro extends Component {
  renderCard(card, i) {
    return (
      <div
        key={i}
        className="c-intro__card"
      >
        {card}
      </div>
    );
  }

  render() {
    return (
      <div className="c-intro">
        <div className="u-width-container">
          <div className="u-section-title">
            Mission
          </div>
          <div className="u-section-sub-title">
            We strive to advance the state of AI and ML research at KAIST and beyond by...
          </div>
          <div className="c-intro__cards">
            {CONTENT.map(this.renderCard)}
          </div>
        </div>
      </div>
    );
  }
}