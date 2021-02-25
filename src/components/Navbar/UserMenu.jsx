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
                    <div className="origin-top-right absolute z-20 right-0 mt-1 w-56 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5">
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
                )
                    : false}
            </>
        );
    }
}

export default UserMenu;
