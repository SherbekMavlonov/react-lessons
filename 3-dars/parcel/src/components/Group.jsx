import { groups } from '../__mock__/data'
import { GroupCard } from './GroupCard'
export const Group = () => {
  return (
    <div>
      {groups.map((group, idx) => (
        <GroupCard
          key={idx}
          // time={group.time}
          // course={group.course}
          // students={group.students}
          // startedDate={group.startedDate}
          // room={group.room}
          // days={group.days}
          {...group}
        />
      ))}
    </div>
  )
}
