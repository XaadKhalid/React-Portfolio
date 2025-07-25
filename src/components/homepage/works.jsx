import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./work-exp.jpg"
								alt="Organization"
								className="work-image"
							/>
							<div className="work-title">APP IN SNAP</div>
							<div className="work-subtitle">
								Ass Software Engineer
							</div>
							<div className="work-duration">Jan 25 - Present</div>
						</div>

						<div className="work">
							<img
								src="./work-exp.jpg"
								alt="Organization"
								className="work-image"
							/>
							<div className="work-title">Now Software</div>
							<div className="work-subtitle">
								Jr .NET Developer
							</div>
							<div className="work-duration">Nov 23 - Dec 24</div>
						</div>

						<div className="work">
							<img
								src="./work-exp.jpg"
								alt="Organization"
								className="work-image"
							/>
							<div className="work-title"> ITRamp Solutions</div>
							<div className="work-subtitle">
								Jr Software Engineer
							</div>
							<div className="work-duration">Jul 23 - Oct 23</div>
						</div>

						<div className="work">
							<img
								src="./work-exp.jpg"
								alt="Organization"
								className="work-image"
							/>
							<div className="work-title">Eziline Software</div>
							<div className="work-subtitle">
								 Trainne Web Developer
							</div>
							<div className="work-duration">Aug 22 - Nov 22</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
