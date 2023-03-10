import React, {useEffect} from "react";
import * as Aos from "aos";
import Footer from "./Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NavBar from "./NavBar";
function Architecture() {
    useEffect(()=>{
        Aos.init({duration:600,
            delay:100,
        })
    },[])
    const array1 =[
        "Images/arch2.jpg",
        "Images/arch3.jpg",
        "Images/arch4.jpg",
    ]
    const array2 =[
        "Images/arch5.jpg",
        "Images/arch6.jpg",
        "Images/arch7.jpg",
    ]
    const array3 =[
        "Images/arch8.jpg",
        "Images/atch9.jpg",
        "Images/arch10.jpg",
    ]
    return(
    <>
        <NavBar/>
        <Row className="mx-0 mt-2 textCont">
            <p style={{fontSize:"0.9rem",fontWeight:"800"}} className="textBlack  fontFamily  text-center">Home <KeyboardArrowRightIcon className="mx-1"/> <span>Architecture</span></p>
        </Row>
        <div className="cont cont2 mx-0 mt-2">
            <Row className="mx-0 mt-1 backColor"></Row>
        </div>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-3">
            <Col md="6">
                <p style={{fontSize:"2.2rem"}} data-aos="fade-down" data-aos-once  className="mt-3 textBlack text-center fontWeight fontFamily">Architecture</p>
                <p  style={{fontSize:"0.9rem"}} data-aos="fade-up" data-aos-once  className="my-5 text-center textGray fontFamily fontWeight">We Design A Building That Has Both Functional And Aesthetic Value Through Create A Sense Of
                    Space Identity And A Regular Structure That Meets The Requirements Of Environment.Our Employees Work With Highest Innovative
                    Engineering Techniques To Provide High Quality Exterior Designs And Practical Solutions To All Our Customers</p>
            </Col>
            <Col md="6">
                <img className="ImgAbout" data-aos="fade-left" data-aos-once  src="Images/arch11.jpg" alt=""/>
            </Col>
        </Row>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-5"></Row>
        <div className="Gallery3">
            <Row className="mx-0 mt-5"></Row>
            <Row className="mx-0 mt-3">
                <p style={{fontSize:"2.8rem"}} data-aos="fade-down" data-aos-once  className="mt-3 textBlack text-center fontWeight fontFamily ">Our Gallery</p>
            </Row>
            <Row className="mx-0 mt-5">
                <Col md="1"></Col>
                <Col md="10" className="d-flex justify-content-around">
                    {
                        array1.map(item =>{
                            return <div className="cont1">
                                <img className="img1" src={item} alt=""/>
                            </div>
                        })
                    }
                </Col>
            </Row>
            <Row className="mx-0 mt-3">
                <Col md="1"></Col>
                <Col md="10" className="d-flex justify-content-around">
                    {
                        array2.map(item =>{
                            return <div className="cont1">
                                <img className="img1" src={item} alt=""/>
                            </div>
                        })
                    }
                </Col>
            </Row>
            <Row className="mx-0 mt-3">
                <Col md="1"></Col>
                <Col md="10" className="d-flex justify-content-around">
                    {
                        array3.map(item =>{
                            return <div className="cont1">
                                <img className="img1" src={item} alt=""/>
                            </div>
                        })
                    }
                </Col>
            </Row>

            <Row className="mx-0 mt-5"></Row>
            <Row className="mx-0 mt-5"></Row>
            <Footer/>
        </div>
        </>
)
}
export default Architecture
