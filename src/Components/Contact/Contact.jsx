import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="p-[10rem] bg-gray-300 gap-20 ">
      <div className="flex justify-center item-center text-5xl pb-8 text-gray-500  font-bold "><h1>Contact</h1></div>
      <div className="flex gap-10">
        
        
          <img
            src="contact.jpg"
            alt=""
            className="h-96 w-96 rounded shadow-md"
          />
        
        
          <div className="border-2 p-[2rem] h-full w-full">
            <form action="">
              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                className="rounded-md text-4xl "
              />
              <br />
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                className="rounded-md text-4xl"
              />
              <br />

              <label htmlFor="textarea">Message:</label>
              <br />
              <textarea
                name="textarea"
                id=""
                cols="20"
                rows="5"
                className="w-full h-auto"
              ></textarea>

              <input
                type="button"
                value="submit"
                className="border-2 p-2 rounded-md bg-green-500 w-full"
              />
            </form>
          </div>
        
      </div>
    </section>
  );
}

export default Contact;
