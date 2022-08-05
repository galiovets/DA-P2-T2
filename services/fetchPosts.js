async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await response.json();
  return result;
}

export default fetchPosts;
