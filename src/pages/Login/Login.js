import style from "./Login.module.css"
const Login = () => {
return(
    <div className={style.outerContainer}>
      <div className={style.mainContainer}>
        <div className={style.title}>
          <h1 className={style.titleHeading}>Something</h1>
          <img
            src={require("../../assests/Mask_Group_6.png")}
            alt="banner"
          />
        </div>
        <div className={style.formContainer}>
          <h1 className={style.formHeading}>LOG IN</h1>
          <form>
            <label>
              NAME
            </label>
            <input
                type="text"
                name="name"
                className={style.inputField}
              />
            <label>
              PARENT'S NAME
            </label>
            <input
                type="text"
                name="parentName"
                className={style.inputField}
              />

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