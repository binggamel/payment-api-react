import React, { useRef, useState } from "react";
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

function handleChangeP(value) {
  console.log(`selected ${value}`);
}

function onChangeN(value) {
  console.log("changed", value);
}

function ProductDetail() {
  return (
    <div className="contentList">
      <Space align="start">
        <Image
          width={470}
          src="http://file3.instiz.net/data/cached_img/upload/2018/11/25/20/1362973dfdab97c232de1cfb0a95608d.jpg"
        />
        <Space direction="vertical">
          <Card style={{ width: "100%" }}>
            <Title style={{ margin: 0 }}>제이어쩌구</Title>
            <Title level={4} style={{ float: "right", margin: 10 }}>
              3,000 원
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
          <Space align="start" style={{ width: "100%" }}>
            <Select
              placeholder="제품을 선택하세요!"
              style={{ width: "100%" }}
              onChange={handleChangeP}
            >
              <Option value="맥북">맥북</Option>
              <Option value="아이패드">아이패드</Option>
              <Option value="애플워치">애플워치</Option>
            </Select>
            <InputNumber
              min={1}
              max={5}
              defaultValue={1}
              onChange={onChangeN}
            />
            <Button>추가</Button>
          </Space>
          <Divider style={{ marginBottom: 0 }} />
          <Divider style={{ marginTop: 0 }} />
          <Space
            align="center"
            style={{ width: "100%", justifyContent: "flex-end" }}
          >
            <p style={{ marginLeft: 24, marginBottom: 0, float: "left" }}>
              총 상품 금액
            </p>
            <Title level={3} style={{ float: "right", margin: 0 }}>
              3,000 원
            </Title>
          </Space>
          <Divider />

          <Space align="start">
            <Button>구매하기</Button>
            <Button>장바구니</Button>
            <Button>찜하기</Button>
          </Space>
        </Space>
      </Space>
      <Divider style={{ marginTop: 100 }} />
      asdf
    </div>
  );
}

export default ProductDetail;

/*
  const [product, setProduct] = useState("test");
  const [number, setNumber] = useState(1);
  const nextId = useRef(0);

  const [selected, setSelected] = useState([nextId.current, product, number]);

  function handleChangeP(value) {
    setProduct(value);
    console.log(`selected ${value}`);
    // onCreate(value);
  }

  const onCreate = (e) => {
    // setSelected({
    //   ...selected,
    //   product: value,
    // });
    setSelected((selected) => [...selected, nextId.current, product, number]);
    nextId.current += 1;
    setProduct("");
  };
   */
