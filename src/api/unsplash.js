import axios from 'axios';
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
             Authorization: 'Client-ID RNGexN-QmJg9ZMYOEO2X5pN84RtupWUVLdGCOsS8nSo'
            }
});