'use client';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Navbar from './Component/Navbar';
import UserLook from './Component/UserLook';
import GreetHello from './Component/GreetHello';
import Tools from './Component/Tools';
import DashboardWidgets from './Component/DashboardWidgets';

const Dashboard = () => {
  const { data: session, status } = useSession();
  const [isTeamMember, setIsTeamMember] = useState(false);
  const [ClientData, setClientData] = useState({});

  useEffect(() => {
    const checkMembership = async () => {
      if (!session?.user?.email) return;

      try {
        const res = await fetch('/api/check-member', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: session.user.email }),
        });

        const data = await res.json();
        // console.log(data);
        setIsTeamMember(data.isTeamMember);
        setClientData(data.isTeamMember ? data.teamMember : data.student);
      } catch (err) {
        console.error('Error checking membership:', err);
      }
    };

    checkMembership();
  }, [session]);

  if (status === 'loading') return <p>Loading...</p>;

  console.log("ClientData ",ClientData)

  return (
    <>
      <div id="main-container" className="bg-[#D4FFFD] w-screen h-screen overflow-x-hidden m-0 p-0 text-black">
        <Navbar />
        <GreetHello isTeamMember={isTeamMember}/>
        <UserLook fullname={ClientData.fullname} username={ClientData.username} img={ClientData.avatar} teamMember={isTeamMember}/>
        { isTeamMember && <Tools author={ClientData.username}/>}

        <DashboardWidgets isTeamMember={isTeamMember} />

      </div>
    </>
  );
};

export default Dashboard;