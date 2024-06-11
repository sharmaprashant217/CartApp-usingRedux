import {useEffect} from 'react';
import AppNavigator from '../AppNavigator';
import {useDispatch} from 'react-redux';
import {addMyProducts} from '../redux/MyProductSlice';
let items = [
  {
    id: 'e480c1bc1262',
    name: 'Adidas Ultraboost',
    brand: 'Adidas',
    price: 10999,
    qty: 0,
    image:
      'https://img.freepik.com/premium-photo/dark-black-boots-with-shoelace_216548-613.jpg?size=626&ext=jpg&ga=GA1.1.526284116.1712737793&semt=ais',
  },
  {
    id: 'bbef50cf02e2',
    name: 'Nike Air Max 270',
    brand: 'Nike',
    price: 8999,
    qty: 0,
    image:
      'https://img.freepik.com/free-photo/clothing-elegance-white-fashion-modern_1203-6524.jpg?size=626&ext=jpg',
  },
  {
    id: 'bd66a766c63e',
    name: 'Reebok Classic ',
    brand: 'Reebok',
    price: 6499,
    qty: 0,
    image:
      'https://img.freepik.com/free-photo/shoes_1203-8152.jpg?size=626&ext=jpg',
  },
  {
    id: '93c3b04133bc',
    name: 'Puma RS-X ',
    brand: 'Puma',
    price: 7999,
    qty: 0,
    image:
      'https://img.freepik.com/free-psd/view-bowling-shoes_23-2150953861.jpg?size=626&ext=jpg',
  },
];

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    items.map(item => {
      dispatch(addMyProducts(item));
    });
  }, []);
  return <AppNavigator />;
};

export default Main;
