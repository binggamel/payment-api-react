import React from "react";
import { Space, Card, Button } from "antd";

function MyPage() {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img src="https://pbs.twimg.com/profile_images/1193911104377778177/pK9zJgAf_400x400.jpg" />
        }
      >
        <Meta title="정호비" description="www.instagram.com" />
      </Card>
    </div>
  );
}

export default MyPage;
