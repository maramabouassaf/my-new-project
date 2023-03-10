import React, {useEffect} from "react";
import "../../css/Style.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "aos/dist/aos.css"
import Aos from "aos";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NavBar from "./NavBar";
import Footer from "./Footer";
function FitOut() {
    useEffect(()=>{
        Aos.init({duration:600,
            delay:100,
        })
    },[])
    const array1 =[
        "Images/fit2.jpg",
        "Images/fit3.jpg",
        "Images/fit4.jpg",
    ]
    const array2 =[
        "Images/fit5.jpg",
        "Images/fit6.jpg",
        "Images/fit7.jpg",
    ]
    const array3 =[
        "Images/fit8.jpg",
        "Images/fit9.jpg",
        "Images/fit10.jpg",
    ]
return(
    <>
        <NavBar/>
        <Row className="mx-0 mt-2 textCont">
            <p style={{fontSize:"0.9rem",fontWeight:"800"}} className="textBlack  fontFamily  text-center">Home <KeyboardArrowRightIcon className="mx-1"/> <span>Fit Out</span></p>
        </Row>
        <div className="cont cont5 mx-0 mt-2">
            <Row className="mx-0 mt-1 backColor"></Row>
        </div>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-3">
            <Col md="6">
                <p style={{fontSize:"2rem"}} data-aos="fade-down" data-aos-once  className="mt-1 mx-5 textBlack  fontWeight fontFamily">Fit Out</p>
                <p  style={{fontSize:"0.9rem",width:"26rem"}} data-aos="fade-up" data-aos-once  className="mx-5 mt-4 textGray fontFamily fontWeight">We offer our customers finishing and fit-out services in the house, villa or any property.
                    our engineers have experience in finishing and restoration works professionally,
                    and these services include:</p>
                <ul data-aos="fade-up" data-aos-once >
                    <li className="mx-4 textGray fontFamily fontWeight " style={{fontSize:"0.9rem",width:"26rem"}} >Decorative paints</li>
                    <li className="mx-4 textGray fontFamily fontWeight " style={{fontSize:"0.9rem",width:"26rem"}}>Wall engravings</li>
                    <li className="mx-4 textGray fontFamily fontWeight " style={{fontSize:"0.9rem",width:"26rem"}}>False ceilings</li>
                    <li className="mx-4 textGray fontFamily fontWeight " style={{fontSize:"0.9rem",width:"26rem"}}>Different types of flooring</li>
                </ul>
            </Col>
            <Col md="6">
                <img className="ImgAbout" data-aos="fade-left" data-aos-once  src="Images/fit11.jpg" alt=""/>
            </Col>
        </Row>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-5"></Row>
        <div className="Gallery2">
            <Row className="mx-0 mt-5"></Row>
            <Row className="mx-0 mt-3">
                <p style={{fontSize:"2.8rem"}} data-aos="fade-down" data-aos-once  className="mt-3 textBlack text-center fontWeight fontFamily">Our Gallery</p>
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
export default FitOut
