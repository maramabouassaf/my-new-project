import React, {useEffect} from "react";
import "../../css/Style.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "aos/dist/aos.css"
import Aos from "aos";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NavBar from "./NavBar";
import Footer from "./Footer";
function Land() {
    useEffect(()=>{
        Aos.init({duration:600,
            delay:100,
        })
    },[])
    const array1 =[
        "Images/land2.jpg",
        "Images/land3.jpg",
        "Images/land4.jpg",
    ]
    const array2 =[
        "Images/land5.jpg",
        "Images/land6.jpg",
        "Images/land7.jpg",
    ]
    const array3 =[
        "Images/land8.jpg",
        "Images/land9.jpg",
        "Images/land10.jpg",
    ]
return(
    <>
        <NavBar/>
        <Row className="mx-0 mt-2 textCont">
            <p style={{fontSize:"0.9rem",fontWeight:"800"}} className="  fontFamily  text-center textBlack">Home <KeyboardArrowRightIcon className="mx-1"/> <span>Landscape</span></p>
        </Row>
        <div className="cont4 cont mx-0 mt-2">
            <Row className="mx-0 mt-1 backColor"></Row>
        </div>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-3">
            <Col md="6">
                <p style={{fontSize:"2rem"}} data-aos="fade-down" data-aos-once  className="mt-3 textBlack text-center fontWeight fontFamily">Landscape</p>
                <p  style={{fontSize:"0.9rem",width:"26rem"}} data-aos="fade-up" data-aos-once  className="mx-5 my-5 text-center textGray fontFamily fontWeight Res">We are committed to high-quality landscape design and forward-thinking,
                    From gardens and swimming pools to give your home a special aesthetic.Our designs range from modern designs to traditional designs We also incorporate many design styles to give great results.
                    Landscape design also helps you create a state of calm and privacy through huge trees, so do not hesitate to contact us </p>
            </Col>
            <Col md="6">
                <img className="ImgAbout" data-aos="fade-left" data-aos-once  src="Images/land11.jpg" alt=""/>
            </Col>
        </Row>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-5"></Row>
        <div className="Gallery">
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
export default Land
