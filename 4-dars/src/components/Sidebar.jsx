import { Fragment } from 'react'

import { sidebarData } from '../___mock__/data'
import { Link } from './Links'

function Sidebar() {
  return (
    <div>
      {sidebarData.map((sidebarItem, idx) => (
        <div key={idx}>
          <h1>{sidebarItem.menuTitle}</h1>
          {/* {sidebarItem.menuItems.map((item, key) => (
            <Fragment key={key}>
              <Link href={item.link} textContent={item.title} />
              <br />
            </Fragment>
          ))} */}
          <Link data={sidebarItem.menuItems} />
        </div>
      ))}
    </div>
  )
}
export default Sidebar
