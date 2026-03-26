function convertImage() {
  const fileInput = document.getElementById("upload");
  const format = document.getElementById("format").value;

  if (!fileInput.files.length) {
    alert("Please select an image");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const img = new Image();

    img.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const converted = canvas.toDataURL(format);

      const link = document.getElementById("download");

      link.href = converted;
      link.download = "converted-image";
      link.style.display = "inline";
      link.innerText = "Download Converted Image";
    };

    img.src = event.target.result;
  };

  reader.readAsDataURL(file);
}
