import React,{useState,useEffect} from 'react'
import {Navlink,Link} from "react-router-dom"
import "./Join.css"
function Join() {
    const [name, setname] = useState("")
    const [room, setroom] = useState("")
    return (
        <div className="joinMainContainer">
          <div className="minicontaner">
          <h1 className="heading mb-4">Join</h1>
          <div class="input-group mb-4">
  <input type="text" class="form-control" placeholder="Username"  onChange={(event) => setname(event.target.value)} />
</div>
   <div class="input-group mb-4">
  <input type="text" class="form-control" placeholder="Room"  onChange={(event) => setroom(event.target.value)} />
</div>
 <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className='btn btn-outline-dark' type="submit">Sign In</button>
          </Link>
          </div>
        </div>
    )
}

export default Join
