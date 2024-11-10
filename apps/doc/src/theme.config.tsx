import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>llm.report</span>,
  project: {
    link: "https://github.com/headlessbuilder/llm.report",
    icon: <></>,
  },
  chat: {
    link: "https://discord.gg/eVtDPmRWXm",
  },
  docsRepositoryBase:
    "https://github.com/headlessbuilder/llm.report/tree/dev/apps/doc",
  editLink: {
    content: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    content: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noreferrer"
            title="Headles Builder homepage"
            href="https://hedlessbuilder.com/?utm_source=nextra.site"
          >
            <span>Powered by Headless Builder</span>
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} llm.report. All rights reserved.
        </p>
      </div>
    ),
  },
};

export default config;
