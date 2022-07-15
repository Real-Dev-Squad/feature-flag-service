
export default function Image({ src, alt }) {
  return (
    <img
      src={src}
      className='rounded-full h-12 block mx-2'
      alt={alt}
    />
  )
}