import './Landing.css';
import mainLogo from '../../images/logo.svg';

const Landing = () => {
  return (
    <div id="landing">
      {/* <svg>
        <path className="st0 logo" d="M58.3,20.1c-0.8,0-1.5,0.2-2.2,0.7c-0.6,0.4-1.2,1-1.5,1.8c-0.3,0.7-0.4,1.5-0.2,2.3c0.1,0.8,0.5,1.5,1.1,2
	c0.5,0.6,1.2,0.9,2,1.1c0.8,0.2,1.6,0.1,2.3-0.2c0.7-0.3,1.3-0.8,1.8-1.4c0.4-0.6,0.7-1.4,0.7-2.2c0-1.1-0.4-2.1-1.2-2.8
	C60.4,20.6,59.4,20.2,58.3,20.1z"/>
        <path className="st0 logo" d="M95,57.5L79.2,89.9L67.1,64.1L81.9,31c4.8-11.6-4.8-31-23.6-31S29.9,19.4,34.7,31l14.9,33.1L37.5,89.9
	L21.6,57.5H0l30.5,61.2h12.4l15.4-35.1l15.5,35.1h12.4l30.5-61.2H95z M49.5,27.8c-3-7.7,3.2-12.9,8.8-12.9s11.9,5.2,8.8,12.9
	l-8.8,19.6L49.5,27.8z"/>
      </svg> */}
      <img className="logo" src={mainLogo} alt="Wandr logo" />
      <div className="buttons-box">
        <button className="button-main">Login</button>
        <button className="button-main button-second">Signup</button>
      </div>
    </div>
  );
};

export default Landing;