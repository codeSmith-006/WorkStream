// import { Check, Star } from 'lucide-react';
// import { Button } from '../UI/Button';
// import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
// import { Badge } from './ui/badge';



export function Pricing() {
  return (
    <section id="pricing" className="py-20  bg-muted/30 dark:bg-muted/20">
      <section className="py-10  sm:py-16 lg:py-24">
        <div className="px-4  mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl  mx-auto text-center">
            <h2 className="text-4xl font-bold  lg:text-5xl sm:text-5xl">
              Pricing & Plans
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Choose the plan that fits your team’s workflow and scale your productivity.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden mt-16 lg:block">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-8 pr-4"></th>

                  <th className="px-4 py-8 text-center">
                    <span className="text-base font-medium text-blue-600">Free</span>
                    <p className="mt-6 text-6xl font-bold">$0</p>
                    <p className="mt-2 text-base font-normal text-gray-500">Per month</p>
                  </th>

                  <th className="px-4 py-8 text-center">
                    <span className="text-base font-medium text-blue-600">Team</span>
                    <p className="mt-6 text-6xl font-bold">$99</p>
                    <p className="mt-2 text-base font-normal text-gray-500">Per month</p>
                  </th>

                  <th className="px-4 py-8 text-center bg-gray-900 rounded-t-xl">
                    <span className="px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-full">
                      Popular
                    </span>
                    <p className="mt-6 text-6xl font-bold text-white">$150</p>
                    <p className="mt-2 text-base font-normal text-gray-200">Per month</p>
                  </th>

                  <th className="px-4 py-8 text-center">
                    <span className="text-base font-medium text-blue-600">Enterprise</span>
                    <p className="mt-6 text-6xl font-bold">$490</p>
                    <p className="mt-2 text-base font-normal text-gray-500">Per month</p>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Projects
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">1</td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">10</td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    50
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>
                </tr>

                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Team Members
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">Up to 3</td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">Up to 20</td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    Up to 100
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>
                </tr>

                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Task Management
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">Basic</td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">Advanced</td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    Advanced + Automation
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">Full Suite</td>
                </tr>

                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    File Storage
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">1 GB</td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">50 GB</td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    200 GB
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">Unlimited</td>
                </tr>

                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Integrations
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">Limited</td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">Slack, GitHub</td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    Slack, GitHub, Google Drive, Jira
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">All</td>
                </tr>

                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Support
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">Community</td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">Email</td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    Priority Chat
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">24/7 Dedicated</td>
                </tr>

                <tr>
                  <td className="py-6 pr-4"></td>
                  <td className="px-4 py-6 text-center">
                    <a
                      href="#"
                      className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Get Started →
                    </a>
                  </td>
                  <td className="px-4 py-6 text-center">
                    <a
                      href="#"
                      className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Get Started →
                    </a>
                  </td>
                  <td className="px-4 py-6 text-center text-white bg-yellow-500 rounded-b-xl">
                    <a
                      href="#"
                      className="inline-flex items-center font-semibold text-white"
                    >
                      Get Started →
                    </a>
                  </td>
                  <td className="px-4 py-6 text-center">
                    <a
                      href="#"
                      className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Get Started →
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
}
