import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Nav from "./components/Nav";

// const titleData = ["테스트 블로그1", "테스트 블로그2", "테스트 블로그3"];
const blogData = [
  {
    title: "다 테스트 블로그1",
    like: 0,
  },
  {
    title: "나 테스트 블로그2",
    like: 0,
  },
  {
    title: "가 테스트 블로그3",
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
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index] = newLikes[index] + 1;
      return newLikes;
    });
  }

  function handleTitle(e, index) {
    const title = "제목 수정";
    setTitle((prevTitle) => {
      const newTitle = [...prevTitle];
      newTitle[index] = title;
      return newTitle;
    });
  }

  function handleSort() {
    const sortedTitles = [...title].sort(); // 가나다 순으로 정렬된 새로운 배열을 생성
    const sortedBlogData = sortedTitles.map((title) => {
      return blogData.find((blog) => blog.title === title); // 정렬된 제목에 해당하는 블로그 데이터를 찾아 새로운 배열을 생성
    });
    const sortedLikes = sortedBlogData.map((blog) => blog.like); // 정렬된 블로그 데이터에 따라 좋아요 수 배열을 생성

    setTitle(sortedTitles); // 정렬된 제목으로 제목 상태를 업데이트
    setLikes(sortedLikes); // 정렬된 좋아요 수로 좋아요 상태를 업데이트
  }

  return (
    <div className="App">
      <Nav />

      {/* 제목 가나다 순 정렬 */}
      <button onClick={handleSort}>정렬</button>
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
            <button onClick={(e) => handleTitle(e, index)}>제목 변경</button>
          </h4>
          <p>11</p>
        </div>
      ))}
      <Modal />
    </div>
  );
}

export default App;
