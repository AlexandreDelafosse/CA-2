//component to view all animals

import React from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

class Animals extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            animals : [],
            isLoaded: false
        }
     
    }

    componentDidMount(){
        axios.get('/animals')
        .then(function (response) {

            console.log(response.data)

            this.setState( {
                animals : response.data,
                 isLoaded: true
            })
        })
        .catch(function (error) {

            console.log(error);
        })

    }

    render(){
        if(!this.state.isLoaded){
                return(
                    <div>
                    Loading... {console.log(this.state)}
                    </div>
                )
            }else{
            return (
                <div>
                        {console.log(this.setState({isLoaded:true}) )}
                </div>
            )
        }

    }
}
    

export default Animals;

// <p>
// This is the Animals component. 
// This component should contain a list of dogs using a table tag or
// perhaps components.
// </p>
// <h4>Here is an example of each</h4>
// <h5>#1 Table</h5>
// <table>
// <tr>
//     <th>Id</th>
//     <th>Name</th>
//     <th>Breed</th>
//     <th>Age</th>
//     <th>Neutred</th>
// </tr>
// {/* this part can and should be generated using a for loop */}
// <tr>
//     <td>61827531d410d5028952e610</td>
//     <td>Mark1</td>
//     <td>Pug</td>
//     <td>5</td>
//     <td>True</td>
//     {/* link to view a single dog details by ID  */}
//     <td><Link to='/AnimalsView?id=12345'>View</Link></td>
//     {/* link to view and edit the dog details by ID */}
//     <td><Link to='/AnimalsEdit?id=12345'>Edit</Link></td>
//     <td>
//         <button>Delete</button>
//     </td>
// </tr>
// <tr>
//     <td>61827531d410d5028952e610</td>
//     <td>Mark1</td>
//     <td>Pug</td>
//     <td>5</td>
//     <td>True</td>
//      {/* link to view a single dog details by ID  */}
//      <td><Link to='/AnimalsView/'>View</Link></td>
//     {/* link to view and edit the dog details by ID */}
//     <td><Link to='/AnimalsEdit/'>Edit</Link></td>
//     <td>
//         <button>Delete</button>
//     </td>
// </tr>
// <tr>
//     <td>61827531d410d5028952e610</td>
//     <td>Mark1</td>
//     <td>Pug</td>
//     <td>5</td>
//     <td>True</td>
//     <td><Link to='/AnimalsView/'>View</Link></td>
//     {/* link to view and edit the dog details by ID */}
//     <td><Link to='/AnimalsEdit/'>Edit</Link></td>
//     <td>
//         <button>Delete</button>
//     </td>
// </tr>
// </table>
// {/* insert html code here */}
// <h5>#2  Components</h5>
// {/* insert JSX code here */}