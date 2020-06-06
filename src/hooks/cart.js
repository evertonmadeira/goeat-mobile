import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      // Não entendi muito bem a lógica do getItem nesse trecho
      const cart = await AsyncStorage.getItem('@GoEats:cart');
      // Caso exista o objeto JSON será repassado aao Array de produtos
      if (cart) {
        setProducts(JSON.parse(cart));
      }
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async (product) => {
      // TODO ADD A NEW ITEM TO THE CART
      const newCart = [...products];
      // Verifica no Array se já contém algum item igual
      const dataProduct = newCart.findIndex((item) => item._id === product._id);

      // Caso possua, a quantidade é incrementada, senão um novo é adicionado ao Array de produtos do carrinho
      if (dataProduct >= 0) {
        newCart[dataProduct].quantity += 1;
      } else {
        newCart.push({ ...product, quantity: 1 });
      }
      // Seta o produto contidos no Array de produtos
      setProducts(newCart);
      // Atualiza o carrinho
      await AsyncStorage.setItem('@GoEats:cart', JSON.stringify(products));
    },
    [products],
  );

  const removeToCart = useCallback(async () => {
    const emptyCart = [...products];

    try {
      while (emptyCart.length) {
        emptyCart.pop();
      }

      setProducts(emptyCart);

      await AsyncStorage.removeItem('@GoEats:cart');
    } catch (error) {
      console.log(error);
    }
  }, [products]);

  const increment = useCallback(
    async (id) => {
      // TODO INCREMENTS A PRODUCT QUANTITY IN THE CART
      const incrementedCart = [...products];

      const dataProduct = incrementedCart.findIndex((item) => item._id === id);

      dataProduct >= 0 ? (incrementedCart[dataProduct].quantity += 1) : null;

      setProducts(incrementedCart);

      await AsyncStorage.setItem('@GoEats:cart', JSON.stringify(products));
    },
    [products],
  );

  const decrement = useCallback(
    async (id) => {
      // TODO DECREMENTS A PRODUCT QUANTITY IN THE CART
      const decrementedCart = [...products];

      const dataProduct = decrementedCart.findIndex((item) => item._id === id);

      dataProduct >= 0 && decrementedCart[dataProduct].quantity > 1
        ? (decrementedCart[dataProduct].quantity -= 1)
        : null;

      setProducts(decrementedCart);

      await AsyncStorage.setItem('@GoEats:cart', JSON.stringify(products));
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, removeToCart, increment, decrement, products }),
    [products, addToCart, removeToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}

export { CartProvider, useCart };
