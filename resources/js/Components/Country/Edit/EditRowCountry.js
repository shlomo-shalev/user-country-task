import { useForm } from "@inertiajs/inertia-react";
import { useEffect } from "react";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function EditRowCountry({ onViewMode, country }) {
    const { data, setData, post, errors, wasSuccessful } = useForm({
        name: country.name,
        iso: country.iso,
    });

    useEffect(() => {
        if (wasSuccessful) {
            onViewMode();
        }
    }, [wasSuccessful]); 

    const submit = (e) => {
        e.preventDefault();

        post(route('country.update', {
            id: country.id,
        }), {
            preserveScroll: true,
        });
    };

    const onKeyDown = e => {
        // https://stackoverflow.com/questions/64528785/keycode-function-gets-slashed-out-on-writing-it-in-vs-code
        if (['Enter'].indexOf(e.code || '') !== -1) {
            submit(e)
        }
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    return (
        <tr className="bg-white border-b" key={country.id}>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {country.id}
            </th>
            <td className="px-6 py-4">
                <input 
                    type="text"
                    className={`w-auto max-w-full w-full ${!!errors?.name ? 'border border-red-500' : ''}`}
                    name="name"
                    onKeyDown={onKeyDown}
                    onChange={(e) => onHandleChange({
                        ...e, 
                        target: {
                            ...e.target, 
                            name: e.target.name,
                            value: capitalizeFirstLetter(e.target.value || ''),
                        },
                    })}
                    value={data.name}
                />
                <p className="text-red-500 text-xs italic pt-2">{errors.name || ''}</p>
            </td>
            <td className="px-6 py-4">
                <input 
                    type="text"
                    className={`w-auto max-w-full w-full ${!!errors?.iso ? 'border border-red-500' : ''}`}
                    name="iso"
                    onKeyDown={onKeyDown}
                    onChange={(e) => onHandleChange({
                        ...e, 
                        target: {
                            ...e.target, 
                            name: e.target.name,
                            value: (e.target.value || '').toUpperCase(),
                        },
                    })}
                    value={data.iso}
                />
                <p className="text-red-500 text-xs italic pt-2">{errors.iso || ''}</p>
            </td>
            <td className="px-6 py-4 text-center">
                <button
                    onClick={submit}
                    type="button"
                    className="
                        rounded-md bg-blue-500 px-3 py-2 m-1 text-sm font-semibold text-white shadow-sm 
                        hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 
                        focus-visible:outline-offset-2 focus-visible:outline-blue-600
                    "
                >
                    Update
                </button>
                <button
                    onClick={onViewMode}
                    className="
                        rounded-md bg-red-500 px-3 py-2 m-1 text-sm font-semibold text-white shadow-sm 
                        hover:bg-red-400 focus-visible:outline focus-visible:outline-2 
                        focus-visible:outline-offset-2 focus-visible:outline-red-600
                    "
                >
                    cancel
                </button>
            </td>
        </tr>
    );
}

export default EditRowCountry;