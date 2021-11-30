import React from 'react';
import{Box, Typography,AppBar, Toolbar, Avatar, Link, TextField, Button, } from "@mui/material";
import React from 'react'

export default function rater() {
    return (
        <Box>

            <Typography style={{ margin:"0px auto ",fontSize:32, marginTop :50,}} >Add your rating</Typography>
            <Rating/>


            </Box>

            <Box sx={classes.sect1c}>
            <Box  >
            <Typography  sx={classes.skils}> Teamwork</Typography>
                < Rating2 sx={classes.rater}/>
            </Box>
            <Box>
                
                <Typography  sx={classes.skils} >Creativity</Typography> 
                <Rating2  sx={classes.rater}/>
            </Box>
            <Box>
                <Typography  sx={classes.skils}>Adaptability</Typography>
                    <Rating2 sx={classes.rater}/>
            </Box>
            <Box>
                <Typography  sx={classes.skils}>Leadership</Typography>
                    <Rating2 sx={classes.rater}/>
            </Box>
            <Box>
                <Typography  sx={classes.skils}>Persuasion</Typography>
                    <Rating2 sx={classes.rater}/>
            </Box>
        </Box>
    )
}
