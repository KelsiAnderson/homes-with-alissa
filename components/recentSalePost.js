import React, { Component, useEffect, useState } from 'react';
import { graphql, buildSchema } from 'graphql';

const query = buildSchema(`{
    recentSalesCollection {
      items {
        recentSales {
          description
          url
        }
        description
      }
    }
  }`);
const recentSalesPost = () => {

    const [recentSales, setRecentSales] =  useState(null);

    useEffect(() => {
        window.fetch("https://graphql.contentful.com/content/v1/spaces/fdiva87v0csk/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 8Bjumc4cFJX0Nbo6lQwG7ZCR-ZeBqzUxFnuIevuyowU",
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify({query}),
        })
        .then((r) => {
            console.log(r);
            r.json()})
        .then(({data, errors}) => {
            if (errors) {
                console.error(errors);
            }
            setRecentSales(data.recentSalesCollection.items[0])
        });
    }, []);

    return (
        <div>
            {/* <img src={recentSales.recentSales.url} alt="homeImage" />
            <p>{recentSales.description}</p> */}
        </div>
    )
}
export default recentSalesPost