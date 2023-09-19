import ReactDom from 'react-dom/client'
import List from "./components/List";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return(
        <div className='container'>
        <h1>Ricky and Morty</h1>
            <List />
        </div>
    )
}

const container = document.getElementById('app');
const root = ReactDom.createRoot(container);
root.render(<App />);