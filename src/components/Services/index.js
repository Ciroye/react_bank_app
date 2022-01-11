import React from 'react'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesIcon,
  ServicesCard,
  ServicesH2,
  ServicesP,
} from './Services'
import Icon1 from '../../images/money.svg'
import Icon2 from '../../images/car.svg'
import Icon3 from '../../images/currency.svg'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            We help reduce your fess and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual offices</ServicesH2>
          <ServicesP>
            You can access our platform online anywhere in the world
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium benefits</ServicesH2>
          <ServicesP>Unlock our special membership card</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
