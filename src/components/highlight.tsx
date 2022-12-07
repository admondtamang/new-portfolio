export default  function Highlight({children,...rest}:any) {
  return (
    <>
    <span className='highlight' {...rest}>
      {children}
    </span>
    {/* <span className='highlight-component'/> */}
    </>
  )
}