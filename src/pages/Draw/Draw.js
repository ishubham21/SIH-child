import style from './Draw.module.css'

const Draw = () => {
  const supported = 'mediaDevices' in navigator;
  if (!supported) {
    document.getElementsByClassName(style.capture).style = { display: 'hidden' }
    console.log(document.getElementsByClassName(style.capture))
  }

  const getImage = (event) => {
    const file = event.target.value
    console.log(file)
  }


  return (
    <main className={style.main}>
      <div className={style.section}>
        <div className={style.image}>
          <h1>Draw this!</h1>
          <img src={require("../../assets/images/boy-2.png")} />
        </div>
        <div className={style.capture}>
          <input
            type="file"
            onChange={getImage}
            accept="image/*"
            capture="environment"
          />
        </div>
      </div>
    </main>
  )
}

export default Draw