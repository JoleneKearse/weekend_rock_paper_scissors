export const getImgAlt = (img: string) => {
  return img.split("/")[1].split(".")[0];
}