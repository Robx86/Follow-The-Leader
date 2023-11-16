import { useState, useRef, MouseEvent } from "react";

export default function App() {
 const [position, setPosition] = useState<[number, number]>([0, 0])
 const ref = useRef<HTMLDivElement>(null);

 const handleClick = ({ clientX, clientY }: MouseEvent<HTMLDivElement>) => {
   const { width, height } = ref.current!.getBoundingClientRect()
   setPosition([clientX - width / 2, clientY - height / 2]);
 };

 return (
   <div className="wrapper" onClick={handleClick}>
     <div
       ref={ref}
       className="box"
       style={{
         transform: `translate(${position[0]}px, ${position[1]}px)`,
         transition: "transform 1s",
       }}
     />
   </div>
 );
}

