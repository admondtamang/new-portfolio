import Link from 'next/link'
import React from 'react'
import Layout from '../../components/layouts'
import LinkButton from '../../components/common/linkButton'
import Highlight from '../../components/highlight'
import Button from '../../components/common/button'


const Projects = (props:any) => {
    return (
        <Layout>
      <div className='flex flex-col container mx-auto gap-10'>
        <section>
        <h1 className='mb-4 font-bold'>  Npm packages:</h1>

        <div className='flex flex-col gap-2'>

            <LinkButton className=' px-4 py-2' href="https://www.npmjs.com/package/pdf-watermark">
           <Highlight> pdf-watermark</Highlight> - Watermark PDF in node environment.
            </LinkButton>
            <LinkButton className=' px-4 py-2' href="https://www.npmjs.com/package/@admond/multer-ftp">
              <Highlight> multer-ftp </Highlight>- An custom engine for multer to directly send data to FTP.
            </LinkButton>

        </div>
        </section>

        <section>       
             <h1 className='mb-4 font-bold'>  Projects:</h1>
<div className='grid grid-cols-4 gap-4'>

                <Button className='' href="https://zen-engelbart-2de07e.netlify.app">
           <b>IOS web</b> 
           
<p>           Watermark PDF in node environment.</p>
            </Button>

                <Button className='' href="https://zen-engelbart-2de07e.netlify.app">
           <b>IOS web</b> 
           
<p>           Watermark PDF in node environment.</p>
            </Button>
            
</div>

</section>


      </div>
         </Layout>
  )
}
export default Projects