
import React, { Component } from 'react';
import "./dealer.css";



class dealer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            DealerName:"",
            Email:"",
            Phone:"",
            CompanyName:"",
            NatureOfBussiness :"",
            GSTRegistrationCertificate:"",
            PANCard:"",
            AccountDetails:"",
            Password:"",
            ConfirmPassword:""


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    DealerNamehandler = (event) => {
        this.setState({
            DealerName: event.target.value
        })
    }
    Emailhandler = (event) => {
        this.setState({
            Email: event.target.value
        })
    }
    Phonehandler = (event) => {
        this.setState({
            Phone: event.target.value
        })
    }

    CompanyNamehandler = (event) => {
        this.setState({
            CompanyName: event.target.value
        })
    }

    CompanyNamehandler = (event) => {
        this.setState({
            CompanyName: event.target.value
        })
    }

    NatureOfBussinesshandler = (event) => {
        this.setState({
            NatureOfBussiness: event.target.value
        })
    }

   GSTRegistrationCertificatehandler = (event) => {
        this.setState({
            GSTRegistrationCertificate: event.target.value
        })
    }

    PANCardhandler = (event) => {
        this.setState({
            PANCard: event.target.value
        })
    }

    AccountDetailshandler = (event) => {
        this.setState({
            AccountDetails: event.target.value
        })
    }

    Passwordhandler =(event)=>{
        this.setState({
            password: event.target.value
        })
    }
    ConfirmPasswordhandler =(event)=>{
        this.setState({
            password: event.target.value
        })
    }




    handleSubmit = (event) => {
        alert(`${this.state.DealerName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            DealerName:"",
            Email:"",
            Phone:"",
            CompanyName:"",
            NatureOfBussiness :"",
            GSTRegistrationCertificate:"",
            PANCard:"",
            AccountDetails:"",
            Password:"",
            ConfirmPassword:""

        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div className="container">

                <form onSubmit={this.handleSubmit}>
                    <h1>Dealer signup</h1>
                    <label>DealerName :</label> <input type="text" value={this.state.DealerName} onChange={this.DealerNamehandler} placeholder="DealerName..." /><br />
                    <label>Email :</label> <input type="text" value={this.state.Email} onChange={this.Emailhandler} placeholder="Email..." /><br />
                    <label>Phone :</label> <input type="password" value={this.state.Phone} onChange={this.Phonehandler} placeholder="Phone..." /><br />
                    <label>Company Name :</label> <input type="text" value={this.state.CompanyName} onChange={this.CompanyNamehandler} placeholder="CompanyName..." /><br />
                    <label>Nature Of Bussiness :</label> <input type="text" value={this.state.NatureOfBussiness} onChange={this.NatureOfBussinesshandler} placeholder="NatureOfBussiness..." /><br />
                    <label>GST Registration Certificate :</label> <input type="text" value={this.state.GSTRegistrationCertificate} onChange={this.GSTRegistrationCertificatehandler} placeholder="GSTRegistrationCertificate..." /><br />
                    <label>PANCard Number:</label> <input type="text" value={this.state.PANCard} onChange={this.PANCardhandler} placeholder="PANCard..." /><br />
                    <label>Account Details :</label> <input type="text" value={this.state.AccountDetails} onChange={this.AccountDetailshandler} placeholder="AccountDetails..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.Password} onChange={this.Passwordhandler} placeholder="Password..." /><br />
                    <label>Confirm Password :</label> <input type="password" value={this.state.ConfirmPassword} onChange={this.ConfirmPasswordhandler} placeholder="Confirm Password..." /><br />
                    
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default dealer;