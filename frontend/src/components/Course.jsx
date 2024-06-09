import React, {useState, useEffect} from "react";
import axios from "axios";
import Cards from './Cards'; // Ensure this path is correct
import { Link } from "react-router-dom"

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book"); // Corrected URL
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className =" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=" mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We Are Delighted To Have You { " "}
            <span className = "text-pink-500">Here :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ipsa quae repudiandae labore esse impedit blanditiis obcaecati illo. Adipisci sapiente, ratione necessitatibus atque perferendis fugit repudiandae architecto provident quae nihil?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veniam tenetur totam hic ullam provident.
          </p>
          <Link to ="/">
          <button className =" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
        </div>
        <div className ="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            book.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
