import Button from './components/Button'
import { Group } from './components/Group'
import RoleBadge from './components/RoleBadge'

const group = {
  startTime: '',
}

const App = () => (
  <div>
    {/* <MyFirstComponent text='salom dunyo' className={'heading'} />
<MyFirstComponent text={'salom dunyo 1'} /> */}
    {/* 
    <div>
      <Button btnTitle={'Kirish'} disabled={true} />
      <Button btnTitle={'Chiqish'} />
      <Button btnTitle={'Send'} />
      <Button btnTitle={'Close'} />
    </div>
    <br />
    <br />
    <div>
      <RoleBadge role={'CEO'} />
      <RoleBadge role={'Teacher'} />
    </div> */}

    <Group />
  </div>
)

export default App
