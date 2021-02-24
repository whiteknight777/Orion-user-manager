import React, { PureComponent } from 'react';
import UserMenu from './UserMenu';

class Navbar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    toggleUserMenu() {
        this.setState(prev => ({
            open: !prev.open,
        }));
    }

    render() {
        const { open } = this.state;
        return (
            <nav className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex flex-shrink-0 flex-row justify-between w-32 items-center">
                                <img
                                  className="h-8 w-8"
                                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                  alt="Workflow"
                                />
                                <span className="text-2xl font-bold text-gray-600">ORION</span>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <span
                                      href="#"
                                      className="flex flex-row items-center
                                       text-gray-100 bg-indigo-400 hover:text-gray-100 px-3 py-2 rounded-sm text-sm font-medium"
                                    >
                                        Dashboard
                                    </span>

                                    <span
                                      href="#"
                                      className="flex flex-row items-center
                                      text-gray-600 hover:bg-indigo-600 hover:text-gray-100 px-3 py-2 rounded-sm text-sm font-medium"
                                    >
                                        Settings
                                    </span>

                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <button
                                  type="button"
                                  className="bg-indigo-400 p-1 rounded-full text-gray-200 hover:text-gray-200 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-gray-200"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <svg
                                      className="h-6 w-6"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      aria-hidden="true"
                                    >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                        />
                                    </svg>
                                </button>

                                <div
                                  className="ml-3 relative"
                                  aria-hidden
                                  onClick={() => {
                                      this.toggleUserMenu();
                                  }}
                                >
                                    <button
                                      type="button"
                                      className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-white"
                                      id="user-menu"
                                      aria-haspopup="true"
                                    >
                                        <span
                                          className="sr-only"
                                        >
                                            Open user menu
                                        </span>
                                        <img
                                          className="h-8 w-8 rounded-full"
                                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                          alt=""
                                        />
                                    </button>
                                    <UserMenu open={open} />
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                              type="button"
                              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                              aria-controls="mobile-menu"
                              aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <span
                          href="#"
                          className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Dashboard
                        </span>

                        <span
                          href="#"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Team
                        </span>

                        <span
                          href="#"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Projects
                        </span>

                        <span
                          href="#"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Calendar
                        </span>

                        <span
                          href="#"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Reports
                        </span>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                  alt=""
                                />
                            </div>
                            <div className="ml-3">
                                <div
                                  className="text-base font-medium leading-none text-white"
                                >
                                    Tom Cook
                                </div>
                                <div
                                  className="text-sm font-medium leading-none text-gray-400"
                                >
                                    tom@example.com
                                </div>
                            </div>
                            <button
                              type="button"
                              className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            >
                                <span
                                  className="sr-only"
                                >
                                    View notifications
                                </span>
                                <svg
                                  className="h-6 w-6"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                            <span
                              href="#"
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                            >
                                Your Profile
                            </span>

                            <span
                              href="#"
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                            >
                                Settings
                            </span>

                            <span
                              href="#"
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                            >
                                Sign out
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
