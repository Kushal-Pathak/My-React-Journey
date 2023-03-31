import PropTypes from "prop-types";
export default function Person({ name, email, age, isMarried, friends }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Email: {email}</h2>
      <h2>Age: {age}</h2>
      <h2>This person {isMarried ? "is" : "is not"} married</h2>
      {friends.map((friend) => (
        <h2>{friend}</h2>
      ))}
    </div>
  );
}

Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
};
