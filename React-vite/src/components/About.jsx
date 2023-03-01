import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';

const src ="https://content.guardianapis.com/search?page=2&q=debate&api-key=test"



const About = () => {

  const [articles, setArticles] = useState ([]);

  useEffect (()=>{
    axios
    .get(src)
    .then(data => {
      setArticles(data.data.response.results);
    })
  }, []);

  return (
    <div>
      {articles.map(article =>{
        return (
          <p><a href={article.webUrl}> {article.webTitle} </a></p>
        );
      })}     
    </div> 
  )
}

export default About

