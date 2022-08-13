import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
import ProjectsComponent from "../../layouts/Home/Projects/Projects";
import SimpleDropdown from "../../components/Dropdown/SimpleDropdown/SimpleDropdown";

import styles from "./Projects.module.css";

function Projects() {
  const [state, setState] = React.useState({
    sectors: {
      title: "Sectors",
      selectedDropdownValue: null,
      dropdowns: [
        {
          title: "Residential",
          dropdowns: [
            {
              title: "Classical",
              dropdowns: [
                { title: "Spanish Style" },
                { title: "Victorian Style" },
              ],
            },
            { title: "Modern Classical" },
            { title: "Modern" },
            { title: "Contemporary" },
          ],
        },
        { title: "Commercial", dropdowns: [] },
        { title: "Public Building", dropdowns: [] },
        { title: "Farm House", dropdowns: [] },
      ],
    },
    services: {
      title: "Services",
      selectedDropdownValue: {},
      dropdowns: [
        { title: "Architectural ", dropdowns: [] },
        { title: "Interior ", dropdowns: [] },
        { title: "Landscaping ", dropdowns: [] },
        { title: "Construction ", dropdowns: [] },
      ],
    },
  });

  const handleChange = (e) => {
    setState({
      ...state,
      sectors: {
        ...state.sectors,
        selectedDropdownValue: state.sectors.dropdowns.find((dropdown) =>
          dropdown.title === e.target.value && dropdown.dropdowns.length !== 0
            ? { title: e.target.value, dropdowns: dropdown.dropdowns }
            : null
        ),
      },
    });
  };
  console.log(state);

  return (
    <div>
      <Navbar hamburgerColor="black" />

      <div className="mt-120px mb-100px">
        <div className="container-wrapper">
          <div className={`mb-30px ${styles.filterBy_wrapper}`}>
            <p className="uppercase fs-30px weight-6 darkest-red text-white">Projects</p>
            <div>
              <p className="uppercase fs-20px weight-4 text-white">filter by</p>

              <div>
                <SimpleDropdown
                  onChange={(e) => handleChange(e)}
                  title="Sectors"
                  options={state.sectors.dropdowns.map((data, index) => ({
                    title: data.title,
                  }))}
                />
                {/* {state?.sectors?.selectedDropdownValue?.dropdowns && (
                  <SimpleDropdown
                    title={state.sectors.selectedDropdownValue?.title}
                    options={state.sectors?.selectedDropdownValue?.dropdowns.map(
                      (data, index) => ({
                        title: data.title,
                      })
                    )}
                  />
                )} */}
              </div>

              <SimpleDropdown
                title="Services"
                options={state.services.dropdowns.map((data, index) => ({
                  title: data.title,
                }))}
              />
            </div>
          </div>

          <ProjectsComponent showTitles={false} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
