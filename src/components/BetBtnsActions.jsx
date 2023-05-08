
const BetBtnsActions = ({handleClick}) => {
  return (
    <>
      <button
        type="button"
        className="footer-btn toggle-modal-btn "
        data-bs-toggle="modal"
        data-bs-target="#confirmBetmatchesModal"
        onClick={handleClick}
      >
        تأكيد المراهنة
      </button>
      
      <button type="button" className="footer-btn ">
        المراهنة بالتفاصيل
      </button>
    </>
  );
};

export default BetBtnsActions;
