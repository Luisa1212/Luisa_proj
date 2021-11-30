import React from 'react';
import{Box, Typography,AppBar, Toolbar, Avatar, Link, TextField, Button, } from "@mui/material";
import { ReactComponent as IceIcon} from "../assets/svg/window.svg";
import { ReactComponent as Stars} from "../assets/svg/star.svg";

import avatar from "../assets/img/avatar.jpg"; 
import {Helmet} from "react-helmet";
import Rating  from "../Rating.js";
import Rating2 from "../Rating2.js";
//stp @ 2:10:58 https://www.youtube.com/watch?v=Ym4srh06PYA
//import { Link } from 'react-router-dom';

const classes ={
    appBar:{
        backgroundColor: (theme) => theme.palette.primary.main,
        
    },
    logo: {
        size: "2x",
         color:  (theme) => theme.palette.background.paper,
    },
    logoName: {
        color:  (theme) => theme.palette.text.primary,
        fontSize: "24px",
    },
    divi:{
        margin:"3px 10px",
        backgroundColor:"white",
    },
    toolb:{
        padding:1 ,
    },
    contr:{
        display: "flex",
    
        
        
    },
    navmen:{
        ".MuiLink-root":{
            textDecortion:"none"
        },
        color:  (theme) => theme.palette.text.primary,
        "&:hover":{ color:  (theme) => theme.palette.text.secondary, },
        height:"inherit",
        margin:"auto 10px",
        display: "flex",
        flexDirection: "column",
    },

    navmenfield:{
        color:  (theme) => theme.palette.text.secondary,
        "&:hover":{ color:  (theme) => theme.palette.text.primary, },
        width: "237px",
        height: "48px",
        radius: "8px"

    },
    mainTitle:{ 
        fontSize:{
            xs:32, sm:42, md:64,
        },
        textAlign:"center",
        fontWeight: 900,
        fontFamily: "Fira Sans",
        letterSpacing: 10,
        
        paddingTop: 20,
        
    },
    sect1:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px",

        position: "static",
        width: 1366,
        height: 1241,
        left: "0px",
        top: "0px",
        backgroundColor: (theme) => theme.palette.background.default,

    },
    sect111aa:{
        display:"flex",
        flexDirection:"column",
        width:926, height:326,marginTop:4,padding:"40 10 40 10",
        color: (theme) => theme.palette.text.primary,
    },

    sect1a:{
        backgroundColor: (theme) => theme.palette.primary.main,

        display: "flex",
        flexDirection: "grid",
        alignItems: "flex-start",
        padding: "40px 10px 40px 0px",

        position: "static",
        width: 926,
        height: 160,
        left: "0px",
        marginTop: 10,
        flexGrow: 3,


    },
    sect11aa:{ fontFamily:"Roboto",fontWeight:400, fontSize:12,},
    sect1aaa:{ fontFamily:"Roboto",fontWeight:400, fontSize:24,},
    sect1aa:{
        display:"flex",
        flexDirection:"column",
        width:926, height:326,top:40,padding:"40 10 40 10",
        color: (theme) => theme.palette.text.primary,
      
    },
    sect1star:{
        display:"flex",
        flexDirection:"column",
        width:926, height:326,top:40,padding:"40 10 40 10",
        color: (theme) => theme.palette.text.secondary,
        marginLeft: 15,
        
    },
   
    sect1b:{
        display: "flex",
        flexDirection: "column",
        aligIntems: "center",
        padding: 0,

      
        width: 1366,
        height: 241,
        left: 0,
        color: (theme) => theme.palette.text.primary,
        margin: "auto",
    },
    sectRate:{
       
        color: (theme) => theme.palette.background.paper,

    },

    sect1c:{
        backgroundColor: (theme) => theme.palette.primary.main,

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius:"3px",

        position: "static",
        width: 400,
        height: 556,
        left: "0px",
        top: 114,
        flexGrow: 2,
        

        

    },
    sect1d:{
        height: "1366px",
        

    },
    sect1e:{
        height: "1366px",
        

    },
    sect1f:{
        height: "1366px",
        

    },
    btn1:{
        width:300,
        marginTop:2,
        borderRadius: "16px",
        fontSize:{
            xs:12, sm:15, md:20,
        },
        backgroundColor: (theme) => theme.palette.primary.main,   
    },
   
    
    
    skils:{
        display: "flex",
        flexDirection: "column",
        textAlign:"left",
        fontFamily: "Segoe UI",
        fontWeight: 500,
        backgroundColor: (theme) => theme.palette.background.default,
        paddingLeft:5,
        borderRadius: "16px",
        fontSize:{
            xs:10, sm:20, md:30,
        },
        color:  (theme) => theme.palette.primary.main,
        "&:hover":{ color:  (theme) => theme.palette.background.paper, }, 
         lineHeight: 2 ,
    },
    skils1:{
        textAlign:"center",
        borderRadius: "16px",
        padding:1,
        backgroundColor: (theme) => theme.palette.background.default,
    },
    row2b:{
        margin:3,
        paddingTop:3,
        
    },

    sect3:{
        backgroundColor: (theme) => theme.palette.primary.main,
        display: "flex",
    },
    sect3A:{
        flexDirection: "column",
        padding : "50px 0px 0px 120px" ,
        height: 2050,
    },
    footmen:{
        fontSize:{
            xs:10, sm:18, md:20,
        },
        color:  (theme) => theme.palette.background.paper,
        "&:hover":{ color:  (theme) => theme.palette.secondary.main, },
        lineHeight: 3 ,
    },
    sect3B:{
    flexDirection: "column",
        padding : "50px 0px 0px 120px" ,
        height: 250,
    },
    footmen1:{
        fontSize:{
            xs:10, sm:18, md:20,
        },
        color:  (theme) => theme.palette.background.paper,
        "&:hover":{ color:  (theme) => theme.palette.secondary.main, },
        lineHeight: 3 ,
    },

    skils:{ color:  (theme) => theme.palette.text.primary,
         padding:"auto",marginTop:3,marginRight:10, justifyContent: "flex-start",  float:"left",},
         left: "calc(50% - 220/2 - 29)",
         top: "calc(50% - 24/2)",
};

export default function IndexPages() {
    return (
        <Box>
            <Helmet> <title> Student Evaluation </title>
                <meta name = "Student Evalution" content="Student Evaluation" />
            </Helmet>

            <AppBar position="static" sx={classes.appBar}>
                <Toolbar sx={classes.toolb}>
                
                    <Typography variant="h3" sx={classes.logoName} >Student Review</Typography>
                    <IceIcon style={{height:"25px", color:"inherit",marginLeft:10}}/>
                    <Box component = "span" sx={{flexGrow: 1}} />
                    <Box sx={classes.contr} >
                        <Link  href="/indexPages" sx={classes.navmen} underline ="none"  > 
                           Student List
                        </Link>
                        <Link href="/contactme" sx={classes.navmen}  underline ="none"  >
                           Student Evaluation
                        </Link>
                        
                        <Link  href="/aboutme"  sx={classes.navmen} underline ="none"    >
                           Blog
                        </Link>
                            
                            
                    </Box>
                    <Box component = "span" sx={{flexGrow: 1}} />
                    <Avatar src={avatar}/>
                    <TextField sx={classes.navmenfield} label="Search" variant="outlined" />
                </Toolbar>
            </AppBar>
        
            <Box sx={classes.sect1}>
                <Box sx={classes.sect1a}>
                    <Box sx={classes.sect1star}> <img  style={{height:146, width:146}} src={avatar} /> 
                    <Box>
                        <Stars  sx={classes.stars} style={{size:24,height:30, width:28,top:3.75,left:3 , color:  (theme) => theme.palette.background.paper,}} />
                        <Stars  sx={classes.stars} style={{size:24,height:30, width:28,top:3.75,left:3 , color:  (theme) => theme.palette.background.paper,}} />
                        <Stars  sx={classes.stars} style={{size:24,height:30, width:28,top:3.75,left:3 , color:  (theme) => theme.palette.background.paper,}} />
                        <Stars  sx={classes.stars} style={{size:24,height:30, width:28,top:3.75,left:3 , color:  (theme) => theme.palette.background.paper,}} />
                        <Stars  sx={classes.stars} style={{size:24,height:30, width:28,top:3.75,left:3 , color:  (theme) => theme.palette.background.paper,}} />
                        </Box>
                    </Box>
                    <Box sx={classes.sect1aa}>
                        <Typography sx={classes.sect1aaa}>Hipolito, Jonathan J.</Typography>
                        <Typography sx={classes.sect11aa }>BSIT 4B</Typography>
                        <Typography sx={classes.sect11aa }>Gender:Male</Typography>
                        <Typography sx={classes.sect11aa }>Birthday:02-24-1997</Typography>
                        <Typography sx={classes.sect11aa }>Adress:Bustos Bulacan</Typography>
                        <Typography sx={classes.sect11aa }>Nickname:Nathan</Typography>
                        <Typography sx={classes.sect11aa } >Skill/Languages:javascript</Typography>
                    </Box>
                    <Box sx={classes.sect111aa}>
                        <Typography sx={classes.sect11aa }>Teamwork</Typography>
                        <Typography sx={classes.sect11aa }>Creativity</Typography>
                        <Typography sx={classes.sect11aa }>Adaptability</Typography>
                        <Typography sx={classes.sect11aa }>Leadership</Typography>
                        <Typography sx={classes.sect11aa }>Persuasion</Typography>
                    </Box>

                </Box>

                <Box sx={classes.sect1b}>
                <Typography style={{ margin:"0px auto ",fontSize:32, marginTop :50,}} >Add your rating</Typography>
                    <Rating/>
                  
                   
                </Box>
                
                <Box sx={classes.sect1c}>
                    <Box  >
                    <Typography  sx={classes.skils}> Teamwork</Typography>
                    
                        < Rating2 />
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
                 
                   
      
               

                    <Box>
                <TextField id="outlined-basic" label="Comment" variant="outlined" />
            </Box>
            <Box>
                <Button variant="contained">Submit</Button>
            </Box>

                </Box>
                
            </Box>
           
            </Box>
       
       
    );
}
