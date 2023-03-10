import React from "react";
import "../../css/Style.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCaretRight,
    faEnvelope,
    faLocationDot,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
function Footer() {
    const nav =useNavigate()
return(
    <>
        <div className="card">
            <Row className="mx-0 mt-5"></Row>
            <Row className="mx-0 mt-5">
                <Col md="1"></Col>
                <Col md="4" >
                    <p style={{fontSize:"2.7rem",fontFamily :"Shadows Into Light variant0, Tofu"}} className="textFooter fontWeight mx-5">ASAS</p>
                    <p  style={{width:"17rem"}} className="textFooter fontFamily mt-2 mx-2">Building isn’t just a job. At the Construction Company, it is our passion. With every project we undertake, we set the bar high and provide the best people in the industry, with a true love of what we do to make our Customers’ vision a reality.</p>
                </Col>
                <Col md="3" >
                    <h5  style={{color:"#a3a3a3"}} className="fonWeight fontFamily mx-4 mt-3 comLink">Company Links</h5>
                    <ul className="ulLinks mt-4">
                        <li onClick={()=>nav("/")}   className="links links1 my-1"><a href="" className="textFooter fontFamily links"><FontAwesomeIcon icon={faCaretRight}/> <span className="mx-1">Home</span></a></li>
                        <li onClick={()=>nav("/architecture")}  className="links links1 my-1"><a href="" className="textFooter  fontFamily links"><FontAwesomeIcon icon={faCaretRight}/> <span className="mx-1">Architecture</span></a></li>
                        <li onClick={()=>nav("/land")}  className="links links1 my-1"><a href="" className="textFooter  fontFamily links"><FontAwesomeIcon icon={faCaretRight}/> <span className="mx-1">Landscape</span></a></li>
                        <li onClick={()=>nav("/design")}  className="links links1 my-1"><a href="" className="textFooter  fontFamily links"><FontAwesomeIcon icon={faCaretRight}/> <span className="mx-1">Interior Design</span></a></li>
                        <li onClick={()=>nav("/fit")}  className="links my-1 links1"><a href="" className="textFooter  fontFamily links"><FontAwesomeIcon icon={faCaretRight}/> <span className="mx-1">Fit Out</span></a></li>
                        <li onClick={()=>nav("/contracting")}  className="links my-1 links1"><a href="" className="textFooter  fontFamily links"><FontAwesomeIcon icon={faCaretRight}/> <span className="mx-1">Contracting</span></a></li>
                    </ul>

                </Col>
                <Col md="3" className="fin">
                    <h5 style={{color:"#a3a3a3"}} className="fonWeight fontFamily mt-3">Contact Info</h5>
                    <p   className="textFooter fontFamily a1 mt-3 links"><FontAwesomeIcon style={{fontSize:"1.3rem"}}  icon={faLocationDot}/><span className="mx-2">office: Damac-Buisness Tower-Buisness Bay-Dubai-UEA</span></p>
                    <p   className="textFooter fontFamily a1 mt-3 links"><FontAwesomeIcon style={{fontSize:"1.3rem"}}  icon={faLocationDot}/><span className="mx-2">Workshop: New Ind Area-Umm Al Thuoob,UAQ</span></p>
                    <p style={{width:"11rem"}} className="links"><a className="a1 textFooter fontFamily links" href=""><FontAwesomeIcon style={{fontSize:"1.3rem"}} icon={faPhone}/> <span className="mx-1">+971 58 809 2767</span></a></p>
                </Col>

            </Row>
        </div>

        </>
)
}
export default Footer
