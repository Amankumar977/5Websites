async function fetchData() {
  try {
    const todoResponse = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!todoResponse.ok || !postResponse.ok) {
      throw new Error("failed to fetch data");
    }
    const todoData = await todoResponse.json();
    const postData = await postResponse.json();

    const combinedData = {
      todo: todoData,
      post: postData,
    };
    console.log(combinedData);
  } catch (err) {
    console.log("Error:", err);
  }
}
fetchData();
