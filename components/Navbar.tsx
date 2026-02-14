import { Box } from "lucide-react"
import Button from "./ui/Button";

const Navbar = () => {
    const isSignedIn = true;
    const username = "Sagar";
    const handleAuthClick = async () => {
        
    }
  return (
   <header className="navbar">
    <nav className="inner">
        <div className="left">
            <div className="brand">
                <Box className="logo" />
                <span className="name">Roomify</span>
                </div>
                <ul className="links">
                    <a>Product</a>
                    <a>Pricing</a>
                      <a>Community</a>

                    <a>Enterprise</a>
                    </ul>
                    </div>
                    <div className="actions">
                        {isSignedIn ? (
                            <>
                                <span className="greeting">
                                    {username ? `Hi ${username}` : "Signed in "}


                                </span>
                                <Button size="sm" onClick={handleAuthClick} className="button">
                                    Log Out
                                </Button>
                                </>
                        ):(
                        <div>
                            <Button size="sm" onClick={handleAuthClick} variant="ghost">

                                Log In
                            </Button> 
                            <a href="#upload" className="cta">Get Started</a>
                            </div>    
                        )}
                        
                    </div>
    </nav>
    </header>
  )
}
 
export default Navbar;