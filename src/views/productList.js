import React from "react";
import "./productList.css";
import { Space, Card, Button } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

function productList() {
  function activeLink(index) {
    console.log("click");
    // window.location.href = "/list/" + index;
  }

  return (
    <>
      <div className="contentList">
        <Space size={[8, 16]} wrap>
          {new Array(21).fill(null).map((_, index) => (
            <Card
              key={index}
              onClick={activeLink(index)}
              hoverable
              style={{ width: 240 }}
              cover={
                <img src="https://pbs.twimg.com/profile_images/1193911104377778177/pK9zJgAf_400x400.jpg" />
              }
            >
              <Meta title="정호비" description="www.instagram.com" />
            </Card>
          ))}
        </Space>
      </div>
    </>
  );
}

export default productList;
