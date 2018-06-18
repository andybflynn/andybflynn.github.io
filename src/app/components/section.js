import * as React from 'react';
import 'styles/section.scss';

export default function Section({ title, classes, children }) {
  return (
    <section className="section">
      <header>
        <h3>{title}</h3>
      </header>
      <div className={['section__content'].concat(classes).join(' ')}>
        {children}
      </div>
    </section>
  );
}
