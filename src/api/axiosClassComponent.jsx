import React from 'react';
import axios from 'axios';

export default class AxiosClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      utilisateur: []
    };

    this.child = {
      backgroundColor: 'rgb(158,227,133)',
      width:'40%',
      margin:'4px auto',
      padding:'10px',
      border:'1px solid rgb(70,88, 64)',
      borderRadius:'4px',
      boxShadow:'8px rgb(210,217,208)',
    }
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.setState({ utilisateur: res.data });
      });
  }

  render() {
    return (
      <div>
        <h3>Liste utilisateur</h3>
        <div>
          <h1>Nombre d'utilisateur : {this.state.utilisateur.length}</h1>

          {this.state.utilisateur.map((user) => (
            <div className='child' key={user.id} style={this.child}>
              <h3>nom : {user.name} {user.username}</h3>
              <p>email : {user.email}</p>
              <p>ville : {user.address.city} rue : {user.address.street}</p>
            </div>
          ))}

        </div>
      </div>
    );
  }
}
