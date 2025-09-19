"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Star } from "lucide-react";

export default function CommunityFeedbackForm() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const feedback = { ...data, rating };
        console.log("Feedback Submitted:", feedback);

        toast.success("Thanks for your feedback!");
        reset();
        setRating(0);
    };

    return (
        <div className="max-w-3xl mx-auto p-8 bg-card rounded-2xl shadow-lg ">
            <h3 className="text-2xl font-bold text-center mb-6">Share Your Feedback</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Enter a valid email",
                            },
                        })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Rating */}
                <div>
                    <label className="block text-sm font-medium mb-2">Rating</label>
                    <div className="flex space-x-2">
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
                    {rating === 0 && (
                        <p className="text-red-500 text-sm mt-1">Please select a rating</p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                        {...register("message", { required: "Message is required" })}
                        rows="4"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
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
    );
}
