export default function Image({src,className},...rest) {
  console.log(src);
    src = src && src.includes('uploads') 
      ? 'https://placesserver.onrender.com/'+src
      : 'https://placesserver.onrender.com/uploads/'+src;
    return (
      <img {...rest} src={src} alt={'None'} className={className} />
    )}