import React, { useState } from 'react'
import '../styles/VideoDetails.css'

function VideoDetails({ movie, user, viewDetails, setViewDetails }) {
  const [like, setLike] = useState(false)
  const [addLike, setAddLike] = useState(false)
  const [addToList, setAddToList] = useState(false)

  function toggleClose() {
    setViewDetails(!viewDetails)
  }

  function toggleLike() {
    setLike(!like)

  }


  const handleAddToList = () => {
    console.log("Added to list...");
    setAddToList(!addToList)
    const movieObj = { 
      name: (movie.name),
      poster_path: (movie.poster_path),
      user_id: (user.id),
      movie_id: (movie.id)
    };

    console.log(movieObj);

    const configObject = {
      method: "PATCH",
      headers: {
        "content-type": "application/JSON",
      },
      body: JSON.stringify(movieObj),
    };
    fetch(`/mylist`, configObject)
      .then((r) => r.json())
      .then((movieData) => {
        console.log(movieData);
      }); 
  };




  // function toggleAddToList() {
  //   setAddToList(!addToList)
  // }

  return (
    <div className='modal'>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <p className='modal-button' onClick={toggleClose}>ⓧ</p>
      <div>
        <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie.name} className='modal-image' />
        <div className='modal-fade-bottom'></div>
      </div>
        <div className='modal-header'>
          <h3 className='modal-title'>{movie.name}<span></span></h3>
        </div>
        <div className='modal-details'>
          <button className='modal-play-button'>▶ Play</button>
          <p onClick={toggleLike} className='modal-likes'>{like ? '♥' : '♡'}</p>
          <p onClick={handleAddToList} className='modal-list'>{addToList ? '✓' : '﹢'}</p>
          <p className='modal-rating'>Rating: {movie.vote_average}</p>
          <p className='modal-votes'>Comminity Votes: {movie.vote_count}</p>
        </div>
        <div className='modal-body'>
          <p>{movie.release_date}</p>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoDetails