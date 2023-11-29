import { Helmet } from "react-helmet-async";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiCornerDownRight } from "react-icons/fi";

const Blogs = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-10">
      <Helmet>
        <title>Restora | Blog Post</title>
      </Helmet>

      <div className="border border-gray-600 rounded-md px-2 md:px-5 py-3 mb-10">
        <h1 className="mb-4 flex text-base md:text-lg items-center">
          <span className="font-semibold text-xl mr-2 flex items-center">
            Question{" "}
            <FaRegQuestionCircle className="ml-1"></FaRegQuestionCircle>
          </span>
          What is One way data binding?
        </h1>
        <p className="flex items-start md:pl-5 md:pr-8 text-sm md:text-base">
          <span className="mr-3">
            <FiCornerDownRight className="text-2xl"></FiCornerDownRight>
          </span>
          <span>
            In JavaScript frameworks, one-way data binding refers to programming
            concepts where data changes move in a single direction, usually from
            a data source (model or state) to the user interface (UI). When data
            is updated, the user interface (UI) reflects the most recent state
            of the data. The data source is unaffected directly by UI
            modifications, though. The data flow is made simpler, more
            predictable, and easier to handle in applications with this method.
            This paradigm is widely used in frameworks such as Vue.js, Angular,
            and React.
          </span>
        </p>
      </div>

      <div className="border border-gray-600 rounded-md px-2 md:px-5 py-3 mb-10">
        <h1 className="mb-4 flex text-base md:text-lg items-center">
          <span className="font-semibold text-xl mr-2 flex items-center">
            Question{" "}
            <FaRegQuestionCircle className="ml-1"></FaRegQuestionCircle>
          </span>
          What is NPM in node.js?
        </h1>
        <p className="flex items-start md:pl-5 md:pr-8 text-sm md:text-base">
          <span className="mr-3">
            <FiCornerDownRight className="text-2xl"></FiCornerDownRight>
          </span>
          <p>
            NPM (Node Package Manager) is the default package manager for
            Node.js, which is a JavaScript runtime environment. It plays a
            crucial role in managing and distributing Node.js packages/modules.
            Here are some key points about NPM:
            <ol className="list-[lower-roman] text-[15px] my-2 px-3 md:px-10">
              <li className="mt-2">
                <span className="font-semibold text-base">
                  {" "}
                  Package Management:{" "}
                </span>{" "}
                NPM allows developers to easily install, share, and manage
                third-party packages or libraries (also known as modules) for
                use in Node.js projects.
              </li>
              <li className="mt-2">
                <span className="font-semibold text-base">
                  Command-Line Interface (CLI):{" "}
                </span>
                NPM provides a command-line interface that allows developers to
                interact with the package manager using terminal commands.
                Common commands include npm install, npm init, npm update, etc.
              </li>
              <li className="mt-2">
                <span className="font-semibold text-base">Package.json: </span>
                Each Node.js project typically includes a package.json file,
                which serves as a manifest for the project. It includes metadata
                about the project and a list of dependencies, scripts, and other
                configuration details. NPM uses this file to manage dependencies
                and other project-related configurations.
              </li>
              <li className="mt-2">
                <span className="font-semibold text-base">
                  Dependency Management:{" "}
                </span>
                NPM automatically manages project dependencies by downloading
                and installing the required packages from the NPM registry.
                Developers can specify these dependencies in the package.json
                file.
              </li>
              <li className="mt-2">
                <span className="font-semibold text-base">
                  Global and Local Installation:{" "}
                </span>
                NPM allows packages to be installed globally (accessible
                system-wide) or locally (restricted to a specific project).
                Global installations are often used for tools and utilities,
                while local installations are for project-specific dependencies.
              </li>
              <li className="mt-2">
                <span className="font-semibold text-base">Scripts: </span>
                NPM enables developers to define custom scripts in the
                package.json file. These scripts can be executed using the npm
                run command, providing a convenient way to automate common tasks
                within a project.
              </li>
            </ol>
          </p>
        </p>
        <p></p>
      </div>
      <div className="border border-gray-600 rounded-md px-2 md:px-5 py-3 mb-10">
        <h1 className="mb-4 flex text-base md:text-lg items-center">
          <span className="font-semibold text-xl mr-2 flex items-center">
            Question{" "}
            <FaRegQuestionCircle className="ml-1"></FaRegQuestionCircle>
          </span>
          What are the Differences between Mongodb database vs mySQL database?
        </h1>
        <p className="md:flex items-start md:pl-5 md:pr-8 text-sm md:text-base">
          <span className="mr-3">
            <FiCornerDownRight className="text-2xl hidden md:flex"></FiCornerDownRight>
          </span>
          <p>
            MongoDB and MySQL are both popular database management systems, but
            they differ in several aspects, including their data models, query
            languages, scalability, and use cases. Here are some key differences
            between MongoDB and MySQL:
            <table className="table my-5 border text-black dark:text-gray-100 dark:border-2 border-gray-700 dark:border-gray-500">
              <thead>
                <tr className="border-b-2 border-gray-700">
                  <th className="text-black dark:text-white font-bold">
                    Feature
                  </th>
                  <th className="text-black dark:text-white border-x border-gray-700 dark:border-gray-500 font-bold">
                    MongoDB
                  </th>
                  <th className="text-black dark:text-white font-bold">
                    MySQL
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700 dark:border-gray-500">
                  <td className="font-semibold">Data Model</td>
                  <td className="border-x border-gray-700 dark:border-gray-500">
                    Document-oriented (NoSQL)
                  </td>
                  <td>Table-based (Relational)</td>
                </tr>
                <tr className="border-b border-gray-700 dark:border-gray-500">
                  <td className="font-semibold">Schema</td>
                  <td className="border-x border-gray-700 dark:border-gray-500">
                    Schema-less (Flexible)
                  </td>
                  <td>Schema-based (Structured)</td>
                </tr>
                <tr className="border-b border-gray-700 dark:border-gray-500">
                  <td className="font-semibold">Query Language</td>
                  <td className="border-x border-gray-700 dark:border-gray-500">
                    Rich, expressive queries (JavaScript-based)
                  </td>
                  <td>SQL (Structured Query Language)</td>
                </tr>
                <tr className="border-b border-gray-700 dark:border-gray-500">
                  <td className="font-semibold">Scaling</td>
                  <td className="border-x border-gray-700 dark:border-gray-500">
                    Horizontal scaling (Add more servers to a cluster)
                  </td>
                  <td>Vertical scaling (Add resources to a single server)</td>
                </tr>
                <tr className="border-b border-gray-700 dark:border-gray-500">
                  <td className="font-semibold">ACID Compliance</td>
                  <td className="border-x border-gray-700 dark:border-gray-500">
                    Sacrifices full ACID compliance for flexibility
                  </td>
                  <td>
                    ACID compliant (Ensures data integrity and consistency)
                  </td>
                </tr>
                <tr className="border-b border-gray-700 dark:border-gray-500">
                  <td className="font-semibold">Use Cases</td>
                  <td className="border-x border-gray-700 dark:border-gray-500">
                    Applications with rapidly changing schemas, large amounts of
                    unstructured data
                  </td>
                  <td>
                    Traditional relational scenarios, transactional systems
                  </td>
                </tr>
                <tr className="border-b border-gray-700 dark:border-gray-500">
                  <td className="font-semibold">Relationships</td>
                  <td className="border-x border-gray-700 dark:border-gray-500">
                    Often embedded within documents
                  </td>
                  <td>Established using foreign keys in tables</td>
                </tr>
              </tbody>
            </table>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
