import React from 'react'
import { NavLink, useParams, Link } from 'react-router-dom'
import './homeStyle.css'
import ExitPage from './ExitPage';

function Home() {
  const { id } = useParams();
  const name =JSON.parse(localStorage.getItem('currentUser')).name;
  function logout() {
    localStorage.removeItem('currentUser');
  }
  return (
    <>
      <div className='info'>
        <h1>{name}</h1>
        <Link className='logout' to={"/exitPage"} onClick={logout}>Logout</Link>
      </div>
      <div className='home'>
        <NavLink className={"option todosHome"} to={`/${id}/todos`}>
          Todos
        </NavLink>
        <NavLink className={"option albumsHome"} to={`/${id}/albums`}>
          Albums
        </NavLink>
        <NavLink className={"option postsHome"} to={`/${id}/posts`}>
          Posts
        </NavLink>
      </div>
    </>
  )
}

export default Home
