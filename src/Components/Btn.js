
function Btn({ handler, text }) {
  return (
    <button className="button" onClick={handler}>
      {text}
    </button>
  );
}

export default Btn;
