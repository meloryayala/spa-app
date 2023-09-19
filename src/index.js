import ReactDom from 'react-dom/client'

function App() {
    return(
        <h1>Ricky and Morty</h1>
    )
}

const container = document.getElementById('app');
const root = ReactDom.createRoot(container);
root.render(<App />);