import * as React from 'react';
import 'styles/header.scss';

export default function Header({ is404=false }) {
    const subText = is404 ? (<span>4<span className="mainHeader__highlight">0</span>4</span>) : (<span>andy <span className="mainHeader__highlight">b</span> flynn</span>);
    return (
      <header className="mainHeader">
        <div>
          <h1>{subText}</h1>
        </div>
      </header>
    );
}
