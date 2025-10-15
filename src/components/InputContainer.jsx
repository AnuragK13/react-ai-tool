function InputContainer({ onHandleClick, enteredInput, onChangeInput }) {
  
  function isEnter(event) {
    if(event.key === 'Enter') {
      onHandleClick();
    }
  }

  return (
    <>
      <div className="dark:bg-zinc-800 bg-yellow-200 w-1/2 m-auto dark:text-white text-zinc-800 rounded-4xl border-zinc-700 border flex h-16 pr-6">
        <input
          type="text"
          value={enteredInput}
          onChange={onChangeInput}
          onKeyDown={isEnter}
          className="w-full h-full p-3 outline-none"
          placeholder="Ask me anything"
        />
        <button onClick={onHandleClick}>Ask</button>
      </div>
    </>
  );
}

export default InputContainer;
