import { Box } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import * as accordion from "@ui-machines/accordion"
import { useMachine, useSetup } from "@ui-machines/react"

const items = [
  {
    title: "Watercraft",
    desc: "Yatch, Boats and Dinghies",
    content: "Sample accordion content",
  },
  {
    title: "Automobiles",
    desc: "Cars, Trucks and Vans",
    content: "Sample accordion content",
  },
  {
    title: "Aircrafts",
    desc: "Airplanes, Helicopters and Rockets",
    content: "Sample accordion content",
  },
]

type AccordionProps = {
  controls: {
    collapsible: boolean
    multiple: boolean
  }
}

export function Accordion(props: AccordionProps) {
  const [state, send] = useMachine(accordion.machine, {
    context: props.controls,
  })

  const api = accordion.connect(state, send)

  const ref = useSetup<HTMLDivElement>({ send, id: "1" })

  return (
    <Box ref={ref} {...api.rootProps}>
      {items.map((item) => (
        <Box
          bg="white"
          borderWidth="1px"
          fontSize="sm"
          key={item.title}
          {...api.getItemProps({ value: item.title })}
        >
          <h3>
            <chakra.button
              width="full"
              py="2"
              px="3"
              textAlign="start"
              cursor="pointer"
              {...api.getTriggerProps({ value: item.title })}
              _focusVisible={{
                outline: "2px solid #0070f3",
              }}
            >
              <Box fontWeight="semibold">{item.title}</Box>
              <Box fontSize="xs" color="gray.600">
                {item.desc}
              </Box>
            </chakra.button>
          </h3>
          <Box
            width="full"
            py="2"
            px="3"
            {...api.getContentProps({ value: item.title })}
          >
            {item.content}
          </Box>
        </Box>
      ))}
    </Box>
  )
}