import { Link } from "@inertiajs/inertia-react";

function DeleteRowCountry({ country, onViewMode }) {

    return (
        <tr className="bg-white border-b" key={country.id}>
            <th 
                scope="row" 
                colSpan="3" 
                className="px-6 py-4 font-medium text-xl text-center text-red-500"
            >
                Are you sure that you want deleting country {country.id}?
            </th>
            <td className="px-6 py-4 text-center">
                <button
                    onClick={onViewMode}
                    className="
                        rounded-md bg-blue-500 px-3 py-2 m-1 text-sm font-semibold text-white shadow-sm 
                        hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 
                        focus-visible:outline-offset-2 focus-visible:outline-blue-600
                    "
                >
                    Cancel
                </button>
                <Link
                    href={route('country.destroy', {id: country.id})}
                    method="DELETE"
                    as="button"
                    className="
                        rounded-md bg-red-500 px-3 py-2 m-1 text-sm font-semibold text-white shadow-sm 
                        hover:bg-red-400 focus-visible:outline focus-visible:outline-2 
                        focus-visible:outline-offset-2 focus-visible:outline-red-600
                    "
                >
                    Delete
                </Link>
            </td>
        </tr>
    );
}

export default DeleteRowCountry;