import React from "react";
 
class seller extends component
{constructor(props){
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
      this.changeSupplierNameHandler=this.changeSupplierNameHandler.bind(this);
    }

   changeSupplierNameHandler=(event)=>{
       this.setState({SupplierName:event.target.value});

   }


render(){
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offser-md-3 offset-md-3">
                    <div className="seller-body">
                        <form>
                            <div className="form-group">
                                <label>Supplier Name:</label>
                                <input placeholder="Supplier Name " name="Name" className="form-control"
                                value = {this.state.SupplierName} onChange={this.changeSupplierNameHandler}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
}