// import logo from './logo.svg';
import './Bg.css';

import close from './../../images/close.png'

function Bg() {
  return (
   <div className="bg_general_div">
        <div className='bg_top_menu'> 
            <img src={close} className='bg_close_btn'/>
            <div className='bg_top_menu_title' > העלאת תמונה כדי להסיר את הרקע </div>
            <div className="bg_top_menu_button"> העלאת תמונה </div>
            <div className="bg_top_menu_sub_title"> פורמטים נתמכים: png, jpeg</div>

        </div>


   </div>
  );
}

export default Bg;
