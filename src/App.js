import React from 'react';
import './App.css';
import Row  from './Row';
import requests from './Requests';
// import axios from './axios';
import Nav from './Nav';
import Banner from './Banner';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCGu7IWWkOxSbu04UJ4WD2oC1hCvIIyfsc",
  authDomain: "netflix-clone-910bd.firebaseapp.com",
  projectId: "netflix-clone-910bd",
  storageBucket: "netflix-clone-910bd.appspot.com",
  messagingSenderId: "471921712711",
  appId: "1:471921712711:web:f779d0417b90733c421b62",
  measurementId: "G-H8K17W3LHS"
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


function App() {
  return (
    <div className="App">
      {/* navbar */}

      <Nav />

      {/* banner */}
      <Banner />

      {/* <h1>Kya haal chal public </h1> */}
      <Row title = "NETFLIX ORIGINALS" fetchUrl ={requests.fetchNetflixOriginals}
      isLargeRow={true}
      />
      <Row title = "Trending Now" fetchUrl = {requests.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title = "Romantic movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title = "Documentry" fetchUrl = {requests.fetchDocumantaries}/>

    </div>
  );
}

export default App;
