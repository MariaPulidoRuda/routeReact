import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import PoseDetail from '../pages/Pose'
import { getPoses } from '../src/assets/data/data.js'

const Poses = () => {
  const poses = getPoses();
  return (
    <>

      <div>
        <h1>All yoga poses 🧘🏽‍♂️</h1>
        <ul>
          {poses.map((pose) => (
            <li key={pose.id}>
              <Link to={`/poses/${pose.id}`}>
                <PoseDetail pose={pose} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  )
}

export default Poses