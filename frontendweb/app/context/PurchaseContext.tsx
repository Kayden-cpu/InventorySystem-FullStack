"use client"

import { createContext, useContext, useState, type ReactNode } from "react";
import { InventoryItem } from "../Objects/InvetoryItem";

export interface CartItem {
    item: InventoryItem;
    quantity: number;
}

export interface PurchaseContextValue {
    itemsInCart: CartItem[];
    addItemToCart: (item: InventoryItem, quantity?: number) => void;
    updateItemQuantity: (itemId: number, quantity: number) => void;
    removeItemFromCart: (itemId: number) => void;
}

export const PurchaseContext = createContext<PurchaseContextValue>({
    itemsInCart: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {},
    removeItemFromCart: () => {}
})

export function PurchaseHandlerProvider({
children
}: {children: ReactNode}) {
    const [itemsInCart, setItemsInCart] = useState<CartItem[]>([]);

    const addItemToCart = (item: InventoryItem, quantity: number = 1) => {
        setItemsInCart(prev => {
            const existing = prev.find(cartItem => cartItem.item.id === item.id);
            if (existing) {
                return prev.map(cartItem =>
                    cartItem.item.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                );
            } else {
                return [...prev, { item, quantity }];
            }
        });
    };

    const updateItemQuantity = (itemId: number, quantity: number) => {
        if (quantity <= 0) {
            removeItemFromCart(itemId);
            return;
        }
        setItemsInCart(prev =>
            prev.map(cartItem =>
                cartItem.item.id === itemId
                    ? { ...cartItem, quantity }
                    : cartItem
            )
        );
    };

    const removeItemFromCart = (itemId: number) => {
        setItemsInCart(prev => prev.filter(cartItem => cartItem.item.id !== itemId));
    };

    return (
        <PurchaseContext.Provider value={{ itemsInCart, addItemToCart, updateItemQuantity, removeItemFromCart }}>
            {children}
        </PurchaseContext.Provider>
    )
}

export const usePurchaseContext = () => {
    return useContext(PurchaseContext)
}