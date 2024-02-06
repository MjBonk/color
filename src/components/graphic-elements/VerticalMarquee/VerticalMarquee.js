//npm install react-fast-marquee --save
import Marquee from "react-fast-marquee";
import "./VerticalMarquee.css";

export default function VerticalMarquee() {
  return (
    <div className="marquee">
      <Marquee direction="down">
        <p>MARQUEE WITH A COOL FONT &nbsp;</p>
        <p>MARQUEE WITH A COOL FONT &nbsp;</p>
      </Marquee>
    </div>
  );
}