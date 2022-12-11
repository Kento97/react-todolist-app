import { useState } from "react";
import TodoList from "@/components/TodoList";
import { Col, Row } from "antd";

function App() {
  return (
    <Row
      style={{
        height: "100vh",
      }}
    >
      <Col span={8} offset={8}>
        <div>
          <TodoList />
        </div>
      </Col>
    </Row>
  );
}

export default App;
