import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

// Pictures
import headshot from '../assets/images/headshot.jpg';
import project_website_template from '../assets/images/project_web_template.png';
import project_digital_clock from '../assets/images/project_chrome_digital_clock.png';
import project_nivea_website from '../assets/images/project_nivea_website.png';
import project_samsung_email_template from '../assets/images/project_samsung_email_template.png';
import project_showdc_website from '../assets/images/project_showdc_website.png';
import project_milo_website from '../assets/images/project_milo_website.png';
import project_dcvote from '../assets/images/project_dcvote_trimmed.png';
import project_daily_note from '../assets/images/project_daily_notes_app_trimmed.png';

class Homepage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <div>
                <Helmet title={siteTitle} />

                <section id="web" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2><strong>Website</strong> Development</h2>
                            </header>
                            <p>I use <strong>Figma</strong> and <strong>Sketch</strong> to design beautiful desktop and mobile-friendly websites and give them life by using <strong>React</strong>, <strong>D3.js</strong>, <strong>Node.js</strong>, and <strong>Gatsby.js</strong>. These tools are not only powerful but they also are an art of its own. It's always fun -- at least for me -- to play with these tools everyday and build apps that people use and love.</p>
                            <h3>Front-end</h3>
                            <p>JavaScript, React, jQuery, Ajax, Boostrap, SVG</p>
                            <h3>Back-end</h3>
                            <p>PHP, Express, MongoDB, GraphQL, Netlify CMS, Node.js</p>
                            <h3>Tools</h3>
                            <p>Webpack, Gulp, Pug (Jade), LESS/SCSS/SASS, Git, Wordpress, Drupal, Joomla</p>
                        </div>
                        <div className="col-6">

                          <div className="grid-wrapper">
                            <div className="col-3">
                                <Link to="website-template">
                                  <span className="image fit"><img src={project_website_template} alt="" /></span>
                                  <h4>HTML Portfolio Template for One-Page Site</h4>
                                </Link>
                            </div>
                            <div className="col-3">
                              <Link to="digital-clock-chrome">
                                <span className="image fit"><img src={project_digital_clock} alt="" /></span>
                                <h4>Digital Clock Tab Chrome Extension</h4>
                              </Link>
                            </div>
                          </div>

                          <div className="grid-wrapper">
                            <div className="col-3">
                              <Link to="nivea-website">
                                <span className="image fit"><img src={project_nivea_website} alt="" /></span>
                                <h4>Nivea Thailand Homepage</h4>
                              </Link>
                            </div>
                            <div className="col-3">
                              <Link to="samsung-email-templates">
                                <span className="image fit"><img src={project_samsung_email_template} alt="" /></span>
                                <h4>Samsung Asia Email Templates (eDM)</h4>
                              </Link>
                            </div>
                          </div>

                          <div className="grid-wrapper">
                            <div className="col-3">
                              <Link to="show-dc-website">
                                <span className="image fit"><img src={project_showdc_website} alt="" /></span>
                                <h4>SHOW DC Mall Thailand Website</h4>
                              </Link>
                            </div>
                            <div className="col-3">
                              <Link to="milo-website">
                                <span className="image fit"><img src={project_milo_website} alt="" /></span>
                                <h4>Milo Beverage Thailand Website</h4>
                              </Link>
                            </div>
                          </div>

                        </div>
                    </div>
                </section>

                <section id="testimonial1" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-12">
                          <header className="major">
                              <h2>"Naruth (Sam) was my TA for my Android class during the Spring 2018 quarter, and frankly, I will miss him the next time I teach."</h2>
                          </header>
                          <p>Ted Neward, Director of Smartsheet & Guest Lecturer at the University of Washington</p>
                        </div>
                    </div>
                </section>

                <section id="mobile" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">

                          <div className="grid-wrapper">
                            <div className="col-3">
                              <Link to="dc-vote-app">
                                <span className="image fit"><img src={project_dcvote} alt="" /></span>
                                  <h4>DC Vote (7-Eleven)</h4>
                              </Link>
                            </div>
                            <div className="col-3">
                              <Link to="daily-notes-ios-app">
                                <span className="image fit"><img src={project_daily_note} alt="" /></span>
                                <h4>Daily Notes - Distraction-free</h4>
                              </Link>
                            </div>
                          </div>

                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2><strong>Mobile</strong> Development</h2>
                            </header>
                            <p>As a former Undergraduate Teaching Assistant for an Android Development Course (INFO 448) at the University of Washington, I have both the teaching and development skills in Android and iOS development. Oh, and I love building apps! Who doesn't?</p>
                            <h3>Languages</h3>
                            <p>Swift 3, Kotlin, Java</p>
                            <h3>Tools</h3>
                            <p>Firebase, React Native, Flutter, CocoaPods, Genymotion, Vysor, Google Maps API</p>
                        </div>
                    </div>
                </section>

                <section id="good-to-know" className="main style2 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Good to Know</h2>
                            </header>
                        </div>

                        <div className="col-3">
                          <span className="image fit"><img src={headshot} alt="" /></span>
                        </div>

                        <div className="col-3">
                            <li><span className="icon style2 major fa-code"></span></li>
                            <h3><strong>9000+</strong> 7-Eleven stores</h3>
                            <p>That's the number of stores my Android app that I designed and developed is currently being used at.</p>
                        </div>
                        <div className="col-3">
                          <li><span className="icon style2 major fa-book"></span></li>
                            <h3><strong>Communications</strong> and <strong>Informatics</strong></h3>
                            <p>I graduated from the University of Washington (Seattle, Washington) in June 2018!</p>
                        </div>
                        <div className="col-3">
                            <li><span className="icon style2 major fa-flash"></span></li>
                            <h3><strong>Extracurriculars</strong></h3>
                            <p>
                              <a href="#"><strong>uDev</strong></a> - Tech Advisor<br/>
                              <a href="#"><strong>Chingu 5 cohort</strong></a> - Developer<br />
                              <a href="#"><strong>Seattle xCoders</strong></a> - Speaker<br />
                            </p>
                            <ul className="actions uniform">
                              <li><a href="http://linkedin.com/in/naruthkongurai" className="button special">More on LinkedIn</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="testimonial2" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-12">
                          <header className="major">
                              <h2>"I was always impressed with his skillset, creative thinking and ability to meet deadlines ...I will remember of him is ability to think outside the box and point out much better way on taking action."</h2>
                          </header>
                          <p>Hein Lwin, Head of Digital Technology at OgilvyOne Thailand</p>
                        </div>
                    </div>
                </section>

                <section id="contact" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Let's get in touch</h2>
                        </header>
                        <p>I cannot wait to tell you more about myself and to learn more about the incredible opportunity that awaits.</p>
                        <ul className="actions uniform">
                            <li><a href="http://twitter.com/naruthkongurai" className="button">@naruthkongurai</a></li>
                            <li><a href="mailto:nkongurai@gmail.com" className="button special">nkongurai@gmail.com</a></li>
                            <li><a href="http://medium.com/@naruthkongurai" className="button">Read my blog posts</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

Homepage.propTypes = {
    route: React.PropTypes.object
};

export default Homepage;

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;