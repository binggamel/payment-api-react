import React from "react";
import "./productList.css";
import { Space, Card, Button } from "antd";

const { Meta } = Card;

function productList() {
  return (
    <>
      <div className="contentList">
        <Space size={[8, 16]} wrap>
          {new Array(20).fill(null).map((_, index) => (
            <Card
              key={index}
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
