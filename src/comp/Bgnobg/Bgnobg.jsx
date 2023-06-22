import './Bgnobg.css';

import React , {useState, useRef, useEffect} from 'react';
import { RemoveBgResult, RemoveBgError, removeBackgroundFromImageUrl } from "remove.bg";


function Bgnobg(props) {

    const [choosed_color, setchoosed_color] = useState('transapent');
    const [img, setimg] = useState();
    const inputElement = useRef();

    useEffect(() => {
        if(props.img) {
            setimg(URL.createObjectURL(props.img));
            removeBackgroundFromImageUrl();
        }
    },[props.img]);

  

    function choose_color_input() {
        inputElement.current.click();
    }

    function choose_color_click(e) {
        setchoosed_color(e.target.value);
    }



 
        const url = props.img;
        const outputFile = 'changed_bg_files/img-removed-from-file.png';
        
        removeBackgroundFromImageUrl({
        url,
        apiKey: "YOUR-API-KEY",
        size: "regular",
        type: "person",
        outputFile 
        }).then((result) => {
            console.log(`File saved to ${outputFile}`);
             const base64img = result.base64img;
        }).catch((errors) => {
            console.log(JSON.stringify(errors));
        });

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