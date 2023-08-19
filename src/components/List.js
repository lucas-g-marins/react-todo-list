import ListItem from "./ListItem";

const List = (props) => {
  return (
    <ul id="myUL">
      {props.items.map((item) => (
        <ListItem item={item} />
      ))}
    </ul>
  );
};

export default List;
