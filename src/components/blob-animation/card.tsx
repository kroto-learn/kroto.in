import styled from "styled-components";
import Row from "./row";

export default function Card() {
  const registrationFormUrl = "https://forms.gle/yrezr2qnFE6Qq3XLA";
  return (
    <div className="text-xs md:text-base">
      <Wrapper>
        <RowWrapper>
          <Row
            number="1"
            title="Get exposed more"
            subtitle="Joining a club or a society will enable you to connect to a peer group who shares similar interests as you."
          />
          <Row
            number="2"
            title="Enrich your life as a student."
            subtitle="Being a part of a club or a society helps you to gain knowledge, skills and experience in leadership, communication, problem-solving, group development and management, finance, presentation and public speaking."
          />
        </RowWrapper>
        <a
          href={registrationFormUrl}
          target="_blank"
          type="button"
          className="mt-5 mr-2 rounded-lg bg-gradient-to-br from-[#ef3054] to-[#ef3054]/75 px-5 py-2.5 text-center text-xs font-medium text-white transition-all hover:bg-gradient-to-bl hover:no-underline focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 md:text-lg"
        >
          Get Started Now
        </a>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  width: 100%;
  padding: 20px;
  background: rgba(239, 48, 84, 0.5);
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25),
    inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(40px);
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  gap: 8px;
`;
