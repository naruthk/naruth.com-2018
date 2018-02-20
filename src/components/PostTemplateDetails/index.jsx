import React from 'react';
import Link from 'gatsby-link';
import Links from '../Links';
import moment from 'moment';
import Disqus from '../Disqus/Disqus';
import './style.scss';

class PostTemplateDetails extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { copyright, author } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;
    const tags = post.fields.tagSlugs;

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to="/">Naruth Kongurai</Link>
      </div>
    );

    const shareBlock = (
      <div className="post-share post-share-fixed">
        <a className="icon-twitter-bg" href="#" onClick={() => {
            window.open(`https:/\/www.twitter.com/share?text=${post.frontmatter.title}, written by 🔥 Naruth Kongurai. Read at &url=https:\/\/www.naruthk.com\/${post.frontmatter.path}`, 'twitter-share', 'width=580,height=296');
            return false;
          }}>
          <i className="icon-twitter-bird" />
        </a>
        <a className="icon-facebook-bg" href="#" onClick={() => {
            window.open(`https:/\/www.facebook.com/sharer/sharer.php?u=https:\/\/www.naruthk.com\/${post.frontmatter.path}`, 'facebook-share', 'width=580,height=296');
            return false;
          }}>
          <i className="icon-facebook-squared" />
        </a>
        <a className="icon-linkedin-bg" href="#" onClick={() => {
            window.open(`https:/\/www.linkedin.com/shareArticle?mini=true?title=${post.frontmatter.title}&url=https:\/\/www.naruthk.com\/${post.frontmatter.path}`, 'linkedin-share', 'width=580,height=296');
            return false;
          }}>
          <i className="icon-linkedin" />
        </a>
      </div>
    );

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags && tags.map((tag, i) => (
            <li className="post-single__tags-list-item" key={tag}>
              <Link to={tag} className="post-single__tags-list-item-link">
                {post.frontmatter.tags[i]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );

    const commentsBlock = (
      <div>
        <Disqus postNode={post} />
      </div>
    );

    return (
      <div>
        {homeBlock}
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            <div className="post-single__body" dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className="post-single__date">
              <em>
                This post was published on{' '}
                {moment(post.frontmatter.date).format('D MMM YYYY')}
              </em>
            </div>
          </div>
          <div className="post-single__footer">
            <div>{shareBlock}</div>
            {tagsBlock}
            {commentsBlock}
            <hr />
            <p>Find more of me on any of these platforms.</p>
            <Links data={author} />
            <p className="post-single__footer-text">{copyright}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PostTemplateDetails;
