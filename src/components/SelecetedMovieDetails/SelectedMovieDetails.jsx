import './SelectedMovieDetails.css'
import { useState } from 'react'


export default function SelectedMovieDetails({ selectedDisplay, handleAddToMyMovies, }) {

    const [check, setCheck]= useState(false)

    let selectedPosterUrl = `https://image.tmdb.org/t/p/original/${selectedDisplay.poster_path}`

    console.log("checkbox testing")
   function handleCheck(){
       console.log('check huh')
       
       if(check === false){
           setCheck(true)
       }else{setCheck(false)}
       console.log(check)
   }

    return (
        <div>
            Check if seen
            <input name="seenCheck" type="checkbox" onChange={handleCheck}/>
            <br />
            <button onClick={() => handleAddToMyMovies(selectedDisplay.id, selectedDisplay.title, check)} type="submit">Add to MyMovies</button>
            <br />
            {selectedDisplay.title}
            <br />
            {selectedDisplay.release_date}
            <br />
            {selectedDisplay.overview}
            <br />
            <img className="selected-poster" src={selectedPosterUrl} alt="" />
        </div>

        // <div>

        //     <form onSubmit={() => handleAddToMyMovies(selectedDisplay.id)}>
        //     Check if seen<input type="checkbox" />
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