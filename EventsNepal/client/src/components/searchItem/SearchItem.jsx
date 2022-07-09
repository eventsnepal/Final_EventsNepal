import "./searchItem.css"
import {Link} from "react-router-dom";

function SearchItem({item}) {
  return (
    <div className="searchItem">
        <img src={item.photos[0]}
         alt="" 
         className="siImg" 
         />
         <div className="siDesc">
             <h1 className="siTitle">{item.name}</h1>
             <span className="siDistance">{item.distance}</span>
             <span className="siTaxiOp">Taxi available</span>
             <span className="siSubtitle">
                 Great Party Veneu with good environment!!!
             </span>
             <span className="siFeatures">{item.desc}
             </span>
             <span className="siCancelOp">Free Cancellation</span>
             <span className="siCancelOpSubtitle">
                 You can cancle later, so lock in this great price today!
             </span>
         </div>
         <div className="siDetails">
             {item.rating && <div className="siRating">
                 <span>Excellent</span>
                 <button>{item.rating}</button>
             </div>}
             <div className="siDetailTexts">
                 <span className="siPrice">${item.cheapestPrice}</span>
                 <span className="siTaxOp">Includes taxes and fees</span>
                 <Link to={`/partyPalaces/${item._id}`}>
                 <button className="siCheckButton">See availability</button>
                 </Link>
             </div>
         </div>
    </div>
  )
}

export default SearchItem