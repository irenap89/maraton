import './Bgoriginal.css';

import React , {useState, useRef, useEffect} from 'react';
 


function Bgoriginal(props) {

    const [choosed_color, setchoosed_color] = useState('transapent');
    const [img, setimg] = useState();
    const inputElement = useRef();

    useEffect(() => {
        if(props.img) {
            setimg(URL.createObjectURL(props.img));
        }
    },[props.img]);

  

    function choose_color_input() {
        inputElement.current.click();
    }

    function choose_color_click(e) {
        setchoosed_color(e.target.value);
    }

    return (
            <div>
                    <div className="Bgnobg_text">אל תשכחו להוריד את הקבצים. הם ימחקו אוטומטית כשתצא מהדף </div>
        
                    <input type="color" ref={inputElement}  className="color_input" onInput={choose_color_click}/>


                    <div className="display_uploaded_image"> 
                        <img src={img}  className="display_uploaded_image_image"/>

                    </div>
            </div>

        )
}

export default Bgoriginal;