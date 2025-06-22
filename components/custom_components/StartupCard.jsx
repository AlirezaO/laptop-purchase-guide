import React from "react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

export const StartupCard = ({ data }) => {
  console.log("DATA: ", data);
  return (
    <div className="bg-gray-900 max-w-[320px] cursor-pointer rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ">
      {/* Card Image */}
      <div className="relative h-48 w-full">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Category Badge */}
        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-3">
          {data.category}
        </span>

        {/* Title */}
        <h2 className="text-xl font-bold text-white-100 mb-2">{data.title}</h2>

        {/* Description */}
        <p className="text-gray-400 mb-4 line-clamp-2 overflow-hidden text-ellipsis">
          {data.description}
        </p>

        {/* Author Section */}
        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center space-x-3">
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                src={data.author.image}
                alt={data.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-gray-500">{data.author.name}</p>
              <p className="text-sm text-gray-500">
                {formatDistanceToNow(new Date(data._createdAt), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>

          {/* Views */}
          <div className="flex items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>{data.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
