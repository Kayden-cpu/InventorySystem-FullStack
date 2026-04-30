"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { InventoryItem } from "../Objects/InvetoryItem"

export interface CartItem {
  item: InventoryItem
  quantity: number
}

interface PurchaseContextValue {
  itemsInCart: CartItem[]
  addItemToCart: (item: InventoryItem, quantity?: number) => void
  updateItemQuantity: (itemId: number, quantity: number) => void
  removeItemFromCart: (itemId: number) => void
  buyNow: () => void
}

const PurchaseContext = createContext<PurchaseContextValue | undefined>(undefined)

export const PurchaseHandlerProvider = ({ children }: { children: ReactNode }) => {
  const [itemsInCart, setItemsInCart] = useState<CartItem[]>([])

  const addItemToCart = (item: InventoryItem, quantity: number = 1) => {
    setItemsInCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.item.id === item.id)
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      }
      return [...prev, { item, quantity }]
    })
  }

  const updateItemQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeItemFromCart(itemId)
      return
    }
    setItemsInCart((prev) =>
      prev.map((cartItem) =>
        cartItem.item.id === itemId ? { ...cartItem, quantity } : cartItem
      )
    )
  }

  const removeItemFromCart = (itemId: number) => {
    setItemsInCart((prev) => prev.filter((cartItem) => cartItem.item.id !== itemId))
  }

  const buyNow = () => {
    const total = itemsInCart.reduce(
      (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
      0
    )
    console.log("Purchasing:", itemsInCart)
    alert(`Buying ${itemsInCart.length} item(s) for $${total.toFixed(2)}`)
  }

  const value: PurchaseContextValue = {
    itemsInCart,
    addItemToCart,
    updateItemQuantity,
    removeItemFromCart,
    buyNow,
  }

  return <PurchaseContext.Provider value={value}>{children}</PurchaseContext.Provider>
}

export const usePurchaseContext = () => {
  const context = useContext(PurchaseContext)
  if (!context) {
    throw new Error("usePurchaseContext must be used within a PurchaseHandlerProvider")
  }
  return context
}