# The OS – Universal Operating System Framework

The OS is a visionary experiment: an adaptive, living operating system framework built with **React**, **TypeScript**, and **Vite**.  Unlike conventional operating systems, it is designed to evolve, learn, and adapt through dynamic plugins, a real‑time event bus and self‑updating capabilities.  Our goal is extreme: **to unify every digital experience—across devices, languages and time—into a single, open platform that amplifies human creativity and agency**.

## Vision

Imagine an operating system that never becomes obsolete; that grows with you, learning your workflow and evolving through plugins that you can load from anywhere; that exposes a universal API bridging web, desktop and future hardware; that continuously optimises its performance and security; and that invites everyone to contribute to its DNA.  Our mission is to build the skeleton of such an OS, an infinitely extensible foundation for the next generation of computing.

## Features

- **Living Shell UI** – A reactive shell with a plugin management sidebar and a container area where plugin UIs are rendered.  It runs in the browser or can be packaged as a desktop application.
- **Plugin Runtime** – Dynamically import and run ES module plugins at runtime.  Each plugin exports a `mount(bus, container)` function (with optional `unmount` and `upgrade` hooks).  Plugins can be headless or provide UIs.
- **Event Bus** – A simple publish/subscribe system for inter‑plugin communication.  Plugins can emit and listen to events such as `tick`.
- **Self‑Upgrade Path** – Reads an upgrade manifest (`public/upgrade-manifest.json`) to determine stable and experimental versions and stub hooks for orchestrated migrations.
- **Security Framework** – A `securityManager` controls which plugin origins are allowed and which event names can be emitted.  The plugin host proxies event emissions to enforce these policies.
- **Interoperability Framework** – An `interopManager` registers adapters to convert data between external systems (or languages) and the internal representation, laying the foundation for cross‑language, cross‑platform plugins.
- **Self‑Optimisation Framework** – A `metricsCollector` records plugin loads, event counts and uptime.  The `optimisationManager` runs strategies to adjust behaviour based on runtime metrics; a default strategy logs metrics.

### New in v0.3

- **Multi‑Device Framework** – Inspired by Google's Cross Device SDK【762133663508272†L370-L378】, the `multiDeviceManager` provides a unified abstraction for **device discovery**, **secure connections** and **session transfer**.  It exposes APIs to discover nearby devices, establish encrypted links and create sessions that can be transferred or shared between devices.  While the current implementation is a stub, it lays the groundwork for seamless multi‑device experiences such as starting a task on one device and continuing it on another【739387190212782†L56-L88】.

- **Cross‑Platform Orientation** – The OS embraces cross‑platform development, drawing on frameworks like **Flutter**, **React Native**, **Ionic**, **.NET MAUI**, **Kotlin Multiplatform** and **Qt**【370891671555048†L284-L317】【682864885807366†L46-L66】.  These tools enable developers to write once and run everywhere—on mobile, web and desktop—with near‑native performance and shared business logic.  Our interoperability layer is designed to plug into these ecosystems, making it easier to integrate plugins written for multiple runtimes and languages.

## Installation

1. **Requirements:** Node.js 20+, npm.
2. Clone this repository and run `npm install` to install dependencies.
3. Start the development server with `npm run dev`.  The app will usually be available at `http://localhost:5173`.
4. To build for production, run `npm run build` and serve the resulting `dist` directory.

## Usage

The shell includes a sidebar where you can paste a URL to an ES module plugin.  Plugins must export a `mount(bus, container)` function to attach to the event bus and render into the container.  They may also export `unmount` for cleanup and `upgrade(fromVersion)` for migrations.  To demonstrate, we include:

- **SamplePanel** – A UI plugin that counts `tick` events.
- **ClockPlugin** – A headless plugin that emits a `tick` event every second.

To explore the self‑optimisation framework, monitor the console for logs produced by the default optimisation strategy.

## Contributing & Extending

This project is a canvas for experimentation.  To add new capabilities:

- **Write plugins** that mount UIs, emit events or provide services.
- **Register security policies** by updating `securityManager.setPolicy()`.
- **Add adapters** via `interopManager.register()` for cross‑ecosystem data translation.
- **Implement optimisation strategies** and register them with `optimisationManager.register()`.

We encourage contributions and discussions—especially on how to extend this framework into the visionary OS described in our mission.  See `CONTRIBUTING.md` (coming soon) for guidelines.

## License

This project is licensed under the MIT License.  See `LICENSE` for details.