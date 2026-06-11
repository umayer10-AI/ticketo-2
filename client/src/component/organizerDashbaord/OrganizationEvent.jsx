"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function OrganizationEvent() {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("EVENT DATA:", data);

      // 👉 API call here
      // await addEvent(data)

      toast.success("Event created successfully 🚀");

      reset();
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to create event");
    }
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-white font-medium hover:opacity-90 transition"
      >
        + Add Event
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 h-8 w-8 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
            >
              ✕
            </button>

            {/* Header */}
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-white">Create Event</h2>
              <p className="text-sm text-slate-400 mt-1">
                Add new event for your organization
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              {/* Event Title */}
              <div>
                <label className="text-sm text-slate-300 mb-2 block">
                  Event Title
                </label>
                <input
                  type="text"
                  placeholder="Tech Conference 2026"
                  {...register("title", {
                    required: "Title is required",
                  })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
                />
                {errors.title && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Date */}
              <div>
                <label className="text-sm text-slate-300 mb-2 block">
                  Event Date
                </label>
                <input
                  type="date"
                  {...register("date", {
                    required: "Date is required",
                  })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
                />
              </div>

              {/* Location */}
              <div>
                <label className="text-sm text-slate-300 mb-2 block">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Dhaka, Bangladesh"
                  {...register("location")}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
                />
              </div>

              {/* Price */}
              <div>
                <label className="text-sm text-slate-300 mb-2 block">
                  Ticket Price
                </label>
                <input
                  type="number"
                  placeholder="500"
                  {...register("price", {
                    required: "Price is required",
                  })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
                />
                {errors.price && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.price.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="text-sm text-slate-300 mb-2 block">
                  Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Event details..."
                  {...register("description")}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
                />
              </div>

              {/* Image */}
              <div>
                <label className="text-sm text-slate-300 mb-2 block">
                  Event Banner
                </label>
                <input
                  type="file"
                  {...register("image")}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-xl border border-slate-700 py-3 text-slate-300 hover:bg-slate-800 transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-semibold text-white hover:opacity-90 transition"
                >
                  {isSubmitting ? "Creating..." : "Create Event"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}