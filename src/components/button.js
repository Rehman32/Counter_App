export default function MyButton({ sign, handleClick }) {
    return (
      <button
        className="bg-blue-500 dark:bg-blue-300 py-4 px-8 rounded text-white  dark:text-gray-900 font-bold hover:bg-blue-600 dark:hover:bg-blue-400 transition"
        onClick={handleClick}
      >
        {sign}
      </button>
    );
  }