"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingBag, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart-context"

const categories = ["Coffee", "Desserts", "Breakfast"] as const

type Category = (typeof categories)[number]

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
  badge?: "Best Seller" | "Chef's Choice" | "Most Popular"
}

const menuItems: Record<Category, MenuItem[]> = {
  Coffee: [
    {
      name: "Signature Espresso",
      description: "Rich, bold, and perfectly balanced double shot",
      price: "$3.50",
      image: "/images/espresso.jpg",
      badge: "Best Seller",
    },
    {
      name: "Caramel Latte",
      description: "Smooth espresso with steamed milk and caramel drizzle",
      price: "$5.25",
      image: "/images/caramel-latte.jpg",
      badge: "Most Popular",
    },
    {
      name: "Cold Brew",
      description: "Slow-steeped for 18 hours, smooth and refreshing",
      price: "$4.50",
      image: "/images/cold-brew.jpg",
    },
    {
      name: "Vanilla Cappuccino",
      description: "Classic cappuccino with a hint of Madagascar vanilla",
      price: "$4.75",
      image: "/images/cappuccino.jpg",
    },
    {
      name: "Chocolate Mocha",
      description: "Espresso blended with rich chocolate and steamed milk",
      price: "$5.50",
      image: "/images/mocha.jpg",
    },
    {
      name: "Flat White",
      description: "Velvety microfoam with a double shot of espresso",
      price: "$4.50",
      image: "/images/flat-white.jpg",
    },
    {
      name: "Americano",
      description: "Bold espresso with hot water, smooth and strong",
      price: "$3.75",
      image: "/images/americano.jpg",
    },
    {
      name: "Matcha Latte",
      description: "Premium Japanese matcha with creamy steamed milk",
      price: "$5.75",
      image: "/images/matcha-latte.jpg",
      badge: "Chef's Choice",
    },
  ],
  Desserts: [
    {
      name: "Butter Croissant",
      description: "Flaky, golden layers of French pastry perfection",
      price: "$3.75",
      image: "/images/croissant.jpg",
      badge: "Best Seller",
    },
    {
      name: "Chocolate Éclair",
      description: "Choux pastry filled with cream, topped with chocolate",
      price: "$4.50",
      image: "/images/eclair.jpg",
    },
    {
      name: "Blueberry Muffin",
      description: "Fresh blueberries in a soft, buttery muffin",
      price: "$3.25",
      image: "/images/blueberry-muffin.jpg",
    },
    {
      name: "Tiramisu",
      description: "Classic Italian dessert with espresso and mascarpone",
      price: "$6.50",
      image: "/images/tiramisu.jpg",
      badge: "Chef's Choice",
    },
    {
      name: "New York Cheesecake",
      description: "Creamy cheesecake with graham crust and berry compote",
      price: "$6.00",
      image: "/images/cheesecake.jpg",
      badge: "Most Popular",
    },
  ],
  Breakfast: [
    {
      name: "Avocado Toast",
      description: "Smashed avocado on sourdough with poached eggs",
      price: "$12.50",
      image: "/images/avocado-toast.jpg",
      badge: "Best Seller",
    },
    {
      name: "Eggs Benedict",
      description: "Poached eggs, ham, hollandaise on English muffin",
      price: "$14.00",
      image: "/images/eggs-benedict.jpg",
    },
    {
      name: "Granola Bowl",
      description: "House-made granola with Greek yogurt and berries",
      price: "$9.50",
      image: "/images/granola-bowl.jpg",
      badge: "Chef's Choice",
    },
    {
      name: "French Toast",
      description: "Brioche bread with maple syrup and fresh fruits",
      price: "$11.00",
      image: "/images/french-toast.jpg",
    },
    {
      name: "Fluffy Pancakes",
      description: "Stack of golden pancakes with maple syrup and berries",
      price: "$10.50",
      image: "/images/pancakes.jpg",
      badge: "Most Popular",
    },
  ],
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("Coffee")
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set())
  const { addItem } = useCart()

  const handleAddToCart = (item: MenuItem) => {
    addItem({
      name: item.name,
      price: item.price,
      image: item.image,
    })
    
    // Show "Added" feedback
    setAddedItems((prev) => new Set(prev).add(item.name))
    setTimeout(() => {
      setAddedItems((prev) => {
        const next = new Set(prev)
        next.delete(item.name)
        return next
      })
    }, 1500)
  }

  return (
    <section id="menu" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Menu</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Crafted with Passion
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From our signature espresso to freshly baked pastries, every item is made with care and the finest ingredients.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-card/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems[activeCategory].map((item) => (
            <div
              key={item.name}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {item.badge && (
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                    {item.badge}
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                  <span className="font-serif font-semibold text-primary">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                <Button 
                  size="sm" 
                  className={cn(
                    "w-full transition-all",
                    addedItems.has(item.name)
                      ? "bg-green-600 hover:bg-green-600 text-white"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  )}
                  onClick={() => handleAddToCart(item)}
                >
                  {addedItems.has(item.name) ? (
                    <>
                      <Check className="w-4 h-4 mr-1" />
                      Added
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 mr-1" />
                      Add to Cart
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
