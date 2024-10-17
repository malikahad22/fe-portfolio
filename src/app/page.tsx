"use client";
import { useEffect, useState } from "react";

import { getMeData, getProjectsData } from "@/app/lib/api/index";

import Hero from "@/app/sections/hero-section/Page";
// import Loading from "@/app/component/spinners/Page";
import Projects from "@/app/sections/projects/Page";
import About from "@/app/sections/about-me/Page";
import Skills from "@/app/sections/Skills/Page";
import Services from "@/app/sections/services/Page";
import Contact from "@/app/sections/Contact-Me/Page";

export default function Home() {
  const [me, setMe] = useState(null);
  const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(true);

  const getMe = async () => {
    // setLoading(true);
    try {
      const { data = null } = await getMeData();
      if (!!data === false) throw new Error("something went wrong!");
      setMe(data[0]);
      // setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getProjects = async () => {
    try {
      // setLoading(true);
      const { data = null } = await getProjectsData();
      if (!!data == false) throw new Error("No Project Found!");
      setProjects(data?.data);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getMe();
      getProjects();
    }, 1000);
  }, []);
  return (
    <>
      <div>
        {/* <Particals /> */}
        <Hero me={me} />
        <Projects projects={projects} />
        <About me={me} />
        <Skills />
        <Services />
        <Contact me={me} />
      </div>
      {/* <Loading loading={loading} /> */}
    </>
  );
}
