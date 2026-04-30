"use client"

import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react"
import { usePurchaseContext } from "../context/PurchaseContext"

export default function Header() {
  const {
    itemsInCart,
    removeItemFromCart,
    updateItemQuantity,
    buyNow,
  } = usePurchaseContext()

  const [isCartOpen, setIsCartOpen] = useState(false)

  const total = itemsInCart.reduce(
    (sum: number, cartItem: { item: { price: number }; quantity: number }) => sum + cartItem.item.price * cartItem.quantity,
    0
  )

  const totalItems = itemsInCart.reduce(
    (sum: number, cartItem: { quantity: number }) => sum + cartItem.quantity,
    0
  )

  return (
    <>
      <header className="flex w-screen h-20 items-center justify-between bg-black px-4 text-white">
        <div>Inventory System</div>

        <div className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton>
              <button className="rounded bg-white/10 px-3 py-1 text-sm text-white transition hover:bg-white/20">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="rounded bg-white/10 px-3 py-1 text-sm text-white transition hover:bg-white/20">
                Sign Up
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>

          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative rounded bg-white/10 px-3 py-1 text-sm text-white transition hover:bg-white/20"
          >
            Cart ({totalItems})
          </button>
        </div>
      </header>

      {isCartOpen && (
        <div className="fixed top-20 right-4 w-80 bg-gray-800 p-4 rounded-lg shadow-lg z-50">
          <h3 className="text-lg font-semibold mb-4">Cart</h3>
          {itemsInCart.length === 0 ? (
            <p className="text-gray-400">Cart is empty</p>
          ) : (
            <>
              {itemsInCart.map((cartItem) => (
                <div key={cartItem.item.id} className="flex justify-between items-center mb-2">
                  <div>
                    <p>{cartItem.item.name}</p>
                    <p className="text-sm text-gray-400">${cartItem.item.price.toFixed(2)} x {cartItem.quantity}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateItemQuantity(cartItem.item.id, cartItem.quantity - 1)}
                      className="px-2 bg-gray-700 rounded"
                    >
                      -
                    </button>
                    <span>{cartItem.quantity}</span>
                    <button
                      onClick={() => updateItemQuantity(cartItem.item.id, cartItem.quantity + 1)}
                      className="px-2 bg-gray-700 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItemFromCart(cartItem.item.id)}
                      className="ml-2 text-red-400"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-600">
                <p className="font-semibold">Total: ${total.toFixed(2)}</p>
                <button
                  onClick={buyNow}
                  className="w-full mt-2 bg-green-600 hover:bg-green-700 py-2 rounded-lg font-semibold"
                >
                  Buy Now
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}