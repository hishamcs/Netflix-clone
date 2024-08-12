import {useEffect, useState} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../Constants/constants'

function RowPost(props) {

    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')

    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        }).catch(err => {
            alert('Network Error...')
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

    const handleMovie = (id) =>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
            if(response.data.results.length !== 0) {
                console.log(response.data)
                setUrlId(response.data.results[0])
            } else {
                console.log('array is empty')
            }
        })
    }
    return(
        
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
            {movies.map((obj,index) => {
                return(
                    
                // <img className='poster' alt="poster" src={imageUrl+obj.backdrop_path} key={index}/>
                <img className={props.isSmall?'smallPoster':'poster'} alt="poster" src={`${imageUrl+obj.backdrop_path}`} key={index} onClick={() => handleMovie(obj.id)}/>
                )
            })
            
            }
            </div>
            { urlId && <Youtube videoId={urlId.key} opts={opts} />}
        </div>
    )
}

export default RowPost;