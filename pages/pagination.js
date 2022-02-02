import React,  { useState, useEffect } from 'react'
import axios from "axios";
import cloneDeep from "lodash/cloneDeep";
import Body from './body';
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import { Loading } from '@nextui-org/react';
import { Text } from '@nextui-org/react';


export default function pagination ()  {


const [dataList, setDataList] = useState([]);
const countPerPage = 10;
const [loading, setloading] = React.useState(true);
const [currentPage, setCurrentPage] = React.useState(1);
const collectionData = cloneDeep(dataList.slice(0, countPerPage));
const [collection, setCollection] = React.useState(
    cloneDeep(dataList.slice(0, countPerPage))
  );



    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setDataList(res.data);
      setloading(false);
      
      
      
    };

    useEffect(() => {
      fetchPosts();
    }, []);
    
    
    


  const updatePage = p => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(dataList.slice(from, to)));
    console.log('callling  update method');
  };



  console.log(collection);

    
  return (
    <>
    <div className="App">
      <Text
      h1
      size={40}
      css={{
        textGradient: '45deg, $purple500 -20%, $pink500 100%'
      }}
      weight="bold"
    >
      Make the next.js pagination axios and react hooks
    </Text>
      {loading ? (<Loading size="xl"/>) :(
        <Body posts={collection} />
      )
      
      
      }

      
      {/* <Pagination rounded shadow size={countPerPage} initialPage={1} total={dataList.length} page={currentPage} onChange={updatePage} /> */}
      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={dataList.length}
      />
    </div>
    </>
  );
}


