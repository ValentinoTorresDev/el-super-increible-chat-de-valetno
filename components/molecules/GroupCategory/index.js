import { ConatinerGroupCategory, ContainerChecked, BackgroundIconCheck } from './styles'
import { Icon, Text } from '../../atoms'
import { Check } from '../../../icons'

const GroupCategory = ({ title, img, onChange, id }) => {
  return (
    <ConatinerGroupCategory img={img}>
      <input type='checkbox' onChange={(e) => onChange(e, id)} />
      <ContainerChecked>
        <BackgroundIconCheck>
          <Icon height={{ mobile: '16px', tablet: '24px', desktop: '32px' }}>
            <Check />
          </Icon>
        </BackgroundIconCheck>
        <Text
          size={{ mobile: '14px', tablet: '16px', desktop: '18px' }}
          m={{ mobile: '4px 10px 0 10px', tablet: '10px 16px 0 16px', desktop: '20px 20px 0 20px' }}
          align='center'
        >
          {title}
        </Text>
      </ContainerChecked>
    </ConatinerGroupCategory>
  )
}

export default GroupCategory
