// import { Grid ,makeStyles, Typography,useTheme,TextField, Button,useMediaQuery} from '@material-ui/core';
// import React ,{useState} from 'react';

// import phoneIcon from "../assests/phone.svg";
// // import emailIcon from "../assests/email.svg";
// import airplane from "../assests/send.svg";
// // import axios from 'axios';
// import { CircularProgress } from '@material-ui/core';
// import { Snackbar } from '@material-ui/core';
// import emailIcon from '../assests/email.svg'

// const useStyles = makeStyles(theme=>({
//     esitmate:{
//         ...theme.typography.estimate,
//         fontSize:'1.5rem',
//         backgroundColor:theme.palette.common.orange,
//         borderRadius:50,
//         height: 80,
//         width: 205,
//         marginRight:'5em',
//         marginLeft:'2em',
//         '&:hover':{
//             backgroundColor:theme.palette.secondary.light
//         },
//         [theme.breakpoints.down("md")]: {
//             marginLeft: 0,
//             marginRight: 0
//           }
//     },
//     learnButton: {
//         ...theme.typography.learnButton,
//         fontSize: "0.7rem",
//         height: 35,
//         padding: 5,
//         [theme.breakpoints.down("md")]: {
//           marginBottom: "2em"
//         }
//     },
//     message:{
//         border: `2px solid ${theme.palette.common.blue}`,
//         marginTop:'5em',
//         borderRadius:5
//     },
//     sendButton:{
//         ...theme.typography.estimate,
//         borderRadius:50,
//         height:45,
//         width:245,
//         fontSize:'1rem',
//         backgroundColor:theme.palette.common.orange,
//         "&:hover":{
//             backgroundColor:theme.palette.secondary.light
//         },
//         [theme.breakpoints.down("sm")]: {
//             height: 40,
//             width: 225,
//           }
//     }
    
// }))

// export default function ContactUs(props){
//     const classes = useStyles();
//     const theme = useTheme();
//     const small = useMediaQuery(theme.breakpoints.down('sm'));
//     const medium = useMediaQuery(theme.breakpoints.down('md'))
//     const XSmall = useMediaQuery(theme.breakpoints.down('xs'))


//     const [name,setName] = useState('');
    
//     const [email,setEmail] = useState('');
//     const [emailHelper,setEmailHelper] = useState('');

//     const [phone,setPhone] = useState('');
//     const [phoneHelper,setPhoneHelper] = useState('');

//     const [message,setMessage] = useState('');

//     // const [open,setOpen] = useState(false);
//     // const [status, setStatus] = useState("Submit");
//     // const [status, setStatus] = useState("Submit");

//     const [loading,setLoading] = useState(false);

//     const [alert, setAlert] = useState({ open: false, color: "" });
//     const [alertMessage, setAlertMesssage] = useState("");

//     const onChange = event => {
//         let valid;

//         switch(event.target.id)
//         {
//             case 'email' :
//                 setEmail(event.target.value);
//                 valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);

//                 if(!valid){
//                     setEmailHelper('Invaild email');
//                 }else
//                 {
//                     setEmailHelper('');
//                 }
//                 break;
//             case 'phone' :
//                 setPhone(event.target.value)
//                 valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);

//                 if(!valid) {
//                     setPhoneHelper('Invalid phone')
//                 }else{
//                     setPhoneHelper('')
//                 }
//                 break;

//                 default :
//                 break;
//         }
//     }

//     const buttonContents = (
//         <React.Fragment>
//           Send Message
//           <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} />
//         </React.Fragment>
//       );
    
//     const handleSubmit = async (e) => {
   
//         setLoading(true);
//         e.preventDefault();
//         // setStatus("Sending...");
       
//         // const { name, email, phone,message } = e.target.elements;
//         let details = {
//           name: name,
//           email: email,
//           phone: phone,
//           message: message,
//         };
//         await fetch("https://vast-castle-89203.herokuapp.com/contact", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json;charset=utf-8",
//           },
//           body: JSON.stringify(details),
//         });
//         // setStatus("Submit");
//         // let result = await response.json();
//         // alert(result.status);
//         setLoading(false);
//         // setStatus("Submit");
//         setLoading(false);
//         // setOpen(false);
//         setName("");
//         setEmail("");
//         setPhone("");
//         setMessage("");
//         // let result = await response.json();
       
//         setAlert({ open: true, color: "#4BB543" });
//         setAlertMesssage("Message sent successfully!");
//       };
    
//     return (
//         <Grid container direction='row' style={{marginBottom:'3em'}}>
//             <Grid 
//                 item 
//                 container 
//                 direction='column' 
//                 justifyContent='center' 
//                 alignItems='center' 
//                 lg={5}
//                 xl={4}
//                 style={{
//                     marginTop:small ? '1em'  : medium ? '5em' : undefined,
//                     marginBottom: medium ? '5em' : undefined
//                 }}
//             >
//                <Grid item>
//                    <Grid item container  direction='column'>
//                         <Grid item>
//                             <Typography 
//                                 variant='h2'
//                                 align={medium ? 'center' : undefined}
//                                 style={{lineHeight:1}}
//                             >
//                                 Contact Us
//                             </Typography>
//                             <Typography 
//                                 variant='body1'
//                                 align={medium ? 'center' : undefined}
//                                 style={{color :theme.palette.common.blue}}
//                             >
//                                 We're waiting
//                             </Typography>
//                         </Grid>
//                         <Grid item container style={{marginTop:'2em'}}>
//                             <Grid item>
//                                 <img src={phoneIcon} alt='phone' style={{marginRight:'0.5em'}} />
//                             </Grid>
//                             <Grid item>
//                                 <Typography
//                                     variant='body1'
//                                     style={{color:theme.palette.common.blue,fontSize:'1rem'}}    
//                                 >
//                                 <a href ='tel:8602204936' 
//                                     style={{textDecoration:'none',color:'inherit'}}
//                                 >
//                                     (777) 777-7777
//                                 </a>
//                                 </Typography>
//                             </Grid>
//                         </Grid>
//                         <Grid item container style={{marginBottom:'2em'}}>
//                             <Grid item>
//                                 <img 
//                                     src={emailIcon} 
//                                     alt='envolve' 
//                                     style={{marginRight:'0.5em',verticalAlign:'bottom'}}
//                                 />
//                             </Grid>
//                             <Grid item>
//                                 <Typography
//                                     variant='body1'
//                                     style={{color:theme.palette.common.blue ,fontSize:'1rem'}}    
//                                 >
                               
//                                 <a href ='mailto:ritikjain2727@gmail.com' 
//                                     style={{textDecoration:'none',color:'inherit'}}
//                                 >
//                                     reactjsdeveloper45@gmail.com
//                                 </a>
//                                 </Typography>
//                             </Grid>
//                         </Grid>
//                         <Grid 
//                             item 
//                             container
//                             direction='column' 
//                             style={{maxWidth:'20em'}}
//                         >
//                             <Grid item style={{marginBottom:'0.5em'}}>
//                                 <TextField 
//                                     label='Name'
//                                     id='name'
//                                     fullWidth
//                                     value={name}
//                                     onChange={(e)=>setName(e.target.value)}
//                                 />
//                             </Grid>
//                             <Grid item style={{marginBottom:'0.5em'}}>
//                                 <TextField 
//                                     label='Email'
//                                     error={emailHelper.length !== 0}
//                                     helperText={emailHelper}
//                                     id='email'
//                                     fullWidth
//                                     value={email}
//                                     onChange={onChange}
//                                 />
//                             </Grid>
//                             <Grid item style={{marginBottom:'0.5em'}}>
//                                 <TextField 
//                                     label='Phone' 
//                                     error= {phoneHelper.length !== 0}
//                                     helperText={phoneHelper}
//                                     id='phone'
//                                     fullWidth
//                                     value={phone}
//                                     onChange={onChange}
//                                 />
//                             </Grid>
//                         </Grid>
//                         <Grid item style={{ maxwidth: "20em" }} >
//                             <TextField
//                                 InputProps={{disableUnderline:true}}
//                                 value={message}
//                                 multiline
//                                 fullWidth
//                                 rows={10}
//                                 id='message'
//                                 onChange={(e)=>setMessage(e.target.value)}
//                                 className={classes.message}
//                             />
//                         </Grid>
//                         <Grid item container justifyContent='center' style={{marginTop:'2em',marginBottom:'3em'}}>
//                             <Button 
//                                 disabled={
//                                     name.length === 0 ||
//                                     email.length === 0 ||
//                                     phone.length === 0 ||
//                                     message.length === 0 ||
//                                     phoneHelper.length !== 0 ||
//                                     emailHelper.length !== 0
//                                     }
//                                 variant='contained' 
//                                 className={classes.sendButton}
//                                 onClick={handleSubmit}
//                             >
//                                {loading ? <CircularProgress size={30} /> : buttonContents}
                            
//                             </Button>
//                         </Grid>
//                    </Grid>
//                </Grid>
//             </Grid>
//             <Snackbar
//                 open={alert.open}
//                 ContentProps={{
//                 style: {
//                     backgroundColor: alert.color
//                 }
//                 }}
//                 anchorOrigin={{ vertical: "top", horizontal: "center" }}
//                 message={alertMessage}
//                 autoHideDuration={4000}
//                 onClose={() => setAlert(false)}
//             />
//             <Grid 
//                 item 
//                 container 
//                 direction={medium ? 'column' : 'row'}
//                 // className={classes.background} 
//                 alignItems='center'
//                 justifyContent={medium ? 'center' : undefined}
//                 lg={7}
//                 xl={8}
//             >
//                  <Grid item>
//                 <img 
//                  src='https://www.softwaresuggest.com/blog/wp-content/uploads/2019/02/realtime-banking.png' 
//                  alt='banking'
//                  style={{width:XSmall ? '27em' :small? '35em' :medium ?'50em' :'45em'}}
//                   />
//                 </Grid> 
//             </Grid>
//         </Grid>
//     )
// }





























import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebaseDB from "../firebase";
import "./contact.css";

function App() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Please provide value in each input field");
    } else {
      firebaseDB.child("contacts").push(state);
      setState({ name: "", email: "", subject: "", message: "" });
      toast.success("Form Submitted Successfully");
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <section className="contact-section"  >
      <div className="container" >
        <ToastContainer position="top-center" />
        <div className="row justify-content-center" style={{borderRadius:'10px'}}>
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4">Send us a message</h3>
                    <form
                      id="contactForm"
                      className="contactForm"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Name"
                              onChange={handleInputChange}
                              value={name}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              onChange={handleInputChange}
                              value={email}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              placeholder="Subject"
                              onChange={handleInputChange}
                              value={subject}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              type="text"
                              className="form-control"
                              name="message"
                              placeholder="Message"
                              cols="30"
                              rows="6"
                              onChange={handleInputChange}
                              value={message}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <h3  style={{marginBottom:'1rem'}}>Contact us</h3>
                    <p className="mb-4" >
                      We're open for any suggestion or just to have a chat
                    </p>
                    <div style={{marginTop:'4rem'}} className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Address:</span> <span style={{color:'#B2B2B2'}}>Maharaja Agrasen Institute of Technology, Delhi</span>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Phone:</span>
                          <a href="tel://9953535381"> +9199XXXXXXX</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email:</span>
                          <a href="mailto:ayaansidd0056@gmail.com">
                            &nbsp;ayaansidd0056@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    {/* <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Website:</span>
                          <a href="#">yoursite.com</a>
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;