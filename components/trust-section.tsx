import { Coffee, Cake, Sofa, Star } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Specialty Coffee",
    description: "Carefully selected and freshly brewed beans from sustainable farms around the world.",
  },
  {
    icon: Cake,
    title: "Fresh Desserts",
    description: "Baked daily using quality ingredients. From croissants to tiramisu, always fresh.",
  },
  {
    icon: Sofa,
    title: "Cozy Atmosphere",
    description: "Perfect place to work, relax, or meet friends. Free Wi-Fi and comfortable seating.",
  },
]

const reviews = [
  {
    name: "Emma R.",
    review: "Amazing coffee and such a cozy place. My favorite cafe in the city!",
    rating: 5,
  },
  {
    name: "Daniel M.",
    review: "Perfect spot to work with a laptop and enjoy great coffee. The baristas are true artists.",
    rating: 5,
  },
  {
    name: "Sophie K.",
    review: "The avocado toast and cappuccino combo is unbeatable. I come here every weekend!",
    rating: 5,
  },
]

export function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Why People Love Urban Coffee Bar
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            More than just coffee. An experience crafted with care.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="bg-card p-6 rounded-lg shadow-sm">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">{`"${review.review}"`}</p>
                <p className="font-semibold text-foreground">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
