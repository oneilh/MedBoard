import React from 'react'
import ANH from './ANH'
import Docprofile from './Docprofile'
import Calendar from './calendar'

const Content = () => {
  return (
    <section className="content">
        <div className="ANH">
        <ANH/>
        </div>
        <div className="calendar">
        <Calendar/>
        </div>
        <div className="Docprofile">
            <Docprofile/>
        </div>
    </section>
  )
}

export default Content
