const title = document.querySelector(".title");
const dateTime = document.querySelector(".date-time");
const loc = document.querySelector(".location");
const author = document.querySelector(".author");
const deviceInfo = document.querySelector(".device-info");
const inpFile = document.querySelector("#inpFile");
const previewContainer = document.getElementById("imagePreview");
const previewImage = previewContainer.querySelector(".image-preview");
// var uploaded_image = "";

const renderTitle = document.querySelector("#title");
const renderDate = document.querySelector("#date");
const renderLocation = document.querySelector("#location");
const renderAuthor = document.querySelector("#author");
const renderDeviceInfo = document.querySelector("#device-info");

renderTitle.addEventListener("change", (e) => {
  title.textContent = renderTitle.value;
});

renderDate.addEventListener("change", (e) => {
  renderDate.textContent = dateTime.value;
  console.log(renderDate.value);
  dateTime.textContent = renderDate.value;
});

renderLocation.addEventListener("change", (e) => {
  loc.textContent = renderLocation.value;
});

renderAuthor.addEventListener("change", (e) => {
  author.textContent = renderAuthor.value;
});

renderDeviceInfo.addEventListener("change", (e) => {
  deviceInfo.textContent = renderDeviceInfo.value;
});

// image.addEventListener("change", (e) => {
//   const reader = new FileReader();
//   reader.addEventListener("click", () => {
//     uploaded_image = reader.result;
//     console.log(uploaded_image);
//     document.querySelector(
//       ".image"
//     ).style.backgroundImage = `url(${uploaded_image})`;
//   });
//   reader.readAsDataURL(this.files[0]);
// });

inpFile.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    previewImage.style.display = "block";

    reader.addEventListener("load", function () {
      console.log(this);
      previewImage.setAttribute("src", this.result);
    });
    reader.readAsDataURL(file);
  }
});
