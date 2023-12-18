import { useState } from "react";


function LoginForms() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
   <div className="aplaflex">
   <div className="chkbx">

<input  type="checkbox" name="name"/>
<label htmlFor="name">Remember Me</label>

</div>
<a href="#">Change Password</a>
   </div>
      <div className="chkbx">

      <input  type="checkbox" name="name"/>
      <label htmlFor="name">Agree to <a href="#" className="gold">Terms and Conditions</a></label>
      
      </div>
      

      <button type="submit">Login</button>

      <p>
        Don't have an account? <a href="/signup">Register Here</a>
      </p>
    </form>
  );
}

export default LoginForms;