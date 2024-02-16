function InputBox({ id, label, type, placeholder, inputHandler }) {
  return (
    <div className="space-y-2">
      <div>
        <label htmlFor={id} className="font-medium text-2xl">
          {label}
        </label>
      </div>
      <div>
        <input
          type={type}
          name={id}
          id={id}
          placeholder={placeholder}
          onChange={inputHandler}
          className="border-2 border-gray-500 rounded-md px-3 py-2 w-full"
        />
      </div>
    </div>
  );
}

export default InputBox;