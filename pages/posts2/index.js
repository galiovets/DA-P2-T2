import { useState, useEffect } from "react";
import fetchPosts from "../../services/fetchPosts";
import AddPostForm from "../../components/AddPostForm";
import DisplayPost from "../../components/DisplayPost";

export default function POSTS() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return <p>No POSTS fetched</p>;

  return (
    <div>
      <h1 className="font-bold text-2xl m-2">ADD POSTS</h1>
      <AddPostForm currentLength={data.length} data={data} setData={setData} />

      <h1 className="font-bold text-2xl m-2">POSTS</h1>
      {data.map(({ title, body, id }) => (
        <DisplayPost title={title} body={body} id={id} />
      ))}
    </div>
  );
}
