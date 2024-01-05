let Button = ({ text, style, type, change, change1 }) => {
  let handleClick = () => {
    change();
    change1();
  };
  return (
    <div>
      <button
        type={type}
        className={`bg-blue-600 text-white rounded-md text-2xl ${style}`}
        onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};
export default Button;
