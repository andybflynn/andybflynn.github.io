import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from 'components/header';
import Section from 'components/section';
import Card from 'components/card';
import Footer from 'components/footer';
import Contact from 'components/contact';
import 'styles/base.scss';

ReactDOM.render(
  <div>
    <Header />
    <main>
      <p>
        Hi, I'm Andy. I work as a web developer and a software engineer. I've been programming since around 2005 when I started at The University of Exeter, and have been developing software and websites ever since.
      </p>
      <p>
        If you're interested in chatting about any of the work I've done previously, please <a data-scroll href="#contact">contact me!</a>
      </p>
      <Section title="Experience" classes={['experience']}>
        <div>
          <h4>I'm great at these:</h4>
          <ul>
              <li>JavaScript + jQuery</li>
              <li>React/Redux</li>
              <li>Angular JS</li>
              <li>CSS/SCSS</li>
              <li>Responsive design (Bootstrap/Foundation)</li>
              <li>Optimising for mobile performance</li>
              <li>Gulp/Webpack</li>
              <li><a href="https://xkcd.com/208/">Regular Expressions</a></li>
              <li>Git</li>
              <li>Agile methodologies (Scrum/Kanban)</li>
          </ul>
        </div>
        <div>
          <h4>I'm still working on these:</h4>
          <ul>
            <li>Node JS</li>
            <li>Express</li>
            <li>Vue JS</li>
            <li>Angular 2+</li>
            <li>SQL</li>
            <li>Python</li>
          </ul>
        </div>
        <section>
          <div className="cards">
            <Card name="RSA Group" url="https://www.rsagroup.com/" position="Senior Front End Developer" dates="2016 - Present">
              <p>Working to deliver responsive front end solutions for a variety of use cases, using appropriate technologies (Angular, React, Django CMS). Delivered a new CMS driven brochureware site in <a rel="nofollow" href="https://www.morethan.com">Morethan.com</a>, liaising with the back end and design teams. Another heavy focus on mobile pages with responsive CSS. Ran regular "Dojo" sessions with the team as part of a learning and development program.</p>
            </Card>
            <Card name="TUI Group SHG" url="https://www.tuigroup.com/en-en" position="Front End Web Developer" dates="2013 - 2016">
              <p>Working as part of the Front End development team on <a rel="nofollow" href="https://www.hayesandjarvis.co.uk">Hayes and Jarvis</a> and <a rel="nofollow" href="https://www.citalia.com">Citalia</a> for Specialist Holidays Group (SHG). Coding standards compliant HTML and CSS, based on UX designs and liaising with the back end team for data pull-through from Hybris CMS. Efficient and optimized JavaScript/jQuery code required for progressive enhancement. A heavy focus on mobile pages with responsive CSS.</p>
            </Card>
            <Card name="APH" url="https://www.aph.com" position="Web Developer" dates="2010 - 2013">
              <p>Primarily company facing software development, with a focus on web technologies (SQL, Javascript/JQuery, ASP.Net) and some customer facing web maintenance of the current APH website. In 2012 my team completed the launch of our new creative with no down time and no major errors. </p>
            </Card>
            <Card name="Mobius Solutions Ltd" url="https://www.linkedin.com/company-beta/572171/" position="Software Developer" dates="2009 - 2010">
              <p>Role mainly focusing on new and upcoming web technologies, some desktop development software. Role also included database set up and administration, client relations, development of MS Office integration modules.</p>
            </Card>
          </div>
        </section>
      </Section>
      <Section title="About Me" classes={['aboutMe']}>
      <p>I have an interest in all new technology, especially with regard to new web development areas.</p>
      <p>I'm a big fan of programming with JavaScript and I've been spending a lot of time with <a href="https://facebook.github.io/react/">React</a> recently.</p>
      <p>I've also recently started teaching myself the <a href="https://nodejs.org/">nodejs</a> framework, a fantastically simple way to get a back end up and running in a language that I'm immensely familiar with.
          Although I cut my teeth on VB.Net, I feel like it's time to embrace the future, and nodejs might just be the way to do that!
      </p>
      <p>In addition to this, I'm also fully agile! I value getting things done quickly and iteratively, and focusing on delivery over comprehensive documentation. I can work to sprint deadlines, prioritise like a champ, and have honed my team stand-up speaking voice.</p>
      </Section>
      <Section title="Education">
        <div className="cards">
          <Card name="University of Southampton" url="https://www.soton.ac.uk/" position="MSc Risk Management" dates="2008-2009">
            <p>A one year Master's course in Risk Management which covered a wide range of topics including <i>Business Ethics</i>, <i>Game Theory</i> and <i>Project Risk Management.</i></p>
          </Card>
          <Card name="University of Exeter" url="https://www.exeter.ac.uk/" position="BSc Internet Computing" dates="2005-2008">
            <p>A three year batchelor of sciences course which taught web development, design, and Java based programming skills. Particularly interesting were the topics on <i>Nature Inspired Computing</i> and <i>User Experience and Accessibility</i></p>
          </Card>
        </div>
      </Section>
      <Contact />
      <Footer />
    </main>
  </div>
, document.getElementById('app'));
