
import { Link } from "react-router-dom";
const TopBanner = () => {
  return (
    <div className="bg-purple text-white py-2 text-center text-sm">
      <div className="container mx-auto px-4">
        Sell on Our System: <span className="text-black"><Link to="/seller-request" className="text-sm hover:underline">
                  Join as a Seller
                </Link></span>
      </div>
    </div>
  );
};

export default TopBanner;
