import React from 'react'
import requests from './requests'
import './App.css'
import Row from './Row'
import Banner from './Banner'
import Nav from './Nav'
import { useParams } from 'react-router-dom'



function UserHome({ user }) {
// debugger

const {id} = useParams()

  if (!user) {
    return <p>Loading...</p>
  }

  return (
    <div className='app'>
      <Nav />
      <Banner />
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