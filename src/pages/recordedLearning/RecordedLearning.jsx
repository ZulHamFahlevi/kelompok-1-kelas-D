import React from "react";
import "./style.css";
import { Card, Col, Row, Tooltip } from "antd";
import { DATA_RECORDED } from "./constants";
// import ReactTooltip from "react-tooltip";

const RecordedLearning = () => {
  const styles = {
    fontFamily: '"Catamaran", Sans-serif',
    fontWeight: "bold",
    fontSize: "2em",
    color: "rgb(28, 28, 92)",
  };
  // React.useEffect(() => {
  //   document.documentElement.scrollTop = document.documentElement.clientHeight;
  //   document.documentElement.scrollLeft = document.documentElement.clientWidth;
  // }, []);

  return (
    <div className="container-record">
      <h2 style={{ ...styles, marginTop: "40px" }}>Recorded Learning</h2>
      <p style={{ fontFamily: "'Catamaran', sans-serif", marginTop: "2rem" }}>
        Sebuah pelatihan singkat di mana anda akan mempelajari ilmu-ilmu terbaru
        dan relevan dengan industri IT.
      </p>
      <Row gutter={20} style={{ flexWrap: "wrap" }}>
        {DATA_RECORDED.map((item, index) => {
          return (
            <Col span={6}>
              <Tooltip title="Alterra Academy">
                {/* <Tooltip title="Thanks for using antd. Have a nice day!" open> */}
                <Card
                  key={index}
                  style={{
                    width: 290,
                    marginTop: 30,
                  }}
                >
                  <img
                    src={item.image}
                    alt="img"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                    // data-for="tool"
                    // data-tip="Hello world"
                    // id={`img${index}`}
                    // data-tip="Welcome!"
                    // data-for={`img${index}`}
                  />
                  {/* <ReactTooltip id="tool" /> */}
                  <div>
                    <span>
                      <p className="kelas">{item.kelas}</p>
                      <h3>{item.name}</h3>
                    </span>
                    <hr />
                    <span className="container-harga">
                      <p
                        style={{
                          textAlign: "right",
                          textDecoration: "line-through",
                        }}
                      >
                        {item.price}
                      </p>
                      <h3 style={{ textAlign: "right" }}>{item.harga}</h3>
                    </span>
                  </div>
                </Card>
              </Tooltip>
              {/* </Tooltip> */}
              {/* <ReactTooltip id={`img${index}`} place="top" effect="solid" /> */}
            </Col>
          );
        })}
      </Row>

      <button type="button" className="btn-primary" value="LOADMORE">
        LOAD MORE
      </button>
    </div>
  );
};

export default RecordedLearning;
// import "./style.css";
// import { Card, Col, Row } from "antd";
// import { DATA_RECORDED } from "./constants";
// import ReactTooltip from "react-tooltip";

// const RecordedLearning = () => {
//   // const { Meta } = Card;

//   const styles = {
//     fontFamily: '"Catamaran", Sans-serif',
//     // fontStyle: 'italic',
//     fontWeight: "bold",
//     fontSize: "2em",
//     color: "rgb(28, 28, 92)",
//   };

//   return (
//     <div className="container-record">
//       <h2 style={{ ...styles, marginTop: "40px" }}>Recorded Learning</h2>
//       <p style={{ fontFamily: "'Catamaran', sans-serif", marginTop: "2rem" }}>
//         Sebuah pelatihan singkat di mana anda akan mempelajari ilmu-ilmu terbaru
//         dan relevan dengan industri IT.
//       </p>
//       <Row gutter={20} style={{ flexWrap: "wrap" }}>
//         {DATA_RECORDED.map((item, index) => {
//           return (
//             <Col span={6}>
//               <Card
//                 key={index}
//                 style={{
//                   width: 280,
//                   marginTop: 30,
//                 }}
//                 cover={
//                   <>
//                     <img
//                       src={item.image}
//                       alt=""
//                       id={`img-${index}`}
//                       // data-tip={item.tooltip}
//                       data-tip="Welcome!"
//                       data-for={`img${index}`}
//                     />
//                     {/* <ReactTooltip id={`img-${index}`} effect="solid" /> */}
//                   </>
//                 }
//               >
//                 <div>
//                   <span>
//                     <p className="kelas">{item.kelas}</p>
//                     <h3>{item.name}</h3>
//                   </span>
//                   <hr />
//                   <span className="container-harga">
//                     <p
//                       style={{
//                         textAlign: "right",
//                         textDecoration: "line-through",
//                       }}
//                     >
//                       {item.price}
//                     </p>
//                     <h3 style={{ textAlign: "right" }}>{item.harga}</h3>
//                   </span>
//                 </div>
//               </Card>
//               <ReactTooltip id={`img${index}`} place="top" effect="solid" />
//             </Col>
//           );
//         })}
//       </Row>

//       <button type="button" class="btn-primary" value="LOADMORE">
//         LOAD MORE
//       </button>
//     </div>
//   );
// };

// export default RecordedLearning;
