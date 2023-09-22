import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";


const About = () => {
  return (
    <section className="mt-16">
      <div className="flex flex-col">
        <div className="text-center">
          <h1 className="font-bold half-underline inline-block">WHO WE ARE.</h1>
        </div>
        <p className="mt-6 indent-4">
          We are students biomedical engineering of muhimbili university of
          health and allied sciences organized together to connect biomedical
          personnels ranging from students to engineers from different
          instistutions, where we can learn, get connected and share ideas.
        </p>
        <p className="mt-2 indent-4">
          The React Native ecosystem is far and wide, and people can be part of
          it in many forms; here you will find but a partial
        </p>
      </div>
      <div className="flex flex-col mt-10">
        <h4 className="text-center uppercase font-bold">our version</h4>
        <div className="mt-4">
          <p className="indent-4">
            We are students biomedical engineering of muhimbili university of
            health and allied sciences organized together to connect biomedical
            personnels ranging from students to engineers from different
            instistutions, where we can learn, get connected and share ideas.{" "}
          </p>
          <p className="mt-2 indent-4">
            The React Native ecosystem is far and wide, and people can be part
            of it in many forms; here you will find but a partial
          </p>
        </div>
        <Link href="/" className="mt-4 text-red-900 text-center">
          Contact us to learn more
        </Link>
      </div>
      <div className="mt-10 pb-10 p-2 mb-10 flex flex-col relative w-full bg-[url('/assets/home/bluebg.svg')] bg-cover bg-no-repeat bg-bottom">
        <h2 className="mt-4 text-center font-bold">OUR MISSION</h2>
        <p className="mt-4 indent-4">
          BME ... Nest core team members can work directly with your team on a
          daily basis to help take your project to the next-level. Let us
          partner with you and your team to develop the most ambitious projects.{" "}
        </p>
        <p className="mt-2 indent-4">
          Also core team members can work directly with your team on a daily
          basis to help take your project to the next-level. Let us partner with
          you and your team to develop the most ambitious projects.
        </p>
      </div>
      <div className="flex flex-col mt-16">
        <div className="text-center">
        <h2 className="mt-4 inline-block font-bold half-underline">OUR COMMUNITY</h2>
        </div>
        <div className="flex flex-col mt-4">
          <p className="mt-4 indent-4">
            {" "}
            Welcome to our community Nest core team members can work directly
            with your team on a daily basis to help take your project to the
            next-level. Let us partner with you and your team to develop the
            most ambitious projects.
          </p>
          <p className="mt-2 indent-4">
            {" "}
            Nest core team members can work directly with your team on a daily
            basis to help take your project to the next-level. Let us partner
            with you and your team to develop the most ambitious projects.
          </p>
        </div>
        <Button className="bg-gradient-to-br from-green-600 to-blue-300 rounded-md block mx-auto mt-4 text-black">
          <Link href="#">Join Our Community</Link>
        </Button>
      </div>
    </section>
  );
};

export default About;
