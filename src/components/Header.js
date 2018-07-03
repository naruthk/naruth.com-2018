import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <a href="/"><span className="icon major fa-laptop"></span></a>
                    <h1>Hi, I'm <strong>Sam</strong>, a full stack <br />
                    website and mobile applications developer.</h1>
                    <p>Currently looking for a full-time entry role in any location across the United States</p>
                    <ul className="actions">
                        <li><a href="/#web" className="button scrolly">Learn more about me</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
