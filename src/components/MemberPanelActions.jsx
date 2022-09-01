import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

export const MemberPanelActions = ({ onLogout }) => {
  return (
    <section className='member-panel-actions'>
      <button className='profile-btn'>
        <span className='profile-icon'>
          <FontAwesomeIcon icon={faCircleUser} />
        </span>
        <span className='profile-txt'>My Profile</span>
      </button>
      <button onClick={onLogout} className='logout-btn'>
        <span className='logout-icon'>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </span>
        <span className='logout-txt'>Logout</span>
      </button>
    </section>
  )
}
