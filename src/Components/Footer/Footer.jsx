import React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';
import QRCodeImage from "../../Assets/Qrcode 1.png";
import googlePlayImage from "../../Assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";
import appStoreImage from "../../Assets/download-appstore.png";
import sendIcon from "../../Assets/Vector.png";
import facebookIcon from "../../Assets/Vector copy.png";
import twitterIcon from "../../Assets/Vector (1).png";
import instagramIcon from "../../Assets/icon-instagram.png";
import linkedinIcon from "../../Assets/Vector (2).png";

import './Footer.scss';
import { Link } from 'react-router-dom';
export const Footer = () => {
    return (
        <footer>
            <Grid container size={12} spacing={3} className="footer-container" sx={{ display: "flex",justifyContent: {xl: "space-between",lg: 'space-between',md: 'start'},alignItems: "start"}}>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2, xl: 2 }}>
                    <h2>Exclusive</h2>
                    <p className='subscribe-title'>Subscribe</p>
                    <small>Get 10% off your first order</small>
                    <Stack className='subscribe-input' direction='row' spacing={1} >
                        <input type="text" placeholder='Enter your email' aria-label="Email address"/> 
                        <img src={sendIcon} alt="Send icon for subscribing" />
                    </Stack>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2, xl: 2 }} className="footer-links-list">
                    <p className="footer-title">Support</p>
                    <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2, xl: 2 }} className="footer-links-list">
                    <p className="footer-title">Account</p>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2, xl: 2 }} className="footer-links-list">
                    <p className="footer-title">Quick Links</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2, xl: 2 }} className="footer-links-list">
                    <p className="footer-title">Download App</p>
                    <small>Save $3 with App New User Only</small>
                    <Stack direction='row' spacing={1} className='qr-code'>
                        <img src={QRCodeImage} alt="QR code for app download" />
                        <Stack direction='column' sx={{justifyContent: 'space-between'}}>
                            <img src={googlePlayImage} alt="get the app on google play" />
                            <img src={appStoreImage} alt="get the app on app store" />
                        </Stack>
                    </Stack>
                    <Stack direction='row' spacing={2} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',marginTop: '1.5em'}}>
                        <Link><img src={facebookIcon} alt="facebook icon" /></Link>
                        <Link><img src={twitterIcon} alt="twitter icon" /></Link>
                        <Link><img src={instagramIcon} alt="instagram icon" /></Link>
                        <Link><img src={linkedinIcon} alt="linkedin icon" /></Link>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container size={12} className="copyright" sx={{fontSize: {xs:'10px',sm: '12px',md: '13px',lg: '16px',xl:'16px'}}}>
                <p>&copy; Copyright Rimel {new Date().getFullYear()}. All right reserved</p>
            </Grid>
        </footer>
    );
};

