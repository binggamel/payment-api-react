import React, { useRef, useState } from "react";
import style from "./pDetail.module.css";
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

// function handleChangeP(value) {
//   console.log(`품명 ${value}`);
// }

// function handleChangeN(value) {
//   console.log(`수량 ${value}`);
// }

function ProductDetail() {
  const [selects, setSelects] = useState({
    //입력값 동시 처리
    name: "",
    num: "",
  });

  const { name, num } = selects;

  const onDataChangeP = (value) => {
    setSelects({
      ...selects,
      name: value,
    });
  };

  const onDataChangeN = (value) => {
    setSelects({
      ...selects,
      num: value,
    });
  };

  const [selectProducts, setSelectProducts] = useState([
    //배열 처리
  ]);

  const nextId = useRef(1);
  const onCreate = () => {
    //새롭게 배열 데이터를 추가하는 함수

    if (name == "" || num == "") {
      alert("필수 선택입니다!");
    } else {
      const SelectProduct = {
        id: nextId.current,
        name,
        num,
      };
      setSelectProducts([...selectProducts, SelectProduct]);

      setSelects({
        name: "",
        num: "1",
      });
      nextId.current += 1;
    }
  };

  const onRemove = (id) => {
    //setUsers(users.filter(user => user.id !== id));
    setSelectProducts(selectProducts.filter((selects) => selects.id !== id));
  };

  const onBasket = () => {
    selectProducts.map((selectProduct) => console.log(selectProduct.name));
  };

  return (
    <div className={style.contentList}>
      <Space
        align="start"
        style={{ width: "100%" }}
        className={style.contentSpace}
      >
        <Image
          className={style.productImg}
          width={470}
          src="http://file3.instiz.net/data/cached_img/upload/2018/11/25/20/1362973dfdab97c232de1cfb0a95608d.jpg"
        />
        <Space direction="vertical">
          <Card style={{ width: "100%" }}>
            <Title style={{ margin: 0 }}>상품 이름</Title>
            <Title level={4} style={{ float: "right", margin: 10 }}>
              3,000 원
            </Title>
            <p style={{ float: "left" }}>description</p>
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
              style={{ width: 150 }}
              onChange={onDataChangeP}
              required
            >
              <Option value="맥북">맥북</Option>
              <Option value="아이패드">아이패드</Option>
              <Option value="애플워치">애플워치</Option>
            </Select>
            <InputNumber
              min={1}
              max={5}
              defaultValue={1}
              onChange={onDataChangeN}
              required
            />
            <Button onClick={onCreate}>추가</Button>
          </Space>

          <Divider style={{ marginBottom: 0 }} />
          <div>
            {selectProducts.map((selectProduct) => (
              <div>
                {selectProduct.name} | {selectProduct.num} | {selectProduct.id}
                <Button onClick={() => onRemove(selectProduct.id)}>x</Button>
                <Divider />
              </div>
            ))}
          </div>
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
            <Button onClick={onBasket}>장바구니</Button>
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
