import Layout from "@/components/Layout/Layout";
import HeadMeta from "@/components/HeadMeta/HeadMeta";

export default async function BeardCare() {
  return (
    <>
      <HeadMeta />
      <Layout style={{ backgroundImage: `url('/background.png')` }}>
        <div
          className="bg-gradient-to-r from-green-400 to-blue-500 border rounded-3xl shadow-lg p-16 mb-36"
          style={{ backgroundImage: `url('/shaving-brush-bg.jpeg')` }}
        >
          <div className="bg-white text-center rounded">
            <h1>AlphaGrooming Accessibility Statement</h1>
            <br />
            Updated: June 2024.
            <br />
            <h2>General</h2>
            AlphaGrooming strives to ensure that its services are accessible to
            people with disabilities. AlphaGrooming has invested a significant
            amount of resources to help ensure that its website is made easier
            to use and more accessible for people with disabilities, with the
            strong belief that every person has the right to live with dignity,
            equality, comfort and independence.
            <h2>Accessibility on</h2>
            <p> https://www.alphagrooming.org</p>
            <h2>Enabling the Accessibility Menu</h2>
            The Https://www.alphagrooming.org accessibility menu can be enabled
            either by hitting the tab key when the page first loads or by
            clicking the accessibility menu icon that appears on the corner of
            the page. After triggering the accessibility menu, please wait a
            moment for the accessibility menu to load in its entirety.
            <h2>Disclaimer</h2>
            AlphaGrooming continues its efforts to constantly improve the
            accessibility of its site and services in the belief that it is our
            collective moral obligation to allow seamless, accessible and
            unhindered use also for those of us with disabilities.
            <br />
            In an ongoing effort to continually improve and remediate
            accessibility issues, we also regularly scan
            Https://www.alphagrooming.org with UserWay&apos;s{" "}
            <a
              href="https://UserWay.org/scanner"
              title="Free Website Accessibility Scanner"
            >
              Accessibility Scanner
            </a>{" "}
            to identify and fix every possible accessibility barrier on our
            site. Despite our efforts to make all pages and content on
            Https://www.alphagrooming.org fully accessible, some content may not
            have yet been fully adapted to the strictest accessibility
            standards. This may be a result of not having found or identified
            the most appropriate technological solution.
            <h2>Here For You</h2>
            If you are experiencing difficulty with any content on
            Https://www.alphagrooming.org or require assistance with any part of
            our site, please contact us during normal business hours as detailed
            below and we will be happy to assist.
            <h2>Contact Us</h2>
            If you wish to report an accessibility issue, have any questions or
            need assistance, please contact AlphaGrooming Customer Support as
            follows:
            <br />
            Email:{" "}
            <a href="mailto:admin@alphagrooming.org">admin@alphagrooming.org</a>
            Phone: Phone: +1 (682) 372-8889
          </div>
        </div>
      </Layout>
    </>
  );
}
