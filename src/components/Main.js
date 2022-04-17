
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Main(props) {
    const theme = props.theme;
    const setTheme = props.setTheme;
    

    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.body.getElementsByTagName("i").className = "bi bi-brightness-high"
            document.body.getElementsByTagName("span")[0].className = "text-warning";
        } else {
            setTheme("light");
            document.body.getElementsByTagName("i").className = "bi bi-moon-fill";
            document.body.getElementsByTagName("span")[0].className = "text-primary";
        }

        
    
    }
    
      return (
        <div id="Navbar" className="d-flex flex-column justify-content-center align-items-center">
          <h1>Theme is <span className="text-primary">{theme}</span></h1>
          
              <span className="mb-2">To Change Theme Click Here</span>
               <button className ="changeTheme" onClick={changeTheme}>
               <i class="bi bi-brightness-high"></i>
                   
               </button>
               
            
        </div>
      );
  }
  
