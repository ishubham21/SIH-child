import { useEffect } from "react"
import style from "./Games.module.css"

const GameIframe = ({ link }) => {
  const css = `
    main, #root {
      height: 100%;
    }
    body {
      background: none;
    }
    header {
      display: none;
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

export default GameIframe