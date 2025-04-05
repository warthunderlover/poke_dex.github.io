import { NavBar } from "./Navbar";
import { Footer_} from "./Footer";

export const Page = ( {title, children} )=>{
    return (
        <>
            <header className="bg-red-500 text-white py-2 px-4">
                <div className="text-lg text-center">{title}</div>
                <NavBar />
            </header>
            <main className="grow">
                 {children}
            </main>
            
                <Footer_/>
            
        </>
    )
}