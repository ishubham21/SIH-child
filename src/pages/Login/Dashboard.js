import { data } from "@tensorflow/tfjs";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader"

import config from "../../config";
import style from "./Login.module.css";

function Dashboard() {
  const [children, setChildren] = useState(null)

  const css = `body {
    background: linear-gradient(180deg,#5d9cfb 72.14%,#DEF1F8 72.15%);
  }`;

  // useEffect(() => {
  //   fetch(`${config.baseUrl}/${config.authUrl}/dashboard`, {
  //     method: "GET",
  //     headers: {
  //       "child-token": localStorage.getItem("token")
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       if (response.error) {
  //         console.log(response.error)
  //       } else {
  //         setChildren(response.data)
  //       }
  //     })
  // })
  if (children) {
    return (
      <Loader />
    )
  } else {
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
            <h1 className={style.titleHeading}>Something</h1>
          </div>
          <div className={style.bannerContainer}>
            <img
              src={require("../../assets/images/banner.png")}
              alt="banner"
              className={style.imgClass}
            />
          </div>
          <div className={style.formContainer}>
            <h1 className={style.formHeading}>welcome</h1>
            <p className={style.formText}>continue as:</p>
            <div className={style.AvatarContainer}>
              {/* {children.map(child => (
                <div className={style.AvatarItem}>
                  {child.gender === "Female"
                    ? <img
                      src={require("../../assets/images/avatar-girl.png")}
                      alt="female avatar"
                      className={style.imgClass}
                    />
                    : <img
                      src={require("../../assets/images/avatar-boy.png")}
                      alt="male avatar"
                      className={style.imgClass}
                    />
                  }
                  <div className={style.loginBtnContainer}>
                    <button className={style.loginBtn}>{child.name}</button>
                  </div>
                </div>
              ))} */}

              <div className={style.AvatarItem}>
                <img
                  src={require("../../assets/images/avatar-boy.png")}
                  alt="male avatar"
                  className={style.imgClass}
                />
                <div className={style.loginBtnContainer}>
                  <button className={style.loginBtn}>Ben</button>
                </div>
              </div>

              <div className={style.AvatarItem}>
                <img
                  src={require("../../assets/images/avatar-girl.png")}
                  alt="female avatar"
                  className={style.imgClass}
                />
                <div className={style.loginBtnContainer}>
                  <button className={style.loginBtn}>Emma</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
