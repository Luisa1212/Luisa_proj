import React from "react";
import { FaStar } from "react-icons/fa";
import{Box, Button, Typography,TextField} from "@mui/material";
const colors = {
    green: "#26CE8D",
    grey: "#a9a9a9"
}

function App() {

    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);


    const handleClick = value => {
        setCurrentValue(value)
    };

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave =() =>{
        setHoverValue(undefined)
    }

    return (
        
        <div style={styles.container}>
             
            <div style={styles.stars}>
                {stars.map((_, index) => {
                    return (
                        <FaStar 
                            key={index}
                            size={24}
                            style={{
                                marginRight: 10,
                                cursor: "pointer"
                            }}
                            color={(hoverValue || currentValue) > index ? colors.green : colors.grey}
                            onClick={() => handleClick(index + 1)}

                        />
                    )
                })}
            </div>

            


        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "initial",
        marginTop:20,
       float:"left",
    },
   
    


}




export default App;