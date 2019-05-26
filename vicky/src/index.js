import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'styles/main.scss';
import rainbow from 'img/rainbow.png';
import unicorn from 'img/unicorn.png';

import ClueManager from 'components/ClueManager';

const clues = [
  {
    input: 'owl',
    output: 'Woodshed'
  },
  {
    input: 'unicorn',
    output: '3675'
  },
  {
    input: 'vicky',
    output: '891 (Happy Birthday!)'
  }
]

ReactDOM.render(
  <div>
    <img className="rainbow" src={rainbow} />
    <img className="unicorn" src={unicorn} tabindex="0" />
    <ClueManager clues={clues} />
  </div>
  , document.getElementById('app')
);
