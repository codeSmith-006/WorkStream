"use client";
import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import contactAnimation from "../../../../assets/contact.json";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast.success("Your inquiry has been sent!");
    reset();
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="py-20 bg-muted/30 dark:bg-muted/20 transition-colors duration-300"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <Toaster position="top-right" reverseOrder={false} />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's work together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got a question or an idea? Drop us a message and we’ll get back to
            you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <motion.div
            className="p-8 space-y-6 border border-border shadow-md rounded-[3.75rem_0.375rem_0.375rem_0.375rem] bg-background transition-colors"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-full h-64 md:h-80 lg:h-96">
              <Lottie animationData={contactAnimation} loop={true} className="w-full h-full" />
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-foreground">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/20 text-primary rounded-xl">
                  <MdEmail size={22} />
                </div>
                <p className="text-lg">hello@workstream.com</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary/20 text-secondary rounded-xl">
                  <FaPhoneVolume size={22} />
                </div>
                <p className="text-lg">+1 (307) 393-8955</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/20 text-accent rounded-xl">
                  <MdLocationOn size={22} />
                </div>
                <p className="text-lg">Dhaka, Bangladesh</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="p-8 rounded-md shadow-lg border border-border bg-background transition-colors grid"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Send a Message
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              If you would like to discuss anything related to payment, account,
              licensing, partnerships, or have pre-sales questions, you’re at
              the right place.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">
                    Your Name *
                  </label>
                  <input
                    {...register("firstName", { required: "Name is required" })}
                    placeholder="Max Doe"
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">
                    Email *
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Enter a valid email",
                      },
                    })}
                    placeholder="you@example.com"
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-2">
                  Company Name *
                </label>
                <input
                  {...register("company", { required: "Company is required" })}
                  placeholder="Enter your company name"
                  className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                )}
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-2">
                  Phone Number *
                </label>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9+()-\s]*$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                  placeholder="Enter your phone number"
                  className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-2">
                  Message *
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Your message here..."
                  rows={6}
                  className="flex min-h-[80px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground py-3 px-8 hover:bg-primary/80 transition-transform transition-colors"
              >
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
