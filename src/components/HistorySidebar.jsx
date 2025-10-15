function HistorySidebar({ searchHistory, clearHistory, onSelectHistory }) {
  
  return (
    <div className="col-span-1 dark:bg-zinc-800 bg-red-200 pt-3">
      <h1 className="text-xl dark:text-white text-blue-600 flex justify-center">
        <span className="mr-5">Recent History</span>
        <button className='cursor-pointer' onClick={clearHistory}>
          <svg
          className="dark:bg-transparent bg-black"
            xmlns="http://www.w3.org/2000/svg"
            height="23px"
            viewBox="0 -960 960 960"
            width="23px"
            fill="#e3e3e3"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        </button>
      </h1>
      <ul className="text-left overlow-auto mt-2">
        {searchHistory &&
          searchHistory.map((item, index) => (
            <li
              onClick={() => onSelectHistory(item)}
              key={index}
              className="p-1 pl-3 truncate dark:text-zinc-300 text-stone-700 hover:cursor-pointer dark:hover:bg-zinc-700 hover:bg-zinc-400  dark:hover:text-zinc-200 hover:text-white "
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HistorySidebar;
