
import React from 'react';
import "semantic-ui-css/semantic.min.css";

class SearchBar extends React.Component{
    
    state = {term:''};
    
    onSubmitChange=event=>{
        event.preventDefault();
        console.log("inside SearchBar - "+this.state.term);
        this.props.onSubmit(this.state.term);
    }
    render(){
        return(
            <div className='ui segment' style={{margin:'10px'}}>
                <form className='ui form' onSubmit={this.onSubmitChange} style={{margin:'20px'}}>
                    <label ><h3>SearchPicture: </h3></label>
                    <input type='text'
                     value={this.state.term}
                     onChange={(event)=>this.setState({term:event.target.value})} 
                     />
                </form>
            </div>
        );
    }
}

export default SearchBar;