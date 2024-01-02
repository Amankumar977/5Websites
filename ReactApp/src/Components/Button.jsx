let Button = ({ text }) => {
  let clickBtn = () => {
    alert("Thanks for clicking the details have been sent on your email");
  };
  return (
    <>
      <button onClick={clickBtn}>{text}</button>
    </>
  );
};
export default Button;
