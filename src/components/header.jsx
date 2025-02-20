import React from "react";
import { Link } from "react-router-dom";

const Header = ({ navigation }) => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-2xl font-semibold text-gray-900">
              BANTU
            </Link>
          </div>
          <div className="flex space-x-4">
            {navigation.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="text-gray-600 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
