import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// const titleData = ["테스트 블로그1", "테스트 블로그2", "테스트 블로그3"];
const blogData = [
  {
    title: "테스트 블로그1",
    like: 0,
  },
  {
    title: "테스트 블로그2",
    like: 0,
  },
  {
    title: "테스트 블로그3",
    like: 0,
  },
];

function App() {
  const [title, setTitle] = useState([]);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const initialTitles = blogData.map((data) => data.title);
    const initialLikes = blogData.map((data) => data.like);
    setTitle(initialTitles);
    setLikes(initialLikes);
    console.log("titles!!!", initialTitles);
    console.log("likes!!!", initialLikes);

    // blogData.forEach((data) => {
    //   setTitle([...title, data.title]);
    //   console.log("title!!!", title);
    //   console.log("data!!!", data);
    //   console.log("data.title!!!", data.title);
    //   // setTitle(data.like)
    // });
  }, []);

  function handleLike(e, index) {
    setLikes(prevLikes => {
      const newLikes = [...prevLikes];
      newLikes[index] = newLikes[index] + 1;
      return newLikes;
    });
  }

  function handleTitle(e, index) {
    const title = '제목 수정' 
    setTitle(prevTitle => {
      const newTitle = [...prevTitle];
      newTitle[index] = title;
      return newTitle;
    });
  }

  return (
    <div className="App">
      <div className="blog-nav">
        {/* 스타일 코드 직접 작성 */}
        <h4 style={{ color: "red", fontSize: "16px" }}>블로그 네비게이션</h4>
      </div>
      {blogData?.map((data, index) => (
        <div className="list" key={index}>
          <h4>
            {title[index]}{" "}
            <span
              onClick={(event) => {
                handleLike(event, index);
              }}
            >
              좋아요👍
            </span>{" "}
            {likes[index]}
            <button onClick={(e) => handleTitle(e, index)}>
              제목 변경
            </button>
          </h4>
          <p>11</p>
        </div>
      ))}
    </div>
  );
}

export default App;
