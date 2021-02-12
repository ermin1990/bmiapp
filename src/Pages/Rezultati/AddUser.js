import React from "react";
import { connect } from "react-redux"
import { addUser } from "../../store/actions/listsActions";


class AddUser extends React.Component {
  state = {
    id:"",
    imeiprezime: "",
    godina: "",
    visina: "",
    kliogrami: ""
  };

  handleChange = (e) => {
    this.setState({
      
      [e.target.id]: e.target.value
      
    })
    console.log(this.state);
  }
  handleSubmit = (e) => {
    e.preventDefault();
   
    this.props.addUser(this.state)
  }

  render() {
    return (
      <div className="container-fluid text-left d-flex justify-content-center">
        <form onSubmit={this.handleSubmit} className="text-center d-flex">
          <div className="form-group">
            <h3>Unesite tražene podatke</h3>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Unesite ime i prezime"
              id="imeiprezime"
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Koliko dijete ima godina"
              id="godina"
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Visina djeteta"
              id="visina"
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Težina"
              id="kliogrami"
              onChange={this.handleChange}
            />
            <br />
            <hr />
            <button className="btn btn-warning" >Snimi podatke</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    addUser:(user) =>dispatch(addUser(user))
  }
}

export default connect(null ,mapDispatchToProps)(AddUser);
