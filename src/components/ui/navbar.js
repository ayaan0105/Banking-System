import React , {useEffect} from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../assests/piggy-bank.png';
import $ from 'jquery';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressBook} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'
import {faAddressCard} from '@fortawesome/free-solid-svg-icons'
import {faClockRotateLeft} from '@fortawesome/free-solid-svg-icons'
import {faListDots} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <NavLink className="navbar-brand navbar-logo log" to="/" exact>
        <img src={Logo} style={{width:'3rem',margin:'5px 1rem '}} />
        
        <span style={{margin:'0 1rem'}}>Apna Bank</span>
      </NavLink>
    
    
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        style={{color:'#fff'}}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon style={{marginRight:'0.5rem'}} icon={faListDots}  />
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
              <span>Home</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
              <FontAwesomeIcon style={{marginRight:'0.5rem'}} icon={faAddressCard} />
                <span>About</span>
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/transfer" exact>
              <FontAwesomeIcon style={{marginRight:'0.5rem'}} icon={faAddressCard} />
                <span>Transfer</span>
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/history" exact>
              <FontAwesomeIcon style={{marginRight:'0.5rem'}} icon={faClockRotateLeft} />
                <span>Transactions</span>
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/users" exact>
              <FontAwesomeIcon style={{marginRight:'0.5rem'}} icon={faUser} />
              <span>Users</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create" exact>
              <FontAwesomeIcon style={{marginRight:'0.5rem'}} icon={faUserPlus} />
              <span>Create User</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact>
              <FontAwesomeIcon style={{marginRight:'0.5rem'}} icon={faAddressBook} />
              <span>Contact Us</span>
              </NavLink>
            </li>
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;