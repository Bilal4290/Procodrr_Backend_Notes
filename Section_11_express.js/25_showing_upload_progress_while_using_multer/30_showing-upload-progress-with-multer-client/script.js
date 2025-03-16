const form = document.querySelector("form");
const p = document.querySelector("p");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  formData.append("parentDirId", "alksdkjfjalsdflsjf");
  formData.append("name", "Anurag");
  formData.append("age", 98);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", `http://localhost:4000/upload`, true);
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    console.log(xhr.response);
  });

  xhr.upload.addEventListener("progress", (e) => {
    const totalProgress = (e.loaded / e.total) * 100;
    p.innerText = `Progress: ${totalProgress.toFixed(2)}%`;
  });

  xhr.send(formData);
});
