/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen, Code, Github, Smartphone, Terminal, ExternalLink, Download } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 px-4 py-12 sm:px-6 lg:px-8 font-sans text-neutral-900">
      <div className="mx-auto max-w-3xl">
        
        {/* Header */}
        <header className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
            <Smartphone className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Building an APK for OKFZCTU
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            How to turn FrenchInvoice Community Edition into an Android App
          </p>
        </header>

        {/* Content */}
        <div className="space-y-8">
          
          <section className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200">
            <div className="border-b border-neutral-100 bg-neutral-50/50 px-6 py-4">
              <h2 className="flex items-center text-lg font-semibold text-neutral-800">
                <Github className="mr-2 h-5 w-5 text-neutral-500" />
                Understanding the Repository
              </h2>
            </div>
            <div className="p-6">
              <p className="mb-4 leading-relaxed text-neutral-600">
                The GitHub repository <strong><a href="https://github.com/VTLO/OKFZCTU" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">VTLO/OKFZCTU</a></strong> (FrenchInvoice CE) is a <strong>self-hosted web application</strong> built with .NET 9 and deployed using Docker.
              </p>
              <div className="rounded-lg bg-orange-50 p-4 border border-orange-100">
                <p className="text-orange-800 text-sm font-medium">
                  Important: Because this is a backend web service and not a native mobile application, you cannot directly compile its source code into an Android `.apk` file using Android Studio or Gradle natively.
                </p>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200">
            <div className="border-b border-neutral-100 bg-neutral-50/50 px-6 py-4">
              <h2 className="flex items-center text-lg font-semibold text-neutral-800">
                <Terminal className="mr-2 h-5 w-5 text-neutral-500" />
                How to make it an Android App (APK)
              </h2>
            </div>
            <div className="p-6">
              <p className="mb-6 leading-relaxed text-neutral-600">
                To create an installable Android app, you need to wrap your hosted instance of FrenchInvoice into an Android Webview (Trusted Web Activity). Here is the step-by-step process:
              </p>

              <div className="space-y-6">
                
                {/* Step 1 */}
                <div className="flex">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Host the Web Application</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      You must first deploy the project to a public server using Docker. It must have a public URL and an SSL certificate (HTTPS).
                    </p>
                    <div className="mt-2 text-xs font-mono bg-neutral-100 p-2 rounded text-neutral-700">
                      https://invoice.yourdomain.com
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Ensure PWA Compliance</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      The web application needs a Web App Manifest (`manifest.json`) and a basic service worker. If the OKFZCTU project already supports Progressive Web App (PWA) features out of the box, you are ready for the next step.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Generate the APK with PWABuilder</h3>
                    <p className="mt-1 text-sm text-neutral-600 mb-2">
                      The easiest, no-code way to generate an `.apk` from a deployed web application is using PWABuilder (a tool backed by Microsoft).
                    </p>
                    <ol className="list-decimal pl-5 text-sm space-y-1 text-neutral-600">
                      <li>Go to <a href="https://www.pwabuilder.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline inline-flex items-center">pwabuilder.com <ExternalLink className="ml-1 h-3 w-3" /></a></li>
                      <li>Enter the URL of your hosted FrenchInvoice instance.</li>
                      <li>Click "Start" to evaluate your PWA.</li>
                      <li>Click "Package for Android".</li>
                      <li>Download the resulting <code>.apk</code> or <code>.aab</code> file.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-6">
            <h2 className="flex items-center text-lg font-semibold text-blue-900 mb-3">
              <Code className="mr-2 h-5 w-5 text-blue-600" />
              Alternative: Capacitor / Cordova
            </h2>
            <p className="text-sm text-blue-800 leading-relaxed mb-4">
              If you are a developer and want to build the APK locally, you can use Ionic Capacitor to scaffold a wrapper app:
            </p>
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg bg-neutral-900 p-4 text-xs font-mono text-neutral-50">
{`npm install -g @capacitor/cli
npm init -y
npm install @capacitor/core
npm install @capacitor/android
npx cap init FrenchInvoice com.yourdomain.invoice
npx cap add android`}
            </pre>
            <p className="mt-4 text-sm text-blue-800 leading-relaxed">
              Then edit the <code>capacitor.config.json</code> to point the server to your hosted URL, open Android Studio natively on your computer, and build the APK!
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

