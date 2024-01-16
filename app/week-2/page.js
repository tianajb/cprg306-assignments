
import Heading from "./heading";

export default function Page(){
    let a =5;
    let b =6;
    let c = a+ b;

    return (
      <main>
        <Heading/>
        <Heading/>
        <h1 className ="text-4xl">Week 2 Demos</h1>
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
        <p>The value of a is {a}.</p>
        <p>The sum of a + b is {a + b}.</p>
      </main>
    );
  }