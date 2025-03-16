import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DirectoryHeader from "./components/DirectoryHeader";
import CreateDirectoryModal from "./components/CreateDirectoryModal";
import RenameModal from "./components/RenameModal";
import DirectoryList from "./components/DirectoryList";
import "./DirectoryView.css";

function DirectoryView() {
  const BASE_URL = "http://localhost:4000";
  const { dirId } = useParams();
  const navigate = useNavigate();

  // Displayed directory name
  const [directoryName, setDirectoryName] = useState("My Drive");

  // Lists of items
  const [directoriesList, setDirectoriesList] = useState([]);
  const [filesList, setFilesList] = useState([]);

  // Modal states
  const [showCreateDirModal, setShowCreateDirModal] = useState(false);
  const [newDirname, setNewDirname] = useState("New Folder");

  const [showRenameModal, setShowRenameModal] = useState(false);
  const [renameType, setRenameType] = useState(null); // "directory" or "file"
  const [renameId, setRenameId] = useState(null);
  const [renameValue, setRenameValue] = useState("");

  // Uploading states
  const fileInputRef = useRef(null);
  const [uploadQueue, setUploadQueue] = useState([]); // queued items to upload
  const [uploadXhrMap, setUploadXhrMap] = useState({}); // track XHR per item
  const [progressMap, setProgressMap] = useState({}); // track progress per item
  const [isUploading, setIsUploading] = useState(false); // indicates if an upload is in progress

  // Context menu
  const [activeContextMenu, setActiveContextMenu] = useState(null);
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });

  /**
   * Fetch directory contents
   */
  async function getDirectoryItems() {
    const response = await fetch(`${BASE_URL}/directory/${dirId || ""}`);
    const data = await response.json();

    // Set directory name
    if (data.name) {
      setDirectoryName(dirId ? data.name : "My Drive");
    } else {
      setDirectoryName("My Drive");
    }

    // Reverse the directories and files so new items are on top
    const reversedDirs = [...data.directories].reverse();
    const reversedFiles = [...data.files].reverse();
    setDirectoriesList(reversedDirs);
    setFilesList(reversedFiles);
  }

  useEffect(() => {
    getDirectoryItems();
    // Reset context menu
    setActiveContextMenu(null);
  }, [dirId]);

  /**
   * Decide file icon
   */
  function getFileIcon(filename) {
    const ext = filename.split(".").pop().toLowerCase();
    switch (ext) {
      case "pdf":
        return "pdf";
      case "png":
      case "jpg":
      case "jpeg":
      case "gif":
        return "image";
      case "mp4":
      case "mov":
      case "avi":
        return "video";
      case "zip":
      case "rar":
      case "tar":
      case "gz":
        return "archive";
      case "js":
      case "jsx":
      case "ts":
      case "tsx":
      case "html":
      case "css":
      case "py":
      case "java":
        return "code";
      default:
        return "alt";
    }
  }

  /**
   * Click row to open directory or file
   */
  function handleRowClick(type, id) {
    if (type === "directory") {
      navigate(`/directory/${id}`);
    } else {
      window.location.href = `${BASE_URL}/file/${id}`;
    }
  }

  /**
   * Select multiple files
   */
  function handleFileSelect(e) {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length === 0) return;

    // Build a list of "temp" items
    const newItems = selectedFiles.map((file) => {
      const tempId = `temp-${Date.now()}-${Math.random()}`;
      return {
        file,
        name: file.name,
        id: tempId,
        isUploading: false,
      };
    });

    // Put them at the top of the existing list
    setFilesList((prev) => [...newItems, ...prev]);

    // Initialize progress=0 for each
    newItems.forEach((item) => {
      setProgressMap((prev) => ({ ...prev, [item.id]: 0 }));
    });

    // Add them to the uploadQueue
    setUploadQueue((prev) => [...prev, ...newItems]);

    // Clear file input so the same file can be chosen again if needed
    e.target.value = "";

    // Start uploading queue if not already uploading
    if (!isUploading) {
      setIsUploading(true);
      // begin the queue process
      processUploadQueue([...uploadQueue, ...newItems.reverse()]);
    }
  }

  /**
   * Upload items in queue one by one
   */
  function processUploadQueue(queue) {
    if (queue.length === 0) {
      // No more items to upload
      setIsUploading(false);
      setUploadQueue([]);
      setTimeout(() => {
        getDirectoryItems();
      }, 1000);
      return;
    }

    // Take first item
    const [currentItem, ...restQueue] = queue;

    // Mark it as isUploading: true
    setFilesList((prev) =>
      prev.map((f) =>
        f.id === currentItem.id ? { ...f, isUploading: true } : f
      )
    );

    // Start upload
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${BASE_URL}/file/${dirId || ""}`, true);
    xhr.setRequestHeader("filename", currentItem.name);

    xhr.upload.addEventListener("progress", (evt) => {
      if (evt.lengthComputable) {
        const progress = (evt.loaded / evt.total) * 100;
        setProgressMap((prev) => ({ ...prev, [currentItem.id]: progress }));
      }
    });

    xhr.addEventListener("load", () => {
      // Move on to the next item
      processUploadQueue(restQueue);
    });

    // If user cancels, we also remove from the queue
    setUploadXhrMap((prev) => ({ ...prev, [currentItem.id]: xhr }));
    xhr.send(currentItem.file);
  }

  /**
   * Cancel an in-progress upload
   */
  function handleCancelUpload(tempId) {
    const xhr = uploadXhrMap[tempId];
    if (xhr) {
      xhr.abort();
    }
    // Remove it from queue if it’s still there
    setUploadQueue((prev) => prev.filter((item) => item.id !== tempId));

    // Remove from the filesList
    setFilesList((prev) => prev.filter((f) => f.id !== tempId));

    // Remove from progressMap
    setProgressMap((prev) => {
      const { [tempId]: _, ...rest } = prev;
      return rest;
    });

    // Remove from Xhr map
    setUploadXhrMap((prev) => {
      const copy = { ...prev };
      delete copy[tempId];
      return copy;
    });
  }

  /**
   * Delete a file/directory
   */
  async function handleDeleteFile(id) {
    await fetch(`${BASE_URL}/file/${id}`, {
      method: "DELETE",
    });
    getDirectoryItems();
  }

  async function handleDeleteDirectory(id) {
    await fetch(`${BASE_URL}/directory/${id}`, {
      method: "DELETE",
    });
    getDirectoryItems();
  }

  /**
   * Create a directory
   */
  async function handleCreateDirectory(e) {
    e.preventDefault();
    await fetch(`${BASE_URL}/directory/${dirId || ""}`, {
      method: "POST",
      headers: {
        dirname: newDirname,
      },
    });
    setNewDirname("New Folder");
    setShowCreateDirModal(false);
    getDirectoryItems();
  }

  /**
   * Rename
   */
  function openRenameModal(type, id, currentName) {
    setRenameType(type);
    setRenameId(id);
    setRenameValue(currentName);
    setShowRenameModal(true);
  }

  async function handleRenameSubmit(e) {
    e.preventDefault();
    if (renameType === "file") {
      await fetch(`${BASE_URL}/file/${renameId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newFilename: renameValue }),
      });
    } else {
      await fetch(`${BASE_URL}/directory/${renameId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newDirName: renameValue }),
      });
    }

    setShowRenameModal(false);
    setRenameValue("");
    setRenameType(null);
    setRenameId(null);
    getDirectoryItems();
  }

  /**
   * Context Menu
   */
  function handleContextMenu(e, id) {
    e.stopPropagation();
    e.preventDefault();
    const clickX = e.clientX;
    const clickY = e.clientY;

    if (activeContextMenu === id) {
      setActiveContextMenu(null);
    } else {
      setActiveContextMenu(id);
      setContextMenuPos({ x: clickX - 110, y: clickY });
    }
  }

  useEffect(() => {
    function handleDocumentClick() {
      setActiveContextMenu(null);
    }
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  // Combine directories & files into one list for rendering
  const combinedItems = [
    ...directoriesList.map((d) => ({ ...d, isDirectory: true })),
    ...filesList.map((f) => ({ ...f, isDirectory: false })),
  ];

  return (
    <div className="directory-view">
      <DirectoryHeader
        directoryName={directoryName}
        onCreateFolderClick={() => setShowCreateDirModal(true)}
        onUploadFilesClick={() => fileInputRef.current.click()}
        fileInputRef={fileInputRef}
        handleFileSelect={handleFileSelect}
      />

      {/* Create Directory Modal */}
      {showCreateDirModal && (
        <CreateDirectoryModal
          newDirname={newDirname}
          setNewDirname={setNewDirname}
          onClose={() => setShowCreateDirModal(false)}
          onCreateDirectory={handleCreateDirectory}
        />
      )}

      {/* Rename Modal */}
      {showRenameModal && (
        <RenameModal
          renameType={renameType}
          renameValue={renameValue}
          setRenameValue={setRenameValue}
          onClose={() => setShowRenameModal(false)}
          onRenameSubmit={handleRenameSubmit}
        />
      )}

      {/* If folder is empty */}
      {combinedItems.length === 0 ? (
        <p className="no-data-message">
          This folder is empty. Upload files or create a folder to see some
          data.
        </p>
      ) : (
        <DirectoryList
          items={combinedItems}
          handleRowClick={handleRowClick}
          activeContextMenu={activeContextMenu}
          contextMenuPos={contextMenuPos}
          handleContextMenu={handleContextMenu}
          getFileIcon={getFileIcon}
          isUploading={isUploading}
          progressMap={progressMap}
          handleCancelUpload={handleCancelUpload}
          handleDeleteFile={handleDeleteFile}
          handleDeleteDirectory={handleDeleteDirectory}
          openRenameModal={openRenameModal}
          BASE_URL={BASE_URL}
        />
      )}
    </div>
  );
}

export default DirectoryView;
