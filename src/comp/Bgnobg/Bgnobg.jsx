import './Bgnobg.css';

import React , {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import {Buffer} from 'buffer';

function Bgnobg(props) {

    const [choosed_color, setchoosed_color] = useState('transapent');
    const [img, setimg] = useState(props.image_afer_action_prop);
    const inputElement = useRef();

    useEffect(() => {
        if(props.img && props.flag) {
          onFileUpload(props.img);
          props.update_flag_prop();
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
        axios.post("http://localhost:5000/send_image", formData, Headers).then(res => 
        {
      
            let img_path='http://localhost:5000/'+res.data.imageName;
      
            setimg(img_path);
            props.image_afer_action_func_prop(img_path);

        });

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
                        <img  src={img} className="display_uploaded_image_image"/>

                    </div>
            </div>

        )
}

export default Bgnobg;