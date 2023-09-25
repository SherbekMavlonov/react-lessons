export const GroupCard = ({
  name,
  course,
  startedDate,
  room,
  students,
  time,
  days,
}) => {
  return (
    <div className='box'>
      <p>Group Name: {name}</p>
      <p>Course: {course.title}</p>
      <p>Started: {startedDate}</p>
      <p>Room: {room.name}</p>
      <p>Students: {students.length}</p>
      <p>Time: {time}</p>
      <div className='d-flex'>
        {days.map((day, idx) => (
          <p key={idx}>{day}</p>
        ))}
      </div>
    </div>
  )
}
