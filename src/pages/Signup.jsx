import { useNavigate } from 'react-router-dom'
import { useForm } from '../customHooks/useForm'
import { userService } from '../services/user.service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImagePortrait } from '@fortawesome/free-solid-svg-icons'
import HashLoader from 'react-spinners/HashLoader'
import { useState } from 'react'

export const Signup = () => {
  const [isLoading, setLoading] = useState(false)
  const [handleChange] = useForm()
  const navigate = useNavigate()

  const onSignup = async (ev) => {
    ev.preventDefault()
    setLoading(true)
    const { name, img } = ev.target.elements
    const res = await userService.uploadUserImg(img.files[0])
    userService.signup(name.value, res.url)
    navigate('/')
  }

  return (
    <section className='signup-container main-layout full'>
      {isLoading ? (
        <HashLoader color='#9B9B9B' loading={isLoading} size={150} />
      ) : (
        <form className='signup-form' onSubmit={onSignup}>
          <label className='signup-form-header'>Sign up</label>
          <input onChange={handleChange} type='text' name='name' id='name' className='username' maxLength={8} placeholder='Username' required />
          <label>
            <span className='upload-user-img'>
              <h1>Choose image</h1>
              <FontAwesomeIcon icon={faImagePortrait} />
            </span>
            <input onChange={handleChange} type='file' name='img' id='img' className='user-img' accept='image/png, image/jpeg' required />
          </label>
          <button>Sign up</button>
        </form>
      )}
    </section>
  )
}
