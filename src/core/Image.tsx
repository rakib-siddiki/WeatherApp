import { FC, ImgHTMLAttributes } from "react";

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}
export const Image: FC<IProps> = ({ src, alt, className }) => {
  return (
    <img className={`${className} mx-auto size-40`} src={src} alt={alt}></img>
  );
};
