import React, { useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm, usePage } from '@inertiajs/inertia-react';
import MenageRowCountry from '@/Components/Country/MenageRowCountry';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Dashboard(props) {
    const { data, setData, post, errors } = useForm({
        name: '',
        iso: '',
    });

    const { props: { countries } } = usePage('countries');

    const submit = (e) => {
        e.preventDefault();

        post(route('country.create'), {
            preserveScroll: true,
        });
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    useEffect(()=> {
        if (Object.entries(errors).length <= 0) {
            setData({
                name: '',
                iso: '',
            });
        }
    }, [errors]);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="dashboard" key="dchnfgfd" />

            <div className="py-12 mx-10">
                <div className="bg-white overflow-hidden p-10">
                    <div className="p-6 bg-white border-b border-gray-200">You're logged in!</div>
                    <div className='grid grid-cols-3'>
                        <div className="sm:px-12 lg:px-6 py-5">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate pb-5">
                                Add New Country
                            </h2>
                            <form onSubmit={submit}>
                                <div className="sm:col-span-4 pb-5">
                                    <label htmlFor="countryname" className="block text-sm font-medium leading-6 text-gray-900">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="countryname"
                                                onChange={(e) => onHandleChange({
                                                    ...e, 
                                                    target: {
                                                        ...e.target, 
                                                        name: e.target.name,
                                                        value: capitalizeFirstLetter(e.target.value || ''),
                                                    },
                                                })}
                                                className={`
                                                    block flex-1 rounded bg-transparent py-1.5 pl-1 
                                                    text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6
                                                    ${!!errors?.name ? 'border border-red-500' : 'border-0'}
                                                `}
                                                placeholder=""
                                                value={data.name}
                                            />
                                        </div>
                                        {!!errors?.name && (<p className="text-red-500 text-xs italic pt-2">{errors.name}</p>)}
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label htmlFor="iso" className="block text-sm font-medium leading-6 text-gray-900">
                                        ISO
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                            <input
                                                type="text"
                                                name="iso"
                                                id="iso"
                                                onChange={(e) => onHandleChange({
                                                    ...e, 
                                                    target: {
                                                        ...e.target, 
                                                        name: e.target.name,
                                                        value: (e.target.value || '').toUpperCase(),
                                                    },
                                                })}
                                                autoComplete="iso"
                                                value={data.iso}
                                                className={`
                                                    block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 
                                                    focus:ring-0 sm:text-sm sm:leading-6
                                                    ${!!errors?.iso ? 'border border-red-500' : 'border-0'}
                                                `}
                                                placeholder=""
                                            />
                                        </div>
                                        {!!errors?.iso && (<p className="text-red-500 text-xs italic pt-2">{errors.iso}</p>)}
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center justify-end">
                                    <button
                                        type="submit"
                                        className="
                                            rounded-md bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow-sm 
                                            hover:bg-green-500 focus-visible:outline focus-visible:outline-2 
                                            focus-visible:outline-offset-2 focus-visible:outline-green-600
                                        "
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="sm:px-12 lg:px-6 py-5 col-span-2">
                            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate pb-5">
                                List of countries
                            </h2>
                            <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Id
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            ISO
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {countries.map((country, key) => (
                                        <MenageRowCountry 
                                            key={country.id}
                                            country={country}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
