import React from 'react';
import{Box, Typography,AppBar, Toolbar, Divider, Avatar,Link,TextField, Button } from "@mui/material";
import { ReactComponent as IceIcon} from "../assets/svg/snowflake-solid.svg";
import { ReactComponent as Heart} from "../assets/svg/heart-solid.svg";
import avatar from "../assets/img/avatar.jpg";   
import {Helmet} from "react-helmet";                                //stp @ 2:10:58 https://www.youtube.com/watch?v=Ym4srh06PYA
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
        color:  (theme) => theme.palette.primary.main,
        paddingTop: 10,
        
    },
    socialcon:{
        margin:"auto",
        fontSize:{
            xs:10, sm:14, md:24,
        },
        textAlign:"left",
       
         fontFamily: '',
        letterSpacing: 10,
        color:  (theme) => theme.palette.text.primary,
        paddingTop:3,
        
    },
    socialcon1:{
        
    
      textAlign:"center",
      margin:"auto",
        fontSize:{
            xs:10, sm:14, md:18,
        },
        
       
         fontFamily: '',
        letterSpacing: 2,
        color:  (theme) => theme.palette.text.primary,
        
    },
    sect1:{
        height: 250,
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: (theme) => theme.palette.background.default,

    },
    
    sect2:{
        height: 800,
        backgroundColor: (theme) => theme.palette.background.default,
        display: "flex",
        paddingBottom:10 ,
    },
    sect2A:{
        flexDirection: "column",
        alignItems: "right",
        height: 800,
        width:"30%",
        backgroundImage: "url(" + "https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/217651122_2698907126899881_3295613887006229915_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHq7gZwI9XOIp4l8X3UnwJkHmQ354RwFC8eZDfnhHAUL1Xxljev9rM4ejhoN0JZjMc0aYFG4Npv50eYHoYoYqb4&_nc_ohc=L1-EDoQzP4kAX9w4yAq&_nc_ht=scontent.fcrk1-4.fna&oh=39902ec1fc44128ff1e23f2c0b3fcb8a&oe=618849AE" + ")",
        backgroundPosition: 'initial',
        marginLeft:15,
        backgroundSize: '380px',
        backgroundRepeat: 'no-repeat'
    },
    sect2B:{
        height: 800,
        
        width:"50%",
        alignItems: "right",
        backgroundColor: (theme) => theme.palette.background.paper,
    },
    sect2BMess:{
        padding:3,
        display:"flex",
        flexDirection:"column",
    },
    sect2BMessf:{
        color:  (theme) => theme.palette.text.secondary.main,
        m:2,
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
            <Helmet> <title> Student Evaluation Sub </title>
                <meta name = "Student Evalution Sub" content="Student Evaluation Sub" />
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
                <Typography variant="h2" sx={classes.mainTitle}> Contact Information</Typography>
                
            </Box>
            <Box sx={classes.sect2}>
                <Box sx={classes.sect2A}></Box>
                <Box sx={classes.sect2B}>
                    <Box sx={classes.sect2BMess}> 
                        <Typography   sx={classes.socialcon} variant="h5" > Messages me </Typography>
                        <Box sx={classes.sect2BMess}>
                        <TextField sx={classes.sect2BMessf} label="Name" variant="outlined" /> 
                        <TextField sx={classes.sect2BMessf}  label="Messages" variant="outlined" /> 
                        <Button sx={classes.sect2BMessf} href="/aboutme"  variant="contained" >Send</Button>
                        </Box>
                    </Box>
                
                    <Box sx={classes.socialcon}  >
                        <Typography sx={classes.socialcon1} >  Facebook: Dragon.aiss.19191</Typography  > 
                        <Typography  sx={classes.socialcon1}> instagram: dragonice_18 </Typography>
                        <Typography sx={classes.socialcon1}> Gmail : djluisa@gmail.com </Typography>
                        <Typography sx={classes.socialcon1}> Phone : 0966-714-6083 </Typography>
                    </Box>
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
