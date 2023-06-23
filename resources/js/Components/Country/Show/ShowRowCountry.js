function ShowRowCountry({ country, onEditMode, onDeleteMode }) {

    return (
        <tr className="bg-white border-b" key={country.id}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {country.id}
            </th>
            <td className="px-6 py-4">
                {country.name}
            </td>
            <td className="px-6 py-4">
                {country.iso}
            </td>
            <td className="px-6 py-4 text-center">
                <button
                    onClick={onEditMode}
                    className="
                        rounded-md bg-blue-500 px-3 py-2 m-1 text-sm font-semibold text-white shadow-sm 
                        hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 
                        focus-visible:outline-offset-2 focus-visible:outline-blue-600
                    "
                >
                    Edit
                </button>
                <button
                    onClick={onDeleteMode}
                    className="
                        rounded-md bg-red-500 px-3 py-2 m-1 text-sm font-semibold text-white shadow-sm 
                        hover:bg-red-400 focus-visible:outline focus-visible:outline-2 
                        focus-visible:outline-offset-2 focus-visible:outline-red-600
                    "
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default ShowRowCountry;