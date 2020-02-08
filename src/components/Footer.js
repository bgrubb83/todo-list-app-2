import React from 'react';
import config from '../config';

function Footer(props) {
    return <p>Made with ❤️, ☕, and a 💻 by <a href={config.websiteURL}>Barry Grubb</a>.</p>
}

export default Footer;