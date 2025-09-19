"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { Star, Facebook, Youtube, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function CommunityFeedbackForm() {
  const { register, handleSubmit, reset } = useForm();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cards = [
    {
      id: 1,
      icon: <Facebook className="w-8 h-8" />,
      title: "Join our group",
      desc: "Share your thoughts, ideas, and projects with the community.",
      link: "Follow us on Facebook",
      bg: "bg-gradient-to-br from-blue-900 to-blue-600",
    },
    {
      id: 2,
      icon: <Youtube className="w-8 h-8" />,
      title: "Join our channel",
      desc: "Watch our latest videos and keep up with the latest news.",
      link: "Follow us on Youtube",
      bg: "bg-gradient-to-br from-red-900 to-red-600",
    },
    {
      id: 3,
      icon: <FaXTwitter className="w-8 h-8" />,
      title: "Follow our updates",
      desc: "Get the latest news and quick updates from our team.",
      link: "Follow us on X",
      bg: "bg-gradient-to-br from-gray-900 to-gray-700",
    },
    {
      id: 4,
      icon: <Instagram className="w-8 h-8" />,
      title: "See our gallery",
      desc: "Browse our latest visual content and behind-the-scenes.",
      link: "Follow us on Instagram",
      bg: "bg-gradient-to-br from-pink-900 to-pink-600",
    },
  ];

  const onSubmit = (data) => {
    if (rating === 0) {
      toast.error("Please select a rating!");
      return;
    }

    // Here you can send `data` + `rating` to your backend
    console.log({ ...data, rating });
    toast.success("Feedback submitted successfully!");
    reset();
    setRating(0);
  };

  return (
    <section className="max-w-7xl mx-auto py-20">
      {/* Community Cards */}
      <div className="text-center px-4 mb-20">
        <h2 className="text-3xl font-bold mb-3">Join our community</h2>
        <p className="text-gray-500 mb-12">
          Connect with others, share experiences, and stay in the loop.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              data-aos="fade-up"
              data-aos-delay={card.id * 100} // delay increases for each card
              className={`rounded-xl p-6 text-left text-white shadow-md hover:scale-105 transition-transform duration-300 ${card.bg}`}
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm mb-4">{card.desc}</p>
              <a href="#" className="text-sm font-medium underline">
                {card.link} →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback Form */}
      <div className="text-center px-4 mb-20">
        <h2 className="text-3xl font-bold mb-3">Share Your Feedback</h2>
        <p className="text-gray-500 mb-12">
          We’d love to hear your thoughts and suggestions. Your feedback helps us improve!
        </p>
        <div className="max-w-3xl mx-auto p-8 bg-card rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1 text-left">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1 text-left">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium mb-2 text-left">Rating</label>
              <div className="flex space-x-2 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    className={`w-7 h-7 cursor-pointer ${(hover || rating) >= star
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1m text-left">Message</label>
              <textarea
                {...register("message", { required: true })}
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
