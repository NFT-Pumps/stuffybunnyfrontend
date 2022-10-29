import React from "react";
import NavBar from "../components/navbar/navbar.component";
import { Col, Row, Button, Image } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class MainPage extends React.Component{
    render(){

        return(
            <div>
                <NavBar/>
                <div className="main">
                    <div  className="section1" id="section1">
                        <div className="container-fluid pfix">
                            <Row className="">
                                <Col xs={{span:10, offset: 1}} sm={{span:10, offset: 1}} md={{span:10, offset: 1}} lg={{span: 6, offset: 1}} xl={{span: 6, offset: 1}} className="">
                                    <h1 className="header-style">Numb Bunny<br/> Takeover</h1>
                                    <Col xs={12} sm={12} md={9} lg={9} xl={9} className="">    
                                    <p className="nf p1 pb-4">
                                            Blending the power of NFTs and real life business. We are lowering the barrier to entry into the NFT space, making this a perfect first time project for anyone.
                                        </p>
                                    </Col>
                                    <div class="d-grid gap-3 d-md-block">
                                        <Button href="https://mint.stuffybunnynft.com" variant="primary" className="btn-lg">MINT NUMB BUNNIES</Button>
                                    </div>
                                    <Row>
                                        <Col xs={12} sm={12} md={9} lg={9} xl={9} className="pt-5">
                                            <Row className="stats">
                                                <Col xs={4} sm={4} md={3} lg={3} xl={3} className="text-center pl-md-0">
                                                    <h3 className="df nums stat-shadow">3000</h3>
                                                    <p className="nf desc">Total Supply</p>
                                                </Col>
                                                <Col xs={4} sm={4} md={3} lg={3} xl={3} className=" text-center ">
                                                <h3 className="df nums stat-shadow">100</h3>
                                                    <p className="nf desc">1/1 Customs</p>
                                                </Col>
                                                
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={5} xl={5} className="">
                                    <Image src="assets/img/numb-bunny-01.png" className="hero" />
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="">
                                    <Image src="assets/img/Stuffing.svg" className="stuffing" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                    
                    
                    <div className="section2" id="section2">
                        <div className="container-fluid pfix pt-5">
                            <Row className="pt-5">
                                <Col xs={12} sm={12} md={12} lg={6} xl={6} className="">
                                    <Image src="assets/img/family-portraits-wall-01.png" className="img-fluid portraits mt-sm-4" />
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6} className="pt-3">
                                    <h1 className="header-style text-center" id="ourstory">OUR <br/>FAMILY STORY</h1>
                                    <p className="nf p2 story px-5 py-3">
                                        StuffyBunny NFT is a family friendly Brand NFT for everyone. We wanted to create a project that anyone could join and learn about blockchain technology and the benefits it can provide in our lives. The idea is to be the perfect first time project to get involved in.

                                    </p>
                                    <p className="nf p2 story px-5 py-3">
                                        Why is StuffyBunny a perfect first time project to get involved with?
		This is our first project too! We are all learning together. As we learn and			 launch future projects we can all grow together. Future products will be 			 designed to indoctrinate first time NFT holder. 

                                    </p>
                                    <p className="nf p2 story px-5 py-3">
                                        The StuffyBunny “genesis” project has 3,000 stuffed bunnies on the Ethereum blockchain. All holders of our first collection will receive access to free mints and first access to any future projects we launch before the general public. The goal is to always bring value back to the original investors and holders who believed in us.


                                    </p>
                                    <p className="nf p2 story px-5 py-3">
                                        Some early holders were lucky enough to receive 1:1 Custom StuffyBunnys made specifically for them. Custom holders get free airdrops for life from any future projects. There are only 100 customs, always and forever!
                                    </p>
                                     <p className="nf p2 story px-5 py-3">
                                        We are a fully doxxed, US veteran team and 100% funded. 3,000 Bunnys on the Ethereum blockchain on a ERC-721 contract (low gas fees). Join our discord today to learn all about the NFT space, get to know the community and see everything we’re building. We have a detailed roadmap that lays out all our future projects and goals.
                                    </p>
                                    <Row className="">
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center pt-5">
                               <h5>Join Our Family</h5>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                                <a target="_blank" href="https://twitter.com/stuffybunnyNFT" rel="noreferrer"><Image src="assets/img/Twitter.svg" className="socicon" /></a>
                                <a target="_blank" href="https://www.instagram.com/stuffybunnysnft/?utm_medium=copy_link" rel="noreferrer"><Image src="assets/img/Instagram.svg" className="socicon" /></a>
                                <a target="_blank" href="https://discord.com/invite/stuffybunny" rel="noreferrer"><Image src="assets/img/Discord.svg" className="socicon" /></a>
                                <a target="_blank" href="https://opensea.io/collection/stuffy-bunny-nft" rel="noreferrer">
                                <Image src="assets/img/Opensea.svg" className="socicon" />
                                </a>
                            </Col>
                        </Row>
                                </Col>
                            </Row>
                            
                        <Row className="">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="">
                                <Image src="assets/img/seamed-heart-01.png" className="heart" />
                            </Col>
                        </Row>
                        </div>
                    </div>
                    <div className="section3" id="section3">
                        <Row className="">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pt-5">
                                <h1 className="header-style text-center pt-5" id="family">FAMILY <br/>MEMBERS</h1>
                            </Col>
                        </Row>
                        <div className="container">
                        <Row className="pt-5">
                            <Col xs={12} sm={12} md={6} lg={3} xl={3} className="text-center p-5">
                                <Image src="assets/img/chadieb.png" className="fmimg img-fluid" />
                                <h3 className="pt-3 mb-0 df text-center">CHAD BAKER</h3>
                                <h6 className="nf text-center title">Chief Operations Officer</h6>
                                <a target="_blank" href="https://twitter.com/B7ChadieB" rel="noreferrer"><FaTwitter className="twitter mt-3"/></a>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={3} xl={3} className="text-center p-5">
                                <Image src="assets/img/whisper.png" className="fmimg img-fluid" />
                                <h3 className="pt-3 mb-0 df text-center">WHISPER</h3>
                                <h6 className="nf text-center title">Com/Discord Manager</h6>
                                <a target="_blank" href="https://twitter.com/whisper0829" rel="noreferrer"><FaTwitter className="twitter mt-3"/></a>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={3} xl={3} className="text-center p-5">
                                <Image src="assets/img/anthony.png" className="fmimg img-fluid" />
                                <h3 className="pt-3 mb-0 df text-center">ANTHONY</h3>
                                <h6 className="nf text-center title">Artist/Co-Owner</h6>
                                <a target="_blank" href="https://twitter.com/NightManWins" rel="noreferrer"><FaTwitter className="twitter mt-3"/></a>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={3} xl={3} className="text-center p-5">
                                <Image src="assets/img/firedogg.png" className="fmimg img-fluid" />
                                <h3 className="pt-3 mb-0 df text-center">Firedogg</h3>
                                <h6 className="nf text-center title">Marketing/Discord</h6>
                                <a target="_blank" href="https://twitter.com/FireDogg511" rel="noreferrer"><FaTwitter className="twitter mt-3"/></a>
                            </Col>  
                        </Row>
                        </div>
                        <Row className="">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pt-5 pb-5">
                                
                            </Col>
                        </Row>
                        <div className="container-fluid rocket-bunny">
                            <Row>
                           <Col xs={{span:8, offset: 2}} sm={{span:8, offset: 2}} md={{span:8, offset: 2}} lg={{span:6, offset: 3}} xl={{span:6, offset: 3}} className=" d-flex justify-content-center">
                            </Col>
                                </Row>
                            
                            <Row className="">
                            <Col sm={{span:10, offset: 1}} md={{span:10, offset: 1}} lg={{span:10, offset: 1}} xl={{span:6, offset: 3}} className="  white-bkg">
                                <h1 className="header-style text-center pb-5 pt-5" id="roadmap">THE <br/>Goals</h1>
                                <p className="nf p2 story px-5 py-3">To build organically as possible and thoughtfully in this fast paced new technology. We want to improve Web3 and bring it to the Web2 community. The goal is to give them the reason to join in and learn about blockchain technology. Bringing NFTs to the real world to make our lives better is the ultimate goal.</p>

	<p className="nf p2 story px-5 py-3">How will StuffyBunny make our real lives better?
        The plan is to introduce children's books, plushies and coloring books first 		 	that are NFT chipped. The packaging will include step by step directions  			on how to download a wallet and how to claim a free NFT with   			           StuffyBunny. We hope this will over time help introduce new people to the 			Web3 world and give an example to other projects on how to grow their 			 projects into the Web2 space. </p>

<p className="nf p2 story px-5 py-3">StuffyBunny is not just a Plushie and childrens book project. This was the first drop in our collection of many. The next project is NumbBunny NFT coming Halloween weekend. We also have plans to build a brewery in Las Vegas, NV (TBD), to not only help bring in Web2 customers and introduce them to what NFTs can build but to also help other NFT/Crypto projects market themselves to the general public and provide custom beers for community members.</p>

<p className="nf p2 story px-5 py-3">The owner of StuffyBunny (ChadieB or Chad Baker) will be producing a Western Movie next year that will also be tied to the blockchain and StuffyBunny holders will have access too. </p>

<p className="nf p2 story px-5 py-3">Other plans include Gyms, Golf Courses and much more. All projects will be tied to StuffyBunny and reward the holders long term.</p>

                            </Col>
                        </Row>
                            
                        </div>
                    </div>
                    
                    

                    <div className="section5 pb-5">
                        <Row className="soc">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                                <Image src="assets/img/stuffybunny.svg" className="stufbun" />
                            </Col>
                        </Row>
                        <Row className="">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                                <a target="_blank" href="https://twitter.com/stuffybunnyNFT" rel="noreferrer"><Image src="assets/img/Twitter.svg" className="socicon" /></a>
                                <a target="_blank" href="https://www.instagram.com/stuffybunnysnft/?utm_medium=copy_link" rel="noreferrer"><Image src="assets/img/Instagram.svg" className="socicon" /></a>
                                <a target="_blank" href="https://discord.com/invite/stuffybunny" rel="noreferrer"><Image src="assets/img/Discord.svg" className="socicon" /></a>
                                <a target="_blank" href="https://opensea.io/collection/stuffy-bunny-nft" rel="noreferrer">
                                <Image src="assets/img/Opensea.svg" className="socicon" />
                                </a>
                            </Col>
                        </Row>
                    </div>

                    <div className="footer">
                        <Row className="">
                            <Col xs={4} sm={4} md={4} lg={4} xl={4} className="fsec text-center">
                                <p className="nf">&copy; 2022 Stuffy Bunny NFT, LLC</p>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4} className="img-fluid text-center pt-3 pt-md-4">
                                <a target="_blank" href="https://www.nftpumps.com/" rel="noreferrer"><Image src="assets/img/nft-pumps.png" className="nftpumps" /></a>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4} className="fsec text-center">
                                <Row className="">
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6} className="text-end">
                                        <p className="nf">Privacy Policy</p>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6} xl={6} className="text-start">
                                        <p className="nf">Terms of Service</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                </div>
            </div>
            

        )
    }
}

export default MainPage;
