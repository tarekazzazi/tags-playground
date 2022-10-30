import "./App.css";
import Tags from "./Tags/Tags.jsx";
// import ServerTags from "./Tags/Server-side-tags.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    fetchList();
  }, []);

  const [tagList, setTagList] = useState([]);

  // ---------------------------------------- //
  // ROUTE SECTION - Communicates with server //
  // ---------------------------------------- //

  const fetchList = () => {
    axios({
      method: "GET",
      url: "/placeholder",
    })
      .then((res) => {
        console.log("res data", res.data);
        setTagList(res.data);
      })
      .catch((error) => {
        console.log(`error in fetch list,${error}`);
      });
  };

  const cats = ["buttons", "clark", "louis", "siglo", "naples", "springboot"];

  const filterByIndex = cats.filter((element, index) => {
    return index < 2;
  });

  console.log(filterByIndex);

  return (
    <>
      <div>
        <ul>
          <li>{filterByIndex}</li>
        </ul>
        <Tags />
      </div>
      <div>{/* <ServerTags /> */}</div>
    </>
  );
}

export default App;
