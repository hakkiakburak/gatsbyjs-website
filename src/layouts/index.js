import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from "gatsby-link"
import {SocialLinks,SocialLink,} from '../components/footer';

const FooterLinks = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/hakkiakburak',

  }, {
    name: 'Github',
    link: 'https://github.com/hakkiakburak',
  },
];
const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <div
    style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Hakki Akburak</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/blog/">Blog</ListLink>
        <a href="mailto:hakki.akburak@gmail.com">Contact</a>
      </ul>
    </header>
    {children()}

    <footer className="footer">
             <p><center>FIND ME</center></p>
              <SocialLinks>
                {FooterLinks.map(link => (
                  <li key={link.name}>
                    <SocialLink
                      target="_blank"
                      rel="nofollow"
                      color={link.color}
                      href={link.link}
                    >
                      {link.name}
                    </SocialLink>
                  </li>
              ))}
              </SocialLinks>
            </footer>
  </div>
