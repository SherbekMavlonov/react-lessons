export const Link = ({ data }) => (
  <>
    {data.map(({ title, link }) => (
      <>
        <a href={link}>{title}</a>
        <br />
      </>
    ))}
  </>
)
