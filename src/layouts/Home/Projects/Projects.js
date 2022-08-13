import React, { useState, useEffect } from "react";

import ProjectCard from "../../../components/Cards/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

//Importing firebase
import firebase from "../../../firebase";
import 'firebase/firestore';
import 'firebase/auth';

function Projects({ showTitles = true }) {

  const [firestoreData, setFirestoreData] = useState([]);
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signedInUserData, setSignedInUserData] = useState({});

  useEffect(() => {

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setStatus(true);
        setSignedInUserData(user);
        console.log("........... User email is equal to : ", user.email)
        // loadData();
      }
      else {
        setStatus(false)
        setSignedInUserData(null);
        //Will work on the login part later on
        // router.push('/');
      }
    })

    console.log("All the data in the staff component is: ", firestoreData);

    // if (status) {
    //SendNotifications();
    const db = firebase.firestore();
    db.collection(`Projects`)
      .get()
      .then(snapshot => {
        let data = [];
        snapshot.forEach(element => {
          data.push(Object.assign({
            "id": element.id,
            "uid": element.uid,
            "userEmail": element.userEmail,
            "Title": element.Title,
            "Description": element.Description,
            "ImageURLArray": element.ImageURLArray,
            "Architects": element.Architects,
            "ProjectClient": element.ProjectClient,
            "Area": element.Area,
            "CompletionDate": element.CompletionDate,
            "StructuralEngineers": element.StructuralEngineers,
            "LandscapeArchitects": element.LandscapeArchitects,
            "projectSiteLocation": element.projectSiteLocation,
            "GoogleMapLink": element.GoogleMapLink,
            "Key": element.Key,
            "timeSubmitted": element.timeSubmitted,
            //New entities
            "ProjectSector": element.ProjectSector,
            "ProjectService": element.ProjectService,
            "ArchitecturalTeam": element.ArchitecturalTeam,
            "InteriorPersons": element.InteriorPersons,
            "LandscapePersons": element.LandscapePersons,
            "BuilderArchitects": element.BuilderArchitects,
            "PhotographyPersons": element.PhotographyPersons
          }, element.data()))
        })
        console.log("data of projects from cloud is equal to ==> ", data)

        if (firestoreData.length !== data.length) {
          setFirestoreData(data);
          setLoading(true);
          console.log("Updated")
        }
      }).catch(err => {
        console.log(err)
      })
    // }
  })

  return (
    <div>
      {showTitles ? (
        <div className="mb-50px">
          <div className={`title_wrapper`}>
            <div className="mb-30px ">
              <p className="text-center fs-30px weight-2 text-white margin-center  title">
                OUR Projects
              </p>
            </div>

            <p className="fs-16px text-center weight-3 lh-35px text-white">
              We have the best of projects in every major sector like Residential, Commercial, Industrial, Hospitality, Workplaces design and the services for interior and exterior both.
            </p>
          </div>
        </div>
      ) : (
        ""
      )}

      <div>
        {(firestoreData.length > 0) ? (
          <div className={styles.project_cards}>
            {firestoreData.map((element, index) => {
              return (
                <div key={index}>
                  <ProjectCard
                    data={{
                      details: {
                        designTeam: "Design Team",
                        architecturalTeam: element.ArchitecturalTeam,
                        interiors: element.InteriorPersons,
                        landscape: element.LandscapePersons,
                        builder: element.BuilderArchitects,
                        photographyBy: element.PhotographyPersons,
                      },
                    }}
                    projectTitle={element.Title}
                    projectDescription={element.Description}
                    img={element.ImageURLArray[0]}
                    clientName={element.ProjectClient}
                    ProjectService={element.ProjectService}
                    projectSiteLocation={element.projectSiteLocation}
                    Area={element.Area}
                    Description={element.Description}
                  />

                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center">
            <p className="fs-16px text-center weight-3 lh-35px italic text-warning">
              No Projects Found. Please add projects to see them here ....
            </p>
          </div>
        )}
      </div>
    </div >
  );
}

export default Projects;
