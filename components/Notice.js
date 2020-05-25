import React, { useState, useEffect } from "react";
// import { func, string } from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import animationData from "../public/static/images/lf30_editor_qQ1FOd.json";
import Member from "./TeamMember";
import TEAM from "../public/static/data/team.json";
import TeamMember from "./TeamMember";

const NoticeTitle = styled.h4`
	font-family: Sen;
	font-weight: 700;
	color: #121212;
`;

const NoticeHeading = styled.h5`
	font-family: Sen;
	font-weight: 700;
	color: #121212;
`;

const Paragraph = styled.p`
	font-family: Sen;
	font-size: 16px;
	color: #707070;
	margin-bottom: 0;
`;

const Button = styled.button`
	font-family: Sen;
	margin-top: 16px;
	font-weight: 700;
	padding: 8px 32px;
	border-radius: 4px;
	background: #4285f4;
	border: none;
	font-size: 16px;
	color: #fff;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Card = styled.div`
	background: #f9f9f9;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
`;

const Notice = () => {
	return (
		<div className="container pb-5">
			<Card className="p-5 mb-5">
				<div className="row">
					<div className="col-3">
						<NoticeTitle>May 25th, 2020</NoticeTitle>
						<Paragraph>07:00 PM, E-Block, CSE Dept.</Paragraph>
					</div>
					<div className="col-lg-7">
						<NoticeHeading>
							Lorem ipsum dolor sit amet.
						</NoticeHeading>
						<Paragraph>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quam magnam incidunt facere odit nesciunt.
							Sapiente eligendi cupiditate rem cum debitis
							corrupti ratione.
						</Paragraph>
					</div>
					<div className="col-lg-2">
						<Button>Register</Button>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default Notice;
