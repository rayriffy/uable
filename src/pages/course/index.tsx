import React, { useMemo } from 'react'

import {
  AspectRatioBox,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  PseudoBox,
  Text,
} from '@chakra-ui/core'
import { NextPage } from 'next'
import NextLink from 'next/link'
import Lorem from 'react-lorem-component'

import { FooterUser } from '../../core/components/footerUser'
import { NavUser } from '../../core/components/navUser'

import { getShadow } from '../../core/services/getShadow'

const Page: NextPage = (props) => {
  const rand = useMemo(() => Math.floor(Math.random() * 100) % 5, [])

  return (
    <React.Fragment>
      <NavUser />
      <Box pb={16} px={6}>
        <Box py={4}>
          <Box position='relative' borderRadius={8} overflow='hidden'>
            <AspectRatioBox ratio={16 / 8}>
              <Image
                src='https://api.kotori.love/pixiv/image/i.pximg.net/c/600x1200_90/img-master/img/2019/12/18/00/53/22/78347378_p0_master1200.jpg'
                alt='pixiv'
                objectFit='cover'
              />
            </AspectRatioBox>
            <Flex
              align='flex-end'
              bg='rgba(0,0,0,0.5)'
              position='absolute'
              top={0}
              bottom={0}
              left={0}
              right={0}>
              <Box p={6}>
                <Heading size='xl' color='white'>
                  Course name
                </Heading>
                <Text color='white'>Course description</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Flex py={2} align='center'>
          <Flex align='center'>
            {Array.from({ length: 5 }).map((_, j) => (
              <Box pl={j === 0 ? undefined : 2} key={`course-star-${j}`}>
                <Icon
                  name='star'
                  color={`${j <= rand ? 'orange' : 'gray'}.400`}
                />
              </Box>
            ))}
          </Flex>
          <Box mx='auto' />
          <Flex justify='center' wrap='wrap'>
            <Text pb={1}>999 Baht</Text>
            <NextLink href='/course/checkout'>
              <Button w='100%' size='sm' variantColor='green'>
                Purchase
              </Button>
            </NextLink>
          </Flex>
        </Flex>
        <Box py={4}>
          <Box p={5} borderRadius={10} bg='white' {...getShadow('xl')}>
            <Heading size='lg' pb={2}>
              Course description
            </Heading>
            <Text>
              <Lorem count={2} />
            </Text>
          </Box>
        </Box>
        <Box py={4}>
          <Box p={5} borderRadius={10} bg='white' {...getShadow('xl')}>
            <Heading size='lg' pb={2}>
              Test Description
            </Heading>
            <Text>
              <Lorem count={1} />
            </Text>
          </Box>
        </Box>
        OK
      </Box>
      <FooterUser />
    </React.Fragment>
  )
}

export default Page