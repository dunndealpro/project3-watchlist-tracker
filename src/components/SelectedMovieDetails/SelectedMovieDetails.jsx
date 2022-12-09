import './SelectedMovieDetails.css'
import { useState } from 'react'


export default function SelectedMovieDetails(props) {

    // const [check, setCheck]= useState(false)

    let selectedPosterUrl = `https://image.tmdb.org/t/p/original/${props.selectedDisplay.poster_path}`

    // console.log("checkbox testing")
//    function handleCheck(){
//        console.log('check huh')
       
//        if(check === false){
//            setCheck(true)
//        }else{setCheck(false)}
//        console.log(check)
//    }

    return (
        <div>
             
            {/* <input name="seenCheck" type="checkbox" onChange={handleCheck}/> */}
            <br />
            <button onClick={() => props.handleAddToMyMovies(props.selectedDisplay.id, props.selectedDisplay.title)} type="submit">Add to MyMovies</button>
            <br />
            {props.selectedDisplay.title}
            <br />
            Released: {props.selectedDisplay.release_date}
            <br />
            {props.selectedDisplay.overview}
            <br />
            <img className="selected-poster" src={selectedPosterUrl} alt="" />
        </div>

        // <div>

        //     <form onSubmit={() => handleAddToMyMovies(selectedDisplay.id)}>
        //     Check if seen<input type="checkbox" name="evan" value="false" onChange={handleCheck}/>
        //     <br />
        //     <button type="submit">Add to MyMovies</button>

        //     </form>

        //     <br />
        //     {selectedDisplay.title}
        //     <br />
        //     {selectedDisplay.release_date}
        //     <br />
        //     {selectedDisplay.overview}
        //     <br />
        //     <img className="selected-poster" src={selectedPosterUrl} alt="" />
        // </div>


    )
}