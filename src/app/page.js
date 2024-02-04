import Sec1vid from './components/homecomponents/sec1vid'
import React from 'react'
import Sec1comp from './components/homecomponents/sec1comp'
import Sec1button from './components/homecomponents/sec1button'
import Sec2main from './components/homecomponents/sec2main'
import Sec3main from './components/homecomponents/sec3main'
import Sec4main from './components/homecomponents/sec4main'
import Timelinesec from './components/homecomponents/timelinesec'
import Learningimgsec from './components/homecomponents/learningimgsec'
import Sec1instructor from './components/homecomponents/sec1instructor'
import Footer from './components/commoncomponents/footer'
import Cardsection from './components/homecomponents/cardsection'
export default function Home() {
  return (
    <div>
      <Sec1comp />
      <div className='bcontainer'>
        <Sec1button classname="sec1b1" text="Learn More" />
        <Sec1button classname="sec1b2" text="Book a Demo" />
      </div>
      <div className="vidcontainer">
        <Sec1vid />
      </div>
      <Sec2main />
      <Sec3main />
      <Cardsection />
      <Sec4main />
      <Timelinesec />
      <Learningimgsec />
      <Sec1instructor />
    </div>
  )
}
