import React, { useState } from "react";
import { Form, Title, Input, Button } from "./FormStyled";

const Register = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(email, name, password);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Title>Register</Title>
      <label>
        <Input
          type="name"
          placeholder="Name"
          // pattern="^[A-ZA-ZА-ЯА-Я]+(([' -][A-ZA-ZА-ЯА-Я])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
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
      <Button type="submit">Sign up</Button>
    </Form>
  );
};

export default Register;

// class Register extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     this.props.handleSubmit({
//       email: this.state.email,
//       name: this.state.name,
//       password: this.state.password,
//     });
//   };

//   render() {
//     return (
//       <Form onSubmit={this.onSubmit}>
//         <Title>Register</Title>
//         <label>
//           <Input
//             type="name"
//             placeholder="Name"
//             // pattern="^[A-ZA-ZА-ЯА-Я]+(([' -][A-ZA-ZА-ЯА-Я])?[a-zA-Zа-яА-Я]*)*$"
//             value={this.state.name}
//             onChange={(e) => this.setState({ name: e.target.value })}
//             required
//           />
//         </label>
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
//         <Button type="submit">Sign up</Button>
//       </Form>
//     );
//   }
// }

// export default Register;
