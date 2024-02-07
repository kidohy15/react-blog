import logo from "./logo.svg";
import "./App.css";

function App() {
  let post = "블로그 제목";
  return (
    <div className="App">
      <div className="blog-nav">
        {/* 스타일 코드 직접 작성 */}
        <h4 style={{ color: "red", fontSize: "16px" }}>블로그 네비게이션</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
