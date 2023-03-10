import React, {useEffect} from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/Style.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import "aos/dist/aos.css"
import Aos from "aos";
import "../../css/Style.css"
import NavBar from "./NavBar";
import Footer from "./Footer";
import {useNavigate} from "react-router";
function Home() {
    useEffect(()=>{
        Aos.init({duration:600,

        })
    },[])
    const nav =useNavigate()
return(
    <>
        <NavBar/>
        <div className="mx-0 mt-2">
            <OwlCarousel style={{zIndex:"0",width:"100%"}} className='owl-theme' dots={false} items="1" autoplayTimeout="2300" autoplay nav loop>

                <div data-aos="fade-down" data-aos-once style={{backgroundImage:"url(Images/Home44.webp)"}} className='item backHome ' >
                    <Row className="mx-0 mt-5"></Row>
                    <Row className="mx-0 mt-5"></Row>
                    <Row className="mx-0 mt-5"></Row>
                    <Row className="mx-0 mt-5"></Row>

                    <Row  className="mx-0 mt-3 pRes">
                        <Col md="6"></Col>
                        <Col md="6">
                            <p style={{textAlign:"center",fontSize:"3.7rem"}} className="pRres textBlack fontWeight fontFamily">BUILDING IS OUR  <span className="pRes" style={{color:"#2F4F4F",textAlign:"center"}}>PASSION</span> </p>
                        </Col>
                    </Row>
                </div>
                <div data-aos="fade-down" data-aos-once data-aos-delay="2200" style={{backgroundImage:"url(Images/homee.webp)"}} className='item backHome '>
                    <Row className="mx-0 mt-5"></Row>
                    <Row className="mx-0 mt-5"></Row>
                    <Row className="mx-0 mt-2"></Row>
                    <Row className="mx-0 mt-5"></Row>
                    <Row className="mx-0 mt-5">
                        <Col md="3"></Col>
                        <Col md="6">

                            <p style={{textAlign:"center",fontSize:"3.9rem"}} className="pRes textBlack fontWeight fontFamily">We Created Amazing <span  className="pRes"  style={{color:"#2F4F4F",textAlign:"center"}}>Design</span> </p>
                        </Col>
                    </Row>
                </div>
            </OwlCarousel>
        </div>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-5">
            <h1 data-aos="fade-down" data-aos-once className="fontWeight fontFamily textBlack text-center">Our Services</h1>
        </Row>
        <Row className="mx-0 mt-5">

        </Row>
        <Row className="mx-0 mt-5">
            <Col md="1"></Col>
            <Col data-aos="fade-down" data-aos-once md="5">
                <h1 className="textBlack fontFamily fontWeight mt-2">Architecture</h1>
                <p className="textGray fontFamily mt-4 fontWeight fontSize ppRes"> Our Architecture Department Provides Services For Buildings To Make Them Comfortable,Modern And At a Price That Suits Everyone.Do Not Hesitate To Contact Us To Help You Select The Most Beautiful Exterior Designs</p>
                <button onClick={()=> nav("/architecture")} className='button22 mt-5'>View More</button>
            </Col>
            <Col md="1"></Col>
            <Col md="4" ><img data-aos="fade-up" data-aos-once className="home1 imgRes " src="Images/hom2.jpg" alt=""/></Col>
        </Row>
        <Row className="mx-0 mt-5 rowRes">
            <Col md="1"></Col>
            <Col md="4"  ><img data-aos="fade-up" data-aos-once className="home1" src="Images/home4.jpg" alt=""/></Col>
            <Col md="1"></Col>
            <Col data-aos="fade-down" data-aos-once md="5" className="mx-3 lanRes">
                <h1 className="textBlack fontFamily fontWeight mt-2">Landscape</h1>
                <p className="textGray fontFamily mt-4 fontWeight fontSize">We offer a systematic approach to the design of outdoor spaces and follow advanced methods to create natural places of gardens and swimming pools. Contact us to make your home or any building simulate our nature</p>
                <button onClick={()=> nav("/land")}  className='button22 mt-5'>View More</button>
            </Col>
        </Row>
        <Row className="mx-0 mt-5">
            <Col md="1"></Col>
            <Col data-aos="fade-down" data-aos-once md="5">
                <h1 className="textBlack fontFamily fontWeight mt-2">Interior Design</h1>
                <p className="textGray fontFamily mt-4 fontWeight fontSize ppRes">We provides all consultations for designs and projects, whether commercial, residential, tourist, or other, and these consultations begin with drawing lines, designs and specifications while providing the materials used professionally and to the fullest through a team of highly experienced and qualified to provide unique and elegant designs.</p>
                <button onClick={()=> nav("/design")}  className='button22 mt-5'>View More</button>
            </Col>
            <Col md="1"></Col>
            <Col md="4"><img  data-aos="fade-up" data-aos-once className="home1 imgRes" src="Images/home3.jpg" alt=""/></Col>
        </Row>
        <Row className="mx-0 mt-5 rowRes">
            <Col md="1"></Col>
            <Col md="4"><img data-aos="fade-up" data-aos-once className="home1" src="Images/home5.jpg" alt=""/></Col>
            <Col md="1"></Col>
            <Col md="5" data-aos="fade-down" data-aos-once className="mx-3 lanRes">
                <h2 className="textBlack fontFamily fontWeight mt-2">Fit Out</h2>
                <p className="textGray fontFamily mt-4 fontWeight fontSize">Finishes are based on creativity in the art of engravings, drawings, etc., especially in interior designs, and the final factor is the shape of the building internally and externally</p>
                <button onClick={()=> nav("/fit")} className='button22 mt-5'>View More</button>
            </Col>
        </Row>
        <Row className="mx-0 mt-5">
            <Col md="1"></Col>
            <Col data-aos="fade-down" data-aos-once md="5">
                <h1 className="textBlack fontFamily fontWeight mt-2">Contracting</h1>
                <p className="textGray fontFamily mt-4 fontWeight fontSize ppRes">Brook presents your services with flexible, convenient and cdpoe layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfreplication of the designers is intended.</p>
                <button onClick={()=> nav("/contracting")}  className='button22 mt-5'>View More</button>
            </Col>
            <Col md="1"></Col>
            <Col md="4"><img data-aos="fade-up" data-aos-once className="home1 imgRes" src="Images/home6.jpg" alt=""/></Col>
        </Row>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-5"></Row>
        <Footer/>
        </>
)
}
export default Home
