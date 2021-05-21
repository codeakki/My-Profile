import React from "react"
import "./About.css"
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import ClosedCaptionIcon from '@material-ui/icons/ClosedCaption';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function About(){
    const linkedin=()=>{
        window.open("https://www.linkedin.com/in/parth-kabra-3164a5205/");
    }
    const codechef=()=>{
        window.open("https://www.codechef.com/users/parthkabra001");
    }
    const telegram=()=>{
        window.open("https://t.me/Kabrajiii");
    }
    const github=()=>{
        window.open("https://github.com/parth-kabra");
    }
    return (
        <div className="about">
            <p>Hey!</p>
            <div className="buc">
                <a>My name is Parth Kabra. I'm a professional developer, android developer and<br/> a competitive programmer based in Sangamner, Mahrashtra, India<br/> and I am very passionate and dedicated to my work.<br/> With 1 year as a web and android developer and a competitive programmer<br/> I have acquired all the skills necessary to make a beautiful<br/> algorithm and a premium website!</a>
                <div className="icons">
                    <a onClick={linkedin}><LinkedInIcon fontSize="large"/></a>
                    <a onClick={github}><GitHubIcon fontSize="large"/></a>
                    <a onClick={codechef}><ClosedCaptionIcon fontSize="large"></ClosedCaptionIcon></a>
                    <a onClick={telegram}><TelegramIcon fontSize="large"></TelegramIcon></a>
                </div>
            </div>
        </div>
    );
}
export default About;