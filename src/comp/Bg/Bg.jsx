// import logo from './logo.svg';
import './Bg.css';

import close from './../../images/close.png'
import banner from './../../images/banner.png'
import logo from './../../images/logo.png'
import DownloadImg from './../DownloadImg/DownloadImg'

import Bgoriginal from './../Bgoriginal/Bgoriginal'

import Bgnobg from './../Bgnobg/Bgnobg'

import React , {useState, useRef} from 'react';

function Bg() {

  const inputElementFile = useRef();

  const [bg_type, setbg_type] = useState(true);
  const [borderBottom_tab_change_type, setborderBottom_tab_change_type] = useState('');
  const [borderBottom_tab_type_remove, setborderBottom_tab_type_remove] = useState('4px solid #9C27B0');

  const [uploaded_image, setuploaded_image] = useState('');


  function change_bg_type() {
    setbg_type(false);
    setborderBottom_tab_change_type('4px solid #9C27B0');
    setborderBottom_tab_type_remove('');
  }

  function change_bg_type_remove() {
    setbg_type(true);
    setborderBottom_tab_type_remove('4px solid #9C27B0');
    setborderBottom_tab_change_type('');
  }

  function choose_upload_file(event) {
  //  console.log(event.target.files[0]);
    setuploaded_image(event.target.files[0]);
  }

  function choose_file_input() {
    inputElementFile.current.click();
  }

  return (
   <div className="bg_general_div">
        <div className='bg_top_menu'> 
            <img src={close} className='bg_close_btn'/>
            <div className='bg_top_menu_title'> העלאת תמונה כדי להסיר את הרקע </div>
            <div className="bg_top_menu_button" onClick={choose_file_input} > העלאת תמונה </div>
            <div className="bg_top_menu_sub_title"> פורמטים נתמכים: png, jpeg</div>
            <input type="file" ref={inputElementFile} className="input_file_upload" onChange={choose_upload_file}/>
        </div>


        <div className='bg_body_area'>
          <div className='bg_body_left'> 
            <div className='bg_body_tabs'>
              <div className="bg_body_bg_remove" onClick={change_bg_type_remove} style={{borderBottom: borderBottom_tab_type_remove }}> 
              <span className="bg_body_bg_remove_text">הוסר רקע  </span>
              
              </div>
              <div className="bg_body_bg_original" onClick={change_bg_type} style={{borderBottom: borderBottom_tab_change_type }}>
              <span className="bg_body_bg_remove_text">
                מקורי 
                </span>
                </div>
            </div>

            <div className="bg_body_left_middle">

            {bg_type ? <Bgnobg img={uploaded_image}/> :   <Bgoriginal img={uploaded_image}/>}
           

            </div>
              <div className="bg_body_eula">
                על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות שלנו. וחלים מדיניות ופרטיות ותנאי השימוש
              </div>
              <div className="bg_body_eula_btn"> תקנון חברה </div>
          </div>



          <div className='bg_body_right'> 
            <div className="bg_body_right_middle">
            <DownloadImg/>
            </div>
          </div>

        </div>


        <div className='bg_footer'> 
          <img src={banner} className='bg_footer_banner'/>
          <img src={logo} className='bg_footer_logo'/>
         
        </div>

   </div>
  );
}

export default Bg;
