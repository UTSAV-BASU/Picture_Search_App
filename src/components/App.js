import React from 'react';
//import axios from 'axios';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './imageList';
import "semantic-ui-css/semantic.min.css";

    class App extends React.Component{
        state={images:[]}
        // onSubmit = async (term) => {
        //     console.log("inside App - "+term);
        //     const response= await axios.get('https://api.unsplash.com/search/photos',{
        //     params:{ query : term},    
        //     headers : { Authorization: 'Client-ID RNGexN-QmJg9ZMYOEO2X5pN84RtupWUVLdGCOsS8nSo'}
        //     });
        //     console.log(response.data.results);
        //     this.setState({images:response.data.results});
        // }

        onSubmit = async (term) => {
            console.log("inside App - "+term);
            const response= await unsplash.get('/search/photos',{
            params:{ query : term},    
            });
            console.log(response.data.results);
            this.setState({images:response.data.results});
        }
        render(){
        return(
                <div className='ui container'>
                    <SearchBar onSubmit={this.onSubmit}/>
                    <ImageList images={this.state.images} />
                </div>
            );
        }
        }
export default App;