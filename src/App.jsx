import './App.css'
import logo from './assets/logo.svg'
import mona from './assets/mona.svg'
import logo_blue from './assets/logo-blue.svg'
import device1 from './assets/devices/device1.svg'
import device2 from './assets/devices/device2.svg'

import check from './assets/check.svg'
import close from './assets/close.svg'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <div>
            <div className={'body-app'}>
                <div className={'container-app'}>
                    <div className="blue-bg-app">
                        <img src={logo} alt="Logo" style={{width:64}} />
                        <img src={mona} alt="Logo" style={{width:100}} />
                        <h1>
                            Reliable Protection,<br/>Simplified Repairs
                        </h1>
                        <p>
                            We Offer Complete Protection for Your Mobile Devices Keeping<br />
                            You Connected to the things that matter most.
                        </p>
                    </div>
                    <div className={'container-input'}>
                        <input placeholder={'Enter Email Address'} className={'input-app'} />
                        <button className={'button-app'}>
                            Join Our Waitlist
                        </button>
                    </div>
                    <div className={'container-device'}>
                        <img src={device1} className={'device1 ms-hide'} alt="Logo" />
                        <img src={device2} className={'device2'} alt="Logo" />
                    </div>
                </div>
            </div>
            <div className={'ms-shrink'}>
                <div className={'body-app2'}>
                    <div className={'container-app2'}>
                        <h1>
                            We go beyond your<br/> manufacturer&#39;s Warranty
                        </h1>
                        <br className={'ms-hide'}/>
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
                                    <p className={'fs-12'}>Protection for all Brands with one Account</p>
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
                <p>Copyright © 2025 Monaprotect. All rights reserved.</p>
            </div>
        </div>
    )
}

export default App
