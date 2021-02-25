import React, { PureComponent } from 'react';
import { RiHome4Line } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineSearchCircle } from 'react-icons/hi';
import { BsCalendar } from 'react-icons/bs';
import { BiSearch, BiFilterAlt } from 'react-icons/bi';
import { GiSettingsKnobs } from 'react-icons/gi';

class Dashboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            openFilter: false,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        };
    }

    toggleUserMenu(value) {
        this.setState({
            openFilter: value,
        });
    }

    render() {
        const { openFilter, data } = this.state;
        console.log(data);
        return (
            <div className="z-10 max-w-7xl mx-auto py-6 sm:px-6 lg:px-10 absolute inset-x-0 top-36 ">
                <div className="px-4 py-6 sm:px-0 ">
                    <div className="shadow-md bg-white rounded-lg min-h-full ">
                        <div className="flex flex-row auto-cols-max md:auto-cols-min mb-8">
                            <div className="w-1/5 box-content bg-gray-100 shadow-inner max-content">
                                <ul className="min-h-full flex flex-col items-baseline">
                                    <li className="flex w-5/6 flex-row items-center mx-3 py-2 mb-1 mt-3 pr-8
                                    hover:shadow-md rounded-md bg-indigo-500 text-gray-50"
                                    >
                                        <RiHome4Line className="text-xl ml-5 mr-4" />
                                        Dashboard
                                    </li>
                                    <li className="flex w-5/6 flex-row items-center mx-3 py-2 my-1 pr-12
                                    hover:shadow-md rounded-md text-gray-500 hover:bg-indigo-500 hover:text-gray-50"
                                    >
                                        <FiUsers className="text-xl ml-5 mr-4" />
                                        Teams
                                    </li>
                                    <li className="flex w-5/6 flex-row items-center mx-3 py-2 my-1 pr-9
                                    hover:shadow-md rounded-md text-gray-500 hover:bg-indigo-500 hover:text-gray-50"
                                    >
                                        <HiOutlineSearchCircle className="text-2xl ml-4 mr-4" />
                                        Directory
                                    </li>
                                    <li className="flex w-5/6 flex-row items-center mx-3 py-2 my-1 pr-8
                                    hover:shadow-md rounded-md text-gray-500 hover:bg-indigo-500 hover:text-gray-50"
                                    >
                                        <BsCalendar className="text-lg ml-5 mr-4" />
                                        Calendar
                                    </li>
                                    <li className="flex w-5/6 flex-row items-center mx-3 py-2 my-1 pr-12
                                    hover:shadow-md rounded-md text-gray-500 hover:bg-indigo-500 hover:text-gray-50"
                                    >
                                        <GiSettingsKnobs className="text-lg ml-5 mr-4" />
                                        Settings
                                    </li>
                                </ul>
                            </div>
                            <div className="w-2/5 box-content bg-white shadow-sm max-content">
                                <div className="flex flex-col w-full py-4 px-4 max-content">
                                    <h2 className="text-xl ml-1 font-bold py-1">Directory</h2>
                                    <p className="py-2 ml-1">
                                        Search directory of
                                        {' '}
                                        <b>2,500</b>
                                        {' '}
                                        employees
                                    </p>
                                    <div className="flex items-center justify-between w-full sm:col-span-2">
                                        {/* SEARCH BTN */}
                                        <div className="mt-1 w-full mr-8 flex-initial flex rounded-md shadow-sm justify-between">
                                            <BiSearch className="absolute z-10 mt-2.5 ml-2 text-gray-400" />
                                            <input
                                              type="text"
                                              name="company_website"
                                              id="company_website"
                                              className="py-2 px-8 w-10/12 border border-gray-300
                                                rounded-lg sm:text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-800 focus:border-transparent"
                                              placeholder="Search"
                                            />
                                        </div>

                                        {/* FilTER BLOCK */}
                                        <div className="relative inline-block text-left">
                                            <div
                                              aria-hidden
                                              onClick={() => {
                                                  this.toggleUserMenu(true);
                                              }}
                                              onBlur={() => {
                                                  this.toggleUserMenu(false);
                                              }}
                                            >
                                                <button
                                                  type="button"
                                                  className="inline-flex justify-center w-full hover:shadow-md
                                                      rounded-md border border-gray-300 shadow-sm px-4 py-2
                                                      bg-white text-sm font-medium text-gray-700
                                                      hover:bg-gray-50 focus:outline-none focus:ring-2
                                                      focus:ring-offset-2 focus:ring-offset-gray-100
                                                      focus:ring-indigo-500"
                                                  id="options-menu"
                                                  aria-haspopup="true"
                                                  aria-expanded="true"
                                                >
                                                    <BiFilterAlt className="text-gray-500" />
                                                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {openFilter ? (
                                                <div className="origin-top-right absolute right-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</li>
                                                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Support</li>
                                                        <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">License</li>
                                                        <form method="POST" action="#">
                                                            <button type="submit" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
                                                                Sign out
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            ) : false}
                                        </div>

                                    </div>
                                    <hr className="w-full mt-5" />
                                    {/* USER LIST */}
                                    <ul className="py-0 w-full overflow-y-auto h-full">
                                        {data.map(e => (
                                            <li key={e} className="w-full px-2 border-b border-gray-200 py-4 hover:bg-gray-100">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img
                                                          className="h-10 w-10 rounded-full"
                                                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                                                          alt="pp"
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            Jane Cooper
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            Co Founder / CTO
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                            </div>
                            {/* USER DETAILS */}
                            <div className="w-3/5 box-content bg-white shadow-md max-content">
                                <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl">
                                    <div className="md:flex flex-col">
                                        <div className="w-full">
                                            <img
                                              className="h-52 w-full object-cover"
                                              src="https://wallpaperaccess.com/full/420428.jpg"
                                              alt="Man looking at item at a store"
                                            />
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="">
                                                <img
                                                  className="h-36 w-36 max-w-xs z-10 top-48 ml-4 absolute rounded-full flex items-center border-4 ring-3 border-white"
                                                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                  alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
