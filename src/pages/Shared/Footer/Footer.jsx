import React from 'react';
import NavLogo from '../NavLogo/NavLogo';

const Footer = () => {
    return (
        <div className='w-8/12 mx-auto flex justify-between'>
            <div>
                <NavLogo></NavLogo>
            </div>
            <div>
                <h5 className='text-xl font-semibold'>Use Cases</h5>
                <ul className='text-sm text-gray-300'>
                    <li><a href="">CodeSandbox SDK</a></li>
                    <li><a href="">Code in Sandboxes</a></li>
                    <li><a href="">Storybook Integration</a></li>
                    <li><a href="">Learn & Experiment</a></li>
                </ul>
            </div>
            <div>
                <h5>Ecosystem</h5>
                <ul>
                    <li><a href="">Features</a></li>
                    <li><a href="">VS Code Extension</a></li>
                    <li><a href="">SandPack</a></li>
                    <li><a href="">Status</a></li>
                    <li><a href="">Pricing</a></li>
                </ul>
            </div>
            <div>
                <h5>Explore</h5>
                <ul>
                    <li><a href="">Discover</a></li>
                    <li><a href="">Changelog</a></li>
                    <li><a href="">Documentation</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
            <div>
                <h5>Company</h5>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Brand kit</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;