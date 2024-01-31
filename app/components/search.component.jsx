import Slot from './slot.component'

const Search = () => {
    return (
        <div>
            <form>
                <label> Enter Pokemon name:</label>
                <input type="text" id="name_input" />
                <input type="submit" />
            </form>
            <Slot />
        </div>
    );
}

export default Search;