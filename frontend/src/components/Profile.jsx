import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router';

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user)
    return (
      <div className="container d-flex flex-column min-view-height justify-content-center align-items-center gap-2">
        <p>No has iniciado sesión</p>
        <Link className="btn btn-primary rounded-1 py-2 px-5" to={'/login'}>Ir al login</Link>
      </div>
    );

  return (
    <div>
      <h2>
        Bienvenido, {user.nombre} {user.apellido}
      </h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
