import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sidebar } from 'flowbite-react'
import { HiArrowSmRight, HiUser } from 'react-icons/hi'
import { signoutSuccess } from '../redux/user/userSlice'
import { useDispatch } from 'react-redux'

export default function DashSidebar() {
    const locaton = useLocation();
    const dispatch = useDispatch();
    const [tab, setTab] = useState('');
    useEffect(() => {
        const urlParams = new URLSearchParams(locaton.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [locaton.search])

    const handleSignout = async () => {
        try {
          const res = await fetch('/api/user/signout', {
            method: 'POST',
          });
          const data = res.json();
          if(!res.ok) {
            console.log(data.message)
          } else {
            dispatch(signoutSuccess());
          }
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <Sidebar className='w-full md:w-56'>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Link to='/dashboard?tab=profile'>
                        <Sidebar.Item 
                            active={tab === 'profile'} 
                            icon={HiUser} 
                            label={'User'} 
                            labelColor='dark'
                            as='div'
                        >
                            Profile
                        </Sidebar.Item>
                    </Link>
                    <Sidebar.Item icon={HiArrowSmRight} onClick={handleSignout} className='cursor-pointer'>
                        Sign Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}
