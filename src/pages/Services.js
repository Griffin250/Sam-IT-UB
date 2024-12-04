import React from 'react'

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-gray-100 to-blue-200 py-12 px-6 md:px-16 lg:px-24 mt-12">
    <div className="max-w-4xl mx-auto">
      {/* Heading */}

      <h2 className="text-5xl font-bold text-gray-700 mb-4 text-center">
        Our Services
      </h2>
      {/* Subtitle */}
      <h3 className="text-gray-600 text-2xl mb-8 text-center">
        The Best Defense is a Good Offense.
      </h3>
      {/* Description */}
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        As a leading Managed Service Provider in Agder, Sam-IT Technology
        Solutions partners with clients to take a proactive role in your IT.
        <b />
        We mitigate problems before they happen.
        <br />
        When issues do arise, your team will have 24/7/365 access to IT
        support and a live Help Desk.
      </p>
    </div>
    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {/* Push to Deploy */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          IT Support
        </h3>
        <p className="text-gray-600">
          Computer & Network Setup, Management and Support
          <br />
          Vendor Coordination
        </p>
      </div>
      {/* SSL Certificates */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Managed Services
        </h3>
        <p className="text-gray-600">
          IT System Planning and Maintenance
          <br />
          Proactive Monitoring <br />
          On-Demand Support
        </p>
      </div>
      {/* Simple Queues */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Security
        </h3>
        <p className="text-gray-600">
          Malware Protection <br />
          Monitoring
          <br />
          Vulnerability Analysis
          <br />
          Data Recovery Planning
        </p>
      </div>
      {/* Advanced Security */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Help Deask
        </h3>
        <p className="text-gray-600">Direct Support to End Users</p>
      </div>
    </div>
  </div>
  )
}

export default Services