import { generateImageContainer, displayData } from "trial_product_preview";

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

const explanations = [
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
const imgPath1 = "js.png";

const imageContainerHTML2 = generateImageContainer(explanationsJS, {
  imagePath: imgPath1,
  imageId: "js1",
  explanations: [],
});
const imgcontainerElement1 = document.getElementById("img-container");

if (imgcontainerElement) {
  imgcontainerElement1.innerHTML = imageContainerHTML2;

  const id1 = document.getElementById("js1");
  if (id1) {
    displayData("mouseover", "js1");
  }
}
