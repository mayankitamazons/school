import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Student_details from './Student_details';
import Other_details from './Other_details' ;
import Specific_u from './Specific_u';
import Payment from './Payment';
import { Link } from 'react-router-dom';
import './look.css';


import { firstLastName, email,sname , password} from '../actions/formActions';



class u_sform extends React.Component
{
    constructor(props) {
        super();
        this.state = {
            email: ''
        }
    };

        handlefirst(e)
        {
            this.props.firstLastName(e.target.name, e.target.value);
        }

        handleemail(e) {
            this.setState({email: e.target.value})
            this.props.email(this.state.email)
        }
        handlesname(e)
        {
           this.props.sname(e.target.value)
        }
        handlepassword(e)
        {
            this.props.password(e.target.value)
        }

    render()
    {
        console.log("uform entered");
        return ( 
    <div className="Move">
         <div>
            <center> <h1 > Student Registration Form </h1> </center>

            <h3 allign="left" ><b>Introduction</b></h3>
                <p ><font size="4">Each of the seven regional Science and Engineering Fairs (SEF) in Mississippi and the state SEF will be conducted in accordance
            with the International SEF Rules and Guidelines (<a href="https://student.societyforscience.org/intel-isef">https://student.societyforscience.org/intel-isef</a>). The sponsoring teacher will assume responsibility,
            together with the student, for compliance with these rules.</font> </p>
                <br/>
                <p  allign="left"><font size="4">Each student will participate in the regional fair for the county in which the school or student is located. The Region I SEF serves the following counties:  Adams, Amite, Clarke, Covington,
            Forrest, Franklin, Green, Jasper, Jefferson, Jefferson Davis, Jones, Lamar, Lawrence, Lincoln, Marion, Pearl River, Perry, Pike, Simpson, Smith, Walthall, Wayne, and Wilkinson. </font></p>
        <br/>
                <p class="text1"><font size="4"> Tables will be provided for each project at the fair. Each student will display copies of applicable forms (such as projects dealing with people, vertebrate animals, and chemicals) during judging.
        USE THIS LINK TO DETERMINE WHICH FORMS YOU NEED:
            <a href="https://apps2.societyforscience.org/wizard/index.asp">https://apps2.societyforscience.org/wizard/index.asp</a>. Students who do not follow the rules or provide the applicable forms will be disqualified.</font></p>

            <br/>
            <p class="text1" ><font size="4"> For more information, call 601-266-6845 or 601-266-4739,
                or email kendrick.buford@usm.edu or sherry.herron@usm.edu</font></p>
            <br/>
        </div>

        <div class="page1">

    

       <h3 align="left">Registration </h3>    
<ul align="left">
	 <li c>
     Complete all of the following fields.</li>
<li align="left">
         Pay the fee: $25 per student or $70 for a 3-person team project. $10 penalty for late registration
         </li>
         <li align="left">
        Order a t-shirt, if desired. $10 pre-order or $15 day of fair
        </li>
        <li align="left">
       Checks should be made payable to Region 1 MSEF or pay online through Pay Pal (<a href="https://squareup.com/store/msefregion1">https://squareup.com/store/msefregion1</a>)
       </li>
       </ul>
        



    </div>
        
          <div>
       <h1 align="left" ><b>User Registration</b></h1>
       
        <table cellpadding="2" width="50%" border="10" cellspacing="4">
                 <tr></tr>
                 <tr> <td>Username </td>
                        <td><input type='text' value={this.props.firstlast.value1} onChange={(event) => this.handlefirst(event)}  placeholder="Username" name='username'/> 

                        </td> 
						
                </tr>
               
                <tr>
                        <td>Password</td>
                        <td> <input type='email' value={this.state.email} name='email' placeholder="password" onChange={(event) => this.handleemail(event)}/>  </td>
                </tr>
               

                

                </table>
        </div> 
     <div>
       <h1 align="left" ><b>Adult Sponsor/Teacher</b></h1>
       
        <table cellpadding="2" width="50%" border="10" cellspacing="4">
                 <tr></tr>
                 <tr> <td>Name </td>
                        <td><input type='text' value={this.props.firstlast.value1} onChange={(event) => this.handlefirst(event)}  placeholder="Fname" name='value1'/> 

                        </td> <td> <input type='text' value={this.props.firstlast.value2} onChange={(event) => this.handlefirst(event)} required="required" name='value2'/></td>
                </tr>
                <tr>
                        <td></td>
                        <td>First</td>
                         <td>Last</td>
                </tr>
                <tr>
                        <td>Adult Sponsor/Teacher Email</td>
                        <td> <input type='email' value={this.state.email} name='email' onChange={(event) => this.handleemail(event)}/>  </td>
                </tr>
                <tr>
                    <td>School Name</td><td><input type="text" placeholder="Enter Schoolname" name="sname" value={this.props.firstlast.sname}  onChange={(event) => this.handlesname(event)}/></td>
                </tr>

                

                </table>
        </div>


        <div>
                <h1 align="left">Enter Student Details</h1>
                <Student_details />
                <Other_details/>
                <Specific_u/>
                <Payment/>
                
                
        </div>
        <br/><br/>
        <center>
        <Link to ={ {
         pathname: "/sucess" 
} }>  <button><font size='5'> Register </font></button> </Link>
</center>
</div>

        );
    }
}

    u_sform.PropTypes  = {
        value1 : PropTypes.string ,
        value2 : PropTypes.string ,
        sname : PropTypes.string ,
        password : PropTypes.string
    };

const mapStateToProps = (state) => {
    return {
        firstlast : state.firstlast
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        firstLastName: (name, value) => {
            dispatch(firstLastName(name, value));
        },
        email: (value) => {
            dispatch(email(value))
        },
        sname : (value) => {
            dispatch(sname(value))
        },
        password : (value) =>
        {
            dispatch(password(value))
        }
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(u_sform );