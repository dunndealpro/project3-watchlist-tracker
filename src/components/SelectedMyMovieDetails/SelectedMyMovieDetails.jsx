import './SelectedMyMovieDetails.css'
import { useState } from 'react'


export default function SelectedMyMovieDetails({ selectedDisplay, handleAddToMyMovies, handleDeleteFromMyMovies}) {

    const [check, setCheck]= useState(false)

    let selectedPosterUrl = `https://image.tmdb.org/t/p/original/${selectedDisplay.poster_path}`

    // console.log("checkbox testing")
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
            <button onClick={() => handleAddToMyMovies(selectedDisplay.id, selectedDisplay.title, check)} type="submit">Add to My  Movies</button>
            <button onClick={() => handleDeleteFromMyMovies(selectedDisplay.id)} type="submit">Delete from MyMovies</button>
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