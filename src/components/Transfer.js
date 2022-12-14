import React, { useState, useEffect } from "react";
import { db } from '../firebase';
import { TextField ,Button,Grid,Typography,useMediaQuery,useTheme} from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import moment from "moment";
import { CircularProgress,Snackbar } from "@material-ui/core";
import Backimg from '../assests/20943807.jpg';
import './createUser.css';


export default function  Transfer(){
  
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('sm'));
  const medium = useMediaQuery(theme.breakpoints.down('md'));
  const xsmall = useMediaQuery(theme.breakpoints.down('xs'))

  
    
    const [alertMessage, setAlertMesssage] = useState("");
    const [posts, setPosts] = useState([]);
    const [sender, setSender] = useState("");
    const  [reciver, setReciver] = useState("");
    const [amt, setAmt] = useState(0);
    const [alert, setAlert] = useState({ open: false, color: "" });
    const [status, setStatus] = useState("done");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
      const getDataFromFirebase = [];
      const subscriber = db.collection('users').onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getDataFromFirebase.push({ ...doc.data(), key: doc.id });
        });
        setPosts(getDataFromFirebase);
      });
      return () => subscriber();
    }, [])
  
    const sendToTransfer = async () => {
      db.collection("users").doc("transfer").collection("lists").add({
          from:sender,
          to:reciver,
          amount: amt,
          status: status,
          time:  moment().valueOf().toString()
      })
  }

const transferMoney = async (e)=>{
  e.preventDefault();
  setLoading(true);

  var rusr = posts.filter(p =>{ return p.email === reciver});
  console.log('sender account:',rusr[0].amount);

  var  susr =posts.filter(p =>{ return p.email === sender});
  console.log('recvier accunt:',susr[0].amount);
  
 if(susr[0].email === rusr[0].email){
  setLoading(false);
   setAlert({ open: true, color: "#FF3232" });
    setAlertMesssage("Both Sender and Reciver cant be same.");
 } 
 else if (parseFloat(susr[0].amount) < parseFloat(amt)) {
  setLoading(false);
   setAlert({ open: true, color: "#FF3232" });
    setAlertMesssage("Sender dont have enough funds.");
}
else {
  setStatus('Done')
  var ramt = parseFloat(rusr[0].amount) + parseFloat(amt);
  var sena = parseFloat(susr[0].amount) - parseFloat(amt);
  var sup = await db.collection("users").doc(susr[0].key).update({
      amount: parseFloat(sena)
  })
  var rup = await db.collection("users").doc(rusr[0].key).update({
      amount: parseFloat(ramt)
  }).then(() => { 
    setLoading(false);
    setAlert({ open: true, color: "#4BB543" });
    setAlertMesssage("Money Transferred Successfully !!!!");
    
    
}).catch((error) => { 
    setLoading(false);
    setAlert({ open: true, color: "#FF3232" });
    setAlertMesssage("Something went wrong! Please try again.");
});
  window.location.reload();
    setAmt(0);
    setReciver("");
    setSender("");

  sendToTransfer();
}
}
const onAmountChange = (e) => {
          const amt = e.target.value;
          if (!amt || amt.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setAmt(amt);
        }
        }

        const buttonContents = (
          <React.Fragment>
            <a href="#" class="btn btn-white btn-animate">Submit</a>
          </React.Fragment>
        );
  

    return (
         <Grid 
        container 
        direction='column' 
        justifyContent='center'
        style={{
            marginTop:small ? '4em'  : medium ? '5em' : undefined,
            marginBottom: medium ? '5em' : '4.5em',
            
        }}
        
    >
      <div  className="newimg">
        <Grid item
       
        >
          
            <Grid item container direction='column' style={{alignItems:'center'}}>
                <Grid item>
                    <Typography 
                        variant='h3'
                        align= 'center'
                        style={{fontFamily:'Montserrat', fontWeight:'700', marginTop:'2rem'}} >
                        Transfer Money
                    </Typography>
                </Grid>
                <Grid 
                    item 
                    
                    container
                    direction='column' 
                    style={{maxWidth:xsmall ? '20em' : small? '25em' :'40em'}}
                >
                <Grid item style={{marginTop:'2em' ,marginBottom:'0.5em'}}>
                  <Typography style={{color:theme.palette.common.blue, fontFamily:'Montserrat', fontWeight:'700'}}>From</Typography>
              <FormControl variant="outlined" fullWidth>
                <Select
                    native
                    value={sender}
                    onChange={(e) => setSender(e.target.value)}
                    label="From"
                >
                    <option aria-label="None" value="" />
                    {posts.map((data) => {
                        return (<option key={Math.random().toString(36).substr(2, 9)}>{data.email}</option>)
                    })}
                </Select>
            </FormControl>

                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                  <Typography style={{color:theme.palette.common.blue, fontFamily:'Montserrat', fontWeight:'700'}}>To</Typography>
                <FormControl variant="outlined" fullWidth >
                <Select
                    native
                    value={reciver}
                    onChange={(e) => setReciver(e.target.value)}
                    label="From"
                >
                    <option aria-label="None" value="" />
                    {posts.map((data) => {
                        return (<option key={Math.random().toString(36).substr(2, 9)}>{data.email}</option>)
                    })}
                </Select>
            </FormControl>
                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                  <Typography style={{color:theme.palette.common.blue, fontFamily:'Montserrat', fontWeight:'700'}}>
                    Amount
                  </Typography>
                    <TextField 
                        id="amount"
                        style={{marginTop:'1'}}
                        variant="outlined"
                        fullWidth
                        value={amt}
                        onChange={onAmountChange}
                    />
                </Grid>
                {/* <Grid item container justifyContent='center' style={{marginTop:'2em'}}> */}
                    <Button
                    style={{textAlign:'center'}}
                        disabled={
                            reciver.length === 0 ||
                            sender.length === 0 ||
                            amt.length === 0
                            }
                        onClick={transferMoney}
                    >
                         {loading ? <CircularProgress size={30} /> : buttonContents}
                         
                    </Button>
                {/* </Grid> */}
            </Grid>
            </Grid>
        </Grid>
        <Snackbar
        open={alert.open}
        ContentProps={{
          style: {
            backgroundColor: alert.color
          }
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message={alertMessage}
        autoHideDuration={4000}
        onClose={() => setAlert(false)}
      />
      </div>
    </Grid>
    )
}





