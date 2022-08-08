import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import search from '../assets/search.svg';
import mail from '../assets/li-mail.svg';
import pin from '../assets/li-map-pin.svg';
import phone from '../assets/li-phone.svg';

/*
Footer bar (footer consistent across all web pages).
*/

const Footer = () => {
  return (
    <div className="footer" class="footer">
            <div class="frame-87">
                <div class="logo-1">
                <div class="frame-1">
                    <div class="farmerize-1">Farmerize</div>
                    <div class="grocery quicksand-medium-silver-chalice-14px">GROCERY</div>
                </div>
                </div>
                <div class="frame-86">
                <div class="group-14">
                    <div class="frame-7">
                    <img class="limap-pin" src={pin} />
                    <div class="address quicksand-semi-bold-blue-dianne-16px">
                        Address:
                    </div>
                    </div>
                    <div class="address-1 quicksand-medium-blue-dianne-16px">
                    123 adress lane
                    </div>
                </div>
                <div class="group-15">
                    <div class="frame-7">
                    <img class="liphone" src={phone} />
                    <div class="phone quicksand-semi-bold-blue-dianne-16px">Phone:</div>
                    </div>
                    <div class="phone-1 quicksand-medium-blue-dianne-16px">
                    123-456-7890
                    </div>
                </div>
                <div class="group-16">
                    <div class="frame-7">
                    <img class="limail" src={mail} />
                    <div class="email quicksand-semi-bold-blue-dianne-16px">Email:</div>
                    </div>
                    <div class="farmerizefoodcom quicksand-medium-blue-dianne-16px">
                    farmerize@food.com
                    </div>
                </div>
                </div>
            </div>
            <div class="frame-83">
                <div class="directory">Directory</div>
                <div class="frame-82">
                <Link class="my-account quicksand-medium-blue-dianne-16px" to='/aboutus'>
                    About Us
                </Link>
                <Link class="my-account quicksand-medium-blue-dianne-16px" to='/myaccount'>
                    My Account
                </Link>
                </div>
            </div>
        </div>
  );
};

export default Footer;
