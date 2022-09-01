export const MemberPreview = ({ member }) => {
  return (
    <section className='member-preview'>
      <img className='member-img' src={member.img} alt='member-img' />
      <h2 className='member-name'>{member.name}</h2>
    </section>
  )
}
