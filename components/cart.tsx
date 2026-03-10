"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import { X, Minus, Plus, ShoppingBag, Trash2, Clock, CheckCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart } from "@/lib/cart-context"
import { cn } from "@/lib/utils"

type CartStep = "cart" | "form" | "success"

export function Cart() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice, isOpen, setIsOpen } = useCart()
  const [step, setStep] = useState<CartStep>("cart")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [pickupTime, setPickupTime] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setStep("success")
  }

  const handleClose = () => {
    setIsOpen(false)
    // Reset after animation
    setTimeout(() => {
      if (step === "success") {
        setStep("cart")
        setName("")
        setPhone("")
        setPickupTime("")
        clearCart()
      }
    }, 300)
  }

  const handleBackToCart = () => {
    setStep("cart")
  }

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Open cart"
      >
        <ShoppingBag className="w-6 h-6" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-foreground/50 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Cart Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-xl transition-transform duration-300 ease-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="font-serif text-xl font-semibold text-foreground">Your Order</h2>
            {totalItems > 0 && (
              <span className="bg-secondary text-secondary-foreground text-sm px-2 py-0.5 rounded-full">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground mb-2">Your cart is empty</p>
              <p className="text-sm text-muted-foreground/70">Add items from our menu to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-secondary/50 rounded-lg p-3">
                  {/* Image */}
                  <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground truncate">{item.name}</h3>
                    <p className="text-sm text-primary font-semibold">{item.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center bg-background rounded-md hover:bg-muted transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center bg-background rounded-md hover:bg-muted transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1.5 text-muted-foreground hover:text-destructive transition-colors self-start"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - Cart Step */}
        {items.length > 0 && step === "cart" && (
          <div className="border-t border-border p-6 space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-serif text-xl font-semibold text-foreground">${totalPrice.toFixed(2)}</span>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                size="lg"
                onClick={() => setStep("form")}
              >
                Pre-Order Now
              </Button>
              <button
                onClick={clearCart}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear cart
              </button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              Order ahead and pick up when ready
            </p>
          </div>
        )}

        {/* Form Step */}
        {step === "form" && (
          <div className="flex-1 overflow-y-auto p-6">
            <button
              onClick={handleBackToCart}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to cart
            </button>

            <div className="mb-6">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Complete Your Pre-Order</h3>
              <p className="text-sm text-muted-foreground">
                Fill in your details and we&apos;ll have your order ready when you arrive.
              </p>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-secondary border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (234) 567-890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="bg-secondary border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pickupTime">Preferred Pickup Time (optional)</Label>
                <Input
                  id="pickupTime"
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="bg-secondary border-border"
                />
                <p className="text-xs text-muted-foreground">Leave empty for ASAP</p>
              </div>

              {/* Order Summary */}
              <div className="bg-secondary/50 rounded-lg p-4 mt-6">
                <h4 className="font-medium text-foreground mb-3">Order Summary</h4>
                <div className="space-y-2 text-sm">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="text-muted-foreground">{item.quantity}x {item.name}</span>
                      <span className="text-foreground">{item.price}</span>
                    </div>
                  ))}
                  <div className="border-t border-border pt-2 mt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                size="lg"
                disabled={isSubmitting || !name || !phone}
              >
                {isSubmitting ? "Placing Order..." : "Place Pre-Order"}
              </Button>
            </form>
          </div>
        )}

        {/* Success Step */}
        {step === "success" && (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Order Confirmed!</h3>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Thank you, {name}! Your order has been received. We&apos;ll have everything ready for you.
            </p>
            
            <div className="bg-secondary/50 rounded-lg p-4 w-full max-w-xs mb-6">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Clock className="w-4 h-4" />
                <span className="font-medium">
                  {pickupTime ? `Pickup at ${pickupTime}` : "Ready in ~15 minutes"}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                We&apos;ll send a confirmation to your phone.
              </p>
            </div>

            <Button 
              onClick={handleClose}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Done
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
