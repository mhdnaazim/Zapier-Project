import React, { useState } from "react";
import './Pagination.css'

const Pagination = () => {

    const employees = [
        { name: "Aarav Sharma", age: 22, designation: "Developer" },
        { name: "Neha Verma", age: 25, designation: "Designer" },
        { name: "Rohan Das", age: 28, designation: "Tester" },
        { name: "Priya Nair", age: 30, designation: "Manager" },
        { name: "Kabir Singh", age: 26, designation: "Developer" },
        { name: "Ishita Menon", age: 24, designation: "Designer" },
        { name: "Aditya Rao", age: 29, designation: "Tester" },
        { name: "Meera Pillai", age: 32, designation: "Manager" },
        { name: "Rahul Kapoor", age: 27, designation: "Developer" },
        { name: "Simran Kaur", age: 23, designation: "Designer" },
        { name: "Arjun Reddy", age: 31, designation: "Tester" },
        { name: "Divya Suresh", age: 35, designation: "Manager" },
        { name: "Vikram", age: 26, designation: "Developer" },
        { name: "Sneha Krishnan", age: 28, designation: "Designer" },
        { name: "Karan Mehta", age: 33, designation: "Tester" },
        { name: "Ananya Iyer", age: 29, designation: "Manager" },
        { name: "Siddharth Jain", age: 21, designation: "Developer" },
        { name: "Pooja Bhat", age: 24, designation: "Designer" },
        { name: "Harsh Vardhan", age: 30, designation: "Tester" },
        { name: "Ritika Sen", age: 34, designation: "Manager" },
        { name: "Manish Yadav", age: 27, designation: "Developer" },
        { name: "Kavya Ramesh", age: 25, designation: "Designer" },
        { name: "Nikhil Gupta", age: 32, designation: "Tester" },
        { name: "Shreya Patil", age: 36, designation: "Manager" },
        { name: "Varun Joshi", age: 23, designation: "Developer" },
        { name: "Aditi Kulkarni", age: 28, designation: "Designer" },
        { name: "Yash Chauhan", age: 31, designation: "Tester" },
        { name: "Tanvi Desai", age: 29, designation: "Manager" },
        { name: "Abhinav Mishra", age: 26, designation: "Developer" },
        { name: "Rhea Sebastian", age: 22, designation: "Designer" },
        { name: "Kunal Tiwari", age: 30, designation: "Tester" },
        { name: "Sanya", age: 34, designation: "Manager" },
        { name: "Arnav Ghosh", age: 27, designation: "Developer" },
        { name: "Fernandes", age: 25, designation: "Designer" },
        { name: "Dev Sharma", age: 32, designation: "Tester" },
        { name: "Ira Menon", age: 37, designation: "Manager" },
        { name: "Sameer Khan", age: 24, designation: "Developer" },
        { name: "Anjali Thomas", age: 29, designation: "Designer" },
        { name: "Rajat Bansal", age: 28, designation: "Tester" },
        { name: "Nisha Reddy", age: 33, designation: "Manager" },
        { name: "Parth Bhatt", age: 23, designation: "Developer" },
        { name: "Leena George", age: 26, designation: "Designer" },
        { name: "Ashwin Nair", age: 31, designation: "Tester" },
        { name: "Pallavi Mohan", age: 35, designation: "Manager" },
        { name: "Vivek Sethi", age: 27, designation: "Developer" },
        { name: "Roshni Paul", age: 22, designation: "Designer" },
        { name: "Akash Malviya", age: 30, designation: "Tester" },
        { name: "Gayatri Pillai", age: 34, designation: "Manager" },
        { name: "Omkar Jadhav", age: 28, designation: "Developer" },
        { name: "Trisha Roy", age: 25, designation: "Designer" }
    ];

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerpage = 5

    const totalPages = Math.ceil(employees.length / itemsPerpage);

    const startIndex = (currentPage - 1) * itemsPerpage
    const endIndex = startIndex + itemsPerpage
    const currentData = employees.slice(startIndex, endIndex)

    const gotoPage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    return (
        <>
            <div className="pagination-main">
                {currentData.map((item) => {
                    return (
                        <div className="pagination-cards">
                            <h5>{item.name}</h5>
                            <h6>Age: {item.age}</h6>
                            <p>{item.designation}</p>
                        </div>
                    )
                })}
            </div>
            <div className="pagination-btn">
                    <button  onClick={() => gotoPage(currentPage - 1)}>
                    Prev
                </button>
                <button  onClick={() => gotoPage(currentPage + 1)}>
                    Next
                </button>
                </div>
        </>
    )
}

export default Pagination