import * as React from 'react';
import 'styles/header.scss';
import andyKanji from 'img/andykanji.png';

export default function Header({ is404=false }) {
    const subText = is404 ? (<span>4<span className="mainHeader__highlight">0</span>4</span>) : (<span>andy <span className="mainHeader__highlight">b</span> flynn</span>);
    return (
      <header className="mainHeader">
        <div>
          <h1><img alt="Andy written in Japanese script" src={andyKanji} /></h1>
          <h2>{subText}</h2>
        </div>
      </header>
    );
}
