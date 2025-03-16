import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DirectoryView() {
  const BASE_URL = "http://localhost:4000";
  const [directoriesList, setDirectoriesList] = useState([]);
  const [filesList, setFilesList] = useState([]);
  const [progress, setProgress] = useState(0);
  const [newFilename, setNewFilename] = useState("");
  const [newDirname, setNewDirname] = useState("");
  const { dirId } = useParams();

  async function getDirectoryItems() {
    const response = await fetch(`${BASE_URL}/directory/${dirId || ""}`);
    const data = await response.json();
    // setDirectoryItems(data);
    setDirectoriesList(data.directories);
    setFilesList(data.files);
  }
  useEffect(() => {
    getDirectoryItems();
  }, [dirId]);

  async function uploadFile(e) {
    const file = e.target.files[0];
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${BASE_URL}/file/${dirId || ""}`, true);
    xhr.setRequestHeader("filename", file.name);
    xhr.addEventListener("load", () => {
      console.log(xhr.response);
      getDirectoryItems();
    });
    xhr.upload.addEventListener("progress", (e) => {
      const totalProgress = (e.loaded / e.total) * 100;
      setProgress(totalProgress.toFixed(2));
    });
    xhr.send(file);
  }

  async function handleDelete(fileId) {
    const response = await fetch(`${BASE_URL}/file/${fileId}`, {
      method: "DELETE",
    });
    const data = await response.text();
    console.log(data);
    getDirectoryItems();
  }

  async function handleDeleteDir(dirID) {
    const response = await fetch(`${BASE_URL}/directory/${dirID}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    getDirectoryItems();
  }

  async function renameFile(oldFilename) {
    console.log({ oldFilename, newFilename });
    setNewFilename(oldFilename);
  }

  async function saveFilename(fileId) {
    const response = await fetch(`${BASE_URL}/file/${fileId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newFilename }),
    });
    const data = await response.text();
    console.log(data);
    setNewFilename("");
    getDirectoryItems();
  }

  async function saveDir(dirId) {
    const response = await fetch(`${BASE_URL}/directory/${dirId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newDirName: newFilename }),
    });
    const data = await response.text();
    console.log(data);
    setNewFilename("");
    getDirectoryItems();
  }

  async function handleCreateDirectory(e) {
    e.preventDefault();
    const url = `${BASE_URL}/directory/${dirId || ""}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        dirname: newDirname,
      },
    });
    const data = await response.json();
    console.log(data);
    setNewDirname("");
    getDirectoryItems();
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>My Files</h1>
        <div
          style={{
            display: "flex",
            gap: 12,
          }}
        >
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <input type="file" onChange={uploadFile} />
      <input
        type="text"
        onChange={(e) => setNewFilename(e.target.value)}
        value={newFilename}
      />
      <p>Progress: {progress}%</p>
      <form onSubmit={handleCreateDirectory}>
        <input
          type="text"
          onChange={(e) => setNewDirname(e.target.value)}
          value={newDirname}
        />
        <button>Create Folder</button>
      </form>
      {directoriesList.map(({ name, id }) => (
        <div key={id}>
          {name} <Link to={`/directory/${id}`}>Open</Link>{" "}
          <button onClick={() => renameFile(name)}>Rename</button>
          <button onClick={() => saveDir(id)}>Save</button>
          <button
            onClick={() => {
              handleDeleteDir(id);
            }}
          >
            Delete
          </button>
          <br />
        </div>
      ))}
      {filesList.map(({ name, id }) => (
        <div key={id}>
          {name} <a href={`${BASE_URL}/file/${id}`}>Open</a>{" "}
          <a href={`${BASE_URL}/file/${id}?action=download`}>Download</a>
          <button onClick={() => renameFile(name)}>Rename</button>
          <button onClick={() => saveFilename(id)}>Save</button>
          <button
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </button>
          <br />
        </div>
      ))}
    </>
  );
}

export default DirectoryView;
