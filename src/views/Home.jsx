import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setInitialValue } from '../redux/actions';
import { getCurrency, getInitialLoan, getInitialDate } from '../utils/helpers';
import Header from '../components/Header';
import Payment from '../components/Payment';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const currency = getCurrency();
    const initialLoan = getInitialLoan();
    const initialDate = getInitialDate();
    dispatch(setInitialValue(currency, initialLoan, initialDate)); //@todo: api get para obtener la información
  }, [dispatch]);

  return (
    <div className="flex h-screen items-start justify-center pt-32">
      <div className="w-1/2">
        <Header />
        <Payment />
      </div>
    </div>
  );
}
