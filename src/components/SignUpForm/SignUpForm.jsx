import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css'
import { Form, Card, FloatingLabel } from 'react-bootstrap';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    // alert(JSON.stringify(this.state));
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      console.log("This props brah? ", user)
      // Update user state with user
      this.props.setUser(user);
    } catch {
      // Invalid signup
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div >
        <div >
          <form className="form-container" autoComplete="off" onSubmit={this.handleSubmit}>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required placeholder="enter name"/>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required placeholder="enter email"/>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required placeholder="enter password"/>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required placeholder="confirm password" />
            <button class="btn-signup" type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}