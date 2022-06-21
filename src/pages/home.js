import React from "react";

import { JumbotronContainer} from "../containers/JumbotronContainer";
import { FooterContainer } from "../containers/FooterContainer";
import { FaqsContainer } from "../containers/FaqsContainer";
import { HeaderContainer } from "../containers/HeaderContainer";
import { OptForm } from "../components";
import { Feature } from "../components"


export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>

          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
            <OptForm.Break />
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Get Started</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
