import ReactDom from "react-dom";

const Modal = (props) => {
  const { showExerciseDescripton, handleCloseModal } = props;
  const { name, description } = showExerciseDescripton || {};
  return ReactDom.createPortal(
    <div className="modal-container">
      <button className="modal-underlay" onClick={handleCloseModal} />
      <div className="modal-content">
        <div>
          <h6>Name</h6>
          <h2 className="skill-name">{name.replaceAll('-','')}</h2>
        </div>
        <div>
          <h6>Description</h6>
          <p>{description}</p>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
