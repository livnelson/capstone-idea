import React, { useState } from 'react'
import requests from '../requests'
import '../styles/App.css'
import Row from './Row'
import Banner from './Banner'
import Nav from './Nav'
import UserProfile from './UserProfile'


function UserHome({ user }) {
  const [viewProfile, setViewProfile] = useState(false)

  console.log(user)

  return (
    <div className='app'>
      <Nav user={user}/>
      <Banner user={user}/>
      <Row
        title="Myflix {Netflix}  Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow />
      <Row title="Trending Now" fetchURL={requests.fetchTrendingNow} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  )
}

export default UserHome