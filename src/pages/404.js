import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

class NotFoundRoute extends React.Component {
    render() {
        return (
            <div>
                <section id="web" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2><strong>Whoops.</strong> Bad Landing.</h2>
                            </header>
                            <p>It's awful to see you ended up here. I am terribly sorry for letting this happen. Will you be so kind enough to let me know that this has happened and that you're not happy about it? Thank you. Your help is much appreciated.</p>
                        </div>
                        <div className="col-12">
                          <br />
                          <ul className="actions uniform">
                            <li><a href="http://twitter.com/naruthkongurai" className="button special">Send a direct message on Twitter</a></li>
                            <li><a href="mailto:nkongurai@gmail.com" className="button">Email me a message</a></li>
                            <li><a href="/" className="button">Nah, take me home.</a></li>
                        </ul>
                      </div>
                  </div>
                </section>
            </div>
        );
    }
}

export default NotFoundRoute;

export const pageQuery = graphql`
    query NotFoundRoute {
        site {
            siteMetadata {
                title
            }
        }
    }
`;