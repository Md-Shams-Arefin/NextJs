import Image from "next/image";
import * as React from "react";


export default function Features() {
  return (
    <div>
      <article class="center-layout">
        <div class="feature-section">
          <div class="feature-header">
            <div class="text-headline">Cross Platform</div>
            <Image src="/features/feature-icon.svg" height="70px" width="70px" alt="" />
          </div>
          <div class="feature-row">
            <div class="feature">
              <div class="feature-title">Progressive Web Apps</div>
              <p class="text-body">
                Use modern web platform capabilities to deliver app-like
                experiences. High performance, offline, and zero-step
                installation.
              </p>
            </div>

            <div class="feature">
              <div class="feature-title">Native</div>
              <p class="text-body">
                Build native mobile apps with strategies from Cordova, Ionic, or
                NativeScript.
              </p>
            </div>

            <div class="feature">
              <div class="feature-title">Desktop</div>
              <p class="text-body">
                Create desktop-installed apps across Mac, Windows, and Linux
                using the same Angular methods you've learned for the web plus
                the ability to access native OS APIs.
              </p>
            </div>
          </div>
          <hr />
        </div>

        <div class="feature-section">
          <div class="feature-header">
            <div class="text-headline">Speed and Performance</div>
            <Image src="/features/feature-icon.svg" height="70px" width="70px" alt="" />
          </div>
          <div class="feature-row">
            <div class="feature">
              <div class="feature-title">Code Generation</div>
              <p class="text-body">
                Angular turns your templates into code that's highly optimized
                for today's JavaScript virtual machines, giving you all the
                benefits of handwritten code with the productivity of a
                framework.
              </p>
            </div>

            <div class="feature">
              <div class="feature-title">Universal</div>
              <p class="text-body">
                Serve the first view of your application on Node.js??, .NET, PHP,
                and other servers for near-instant rendering in just HTML and
                CSS. Also paves the way for sites that optimize for SEO.
              </p>
            </div>

            <div class="feature">
              <div class="feature-title">Code Splitting</div>
              <p class="text-body">
                Angular apps load quickly with the new Component Router, which
                delivers automatic code-splitting so users only load code
                required to render the view they request.
              </p>
            </div>
          </div>
          <hr />
        </div>

        <div class="feature-section">
          <div class="feature-header">
            <div class="text-headline">Productivity</div>
            <Image src="/features/feature-icon.svg" height="70px" width="70px" alt="" />
          </div>
          <div class="feature-row">
            <div class="feature">
              <div class="feature-title">Templates</div>
              <p class="text-body">
                Quickly create UI views with simple and powerful template
                syntax.
              </p>
            </div>

            <div class="feature">
              <div class="feature-title">Angular CLI</div>
              <p class="text-body">
                Command line tools: start building fast, add components and
                tests, then instantly deploy.
              </p>
            </div>

            <div class="feature">
              <div class="feature-title">IDEs</div>
              <p class="text-body">
                Get intelligent code completion, instant errors, and other
                feedback in popular editors and IDEs.
              </p>
            </div>
          </div>
          <hr />
        </div>

        <div class="feature-section">
          <div class="feature-header">
            <div class="text-headline">Full Development Story</div>
            <Image src="/features/feature-icon.svg" height="70px" width="70px" alt="" />
          </div>
          <div class="feature-row">
            <div class="feature">
              <div class="feature-title">Testing</div>
              <p class="text-body">
                With Karma for unit tests, you can know if you've broken things
                every time you save.
              </p>
            </div>

            <div class="feature">
              <div class="feature-title">Animation</div>
              <p class="text-body">
                Create high-performance, complex choreographies and animation
                timelines with very little code through Angular's intuitive API.
              </p>
            </div>

            <div class="feature">
              <div class="feature-title">Accessibility</div>
              <p class="text-body">
                Create accessible applications with ARIA-enabled components,
                developer guides, and built-in a11y test infrastructure.
              </p>
            </div>
          </div>
        </div>

        <div class="cta-bar announcement-bar">
          <a class="button" href="start">
            Get Started
          </a>
        </div>
      </article>
    </div>
  );
}
