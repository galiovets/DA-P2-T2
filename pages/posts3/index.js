import React from "react";
import fetchPosts from "../../services/fetchPosts";
import DisplayPost from "../../components/DisplayPost";

export default class POSTS extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetchPosts().then((data) => this.setState({ posts: data }));
  }

  postAddHandle = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const body = event.target.elements.body.value;
    const post = {
      title: title,
      body: body,
      id: this.state.posts.length + 1,
    };
    this.setState({ posts: [post, ...this.state.posts] });
  };

  render() {
    return (
      <div>
        <h1 className="font-bold text-2xl m-2">ADD POSTS</h1>
        <form onSubmit={this.postAddHandle} className="w-2/5">
          <input
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            name="title"
            placeholder="Title"
          />
          <input
            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            name="body"
            placeholder="Body"
          />
          <button
            className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add post
          </button>
        </form>
        {this.state.posts.length > 0 ? (
          <div>
            {this.state.posts.map(({ title, body, id }) => (
              <DisplayPost title={title} body={body} id={id} />
            ))}
          </div>
        ) : (
          <p>No POSTS fetched</p>
        )}
      </div>
    );
  }
}
