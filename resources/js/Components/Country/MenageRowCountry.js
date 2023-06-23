import { useState } from "react";
import DeleteRowCountry from "./Delete/DeleteRowCountry";
import EditRowCountry from "./Edit/EditRowCountry";
import ShowRowCountry from "./Show/ShowRowCountry";


function MenageRowCountry({ country }) {
    const [Page, SetPage] = useState(1);

    if (Page === 3) return (
        <DeleteRowCountry
            country={country} 
            onViewMode={() => SetPage(1)}
        />
    );

    if (Page === 2) return (
        <EditRowCountry 
            country={country} 
            onViewMode={() => SetPage(1)}
        />
    );
    
    return (
        <ShowRowCountry 
            country={country} 
            onEditMode={() => SetPage(2)}
            onDeleteMode={() => SetPage(3)}
        />
    );
}

export default MenageRowCountry;