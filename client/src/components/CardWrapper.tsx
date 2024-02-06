function CardWrapper({ children }) {
  return (
    <div>
      <div className="border-2 m-2 p-2 rounded-lg ">{children}</div>
    </div>
  );
}

export default CardWrapper;
