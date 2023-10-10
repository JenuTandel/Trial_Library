import { generateImageContainer, displayData } from "../lib/index.js";

const explanationsJS = [
  {
    label: "JavaScriptLogo",
    labelPosition: {
      bottom: "-70px",
      left: "25px",
    },
    arrowPosition: {
      height: "75px",
      left: "50px",
      bottom: "30px",
    },
  },
  {
    label: "JS Course Name",
    labelPosition: {
      bottom: "-60px",
      right: "0px",
    },
    arrowPosition: {
      height: "50px",
      left: "50px",
      bottom: "22px",
      transform: "rotate(-30deg)",
    },
  },
];
const imgPath = "js.png";

const imageContainerHTML1 = generateImageContainer(explanationsJS, {
  imagePath: imgPath,
  imageId: "js",
  explanations: [],
});
const imgcontainerElement = document.getElementById("container");

if (imgcontainerElement) {
  imgcontainerElement.innerHTML = imageContainerHTML1;
  console.log(imgcontainerElement);

  const id1 = document.getElementById("js");
  if (id1) {
    displayData("click", "js");
  }
}
