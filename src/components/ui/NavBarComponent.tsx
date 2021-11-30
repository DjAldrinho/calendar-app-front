import React from "react";
import moment from "moment";

function NavBarComponent() {
    return (
        <div className="w-full py-2 bg-gray-800 shadow-sm">
            <div className="flex flex-row ml-2 justify-between align-middle items-center text-white">
                <div>
                    {moment().format("MMMM DD, YYYY")}
                </div>
                <div>
                    Welcome, Aldrinho
                </div>
                <div className="flex flex-row">
                    <div className="px-4 py-2 hover:text-white hover:bg-white hover:text-gray-800
                     cursor-pointer mr-2 border border-white rounded-lg">
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBarComponent;
