import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Route = createFileRoute("/careers")({ component: CareersPage });

type Role = {
  id: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

const ROLES: Role[] = [
  {
    id: "digital-communications-manager",
    title: "Digital Communications Manager",
    team: "Communications",
    location: "Remote",
    type: "Full-time",
    summary:
      "Own NeemSeed’s public channels. Plan and ship content that explains the research clearly.",
    responsibilities: [
      "Set the editorial calendar for web, social, and earned media.",
      "Write and edit copy that matches a research company, not a consumer brand.",
      "Manage official accounts, community replies, and inbound press notes.",
      "Track reach, engagement, and inbound quality.",
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
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
    summary:
      "Build and maintain the NeemSeed site and internal tools. Front-end first, with full-stack range to ship forms, data, and deploys.",
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
  const { roleId } = useParams();
  const role = ROLES.find((r) => r.id === roleId);
  if (roleId) return role ? <RolePage role={role} /> : <MissingRole />;
  return <BoardPage />;
}

function BoardPage() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const results = useMemo(() => {
    if (!query) return ROLES;
    return ROLES.filter((r) =>
      [r.title, r.team, r.location, r.type, r.summary].join(" ").toLowerCase().includes(query),
    );
  }, [query]);

  return (
    <main className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <p className="text-xs uppercase tracking-widest text-muted">Careers</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">Open roles</h1>
      <p className="mt-4 text-muted">{ROLES.length} positions</p>

      <label className="mt-10 block">
        <span className="sr-only">Search roles</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search titles, teams, location"
          className="h-12 w-full rounded-sm bg-bg px-4 text-sm text-fg shadow-[0_0_0_1px_var(--color-line)] outline-none placeholder:text-faint"
        />
      </label>

      <ul className="mt-6 divide-y divide-line border-y border-line">
        {results.map((r) => (
          <li key={r.id}>
            <Link
              to={`/careers/${r.id}`}
              className="flex w-full flex-col gap-1 py-5 text-left sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className="font-display text-2xl">{r.title}</span>
              <span className="text-sm text-muted">
                {r.team} · {r.type} · {r.location}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {results.length === 0 ? <p className="mt-8 text-sm text-muted">No roles match that search.</p> : null}
    </main>
  );
}

function RolePage({ role }: { role: Role }) {
  const sent =
    typeof window !== "undefined" && new URLSearchParams(window.location.search).get("sent") === "1";
  return (
    <main className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <Link to="/careers" className="text-sm text-muted hover:text-fg">
        All roles
      </Link>
      <p className="mt-8 text-xs uppercase tracking-widest text-muted">
        {role.team} · {role.type} · {role.location}
      </p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">{role.title}</h1>
      <p className="mt-5 max-w-2xl text-muted">{role.summary}</p>
      {sent ? (
        <p className="mt-8 max-w-xl border border-line px-5 py-4 text-sm text-muted">
          Application received. We will write back at the address you listed.
        </p>
      ) : null}
      <h2 className="mt-12 text-sm font-medium uppercase tracking-widest text-muted">Responsibilities</h2>
      <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 text-sm text-muted">
        {role.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2 className="mt-10 text-sm font-medium uppercase tracking-widest text-muted">Requirements</h2>
      <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 text-sm text-muted">
        {role.requirements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ApplyForm role={role} />
    </main>
  );
}

function MissingRole() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <h1 className="font-display text-4xl">Role not found</h1>
      <Link to="/careers" className="mt-6 inline-block text-sm text-muted hover:text-fg">
        All roles
      </Link>
    </main>
  );
}

function ApplyForm({ role }: { role: Role }) {
  return (
    <form
      className="mt-12 max-w-xl space-y-4 border-t border-line pt-10"
      action="https://formsubmit.co/cs@neemseed.com"
      method="POST"
      encType="multipart/form-data"
    >
      <input type="hidden" name="_subject" value={`NeemSeed application — ${role.title}`} />
      <input type="hidden" name="role" value={role.title} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={`https://www.neemseed.net/careers/${role.id}?sent=1`} />
      <p className="font-display text-2xl">Apply</p>
      <label className="block text-sm text-muted">
        Full name
        <input required name="name" autoComplete="name" className="mt-1 h-11 w-full rounded-sm bg-bg px-3 text-fg shadow-[0_0_0_1px_var(--color-line)] outline-none" />
      </label>
      <label className="block text-sm text-muted">
        Email
        <input required type="email" name="email" autoComplete="email" className="mt-1 h-11 w-full rounded-sm bg-bg px-3 text-fg shadow-[0_0_0_1px_var(--color-line)] outline-none" />
      </label>
      <label className="block text-sm text-muted">
        Portfolio or LinkedIn
        <input type="url" name="profile" placeholder="https://" className="mt-1 h-11 w-full rounded-sm bg-bg px-3 text-fg shadow-[0_0_0_1px_var(--color-line)] outline-none placeholder:text-faint" />
      </label>
      <label className="block text-sm text-muted">
        Note
        <textarea name="note" rows={5} className="mt-1 w-full rounded-sm bg-bg px-3 py-2 text-fg shadow-[0_0_0_1px_var(--color-line)] outline-none" />
      </label>
      <label className="block text-sm text-muted">
        Resume
        <input required type="file" name="attachment" accept=".pdf,.doc,.docx" className="mt-1 block w-full text-sm file:mr-3 file:h-10 file:rounded-sm file:border-0 file:bg-accent file:px-4 file:text-sm file:font-medium file:text-accent-fg" />
        <span className="mt-1 block text-xs text-faint">PDF or Word. Required.</span>
      </label>
      <button type="submit" className="inline-flex h-12 items-center bg-accent px-6 text-sm font-medium uppercase tracking-wide text-accent-fg">
        Submit application
      </button>
    </form>
  );
}
