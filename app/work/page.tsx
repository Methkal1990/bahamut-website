"use client";

import { ArrowLeft, ExternalLink, Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  projectUrl: string;
  videoUrl: string;
}

const projects: Project[] = [
  // {
  //   id: "1",
  //   title: "AI Agent Platform",
  //   description:
  //     "A comprehensive platform for building and deploying AI agents with advanced workflow capabilities.",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  //   projectUrl: "#",
  //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  // },
  // {
  //   id: "2",
  //   title: "Workflow Automation Tool",
  //   description:
  //     "Intelligent automation tool that streamlines complex business processes using AI-powered decision making.",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  //   projectUrl: "#",
  //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  // },
  // {
  //   id: "3",
  //   title: "AI-Powered Analytics Dashboard",
  //   description:
  //     "Real-time analytics dashboard with AI insights and predictive modeling for data-driven decisions.",
  //   thumbnail:
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  //   projectUrl: "#",
  //   videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  // },
];

export default function WorkPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 font-sans p-2 sm:p-4 md:p-6 overflow-hidden">
      <main className="relative flex h-full w-full max-w-full bg-white shadow-lg flex-col items-start px-4 py-2 sm:px-6 sm:py-4 md:px-8 md:py-8 rounded-2xl">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-8 flex items-center gap-2 text-black hover:text-gray-700 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-1" />
          <span className="text-lg font-extrabold">Back</span>
        </Link>

        {/* Projects Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4 sm:p-5 md:p-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 flex-1">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-2 mt-auto">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-10 rounded-full bg-black px-4 text-sm font-medium text-white transition-colors hover:bg-gray-900 inline-flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4 shrink-0" />
                    <span>View Project</span>
                  </a>
                  <button
                    onClick={() => setSelectedVideo(project.videoUrl)}
                    className="w-full h-10 rounded-full border border-gray-300 bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-gray-50 inline-flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4 shrink-0" />
                    <span>Watch Video</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Popup Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="relative w-full aspect-video">
                <iframe
                  src={selectedVideo}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
