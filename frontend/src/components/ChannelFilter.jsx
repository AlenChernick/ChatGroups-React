import { memo } from 'react'
import { useFormRegister } from '../customHooks/useFormRegister'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const ChannelFilter = memo((props) => {
  const [register] = useFormRegister(
    {
      channelName: '',
    },
    props.onChangeFilter
  )
  return (
    <form className='channel-filter'>
      <label className='channel-filter-actions'>
        <span>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input {...register('channelName')} type='text' placeholder='Search' />
      </label>
    </form>
  )
})
