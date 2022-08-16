import { useEffect } from "react"
import style from "./Games.module.css"

const Game2048 = ({ link }) => {
  useEffect(() => {
    const resizeIframe = () => {
      const iframe = document.getElementsByClassName(style.iframe)
      obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
    }
  }, [])


  const css = `
    main, #root {
      height: 100%;
    }`

  return (
    <main className={style.main}>
      <style>{css}</style>
      <iframe
      seamless="seamless"
      allowtransparency="true"
      allowFullScreen={true}
      frameBorder="0"
      className={style.iframe}
      src={link}>
    </iframe>
    </main>
    
  )
}

export default Game2048