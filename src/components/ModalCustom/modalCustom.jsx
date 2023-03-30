import Modal from "react-modal";
import "./stylesModal.css";

const ModalCustom = ({ open, title, children, close = () => {} }) => {
  return (
    <div>
      <Modal
        isOpen={open}
        className="modal"
        onRequestClose={() => close()}
        contentLabel="Example Modal"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <h3>{title}</h3>
            </div>
            <button onClick={() => close()} style={{ all: "unset" }}>
              <h3>X</h3>
            </button>
          </div>

          <div>{children}</div>
          <div>
            <i> </i>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default ModalCustom;
