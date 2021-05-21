import React from "react"
import "./Header.css"
function Header(){
  const linkedin=()=>{
    window.open("https://www.linkedin.com/in/parth-kabra-3164a5205/");
  }
  const codechef=()=>{
    window.open("https://www.codechef.com/users/parthkabra001");
  }
  const posts=()=>{
    window.open("https://www.linkedin.com/in/parth-kabra-3164a5205/detail/recent-activity/shares/");
  }
  const projects=()=>{
    window.open("https://www.github.com/parth-kabra")
  }
  return (
    <div className="header">
      <p onClick={codechef}>parthkabra001</p>
      <div className="options">
        <p onClick={linkedin}>Linkedin</p>
        <p onClick={projects}>My Projects</p>
        <p onClick={posts}>Posts</p>
      </div>
    </div>
  );
}
export default Header;
