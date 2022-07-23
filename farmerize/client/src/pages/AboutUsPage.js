import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import "./AboutUsPage.css";
import SubBar from '../../components/SubBar.jsx';

export const QuicksandMediumSilverChalice14px = css`
  color: var(--silver-chalice);
  font-family: var(--font-family-quicksand);
  font-size: var(--font-size-xxs);
  font-weight: 500;
  font-style: normal;
`;

export const QuicksandSemiBoldBlack24px = css`
  color: var(--black);
  font-family: var(--font-family-quicksand);
  font-size: var(--font-size-m);
  font-weight: 600;
  font-style: normal;
`;

export const QuicksandBoldBlueDianne45px = css`
  color: var(--blue-dianne);
  font-family: var(--font-family-quicksand);
  font-size: var(--font-size-xl);
  font-weight: 700;
  font-style: normal;
`;

export const QuicksandSemiBoldBlack32px = css`
  color: var(--black);
  font-family: var(--font-family-quicksand);
  font-size: var(--font-size-l);
  font-weight: 600;
  font-style: normal;
`;

function AboutUsPage(props) 
{
  const 
  {
    loremIpsumDolorSi1,
    overlapGroup4,
    line1,
    connectingLocalFar,
    img1,
    img2,
    ourStory,
    loremIpsumDolorSi2,
    line3,
    line4,
    joinOurTeam,
    img3,
    loremIpsumDolorSi3,
    ourMission,
    img4,
  } 
  = props;

  return (
    <div className="about-us-page screen">
      <OverlapGroup1>
        <LoremIpsumDolorSi>{loremIpsumDolorSi1}</LoremIpsumDolorSi>
        <OverlapGroup4 style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <Line1 src={line1} />
        </OverlapGroup4>
        <ConnectingLocalFar>{connectingLocalFar}</ConnectingLocalFar>
      </OverlapGroup1>
      <Img1 src={img1} />
      <Img2 src={img2} />
      <FlexRow>
        <FlexCol>
          <OurStory>{ourStory}</OurStory>
          <LoremIpsumDolorSi1>{loremIpsumDolorSi2}</LoremIpsumDolorSi1>
        </FlexCol>
        <LineContainer>
          <Line3 src={line3} />
          <Line4 src={line4} />
        </LineContainer>
      </FlexRow>
      <OverlapGroup2>
        <OverlapGroup5>
          <Img3 src={img3} />
          <HeroBg>
          </HeroBg>
          <OurMission>{ourMission}</OurMission>
          <LoremIpsumDolorSi2>{loremIpsumDolorSi3}</LoremIpsumDolorSi2>
          <JoinOurTeam>{joinOurTeam}</JoinOurTeam>
          <SubBar />
        </OverlapGroup5>
      </OverlapGroup2>
      <Img4 src={img4} />
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
  ${QuicksandSemiBoldBlack24px}
  position: absolute;
  width: 474px;
  top: 371px;
  left: 69px;
  letter-spacing: 0;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  height: 415px;
  top: 162px;
  left: 831px;
  display: flex;
  align-items: flex-end;
  min-width: 507px;
  background-size: 100% 100%;
`;

const Line1 = styled.img`
  width: 507px;
  height: 415px;
  margin-bottom: 0;
`;

const ConnectingLocalFar = styled.h1`
  ${QuicksandBoldBlueDianne45px}
  position: absolute;
  width: 532px;
  top: 116px;
  left: 69px;
  letter-spacing: -0.45px;
`;

const Img1 = styled.img`
  position: fixed;
  width: 1440px;
  height: 1px;
  top: 77px;
  left: 0;
  z-index: 7;
`;

const Img2 = styled.img`
  position: fixed;
  width: 1440px;
  height: 1px;
  top: 78px;
  left: 0;
  z-index: 6;
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
  ${QuicksandSemiBoldBlack32px}
  min-height: 40px;
  letter-spacing: 0;
`;

const LoremIpsumDolorSi1 = styled.div`
  ${QuicksandSemiBoldBlack24px}
  width: 643px;
  min-height: 349px;
  margin-top: 32px;
  letter-spacing: 0;
`;

const LineContainer = styled.div`
  width: 507px;
  height: 434px;
  position: relative;
  margin-left: 133px;
`;

const Line3 = styled.img`
  position: absolute;
  width: 507px;
  height: 415px;
  top: 19px;
  left: 0;
`;

const Line4 = styled.img`
  position: absolute;
  width: 507px;
  height: 415px;
  top: 0;
  left: 0;
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
  ${QuicksandBoldBlueDianne45px}
  position: absolute;
  width: 532px;
  top: 26px;
  left: 971px;
  letter-spacing: -0.45px;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 1540px;
  height: 638px;
  top: 0;
  left: 0;
`;

const Img3 = styled.img`
  position: absolute;
  width: 1002px;
  height: 2px;
  top: 636px;
  left: 538px;
`;

const LoremIpsumDolorSi2 = styled.div`
  ${QuicksandSemiBoldBlack24px}
  position: absolute;
  width: 643px;
  top: 153px;
  left: 69px;
  letter-spacing: 0;
`;

const HeroBg = styled.div`
  position: absolute;
  width: 1440px;
  height: 637px;
  top: 0;
  left: 0;
  background-color: var(--jungle-green);
`;

const OurMission = styled.div`
  ${QuicksandSemiBoldBlack32px}
  position: absolute;
  top: 26px;
  left: 55px;
  letter-spacing: 0;
`;

const Img4 = styled.img`
  width: 1202px;
  height: 2px;
  z-index: 4;
  margin-top: 69px;
  margin-right: 50px;
`;

export default AboutUsPage;