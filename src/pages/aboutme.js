import React from 'react';
import{Box, Typography,AppBar, Toolbar, Divider, Avatar,Link, } from "@mui/material";
import { ReactComponent as IceIcon} from "../assets/svg/snowflake-solid.svg";
import { ReactComponent as Heart} from "../assets/svg/heart-solid.svg";
import {Helmet} from "react-helmet";

import avatar from "../assets/img/avatar.jpg";                                   //stp @ 2:10:58 https://www.youtube.com/watch?v=Ym4srh06PYA
import { height } from '@mui/system';
//import { Link } from 'react-router-dom';

const classes ={
    appBar:{
        backgroundColor: (theme) => theme.palette.primary.main,
    },
    logo: {
        height: 42,
         color:  (theme) => theme.palette.background.paper,
    },
    logoName: {
        color:  (theme) => theme.palette.background.paper,
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
        color:  (theme) => theme.palette.background.paper,
        "&:hover":{ color:  (theme) => theme.palette.secondary.main, },
        height:"inherit",
        margin:"auto 10px",
    },
    mainTitle:{ 
        fontSize:{
            xs:32, sm:42, md:54,
        },
        textAlign:"center",
        fontWeight: 900,
        fontFamily: '',
        letterSpacing: 10,
        color:  (theme) => theme.palette.text.primary,
        paddingTop: 10,
        
    },
    socialcon:{
        fontSize:{
            xs:14, sm:34, md:54,
        },
        textAlign:"left",
        margin:"auto 50px",
        fontFamily: '',
        letterSpacing: 10,
        color:  (theme) => theme.palette.text.primary,
        paddingTop: 8,
        
    },
    sect1:{
        height: 250,
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: (theme) => theme.palette.background.default,

    },
    
    sect2:{
        height: 580,
        backgroundColor: (theme) => theme.palette.background.default,
        display: "flex",
        paddingBottom:10,
        
    },
   sect2A:{
        flexDirection: "column",
        height: 580,
        marginLeft:15,
        width:"50%",
        alignItems: "left",
        backgroundColor: (theme) => theme.palette.background.paper,
    },
    sect2B:{
        marginLeft:3,
        height: 580,
        width:"30%",
        
        backgroundPosition: 'center',
        backgroundSize: 460,
        backgroundRepeat: 'no-repeat'
    },

    sect3:{
        backgroundColor: (theme) => theme.palette.primary.main,
        display: "flex",
    },

    sect3A:{
        flexDirection: "column",
        padding : "50px 0px 0px 120px" ,
        height: 250,
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
};


export default function Contactme() {
    return (
        <Box>
            <Helmet> <title>Student List </title>
                <meta name = "Student List" content= "Student List" />
            </Helmet>



            <AppBar position="static" sx={classes.appBar}> 
                <Toolbar sx={classes.toolb}>
                    <Box sx={classes.logo} >
                        <IceIcon style={{height:"inherit", color:"inherit",marginLeft:12}}/>
                       
                    </Box>
                    <Typography variant="h3" sx={classes.logoName} >Student</Typography>
                    <Box component = "span" sx={{flexGrow: 1}} />
                    <Box sx={classes.contr} >
                    <Link  href="/indexPages" sx={classes.navmen} underline ="none"  > 
                           Home
                        </Link>
                        <Link href="/contactme" sx={classes.navmen}  underline ="none"  >
                           Contacts
                        </Link>
                        <Link href="#" sx={classes.navmen}  underline ="none"  >
                           Projects
                        </Link>
                        <Link  href="/aboutme"  sx={classes.navmen} underline ="none"    >
                           About
                        </Link>
                            <Divider orientation="vertical" variant="middle" flexItem sx={classes.divi} />
                            <Avatar src={avatar}/>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box sx={classes.sect1}>
                <Typography variant="h2" sx={classes.mainTitle}> About ME</Typography>
            </Box>
            <Box sx={classes.sect2}>
                <Box sx={classes.sect2A}>
                <Box sx={classes.socialcon} >
                        <Typography variant="h4" > Nice to see you here! </Typography>
                        <Typography  > I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the time. Currently, I am a student</Typography>
                        <Typography variant="h4" > Education </Typography>
                        <Typography > Bachelor of Science in Information Technology in Bulacan State Unoversity </Typography>
                        <Typography variant="h4" > Age</Typography>
                        <Typography > 22 years Old</Typography>
                        <Typography variant="h4" > Birthday </Typography>
                        <Typography > July 18, 1999</Typography>
                        <Typography variant="h4" > Gender </Typography>
                        <Typography  > Female</Typography>
                        <Typography variant="h4" > Nationality</Typography>
                        <Typography > Filipino</Typography>

                        
                    </Box>
                </Box>
                <Box sx={classes.sect2B}>
                    
                </Box>
            </Box>

            <Box sx={classes.sect3}>
                <Box sx={classes.sect3A}>
                    <Box  ><Link  href="/indexPages" sx={classes.footmen} underline ="none"  > Home </Link>  </Box>
                    <Box  ><Link href="/contactme" sx={classes.footmen}  underline ="none" > Contacts </Link>  </Box>
                    <Box  ><Link href="#" sx={classes.footmen}  underline ="none"  >Projects </Link> </Box>          
                    <Box  ><Link  href="/aboutme"  sx={classes.footmen} underline ="none"    > About </Link> </Box>                
            </Box>

                <Box  sx={classes.sect3B}>
                   <Box  ><Link  href="/indexPages" sx={classes.footmen1} underline ="none"  > Address </Link>  </Box>
                   <Box  ><Link  href="/indexPages" sx={classes.footmen1} underline ="none"  > 0519, Tarikan st, Parulan, Plaridel, Bulacan.</Link>  </Box>
                    <Heart style={{height:"50px", color:"inherit",marginLeft:2, marginTop:10}} />
                </Box>

                <IceIcon style={{height:"250px", color:"inherit",marginLeft:200, marginTop:20}}/>

            </Box>
            

        </Box>
    );
}
