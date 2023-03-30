import { useToggle } from "./my-hooks/useToggle";
export default function Toggler(){
    const [isVisible, toggle] = useToggle();
    return <div>
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && <h1>Hello World!</h1>}
    </div>
}