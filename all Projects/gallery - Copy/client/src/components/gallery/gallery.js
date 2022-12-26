import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import "./gallery.css"
// H_Jn0ns5ELVExNh8MaceqSOzCKrF2MTeYi5APOXwDqc
// https://api.unsplash.com/photos/?client_id=H_Jn0ns5ELVExNh8MaceqSOzCKrF2MTeYi5APOXwDqc
const Gallery = () => {
    const history = useHistory();
    const [val, setVal] = useState("")
    const [result, setResult] = useState([]);
    const fetchImage = async ()=> {
        const res = await fetch(`https://api.unsplash.com/search/photos/?client_id=H_Jn0ns5ELVExNh8MaceqSOzCKrF2MTeYi5APOXwDqc&query=${val}&orientation=landscape`);
        const data = await res.json();
        console.log(data);
        setResult(data.results);
    }
    const gto = (ur)=>{
        // window.location = ur;
        window.open(ur, '_blank');
    }
  return (
    <div className='main'>
        <div className='mydiv'>
            <span>Search</span> 
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
            <button onClick={()=> fetchImage()}>send</button>
        </div>

        <div className='gallery'>
            {
                result.map((item)=>{
                    return <img key={item.id} src={item.urls.regular} onClick={()=> gto(item.urls.regular)}/>
                })
            }
           
            
        </div>
    </div>
  )
}

export default Gallery