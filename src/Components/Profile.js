import React,{Component} from "react"   
import axios from "axios"
import Navbar from './Navbar';
class Profile extends Component {

  constructor(){
    super();
    
    this.state = {
      name:"",
      memberId:"",
      bio:"",
      email:"",
      salary:"",
      memeberRank:""
    }

    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  

}

  componentDidMount(){
      axios.get('http://localhost:8080/memberRoutes/viewProfile' , {params:{token:this.props.realToken}})
      .then(res =>{
        this.setState({
          name:res.data.name,
          memberId:res.data.memberId,
          bio:res.data.bio,
          email:res.data.email,
          salary:res.data.salary,
          memeberRank:res.data.memberRank
        })
      })
  }

  handleSignIn(){
    axios.post('http://localhost:8080/memberRoutes/signIn' , {} ,{params:{token:this.props.realToken}})
    .then(res  => {
        console.log(res);
    } ) 
 }
 handleSignOut(){
  axios.post('http://localhost:8080/memberRoutes/signOut' , {} ,{params:{token:this.props.realToken}})
  .then(res  => {
      console.log(res);
  } ) 
}
  
render(){

return(
<div>
<Navbar user="hr"/>
<div className="bg-white shadow overflow-hidden sm:rounded-lg">
  <div class="px-4 py-5 sm:px-6">
    <h3 className="text-3xl font-bold leading-tight text-gray-900 ">
      Profile
    </h3>
  
  </div>
  <div className="border-t border-gray-200">
    <dl>

      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Full name
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.state.name}
        </dd>
      </div>

      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Member ID
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.state.memberId}
        </dd>
      </div>

      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Bio
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.state.bio}
        </dd>

      </div>

      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Email address
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.state.email}
        </dd>
      </div>

      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Salary 
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.state.salary}
        </dd>
      </div>

      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Member Rank
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.state.memeberRank}
        </dd>
      </div>


    </dl>
  </div>
</div>
<div className="py-5 black">
{/* <div className="border-t border-gray-200"></div> */}
</div>
<div>
  <button className="submit" onClick={this.handleSignIn}>
    Sign In 
  </button>
  <button className="submit" onClick={this.handleSignOut}>
    Sign Out 
  </button>
</div>
</div>
)
    }
}
export default Profile