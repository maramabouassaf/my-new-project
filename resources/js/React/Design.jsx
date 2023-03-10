import React, {useEffect} from "react";
import "../../css/Style.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "aos/dist/aos.css"
import Aos from "aos";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NavBar from "./NavBar";
import Footer from "./Footer";
function Design() {
    useEffect(()=>{
        Aos.init({duration:600,
            delay:100,
        })
    },[])
    const array1 =[
        "Images/design2.jpg",
        "Images/design3.jpg",
        "Images/design4.jpg",
    ]
    const array2 =[
        "Images/design5.jpg",
        "Images/design6.jpg",
        "Images/design7.jpg",
    ]
    const array3 =[
        "Images/design8.jpg",
        "Images/design9.jpg",
        "Images/design10.jpg",
    ]
return(
    <>
        <NavBar/>
        <Row className="mx-0 mt-2 textCont">
            <p style={{fontSize:"0.9rem",fontWeight:"800"}} className="textBlack  fontFamily  text-center">Home <KeyboardArrowRightIcon className="mx-1"/> <span>Interior Design</span></p>
        </Row>
        <div className="cont cont3 mx-0 mt-2">
            <Row className="mx-0 mt-1 backColor"></Row>
        </div>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-3">
            <Col md="6">
                <p style={{fontSize:"2rem"}} data-aos="fade-down" data-aos-once  className="mt-1 textBlack mx-5 fontWeight fontFamily">Interior Designt</p>
                <p  style={{fontSize:"0.9rem",width:"26rem"}} data-aos="fade-up" data-aos-once  className="mx-5 mt-4  textGray fontFamily fontWeight">In This Section,We Offer Our Clients Several Services : </p>
                <ul data-aos="fade-up" data-aos-once >
                    <li className="mx-4 textGray fontFamily fontWeight " style={{fontSize:"0.9rem",width:"26rem"}} >Keep Simplicity</li>

                    <li className="mx-4 textGray fontFamily fontWeight " style={{fontSize:"0.9rem",width:"26rem"}}>Highlight The Luxury To Have An  Impact On The Atmosphere Of The Home,Office Or Any Other Building And Create A State Of Calm And Pleasure</li>
                    <li className="mx-4 textGray fontFamily fontWeight " style={{fontSize:"0.9rem",width:"26rem"}}>The Acquisition Of Furnishings And Furniture So That It Enjoys A Degree Of Dynamic Change To Overcome The Aspects Of Routine</li>
                    <li className="mx-4 textGray fontFamily fontWeight " style={{fontSize:"0.9rem",width:"26rem"}}>A décor that suits the person's taste and reflects his inner desires</li>
                    <li className="mx-4 textGray fontFamily fontWeight " style={{fontSize:"0.9rem",width:"26rem"}}>Consistency of colors to be a way to revive the place and revive activity in it</li>
                </ul>
            </Col>
            <Col md="6">
                <img className="ImgAbout" data-aos="fade-left" data-aos-once  src="Images/design11.jpg" alt=""/>
            </Col>
        </Row>
        <Row className="mx-0 mt-5"></Row>
        <Row className="mx-0 mt-5"></Row>
        <div className="Gallery4">
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
export default Design
