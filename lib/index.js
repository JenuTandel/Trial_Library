// import { Explanation, ImageContainer } from "./product_preview.model";
/**
 * @author Jinal Tandel
 * @description create the HTML of image container with explanations data
 * @param explanations
 * @param imageContainer
 * @returns Container
 */
export function generateImageContainer(explanations, imageContainer) {
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
        explanations.forEach((explanation, index) => {
            const explanationDiv = document.getElementById(`${imageContainer.imageId}explanation-${index + 1}`);
            if (explanationDiv) {
                explanationDiv.style.display = "block";
            }
        });
    });
    image.addEventListener("mouseleave", () => {
        explanations.forEach((explanation, index) => {
            const explanationDiv = document.getElementById(`${imageContainer.imageId}explanation-${index + 1}`);
            if (explanationDiv) {
                explanationDiv.style.display = "none";
            }
        });
    });
    container.appendChild(image);
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
/**
 * @description convert camelcase string to kebabcase
 * @param camelCaseString
 * @returns string
 */
function camelToKebab(camelCaseString) {
    return camelCaseString.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
//# sourceMappingURL=index.js.map