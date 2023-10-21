export default function Image({src,...rest}) {
  console.log(src);
    src = src && src.includes('uploads') 
      ? 'http://localhost:5000/'+src
      : 'http://localhost:5000/uploads/'+src;
    return (
      <img {...rest} src={src} alt={'None'}  />
    )}