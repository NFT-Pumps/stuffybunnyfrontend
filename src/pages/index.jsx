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
                                    <h1 className="header-style">NFTS FOR <br/>REAL WORLD USE</h1>
                                    <Col xs={12} sm={12} md={9} lg={9} xl={9} className="">    
                                    <p className="nf p1 pb-4">
                                            Blending the power of NFTs and real life business. We are lowering the barrier to entry into the NFT space, making this a perfect first time project for anyone.
                                        </p>
                                    </Col>
                                    <div class="d-grid gap-3 d-md-block">
                                        <Button href="https://mint.stuffybunnynft.com" variant="primary" className="btn-lg">MINT</Button>
                                        <Button href="#section4" variant="secondary" className="ml-md-4 btn-lg">HOW TO BUY</Button>
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
                                                <Col xs={4} sm={4} md={3} lg={3} xl={3} className="text-center">
                                                <h3 className="df nums stat-shadow">.01<sup className="symbol">ETH</sup></h3>
                                                <p className="nf desc">Mint Price</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={5} xl={5} className="">
                                    <Image src="assets/img/LuckyStuffyBunnySitting-02.png" className="hero" />
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
                                        StuffyBunny is a family oriented NFT project with real world utility. We’re producing the first NFT based Children’s book and will be producing an actual StuffyBunny stuffed animal collection. We will be tokenizing our NFTs and you will be rewarded just by holding our NFTS in your wallet.
                                    </p>
                                    <p className="nf p2 story px-5 py-3">
                                        We are a fully doxxed, US veteran team and 100% funded. Launching on the Ethereum blockchain in May ’22 on a ERC-721 contract (low gas fees). This will be one of the first projects that you can mint with a debit/ credit card. We believe adding this feature will help onboard new members to the NFT space by lowering the barrier to entry. Join our discord today to learn all about the NFT space, get to know the community and see everything we’re building. We have a detailed roadmap that lays out all our future projects and goals.
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
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="pt-5">
                                <h1 className="header-style text-center pb-5 " id="roadmap">THE <br/>ROADMAP</h1>
                            </Col>
                        </Row>
                        <div className="container-fluid rocket-bunny">
                            <Row>
                           <Col xs={{span:8, offset: 2}} sm={{span:8, offset: 2}} md={{span:8, offset: 2}} lg={{span:6, offset: 3}} xl={{span:6, offset: 3}} className=" d-flex justify-content-center">
                            </Col>
                                </Row>
                            <Row className="">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="">
                                <VerticalTimeline>
                                      <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        date="2022 May-June"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}   
                                      >
                                        <h3 className="vertical-timeline-element-title">Q2</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Launch, Airdrops, IRL Bunny Prototype</h4>
                                        <p>
                                            <ul>
                                                <li>May 25
                                                    <ul>
                                                        <li>Pre-Sale</li>
                                                    </ul>
                                                </li>
                                                <li>May 26
                                                    <ul>
                                                        <li>Public Sale</li>
                                                    </ul>
                                                </li>
                                                <li>June 1
                                                    <ul>
                                                        <li>Manufacturing of first 2 StuffyBunnys to begin (500 of girl version & 500 of boy version)</li>
                                                        <li>First order of Custom StuffyBunny Cold storage wallets to go out (1000 wallets)</li>
                                                   
                                                        <li>Children's Book manufacturing to begin</li>
                                                        <li>3D StuffyBunnys art to begin and become metaverse ready</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                      <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        date="2022 July-September"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q3</h3>
                                        <h4 className="vertical-timeline-element-subtitle">NFT Drops, New HQ, Beers</h4>
                                        <p>
                                            <ul>
                                                <li>July 
                                                    <ul>
                                                        <li>Marketing to start for new line of NFT (LuckyBunny Brewing Co.)</li>
                                                        <li>Finding warehouse and HQ of StuffyBunnys in Dallas or Waco TX</li>
                                                        <li>LLC in place and copyrights secured for (LuckyBunny Brewing Co.)</li>
                                                        <li>NumbBunnys NFT by Gus Fink drop</li>
                                                        
                                                    </ul>
                                                </li>
                                                <li>August 
                                                    <ul>
                                                        <li>Purchase a NFT World and Begin construction of BunnyWorld</li>
                                                        <li>Scouting spots for location of Brewery</li>
                                                        <li>Final Marketing push for LuckyBunny Brewing Co.</li>
                                                        <li>Location determined and construction to begin</li>
                                                    </ul>
                                                </li>
                                                
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                      <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        date="2022 October-December"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q4</h3>
                                        <h4 className="vertical-timeline-element-subtitle">3D Artist, Manufacturing, and Marketing IRL Bunnies</h4>
                                        <p>
                                            <ul>
                                                <li>October
                                                    <ul>
                                                        <li>LuckyBunny Brewing Company NFT Drop (7,777 Generatives)</li>
                                                    </ul>
                                                </li>
                                                <li>November 
                                                    <ul>
                                                        <li>Manufacturing of first 2 plushie bunnys and Childrens book to be done and ready to launch for Holiday season</li>
                                                        <li>Start marketing campaign for plushie Bunnys and Childrens book</li>
                                                    </ul>
                                                </li>
                                                <li>December 
                                                    <ul>
                                                        <li>Continued construction of Brewery Facilities</li>
                                                        <li>Start artwork for JackedRabbit NFT (Gym & Healthy Energy drink)</li>
                                                        <li>Bunny token to be developed and dropped to all holders. Token will tie into the whole Bunny Eco-system and reward holders</li>
                                                    </ul>
                                                </li>
                                                
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                      <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="2023 January-March"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q1</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Production and Voting System</h4>
                                       <p>
                                           
                                                    <ul>
                                                        <li>Start production of 2nd batch of plushie Stuffy/NumbBunnys</li>
                                                        <li>Set up community vote system to decide which bunnies</li>
                                                        <li>Continued construction of Brewery Facilities. Beer tasting, label and can production methods finalized.</li>
                                                        <li>Marketing start for JackedRabbit NFT</li>
                                                    </ul>
                                               
                                        </p>
                                      </VerticalTimelineElement>
                                      <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="2023 April-June"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q2</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Staffing And Bunny Drop</h4>
                                       <p>
                                            <ul>
                                                <li>Open LuckyBunny Brewery Co. to public</li>
                                                <li>Scout location for Gym and begin facility construction</li>
                                                <li>2nd Children’s book/animated series to begin</li>
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                      <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="2023 July-September"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q3</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Release 2nd and 3rd IRL Bunny Drops, Children's Book, And 3D StuffyBunny NFT</h4>
                                        <p>
                                            <ul>
                                                <li>Release of 2nd batch of plushie Stuffy/NumbBunnys</li>
                                                <li>Completion of NFT Worlds BunnyLand</li>
                                                <li>Release 3D StuffyBunny NFTs for holders to use in Metaverse</li>
                                                <li>JackedRabbit Gym NFT drop (# of generatives TBD)</li>
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                     <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="2023 October-December"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q4</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Manufacturing</h4>
                                       <p>
                                            <ul>
                                                <li>Start manufacturing 3rd batch of Stuffy/NumbBunnys</li>
                                                <li>Open Jacked Gym to public and production of healthy energy drinks</li>
                                                <li>Start artwork for RabbitHole NFT (Golf Course)</li>
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                     <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="2024 January-March"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q1</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Partnerships</h4>
                                        <p>
                                            <ul>
                                                <li>At this point we would like to enter partnerships with established businesses to help/advise them to create their own NFT Projects. A percentage of profits from this will always go to the Bunny Coin and back to the community.</li>
                                                <li>Start Marketing for The RabbitHole NFT</li>
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                     <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="2024 April-June"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q2</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Manufacturing</h4>
                                       <p>
                                            <ul>
                                                <li>Release 3rd batch of Stuffy/NumbBunnys</li>
                                                <li>Scout Golf course location and look to purchase existing course.</li>
                                                <li>Release of 2nd Childrens book</li>
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                     <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="2024 July-September"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q3</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Manufacturing</h4>
                                        <p>
                                            <ul>
                                                <li>Start manufacturing 4th batch of Stuffy/NumbBunnys</li>
                                                <li>Acquire golf course and begin updates</li>
                                                <li>The RabbitHole NFT drop (# of generatives TBD)</li>
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                     <VerticalTimelineElement
                                        className="vertical-timeline-element--education"
                                        date="2024 October-December"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}

                                      >
                                        <h3 className="vertical-timeline-element-title">Q4</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Xmas Season</h4>
                                       <p>
                                            <ul>
                                                <li>Release 4th batch of Stuffy/NumbBunnys for Xmas season</li>
                                                <li>Start manufacturing 5th batch of Stuffy/NumbBunnys</li>
                                                <li>Start artwork for HOP NFT (Private jet NFT)</li>
                                            </ul>
                                        </p>
                                      </VerticalTimelineElement>
                                      <VerticalTimelineElement
                                          className="vertical-timeline-element--education"
                                          date="2025"
                                        iconStyle={{ background: 'rgb(129, 1, 167)', color: '#fff' }}
                                      >
                                    <h3 className="vertical-timeline-element-title">2025</h3>
                                        <h4 className="vertical-timeline-element-subtitle">The Future</h4>
                                       <p>
                                           <ul>
                                            <li>Release the HOP NFT</li>
                                               <li>Acquire rights to an old cartoons not in production anymore. Such as Doug, Hey! Arnold, Jetsons, Rocket Power etc. Then release NFT lines and allow holders to have rights to their characters of the show and share royalties. Relaunch the show with new episodes, movies, re-runs etc.</li>
                                               <li>We plan to release additional plushie Stuffy/NumbBunnys every 6 months to add to the collection.</li>
                                               <li>Help other medium to small companies integrate their businesses into NFTs</li>
                                           </ul>
                                          </p>
                                </VerticalTimelineElement>
                                    </VerticalTimeline>
                            </Col>
                        </Row>
                        </div>
                    </div>
                    
                    <div className="section4 pt-5" id="section4">
                        <div className="container pt-5">
                        <Row className="htb">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="">
                                <h1 className="header-style text-center" id="howtobuy">HOW TO BUY</h1>
                            </Col>
                        </Row>
                        
                        <Row className="htbinfo p-5">
                            <Col xs={12} sm={12} md={12} lg={4} xl={4} className="text-center  pb-5 ">
                                <Image src="assets/img/NFT.svg" className="htbimg" />
                                <h5 className="pt-4 df text-center">WHAT IS A NFT</h5>
                                <p className="nf text-center htbtxt">
                                    NFT stands for non-fungible token.  An asset that is non-fungible
                                    cannot be arbitrarily swapped with another - it is one of a kind.  
                                    This stands in contrast to a fungible asset that can be swapped 
                                    for another indiscriminately.<a className="primary-purp" target="_blank" href="http://Beincrypto.com/learn/how-to-mint-an-nft/" rel="noreferrer">Read More</a>
                                </p>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4} xl={4} className="text-center  pb-5 ">
                                <Image src="assets/img/Wallet.svg" className="htbimg1" />
                                <h5 className="pt-4 df text-center">HOW TO ATTACH WALLET</h5>
                                <p className="nf text-center htbtxt">
                                    Details Coming Soon
                                </p>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={4} xl={4} className="text-center pb-5 ">
                                <Image src="assets/img/Fiat.svg" className="htbimg2" />
                                <h5 className="pt-4 df text-center">BUY WITH DEBIT</h5>
                                <p className="nf text-center htbtxt">
                                    Details Coming Soon.
                                </p>
                            </Col>
                        </Row>
                            </div>
                        <Row className="htbbtm">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="">
                             <Image src="assets/img/htbbtm.svg" className="htbsmokeimg" />
                            </Col>
                        </Row>
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
