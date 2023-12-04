import Signin from "./Users/signin";
import { Routes, Route, Navigate,Link } from "react-router-dom";
import Account from "./Users/account";
import UserTable from "./Users/table";
import Signup from "./Users/signup";

function Project() {
  return (
    <div className="row">
      <div className="col-2">

      <div className="list-group">
            <Link to="/project/" className="list-group-item">
              Home
            </Link>
            <Link to="/project/signin" className="list-group-item">
              Signin
            </Link>
            <Link to="/project/signup" className="list-group-item">
              Signup
            </Link>
            <Link to="/project/account" className="list-group-item">
              Account
            </Link>
            
        </div>
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/account" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/account/:id" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}
export default Project;