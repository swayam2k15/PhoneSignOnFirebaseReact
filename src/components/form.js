import React, { Component } from 'react';


class Form extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            firstName:'',
            salary:'',
            employeeId:'',           
            message: '',
            dob:'',
            skills:[]

        }
       
    }
  ;

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        alert('Submit Hit');
    }
    
    change = e => {
        this.props.onChange({[e.target.name]: e.target.value});
        this.setState({
            [e.target.name] : e.target.value,
            fields: {
                ...this.state.fields,
                ...this.state.updatedValue
            }
        });

    };
    
    render() {
        
        return(

            <div>
               <div className='container'>
                <form>
                <input 
                    name='employeeId'
                    className='form-control'
                    placeholder='Employee ID' 
                    required
                    ref={(input)=>{this.employeeId=input}}
                    value={this.state.employeeId}
                    onChange={e=> this.change(e)}
                    />
                    <br/>

                    <input 
                    name='firstName'
                    className='form-control'
                    placeholder='Name' 
                    required
                    ref={(input)=>{this.firstName=input}}
                    value={this.state.firstName}
                    onChange={e=> this.change(e)}
                    />
                    <br/>
                    <input 
                    name='salary'
                    className='form-control'
                    placeholder='Salary' 
                    required
                    type='number'
                    ref={(input)=>{this.salary=input}}
                    value={this.state.salary}
                    onChange={e=> this.change(e)}
                    />
                    <br/>
                    <input 
                    name='dob'
                    className='form-control'
                    type='date'
                    required
                    ref={(input)=>{this.dob=input}}
                    value={this.state.dob}
                    onChange={e=> this.change(e)}
                    />                  
                    <br/>
                    <input 
                    name='Skill 1'
                    className='form-control'
                    type='checkbox'
                    multiple
                    ref={(input)=>{this.skills=input}}
                    
                    >                
                    </input>
                    <label className='form-control skill-label'>Skill 1</label>
                    <br/>
                    <input 
                    name='Skill 2'
                    className='form-control'
                    type='checkbox'
                    multiple
                    ref={(input)=>{this.skills=input}}
                    >                
                    </input>
                    <label className='form-control skill-label'>Skill 2</label>
                    <br/>
                    <input 
                    name='Skill 3'
                    className='form-control'
                    type='checkbox'
                    multiple
                    ref={(input)=>{this.skills=input}}
                    >                
                    </input>
                    <label className='form-control skill-label'>Skill 3</label>
                    <br/>
                    <input 
                    name='Skill 4'
                    className='form-control'
                    type='checkbox'
                    multiple
                    ref={(input)=>{this.skills=input}}
                    >                
                    </input>
                    <label className='form-control skill-label'>Skill 4</label>
                    <br/>
                    <input 
                    name='Skill 5'
                    className='form-control'
                    type='checkbox'
                    multiple
                    ref={(input)=>{this.skills=input}}
                    >                
                    </input>
                    <label className='form-control skill-label'>Skill 5</label>
                    <br/>
                    <input 
                    name='Skill 6'
                    className='form-control'
                    type='checkbox'
                    multiple
                    ref={(input)=>{this.skills=input}}
                    >                
                    </input>
                    <label className='form-control skill-label'>Skill 6</label>
                    <br/>
                    <input 
                    name='Skill 7'
                    className='form-control'
                    type='checkbox'
                    multiple
                    ref={(input)=>{this.skills=input}}
                    >                
                    </input>
                    <label className='form-control skill-label'>Skill 7</label>
                    <br/>
                    <input 
                    name='Skill 8'
                    className='form-control skill-checkBox'
                    type='checkbox'
                    multiple
                    ref={(input)=>{this.skills=input}}
                    >                
                    </input>
                    <label className='form-control skill-label'>Skill 8</label>
                    <br/>
                    <input 
                    name='Skill 9'
                    className='form-control'
                    type='checkbox'
                    multiple
                    ref={(input)=>{this.skills=input}}
                    >                
                    </input>
                    <label className='form-control skill-label'>Skill 9</label>
                    <br/>
                    <input 
                    name='Skill 10'
                    className='form-control'
                    type='checkbox'
                    multiple
                    ref={(input)=>{this.skills=input}}
                    >                
                    </input>
                    <label className='form-control skill-label'>Skill 10</label>
                   
                    <br/>
                    <input
                    name='photoUpload'
                    type='file'
                    accept="image/*"
                    className='form-control '
                    required
                    ref={(input)=>{this.photoUpload=input}}>
                    </input>
                    <input
                    type='submit'
                    className='form-control btn-primary'
                    value='Submit'
                    ref={(input)=>{this.submit=input}}
                    onClick = {(e)=> this.onSubmit(e,'submit')}>
                    </input>
                    
                    <div>
                        <p> {this.state.message ? this.state.message : '' } </p>
                    </div>
                    
                </form>
                </div>
            </div>
        )
    }
}

export default Form;