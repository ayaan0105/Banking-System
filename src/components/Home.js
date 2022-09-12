import React from 'react';
import { makeStyles, Grid, Typography,useMediaQuery,useTheme ,Button} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import {Typewriter} from 'react-simple-typewriter';
import imag from '../assests/11205.jpg';
import imag2 from '../assests/4573.jpg';
import './home.css';
import { useState, useEffect } from "react";

const useStyles = makeStyles(theme=>({
    rowContainer:{
        paddingLeft:'5em',
        paddingRight:'5em',
      
        [theme.breakpoints.down('sm')]:{
            paddingLeft:'1.5em',
            paddingRight:'1.5em'
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        borderRadius:50,
        backgroundColor:theme.palette.common.orange,
        height:45,
        width:200,
        '&:hover':{
            backgroundColor:theme.palette.secondary.light
        }
    },

}))

export default function LandingPage(props){
    const classes = useStyles();
    const history = useHistory();
    const theme = useTheme();
    const medium = useMediaQuery(theme.breakpoints.down('md'));
    const small = useMediaQuery(theme.breakpoints.down('sm'));
    



    return  (
        <Grid container direction='column' >
            
            <Grid 
                item 
                container 
                direction={medium ? 'column' : 'row' }
                className={classes.rowContainer}
                alignItems='center'
                style={{marginTop:' 2em',marginBottom:'1.7em'}}
            >
                
                
                <Grid item container direction='column' lg style={{maxWidth:'40em'}}>
                <Grid item className={classes.rowContainer} style={{marginBottom:'5em'}}>
                <Typography 
                    variant='h2' 
                    style={{fontFamily:'Kaushan Script', fontSize:'3rem'}}
                    align={medium ? 'center' : undefined}
                >
                    {/* Hi, User */}
                    <Typewriter 
                   loop
                   cursor
                   cursorStyle='|'
                   typeSpeed={80}
                   deleteSpeed={50}
                   delaySpeed={2000}
                   words={['HI, User']}

                    />
                </Typography>
            </Grid>
                    <Grid item>
                        <Typography variant='h4' style={{textAlign:'center', fontFamily:'Montserrat'}} gutterBottom align={medium ? 'center' : 'inherit'}>
                            Welcome to your <span style={{color:"red", fontFamily:'Kaushan Script', fontSize:"2.4rem"}}>Banking</span>&nbsp;portal
                        </Typography>
                    </Grid>
                    <Grid item>
                    <Typography variant='body1'  style={{textAlign:'center'}} paragraph align={medium ? 'center' : 'inherit'}>
                    Money Transfer made easy
                    </Typography>
                       <div class="text-box" id="navbarSupportedContent" onClick={() => history.push('/create')}> 
                            <a href="#" class="btn btn-white btn-animate" style={{fontWeight:'700', color:'#0B72B9', marginBottom:'2rem'}} >Create Account</a>
                          </div>
                    </Grid>
                </Grid>
                <Grid item lg>
                    <img 
                        src={imag}
                        alt='mountain' 
                        style={{maxWidth:small ? 400 :'50em',
                                marginRight:medium ? 0 : '0em',
                                marginBottom:medium ? '5em' :0
                            }} 
                    />
                </Grid>
            </Grid> 

{/* second scroll */}


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
                        src={imag2}
                        alt='mountain' 
                        style={{maxWidth:small ? 400 :'50em',
                                marginRight:medium ? 0 : '0em',
                                marginBottom:medium ? '5em' :0
                            }} 
                    />
                </Grid>
                <Grid item container direction='column' lg style={{maxWidth:'40em'}}>
                <Grid item className={classes.rowContainer} style={{marginBottom:'5em'}}>
                <Typography 
                    variant='h2' 
                    style={{fontFamily:'Kaushan Script', fontSize:'3rem'}}
                    align={medium ? 'center' : undefined}
                >
                    {/* Hi, User */}
                    Make your life easier with us
                </Typography>
            </Grid>
                    <Grid item>
                        <Typography variant='h4' style={{textAlign:'center', fontFamily:'Montserrat'}} gutterBottom align={medium ? 'center' : 'inherit'}>
                        Already have an account <span style={{fontFamily:'Ms Madi', fontWeight:'900', fontSize:'5rem', position:'relative', top:'10px', color:'#EB0EFD'}}>?</span>
                        </Typography>
                    </Grid>
                    <Grid item>
                       <div class="text-box" onClick={() => history.push('/transfer')}> 
                            <a href="#" class="btn btn-white btn-animate" style={{fontWeight:'700', color:'#0B72B9', marginBottom:'2rem'}} > Transfer n<span style={{color:'red'}}>o</span>w</a>
                          </div>
                    </Grid>
                </Grid>
                
            </Grid>
            



        </Grid>
    
    );
    
}