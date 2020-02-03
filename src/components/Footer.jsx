import React from 'react';
import '../style/footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div>FAQ</div>
            <div>contact us</div>
            <div className="footer">follow us on :
                <div>
                    <img width="16px" src="https://icons.iconarchive.com/icons/danleech/simple/256/facebook-icon.png" alt="facebook logo" />
                </div>
                <div>
                    <img width="16px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLE6Szp3XS022KC92jwIPs75jkXGR6Fqy9x-NyiPgN5wPdENI0w&s' alt='instagram logo' />
                </div>
            </div>
        </div>
    )
}

export default Footer;