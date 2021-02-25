import React, { PureComponent } from 'react';
import { BsClockFill } from 'react-icons/bs';
import moment from '../../utils/moment';

class Header extends PureComponent {
    render() {
        return (
            <header className="bg-indigo-600 shadow">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="w-4/5 lg:mx-auto flex pt-8 pb-48 sm:px-6">
                        <div className="flex-1 min-w-0">
                            <h2 className="font-bold leading-7 text-gray-200 md:text-2xl sm:text-3xl sm:truncate">
                                Welcome, John Doe
                            </h2>
                            <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                                <div className="mt-2 flex items-center text-sm text-gray-200">
                                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path
                                          fillRule="evenodd"
                                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                          clipRule="evenodd"
                                        />
                                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                    </svg>
                                    Full-Stack Developper
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-200">
                                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    Lyon, France
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-200">
                                    <BsClockFill className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-200" />
                                    <span>{moment().format('ll')}</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex lg:mt-0 lg:ml-4" />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
