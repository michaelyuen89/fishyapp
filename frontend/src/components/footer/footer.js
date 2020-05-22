import React from 'react';

const Footer = () => (
        <footer>
            <div className="footer-links">
            <div className="footer-github">
                <ul>
                {" "}
                Github:
                <li>
                    <a href="https://github.com/michaelyuen89/fishyapp" target="_blank">fishyapp</a>
                </li>
                {/* <li><a href="https://github.com/Sunghan11">Elijah Nam</a></li>
                                        <li><a href="https://github.com/emikyu">Emily Wu</a></li>
                                        <li><a href="https://github.com/joexiao97">Joe Xiao</a></li>
                                        <li><a href="https://github.com/michaelyuen89">Michael Yuen</a></li> */}
                </ul>
            </div>
            </div>
            <div className="footer-copyright">Copyright &copy; 2020 Fishers</div>
        </footer>
);

export default Footer;