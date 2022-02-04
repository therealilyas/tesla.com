import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    return (
         <Container>
             <Section
               title="Model S"
               description="Order Online for Touchless Delivery"
               backgroundIMg="model-s.jpg"
               leftBtnText="Custom order"
               rightBtnText="Exisiting inventory"
             />
             <Section
               title="Model Y"
               description="Order Online for Touchless Delivery"
               backgroundIMg="model-y.jpg"
               leftBtnText="Custom order"
               rightBtnText="Exisiting inventory"
             />
             <Section
               title="Model 3"
               description="Order Online for Touchless Delivery"
               backgroundIMg="model-3.jpg"
               leftBtnText="Custom order"
               rightBtnText="Exisiting inventory"
             />
             <Section
               title="Model X"
               description="Order Online for Touchless Delivery"
               backgroundIMg="model-x.jpg"
               leftBtnText="Custom order"
               rightBtnText="Exisiting inventory"
             />
             <Section
               title="Lowest Cost Solar Panels in America"
               description="Money-back guarantee"
               backgroundIMg="solar-panel.jpg"
               leftBtnText="Order now"
               rightBtnText="Learn more"
             />
             <Section
               title="Accessories"
               description=""
               backgroundIMg="accessories.jpg"
               leftBtnText="Shop now"
             />
         </Container>

            );
}
export default Home;
const div = styled.div
const Container = div`
height:100vh;
`


