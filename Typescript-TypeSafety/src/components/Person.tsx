import { useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country: Country;
}

export enum Country {
  Brazil = "Brazil",
  Nepal = "Nepal",
  France = "France",
}
export function Person(props: Props) {
  const [name, setName] = useState<string>("");
  const getAge = (namee: string): number => {
    return 99;
  };
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Email: {props.email}</h2>
      <h2>Age: {props.age}</h2>
      <h2>This person {props.isMarried ? "is" : "is not"} married</h2>
      {props.friends.map((friend: string) => (
        <h2 key={Math.random()}>{friend}</h2>
      ))}
      <h1>Country: {props.country}</h1>
    </div>
  );
}
