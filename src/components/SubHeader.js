import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import DataLoader from './DataLoader'
// import ResearchWork from './ResearchWork';

export default class SubHeader extends Component {
  render() {
    return (
      <div className="c-sub-header">
        <div className="u-width-container">
          <div className="c-sub-header__title">
            AIML@KAIST
          </div>
          <div className="c-sub-header__sub-title">
            Group of Researchers at KAIST Working on Artificial Intelligence and Machine Learning
          </div>
        </div>
      </div>
    );
  }
}

// export default (...props) => {
//   return (
//     // <DataLoader json={DATA_URL}>
//     <Home {...props} />
//     // </DataLoader>
//   );
// };
