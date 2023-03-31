import { social } from "./constants";
import "./social.css";
export default function SocialComponent() {
  return (
    <div className="item-container">
      {social.map((item, idx) => {
        return (
          <div className="item" key={idx}>
            <img className="item-icon" src={item.icon}></img>
            <div className="item-detail">
              <h4 className="item-title">{item.title}</h4>
              <p className="item-description">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
