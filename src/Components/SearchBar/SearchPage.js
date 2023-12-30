// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import HomePage from "../HomePage/HomePage";
// import "../SearchBar/SearchPage.css";

// function SearchPage() {
//   const [data, setData] = useState([]);
//   const { query } = useParams();

//   const actionHandler = (mood) => {
//     async function fetchData() {
//       try {
//         const url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"${mood}"}`;
//         const getData = await fetch(url, {
//           method: "GET",
//           headers: {
//             projectID: "edlpgt620a4c",
//           },
//         });
//         const json = await getData.json();
//         console.log(json.data);
//         setData(json.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }
//     fetchData();
//   };

//   return (
//     <>
//       <h2 className="search-heading-mood">Songs Based On Mood</h2>
//       <div className="mood-button-container">
//         <button
//           className="mood-button happy"
//           onClick={() => actionHandler("happy")}
//         >
//           Happy
//         </button>

//         <button
//           className="mood-button sad"
//           onClick={() => actionHandler("sad")}
//         >
//           Sad
//         </button>

//         <button
//           className="mood-button romantic"
//           onClick={() => actionHandler("romantic")}
//         >
//           Romantic
//         </button>

//         <button
//           className="mood-button excited"
//           onClick={() => actionHandler("excited")}
//         >
//           Excited
//         </button>
//       </div>
//       <div className="grid-container">
//         {data.length > 0 &&
//           data?.map((item, index) => (
//             <div className="grid-item">
//               <img
//                 src={item.artist[0]?.image}
//                 alt="image001"
//                 className="grid-item-image"
//               />
//               <h2 className="grid-item-title"> {item?.title} </h2>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// }
// export default SearchPage;

