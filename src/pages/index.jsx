import React from 'react'
import Flex from '@ninetynine/react-flex'

import Clickable from '../components/clickable'
import Icon from '../components/icon'

export default () => (
  <Flex page>
    <div className={'text-center'}>
      <h1 className={'title'}>099</h1>
      <Clickable onClick={() => (
        window.open('https://github.com/ninetynine', '_blank').focus()
      )}>
        <Icon type={'brand'} icon={'github'} />
      </Clickable>
    </div>
  </Flex>
)
