"use client";
import React from "react";
import { createPortal } from "react-dom";
import  { useState,useRef,useEffect } from "react";
import Navbar from "@/comps/navbar";
import { redirect } from 'next/navigation'


const Attendenceform = ({className}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let questionLength = questionRefs.current.length;
    let passwordLength = passwordRefs.current.length;
    (questionLength === passwordLength )?null:
    console.error("Some Error occured");
    let a = 
    {
      link:"link",
      time:"time",
      totalQuestions:"total ques",
      questions:[
        {
        index:1,
        statement:"statement",
        answer:"answer"
      },
      {
        index:2,
        statement:"statement",
        answer:"answer"
      }
      ]
    }
    
  }


  let linkRef = useRef("");
  let timeRef = useRef("");
  let expRef = useRef("");
  let questionRefs = useRef([]);
  let [questions, setQuestions] = useState(
    [
      {
        index:1,
        question:"", 
        answer:""
      }
    ]
  ); 


    return(
    <>
    <div className={`w-full flex justify-center  items-center ${className}`}>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md w-[400px]">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Submit a Link</h2>
      <div className="mb-4">
        <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-2">
          Enter your link:
        </label>
        <input
          placeholder="https://example.com"
          ref={linkRef}
          required
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-2">
          Enter time:
        </label>
        <input
          required
          ref={timeRef}
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
      </div>




      {
      questions.map((question)=>{
        return (
        <div className="mb-4" key={question.index} >
        <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-2">
          Question
        </label>
        <input
        type="text"
          ref={questionRefs[question.length]}
          required
          // defaultValue={"Example Question"}
          // value={question.question}
          

          onChange={(e)=>{
            console.log("questions: ",JSON.stringify(questions))
            setQuestions((_questions)=>{
              let questionsCopy = _questions;
              _questions.pop();
              return [..._questions, {
                index:questionsCopy.length,
                question:e.target.value,
                answer:questions[questions.length-1].answer
              }]
            });
          }}
          

          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
        <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-2">
          Answer
        </label>
        <input
          type="text"
          required
          defaultValue={"Example Question"}
          // value={question.answer}
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
        />
      </div>)
      })
      }







      <button type="Button" className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-300"
       onClick={()=>{
          
        setQuestions((prevQues)=>{
          return [
            ...prevQues, {
            index:questions.length+1,
            question:"",
            answer:""
          }]

        }); 


      }}>Add More questions</button>
      <button
        type="submit"
        className="mt-7 w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors duration-300"
      >
        Submit
      </button>
    </form>
    </div>
    </>
  );
}

function Home() {
  //redrections
    useEffect(() => {
      if (!document.cookie) {
        // router.push("/login"); // Redirect to the login page or any other page
        redirect(`/login`);
      }
      else{
        // router.push("/attendence");
      }
    }, []);
    //done

  return (
    <>
    <Navbar/>
    <Attendenceform />
    </>
  )
  }

  export default Home;