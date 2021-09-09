import React from "react";
import "./pDetail.css";
import {
  Space,
  Card,
  Button,
  Image,
  Typography,
  Divider,
  Select,
  InputNumber,
} from "antd";

const { Title } = Typography;
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function productDetail() {
  return (
    <div className="contentList">
      <Space align="start">
        <Image
          width={470}
          src="http://file3.instiz.net/data/cached_img/upload/2018/11/25/20/1362973dfdab97c232de1cfb0a95608d.jpg"
        />
        <Space direction="vertical">
          <Card style={{ width: "100%" }}>
            <Title style={{ margin: 0 }}>쌈자. 정호석</Title>
            <Title level={4} style={{ float: "right", margin: 10 }}>
              3,000 ₩
            </Title>
            <p style={{ float: "left" }}>
              description - 맙소사! 이것은 아주 귀여운 생명체입니다!
            </p>
          </Card>
          <p style={{ marginLeft: 24, marginBottom: 0 }}>
            택배배송 | 3,000원 (주문시 결제)
          </p>
          <p style={{ marginLeft: 24, color: "#A4A4A4" }}>
            제주, 도서지역 추가 3,000원
          </p>
          <Divider style={{ marginTop: 0 }} />
          <Select
            defaultValue="맥북"
            style={{ width: "100%" }}
            onChange={handleChange}
          >
            <Option value="맥북">맥북</Option>
            <Option value="아이패드">아이패드</Option>
            <Option value="애플워치">애플워치</Option>
          </Select>
          <Divider style={{ marginTop: 0 }} />

          <Space align="start">
            <Button>asdf</Button>
            <Button>asdf</Button>
            <Button>asdf</Button>
          </Space>
        </Space>
      </Space>
      <Divider />
      asdf
    </div>
  );
}

export default productDetail;
