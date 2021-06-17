import React, { useEffect, useState } from "react";
import './style.css'; 

import {
    useQuery,
    gql
} from "@apollo/client";


interface Props {};

interface detailProps {
    code:string;
    type:string;
};

const Home= (props: Props) => {

    const [country, setCountry] = useState<string>('');
    const [continent, setcontinent] = useState<string>('');

    
    const handleCountryCodeChange = (e) => {
        let value = e.target.value;
        setCountry(value)
    }
    const handleContinentCodeChange = (e) => {
        let value = e.target.value;
        setcontinent(value)
    }


    return (
        <>
            <div className="container">
                <div className="sub_container" >
                    <input type="text" placeholder="Enter country code" onChange={handleCountryCodeChange}></input>
                    {
                        country.length > 1 &&
                        <ShowDetail code={country} type="country"></ShowDetail> 
                    }
                </div>
                <div className="sub_container">
                    <input type="text" placeholder="Enter continent code" onChange={handleContinentCodeChange}></input>
                    {
                        continent.length > 1 &&
                        <ShowDetail code={continent}  type="continent"></ShowDetail> 
                    }
                </div>
            </div>
        </>
    )
};


function ShowDetail(props:detailProps) {

    let {code, type} = props;

    let Query;

    if(type == 'country'){
        Query = gql`
        query country($code: ID!) {
            country(code: $code) {
                name
                native
                capital
                emoji
                currency
                languages{
                    name
                }
            }
        }
        `;
    } else if(type == 'continent') {
        Query = gql`
        query continent($code: ID!) {
            continent(code: $code) {
                name
                countries{
                    name
                    emoji
                }
            }
        }
        `;
    }


    const {data, loading, error} = useQuery(Query, {
        variables: { code }
    });
  
    if (loading || error ) {
      return <p>{error ? error.message : 'Loading...'}</p>;
    }

    if (!data.country && type == 'country') {
        return <p>
            {
                type == 'country' && <span>No country found!</span>
            }
        </p>
    }
    if (!data.continent && type == 'continent') {
        return <p>
            {
                type == 'continent' && <span>No continent found!</span>
            }
        </p>
    }
  
    return (
      <div>
        {
            type == 'country' &&
            <div>
                <h5>Name: {data.country.name}</h5>
                <h5>Code: {code}</h5>
                <h5>Currency: {data.country.currency}</h5>
                <h5>Flag: {data.country.emoji}</h5>
                <h5>Languages: {data.country.languages.map((ele,i) => {
                    return <span key={i}>{ele.name} { i > data.country.languages.length && <span>,</span>}</span>
                })}</h5>
            </div>
        }
        {
            type == 'continent' &&
            <div>
                <h5>Countries</h5>
                <div>
                    {
                        data.continent.countries.map((ele,i) => {
                            return (<div  key={i}>
                                <h5><span>{ele.emoji}  </span>{ele.name}</h5>
                            </div> )
                        })
                    }
                </div>
            </div>
        }
      </div>
    );
  }
  

export default Home;

