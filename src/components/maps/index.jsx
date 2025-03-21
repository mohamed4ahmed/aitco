// import React from "react";
// import {
//   TileLayer,
//   Marker,
//   Popup,
//   Tooltip,
//   MapContainer as LeafletMap,
// } from "react-leaflet";
// import "./Maps.css";
// import "leaflet/dist/leaflet.css";
// import { iconAitco } from "./IconMarker";
// import logoImg from "../../assets/img/chan-dung-edit.png";
// const Map = () => {
//   const position = [24.63544528, 46.87774773];
//   const zoom = 12;
//   return (
//     <div className="map">
//       <LeafletMap center={position} zoom={zoom}>
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position} icon={iconAitco}>
//           <Popup>
//             <div className="info-container">
//               <div className="info__logo">
//                 <img src={logoImg} alt="logo" />
//               </div>
//               <div className="info__name">AITCO Company</div>
//               <div className="info__address">
//                 Address: Al-Sulay, Riyadh , Saudi-Arabia
//               </div>
//             </div>
//           </Popup>
//           <Tooltip>AITCO</Tooltip>
//         </Marker>
//       </LeafletMap>
//     </div>
//   );
// };

// export default Map;
