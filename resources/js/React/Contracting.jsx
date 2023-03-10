import React, {useEffect} from "react";
import "../../css/Style.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "aos/dist/aos.css"
import Aos from "aos";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NavBar from "./NavBar";
import Footer from "./Footer";
function Contracting() {
    useEffect(()=>{
        Aos.init({duration:600,
            delay:100,
        })
    },[])
    const array1 =[
        "Images/contra2.jpg",
        "Images/contra3.jpg",
        "Images/contra4.jpg",
    ]
    const array2 =[
        "Images/contra5.jpg",
        "Images/contra6.jpg",
        "Images/contra7.jpg",
    ]
    const array3 =[
        "Images/contra8.jpg",
        "Images/contra9.jpg",
        "Images/contra10.jpg",
    ]
return(
    <>
        <NavBar/>
        <Row className="mx-0 mt-2 textCont">
            <p style={{fontSize:"0.9rem",fontWeight:"800"}} className="textBlack  fontFamily  text-center">Home <KeyboardArrowRightIcon className="mx-1"/> <span>Contracting</span></p>
        </Row>
        <div className="cont cont6 mx-0 mt-2">
            <Row className="mx-0 mt-1 backColor"></Row>
        </div>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-3">
            <Col md="6">
                <p style={{fontSize:"2rem"}} data-aos="fade-down" data-aos-once  className="mt-3 textBlack text-center fontWeight fontFamily">Contracting</p>
                <p  style={{fontSize:"0.9rem",width:"26rem"}} data-aos="fade-up" data-aos-once  className="mx-5 my-5 text-center textGray fontFamily fontWeight">Out Contracting Department Provide Firest Grade Classification In : Buildings Construction , Electromechanics
                    And Renewable , Water And Sewerage , Communications Networks .</p>
            </Col>
            <Col md="6">
                <img className="ImgAbout" data-aos="fade-left" data-aos-once  src="Images/contra11.jpg" alt=""/>
            </Col>
        </Row>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-5"></Row>
        <div className="Gallery1">
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
export default Contracting
