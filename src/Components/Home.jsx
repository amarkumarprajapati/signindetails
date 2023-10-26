import React, { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [show, setshow] = useState(false);
  const handleShow = () => {
    setshow(!show);
  };

  // login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const numericRegex = /^[0-9]+$/;

  const handleLogin = () => {
    if (username === "123" && password === "123") {
      alert("Login Success");
      window.open("https://heroic-gaufre-a3d5ed.netlify.app/", "_self");
    } else if (username === "" && password === "123") {
      alert("Username Required");
    } else if (username === "123" && password === "") {
      alert("Password Required");
    } else if (username === "" && password === "") {
      alert("Username and password Required");
    } else if (!username.match(numericRegex)) {
      alert("Invalid UserName or Password");
    } else {
      alert("Invalid UserName or Password");
    }
  };

  // toggle

  const [isopen, setIsOpen] = useState(false);
  const handleisopen = () => {
    setIsOpen(!isopen);
  };

  return (
    <div>
      <div className="Container">
        <div className="Box">
          <div>
            <motion.img
              animate={{
                x: [20, 20, 20],
                y: [0, 20, 0],
                z: [0, 20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="puffy-workaholism-and-working-overtime-1.png"
              className="image3"
            />
          </div>
          <motion.img
            animate={{
              x: [20, 20, 20],
              y: [0, 20, 0],
              z: [0, 20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="image"
            src="6538623-removebg-preview.png"></motion.img>
          <img src="pngwing.com.png" className="Line" />
          <div className="allitem">
            <img className="image2" src="pngkit_inr-icon-png_8088160.png"></img>
            <br />

            {/* username and password */}
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="username"
              type="textbox"
              placeholder="Username"></input>
            <br />

            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type={show ? "text" : "Password"}
              className="Password"></input>
            <input
              onClick={handleShow}
              type="checkbox"
              className="checkbox"></input>
            <text className="ShowText">Show Password</text>
            <br />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} // Scale down on tap
              onClick={handleLogin}
              className="button">
              Go to my Profile
            </motion.button>
          </div>

          {/* username and password */}
        </div>
        <div>
          <button onClick={handleisopen} className="clcikme">
            Get Login Id
          </button>
          {isopen && (
            <div className="details">
              <p className="user">Username - 123</p>
              <p className="user">Password - 123</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
