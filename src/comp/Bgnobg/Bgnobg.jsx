import './Bgnobg.css';

import React , {useState, useRef, useEffect} from 'react';
import axios from 'axios';

function Bgnobg(props) {

    const [choosed_color, setchoosed_color] = useState('transapent');
    const [img, setimg] = useState();
    const inputElement = useRef();

    useEffect(() => {
        if(props.img) {
            onFileUpload(props.img);
        }
    },[props.img]);

       const onFileUpload = async (img_file) => {
        let Headers= {
            "Content-type": "multipart/form-data"
        };

        const formData = new FormData();
        formData.append("file", img_file);
        formData.append("fileName", img_file.name);

        try {
          const res = axios.post("http://localhost:5000/send_image", formData, Headers);
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
    };



    function choose_color_input() {
        inputElement.current.click();
    }

    function choose_color_click(e) {
        setchoosed_color(e.target.value);
    }

    return (
            <div>
                    <div className="Bgnobg_text">אל תשכחו להוריד את הקבצים. הם ימחקו אוטומטית כשתצא מהדף </div>
        
                    <div className="bg_color_div" onClick={choose_color_input} > צבע רקע 
                    <div style={{backgroundColor: choosed_color}} className="show_selected_color">

                    </div>
                    
                    </div>
                    <input type="color" ref={inputElement}  className="color_input" onInput={choose_color_click}/>


                    <div className="display_uploaded_image"> 
                        <img src={img}  className="display_uploaded_image_image"/>

                    </div>
            </div>

        )
}

export default Bgnobg;