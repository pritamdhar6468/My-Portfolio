import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="p-[10rem] bakground  ">
      <div className="flex justify-center item-center text-5xl pb-8  font-bold ">
        <h1>Contact</h1>
      </div>
      <div className="flex  gap-10">
        <div className="border-2 bg-green-400 p-[2rem] h-full w-[40%] flex items-center justify-center rounded-lg shadow-lg">
          <form action="">
            <label htmlFor="name" className="text-xl font-mono font-bold">
              Name:
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              className="rounded-md  bg-gray-200 w-full h-10 "
            />
            <br />
            <label htmlFor="email" className="text-xl font-mono font-bold">
              Email:
            </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              className="rounded-md bg-gray-200  w-full h-10"
            />
            <br />

            <label htmlFor="textarea" className="text-xl font-mono font-bold">
              Message:
            </label>
            <br />
            <textarea
              name="textarea"
              id=""
              cols="20"
              rows="5"
              className="w-full bg-gray-200  h-auto"
            ></textarea>

            <button
              type="button"
              value="submit"
              className="border-2 w-32 p-2 rounded-md bg-green-900 text-white font-mono font-bold hover:cursor-pointer w-full"
            >Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
