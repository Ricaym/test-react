import React from 'react'
import "../stylesheets/header.css";

export default function Header({logo, profil}) {
    return (
        <div class='header'>
            <a href="/"><img src={logo} alt='' class='logo'/></a>
            <div class='pages'>
                <a href="about" class='h_'><span class='number'>1.</span><span class='invisible'>*</span>ABOUT</a>
                <a href="experiences" class='h_'><span class='number'>2.</span><span class='invisible'>*</span>EXPERIENCES</a>
                <a href="portfolio" class='h_'><span class='number'>3.</span><span class='invisible'>*</span>PORTFOLIO</a>
                <a href="resume" class='h_'><span class='number'>4.</span><span class='invisible'>*</span>RESUME</a>
                <a href="contact" class='h_'><span class='number'>5.</span><span class='invisible'>*</span>CONTACT</a>
            </div>
            <div class='dropdown'>
                <a href=""><img src={profil} alt='' class='profil'/></a>
                <div class='dropdown-content'>
                    <input type="checkbox" name="fr-en" id='toggle' class='fren_checkbox'/>
                    {/* <label for="toggle" class='fren_label'>.</label> */}
                    <a href="#" class='h_'><span class='number'>6.</span><span class='invisible'>*</span>LOG IN</a>
                    <a href="#" class='h_'><span class='number'>7.</span><span class='invisible'>*</span>SIGN UP</a>
                </div>
            </div>
            
        </div>
    )
}
