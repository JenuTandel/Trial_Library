export class Explanation {
  label!: string;
  labelPosition!: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  arrowPosition!: {
    height?: string;
    left?: string;
    bottom?: string;
    top?: string;
    width?: string;
    transform?: string;
    borderTop?: string;
    borderLeft?: string;
  };
}

export class ImageContainer {
  imagePath!: string;
  imageId!: string;
}
