import React, { useState } from "react";
import clubLogo from "../assets/img/club_logo.png";

const DefaultImg = ({ src = '', imgClass, alt }) => {
  const [isValidSrc, setIsValidSrc] = useState(true);

  const handleImageError = (event) => {
    setIsValidSrc(false);
  };

  return (
    <>
      {isValidSrc ? (
        <img
          className={imgClass}
          src={src}
          onError={handleImageError}
          alt={alt}
          crossOrigin="anonymous"
        />
      ) : (
        <img src={clubLogo} alt={alt} className={imgClass} />
      )}
    </>
  );
};

export default DefaultImg;