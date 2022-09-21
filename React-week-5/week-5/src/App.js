import './App.css';
import Age from './components/Age';
import UserInfo from './components/UserInfo';
import CompanyInfo from './components/CompanyInfo';
import withUserId from './components/withUserId';

import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import { actionCreators } from './store/index'


// const testUser = {
//   name: "Leanne",
//   username: "Bret",
//   email: "testemail@email.com"
// }

const SomeUserInfo = withUserId(UserInfo)
const SomeCompanyInfo = withUserId(CompanyInfo)

function App() {
  const account = useSelector(state => state.account)
  const dispatch = useDispatch()

  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)
  // console.log(actions)


  return (
    <div className="App">
      <h1>{account}</h1>
      <div>
        <button onClick={() => depositMoney(5)}>Deposit</button>
        <button onClick={() => withdrawMoney(1)}>Withdraw</button>
      </div>
      <Age name='Tobi' age={2} />
      {/* <UserInfo user={testUser} /> */}
      <SomeUserInfo userId={1} />
      <SomeCompanyInfo userId={1} />
      <SomeUserInfo userId={2} />
      <SomeCompanyInfo userId={2} />
    </div>
  );
}

export default App;
