// import { useEffect } from "react"
// import axios from 'axios';
// import './App.css'

// function App() {

//     useEffect(() => {
//         (async () => {
//             const data = await axios.get('./F-C0032-001.json');
//             // const { location } = data.data.cwaopendata.dataset;
            
//         })
//     }, [])

//     return (
//         <>
//             < div className="wrap">
//                 <h2>36小時天氣預報</h2>
//                 {/* 一列兩欄 */}
//                 < div className="row">
//                     <div className="col">
//                         {/* 卡片樣式 */}
//                         <div className="card">
//                             {/* 標題 */}
//                             <div className="card-title">臺北市</div>
//                             {/* 內容 */}
//                             <div className="card-body">
//                                 {/* 一式三欄 */}
//                                 <div className="row2">
//                                     {/* 第一欄 */}
//                                     <div className="col2">
//                                         <p> 2日</p>
//                                         <p>
//                                             上午6:00 <br />
//                                             ~<br />
//                                             下午6:00
//                                         </p>
//                                         <p>
//                                             <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
//                                         </p>
//                                         <p>晴時多雲</p>
//                                         <p>10%</p>
//                                     </div>

//                                     {/* 第二欄 */}
//                                     <div className="col2">
//                                         <p> 2日</p>
//                                         <p>
//                                             上午6:00 <br />
//                                             ~<br />
//                                             下午6:00
//                                         </p>
//                                         <p>
//                                             <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
//                                         </p>
//                                         <p>晴時多雲</p>
//                                         <p>10%</p>
//                                     </div>

//                                     {/* 第三欄 */}
//                                     <div className="col2">
//                                         <p> 2日</p>
//                                         <p>
//                                             上午6:00 <br />
//                                             ~<br />
//                                             下午6:00
//                                         </p>
//                                         <p>
//                                             <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
//                                         </p>
//                                         <p>晴時多雲</p>
//                                         <p>10%</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col">
//                         {/* 卡片樣式 */}
//                         <div className="card">
//                             {/* 標題 */}
//                             <div className="card-title">臺北市</div>
//                             {/* 內容 */}
//                             <div className="card-body">
//                                 {/* 一式三欄 */}
//                                 <div className="row2">
//                                     {/* 第一欄 */}
//                                     <div className="col2">
//                                         <p> 2日</p>
//                                         <p>
//                                             上午6:00 <br />
//                                             ~<br />
//                                             下午6:00
//                                         </p>
//                                         <p>
//                                             <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
//                                         </p>
//                                         <p>晴時多雲</p>
//                                         <p>10%</p>
//                                     </div>

//                                     {/* 第二欄 */}
//                                     <div className="col2">
//                                         <p> 2日</p>
//                                         <p>
//                                             上午6:00 <br />
//                                             ~<br />
//                                             下午6:00
//                                         </p>
//                                         <p>
//                                             <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
//                                         </p>
//                                         <p>晴時多雲</p>
//                                         <p>10%</p>
//                                     </div>

//                                     {/* 第三欄 */}
//                                     <div className="col2">
//                                         <p> 2日</p>
//                                         <p>
//                                             上午6:00 <br />
//                                             ~<br />
//                                             下午6:00
//                                         </p>
//                                         <p>
//                                             <img src="./public/weatherIcon/晴時多雲.svg" alt="" />
//                                         </p>
//                                         <p>晴時多雲</p>
//                                         <p>10%</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div >
//             </div >

//         </>
//     )
// }



// export default App