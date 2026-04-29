"use client";

import { usePurchaseContext, CartItem } from "../context/PurchaseContext";

export default function CartView() {
  const {
    itemsInCart,
    addItemToCart,
    updateItemQuantity,
    removeItemFromCart,
  } = usePurchaseContext();

  const total = itemsInCart.reduce(
    (sum: number, cartItem: CartItem) => sum + cartItem.item.price * cartItem.quantity,
    0
  );

  const buyNow = () => {
    console.log("Purchasing:", itemsInCart);
    alert(`Buying ${itemsInCart.length} item(s) for $${total.toFixed(2)}`);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-4 text-white">
      {itemsInCart.length === 0 && (
        <p className="text-gray-400">Cart is empty</p>
      )}

      {itemsInCart.map((cartItem: CartItem) => (
        <div
          key={cartItem.item.id}
          className="flex items-center justify-between bg-gray-900 p-4 rounded-lg"
        >
          {/* Item Info */}
          <div>
            <p className="font-semibold">{cartItem.item.name}</p>
            <p className="text-sm text-gray-400">
              ${cartItem.item.price.toFixed(2)}
            </p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                updateItemQuantity(
                  cartItem.item.id,
                  cartItem.quantity - 1
                )
              }
              className="px-2 bg-gray-700 rounded"
            >
              -
            </button>

            <span>{cartItem.quantity}</span>

            <button
              onClick={() =>
                updateItemQuantity(
                  cartItem.item.id,
                  cartItem.quantity + 1
                )
              }
              className="px-2 bg-gray-700 rounded"
            >
              +
            </button>

            <button
              onClick={() => removeItemFromCart(cartItem.item.id)}
              className="ml-3 text-red-400"
            >
              remove
            </button>
          </div>
        </div>
      ))}

      {/* Buy Now */}
      {itemsInCart.length > 0 && (
        <button
          onClick={buyNow}
          className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg font-semibold"
        >
          Buy Now (${total.toFixed(2)})
        </button>
      )}
    </div>
  );
}