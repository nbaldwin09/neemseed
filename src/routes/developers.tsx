import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/components/simple-page";

export const Route = createFileRoute("/developers")({ component: ApiSignupPage });

function ApiSignupPage() {
  return (
    <SimplePage title="Research API">
      <div className="max-w-xl space-y-5 text-muted">
        <p>
          Request access to the NeemSeed research API. Accounts and keys are issued at{" "}
          <a
            href="https://api.neemseed.net"
            className="text-fg underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            api.neemseed.net
          </a>
          .
        </p>
        <form
          action="https://api.neemseed.net/signup"
          method="post"
          className="space-y-4 pt-4 text-fg"
        >
          <label className="block text-sm">
            Name
            <input
              name="name"
              required
              className="mt-2 block h-12 w-full border border-line bg-bg px-3"
            />
          </label>
          <label className="block text-sm">
            Email
            <input
              name="email"
              type="email"
              required
              className="mt-2 block h-12 w-full border border-line bg-bg px-3"
            />
          </label>
          <label className="block text-sm">
            Organization
            <input
              name="organization"
              className="mt-2 block h-12 w-full border border-line bg-bg px-3"
            />
          </label>
          <label className="block text-sm">
            Intended use
            <textarea
              name="use"
              rows={4}
              className="mt-2 block w-full border border-line bg-bg px-3 py-3"
            />
          </label>
          <button
            type="submit"
            className="inline-flex h-12 items-center bg-accent px-6 text-sm font-medium uppercase tracking-wide text-accent-fg"
          >
            Request access
          </button>
        </form>
      </div>
    </SimplePage>
  );
}
