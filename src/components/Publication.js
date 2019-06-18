import React, { Component } from 'react'
import DataLoader from './DataLoader';
import config from '../../config.json';

const DATA_URL = `https://sheets.googleapis.com/v4/spreadsheets/1VbnLcMGOiZaFU8G85owHAsUTmZl_-fSkpo-904DQr-k/values/Publications!A2:G?key=${config.googleApiKey}`;

class Publication extends Component {
  getPublications() {
    const { data } = this.props;
    return data.values.map(row => ({
      title: row[0],
      authors: row[1],
      booktitle: row[2],
      year: row[3],
      link: row[4],
      group: row[5],
      ack: row[6],
    }))
  }

  renderPublication(publication) {
    return (
      <div
        key={publication.title}
        className="c-publication__item"
      >
        <a 
          className="c-publication__item-title"
          href={publication.link || '#'}
        >
          {`${publication.title} (${publication.year})`}
        </a>
        <div className="c-publication__item-authors">
          {publication.authors || ''}
        </div>
        <div className="c-publication__item-booktitle">
          {publication.booktitle || ''}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="c-publication">
        <div className="u-width-container">
          <div className="u-section-title">
            Publications
          </div>
          <div className="u-section-sub-title">
            Selected Recent Publications
          </div>
          <div className="c-publication__items">
            {this.getPublications().map(this.renderPublication)}
          </div>
        </div>
      </div>
    );
  }
}

export default (...props) => {
  return (
    <DataLoader json={DATA_URL}>
      <Publication {...props} />
    </DataLoader>
  );
};


