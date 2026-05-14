import { createFileRoute } from "@tanstack/react-router";
import { PhotosVideosApp } from "@/components/PhotosVideosApp";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Photos & Videos — Lucky Communities" },
      {
        name: "description",
        content:
          "Internal tool to upload photos and videos to Google Drive, organized by mobile home park.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <PhotosVideosApp />
      <Toaster richColors position="top-right" />
    </>
  );
}
