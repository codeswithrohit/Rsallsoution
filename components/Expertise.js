import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our expertise' />
            <p>With over three years of hands-on experience in the digital arena, I have successfully created and managed more than 200+ websites and applications across diverse industries. My skill set encompasses web and app development, digital marketing, and comprehensive online strategy. I specialize in translating unique business visions into engaging, functional, and results-driven digital solutions. My passion lies in helping businesses establish a strong online presence and unlock their full potential in the digital realm. If you're looking to make your mark in the digital world, I have the expertise to guide you every step of the way.</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='learn more' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
