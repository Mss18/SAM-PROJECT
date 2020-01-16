import React, { useEffect } from 'react';
import { useCart } from '../shared/context/cart-context';
import { useHistory } from 'react-router';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { usePack } from '../shared/context/package-context';
import { useAuth } from '../shared/context/auth-context';

function Confirmation() {
  const { resetCart } = useCart();
  const {
    resetPack,
    code
  } = usePack();
  const { role } = useAuth();

  const history = useHistory();

  useEffect(() => {
    resetCart();
    resetPack();
  }, []);

  const goCatalogue = () => history.push('/catalogue');
  console.log(code);
  return (
    <React.Fragment>
      <Header />
      <div className='top'>
        {code.length > 0 && (
          <div>
            <p>CODIGO GENERADO: <span className='code'>{code}</span></p>
            <p>Gracias por usar SAM</p>
          </div>
        )}
        {code.length === 0 && (
          <p>GRACIAS POR COMPRAR EN SAM</p>
        )}
        <button onClick={goCatalogue}>Seguir comprando</button>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export { Confirmation };
