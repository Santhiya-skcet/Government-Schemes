import React from 'react';
import Style from './Schemes/Style';


export default function ContactSection() {
  return (
    <div style={{textAlign:'center',fontSize:"large",fontFamily:"Roboto Black & Black Italic"}}>
    <Style/>
    <div style={{border:'5px solid grey',marginLeft:'350px',marginRight:'300px'}}>
    <h1 style={{color:"black"}}>Contact Us</h1><br></br>
    <dl>
    <img style={{height:'60px'}} src='data:image/png;base64,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'></img>
    <dt  style={{paddingTop:'20px',fontFamily:'Roboto Black & Black Italic'}}>ADDRESS</dt>
    <dd style={{paddingTop:'20px'}}>4th floor,NeGD,Electronics Niketan,6 CGO Complex,Lodhi Road,New Delhi-110003,India</dd>
    <dl>
    <img style={{height:'80px',paddingTop:'30px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdoO-B_5TbvF6GCYTDJ4X8KPO3e9H91KnJHw&usqp=CAU'></img>
    <dt  style={{paddingTop:'20px',fontFamily:'Roboto Black & Black Italic'}}>EMAIL</dt>
    <dd style={{paddingTop:'20px'}}>support-myscheme@digitalindia.gov.in</dd>
    <dl>
    <img style={{height:'100px',paddingTop:'30px'}}src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-1VySjXNR5czr5Cze25LRqdoBnBGy6oPWA&usqp=CAU'></img>
    <dt  style={{paddingTop:'30px',fontFamily:'Roboto Black & Black Italic'}}>PHONE</dt>
    <dd style={{paddingTop:'20px',paddingRight:'25px'}}>(011)   24303714</dd>
    </dl>
    </dl>
    </dl>
    </div>
    </div>
  )
}