import React, { useState, useEffect, Children } from 'react'
import { CSSTransition } from 'react-transition-group'

interface IProps {
  children: React.ReactElement | React.ReactElement[]
  classNames: string
  timeout: number
}

const Transition = (props: IProps): any => {
  const { children, classNames, timeout } = props
  const activeIndex = Children.map(children, child => child.props.in).indexOf(true)

  let [active, setActive] = useState<number | null>(activeIndex)

  useEffect(() => {
    if (active === activeIndex) {
      return setActive(active = activeIndex)
    }
    if (active === -1) {
      return setActive(active = 0)
    }
    setActive(active = null)
  })

  return (
    Children.map(children, (child, index) => {
      return (
        <CSSTransition
          in={active === index}
          timeout={timeout}
          classNames={classNames}
          unmountOnExit
          onExited={() => setActive(active = activeIndex)}
          key={index}
        >
          {child}
        </CSSTransition>
      )
    })
  )
}

interface IBoxProps {
  children: React.ReactElement
  in: boolean
}

Transition.Box = ({ children }: IBoxProps) => children

export default Transition
