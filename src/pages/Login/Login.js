import style from "./Login.module.css"
const Login = () => {
return(
  <div className={style.outerContainer}>
      <div className={style.mainContainer}>
        <div className={style.titleContainer}>
          <img 
            src={require("../../assests/titleImage.png")} 
            alt="titleImage" 
            className={style.imgClass}
          />
          <h1 className={style.titleHeading}> Something </h1>
        </div>
        <div className={style.bannerContainer}>
          
          <img
            src={require("../../assests/banner.png")}
            alt="banner"
            className={style.imgClass}
          />
        </div>
        <div className={style.formContainer}>
          <h1 className={style.formHeading}>LOG IN</h1>
          <form>
            <div className={style.inputLabel}>
              <label>
                NAME
              </label>
              <input
                  type="text"
                  name="name"
                  className={style.inputField}
                />
            </div>
            <div className={style.inputLabel}>
              <label>
                password
              </label>
              <input
                  type="password"
                  name="password"
                  className={style.inputField}
                />
            </div>

            <div className={style.loginBtnContainer}>
              <button className={style.loginBtn}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  
);
}
export default Login;