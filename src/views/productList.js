import React from "react";
import { Space, Card, Button } from "antd";
import "antd/dist/antd.css";

function productList() {
  return (
    <>
      <Space size={[8, 16]} wrap>
        {new Array(20).fill(null).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Button key={index}>Button</Button>
        ))}

        <Button>Default Button</Button>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        ></Card>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card
          size="small"
          title="Small size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    </>
  );
}

export default productList;
