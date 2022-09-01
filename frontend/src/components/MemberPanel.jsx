import { MemberPanelActions } from './MemberPanelActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const MemberPanel = ({ loggedInMember, onUserActionsModalOpen, isUserActionsModalOpen, onLogout }) => {
  return (
    <section className='member-panel'>
      {isUserActionsModalOpen ? <MemberPanelActions onLogout={onLogout} /> : ''}
      <div className='member-panel-info'>
        <img className='member-panel-user-img' src={loggedInMember.img} alt='member-img' />
        <h1 className='member-panel-username'>{loggedInMember.name}</h1>
      </div>
      <span onClick={onUserActionsModalOpen} className='user-menu-icon'>
        <FontAwesomeIcon icon={faChevronDown} />
      </span>
    </section>
  )
}
