import "../src/app/globals.css";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
    const [cart, setCart] = useState({});
    const [subTotal, setSubTotal] = useState(0);
    console.log(cart)
    const saveCart = (myCart) => {
        localStorage.setItem("cart", JSON.stringify(myCart));

        let subt = 0;
        let keys = Object.keys(myCart);

        for (let i = 0; i < keys.length; i++) {
            subt += myCart[keys[i]].price * myCart[keys[i]].qty;
        }

        setSubTotal(subt);
    };

    useEffect(() => {
        try {
            if (localStorage.getItem("cart")) {
                const storedCart = JSON.parse(localStorage.getItem("cart"));
                setCart(storedCart);
                saveCart(storedCart);
            }
        } catch (error) {
            console.error("Cart load error:", error);
            localStorage.clear();
        }
    }, []);

    const addToCart = (itemCode, qty, price, name, size, variant) => {
        let newCart = { ...cart };

        if (itemCode in newCart) {
            newCart[itemCode].qty += qty;
        } else {
            newCart[itemCode] = { qty: 1, price, name, size, variant };
        }

        setCart(newCart);
        saveCart(newCart);
    };

    const removeFromCart = (itemCode, qty, price, name, size, variant) => {
        let newCart = { ...cart };

        if (itemCode in newCart) {
            newCart[itemCode].qty -= qty;
            if (newCart[itemCode].qty <= 0) {
                delete newCart[itemCode];
            }
        }

        setCart(newCart);
        saveCart(newCart);
    };

    const clearCart = () => {
        setCart({});
        saveCart({});
    };

    return (
        <Layout
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            subTotal={subTotal}
        >
            <Component
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
                subTotal={subTotal}
                {...pageProps}
            />
        </Layout>
    );
}

export default MyApp;
