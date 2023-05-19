import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
const stripe_public_api_key = 'pk_test_51N7vHaCN6CQfSvOSdOUUSqzBSi7S9pe0czsvyWLsK162OQ35WAwxb6NfFmPWmnEJNR0826vGtUAglc3UUZWKLFLv00ljuJy1zl';
const promise = loadStripe(stripe_public_api_key)

import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebase';

import { useStateValue } from './StateProvider'
import './App.css'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
import Orders from './Orders'
import Footer from './Footer'
import Firestore from './Firestore';

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //This willl only run once when the app component loads
    console.log('running useEffect');
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChange);

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [])

  const handleAuthStateChange = (user) => {
    if (user) {
      // User is signed in
      // You can perform any necessary actions when the user is signed in
      console.log('User is signed in:', user);

      dispatch({
        type: "SET_USER",
        user: user
      })
    } else {
      // User is signed out
      // You can perform any necessary actions when the user is signed out
      console.log('User is signed out');
      dispatch({
        type: "SET_USER",
        user: null
      })
    }
  };

  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      {/* Your component hierarchy */}
      <Router>
        <div className="app">
          <div className="content">
            <Routes>
              <Route path="/login" element={<Login></Login>} />
              <Route path="/payment" element={
                <>
                  <Header />
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                </>
              } />
              <Route path="/checkout" element={
                <>
                  <Header />
                  <Checkout />
                </>
              } />
              <Route path='/orders' element={
                <>
                  <Header />
                  <Orders />
                </>
              } />
              <Route path="/" element={
                <>
                  <Header />
                  {/* <Firestore></Firestore> */}
                  <Home />
                </>
              } />
            </Routes>
          </div>
          <Footer className="footer"></Footer>
        </div>
      </Router>
    </FirebaseAppProvider>
  )
}

export default App


// npm install @stripe/stripe-js
// npm install @stripe/react-stripe-js
// Create a Stripe account
// Public api key
// pk_test_51N7vHaCN6CQfSvOSdOUUSqzBSi7S9pe0czsvyWLsK162OQ35WAwxb6NfFmPWmnEJNR0826vGtUAglc3UUZWKLFLv00ljuJy1zl
// Have to have a Blaze plan on firebase
