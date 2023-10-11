// import { Explanation, ImageContainer } from "./product_preview.model";

// /**
//  * @author Jinal Tandel
//  * @description For display the explanations of the image
//  * @param {*} event
//  * @param {*} id
//  */
// export function displayData(event: string, id: string) {
//   document.addEventListener("DOMContentLoaded", () => {
//     const target = document.getElementById(id);
//     const explanations = document.querySelectorAll(`.${id}explanation`);
//     target?.addEventListener(event, () => {
//       explanations.forEach((explanation) => {
//         (explanation as HTMLElement).style.display = "block";
//       });
//     });
//     target?.addEventListener("mouseleave", () => {
//       explanations.forEach((explanation) => {
//         (explanation as HTMLElement).style.display = "none";
//       });
//     });
//   });
// }

// /**
//  * @author Jinal Tandel
//  * @description create the HTML of image container with explanations data
//  * @param explanations
//  * @param imageContainer
//  * @returns Container
//  */
// export function generateImageContainer(
//   explanations: Explanation[],
//   imageContainer: ImageContainer
// ): string {
//   let count = 1;
//   const container = document.createElement("div");
//   container.id = "image-container";
//   container.style.position = "relative";
//   container.style.display = "inline-block";

//   const image = document.createElement("img");
//   image.src = imageContainer.imagePath;
//   image.alt = "Image";
//   image.id = imageContainer.imageId;

//   container.appendChild(image);

//   count++;
//   explanations.forEach((explanation: any, index: number) => {
//     const explanationDiv = document.createElement("div");
//     explanationDiv.id = `${imageContainer.imageId}explanation-${index + 1}`;
//     explanationDiv.className = "explanation ";
//     explanationDiv.className += `${imageContainer.imageId}explanation`;

//     if (explanation.labelPosition) {
//       const transformedString = Object.entries(explanation.labelPosition)
//         .map(([key, value]) => `${key}: ${value}`)
//         .join(";");
//       explanationDiv.style.cssText = transformedString;
//     }

//     const label = document.createElement("p");
//     label.className = "label-name";
//     label.textContent = explanation.label;

//     const arrowLine = document.createElement("div");
//     arrowLine.className = "arrow";
//     const transformedObject: any = {};
//     for (const key in explanation.arrowPosition) {
//       const newKey = camelToKebab(key);
//       transformedObject[newKey] = explanation.arrowPosition[key];
//     }
//     const transformedString = Object.entries(transformedObject)
//       .map(([key, value]) => `${key}: ${value}`)
//       .join(";");
//     arrowLine.style.cssText = transformedString;

//     explanationDiv.appendChild(label);
//     explanationDiv.appendChild(arrowLine);

//     container.appendChild(explanationDiv);
//   });
//   return container.outerHTML;
// }

// /**
//  * @author Jinal Tandel
//  * @description convert camelcase string to kebabcase
//  * @param camelCaseString
//  * @returns string
//  */
// function camelToKebab(camelCaseString: string): string {
//   return camelCaseString.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
// }

import { Explanation, ImageContainer } from "./product_preview.model";

/**
 * @author Jinal Tandel
 * @description create the HTML of image container with explanations data
 * @param explanations
 * @param imageContainer
 * @returns Container
 */
export function generateImageContainer(
  explanations: Explanation[],
  imageContainer: ImageContainer
): string {
  const container = document.createElement("div");
  container.id = "image-container";
  container.style.position = "relative";
  container.style.display = "inline-block";

  const image = document.createElement("img");
  image.src = imageContainer.imagePath;
  image.alt = "Image";
  image.id = imageContainer.imageId;

  // Attach event listeners directly to the image element
  image.addEventListener("click", () => {
    explanations.forEach((explanation: any, index: number) => {
      const explanationDiv = document.getElementById(
        `${imageContainer.imageId}explanation-${index + 1}`
      ) as HTMLElement;

      if (explanationDiv) {
        explanationDiv.style.display = "block";
      }
    });
  });

  image.addEventListener("mouseleave", () => {
    explanations.forEach((explanation: any, index: number) => {
      const explanationDiv = document.getElementById(
        `${imageContainer.imageId}explanation-${index + 1}`
      ) as HTMLElement;

      if (explanationDiv) {
        explanationDiv.style.display = "none";
      }
    });
  });

  container.appendChild(image);

  explanations.forEach((explanation: any, index: number) => {
    const explanationDiv = document.createElement("div");
    explanationDiv.id = `${imageContainer.imageId}explanation-${index + 1}`;
    explanationDiv.className = "explanation ";
    explanationDiv.className += `${imageContainer.imageId}explanation`;

    if (explanation.labelPosition) {
      const transformedString = Object.entries(explanation.labelPosition)
        .map(([key, value]) => `${key}: ${value}`)
        .join(";");
      explanationDiv.style.cssText = transformedString;
    }

    const label = document.createElement("p");
    label.className = "label-name";
    label.textContent = explanation.label;

    const arrowLine = document.createElement("div");
    arrowLine.className = "arrow";
    const transformedObject: any = {};
    for (const key in explanation.arrowPosition) {
      const newKey = camelToKebab(key);
      transformedObject[newKey] = explanation.arrowPosition[key];
    }
    const transformedString = Object.entries(transformedObject)
      .map(([key, value]) => `${key}: ${value}`)
      .join(";");
    arrowLine.style.cssText = transformedString;

    explanationDiv.appendChild(label);
    explanationDiv.appendChild(arrowLine);

    container.appendChild(explanationDiv);
  });
  return container.outerHTML;
}

/**
 * @description convert camelcase string to kebabcase
 * @param camelCaseString
 * @returns string
 */
function camelToKebab(camelCaseString: string): string {
  return camelCaseString.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
