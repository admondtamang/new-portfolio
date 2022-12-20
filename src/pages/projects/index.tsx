import Layout from "../../components/layouts";
import LinkButton from "../../components/common/linkButton";
import Highlight from "../../components/highlight";

const Projects = () => {
  return (
    <Layout>
      <div className="container mx-auto flex flex-col gap-10">
        <section>
          <h1 className="mb-4 font-bold"> Npm packages:</h1>

          <div className="flex flex-col gap-2">
            <LinkButton
              className=" px-4 py-2 dark:text-white"
              href="https://www.npmjs.com/package/pdf-watermark"
            >
              <Highlight> pdf-watermark</Highlight> - Watermark PDF in node
              environment.
            </LinkButton>
            <LinkButton
              className=" px-4 py-2 dark:text-white"
              href="https://www.npmjs.com/package/multer-ftp-storage"
            >
              <Highlight> multer-ftp </Highlight>- An custom engine for multer
              to directly send data to FTP.
            </LinkButton>
          </div>
        </section>

        <section>
          <h1 className="mb-4 font-bold"> Projects:</h1>
          <div className="grid grid-cols-4 gap-4 dark:text-white">
            <LinkButton className="" href="https://jsonfeeder.vercel.app/">
              <b>Json feeder</b>

              <p> Dynamic formbuilder.</p>
            </LinkButton>
            <LinkButton
              className=""
              href="https://zen-engelbart-2de07e.netlify.app/"
            >
              <b>IOS web</b>

              <p> Ios feel in web.</p>
            </LinkButton>

            <LinkButton className="" href="https://next-shippr.vercel.app/">
              <b>Shippr</b>

              <p> Ecommerce App.</p>
            </LinkButton>
            <LinkButton className="" href="https://godapi.vercel.app/">
              <b>God Api</b>

              <p> Postman alternative for web.</p>
            </LinkButton>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default Projects;
