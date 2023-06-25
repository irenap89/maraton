import './Bgnobg.css';

import React , {useState, useRef, useEffect} from 'react';
import axios from 'axios';

function Bgnobg(props) {

    const [choosed_color, setchoosed_color] = useState('transapent');
    const [img, setimg] = useState();
    const inputElement = useRef();

    useEffect(() => {
        if(props.img) {
           // setimg(props.img);
           
            // axios.post('http://localhost:5000/send_image')
            // .then(res => {
            //  // const persons = res.data;
            // //  this.setState({ persons });
            // })

          //  console.log(props.img);
            onFileUpload(props.img);

        }
    },[props.img]);

  
    function onFileUpload (img_file) {
 console.log('dfgsfdgsdfg');
        // Create an object of formData
        const formData = new FormData();
 
        console.log(img_file);
        // Update the formData object
        formData.append(
           "gfh",
            img_file,
            img_file.name
        );
 
        // // Details of the uploaded file
        // console.log(this.state.selectedFile);
 
        // Request made to the backend api
        // Send formData object
        axios.post("http://localhost:5000/send_image", formData);
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