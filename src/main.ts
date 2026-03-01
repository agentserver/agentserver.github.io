import "./style.css";

const GITHUB_URL = "https://github.com/agentserver/agentserver";
const PLATFORM_URL = "https://platform.agentserver.dev";

function icon(name: string): string {
  const icons: Record<string, string> = {
    github: `<svg class="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
    star: `<svg class="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.306l-6 5.847 1.417 8.26L12 19.434l-7.417 3.979L6 15.153 0 9.306l8.332-1.151z"/></svg>`,
    terminal: `<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m7.5 4.5 7.5 7.5-7.5 7.5m9-1.5h4.5"/></svg>`,
    browser: `<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9 9 0 0 1 3 12c0-1.47.352-2.858.976-4.082"/></svg>`,
    tunnel: `<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/></svg>`,
    workspace: `<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/></svg>`,
    docker: `<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0h.375a2.625 2.625 0 0 1 0 5.25H17.25"/></svg>`,
    shield: `<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/></svg>`,
    key: `<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"/></svg>`,
    arrow: `<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>`,
  };
  return icons[name] ?? "";
}

function navbar(): string {
  return `
  <nav class="fixed top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-md">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <a href="#" class="flex items-center gap-2.5 text-text font-semibold text-lg no-underline">
        <div class="flex size-8 items-center justify-center rounded-lg bg-primary text-white font-mono font-bold text-sm">A</div>
        <span>agentserver</span>
      </a>
      <div class="hidden items-center gap-8 md:flex">
        <a href="#features" class="text-sm text-text-muted hover:text-text transition-colors no-underline">Features</a>
        <a href="#architecture" class="text-sm text-text-muted hover:text-text transition-colors no-underline">Architecture</a>
        <a href="#quickstart" class="text-sm text-text-muted hover:text-text transition-colors no-underline">Get Started</a>
        <a href="${GITHUB_URL}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-lg border border-border px-3.5 py-1.5 text-sm text-text-muted hover:text-text hover:border-border-light transition-colors no-underline">
          ${icon("github")}
          <span>Star on GitHub</span>
        </a>
        <a href="${PLATFORM_URL}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-lg bg-primary px-3.5 py-1.5 text-sm font-medium text-white hover:bg-primary-light transition-colors no-underline">
          Try Now ${icon("arrow")}
        </a>
      </div>
    </div>
  </nav>`;
}

function hero(): string {
  return `
  <section class="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(109,90,205,0.08),transparent_60%)]"></div>
    <div class="relative mx-auto max-w-6xl px-6">
      <div class="mx-auto max-w-3xl text-center">
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised px-4 py-1.5 text-sm text-text-muted">
          <span class="inline-block size-2 rounded-full bg-emerald-400"></span>
          Open source &middot; Supports opencode &amp; OpenClaw
        </div>
        <h1 class="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Run your coding agent anywhere.
          <span class="block text-primary-light">Access it in the browser.</span>
        </h1>
        <p class="mt-6 text-lg text-text-muted md:text-xl">
          A self-hosted platform for deploying <a href="https://github.com/opencode-ai/opencode" class="text-text hover:text-primary-light transition-colors underline underline-offset-4">opencode</a>
          and <a href="https://github.com/openclaw/openclaw" class="text-text hover:text-primary-light transition-colors underline underline-offset-4">OpenClaw</a>
          to the cloud — your team gets browser access to AI coding agents, no local setup needed.
        </p>
        <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#quickstart" class="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-light transition-colors no-underline">
            Get Started ${icon("arrow")}
          </a>
          <a href="${GITHUB_URL}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-text hover:border-border-light transition-colors no-underline">
            ${icon("github")} View on GitHub
          </a>
        </div>
      </div>
      <div class="mx-auto mt-16 max-w-2xl">
        <div class="rounded-xl border border-border bg-surface-raised overflow-hidden shadow-2xl shadow-black/20">
          <div class="flex items-center gap-2 border-b border-border px-4 py-3">
            <div class="size-3 rounded-full bg-[#ff5f57]"></div>
            <div class="size-3 rounded-full bg-[#febc2e]"></div>
            <div class="size-3 rounded-full bg-[#28c840]"></div>
            <span class="ml-2 text-xs text-text-muted font-mono">terminal</span>
          </div>
          <div class="p-5 font-mono text-sm leading-relaxed">
            <div class="text-text-muted">$ helm install agentserver \\</div>
            <div class="pl-6 text-text-muted">oci://ghcr.io/agentserver/charts/agentserver \\</div>
            <div class="pl-6 text-text-muted">--namespace agentserver --create-namespace \\</div>
            <div class="pl-6 text-text-muted">--set ingress.host=<span class="text-primary-light">"cli.example.com"</span></div>
            <div class="mt-3 text-emerald-400">&#10003; agentserver deployed to cluster</div>
            <div class="mt-1 text-text-muted">Open <span class="text-primary-light underline">https://cli.example.com</span> in your browser</div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function features(): string {
  const items = [
    {
      icon: "browser",
      title: "Cloud-hosted AI agents",
      description:
        "Deploy opencode and OpenClaw sandboxes to the cloud. Each gets a dedicated subdomain, accessible from any browser.",
    },
    {
      icon: "tunnel",
      title: "Local agent tunneling",
      description:
        "Connect a locally-running opencode instance via a WebSocket reverse tunnel. No public IP needed.",
    },
    {
      icon: "workspace",
      title: "Workspaces & multi-tenancy",
      description:
        "Organize work into workspaces with role-based membership. Each workspace has a shared persistent disk.",
    },
    {
      icon: "docker",
      title: "Docker & Kubernetes",
      description:
        "Run sandbox containers via Docker for local dev, or Kubernetes with Agent Sandbox + gVisor isolation for production.",
    },
    {
      icon: "shield",
      title: "SSO / OIDC authentication",
      description:
        "Built-in GitHub OAuth and generic OIDC support. Accounts are linked by email automatically.",
    },
    {
      icon: "key",
      title: "Anthropic API proxy",
      description:
        "Sandboxes never see the real API key. agentserver injects it server-side via a per-sandbox proxy token.",
    },
  ];

  return `
  <section id="features" class="border-t border-border py-20 md:py-28">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight md:text-4xl">Everything you need to run coding agents at scale</h2>
        <p class="mt-4 text-text-muted text-lg">Self-hosted, secure, and designed for teams.</p>
      </div>
      <div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        ${items
          .map(
            (f) => `
          <div class="group rounded-xl border border-border bg-surface-raised p-6 transition-colors hover:border-border-light">
            <div class="mb-4 inline-flex items-center justify-center rounded-lg bg-surface-overlay p-2.5 text-primary-light">
              ${icon(f.icon)}
            </div>
            <h3 class="text-lg font-semibold">${f.title}</h3>
            <p class="mt-2 text-sm leading-relaxed text-text-muted">${f.description}</p>
          </div>`
          )
          .join("")}
      </div>
    </div>
  </section>`;
}

function architecture(): string {
  const diagram = `Browser ──▶ agentserver (Go) ──▶ sandbox pod / container
               │                   └─ opencode serve (:4096)
               │
               ├─ PostgreSQL (users, workspaces, sandboxes)
               ├─ Anthropic API proxy (injects real API key)
               │
               │               WebSocket tunnel
Local machine ─┼──▶ agentserver agent connect ──────────▶ agentserver
               └─ opencode serve (:4096)                    │
                                                    Browser access via
                                                    subdomain proxy`;

  const components = [
    {
      name: "agentserver",
      desc: "Go HTTP server — auth, workspace & sandbox management, subdomain proxy, WebSocket tunnel, Anthropic API proxy",
    },
    {
      name: "sandbox",
      desc: "Container running opencode serve — one per sandbox, isolated via Docker or Kubernetes Agent Sandbox",
    },
    {
      name: "local agent",
      desc: "agentserver agent connect — connects a local opencode instance to the server via a WebSocket reverse tunnel",
    },
  ];

  return `
  <section id="architecture" class="border-t border-border py-20 md:py-28">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight md:text-4xl">Architecture</h2>
        <p class="mt-4 text-text-muted text-lg">Three components, one deployment.</p>
      </div>
      <div class="mx-auto mt-12 max-w-4xl">
        <div class="rounded-xl border border-border bg-surface-raised overflow-hidden">
          <div class="flex items-center gap-2 border-b border-border px-4 py-3">
            <div class="size-3 rounded-full bg-[#ff5f57]"></div>
            <div class="size-3 rounded-full bg-[#febc2e]"></div>
            <div class="size-3 rounded-full bg-[#28c840]"></div>
          </div>
          <pre class="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-text-muted"><code>${diagram}</code></pre>
        </div>
        <div class="mt-8 grid gap-4 md:grid-cols-3">
          ${components
            .map(
              (c) => `
            <div class="rounded-xl border border-border bg-surface-raised p-5">
              <h3 class="font-mono text-sm font-semibold text-primary-light">${c.name}</h3>
              <p class="mt-2 text-sm leading-relaxed text-text-muted">${c.desc}</p>
            </div>`
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>`;
}

function quickstart(): string {
  const helmCode = `helm install agentserver oci://ghcr.io/agentserver/charts/agentserver \\
  --namespace agentserver --create-namespace \\
  --set database.url="postgres://user:pass@postgres:5432/agentserver?sslmode=disable" \\
  --set anthropicApiKey="sk-ant-..." \\
  --set ingress.enabled=true \\
  --set ingress.host="cli.example.com" \\
  --set baseDomain="cli.example.com"`;

  const dockerCode = `git clone https://github.com/agentserver/agentserver.git
cd agentserver

# Build the opencode agent image
docker build -f Dockerfile.opencode -t agentserver-agent:latest .

# Set your API key
export ANTHROPIC_API_KEY="sk-ant-..."

# Start everything
docker compose up -d`;

  return `
  <section id="quickstart" class="border-t border-border py-20 md:py-28">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight md:text-4xl">Get started in minutes</h2>
        <p class="mt-4 text-text-muted text-lg">Deploy with Helm or run locally with Docker Compose.</p>
      </div>
      <div class="mx-auto mt-12 max-w-3xl">
        <div class="rounded-xl border border-border bg-surface-raised overflow-hidden">
          <div class="flex border-b border-border">
            <button data-tab="helm" class="tab-btn active relative px-5 py-3 text-sm font-medium text-text transition-colors">Helm Install</button>
            <button data-tab="docker" class="tab-btn relative px-5 py-3 text-sm font-medium text-text-muted transition-colors hover:text-text">Docker Compose</button>
          </div>
          <div class="relative">
            <div data-panel="helm" class="tab-panel">
              <pre class="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-text-muted"><code>${helmCode}</code></pre>
            </div>
            <div data-panel="docker" class="tab-panel hidden">
              <pre class="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-text-muted"><code>${dockerCode}</code></pre>
            </div>
          </div>
        </div>
        <p class="mt-6 text-center text-sm text-text-muted">
          See the <a href="${GITHUB_URL}#quick-start" target="_blank" rel="noopener" class="text-primary-light hover:underline">full documentation</a> for prerequisites and configuration options.
        </p>
      </div>
    </div>
  </section>`;
}

function footer(): string {
  return `
  <footer class="border-t border-border py-10">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-text-muted md:flex-row">
      <div class="flex items-center gap-2">
        <div class="flex size-6 items-center justify-center rounded bg-primary text-white font-mono font-bold text-xs">A</div>
        <span>agentserver</span>
      </div>
      <div class="flex items-center gap-4">
        <a href="${PLATFORM_URL}" target="_blank" rel="noopener" class="text-text-muted hover:text-text transition-colors no-underline">Platform</a>
        <a href="${GITHUB_URL}" target="_blank" rel="noopener" class="text-text-muted hover:text-text transition-colors">${icon("github")}</a>
      </div>
    </div>
  </footer>`;
}

function initTabs(): void {
  document.querySelectorAll<HTMLButtonElement>(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.dataset.tab;
      if (!tabId) return;

      const container = btn.closest("section")!;

      container
        .querySelectorAll<HTMLButtonElement>(".tab-btn")
        .forEach((b) => {
          b.classList.toggle("active", b.dataset.tab === tabId);
          b.classList.toggle("text-text", b.dataset.tab === tabId);
          b.classList.toggle("text-text-muted", b.dataset.tab !== tabId);
        });

      container
        .querySelectorAll<HTMLElement>(".tab-panel")
        .forEach((p) => {
          p.classList.toggle("hidden", p.dataset.panel !== tabId);
        });
    });
  });
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML =
  navbar() + hero() + features() + architecture() + quickstart() + footer();

initTabs();
