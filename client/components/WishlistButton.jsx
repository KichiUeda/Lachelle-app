import React from 'react';
import styled from 'styled-components';

const WishlistButtonStyled = styled.button`
color: #a3a3a3;
background: #2e2f2d;
height: 24.86px;
border-radius: 3px;
width: 338.5px;
margin: 0 auto;
font-weight: bold;
text-transform: uppercase;
border: none;
&:hover {
  color: orange;
}
`;

const WishlistButton = (props) => {
  return (

    <WishlistButtonStyled className='pricePromo-wishlist-button'><span className="fa fa-star"></span>Add to Wishlist</WishlistButtonStyled>

  );
};

export default WishlistButton;