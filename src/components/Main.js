import React from 'react'
import PropTypes from 'prop-types'

import profile from '../images/profile.jpg'
import computer from '../images/computer.jpg'
import contact from '../images/contact.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <div
              style={{
                width: '100%',
                height: 160,
                overflow: 'hidden',
              }}
            >
              <img src={profile} alt="My face" />
            </div>
          </span>
          <p>
            Welcome to my personal site. I am an last year computer sience
            student at the Universidade Estadual De Santa Cruz (Brazil) and
            designer in my free times.
          </p>
          <p>
            I have worked in a lot of independent projects and some open-source
            contributions alongside my formal education. My goal is to develop
            solutions and innovations that help people to learn and be more
            productive. I have advanced knowledge in Javascript and Python,
            experience designing labels, logos and user interfaces, as well as
            building responsive web tech.I created this site to share my
            knowledges, interests and to meet new minded people.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <div
              style={{
                width: '100%',
                height: 160,
                overflow: 'hidden',
              }}
            >
              <img
                src={computer}
                alt="A keyboard and a mouse over a table"
                style={{ marginTop: -125 }}
              />
            </div>
          </span>
          <h3>Programming Languages</h3>
          <div>
            <p>
              <h4>Python</h4>
              Work with python since my first year in the graduation. Some
              object oriented, data structure, Web APIs and other packages.
              <p />
              <p>
                <a
                  alt="Github with all python projects"
                  href="https://github.com/matAlmeida?utf8=%E2%9C%93&tab=repositories&q=&type=&language=python"
                >
                  All my Python Projects on Github
                </a>
              </p>
            </p>
            <p>
              <h4>Javascript</h4>
              Working with Javascript as main language, when i can, for two
              years. Web and Hybrid Mobile applications, some Web APIs and
              open-source colaborations. Mainly working with React, React-Native
              and Express.
              <p />
              <p>
                <a
                  alt="Github with all python projects"
                  href="https://github.com/matAlmeida?utf8=%E2%9C%93&tab=repositories&q=&type=&language=javascript"
                >
                  All my Javascript Projects on Github
                </a>
              </p>
            </p>
            <p>
              <h4>Mobile</h4>
              Hybrid and Native Solutions. Already worked with React Native and
              Android (Kotlin). A productive focused app and an educational.
            </p>
            <p>
              <h4>Others</h4>I already worked with many things and language.
              Some languages not highlighted above that you can check at my
              &nbsp;
              <a alt="My github page" href="https://github.com/matalmeida">
                Github
              </a>
              : Typescript, GoLang, C, C++ and others.
              <p />
              <p>
                Also have a good knowledge of Git, Git-Flow, TDD and Agile
                Development.
              </p>
            </p>
          </div>
          <h3>Creative</h3>
          <div>
            <p>
              <h4>Design</h4>
              Before I even start to programming my thing was design. I mainly
              work with Photoshop and Illustrator. I had a Youtube channel where
              I used to post some tutorials 😅. I don't have a main repository
              of my desing projects, but i have some that I had upload at
              DeviantArt.
              <p />
              <p>
                <a
                  alt="My DeviantArt page"
                  href="https://www.deviantart.com/matheusalmeida"
                >
                  Some of my Design projects on DeviantArt
                </a>
              </p>
            </p>
          </div>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Social</h2>
          <span className="image main">
            <div
              style={{
                width: '100%',
                height: 160,
                overflow: 'hidden',
              }}
            >
              <img src={contact} alt="My face" style={{ marginTop: -17 }} />
            </div>
          </span>
          <p>
            There is all my social links if you want to contact me for a
            suggestion, collab, job or just to talk.
            <p />
            <div>
              <span>
                <a
                  alt="Youtube Channel"
                  href="https://www.youtube.com/user/Neolive106"
                >
                  Youtube
                </a>
                &nbsp;&nbsp;&nbsp;
              </span>
              <span>
                <a alt="Github Page" href="https://github.com/matAlmeida">
                  Github
                </a>
                &nbsp;&nbsp;&nbsp;
              </span>
              <span>
                <a alt="Twitter Profile" href="https://twitter.com/mat_almeida">
                  Twitter
                </a>
                &nbsp;&nbsp;&nbsp;
              </span>
              <span>
                <a
                  alt="Dribble Profile"
                  href="https://dribbble.com/mat_almeida"
                >
                  Dribble
                </a>
                &nbsp;&nbsp;&nbsp;
              </span>
              <span>
                <a
                  alt="DeviantArt Page"
                  href="https://www.deviantart.com/matheusalmeida"
                >
                  DeviantArt
                </a>
                &nbsp;&nbsp;&nbsp;
              </span>
              <span>
                <a
                  alt="SoundCloud Channel"
                  href="https://soundcloud.com/mat_almeida"
                >
                  SoundCloud
                </a>
                &nbsp;&nbsp;&nbsp;
              </span>
              <span>
                <a
                  alt="LinkedIn Profile"
                  href="https://www.linkedin.com/in/matheus-almeida-0504a4150/"
                >
                  LinkedIn
                </a>
                &nbsp;&nbsp;&nbsp;
              </span>
              <span>
                <a
                  alt="Instagram Profile"
                  href="http://instagram.com/mat_almeida"
                >
                  Instagram
                </a>
              </span>
            </div>
            <p />
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
