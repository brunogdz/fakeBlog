import React from "react";

//hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

const Search = () => {
    const query = useQuery()
    const search = query.get("q");
    // We defined the searching url using q like /search?q=${query}, so it'll take the string after the q

    return (
        <div>
            <h2>Search</h2>
            <p>{search}</p>
        </div>
    )
}

export default Search;