import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/herosection";
import PodcastForm from "@/components/PodcastForm";
import { Card, CardContent } from "@/components/ui/card";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />

      {/* Podcast Generator Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-purple-400">
            Generate Your Podcast
          </h2>
          <PodcastForm />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-purple-400">
            Everything you need to manage your podcast
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900 border border-purple-400 rounded-lg"
              >
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-20 bg-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-purple-400">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-white">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section id="testimonials" className="py-20 bg-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-purple-400">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-900 border border-purple-400 rounded-lg">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full border-2 border-purple-400"
                    />
                    <div className="ml-4 text-left">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-300">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-300">{testimonial.quote}</p>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
