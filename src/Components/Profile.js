import React,{Component} from "react"   
import axios from "axios"
import Navbar from './Navbar';
class Profile extends Component {

  constructor(){
    super();
  
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);


}

  handleSignIn(){
    axios.post('http://localhost:8080/memberRoutes/signIn')
    .then(res  => {
       
        console.log(res);
    } ) 
 }
 handleSignOut(){
  axios.post('http://localhost:8080/memberRoutes/signOut')
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

      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Full name
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          Margot Foster
        </dd>
      </div>

      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Bio
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          Backend Developer
        </dd>

    
        
        
      </div>

      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Email address
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          margotfoster@example.com
        </dd>
      </div>

      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Salary 
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          $120,000
        </dd>
      </div>

      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Member Rank
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        Batee5a kbeera
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