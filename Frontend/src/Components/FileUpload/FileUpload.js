/*import React from 'react';    
import { post } from 'axios';    
class Fileupload extends React.Component {    
        constructor(props) {    
                super(props);    
                this.state = {    
                        file: '',    
            };    
        }    
        async submit(e) {    
                e.preventDefault();    
                const url = `http://localhost:61331/api/Uploadfiles/Uploadfile`;    
                const formData = new FormData();    
                formData.append('body', this.state.file);    
                const config = {    
                        headers: {    
                                'content-type': 'multipart/form-data',    
                        },    
                };    
                return post(url, formData, config);    
        }    
        setFile(e) {    
                this.setState({ file: e.target.files[0]});    
        }    
        render() {    
                return (    
                        <div className="container-fluid">    
                                <form onSubmit={e => this.submit(e)}>    
                                        
                                        <h1>File Upload</h1>    
                                       <div> <label for="filename" > File Name</label>
                                        <input type="text" placeholder='FileName' name="Filename" required></input></div>
                                        <div><p></p>
                                        <p></p>
                                        <div>

                                        <label for="filename" >Grade</label><p></p>
                                         <select>
                                            <option value="6">6</option>
                                            <option value="6">6</option>
                                            <option value="6">6</option>
                                            <option value="6">6</option>
                                          </select>
                                        </div>
                                        <div> <input type="file" onChange={e => this.setFile(e)} /> </div> 
                                        <button className="btn btn-primary" type="submit">Upload</button>   </div> <br/>

                                       

                                </form>  


                        </div>    
                )    
        }    
}    
export default Fileupload    */


import React, { useState } from 'react';

import axios from 'axios';


function FileUpload (){

    const [data, setdata] = useState({
            
        name: "",
        grade:"",
        filename:"",
        file:{}
    })  

    function submit(e){
e.preventDefault();
axios.post("http://localhost:3000/add/document",data
)

.then(res=>{
    console.log(res.data)
})
    }
    const onChangeFile = (e) => {
        setdata(...data,{file:e.target.files});
      };
    function handle(e){

        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setdata(newdata)
        console.log(newdata)


    }

return (
    <div>
        <from onSubmit={(e)=> submit(e)}>
            <input  onChange={(e) =>handle(e)}  id="name" value={data.name} type="name" placeholder='File Name'></input>
            
            <div> <label for="filename" > File Name</label>
            <input  onChange={(e) =>handle(e)}   id="filename" value={data.filename} type="text" placeholder='FileName' name="Filename" required></input></div>
            <div>
                <input
              type="file"
              placeholder="Upload Document"
              filename="file"
              onChange={onChangeFile}
             
            />
            </div>
            <div>

<label for="filename" >Grade</label><p></p>
 <select  onChange={(e) =>handle(e)}  id="grade" value={data.grade} type="grade">
    <option value="6">6</option>
    <option value="6">7</option>
    <option value="6">8</option>
    <option value="6">9</option>
    <option value="6">10</option>
  </select>
</div>
        <button>submit</button>
        </from>
    </div>
);


}
 export default FileUpload;