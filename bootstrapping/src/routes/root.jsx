//import "../routing.css"
import { Outlet } from "react-router-dom";
import { Sidebar, Header } from "../components";

export default function Root() {
    return (
      <>

        
              {/* <div className='w-full block'>
                <div>Header Section main div</div>
                
                
              </div> */}

              {/* <div id="sidebar">
                  <h1>React Router Contacts</h1>
                  <div>
                    <form id="search-form" role="search">
                      <input
                        id="q"
                        aria-label="Search contacts"
                        placeholder="Search"
                        type="search"
                        name="q"
                      />
                      <div
                        id="search-spinner"
                        aria-hidden
                        hidden={true}
                      />
                      <div
                        className="sr-only"
                        aria-live="polite"
                      ></div>
                    </form>
                    <form method="post">
                      <button type="submit">New</button>
                    </form>
                  </div>
                  <nav>
                    <ul>
                      <li>
                        <a href={`/contacts/1`}>Your Name</a>
                      </li>
                      <li>
                        <a href={`/contacts/2`}>Your Friend</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div id="detail">
                  <Outlet />
                </div> */}

                <header className="bg-gray-800 text-white p-4">
                  <div className="container mx-auto">
                      
                      {/* <h1 className="text-xl">Header Content</h1> */}
                      <Header />
                  </div>
                </header>

                
                <div className="container mx-auto mt-4 flex">                    
                    <aside className="w-1/4 bg-gray-200 p-4">                       
                        {/* <h2 className="text-lg">Left Sidebar</h2> */}
                        <Sidebar />                        
                    </aside>

                   
                    <main className="w-3/4 p-4">                        
                        <h2 className="text-lg">Main Content Area</h2>
                        <Outlet />
                    </main>
                </div>

                
                <footer className="bg-gray-800 text-white p-4 mt-4">
                    <div className="container mx-auto">
                      <h3 className="text-lg">Footer</h3>
                    </div>
                </footer>
              
        

        
      </>
    );
  }