import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const MemberPanel = ({ loggedInMember }) => {
  return (
    <section className='member-panel'>
      <div className='member-panel-info'>
        <img className='member-panel-user-img' src={loggedInMember.img} alt='member-img' />
        <h1 className='member-panel-username'>{loggedInMember.name}</h1>
      </div>
      <span className='user-menu-icon'>
        <FontAwesomeIcon icon={faChevronDown} />
      </span>
    </section>
  )
}
