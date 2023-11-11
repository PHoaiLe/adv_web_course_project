export default function Footer(){
    return(
        <>
            <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <span className="ml-3 text-xl">University of Science</span>
      </a>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Web Advanced Progamming-20KTPM2</h2>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Members</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Member1</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Member2</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Member3</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Email</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Email1</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Email2</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Email3</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
</footer>
        </>
    )
}