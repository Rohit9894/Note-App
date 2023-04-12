import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState();
  const [content, setContent] = useState();
  function getData() {
    axios
      .get("http://localhost:5000/read")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }
  function post(e) {
    if (e.key === "Enter") {
      if (!content) {
        alert("please add something");
        return;
      }
      axios
        .post("http://localhost:5000/api/message", { description: content })
        .then((res) => {
          setContent("");
          getData();
        })
        .catch((err) => console.log(err));
    }
  }
  function handleDelete(id) {
    console.log(id);
    axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((res) => getData())
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="div-input">
        {/* Type something in input and hit enter to add the card on webpage */}
        <input
          placeholder="Take a note ..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={post}
        />
      </div>
      <div className="card-div">
        {data?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            description={item.description}
            created_at={item.created_at}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
