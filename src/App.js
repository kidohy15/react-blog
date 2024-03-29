import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Nav from "./components/Nav";

// const titleData = ["테스트 블로그1", "테스트 블로그2", "테스트 블로그3"];
const data = [
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
  const [blogData, setBlogData] = useState(data);
  const [title, setTitle] = useState([]);
  const [likes, setLikes] = useState([]);
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [newTitle, setNewTitle] = useState("");

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
  }, [blogData]);

  function handleLike(e, index) {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index] = newLikes[index] + 1;
      return newLikes;
    });
  }

  function handleTitle(e, index) {
    const title = "제목 수정";
    console.log("index!!!!!!", index);
    setIndex(index);
    setTitle((prevTitle) => {
      console.log("prevTitle", prevTitle);
      console.log("index", index);
      const newTitle = [...prevTitle];
      newTitle[index] = title;
      return newTitle;
    });
  }

  function handleDelete(e, index) {
    console.log("index!!!!!!", index);
    setIndex(index);
    const result = blogData.filter((data) => data !== blogData[index])
    console.log("result!!!!!!", result);
    setBlogData(result);
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

  const openModal = (index) => {
    if (modal === true) {
      setIndex(index);
      setModal(false);
    } else {
      setIndex(index);
      setModal(true);
    }
  };

  function handleAddList() {
    console.log("newTitle!!!", newTitle);
    const addTitle = [{title:newTitle, like:0}, ...blogData];
    console.log("newTitle!!!", addTitle);
    setBlogData(addTitle);
    // blogData = addTitle
  }

  return (
    <div className="App">
      <Nav />

      {blogData?.map((data, index) => (
        <div className="list" key={index}>
          <h4 onClick={() => openModal(index)}>
            {title[index]}
            <button onClick={(e) => handleTitle(e, index)}>제목 변경</button>
            <button onClick={(e) => handleDelete(e, index)}>삭제하기</button>
          </h4>
          <span
            onClick={(event) => {
              handleLike(event, index);
            }}
          >
            좋아요👍
          </span>{" "}
          {likes[index]}
          <p>11</p>
        </div>
      ))}
      {modal === true ? (
        <Modal title={title} index={index} handleTitle={handleTitle} />
      ) : null}

      <div>
        <input
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
        <button onClick={handleAddList}>추가</button>
        {/* 제목 가나다 순 정렬 */}
        <button
          style={{
            width: "100px",
            height: "50px",
            margin: "50px",
          }}
          onClick={handleSort}
        >
          정렬
        </button>
      </div>
    </div>
  );
}

export default App;
