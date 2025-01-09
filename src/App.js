import { useEffect, useState } from "react";
import "./index.css";
import MyButton from './components/button'
import InputStep from "./stepinput";
import OutputBox from "./components/outputbox";

export default function MyCounterApp() {
  //dark mode functionality
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  }
  //get the theme from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme" || "light");
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const [count, setCount] = useState(1);
  const [countStep, setCountStep] = useState(1);
  function handleAddClick() {
    setCount(count + countStep);
  }
  function handleSubClick() {
    setCount(count - countStep);
  }
  function handleReset() {
    setCount(0);
  }
  function handleStepChange(e) {
    setCountStep(Number(e.target.value));
  }
  return (
    <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full sm:w-1/2 max-w-lg h-screen mt-10 border border-black rounded px-5 dark:border-gray-100">
        <button
          onClick={toggleTheme}
          className="absolute top-5 right-5 bg-gray-400 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-4 py-2 rounded"
        >
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <h1 className="text-3xl font-bold text-blue-600 text-center mt-5 font-serif dark:text-blue-300">
          My Counter App
        </h1>
        <div className="my-5 ">
          <InputStep stepCount={countStep} onStepChange={handleStepChange} />
        </div>
        <div className="max-w-screen-sm flex justify-between flex-col sm:flex-row">
          <MyButton sign={"+"} handleClick={handleAddClick} />
          <OutputBox count={count} />
          <MyButton sign={"-"} handleClick={handleSubClick} />
        </div>
        <div className="mt-5 flex justify-center">
          <MyButton sign={"Reset"} handleClick={handleReset} />
        </div>
      </div>
    </div>
  );
}





