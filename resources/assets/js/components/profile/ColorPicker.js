import React from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({handlePicker, showPicker, pickedColor, color}) => {
    
    // let rgbCol = ( color && color.rgb.r, color.rgb.g, color.rgb.b);
    let btnstyle= {
        backgroundColor: color ,
        padding: "10px 20px",
        boxShadow: "0 0 5px"
    }
    return(
        <div className="form-group">
            <label 
                htmlFor="color" 
                style={{display: "block"}} > Color 
            </label>
            <button 
                onClick={ () => handlePicker()} 
                className="btn" 
                style={ btnstyle } >{ showPicker && "OK!" } 
            </button>
            { showPicker && 
                <SketchPicker 
                    color={color} 
                    id="color" 
                    name="color" 
                    onChange={ color => pickedColor(color) } 
                /> 
            }
        </div>
    )
}

export default ColorPicker;