import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT AGENCY' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Turning your business ideas into smart digital products since 2001' />
              <p className='desc-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eleifend magna, molestie iaculis sem pulvinar eu. Etiam non dui felis. Proin posuere dapibus magna laoreet posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim, sem eget sollicitudin tempor, libero velit aliquam enim, vel egestas tortor ante quis sem.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>2+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>200+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>At Rs. All Solution, our mission is to be at the forefront of digital innovation, offering comprehensive solutions that transcend industry boundaries. We are committed to creating cutting-edge software, spanning website and app development, as well as digital marketing services, to empower businesses across diverse sectors</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
