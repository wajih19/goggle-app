import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useStateContext } from '../contexts/StateContextProvider';
import { Loading } from './Loading';

const Results = () => {
  const demoImage ="https://loremflickr.com/640/360";

  const {results,loading,getResults,searchTerm, getNews, getImages, getVideos }= useStateContext();
  const location= useLocation();


  useEffect(()=>{

      if (location.pathname === '/search') {

        getResults(`/search?q=${searchTerm}`);
      } else if (location.pathname === '/news'){

        getNews(`?q=${searchTerm}`);
      } else if (location.pathname === '/images'){

        getImages(`?q=${searchTerm}`);
      } else if (location.pathname === '/videos'){

        getVideos(`?q=${searchTerm}`);
      }
      },[location.pathname,searchTerm]);

    if(loading ) return <Loading/>
      console.log(results);

    switch (location.pathname) {
      case '/search':
        return(
          <div className='sm:px-56 flex flex-wrap justify-between space-y-6 mt-5'>
            {results?.data?.map(({title,url},index)=>(
              <div key={index} className="md:w-2/5 w-full">
                <a href={url} target="_blank" rel="noreferrer">
                  <p className="text-sm">{url.length>30? url.substring(0,30): url}</p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">{title}</p>
                </a>
              </div>
            ))}
          </div>
        );
       case '/news':
        return(
          <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
          {results?.value?.map(({ provider,name, url}, index) => (
            <div key={index} className="md:w-2/5 w-full ">
              <a href={url} target="_blank" rel="noreferrer " className="hover:underline ">
                <p className="text-lg dark:text-blue-300 text-blue-700">{name.length>50? name.substring(0,50):name}....</p>
              </a>
              <div className="flex gap-4">
                <img className= "h-10 w-10 rounded-full" src={provider[0]?.image?.thumbnail?.contentUrl || demoImage}/>
                <p className="text-sm dark:text-blue-200 text-gray-600 mt-2	 ">{provider[0]?.name}</p>
              </div>
            </div>
          ))}
        </div>
      );
       case '/images':
        return (
          <div className="flex flex-wrap justify-center items-center">
            {results?.value?.map(({ webSearchUrl, thumbnailUrl, name}, index) => (
              
                <a href={webSearchUrl} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
                  <img className='w-full h-48 object-cover' src={thumbnailUrl} alt="" loading="lazy" />
                  <p className=" text-gray-500 break-words text-sm mt-2 hover:underline">{name}</p>
                </a>
              
            ))}
          </div>
        );
        case '/videos':
          return (
            <div className="flex flex-wrap ">
              {results?.value?.map(({contentUrl}, index) => (
                <div key={index} className="p-2">
                  <ReactPlayer url={contentUrl} controls width="355px" height="200px" />
                </div>
              ))}
            </div>
      );
        
    
      default:
        return 'ERROR..';
    }
  };

  export default Results;