import SearchBar from "./components/SearchBar"
import getData from "./api"

function App () {
    const handleSubmit = (term) => {
        getData(term)
    }

    return (
        <SearchBar onSubmit = {handleSubmit}/>
    )
}

export default App;