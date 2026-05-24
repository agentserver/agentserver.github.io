import "./style.css";

const GITHUB_URL = "https://github.com/agentserver/agentserver";
const PLATFORM_URL = "https://platform.agentserver.dev";
const DOCS_URL = `${GITHUB_URL}#readme`;
const SELFHOST_URL = `${GITHUB_URL}#self-hosting`;
const ISSUES_URL = `${GITHUB_URL}/issues`;
const RELEASES_URL = `${GITHUB_URL}/releases`;

type Locale = "zh" | "en";
type Dict = Record<string, string>;
type Dicts = Record<Locale, Dict>;

const strings: Dicts = {
  zh: {
    "nav.brand": "agentserver",
    "nav.why": "卖点",
    "nav.how": "上手",
    "nav.compare": "对比",
    "nav.signin": "登录 →",
    "nav.lang.toggle": "EN",

    "hero.h1": "你的个人算力网。",
    "hero.sub":
      "agentserver 把笔记本、云沙箱、家里的服务器编成一个工作区——从浏览器、命令行,或微信,一并指挥。",
    "hero.cta.primary": "▸ 登录",
    "hero.cta.secondary": "在 GitHub 上查看",
    "hero.term.macbook": "office-macbook · codex · 10:14",
    "hero.term.sandbox": "session#a3f · paused 12:30",
    "hero.chat.title": "我自己 · 微信 18:42",
    "hero.chat.user": "上午让你改的 loss 函数跑通了吗？",
    "hero.chat.bot1": "📎 续上会话 session#a3f（office-macbook · 6h 前）",
    "hero.chat.bot2": "🔨 跑 pytest tests/test_loss.py …",
    "hero.chat.bot3": "✓ 17/17 通过 · diff 已推到 feature/weighted-loss",
    "hero.chip.online": "在线",

    "quote.attrib": "— Addy Osmani · Director, Google Gemini & Cloud AI",
    "quote.caption": "agentserver = 那个 orchestrator。",
    "quote.conductor": "conductor",
    "quote.orchestrator": "orchestrator",
    "quote.before": '"Once you juggle 10+ agents across machines, you stop being a ',
    "quote.middle": " and become an ",
    "quote.after": '."',

    "pillars.heading": "为什么用 agentserver",
    "pillars.session.title": "同一段会话，任意设备",
    "pillars.session.body":
      "codex 会话本身跑在服务端。早上在笔电上没改完的任务，地铁里用微信续上同一段对话继续推进——换的不是命令的目的地，是 agent 的前端。",
    "pillars.pocket.title": "装在口袋里的指挥台",
    "pillars.pocket.body":
      "微信里一句中文，落到任意设备执行，结果推回同一个聊天框。Telegram 同样支持。",
    "pillars.workspace.title": "一个工作区，所有设备",
    "pillars.workspace.body":
      "云沙箱、本地机器、IM-bound 代理——全在同一份注册表里，并排出现在 Web UI 上。",
    "pillars.tunnel.title": "只要有网就能接入",
    "pillars.tunnel.body":
      "本地的 codex / Claude Code / opencode 通过 WebSocket 拨号入网，呈现为一个沙箱。不需要公网 IP、不需要开放端口。",
    "pillars.also":
      "+ 暂停 / 恢复沙箱 · Jupyter 笔记本 · 多人协作 · 凭证代理 · 操作审计 · SSO（GitHub / OIDC）· 自托管",

    "compare.heading": "和已有的工具相比",
    "compare.col.tool": "产品",
    "compare.col.local": "本地代理",
    "compare.col.cloud": "云沙箱",
    "compare.col.peer": "跨设备组网",
    "compare.col.session": "会话跨终端",
    "compare.col.chat": "IM 通道",
    "compare.caption": "唯一同时勾上五列的产品。",

    "onb.heading": "7 步，把你的设备连上来",
    "onb.s1.title": "注册",
    "onb.s1.body": "邮箱 / GitHub / SSO 任选",
    "onb.s2.title": "链接模型账号",
    "onb.s2.body": "自带 ChatGPT / Anthropic 凭证，或选平台托管账号",
    "onb.s3.title": "入网设备",
    "onb.s3.body": "brew install codex → 粘贴注册码",
    "onb.s4.title": '(可选) 选一台"指挥机"',
    "onb.s4.body": "通常是你的主力笔电；如果只用微信指挥，这步可以跳过",
    "onb.s5.title": "(可选) 开 Jupyter",
    "onb.s5.body": "想手写代码？ctx 已预注入 kernel",
    "onb.s6.title": "绑定微信",
    "onb.s6.body": "扫码即可，从此聊天框 = 终端",
    "onb.s7.title": "邀请协作者",
    "onb.s7.body": "角色：owner / maintainer / developer / guest",
    "onb.docs": "完整文档 →",

    "cta.heading": "把你的设备，编进同一张算力网。",
    "cta.primary": "▸ 登录",
    "cta.secondary": "在自己的域名上自托管",

    "footer.col1.title": "agentserver",
    "footer.col2.title": "社区",
    "footer.col2.weixin": "微信群",
    "footer.col2.telegram": "Telegram",
    "footer.col2.issues": "Issue 跟踪",
    "footer.col3.title": "法律",
    "footer.col3.license": "Apache-2.0",
    "footer.col3.privacy": "隐私",
    "footer.col3.contact": "联系",
  },
  en: {
    "nav.brand": "agentserver",
    "nav.why": "Why",
    "nav.how": "How",
    "nav.compare": "Compare",
    "nav.signin": "Sign in →",
    "nav.lang.toggle": "中",

    "hero.h1": "Your Personal Computility.",
    "hero.sub":
      "agentserver weaves laptops, cloud sandboxes, and home servers into one workspace — commanded from your browser, your CLI, or your WeChat chat.",
    "hero.cta.primary": "▸ Sign in",
    "hero.cta.secondary": "View on GitHub",
    "hero.term.macbook": "office-macbook · codex · 10:14",
    "hero.term.sandbox": "session#a3f · paused 12:30",
    "hero.chat.title": "me · WeChat 18:42",
    "hero.chat.user": "Did the loss-fn refactor we started this morning land?",
    "hero.chat.bot1": "📎 resumed session#a3f (office-macbook · 6h ago)",
    "hero.chat.bot2": "🔨 running pytest tests/test_loss.py …",
    "hero.chat.bot3": "✓ 17/17 passed · pushed to feature/weighted-loss",
    "hero.chip.online": "online",

    "quote.attrib": "— Addy Osmani · Director, Google Gemini & Cloud AI",
    "quote.caption": "agentserver is that orchestrator.",
    "quote.conductor": "conductor",
    "quote.orchestrator": "orchestrator",
    "quote.before": '"Once you juggle 10+ agents across machines, you stop being a ',
    "quote.middle": " and become an ",
    "quote.after": '."',

    "pillars.heading": "Why agentserver",
    "pillars.session.title": "One session, any device",
    "pillars.session.body":
      "codex sessions live on the server, not the laptop they started from. Pause a half-finished refactor at the office; pick up the same conversation from WeChat on the subway home. The front-end moves; the agent does not.",
    "pillars.pocket.title": "Pocket-sized command line",
    "pillars.pocket.body":
      "One sentence in WeChat lands on the right device. The result comes back to the same chat. Telegram supported too.",
    "pillars.workspace.title": "One workspace, every device",
    "pillars.workspace.body":
      "Cloud sandboxes, local machines, IM-bound agents — all in one registry, side by side in the Web UI.",
    "pillars.tunnel.title": "If it can reach the internet, it can join.",
    "pillars.tunnel.body":
      "Your local codex / Claude Code / opencode dials home over WebSocket and shows up as a sandbox. No public IP, no open ports.",
    "pillars.also":
      "+ Pausable sandboxes · Jupyter notebook · Multi-user · Credential proxy · Audit log · SSO (GitHub / OIDC) · Self-host",

    "compare.heading": "How it differs",
    "compare.col.tool": "Tool",
    "compare.col.local": "local",
    "compare.col.cloud": "cloud",
    "compare.col.peer": "peer",
    "compare.col.session": "session",
    "compare.col.chat": "chat",
    "compare.caption": "The only one with all five checked.",

    "onb.heading": "7 steps to wire it all up",
    "onb.s1.title": "Register",
    "onb.s1.body": "Email / GitHub / SSO — your pick",
    "onb.s2.title": "Link a model account",
    "onb.s2.body":
      "Bring your own ChatGPT / Anthropic credential, or use a managed one",
    "onb.s3.title": "Enroll devices",
    "onb.s3.body": "brew install codex → paste the registration code",
    "onb.s4.title": '(Optional) Pick a "command machine"',
    "onb.s4.body": "Usually your daily-driver laptop; skip if you only drive from IM",
    "onb.s5.title": "(Optional) open Jupyter",
    "onb.s5.body": "Prefer hand-written code? ctx is pre-injected in every kernel",
    "onb.s6.title": "Bind WeChat",
    "onb.s6.body": "Scan the QR. From now on, the chat window is your terminal",
    "onb.s7.title": "Invite collaborators",
    "onb.s7.body": "Roles: owner / maintainer / developer / guest",
    "onb.docs": "Full docs →",

    "cta.heading": "Weave your devices into one Computility.",
    "cta.primary": "▸ Sign in",
    "cta.secondary": "Self-host on your own domain",

    "footer.col1.title": "agentserver",
    "footer.col2.title": "Community",
    "footer.col2.weixin": "WeChat group",
    "footer.col2.telegram": "Telegram",
    "footer.col2.issues": "Issue tracker",
    "footer.col3.title": "Legal",
    "footer.col3.license": "Apache-2.0",
    "footer.col3.privacy": "Privacy",
    "footer.col3.contact": "Contact",
  },
};

const STORAGE_KEY = "locale";

function detectLocale(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "zh" || stored === "en") return stored;
  const nav = window.navigator.language || "";
  return nav.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function setLocaleAndReload(l: Locale): void {
  window.localStorage.setItem(STORAGE_KEY, l);
  window.location.reload();
}

const locale: Locale = detectLocale();
function t(key: string): string {
  return strings[locale][key] ?? strings.en[key] ?? key;
}

function navBar(): string {
  const next: Locale = locale === "zh" ? "en" : "zh";
  return `
  <nav class="sticky top-0 z-50 backdrop-blur-md bg-[var(--background)]/85 border-b border-[var(--border)]">
    <div class="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
      <a href="#" class="flex items-center gap-2 font-mono text-sm no-underline text-[var(--foreground)]">
        <span aria-hidden="true" class="inline-block h-2 w-2 rounded-full bg-[var(--home-accent)] animate-pulse motion-reduce:animate-none"></span>
        <span>▸ ${t("nav.brand")}</span>
      </a>
      <div class="hidden md:flex items-center gap-6 font-mono text-xs text-[var(--muted-foreground)]">
        <a href="#why" class="hover:text-[var(--foreground)] no-underline">${t("nav.why")}</a>
        <a href="#how" class="hover:text-[var(--foreground)] no-underline">${t("nav.how")}</a>
        <a href="#compare" class="hover:text-[var(--foreground)] no-underline">${t("nav.compare")}</a>
      </div>
      <div class="flex items-center gap-4">
        <button
          type="button"
          id="lang-toggle"
          data-next="${next}"
          class="font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] bg-transparent border-0 cursor-pointer"
          aria-label="Switch language"
        >${t("nav.lang.toggle")}</button>
        <a
          href="${PLATFORM_URL}"
          class="font-mono text-xs px-3 py-1.5 rounded-md bg-[var(--home-accent)] text-[var(--home-accent-fg)] hover:opacity-90 no-underline"
        >${t("nav.signin")}</a>
      </div>
    </div>
  </nav>`;
}

type TermLine = { delay: number; text: string; kind: "cmd" | "dim" | "ok" };

function term(title: string, lines: TermLine[]): string {
  return `
  <div class="rounded-md border border-[var(--home-term-border)] bg-[var(--home-term-bg)] font-mono text-[11px] overflow-hidden">
    <div class="px-3 py-1.5 border-b border-[var(--home-term-border)] text-[var(--home-term-dim)]">${title}</div>
    <div class="px-3 py-2 space-y-1">
      ${lines
        .map((ln) => {
          const color =
            ln.kind === "ok"
              ? "text-[var(--home-accent)]"
              : ln.kind === "dim"
                ? "text-[var(--home-term-dim)]"
                : "text-[var(--home-term-fg)]";
          return `<div class="ln" style="animation-delay:${ln.delay}ms"><span class="${color}">${ln.text}</span></div>`;
        })
        .join("")}
    </div>
  </div>`;
}

type Bubble = { delay: number; who: "me" | "bot"; text: string; thumb?: boolean };

function chatPane(): string {
  const bubbles: Bubble[] = [
    { delay: 600, who: "me", text: t("hero.chat.user") },
    { delay: 1000, who: "bot", text: t("hero.chat.bot1") },
    { delay: 2200, who: "bot", text: t("hero.chat.bot2") },
    { delay: 3200, who: "bot", text: t("hero.chat.bot3"), thumb: true },
  ];
  const bubblesHtml = bubbles
    .map((b) => {
      const align = b.who === "me" ? "justify-end" : "justify-start";
      const skin =
        b.who === "me"
          ? "bg-[#95ec69] text-black"
          : "bg-white text-black dark:bg-[#2a2a2a] dark:text-white";
      const thumb = b.thumb
        ? `<div class="mt-1.5 h-12 w-full rounded bg-gradient-to-br from-[var(--home-accent)]/30 to-[var(--home-accent)]/10 border border-[var(--home-accent)]/40 flex items-center justify-center text-[10px] text-[var(--home-term-dim)]">session#a3f · feature/weighted-loss · 17/17 ✓</div>`
        : "";
      return `<div class="bubble flex ${align}" style="animation-delay:${b.delay}ms"><div class="max-w-[80%] rounded-md px-3 py-1.5 text-xs leading-relaxed ${skin}">${b.text}${thumb}</div></div>`;
    })
    .join("");

  return `
  <div class="rounded-md border border-[var(--home-term-border)] bg-[#ededed] dark:bg-[#1a1a1a] overflow-hidden">
    <div class="px-3 py-1.5 border-b border-[var(--home-term-border)] text-xs font-medium text-[var(--home-term-fg)]">${t("hero.chat.title")}</div>
    <div role="log" aria-live="polite" class="px-3 py-3 space-y-2 min-h-[260px]">${bubblesHtml}</div>
  </div>`;
}

function hero(): string {
  const macLines: TermLine[] = [
    { delay: 200, text: '$ codex "重构 loss 让它支持', kind: "cmd" },
    { delay: 400, text: '   weighted sampling"', kind: "cmd" },
    { delay: 600, text: "▸ edit graph.py:42-78", kind: "dim" },
    { delay: 800, text: "⏸  session#a3f · 离开公司", kind: "ok" },
  ];
  const sbxLines: TermLine[] = [
    { delay: 1200, text: "▸ codex-app-gateway · paused", kind: "dim" },
    { delay: 1400, text: "▸ awaiting reattach …", kind: "dim" },
    { delay: 1800, text: "▸ 18:42 attach: weixin/me", kind: "dim" },
    { delay: 2000, text: "✓ resumed by WeChat", kind: "ok" },
  ];
  return `
  <section class="pt-12 pb-20">
    <div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
      <div>
        <h1 class="text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">${t("hero.h1")}</h1>
        <p class="mt-6 text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-xl">${t("hero.sub")}</p>
        <div class="mt-8 flex flex-wrap items-center gap-3">
          <a href="${PLATFORM_URL}" class="font-mono text-sm px-4 py-2 rounded-md bg-[var(--home-accent)] text-[var(--home-accent-fg)] hover:opacity-90 no-underline">${t("hero.cta.primary")}</a>
          <a href="${GITHUB_URL}" target="_blank" rel="noopener noreferrer" class="font-mono text-sm px-4 py-2 rounded-md border border-[var(--border)] hover:opacity-90 no-underline text-[var(--foreground)]">${t("hero.cta.secondary")}</a>
          <span class="font-mono text-[10px] px-2 py-1 rounded border border-[var(--home-accent)]/40 text-[var(--home-accent)]">${t("hero.chip.online")}</span>
        </div>
      </div>
      <div role="img" aria-label="${t("hero.sub")}" class="hero-demo grid grid-cols-[1fr_1fr] gap-3">
        <div class="flex flex-col gap-3">
          ${term(t("hero.term.macbook"), macLines)}
          ${term(t("hero.term.sandbox"), sbxLines)}
        </div>
        ${chatPane()}
      </div>
    </div>
  </section>`;
}

function quote(): string {
  const accent = (text: string) =>
    `<span class="text-[var(--home-accent)] font-medium">${text}</span>`;
  return `
  <section class="py-16 border-l-2 border-[var(--home-accent)] pl-6">
    <blockquote class="text-lg lg:text-xl text-[var(--foreground)] leading-relaxed max-w-3xl">${t("quote.before")}${accent(t("quote.conductor"))}${t("quote.middle")}${accent(t("quote.orchestrator"))}${t("quote.after")}</blockquote>
    <p class="mt-3 text-sm text-[var(--muted-foreground)] font-mono">
      <a href="https://addyosmani.com/blog/future-agentic-coding/" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--home-accent)] hover:underline no-underline text-[var(--muted-foreground)]">${t("quote.attrib")} ↗</a>
    </p>
    <p class="mt-2 text-sm text-[var(--muted-foreground)]">${t("quote.caption")}</p>
  </section>`;
}

function pillars(): string {
  const items = [
    { emoji: "🧵", titleKey: "pillars.session.title", bodyKey: "pillars.session.body" },
    { emoji: "📱", titleKey: "pillars.pocket.title", bodyKey: "pillars.pocket.body" },
    { emoji: "🌐", titleKey: "pillars.workspace.title", bodyKey: "pillars.workspace.body" },
    { emoji: "🔌", titleKey: "pillars.tunnel.title", bodyKey: "pillars.tunnel.body" },
  ];
  return `
  <section id="why" class="py-20">
    <h2 class="font-mono text-xs tracking-[0.2em] text-[var(--muted-foreground)] uppercase mb-8">${t("pillars.heading")}</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      ${items
        .map(
          (p) => `
        <article class="rounded-lg border border-[var(--border)] p-6 bg-[var(--card)]">
          <div class="text-3xl mb-3" aria-hidden="true">${p.emoji}</div>
          <h3 class="text-lg font-semibold mb-2">${t(p.titleKey)}</h3>
          <p class="text-sm text-[var(--muted-foreground)] leading-relaxed">${t(p.bodyKey)}</p>
        </article>`
        )
        .join("")}
    </div>
    <p class="mt-6 font-mono text-xs text-[var(--muted-foreground)] leading-relaxed">${t("pillars.also")}</p>
  </section>`;
}

type Row = {
  tool: string;
  local: string;
  cloud: string;
  peer: string;
  session: string;
  chat: string;
  us?: boolean;
};

function compare(): string {
  const rows: Row[] = [
    { tool: "OpenClaw / Claude Code Remote", local: "1", cloud: "—", peer: "—", session: "—", chat: "✓" },
    { tool: "Claude Code on the web",        local: "—", cloud: "✓", peer: "—", session: "—", chat: "—" },
    { tool: "CC Agent Teams",                local: "—", cloud: "✓(sub)", peer: "—", session: "—", chat: "—" },
    { tool: "agentserver",                   local: "✓ many", cloud: "✓", peer: "✓", session: "✓ any front-end", chat: "✓", us: true },
  ];
  return `
  <section id="compare" class="py-20">
    <h2 class="font-mono text-xs tracking-[0.2em] text-[var(--muted-foreground)] uppercase mb-8">${t("compare.heading")}</h2>
    <div class="overflow-x-auto">
      <table class="w-full font-mono text-xs border border-[var(--home-term-border)]">
        <caption class="sr-only">${t("compare.heading")}</caption>
        <thead>
          <tr class="bg-[var(--card)] text-[var(--home-accent)]">
            <th scope="col" class="text-left p-3 font-medium">${t("compare.col.tool")}</th>
            <th scope="col" class="text-center p-3 font-medium">${t("compare.col.local")}</th>
            <th scope="col" class="text-center p-3 font-medium">${t("compare.col.cloud")}</th>
            <th scope="col" class="text-center p-3 font-medium">${t("compare.col.peer")}</th>
            <th scope="col" class="text-center p-3 font-medium">${t("compare.col.session")}</th>
            <th scope="col" class="text-center p-3 font-medium">${t("compare.col.chat")}</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map((r) => {
              const rowClass = r.us
                ? "bg-[var(--home-grid)] border-l-2 border-[var(--home-accent)]"
                : "border-t border-[var(--home-term-border)]";
              const cellClass = r.us ? "text-[var(--home-accent)] font-medium" : "";
              const toolText = r.us ? `▸ ${r.tool}` : r.tool;
              return `
              <tr class="${rowClass}">
                <th scope="row" class="text-left p-3 font-normal ${cellClass}">${toolText}</th>
                <td class="text-center p-3">${r.local}</td>
                <td class="text-center p-3">${r.cloud}</td>
                <td class="text-center p-3">${r.peer}</td>
                <td class="text-center p-3">${r.session}</td>
                <td class="text-center p-3">${r.chat}</td>
              </tr>`;
            })
            .join("")}
        </tbody>
      </table>
    </div>
    <p class="mt-4 text-sm text-[var(--muted-foreground)]">${t("compare.caption")}</p>
  </section>`;
}

function onboarding(): string {
  const steps = [
    { n: 1, titleKey: "onb.s1.title", bodyKey: "onb.s1.body" },
    { n: 2, titleKey: "onb.s2.title", bodyKey: "onb.s2.body" },
    { n: 3, titleKey: "onb.s3.title", bodyKey: "onb.s3.body" },
    { n: 4, titleKey: "onb.s4.title", bodyKey: "onb.s4.body" },
    { n: 5, titleKey: "onb.s5.title", bodyKey: "onb.s5.body" },
    { n: 6, titleKey: "onb.s6.title", bodyKey: "onb.s6.body", emphasized: true },
    { n: 7, titleKey: "onb.s7.title", bodyKey: "onb.s7.body" },
  ];
  return `
  <section id="how" class="py-20">
    <h2 class="font-mono text-xs tracking-[0.2em] text-[var(--muted-foreground)] uppercase mb-8">${t("onb.heading")}</h2>
    <ol class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 list-none p-0">
      ${steps
        .map((s) => {
          const card = s.emphasized
            ? "border-[var(--home-accent)] bg-[var(--home-grid)]"
            : "border-[var(--border)] bg-[var(--card)]";
          const num = s.emphasized
            ? "bg-[var(--home-accent)] text-[var(--home-accent-fg)]"
            : "bg-[var(--secondary)] text-[var(--secondary-foreground)]";
          const title = s.emphasized ? "text-[var(--home-accent)]" : "";
          return `
          <li class="rounded-lg border p-5 ${card}">
            <div class="inline-flex items-center justify-center h-7 w-7 rounded-full font-mono text-xs mb-3 ${num}">${s.n}</div>
            <h3 class="text-sm font-semibold mb-1 ${title}">${t(s.titleKey)}</h3>
            <p class="text-xs text-[var(--muted-foreground)] leading-relaxed">${t(s.bodyKey)}</p>
          </li>`;
        })
        .join("")}
    </ol>
    <a href="${DOCS_URL}" target="_blank" rel="noopener noreferrer" class="inline-block mt-6 font-mono text-xs text-[var(--home-accent)] hover:underline no-underline">${t("onb.docs")}</a>
  </section>`;
}

function finalCta(): string {
  return `
  <section class="my-20 py-16 border-y-2 border-[var(--home-accent)]">
    <div class="text-center">
      <h2 class="text-3xl lg:text-4xl font-semibold tracking-tight max-w-2xl mx-auto">${t("cta.heading")}</h2>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a href="${PLATFORM_URL}" class="font-mono text-sm px-5 py-2.5 rounded-md bg-[var(--home-accent)] text-[var(--home-accent-fg)] hover:opacity-90 no-underline">${t("cta.primary")}</a>
        <a href="${SELFHOST_URL}" target="_blank" rel="noopener noreferrer" class="font-mono text-sm px-5 py-2.5 rounded-md border border-[var(--border)] hover:opacity-90 no-underline text-[var(--foreground)]">${t("cta.secondary")}</a>
      </div>
    </div>
  </section>`;
}

function footer(): string {
  const icp =
    locale === "zh"
      ? `<p class="mt-2 text-center font-mono text-[10px] text-[var(--muted-foreground)] space-x-3">
           <a class="hover:text-[var(--foreground)] no-underline text-[var(--muted-foreground)]" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">京ICP备2022017521号-2</a>
           <a class="hover:text-[var(--foreground)] no-underline text-[var(--muted-foreground)]" href="https://beian.mps.gov.cn/#/query/webSearch?code=11010502060080" target="_blank" rel="noopener noreferrer">京公网安备11010502060080号</a>
         </p>`
      : "";
  return `
  <footer class="border-t border-[var(--border)] py-10 mt-10">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <p class="font-mono font-semibold mb-3">${t("footer.col1.title")}</p>
          <ul class="space-y-1 text-[var(--muted-foreground)] list-none p-0">
            <li><a class="hover:text-[var(--foreground)] no-underline text-[var(--muted-foreground)]" href="https://agentserver.dev" target="_blank" rel="noopener noreferrer">agentserver.dev</a></li>
            <li><a class="hover:text-[var(--foreground)] no-underline text-[var(--muted-foreground)]" href="${GITHUB_URL}" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a class="hover:text-[var(--foreground)] no-underline text-[var(--muted-foreground)]" href="${DOCS_URL}" target="_blank" rel="noopener noreferrer">Docs</a></li>
            <li><a class="hover:text-[var(--foreground)] no-underline text-[var(--muted-foreground)]" href="${RELEASES_URL}" target="_blank" rel="noopener noreferrer">Changelog</a></li>
          </ul>
        </div>
        <div>
          <p class="font-mono font-semibold mb-3">${t("footer.col2.title")}</p>
          <ul class="space-y-1 text-[var(--muted-foreground)] list-none p-0">
            <li><span>${t("footer.col2.weixin")}</span></li>
            <li><span>${t("footer.col2.telegram")}</span></li>
            <li><a class="hover:text-[var(--foreground)] no-underline text-[var(--muted-foreground)]" href="${ISSUES_URL}" target="_blank" rel="noopener noreferrer">${t("footer.col2.issues")}</a></li>
          </ul>
        </div>
        <div>
          <p class="font-mono font-semibold mb-3">${t("footer.col3.title")}</p>
          <ul class="space-y-1 text-[var(--muted-foreground)] list-none p-0">
            <li><a class="hover:text-[var(--foreground)] no-underline text-[var(--muted-foreground)]" href="${GITHUB_URL}/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">${t("footer.col3.license")}</a></li>
            <li><span>${t("footer.col3.privacy")}</span></li>
            <li><span>${t("footer.col3.contact")}</span></li>
          </ul>
        </div>
      </div>
      ${icp}
    </div>
  </footer>`;
}

const pageHtml = `<!doctype html><html><body>${navBar()}<main class="mx-auto max-w-6xl px-6">${hero()}${quote()}${pillars()}${compare()}${onboarding()}${finalCta()}</main>${footer()}</body></html>`;

const parsed = new DOMParser().parseFromString(pageHtml, "text/html");
const app = document.querySelector<HTMLDivElement>("#app")!;
app.setAttribute("data-theme", "home");
app.className = "min-h-screen bg-[var(--background)] text-[var(--foreground)]";
app.replaceChildren(...Array.from(parsed.body.childNodes));

const langBtn = document.getElementById("lang-toggle");
if (langBtn) {
  langBtn.addEventListener("click", () => {
    const next = langBtn.dataset.next;
    if (next === "zh" || next === "en") setLocaleAndReload(next);
  });
}
