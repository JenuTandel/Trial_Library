"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateImageContainer = exports.displayData = void 0;
/**
 * @author Jinal Tandel
 * @description For display the explanations of the image
 * @param {*} event
 * @param {*} id
 */
function displayData(event, id) {
    document.addEventListener("DOMContentLoaded", () => {
        const target = document.getElementById(id);
        const explanations = document.querySelectorAll(`.${id}explanation`);
        target === null || target === void 0 ? void 0 : target.addEventListener(event, () => {
            explanations.forEach((explanation) => {
                explanation.style.display = "block";
            });
        });
        target === null || target === void 0 ? void 0 : target.addEventListener("mouseleave", () => {
            explanations.forEach((explanation) => {
                explanation.style.display = "none";
            });
        });
    });
}
exports.displayData = displayData;
/**
 * @author Jinal Tandel
 * @description create the HTML of image container with explanations data
 * @param explanations
 * @param imageContainer
 * @returns Container
 */
function generateImageContainer(explanations, imageContainer) {
    let count = 1;
    const container = document.createElement("div");
    container.id = "image-container";
    container.style.position = "relative";
    container.style.display = "inline-block";
    const image = document.createElement("img");
    image.src = imageContainer.imagePath;
    image.alt = "Image";
    image.id = imageContainer.imageId;
    container.appendChild(image);
    count++;
    explanations.forEach((explanation, index) => {
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
        const transformedObject = {};
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
exports.generateImageContainer = generateImageContainer;
/**
 * @author Jinal Tandel
 * @description convert camelcase string to kebabcase
 * @param camelCaseString
 * @returns string
 */
function camelToKebab(camelCaseString) {
    return camelCaseString.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
//# sourceMappingURL=index.js.map