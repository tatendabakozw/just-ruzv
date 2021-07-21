import React, {ReactElement, Fragment} from 'react'
import { Menu, Transition } from '@headlessui/react'
import {Link} from 'react-router-dom'
import { nav_options } from '../../data/nav_option'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navdropdown({icon}) {

    return (
        <Menu as="div" className="z-50 relative inline-block text-left">
        {({ open }) => (
            <>
            <div>
                <Menu.Button className="flex flex-row items-center justify-center w-full px-4 py-2 text-sm focus:outline-none">
                    {icon}
                </Menu.Button>
            </div>

            <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                static
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                <div className="py-1">
                   {
                       nav_options.map(option=>(
                        <Menu.Item key={option.id}>
                            {({ active }) => (
                                <span>
                                <Link to="/auth/signup">
                                    <p className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm cursor-pointer')}>{option.name}</p>
                                </Link>
                            </span>
                            )}
                        </Menu.Item>
                       ))
                   }
                    
                </div>
                </Menu.Items>
            </Transition>
            </>
        )}
    </Menu>
    )
}

export default Navdropdown
