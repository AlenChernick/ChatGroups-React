import { useForm } from '../customHooks/useForm'

export const AddChannelModal = ({ onAddChannel, onToggleChannelModal }) => {
  const [handleChange] = useForm()

  const inputRefFunc = (elInput) => {
    elInput && elInput.focus()
  }

  return (
    <>
      <div onClick={onToggleChannelModal} className='modal-screen'></div>
      <form onSubmit={(ev) => onAddChannel(ev)} className='add-channel-modal'>
        <label className='form-header'>New channel</label>
        <input
          ref={inputRefFunc}
          onChange={handleChange}
          type='text'
          name='name'
          id='name'
          className='form-channel-name'
          placeholder='Channel name'
          minLength={3}
          maxLength={20}
          required
        />
        <textarea
          onChange={handleChange}
          name='description'
          id='description'
          className='form-channel-description'
          placeholder='Channel description'
          minLength={10}
          required
        />
        <button className='form-save-btn'>Save</button>
      </form>
    </>
  )
}
