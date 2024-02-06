function ButtonBox({label, onClick}) {
  return (
    <button className="p-2 text-2xl text-white bg-black rounded-lg text-center w-full" onClick={onClick}>{label}</button>
  )
}

export default ButtonBox