import {  Grid, makeStyles, Typography ,useTheme,useMediaQuery,Button} from '@material-ui/core';
import imgs from '../assests/3026238.jpg';
import React from 'react';


const useStyles = makeStyles(theme=>({
    missionStatement: {
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "1.5rem",
        maxWidth: "50em",
        lineHeight: 1.4
      },
      rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "1.5em",
          paddingRight: "1.5em"
        }
      },
      imgss:{
            width:"60%",
            // margin:'auto',
           
      },
      imgdiv:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      },
      avatar: {
        height: "15em",
        width: "15em",
        [theme.breakpoints.down("sm")]: {
          height: "15em",
          width: "15em",
          maxHeight: 300,
          maxWidth: 300
        }
      }
}))



export default function AboutUs(props){
    const classes = useStyles();
    const theme = useTheme();
    const medium = useMediaQuery(theme.breakpoints.down('md'));
    const small = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container direction='column'>

            <Grid 
                item 
                container 
                direction={medium ? 'column' : 'row' }
                className={classes.rowContainer}
                alignItems='center'
                style={{marginTop:' 2em',marginBottom:'1.7em'}}
            >
                
                <Grid item lg>
                    <img 
                        src={imgs}
                        alt='mountain' 
                        style={{maxWidth:small ? 400 :'40em',
                                marginRight:medium ? 0 : '0em',
                                marginBottom:medium ? '5em' :0
                            }} 
                    />
                </Grid>
                <Grid item container direction='column' lg style={{maxWidth:'40em'}}>
                <Grid item className={classes.rowContainer} style={{marginBottom:'5em'}}>
                <Typography 
                    variant='h2' 
                    style={{fontFamily:'Montserrat', fontSize:'2rem'}}
                    align={medium ? 'center' : undefined}
                >
                    I am <span style={{fontFamily:'Kaushan Script', fontSize:'2.5rem', color:'#EB0EFD'}}>AYAAN</span>, a software Developer
                    <br></br>
                     {/* pursung my Bachelor's in technology in computer Science */}
                     A coding enthusiast
                     <br></br>
                     <span style={{color:'red', fontFamily:'Rock Salt', position:'relative', left:'30%'}}>&</span>
                     <br></br>
                     A passionate programmer
                </Typography>
            </Grid>
                    <Grid item>
                        <Typography variant='h4' style={{textAlign:'center', fontFamily:'Montserrat', fontSize:'1rem', color:'gray', fontWeight:'300', marginTop:'-4rem'}} gutterBottom align={medium ? 'center' : 'inherit'}>
                        pursuing B.tech in Computer Science
                        </Typography>
                    </Grid>
                    
                </Grid>
                
            </Grid>










                
            {/* <Grid item className={classes.rowContainer} style={{marginTop:matchesMD ? '1em' : '1em'}}>
                <Typography align='center' variant='h2'>
                <img className={classes.imgss} src={imgs} />
                    About Me
                </Typography>
            </Grid>
            <Grid 
                item 
                container 
                justifyContent='center' 
                className={classes.rowContainer}
                style={{marginTop:'3em'}}
            >
                <Typography variant='h4' align='center' className={classes.missionStatement}>
                I am 3rd year BTech Computer science student who is passionate about Web development.
                I am looking for front end opportunities in reactjs.
                </Typography>
            </Grid>
            <Grid 
                item 
                container 
                direction='column' 
                className={classes.rowContainer}
                alignItems='center'
                style={{marginBottom:'10em',marginTop:'3em'}}
            >
                <Grid item>
                   <Typography variant='h4' gutterBottom align="center">
                       Team
                   </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align="center">
                        Ritik Jain, Founder
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                        Web Developer
                    </Typography>
                </Grid>
                
               
            </Grid> */}
            </Grid>
    )
}