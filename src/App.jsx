import "./styles/App.css";
import users from './data/users';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <header >
        <h1 className="">User Profiles:</h1>
      </header>
      <div className="user-profile-wrapper">
        {users.map((user, index) => {
           return <UserProfile key={index} user={user} img={user.imgUrl} />
        })}
      </div>
    </div>
  );
}

export default App;
