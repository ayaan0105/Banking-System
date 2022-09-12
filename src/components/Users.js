import { Divider, Typography  } from '@material-ui/core';
import React ,{useState,useEffect} from 'react';
import { useMediaQuery,useTheme } from '@material-ui/core';
import { db } from '../firebase';
import './history.css';


export default function Users() {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.down('sm'));
    const medium = useMediaQuery(theme.breakpoints.down('md'))
    const XSmall = useMediaQuery(theme.breakpoints.down('xs'))
    
    const [posts, setPosts] = useState([]);
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

    return (
        <div style={{marginBottom:'14em',marginTop:'2em'}}>
            <Typography style={{textAlign:'center', fontFamily:'Montserrat', fontWeight:'700'}} variant='h3'>
                Users 
            </Typography>
            <Divider/>
            <div>
            <table className='border-radiusImportant' style={{width:XSmall ? '25em' : small ? '35em' : medium ? '55em' : '70em'}}>
          <thead>
            <tr>
              <th className="row-back">NAME</th>
              <th className="row-back">EMAIL</th>
              <th className="row-back">PHONE NO.</th>
              <th className="row-back">BALANCE(₹)</th>
            </tr>
          </thead>
          <tbody>
          {posts.map((data) => (
            <tr className="ntnt" style={{backgroundColor:'#fff'}}>
              <td  className="row-backs" data-column="NAME">{data.name}</td>
              <td  className="row-backs" data-column="Email">{data.email}</td>
              <td  className="row-backs" data-column="Phone No">{data.phone}</td>
              <td style={{ borderBottom:XSmall ? '1px solid purple' : 'hidden', borderTop:XSmall ? '1px solid purple' : 'hidden', borderRight: 'none', borderRadius:'5px'}} data-column="BALANCE(₹)">₹{data.amount}</td>
            </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    )
}