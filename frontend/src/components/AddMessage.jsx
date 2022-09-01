import { useForm } from '../customHooks/useForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

export const AddMessage = ({ onAddMessage }) => {
  const [handleChange] = useForm()

  return (
    <form onSubmit={(ev) => onAddMessage(ev)} className='add-message full'>
      <label className='actions-container'>
        <input onChange={handleChange} type='text' name='message' id='message' placeholder='Type a message here' />
        <button>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </label>
    </form>
  )
}
