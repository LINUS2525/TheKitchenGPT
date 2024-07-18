import { useState } from "react";
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";


const user = { _id: "dvdv",role:""};
const Header = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  //as soon as we click logout button the dialog box closes
  const logoutHandler = ()=>{
        setIsOpen(false);
  };

  return(
   <nav className="header">
    {/* onClick={() => setIsOpen(false)} is used to close the dialog box as soon as we navigate */}
    <Link onClick={() => setIsOpen(false)} to={"/"}
    >The Kitchen GPT</Link>
    <Link onClick={() => setIsOpen(false)}  to={"/search"}>
         <FaSearch />
    </Link>
    <Link onClick={() => setIsOpen(false)} to={"/cart"}>
         <FaShoppingBag />
    </Link>
    
{
    user?._id? (
        <>
        <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
        </button>
        <dialog open={isOpen}>
            
            <div>
                {
                    user.role === "admin" && (
                        <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">Admin</Link>
                    )
                }
                <Link onClick={() => setIsOpen(false)} to="/orders">Orders</Link>
                <button onClick={logoutHandler}>
                    <FaSignOutAlt />
                </button>
            </div>

        </dialog>
        </>
    ) : <Link to={"/login"}>
        <FaSignInAlt />
    </Link>
}

  </nav>
  );
};
export default Header;