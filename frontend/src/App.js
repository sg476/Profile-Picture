import './App.css';
import Avatar from '@material-ui/core/Avatar';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row my-auto">
          <div className="col-4 offset-4 shadow">
            <b className="text-center">Upload your profile pic</b>
            <Avatar alt="Natacha" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
