import React from "react";
import styled from "styled-components";
import "./AboutUsPage.css";
import SubBar from '../components/SubBar.jsx';
import topimg from '../assets/top_img.png'
import midimg from '../assets/mid_img.png'


const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <OverlapGroup1>
        <LoremIpsumDolorSi>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare et odio et urna sed. <br /><br />
        Ante pellentesque justo, odio imperdiet. Phasellus suspendisse sit sagittis, scelerisque senectus orci eget quis.
        </LoremIpsumDolorSi>
        <Img1 style={{ backgroundImage: `url(${topimg})` }}></Img1>
        <ConnectingLocalFar>Connecting local farmers with their community.</ConnectingLocalFar>
      </OverlapGroup1>
      <FlexRow>
        <FlexCol>
          <OurStory>Our Story</OurStory>
          <LoremIpsumDolorSi1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare et odio et urna sed. <br /><br />
          Ante pellentesque justo, odio imperdiet. Phasellus suspendisse sit sagittis, scelerisque senectus orci eget quis. 
          </LoremIpsumDolorSi1>
        </FlexCol>
        <Img2 style={{ backgroundImage: `url(${midimg})` }}></Img2>
      </FlexRow>
      <OverlapGroup2>
          <BackBot></BackBot>
          <OurMission>Our Mission</OurMission>
          <LoremIpsumDolorSi2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare et odio et urna sed. <br /><br />
          Ante pellentesque justo, odio imperdiet. Phasellus suspendisse sit sagittis, scelerisque senectus orci eget quis. 
          </LoremIpsumDolorSi2>
          <JoinOurTeam>Join our team.</JoinOurTeam>
          <SubBar />
      </OverlapGroup2>
    </div>
  );
}


const OverlapGroup1 = styled.div`
  width: 1440px;
  height: 637px;
  z-index: 1;
  position: relative;
  margin-top: 75px;
  background-color: var(--jungle-green);
`;

const LoremIpsumDolorSi = styled.div`
  color: var(--black);
  font-family: var(--font-family-quicksand);
  font-size: var(--font-size-m);
  font-weight: 600;
  font-style: normal;
  position: absolute;
  width: 474px;
  top: 371px;
  left: 69px;
  letter-spacing: 0;
`;

const Img1 = styled.div`
  position: absolute;
  height: 415px;
  top: 162px;
  left: 831px;
  display: flex;
  align-items: flex-end;
  min-width: 507px;
  background-size: 100% 100%;
`;

const ConnectingLocalFar = styled.h1`
  color: var(--blue-dianne);
  font-family: var(--font-family-quicksand);
  font-size: var(--font-size-xl);
  font-weight: 700;
  font-style: normal;
  position: absolute;
  width: 532px;
  top: 116px;
  left: 69px;
  letter-spacing: -0.45px;
`;

const FlexRow = styled.div`
  height: 471px;
  z-index: 2;
  margin-top: 101px;
  margin-right: 47.68px;
  display: flex;
  align-items: flex-start;
  min-width: 1282px;
`;

const FlexCol = styled.div`
  width: 643px;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 421px;
`;

const OurStory = styled.div`
  color: var(--black);
  font-family: var(--font-family-quicksand);
  font-size: var(--font-size-l);
  font-weight: 600;
  font-style: normal;
  min-height: 40px;
  letter-spacing: 0;
`;

const LoremIpsumDolorSi1 = styled.div`
  color: var(--black);
  font-family: var(--font-family-quicksand);
  font-size: var(--font-size-m);
  font-weight: 600;
  font-style: normal;
  width: 643px;
  min-height: 349px;
  margin-top: 32px;
  letter-spacing: 0;
`;

const Img2 = styled.div`
  width: 507px;
  height: 434px;
  position: relative;
  margin-left: 133px;
  background-size: 100% 100%;
`;

const OverlapGroup2 = styled.div`
  width: 1540px;
  height: 638px;
  z-index: 3;
  position: relative;
  align-self: flex-start;
  margin-top: 94px;
`;

const JoinOurTeam = styled.div`
  color: var(--blue-dianne);
  font-family: var(--font-family-quicksand);
  font-size: var(--font-size-xl);
  font-weight: 700;
  font-style: normal;
  position: absolute;
  width: 532px;
  top: 26px;
  left: 971px;
  letter-spacing: -0.45px;
`;

const LoremIpsumDolorSi2 = styled.div`
  color: var(--black);
  font-family: var(--font-family-quicksand);
  font-size: var(--font-size-m);
  font-weight: 600;
  font-style: normal;
  position: absolute;
  width: 643px;
  top: 153px;
  left: 69px;
  letter-spacing: 0;
`;

const OurMission = styled.div`
  color: var(--black);
  font-family: var(--font-family-quicksand);
  font-size: var(--font-size-l);
  font-weight: 600;
  font-style: normal;
  position: absolute;
  top: 26px;
  left: 55px;
  letter-spacing: 0;
`;

const BackBot = styled.div`
  position: absolute;
  width: 1440px;
  height: 637px;
  top: 0;
  left: 0;
  background-color: var(--jungle-green);
`;


export default AboutUsPage;