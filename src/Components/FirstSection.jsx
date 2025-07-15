import MyImage from "../assets/MyImage1.png";
import TypedComponent from './TypedComponent';
import "./FirstSection.css";

const FirstSection = () => {

const handleDownload = () => {
  window.open('https://drive.google.com/file/d/1o4v4x49U6_aAY0ZnhgTXmagKbaKTtG21/view?usp=sharing', '_blank');
};


  return (
    <div>
      <section className="First">
        <div className="greet">
        Hi , My name is <strong className='Blue'> Vedant </strong>
          <div><strong style={{ color: "beige",fontSize:"60px" }}> & </strong><span>I am a <strong className='Blue'>
            <span style={{ fontSize: '50px' }}><TypedComponent /></span></strong></span></div>

        <div className="button">
          <button className='btn' onClick={handleDownload}>
            Download Resume
          </button>
        </div>
        </div>
        
        <div className="photo">
          <img src={MyImage} alt="devImage" />
        </div>
      </section>
    </div>

    
  )
}

export default FirstSection
