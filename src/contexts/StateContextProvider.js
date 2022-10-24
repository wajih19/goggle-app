import React, {createContext, useContext, useState} from 'react';

const StateContext= createContext();
const baseUrl ="https://real-time-web-search.p.rapidapi.com/";
const baseUrl2 ="https://bing-news-search1.p.rapidapi.com/";
const baseUrl3 ="https://bing-image-search1.p.rapidapi.com/"
const baseUrl4= "https://bing-video-search1.p.rapidapi.com/"

export const StateContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
  
    const getResults = async (url) => {
      setLoading(true);
  
      const res = await fetch(`${baseUrl}${url}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e9c81a15a8msh927443e9cf07335p170b6djsna7b8b8467943',
          'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
        },
      });
  
      const data = await res.json();
      setResults(data);
      setLoading(false);
    };

    const getNews = async (secondUrl) => {
      setLoading(true);
  
      const newsRes = await fetch(`${baseUrl2}news/search${secondUrl}`, {
        method: 'GET',
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': 'e9c81a15a8msh927443e9cf07335p170b6djsna7b8b8467943',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        },
      });
  
      const newsData = await newsRes.json();
      setResults(newsData);
      setLoading(false);
    };

    const getImages = async (thirdUrl) => {
      setLoading(true);
  
      const imagesRes = await fetch(`${baseUrl3}images/search${thirdUrl}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e9c81a15a8msh927443e9cf07335p170b6djsna7b8b8467943',
          'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
        },
      });
  
      const imagesData = await imagesRes.json();
      setResults(imagesData);
      setLoading(false);
    };

    const getVideos = async (fourthUrl) => {
      setLoading(true);
  
      const videosRes = await fetch(`${baseUrl4}videos/search${fourthUrl}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e9c81a15a8msh927443e9cf07335p170b6djsna7b8b8467943',
          'X-RapidAPI-Host': 'bing-video-search1.p.rapidapi.com'
        },
      });
  
      const videosData = await videosRes.json();
      setResults(videosData);
      setLoading(false);
    };
    

  
    return (
      <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading , getNews, getImages,getVideos }}>
        {children}
      </StateContext.Provider>
    );
  };
  
  export const useStateContext = () => useContext(StateContext);