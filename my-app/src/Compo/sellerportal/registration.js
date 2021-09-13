import React, { Component } from "react";
// import App from "../../App";
import registration from "./registration.css";


class Registration extends Component{
    
    constructor(props){
        super(props)

        this.state={
            SupplierName:"",
            Email:"",
            Phone:"",
            CompanyName:"",
            NatureOfBussiness :"",
            GSTRegistrationCertificate:"",
            PANCard:"",
            AccountDetails:""
        }
        this.handleSubmit=this.handleSubmit.bind(this)

        }
        SupplierNamehandler=(event)=>{
            this.setstate({
                SupplierName: event.target.value
            })
        }
        Emailhandler = (event) =>{
            this.setState({
                Email:event.target.value
            })

          
        }
                 Phonehandler =(event)=>{
                      this.setState({
                        Phone:event.targetvalue
                       })
                    }
                  CompanyNamehandler=(event)=>{
                    this.setState({
                       CompanyName:event.targetvalue
                    })
                }
                NatureOfBussinesshandler=(event)=>{
                    this.setState({
                        NatureOfBussiness:event.targetvalue
                    })
                }
                GSTRegistrationCertificatehandler=(event)=>{
                    this.setState({
                        GSTRegistrationCertificate:event.targetvalue
                    })
                }
                PANCardhandler=(event)=>{
                    this.setState({
                        PANCard:event.targetvalue
                    })
                }
                AccountDetailshandler=(event)=>{
                    this.setState({
                        AccountDetails:event.targetvalue
                    })
                }
    handleSubmit=(event)=>{
        alert('$(this.state.SupplierName) Registered Successfully !!!!' )
        console.log(this.state);
        this.setState({
            SupplierName:"",
            Email:"",
            Phone:"",
            CompanyName:"",
            NatureOfBussiness :"",
            GSTRegistrationCertificate:"",
            PANCard:"",
            AccountDetails:"",

        })
    event.preventDefault()   
    }

        render(){
            return(
              <div>
                  <form onSubmit={this.handleSubmit}>
                      <h1>Supplier Registration</h1>
                      <label>Supplier Name:</label> <input type="text" value={this.state.SupplierName}onChange={this.SupplierNamehandler}/>
                      <label>Email:</label><input type="text" value={this.state.Email}onChange={this.Emailhandler}/>
                      <label>Phone</label><input type="text" value={this.state.Phone}onChange={this.Phonehandler}/>
                      <label>Company Name</label><input type="text" value={this.state.CompanyName}onChange={this.CompanyNamehandler}/>
                      <label>Nature Of Bussiness</label><input type="text" value={this.state.NatureOfBussiness}onChange={this.NatureOfBussinesshandler}/>
                      <label>GST Registration Certificate</label><input type="text" value={this.state.GSTRegistrationCertificate}onChange={this.GSTRegistrationCertificatehandler}/>
                      <label>PAN Card</label><input type="text" value={this.state.PANCard}onChange={this.PANCardhandler}/>
                      <label></label>Account Details<input type="text" value={this.state.AccountDetails}onChange={this.AccountDetailshandler}/>
                  </form>
              </div>


            )
    
 
       }
    }
     
      
    

    

