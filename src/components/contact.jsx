import React from "react";
import Button from "react-bootstrap/Button";
import {Row, Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaClock } from "react-icons/fa6";
const Contact =()=>{
    return(
        <div className="container-fluid py-5" id="contact" >
            <div className="container">
                <h1 className="text-center mb-4" style={{fontSize:"50px",fontWeight:700}}>Get In Touch</h1>
                <Row>
                    <Col lg={10} md={11} className='mx-auto'>
                        <p className='text-center pb-3 fs-4'>Ready to start your tech career journey? Contact us today!</p>
                    </Col>
                </Row>
                
                <Row xs={1} md={2} lg={2} className="py-4 mx-auto">
                    <Col className="px-4">
                        <Card className="px-4 py-4 mb-5" style={{backgroundImage:"linear-gradient(90deg,#909c97, #c3beb6)"}}>
                            <Card.Title style={{color:"#ffc400",fontSize:"24px",background:"linearGradient(#1d75c1,1d75c1)"}}>
                                <IoIosCall className="fs-3 text-white me-2 font-bold"/>Phone Numbers
                            </Card.Title>
                            <Card.Text className="mt-3 text-white">Primary:+91 9010007319</Card.Text>
                            <Card.Text className="mt-2 text-white">Secondary:+91 9010007329</Card.Text>
                        </Card>
                        <Card className="px-4 py-4 mb-5" style={{backgroundImage:"linear-gradient(90deg,#909c97, #c3beb6)"}}>
                            <Card.Title style={{color:"#ffc400",fontSize:"24px"}}>
                                <CiMail className="fs-3 text-white me-2 font-bold" />Email
                            </Card.Title>
                            <Card.Text style={{color:"#ffc400",fontSize:"20px"}} className="fw-bold">info@gbctricore.com</Card.Text>
                            <Card.Text className="mt-3 text-white">Send us your queries and we'll get back to you within 24 hours</Card.Text>
                        </Card>
                        <Card className="px-4 py-4 mb-5 rounded-lg" style={{backgroundImage:"linear-gradient(90deg,#909c97, #c3beb6)"}}>
                            <Card.Title style={{color:"#ffc400", fontSize:"24px"}}>
                               <FaClock className="fs-3 text-white me-2 font-bold" /> Business Hours
                            </Card.Title>
                            <div className="d-flex text-white">
                                <div className="flex-grow-1">Monday - Friday</div>
                                <div className="">9:00 AM to 8:30 PM</div>
                            </div>
                            <div className="d-flex text-white">
                                <div className="flex-grow-1">Saturday</div>
                                <div className="">9:00 AM to 2:00 PM</div>
                            </div>
                            <div className="d-flex text-white">
                                <div className="flex-grow-1">Sunday</div>
                                <div className="">Closed</div>
                            </div>
                        </Card>
                    </Col>                  
                    
                    <Col className="">
                        <Card className="py-5 rounded-lg px-3" style={{background:"#ffc400",height:"600px"}} >
                            <Card.Title className="text-center text-white" style={{fontSize:"40px"}}>
                                Ready to Transform Your Career?
                            </Card.Title>
                            <Card.Text className="py-3 text-center" style={{fontSize:"20px",color:"#fff5ec"}}>Join thousands of students who have successfully launched their tech careers with our comprehensive training programs.</Card.Text>
                            <div className="mt-3">
                                <Button 
                                    variant="none"
                                    className="w-100 outline-2 bg-white border rounded-xl py-2" 
                                    
                                >
                                
                                        <a className=" text-blue-600" style={{textDecoration:"none"}} href="https://forms.gle/DnmVqCU3FsKu4vVMA">Register Now
                                    </a>
                                </Button>
                            </div>
                            <div className="mt-3">
                                <Button 
                                    variant="none"
                                    className="w-100 outline-2 border rounded-xl py-2" 
                                    
                                >
                                    Email Us
                                </Button>
                            </div>
                            <p className="mt-2 text-center" style={{fontSize:"16px",color:"#fff5ec"}}>Free consultation available • Flexible batch timings • Industry expert trainers</p>
                        </Card>
                    </Col>
                </Row>
            </div>            
        </div>
    )
}
export default Contact;