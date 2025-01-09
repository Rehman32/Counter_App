export default function OutputBox({ count }) {
  return (
    <div className="block bg-blue-100 dark:bg-gray-700 border-gray-700 dark:text-white dark:border-gray-300 p-5 w-full text-center font-semibold text-2xl  shadow-inner focus:border-none">
      {count}
    </div>
  );
}
