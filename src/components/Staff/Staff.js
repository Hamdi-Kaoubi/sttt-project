import React from 'react'
import gerant from '../../assets/gerant.jpg'
import { Card, CardBody, Text, Heading, Stack, Image } from '@chakra-ui/react'
import './Staff.css'
import { Helmet } from 'react-helmet'

const Staff = () => {
  return (
    <React.Fragment>
    <Helmet>
        <title>STTT Staff</title>
        <meta name='description' content='STTT has a motivated and discipline team that works in every condition.'/>
        <meta name="keywords" content="telecommunication, technology, network, wifi, optic-fibre"/>
    </Helmet>
    <div className='staff'>
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  width='800px'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={gerant}
    alt=''
  />
  <Stack>
    <CardBody style={{display: 'flex', flexDirection: 'column', alignItems:'flex-start'}}>
      <Heading size='md' color='#00296b'>Azizi Habib</Heading>
      <Text py='2'>
        <strong>Poste: </strong>Gerant de la STTT
      </Text>
      <Text>
        <strong>Années d'experience: </strong> 4 années
      </Text>
    </CardBody>
  </Stack>
</Card>
    </div>
    </React.Fragment>
  )
}

export default Staff