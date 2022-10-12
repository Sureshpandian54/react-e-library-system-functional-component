import "./About.css";
import Header from "../Header/Header";
function About() {
    return (
        <div>
           <Header/>
        <div className="welcome-image">
        <h1 id="heading">Welcome To <br/>
           Library Management System</h1>
      </div>
      <br/>
      <p>
             Online library Management project in spring and hibernet is complete solution for all the manuel problem that we face during the 
        library management there are 2 main actor of the application that going to operate the application <b>1.Admin/Librarian and 2.User/Students.</b>
        Book or Digital book is the main module system. Book are asset that we are storing in the database with like name author name and version
        and a PDF format. So admin can perform crud operation and issued booked
      </p>
      </div>
    );
}
 export default About;