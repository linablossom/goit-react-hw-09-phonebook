import React, { useState } from "react";
import { Form, Title, Input, Button } from "./FormStyled";

const Login = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(email, password);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Title>Login</Title>
      <label>
        <Input
          type="email"
          placeholder="Email"
          // pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        <Input
          type="password"
          placeholder="Password"
          // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <Button type="submit">Log in</Button>
    </Form>
  );
};

export default Login;

// class Login extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     this.props.handleSubmit({
//       email: this.state.email,
//       password: this.state.password,
//     });
//   };

//   render() {
//     return (
//       <Form onSubmit={this.onSubmit}>
//         <Title>Login</Title>
//         <label>
//           <Input
//             type="email"
//             placeholder="Email"
//             // pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
//             value={this.state.email}
//             onChange={(e) => this.setState({ email: e.target.value })}
//             required
//           />
//         </label>
//         <label>
//           <Input
//             type="password"
//             placeholder="Password"
//             // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
//             value={this.state.password}
//             onChange={(e) => this.setState({ password: e.target.value })}
//             required
//           />
//         </label>
//         <Button type="submit">Log in</Button>
//       </Form>
//     );
//   }
// }

// export default Login;
