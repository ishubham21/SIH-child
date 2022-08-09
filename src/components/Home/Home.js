//import { useState } from 'react'

import style from './Home.module.css'

const Calendar = () => {
  //const [date, changeDate] = useState(new Date());
  return (
    <div className={style.calendar}>
      calendar
    </div>
  )
}

const CalButton = ({ text, type }) => {
  return (
    <button className={style.button}>
      {text}
    </button>
  )
}

const Home = () => {
  const css = `
    body {
      background: linear-gradient(180deg, #FFFFFF 81.24%, #5D9CFB 81.25%);
    }
  `

  return (
    <main className={style.main}>
      <style>{css}</style>
      <div className={style.title}>
        <img src={require("../../assets/images/planet.png")} alt='planet'/>
        <h1>Hello Ben, good luck for the new day!</h1>
      </div>
      <div className={style.hero}>
        <div className={style.card}>
          <h2>Check today&apos;s </h2>
          <h2>tasks:</h2>
          <div className={style.cal_container}>
            {/* buttons for cognitive & psychomotor */}
            <div>
              <CalButton text='Cognitive' type='cog' />
              <CalButton text='Psychomotor' type='psy' />
            </div>
            <Calendar />
          </div>
        </div>
        <img src={require("../../assets/images/Saly-1.png")} alt="girl on a rocket" />
      </div>
    </main>
  )
}

export default Home