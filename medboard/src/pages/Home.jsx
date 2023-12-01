import SlidesSigma from "../components/Slidessigma";
import ANH from "../components/ANH"
import Docprofile from "../components/Docprofile"
import Calendar from "../components/calendar";
import Content from "../components/content";
const Home = () => {
    return ( 
        <section>
        <section>
            <SlidesSigma/>
        </section>
        <section>
            <Content/>
        </section>
        <section>
        <ANH/>
        </section>
        <section>
            <Docprofile/>
        </section>
        <section>
            <Calendar/>
        </section>
        </section>
     );
}
 
export default Home;