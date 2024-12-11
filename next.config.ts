import { TODO_FILE_PATH } from "@/src/Todo/api/constants";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  webpack: (config, { isServer }) => {
    if (isServer) {
      const folderPath = path.join(__dirname, "data");

      if (!existsSync(folderPath)) {
        mkdirSync(folderPath, { recursive: true });
        console.log("Folder created:", folderPath);
      }

      if (!existsSync(TODO_FILE_PATH)) {
        writeFileSync(TODO_FILE_PATH, "[]", "utf-8");
        console.log("Todo file created:", TODO_FILE_PATH);
      }
    }
    return config;
  },
};

export default nextConfig;
