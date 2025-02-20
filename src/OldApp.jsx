import './App.css'
import logo from './assets/logo.png'
import mona from './assets/mona.png'
import logo_blue from './assets/logo-blue.png'
import device1 from './assets/devices/device1.png'
import device2 from './assets/devices/device2.png'

import check from './assets/check.svg'
import close from './assets/close.svg'
import curvedLine from './assets/curved-line.png'

import CountdownTimer from "./CountdownTimer.jsx";
import {useEffect} from "react";

function App() {
    // const [count, setCount] = useState(0)

    useEffect(() => {

    }, []);

    return (
        <>
            <div className={'body-app'}>
                <div className={'container-app'}>
                    <div style={{marginTop: 20}} className={'ms-hide'}/>
                    <div className="blue-bg-app">
                        <img src={logo} alt="Logo" className={'logo1'}/>
                        <img src={mona} alt="Logo" className={'logo-name'}/>
                        <br className={'ms-hide'}/>
                        <h1 className={'animated-text'}>
                            Reliable Protection,<br/>Simplified Repairs
                        </h1>
                        <div style={{marginTop: 10}} className={'ms-hide'}/>
                        {/*<p className={'bouncing-text'}>
                            We Offer Complete Protection for Your Mobile Devices Keeping<br className={'ms-hide'} />
                            You Connected to the things that matter most.
                        </p>*/}
                        <div className="bouncing-text">
                            <span>We</span>
                            <span>Offer</span>
                            <span>Premium</span>
                            <span>Protection - </span>
                            <div className="line-break ms-show"></div>
                            <span>Exclusively</span>
                            <span>for</span>
                            <div className="line-break ms-hide"></div>
                            <span>Apple</span>
                            <span>iPhones,</span>
                            <span>Samsung</span>
                            <div className="line-break ms-show"></div>
                            <span>Galaxy,</span>
                            <span>Google</span>
                            <span>Pixel</span>
                            <span>Devices.</span>
                            <div className="line-break ms-show"></div>
                            <span>Not</span>
                            <span>for</span>
                            <span>Everyone!</span>
                        </div>
                        <div style={{marginTop: 10}} className={'ms-hide'}/>
                    </div>
                    <div className={'d-flex justify-content-center'}>
                        <img src={curvedLine} style={{marginTop:4,marginBottom:10,}} className={'curved-line'} />
                    </div>
                    <div style={{marginTop:20,marginBottom:20}}>
                        <CountdownTimer targetDate="2025-05-26 12:00:00" />
                    </div>
                    <div style={{marginTop: 30}} className={'ms-hide'}/>
                    <div className={'container-input'}>
                        <input placeholder={'Enter Email Address'} className={'input-app'}/>
                        <button className={'button-app'}>
                            Join Our Waitlist
                        </button>
                    </div>
                    <div style={{marginTop: 30}} className={'ms-show'}/>
                    <div className={'container-device'}>
                        <img src={device1} className={'device1 ms-hide'} alt="Logo"/>
                        <img
                            src={device2}
                            className="device2"
                            alt="Logo"
                        />
                    </div>
                </div>
            </div>
            <div className={'ms-shrink'}>
            <div className={'body-app2'}>
                    <div className={'container-app2'}>
                        <h1>
                            We go beyond your<br/> manufacturer&#39;s Warranty
                        </h1>
                        <br className={'ms-hide'} />
                        <div className={'row ms-hide-lg'}>
                            <div className={'col-md-4'}>
                                <div className={'col-grid p-4'}>
                                    <h6>Compare Features</h6>
                                </div>
                            </div>
                            <div className={'col-md-4 p-4'}>
                                <div className={'col-grid'}>
                                    <img src={logo_blue} alt="Logo" style={{width: 120}}/>
                                </div>
                            </div>
                            <div className={'col-md-4 p-4'}>
                                <div className={'col-grid'}>
                                    <h6>Others</h6>
                                </div>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-md-4 ms-head'}>
                                <div className={'col-start'}>
                                    <b>Compare Features</b>
                                    <p className={'fs-12'}>Protect any Phone – Old or New</p>
                                </div>
                            </div>
                            <div className={'col-md-4 ms-body'}>
                                <div className={'col-grid'}>
                                    <img className={'d-none-max'} src={logo_blue} alt="Logo"
                                         style={{width: 50, marginBottom: 6}}/>
                                    <p className={'fs-12'}>Old or New</p>
                                </div>
                            </div>
                            <div className={'col-md-4 ms-body'}>
                                <div className={'col-grid'}>
                                    <b style={{marginBottom: 6}}>Others</b>
                                    <p className={'fs-12'}>Only Brand New</p>
                                </div>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-md-4'}>
                                <div className={'col-start'}>
                                    <b>Compare Features</b>
                                    <p className={'fs-12'}>Protection for Device bought anywhere in the world</p>
                                </div>
                            </div>
                            <div className={'col-md-4 ms-body'}>
                                <div className={'col-grid'}>
                                    <img className={'d-none-max'} src={logo_blue} alt="Logo"
                                         style={{width: 50, marginBottom: 6}}/>
                                    <img src={check} alt="Logo" style={{width: 15}}/>
                                </div>
                            </div>
                            <div className={'col-md-4 ms-body'}>
                                <div className={'col-grid'}>
                                    <b style={{marginBottom: 6}}>Others</b>
                                    <img src={close} alt="Logo" style={{width: 15}}/>
                                </div>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-md-4'}>
                                <div className={'col-start'}>
                                    <b>Compare Features</b>
                                    <p className={'fs-12'}>
                                        Protection for Apple iPhones, Samsung Galaxy and Google Pixel Devices with One Account
                                    </p>
                                </div>
                            </div>
                            <div className={'col-md-4 ms-body'}>
                                <div className={'col-grid'}>
                                    <img className={'d-none-max'} src={logo_blue} alt="Logo"
                                         style={{width: 50, marginBottom: 6}}/>
                                    <img src={check} alt="Logo" style={{width: 15}}/>
                                </div>
                            </div>
                            <div className={'col-md-4 ms-body'}>
                                <div className={'col-grid'}>
                                    <b style={{marginBottom: 6}}>Others</b>
                                    <img src={close} alt="Logo" style={{width: 15}}/>
                                </div>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-md-4'}>
                                <div className={'col-start'}>
                                    <b>Compare Features</b>
                                    <p className={'fs-12'}>Cost of Repairs</p>
                                </div>
                            </div>
                            <div className={'col-md-4 ms-body'}>
                                <div className={'col-grid'}>
                                    <img className={'d-none-max'} src={logo_blue} alt="Logo"
                                         style={{width: 50, marginBottom: 6}}/>
                                    <p className={'fs-12'}>100% Free - No Hidden Charges</p>
                                </div>
                            </div>
                            <div className={'col-md-4 ms-body'}>
                                <div className={'col-grid'}>
                                    <b style={{marginBottom: 6}}>Others</b>
                                    <p className={'fs-12'}>Extra Charges</p>
                                </div>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-md-4'}>
                                <div className={'col-start'}>
                                    <b>Compare Features</b>
                                    <p className={'fs-12'}>Accidental damage</p>
                                </div>
                            </div>
                            <div className={'col-md-4 ms-body'}>
                                <div className={'col-grid'}>
                                    <img className={'d-none-max'} src={logo_blue} alt="Logo"
                                         style={{width: 50, marginBottom: 6}}/>
                                    <p className={'fs-12'}>Full coverage annually</p>
                                </div>
                            </div>
                            <div className={'col-md-4 ms-body'}>
                                <div className={'col-grid'}>
                                    <b style={{marginBottom: 6}}>Others</b>
                                    <p className={'fs-12'}>No Coverage</p>
                                </div>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-md-4'}>
                                <div className={'col-start'}>
                                    <b>Compare Features</b>
                                    <p className={'fs-12'}>No. of Repairs Allowed</p>
                                </div>
                            </div>
                            <div className={'col-md-4 ms-body'}>
                                <div className={'col-grid'}>
                                    <img className={'d-none-max'} src={logo_blue} alt="Logo"
                                         style={{width: 50, marginBottom: 6}}/>
                                    <p className={'fs-12'}>Unlimited Repairs</p>
                                </div>
                            </div>
                            <div className={'col-md-4 ms-body'}>
                                <div className={'col-grid'}>
                                    <b style={{marginBottom: 6}}>Others</b>
                                    <p className={'fs-12'}>Limited Repairs</p>
                                </div>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-md-4'}>
                                <div className={'col-start'}>
                                    <b>Compare Features</b>
                                    <p className={'fs-12'}>Wide Network of Authorized Service Centers</p>
                                </div>
                            </div>
                            <div className={'col-md-4 ms-body'}>
                                <div className={'col-grid'}>
                                    <img className={'d-none-max'} src={logo_blue} alt="Logo"
                                         style={{width: 50, marginBottom: 6}}/>
                                    <img src={check} alt="Logo" style={{width: 15}}/>
                                </div>
                            </div>
                            <div className={'col-md-4 ms-body'}>
                                <div className={'col-grid'}>
                                    <b style={{marginBottom: 6}}>Others</b>
                                    <img src={close} alt="Logo" style={{width: 15}}/>
                                </div>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-md-4'}>
                                <div className={'col-start'}>
                                    <b>Compare Features</b>
                                    <p className={'fs-12'}>Repairs Wait Time</p>
                                </div>
                            </div>
                            <div className={'col-md-4 ms-body'}>
                                <div className={'col-grid'}>
                                    <img className={'d-none-max'} src={logo_blue} alt="Logo"
                                         style={{width: 50, marginBottom: 6}}/>
                                    <p className={'fs-12'}>Same Day Service</p>
                                </div>
                            </div>
                            <div className={'col-md-4 ms-body'}>
                                <div className={'col-grid'}>
                                    <b style={{marginBottom: 6}}>Others</b>
                                    <p className={'fs-12'}>Up to 7 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'footer'}>
                <p>Copyright © 2025 Mona Technologies Ltd. All rights reserved.</p>
            </div>
        </>
    )
}

export default App
