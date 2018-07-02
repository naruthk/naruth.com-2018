import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="http://twitter.com/naruthkongurai" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="http://medium.com/@naruthkongurai" className="icon alt fa-medium"><span className="label">Medium</span></a></li>
                    <li><a href="http://linkedin.com/in/naruthkongurai" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    <li><a href="http://github.com/naruthk" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="http://codepen.io/naruthk" className="icon alt fa-codepen"><span className="label">Email</span></a></li>
                    <li><a href="mailto:nkongurai@gmail.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; 2018 Naruth Kongurai</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li><li>Made with Gatsby</li>
                </ul>
            </section>
        )
    }
}

export default Footer
