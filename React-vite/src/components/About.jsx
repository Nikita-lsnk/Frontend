import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import { Oval } from 'react-loader-spinner';

const src ="https://content.guardianapis.com/search?page=2&q=debate&api-key=test"



const About = () => {


  const [loading, setLoading] = useState (false);
  const [articles, setArticles] = useState ([]);

  useEffect (()=>{
    setLoading(true)
    axios
    .get(src)
    .then(data => {
      setLoading(false)
      setArticles(data.data.response.results);
    })
  }, []);

  return (
    <div>
      {
        loading?
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
        :
        <Wraper>     
        {articles.map(article =>{
          return (
            <p><a href={article.webUrl}> {article.webTitle} </a></p>
          );
        })}     
        </Wraper> 
      }
      
    </div>
  )
}

export default About

const Wraper = styled.div`
   @media (max-width: 800px) {
    padding: 10px 16px;
   }
`;

