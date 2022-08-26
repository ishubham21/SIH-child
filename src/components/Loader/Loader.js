import style from "./Loader.module.css"

const Loader = () => {
  const css = `header {
    display: none;
  }`
  return (
    <div className={style.loaderContainer}>
      <style>{css}</style>
      <div className={style.loader}></div>
    </div>
  )
}

export default Loader;
