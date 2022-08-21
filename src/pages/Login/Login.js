import { useState } from "react";
import style from "./Login.module.css";
const Login = () => {
  const css = `
    body {
      background: linear-gradient(180deg,#5d9cfb 72.14%,#DEF1F8 72.15%);
    }
  `;
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://sih-backend-rtu-alpha.vercel.app/auth/child/login", {
      method: "POST",

      body: JSON.stringify({
        "email": email,
        "password": pwd
      }),
  
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(response => response.json())
    .then(response => {
      if(!response.error){
        localStorage.setItem('childToken', response.data.token);
        console.log(response.data.token);
      }
      else{
        alert(response.error);
      }
      
    })
  };
  return (
    <div className={style.outerContainer}>
      <style>{css}</style>

      <div className={style.mainContainer}>
        <div className={style.titleContainer}>
          <img
            src={require("../../assets/images/planet.png")}
            alt="titleImage"
            className={style.imgClass}
          />
          <h1 className={style.titleHeading}> Something </h1>
        </div>
        <div className={style.bannerContainer}>
          <img
            src={require("../../assets/images/banner.png")}
            alt="banner"
            className={style.imgClass}
          />
        </div>
        <div className={style.formContainer}>
          <h1 className={style.formHeading}>LOG IN</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label>EMAIL</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={style.inputField}
              />
            </div>
            <div>
              <label>PASSWORD</label>
              <input
                type="password"
                required
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                className={style.inputField}
              />
            </div>

           
              <button className={style.loginBtn}>Login</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
