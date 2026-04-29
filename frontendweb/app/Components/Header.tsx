"use client"
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { usePurchaseContext } from "../context/PurchaseContext";

export default function Header() {
    const {itemsInCart} = usePurchaseContext();
    return (
         <header className="flex w-screen h-20 bg-black">
            <div>Inventory System</div>
            
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton />
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
            <div className="relative inline-flex h-8 w-8 items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">
                  shopping_cart
                </span>
                <span className="absolute -right-1 -bottom-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-semibold leading-none text-white">
                  {0}
                </span>
              </div>
          </header> 
    )
}