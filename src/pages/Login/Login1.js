import style from "./Login.module.css"

function login(){
    return(
        <div className={style.outerContainer}>
            <div className={style.mainContainer}>
                <div className={style.titleContainer}>
                    <img 
                        src={require("../../assests/images/titleImage.png")}
                        alt="titleImage"
                        className={style.imgClass}
                    />
                    <h1 className={style.titleHeading}>Something</h1>
                </div>
                <div className={style.bannerContainer}>
                    <img 
                         src={require("../../assests/images/banner.png")}
                        alt="banner"
                        className={style.imgClass}
                    />
                </div>
                <div className={style.formContainer}>
                    <h1 className={style.formHeading}>welcome</h1>
                    <p className={style.formText}>continue as:</p>
                    <div className={style.AvatarContainer}>
                        <div className={style.AvatarItem}>
                            <img 
                                src={require("../../assests/images/avatar-boy.png")}
                                alt="male avatar"
                                className={style.imgClass}
                            />
                            <div className={style.loginBtnContainer}>
                                <button className={style.loginBtn}>Ben</button>
                            </div>
                        </div>

                        <div className={style.AvatarItem}>
                            <img 
                                src={require("../../assests/images/avatar-girl.png")}
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


export default login;