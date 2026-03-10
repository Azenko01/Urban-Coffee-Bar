import Image from "next/image"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Barista creating latte art", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/cafe-interior.jpg", alt: "Cozy cafe interior", span: "" },
  { src: "/images/gallery-2.jpg", alt: "Fresh pastries display", span: "" },
  { src: "/images/gallery-3.jpg", alt: "Cozy reading corner", span: "" },
  { src: "/images/gallery-4.jpg", alt: "Professional espresso machine", span: "" },
  { src: "/images/gallery-5.jpg", alt: "Morning coffee flat lay", span: "md:col-span-2" },
  { src: "/images/gallery-6.jpg", alt: "Friends enjoying coffee", span: "" },
  { src: "/images/hero-coffee.jpg", alt: "Steaming latte", span: "" },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            A Glimpse Inside
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Take a peek at our cozy space, artisan drinks, and delicious treats.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.src + index}
              className={`relative overflow-hidden rounded-lg aspect-square group cursor-pointer ${image.span}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
