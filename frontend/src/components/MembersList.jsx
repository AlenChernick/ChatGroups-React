import { MemberPreview } from './MemberPreview.jsx'

export const MemberList = ({ members }) => {
  return (
    <section className='member-list'>
      <h1 className='member-list-header'>Members</h1>
      {members.map((member) => (
        <MemberPreview key={member._id} member={member} />
      ))}
    </section>
  )
}
