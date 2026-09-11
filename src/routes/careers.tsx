import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";
import { useMemo } from "react";

export const Route = createFileRoute("/careers")({ component: CareersPage });

const ROLES = [
  {
    id: "digital-communications-manager",
    title: "Digital Communications Manager",
    location: "Remote",
    type: "Full-time",
    summary:
      "Own NeemSeed’s public channels. Plan and ship content that explains the research clearly, without turning the house into a shop.",
    responsibilities: [
      "Set the editorial calendar for web, social, and earned media.",
      "Write and edit copy that matches a research company, not a consumer brand.",
      "Manage official accounts, community replies, and inbound press notes.",
      "Track what lands. Report reach, engagement, and inbound quality.",
      "Coordinate with research so public posts stay accurate.",
    ],
    requirements: [
      "Several years in communications, social, or content for a company or institution.",
      "Strong writing. Comfortable with science without overselling it.",
      "Able to run channels end to end: plan, produce, publish, measure.",
      "Experience with standard social and analytics tools.",
    ],
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    location: "Remote",
    type: "Full-time",
    summary:
      "Build and maintain the NeemSeed site and internal tools. Front-end first, with enough full-stack range to ship forms, data, and deploys.",
    responsibilities: [
      "Ship and maintain production web surfaces (Vite, React, TypeScript).",
      "Own deploy quality on Vercel: routing, performance, and analytics.",
      "Build application flows — careers, contact, and later research tooling.",
      "Keep the codebase small, typed, and easy to change.",
      "Work directly with the house on product and content.",
    ],
    requirements: [
      "Professional experience shipping production web applications.",
      "React and TypeScript in daily use.",
      "Comfortable with Git, CI, and a modern hosting platform.",
      "Able to design a simple interface and write the code for it.",
    ],
  },
];

function CareersPage() {
  const sent = useMemo(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).get("sent") === "1";
  }, []);

  return (
    <SimplePage title="Careers" lead="Open roles at NeemSeed.">
      {sent ? (
        <p className="mb-12 max-w-xl rounded-sm border border-line bg-bg px-5 py-4 text-sm text-muted">
          Application received. We will write back at the address you listed.
        </p>
      ) : null}

      <div className="space-y-16">
        {ROLES.map((role) => (
          <article key={role.id} id={role.id} className="border-t border-line pt-10">
            <p className="text-xs uppercase tracking-widest text-muted">
              {role.type} · {role.location}
            </p>
            <h2 className="mt-2 font-display text-3xl">{role.title}</h2>
            <p className="mt-4 max-w-2xl text-muted">{role.summary}</p>

            <h3 className="mt-8 text-sm font-medium uppercase tracking-widest text-muted">
              Responsibilities
            </h3>
            <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 text-sm text-muted">
              {role.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-medium uppercase tracking-widest text-muted">
              Requirements
            </h3>
            <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 text-sm text-muted">
              {role.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <ApplyForm role={role.title} />
          </article>
        ))}
      </div>
    </SimplePage>
  );
}

function ApplyForm({ role }: { role: string }) {
  return (
    <form
      className="mt-10 max-w-xl space-y-4"
      action="https://formsubmit.co/cs@neemseed.com"
      method="POST"
      encType="multipart/form-data"
    >
      <input type="hidden" name="_subject" value={`NeemSeed application — ${role}`} />
      <input type="hidden" name="role" value={role} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input
        type="hidden"
        name="_next"
        value="https://www.neemseed.net/careers?sent=1"
      />

      <p className="text-sm font-medium">Apply</p>

      <label className="block text-sm text-muted">
        Full name
        <input
          required
          name="name"
          autoComplete="name"
          className="mt-1 h-11 w-full rounded-sm bg-bg px-3 text-fg shadow-[0_0_0_1px_var(--color-line)] outline-none"
        />
      </label>

      <label className="block text-sm text-muted">
        Email
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="mt-1 h-11 w-full rounded-sm bg-bg px-3 text-fg shadow-[0_0_0_1px_var(--color-line)] outline-none"
        />
      </label>

      <label className="block text-sm text-muted">
        Portfolio or LinkedIn
        <input
          type="url"
          name="profile"
          placeholder="https://"
          className="mt-1 h-11 w-full rounded-sm bg-bg px-3 text-fg shadow-[0_0_0_1px_var(--color-line)] outline-none placeholder:text-faint"
        />
      </label>

      <label className="block text-sm text-muted">
        Note
        <textarea
          name="note"
          rows={5}
          className="mt-1 w-full rounded-sm bg-bg px-3 py-2 text-fg shadow-[0_0_0_1px_var(--color-line)] outline-none"
        />
      </label>

      <label className="block text-sm text-muted">
        Resume
        <input
          required
          type="file"
          name="attachment"
          accept=".pdf,.doc,.docx"
          className="mt-1 block w-full text-sm file:mr-3 file:h-10 file:rounded-sm file:border-0 file:bg-accent file:px-4 file:text-sm file:font-medium file:text-accent-fg"
        />
        <span className="mt-1 block text-xs text-faint">PDF or Word. Required.</span>
      </label>

      <button
        type="submit"
        className="inline-flex h-12 items-center bg-accent px-6 text-sm font-medium uppercase tracking-wide text-accent-fg"
      >
        Submit application
      </button>
    </form>
  );
}
