
export default function Highlight({children}:any) {
  return (
    <div>
    <span className='highlight  bg-black'>
      {children}
    </span>
    <span className='highlight-component'/>
    </div>
  )
}
