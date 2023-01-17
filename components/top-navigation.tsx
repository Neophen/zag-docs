import { Badge, Box, Flex, HStack } from "@chakra-ui/layout"
import { GithubIcon } from "components/icons"
import { ThemeToggle } from "components/theme-toggle"
import { FaDiscord } from "react-icons/fa"
import siteConfig from "site.config"
import { IconLink } from "./icon-link"
import { LogoWithLink } from "./logo"
import { MobileNavigation } from "./mobile-navigation"
// import { WorkshopLink } from "./workshop-link"

export function TopNavigation() {
  return (
    <Box
      bg="whiteAlpha.900"
      backdropFilter="auto"
      backdropBlur="sm"
      position="sticky"
      top="0"
      width="full"
      zIndex={50}
      py="4"
      borderBottomWidth="1px"
      borderBottomColor="gray.100"
      overflowX="hidden"
      _dark={{
        borderBottomColor: "gray.700",
        bg: "rgba(26, 32, 44, 0.92)",
      }}
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="8xl"
        mx="auto"
        px={{ base: "4", sm: "6", md: "8" }}
      >
        <HStack spacing="3">
          <LogoWithLink />
          <Badge
            bg="orange.100"
            color="orange.700"
            px="2"
            py="0.5"
            fontSize="xs"
            letterSpacing="wider"
            fontWeight="semibold"
            display={{ base: "none", sm: "block"}}
            _dark={{
              borderBottomColor: "gray.700",
              bg: "orange.900",
              color: "orange.300",
            }}
          >
            BETA
          </Badge>
          {/* <WorkshopLink /> */}
        </HStack>
        <HStack spacing="8">
          <nav hidden>
            <HStack
              as="ul"
              spacing="8"
              listStyleType="none"
              fontWeight="semibold"
              fontSize="sm"
            >
              <li>Tutorials</li>
              <li>API</li>
              <li>Components</li>
            </HStack>
          </nav>
          <HStack spacing="4">
            <IconLink
              href={siteConfig.repo.url}
              icon={GithubIcon}
              label="View Zag.js on Github"
            />
            <IconLink
              href={siteConfig.discord.url}
              icon={FaDiscord}
              label="Join the Discord server"
            />
            <ThemeToggle />
            <MobileNavigation />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}
