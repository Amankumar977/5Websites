import "./List.css";

let List = ({ item1, item2, item3 }) => {
  return (
    <>
      <p>She will Teach us the topics Like</p>
      <ul>
        <li>{item1}</li>
        <li>{item2}</li>
        <li>{item3}</li>
      </ul>
    </>
  );
};
export default List;
