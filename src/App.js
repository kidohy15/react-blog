import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const titleData = ["테스트 블로그1", "테스트 블로그2", "테스트 블로그3"];

function App() {
  const [title, setTitle] = useState(titleData);

  return (
    <div className="App">
      <div className="blog-nav">
        {/* 스타일 코드 직접 작성 */}
        <h4 style={{ color: "red", fontSize: "16px" }}>블로그 네비게이션</h4>
      </div>
      {title.map((title, index) => (
        <div className="list" key={index}>
          <h4>{title}</h4>
          <p>11</p>
        </div>
      ))}
    </div>
  );
}

export default App;
