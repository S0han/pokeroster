const Preview = ({searchBarData}) => {
    return  (
        searchBarData ? 
        <div className="preview-container">
            <img src={searchBarData.sprites} alt={searchBarData.name} />
            <p>{searchBarData.name}</p>
       </div> : null
    );
}

export default Preview;