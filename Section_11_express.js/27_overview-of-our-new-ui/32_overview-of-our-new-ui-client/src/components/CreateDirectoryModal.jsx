import { useEffect, useRef } from "react";

function CreateDirectoryModal({
  newDirname,
  setNewDirname,
  onClose,
  onCreateDirectory,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus and select text only once on mount
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }

    // Listen for "Escape" key to close the modal
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup keydown event listener on unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Stop propagation when clicking inside the content
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  // Close when clicking outside the modal content
  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleContentClick}>
        <h2>Create a new directory</h2>
        <form onSubmit={onCreateDirectory}>
          <input
            ref={inputRef}
            type="text"
            className="modal-input"
            placeholder="Enter folder name"
            value={newDirname}
            onChange={(e) => setNewDirname(e.target.value)}
          />
          <div className="modal-buttons">
            <button className="primary-button" type="submit">
              Create
            </button>
            <button
              className="secondary-button"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateDirectoryModal;
