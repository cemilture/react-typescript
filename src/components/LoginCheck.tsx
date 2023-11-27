import { useState } from "react";
type TUser = {
  name: string;
  email: string;
  phone: string;
};

function LoginCheck() {
  const [user, setUser] = useState<TUser | null>(null); //ya da null yerine ({} as TUser) olarak tanımlayabilirim

  const handleLogin = () => {
    setUser({
      name: "Cemil",
      email: "cemilture@gmail.com",
      phone: "123432412312",
    });
  };

  const handleLogout = () => {
    setUser(null); //buraya da aynı şekilde ({} as TUser) değerini girmeliyim)
  };
  return (
    <div>
      <button onClick={handleLogin}>Giriş Yap</button>
      <button onClick={handleLogout}>Çıkış Yap</button>
      <div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
      </div>
    </div>
  );
}

export default LoginCheck;
