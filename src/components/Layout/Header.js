import { Fragment } from 'react';

import mealsImg from '../../assets/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  console.log(props);
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals for Order</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
