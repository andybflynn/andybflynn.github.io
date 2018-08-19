import * as React from 'react';
import Section from 'components/section';

export default function Contact() {
  return (
    <Section title="Contact" classes={['contact']} id="contact">
      <p>If you want to get in touch don't hesitate to drop me a line at any of the following:</p>
      <p>
        <span className="icon icon-mail" />
        <a rel="nofollow" href="#">
          andy@andybflynn.com
        </a>
      </p>
      <p>
        <span className="icon icon-twitter" />
        <a rel="nofollow" href="https://twitter.com/andybflynn">
          Twitter
        </a>
      </p>
      <p>
        <span className="icon icon-facebook" />
        <a rel="nofollow" href="https://facebook.com/andybflynn">
          Facebook
        </a>
      </p>
      <p>
        <span className="icon icon-linkedin" />
        <a rel="nofollow" href="https://www.linkedin.com/profile/view?id=51764240">
          LinkedIn
        </a>
      </p>
    </Section>
  );
}
