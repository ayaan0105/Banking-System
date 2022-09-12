import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from "moment";
import { Typography ,Divider} from "@material-ui/core";
import './history.css';
import { useMediaQuery,useTheme } from '@material-ui/core';


function History() {
  
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));
    const medium = useMediaQuery(theme.breakpoints.down('md'))
    const xsmall = useMediaQuery(theme.breakpoints.down('xs'))
    const [tra, setTransfers] = useState([]);
    const [showModal, setshowModal] = useState(false);

  const handleClick = () => {
    setshowModal(true);
    
  };

    useEffect(() => {
        const getDataFromFirebase = [];
        const subscriber = db.collection("users").doc("transfer").collection("lists").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getDataFromFirebase.push({ ...doc.data(), key: doc.id });
            });
            setTransfers(getDataFromFirebase);
        });
        return () => subscriber();
    }, [])
    const sortedUsers= tra.sort((a,b)=>b.time - a.time);
    return (
        <div style={{marginBottom:'14em',marginTop:'2em'}}>
          
            <Typography style={{textAlign:'center',fontFamily:"Montserrat", fontWeight:'700'}} variant='h3'>
            Previous Transactions
            </Typography>
            <Divider/>
            <div >
            <table className="no-borderRadiusImportant border-radiusImportant" style={{width:xsmall ? '25em' : small ? '30em' : medium ? '54em' : '70em'}}>
          <thead>
            <tr>
                <th className="row-back">TIME</th>
                <th className="row-back">FROM USER</th>
                <th className="row-back">TO USER</th>
                <th className="row-back">AMOUNT(₹)</th>
                <th className="row-back">STATUS</th>
            </tr>
          </thead>
            <tbody> 
            {sortedUsers.map((data) => (
              <tr className="ntnt" onClick={handleClick} style={{backgroundColor:'#fff', border:'none'}}  key={Math.random().toString(36).substr(2, 9)}>
              <td  className="row-backs" data-column="TIME">{moment(Number(data.time)).format('ll - h:mm A')}</td>
              <td  className="row-backs" data-column="FROM USER">{data.from}</td>
              <td  className="row-backs" data-column="TO USER">{data.to}</td>
              <td className="row-backs" data-column="AMOUNT(₹)">₹{data.amount}</td>
              <td style={{ borderBottom:xsmall ? '1px solid purple' : 'hidden', borderTop:xsmall ? '1px solid purple' : 'hidden', borderRight: 'none', borderRadius:'5px'}} data-column="STATUS">{data.status}</td>
              
              </tr>
              ))
              }
            </tbody>
        </table>
        </div>
      </div>

   
    )
       
}
export default History;




