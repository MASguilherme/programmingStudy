import { useState, useEffect, useMemo } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailLength = useMemo(()=>{
    console.log('executou');
    return email.length;
  }, [email]);

  const handleLogin = () => {
    console.log("Dados enviados: E-mail: " + email + " Senha: " + password);
  };

  return (
    <div>
      <p>Quantidade de caracteres do e-mail: {emailLength}</p>
      <form>
        <label>
          <span>E-mail: </span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
    </div>
  );
};
