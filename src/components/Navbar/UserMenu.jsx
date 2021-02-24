import React, { PureComponent } from 'react';

class UserMenu extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { open } = this.props;
        return (
            <>
                {open ? (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-2xl py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                        <span
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-gray-200"
                          role="menuitem"
                        >
                            Your Profile
                        </span>

                        <span
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-gray-200"
                          role="menuitem"
                        >
                            Settings
                        </span>

                        <span
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-gray-200"
                          role="menuitem"
                        >
                            Sign out
                        </span>
                    </div>
                )
                    : false}
            </>
        );
    }
}

export default UserMenu;
