import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import axios  from 'axios'
import './index.scss'
import { useEffect } from "react";
const Detail = () => {
  const[detail,setDetail]=useState([])
  const {id}=useParams()
  const fetchDetail=async()=>{
    const res=await axios(`http://localhost:3000/finals/${id}`)
    setDetail(res.data)
  }
  useEffect(()=>{
    fetchDetail()
  },[])
  return (
    <>
      <Helmet>
        <title>Detail</title>
      </Helmet>
<h1>Detail</h1>
<div className="Detail">
  {detail ? <>
  <ul>
    <li><img src={detail.image} alt="" /></li>
    <li>{detail.text}</li>
    <li>{detail.title}</li>
    <li>{detail.price}</li>
  </ul>
  </>:''}
</div>
    </>
  );
};

export default Detail;
