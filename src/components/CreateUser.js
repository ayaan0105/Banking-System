import { Button,Grid,useTheme,useMediaQuery,Typography,TextField,CircularProgress,Snackbar } from '@material-ui/core';
import React,{useState} from 'react';
import { db } from "../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './createUser.css';

export default function CreateUser(){

    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));
    const medium = useMediaQuery(theme.breakpoints.down('md'));
    const Xsmall = useMediaQuery(theme.breakpoints.down('xs'));
    
    const [name,setName] = useState('');
    
    const [email,setEmail] = useState('');
    const [emailHelper,setEmailHelper] = useState('');

    const [phone,setPhone] = useState('');
    const [phoneHelper,setPhoneHelper] = useState('');

    const [amount,setAmount] = useState(0)

    const [loading, setLoading] = useState(false);

    const onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setAmount(amount);
      }
      }

    const onChange = event => {
        let valid;

        switch(event.target.id)
        {
            case 'email' :
                setEmail(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);

                if(!valid){
                    setEmailHelper('Invaild email');
                }else
                {
                    setEmailHelper('');
                }
                break;

            case 'phone' :
                setPhone(event.target.value)
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);

                if(!valid) {
                    setPhoneHelper('Invalid phone')
                }else{
                    setPhoneHelper('')
                }
                break;
                
                default:
                    break;
            }
    }

    const buttonContents = (
        <React.Fragment>
                <a href="#" class="btn btn-white btn-animate">Submit</a>
        </React.Fragment>
      );

    const Push = (e) => {
        e.preventDefault();
        setLoading(true);

        db.collection("users").add({
            name: name,
            email: email,
            phone: phone,
            amount: amount
        }).then(() => { 
            setLoading(false);
            toast.success("Yayy! User Successfully created");
        }).catch((error) => { 
            setLoading(false);
            toast.error("Oops! Please try again")
        });
        setName('');
        setEmail('');
        setPhone('');
        setAmount('');
    }

    return (
        <Grid 
        container 
        direction='column' 
        justifyContent='center'
        style={{
            marginTop:small ? '4em'  : medium ? '5em' : undefined,
            marginBottom: medium ? '5em' : undefined,
            
        }}
    >
        <ToastContainer position="top-center" />
        
        <Grid item>
            <Grid item container direction='column' style={{alignItems:'center'}}>
                <Grid item>
                    <Typography 
                        variant='h3'
                        align= 'center'
                        style={{lineHeight:1, fontFamily:"Montserrat", marginTop:'3rem', fontWeight:'700'}}
                    >
                        Create New User
                    </Typography>
                </Grid>
                <Grid 
                    item 
                    container
                    direction='column' 
                    style={{maxWidth:Xsmall ? '20em' : small? '25em' :'40em'}}
                >
                <Grid item style={{marginTop:'2em' ,marginBottom:'0.5em', }}>
                    <Typography style={{color:theme.palette.common.blue, fontWeight:'500'}}>Name</Typography>
                    <TextField 
                        id="name" 
                        variant="outlined"
                        fullWidth
                        value={name}
                        placeholder='Name' 
                        onChange={(e)=>setName(e.target.value)}
                    />
                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                    <Typography style={{color:theme.palette.common.blue, fontWeight:'500'}}>Enter your E-mail</Typography>
                    <TextField 
                        id="email"
                        variant="outlined"
                        fullWidth
                        error={emailHelper.length !== 0}
                        helperText={emailHelper}
                        value={email}
                        placeholder='Email'
                        onChange={onChange}
                    />
                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                <Typography style={{color:theme.palette.common.blue, fontWeight:'500'}}>Phone No.</Typography>
                    <TextField 
                        id="phone" 
                        variant="outlined" 
                        fullWidth
                        error={phoneHelper.length !== 0}
                        helperText={phoneHelper}
                        value={phone}
                        placeholder='Phone Number'
                        onChange={onChange}
                    />
                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                    <Typography style={{color:theme.palette.common.blue, fontWeight:'500'}}>Amount </Typography>
                    <TextField 
                        id="amount" 
                        variant="outlined"
                        fullWidth
                        value={amount}
                        onChange={onAmountChange}
                    />
                </Grid>
                    <Button 
                        disabled={
                            name.length === 0 ||
                            email.length === 0 ||
                            phone.length === 0 ||
                            amount.length === 0 ||
                            emailHelper.length !== 0 ||
                            phoneHelper.length !== 0
                        }
                        onClick={Push}
                    >
                      {loading ? <CircularProgress size={30} /> : buttonContents}
                      
                    </Button>
            </Grid>
            </Grid>
        </Grid>
    </Grid>
    );
};
