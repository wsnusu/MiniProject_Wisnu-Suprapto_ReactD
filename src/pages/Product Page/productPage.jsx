import React, { useState } from 'react';

import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "./query/product-query";
import { Button, Card, Col, Input, Result, Row } from "antd";

import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import LoadingComponent from "../../components/loadingComponent/loadingComponent";
import Title from 'antd/es/typography/Title';

const ProductPage = () => {
     // Get Data
  const {
    data: productData,
    loading: isProductLoading,
    error: productError,
  } = useQuery(GET_PRODUCT);
console.log(productData)
  const [data = productData?.users, setData] = useState();

  const handleSearch = (e) => {
    const value = e.target.value;

    setData(
      productData?.users.filter((item) => {
        const isMatchProduct = value
          ? item.productName.toLowerCase().includes(value.toLowerCase())
          : true;

        return isMatchProduct;
      })
    );
  };
    return (
        <div className='div'>
            <Card>
             <>
      {isProductLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <Title level={1}>Product List</Title>
        <br/>

          <Input
            placeholder="Search Product Here"
            prefix={<SearchOutlined />}
            onChange={handleSearch}
          />

        <br/>

          {data.length > 0 ? (
            <Row gutter={[10]} justify="start">
              {data?.map((item) => (
                <Col key={item.uuid} >
                 
                    <Card title={<Title level={2}>{item.productName}</Title>} style={{ margin: "20px", width:"300px"}}
                    cover={<img src={item.avatar} width="100px"/>}>
                      <div className="space">
                        
                    
                    
                        
                      </div>
                 
                     Category: <b>{item.productCategory}</b>
              
                     <div>
                        <br></br>
                       
                          <Button type="primary">Read</Button>
                      
                        </div>
                    </Card>
              
                </Col>
              ))}
            </Row>
          ) : (
            <Row justify="center">
              <Result status="404" subTitle="Product not found" />
            </Row>
          )}
        </>
      )}
    </>
    </Card>
        </div>
    );
}

export default ProductPage;
