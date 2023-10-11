import PropTypes from 'prop-types'
function JobCard({ company_name, title, description, location }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <h2>{company_name}</h2>
        <h3>{location}</h3>
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <div>{description}</div>
    </div>
  )
}
export default JobCard

JobCard.propTypes = {
  slug: PropTypes.string,
  company_name: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  remote: PropTypes.bool,
  tags: PropTypes.array,
  job_types: PropTypes.array,
  location: PropTypes.string,
  created_at: PropTypes.number,
}
