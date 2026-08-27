import React from "react";

function Summary() {
    return (
        <>
            <div className="pending-expenses-container bg-[#1E1E1E] p-6 rounded-lg shadow-md grid grid-cols-2 gap-6">
                <div className="pending-tasks bg-[#2A2A2A] p-4 rounded-md">
                    <h2 className="text-gray-300 text-lg font-semibold mb-3">Pending Tasks</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li className="flex justify-between">
                            <span>Pending Approvals</span>
                            <span className="text-white font-medium">5</span>
                        </li>
                        <li className="flex justify-between">
                            <span>New Trips Registered</span>
                            <span className="text-white font-medium">1</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Unreported Expenses</span>
                            <span className="text-white font-medium">4</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Upcoming Expenses</span>
                            <span className="text-white font-medium">0</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Unreported Advances</span>
                            <span className="text-white font-medium">$0.00</span>
                        </li>
                    </ul>
                </div>

                {/* Recent Expenses */}
                <div className="recent-expenses bg-[#2A2A2A] p-4 rounded-md">
                    <h2 className="text-gray-300 text-lg font-semibold mb-3">Recent Expenses</h2>
                    <table className="w-full text-gray-400 text-sm">
                        <thead>
                            <tr className="text-gray-500 border-b border-gray-700">
                                <th className="text-left py-2">Subject</th>
                                <th className="text-left py-2">Employee</th>
                                <th className="text-left py-2">Team</th>
                                <th className="text-right py-2">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Office Supplies</td>
                                <td>John Smith</td>
                                <td className="text-left text-white">Marketing</td>
                                <td className="text-left text-white">$150.00</td>
                            </tr>
                            <tr>
                                <td>Business Lunch</td>
                                <td>Sarah Jade</td>
                                <td className="text-left text-white">Operations</td>
                                <td className="text-left text-white">$75.50</td>
                            </tr>
                            <tr>
                                <td>Travel Expenses</td>
                                <td>Mike Brown</td>
                                <td className="text-left text-white">Development</td>
                                <td className="text-left text-white">$450.25</td>
                            </tr>
                            <tr>
                                <td>Client Dinner</td>
                                <td>Jennifer Lee</td>
                                <td className="text-left text-white">Marketing</td>
                                <td className="text-left text-white">$120.00</td>
                            </tr>
                            <tr>
                                <td>Hotel</td>
                                <td>David Wilson</td>
                                <td className="text-left text-white">Finance</td>
                                <td className="text-left text-white">$275.75</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </>


    );
}

export default Summary;
