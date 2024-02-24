import FormCreate from "./Components/FormCreate";
import Heading from "./Components/Heading";
import ListOfUsers from "./Components/ListOfUsers";
import ScrollToButton from "./Components/ScrollToButton";


function App() {
  return (
    <>
    <div className=" ">
    <Heading />
    <div className="flex flex-col md:flex-row justify-evenly pt-8 ">
    <ListOfUsers />
    <FormCreate />
    </div>
    <ScrollToButton />
    </div>
    </>
  );
}

export default App;
