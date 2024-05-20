import React from 'react';
import { Link } from 'react-router-dom';


const CheckOut = () => {
  
    return (
        <div className='checkout-cart' style={styles.container}>
            <h3 style={styles.heading}>
                Thanks for Shopping!!!
            </h3>
           
            <p style={styles.dispatchedMessage}>
               Your Items has been dispatched, it will reach to you soon!
            </p>
            <Link to="/" className="btn btn-default back-to-list-btn">
            Continue Shopping
          </Link>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    heading: {
       
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '10px',
    },
    
    dispatchedMessage: {
        fontSize: '18px',
        color: '#666',
    },
};

export default CheckOut;
